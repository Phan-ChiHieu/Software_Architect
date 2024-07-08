import { NextResponse } from "next/server";
import generateRandomId from "../utils/random-id";

// langchain
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

import { loadEmbeddingsModelOpenAI } from "../utils/embeddings";
import { loadVectorStore } from "../utils/vector_store";

export async function POST(request: Request) {
  //
  const { fileUrl, fileName, vectorStoreId } = await request.json();

  const _namespace = generateRandomId();
  try {
    /* load from remote pdf URL */
    const response = await fetch(fileUrl);
    const buffer = await response.blob();
    const loader = new PDFLoader(buffer);
    const rawDocs = await loader.load();

    /* Split text into chunks */
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 200,
    });

    const splitDocs = await textSplitter.splitDocuments(rawDocs);
    // Necessary for Mongo - we'll query on this later.
    for (const splitDoc of splitDocs) {
      splitDoc.metadata.docstore_document_id = _namespace;
    }

    console.log("creating vector store...");

    /* create and store the embeddings in the vectorStore */
    const embeddings = loadEmbeddingsModelOpenAI();

    const store = await loadVectorStore({
      namespace: _namespace,
      embeddings,
    });

    const vectorstore = store.vectorstore;

    // embed the PDF documents
    await vectorstore.addDocuments(splitDocs);

    return NextResponse.json({
      text: "Successfully embedded pdf",
      id: _namespace,
    });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ error: "Failed to ingest your data" });
  }
  //
}
