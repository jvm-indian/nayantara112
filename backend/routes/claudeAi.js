const router = require('express').Router();
const { GoogleGenAI } = require('@google/genai');

router.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!process.env.GEMINI_API_KEY) {
      return res.status(400).json({ error: "GEMINI_API_KEY is not set in backend/.env" });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: "You are the central AI Brain of Nayanthara, a comprehensive health and cultural platform. Be helpful, concise, and intelligent.",
      }
    });

    res.json({ reply: response.text });
  } catch (err) {
    console.error("Gemini API Error:", err);
    res.status(500).json({ error: err.message || "Failed to communicate with Gemini API" });
  }
});

module.exports = router;
