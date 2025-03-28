import React, { useState, useEffect } from 'react';
import { useContext } from './context/TranslationContext';

const VoiceToText = () => {
  const { setOriginalText, setIsListening } = useContext(TranslationContext);
  const [isListening, setIsListeningState] = useState(false);

  useEffect(() => {
    if (!window.SpeechRecognition && !window.webkitSpeechRecognition) {
      alert('Speech recognition not supported in this browser');
      return;
    }

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      const currentTranscript = event.results[event.results.length - 1][0].transcript;
      setOriginalText(currentTranscript);
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setIsListeningState(false);
      setIsListening(false);
    };

    return () => {
      recognition.stop();
    };
  }, []);

  const toggleListening = () => {
    setIsListeningState(!isListening);
    setIsListening(isListening => !isListening);
  };

  return (
    <div className="voice-to-text">
      <button onClick={toggleListening}>
        {isListening ? 'Stop Listening' : 'Start Listening'}
      </button>
      <div className="transcript"></div>
    </div>
  );
};

export default VoiceToText;
