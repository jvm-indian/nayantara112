const router = require('express').Router();
const { GoogleGenAI } = require('@google/genai');

router.post('/generate', async (req, res) => {
  try {
    const { question, chat_history } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      return res.status(400).json({ error: "GEMINI_API_KEY is not set in backend/.env" });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    // Format chat history for Gemini
    const contents = [];
    if (chat_history && Array.isArray(chat_history)) {
      chat_history.forEach(msg => {
        contents.push({ role: msg.sender === 'You' ? 'user' : 'model', parts: [{ text: msg.text }] });
      });
    }
    contents.push({ role: 'user', parts: [{ text: question }] });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: contents,
      config: {
        systemInstruction: "You are a Bhagavad Gita AI. You provide wisdom, comfort, and guidance strictly inspired by the teachings of the Bhagavad Gita and ancient Indian philosophy. Do not act like a generic AI.",
      }
    });

    res.json({
      answer: response.text,
      chat_history: chat_history || []
    });
  } catch (err) {
    console.error("Gemini API Error:", err);
    res.status(500).json({ error: err.message || "Failed to communicate with Gemini API" });
  }
});

module.exports = router;
