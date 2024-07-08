import { OpenAIEmbeddings } from "@langchain/openai";

export function loadEmbeddingsModelOpenAI() {
  return new OpenAIEmbeddings({
    openAIApiKey: process.env.OPENAI_API_KEY,
    modelName: "text-embedding-3-large",
  });
}
