import React, { createContext, useState } from 'react';
import axios from 'axios';

export const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [originalText, setOriginalText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('es');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    if (!originalText) return;

    const translateText = async () => {
      try {
        const response = await axios.post('/api/translate', {
          text: originalText,
          sourceLang: sourceLanguage,
          targetLang: targetLanguage
        });

        setTranslatedText(response.data.translatedText);
      } catch (error) {
        console.error('Translation failed:', error);
        setTranslatedText('Translation failed. Please try again.');
      }
    };

    translateText();
  }, [originalText, sourceLanguage, targetLanguage]);

  return (
    <TranslationContext.Provider
      value={{
        originalText,
        setOriginalText,
        translatedText,
        sourceLanguage,
        setSourceLanguage,
        targetLanguage,
        setTargetLanguage,
        isListening,
        setIsListening,
        isSpeaking,
        setIsSpeaking
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};
