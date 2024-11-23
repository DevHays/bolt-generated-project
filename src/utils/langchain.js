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
playing game. Respond with a JSON object containing a 'message' field for the game master's response and a 'characterStatus' field for any updates to the player's status. Player input: ${message}`,
      });

      return response.response;
    } catch (error) {
      console.error('Error processing message:', error);
      return JSON.stringify({
        message: "I'm sorry, there was an error processing your message. Please try again.",
        characterStatus: null
      });
    }
  };

  return { processMessage };
}
