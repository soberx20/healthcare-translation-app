import React, { useContext } from 'react';
import { useContext } from './context/TranslationContext';

const TranslationDisplay = () => {
  const { translatedText, targetLanguage, isSpeaking, setIsSpeaking } = useContext(TranslationContext);

  const speakText = () => {
    if (!translatedText) return;

    const utterance = new SpeechSynthesisUtterance(translatedText);
    utterance.lang = targetLanguage;

    utterance.onstart = () => {
      setIsSpeaking(true);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    speechSynthesis.speak(utterance);
  };

  return (
    <div className="translation-display">
      <div className="translated-text">{translatedText}</div>
      <button onClick={speakText} disabled={isSpeaking || !translatedText}>
        {isSpeaking ? 'Speaking...' : 'Speak Translation'}
      </button>
    </div>
  );
};

export default TranslationDisplay;
