import { GoogleGenAI, Type } from "@google/genai";

export const generateVocabList = async (topic: string): Promise<any[]> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `Generate a list of 10 essential English vocabulary words related to the topic: "${topic}". 
  Provide the Burmese translation for each.
  Provide a simple phonetic pronunciation guide (IPA or similar) for the English word.
  Ensure the Burmese translation is accurate and natural.
  Return the result as a JSON array.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              english: { type: Type.STRING },
              burmese: { type: Type.STRING },
              pronunciation_guide: { type: Type.STRING, description: "Phonetic pronunciation, e.g., 'bruːm'" },
              category: { type: Type.STRING, description: "One of: cleaning, laundry, kitchen, general, bathroom" }
            },
            required: ["english", "burmese", "pronunciation_guide"]
          }
        }
      }
    });

    const text = response.text;
    if (!text) return [];
    
    return JSON.parse(text);
  } catch (error) {
    console.error("Error generating vocab:", error);
    throw error;
  }
};