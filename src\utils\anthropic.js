import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  apiKey: import.meta.env.VITE_ANTHROPIC_API_KEY,
});

export async function generateResponse(message) {
  try {
    const completion = await anthropic.completions.create({
      model: "claude-v1",
      prompt: `Human: ${message}\n\nAssistant: `,
      max_tokens_to_sample: 300,
    });

    return completion.completion;
  } catch (error) {
    console.error('Error generating response:', error);
    return 'Sorry, I encountered an error while processing your request.';
  }
}
