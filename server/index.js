import dotenv from 'dotenv';
import {GoogleGenerativeAI} from '@google/generative-ai';

dotenv.config();
console.log('Loaded API Key:', process.env.GEMINI_API_KEY);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function run() {
  const model = genAI.getGenerativeModel({model:'gemini-2.5-flash-preview-tts'});
  const prompt = 'Sing along very happily as if you are ariana grande, and you are singing a song about the weather.';
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();


