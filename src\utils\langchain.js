import { OpenAI } from "langchain/llms/openai";
import { ConversationChain } from "langchain/chains";

const model = new OpenAI({ 
  openAIApiKey: import.meta.env.VITE_OPENAI_API_KEY,
  temperature: 0.9 
});

const chain = new ConversationChain({ llm: model });

export async function processWithLangChain(input) {
  try {
    const response = await chain.call({ input });
    return response.response;
  } catch (error) {
    console.error('Error processing with LangChain:', error);
    return 'Sorry, I encountered an error while processing your request with LangChain.';
  }
}
