import { NextRequest, NextResponse } from "next/server";
import type { Message as VercelChatMessage } from "ai";

import type { Document } from "@langchain/core/documents";
import { HumanMessage, AIMessage, ChatMessage } from "@langchain/core/messages";

import { ChatOpenAI } from "@langchain/openai";
import { loadEmbeddingsModelOpenAI } from "../utils/embeddings";
import { loadRetriever } from "../utils/vector_store";
import { createRAGChain } from "../utils/ragChain";

export const runtime = process.env.NEXT_PUBLIC_VECTORSTORE === "mongodb" ? "nodejs" : "edge";

const formatVercelMessages = (message: VercelChatMessage) => {
  if (message.role === "user") {
    return new HumanMessage(message.content);
  } else if (message.role === "assistant") {
    return new AIMessage(message.content);
  } else {
    console.warn(`Unknown message type passed: "${message.role}". Falling back to generic message type.`);
    return new ChatMessage({ content: message.content, role: message.role });
  }
};

/**
 * This handler initializes and calls a retrieval chain. It composes the chain using
 * LangChain Expression Language. See the docs for more information:
 *
 * https://js.langchain.com/docs/get_started/quickstart
 * https://js.langchain.com/docs/guides/expression_language/cookbook#conversational-retrieval-chain
 */

export async function POST(req: Request) {
  //
  try {
    const body = await req.json();
    const messages = body.messages ?? [];
    if (!messages.length) {
      throw new Error("No messages provided.");
    }
    const formattedPreviousMessages = messages.slice(0, -1).map(formatVercelMessages);
    const currentMessageContent = messages[messages.length - 1].content;
    const chatId = body.chatId;

    const model = new ChatOpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY,
      modelName: "gpt-4o",
      temperature: 0.5,
      // maxTokens: 1024,
      // topP: 0.9,
      // frequencyPenalty: 0.5,
      // presencePenalty: 0.3,
    });

    const embeddings = loadEmbeddingsModelOpenAI();

    let resolveWithDocuments: (value: Document[]) => void;
    const documentPromise = new Promise<Document[]>((resolve) => {
      resolveWithDocuments = resolve;
    });

    const retrieverInfo = await loadRetriever({
      chatId,
      embeddings,
      callbacks: [
        {
          handleRetrieverEnd(documents) {
            // Extract retrieved source documents so that they can be displayed as sources
            // on the frontend.
            resolveWithDocuments(documents);
          },
        },
      ],
    });

    const retriever = retrieverInfo.retriever;

    const ragChain = await createRAGChain(model, retriever);

    const stream = await ragChain.stream({
      input: currentMessageContent,
      chat_history: formattedPreviousMessages,
    });
    const documents = await documentPromise;
    const serializedSources = Buffer.from(
      JSON.stringify(
        documents.map((doc) => {
          return {
            pageContent: doc.pageContent.slice(0, 50) + "...",
            metadata: doc.metadata,
          };
        })
      )
    ).toString("base64");

    // Convert to bytes so that we can pass into the HTTP response
    const byteStream = stream.pipeThrough(new TextEncoderStream());

    return new Response(byteStream, {
      headers: {
        "x-message-index": (formattedPreviousMessages.length + 1).toString(),
        "x-sources": serializedSources,
      },
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
