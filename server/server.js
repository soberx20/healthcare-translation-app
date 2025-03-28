const express = require('express');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

// Translation endpoint
app.post('/api/translate', async (req, res) => {
  try {
    const { text, sourceLang, targetLang } = req.body;
    
    // Here we would integrate with OpenAI or another translation service
    // For now, let's return a mock response
    res.json({
      translatedText: `Translated text from ${sourceLang} to ${targetLang}: ${text}`,
      pronunciation: "Sample pronunciation"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Translation failed' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
