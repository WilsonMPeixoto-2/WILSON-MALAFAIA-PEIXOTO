import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found in environment variables");
  }
  return new GoogleGenAI({ apiKey });
};

export const analyzeAssetImage = async (base64Image: string): Promise<string> => {
  try {
    const ai = getAiClient();
    // Strip prefix if present (e.g., "data:image/jpeg;base64,")
    const cleanBase64 = base64Image.split(',')[1] || base64Image;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: 'image/jpeg',
              data: cleanBase64,
            },
          },
          {
            text: "Analise esta imagem de um bem patrimonial escolar para processo de baixa. Descreva o objeto e identifique danos visíveis, desgaste, ferrugem ou defeitos que justifiquem a baixa (categorias: Imprestabilidade, Obsolescência ou Desuso). Seja técnico, objetivo e formal. Max 60 palavras. Responda em Português do Brasil."
          },
        ],
      },
    });

    return response.text || "Análise indisponível.";
  } catch (error) {
    console.error("Gemini Image Analysis Error:", error);
    return "Erro ao analisar a imagem. Tente novamente.";
  }
};

export const generateFormalJustification = async (
  reason: string,
  userNotes: string,
  conditionNotes: string,
  assetDesc: string
): Promise<string> => {
  try {
    const ai = getAiClient();
    const prompt = `
      Atue como um gestor patrimonial da 4ª CRE (Coordenadoria Regional de Educação). Escreva uma justificativa técnica para o laudo de baixa de bens (Despacho de Baixa).
      
      Contexto:
      - Item: ${assetDesc}
      - Motivo da Baixa (POP): ${reason}
      - Notas do Usuário: "${userNotes}"
      - Estado de Conservação (Análise Visual): "${conditionNotes}"

      Instruções:
      Escreva um parágrafo único, formal e técnico, adequado para documentos oficiais do SEI! RIO. Justifique claramente por que o bem não serve mais à administração pública (custo de reparo inviável, tecnologia obsoleta, etc.). Não use formatação markdown. Responda em Português.
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "";
  } catch (error) {
    console.error("Gemini Text Generation Error:", error);
    return "Erro ao gerar justificativa. Por favor escreva manualmente.";
  }
};