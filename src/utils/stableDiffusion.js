import axios from 'axios';

const STABLE_DIFFUSION_API_KEY = 'your_stable_diffusion_api_key';
const STABLE_DIFFUSION_API_URL = 'https://api.stability.ai/v1/generation/stable-diffusion-xl-beta-v2-2-2/text-to-image';

export async function generateBackground() {
  try {
    const response = await axios.post(
      STABLE_DIFFUSION_API_URL,
      {
        text_prompts: [{ text: "Fantasy role-playing game background" }],
        cfg_scale: 7,
        clip_guidance_preset: 'FAST_BLUE',
        height: 512,
        width: 512,
        samples: 1,
        steps: 30,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${STABLE_DIFFUSION_API_KEY}`,
        },
      }
    );

    return response.data.artifacts[0].base64;
  } catch (error) {
    console.error('Error generating background:', error);
    return null;
  }
}
