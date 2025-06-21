import dotenv from 'dotenv';
import fs from 'fs';
import fetch from 'node-fetch';
import { GoogleGenerativeAI } from '@google/generative-ai';

function buildPrompt(userInput) {
  const systemPrompt = 'You are an AI lyricist. Write a 1 minute long song as a single flowing sentence with no line breaks, no punctuation, no headings, and no titles. Output only the lyrics text.';
  return `${systemPrompt}\n\nUser request: ${userInput}`;
}

dotenv.config();
console.log('Loaded Gemini API Key:', process.env.GEMINI_API_KEY);
console.log('Loaded ElevenLabs API Key:', process.env.ELEVENLABS_API_KEY);

const voiceMap = {
  'Voice 1': 'UgBBYS2sOqTuMpoF3BR0',
  'Voice 2': 'i4CzbCVWoqvD0P1QJCUL',
  'Voice 3': '6OzrBCQf8cjERkYgzSg8',
};
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateTextWithGemini(prompt) {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
  const result = await model.generateContent({
    contents: [{
      role: 'user',
      parts: [{ text: prompt }]
    }]
  });
  const response = await result.response;
  const text = response.text();
  console.log('Gemini Output:', text);
  const cleanedText = text.replace(/[\n\r]+/g, ' ').replace(/[.,!?]/g, '');
  console.log('Cleaned Gemini Output:', cleanedText);
  return cleanedText;
}

async function synthesizeWithElevenLabs(text) {
  const selectedVoiceName = 'Voice 1';
  const voiceId = voiceMap[selectedVoiceName];
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'xi-api-key': process.env.ELEVENLABS_API_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: text,
      model_id: 'eleven_turbo_v2',
      voice_settings: {
        stability: 0,
        similarity_boost: 0.7,
        style: 1.0,
        use_speaker_boost: true,
        speed: 1.1,
      }
    })
  });

  if (!response.ok) {
    console.error('ElevenLabs API Error:', response.status, await response.text());
    return;
  }

  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = Buffer.from(arrayBuffer);
  fs.writeFileSync('output.mp3', audioBuffer);
  console.log('Audio saved to output.mp3');
}

async function run() {
  const userInput = 'Ariana Grande singing about the weather';
  const prompt = buildPrompt(userInput);
  const generatedText = await generateTextWithGemini(prompt);
  await synthesizeWithElevenLabs(generatedText);
}

run();