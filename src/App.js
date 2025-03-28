import React from 'react';
import './App.css';
import VoiceToText from './components/VoiceToText';
import TranslationDisplay from './components/TranslationDisplay';
import LanguageSelector from './components/LanguageSelector';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Healthcare Translation App</h1>
      </header>
      <main>
        <LanguageSelector />
        <div className="translation-container">
          <VoiceToText />
          <TranslationDisplay />
        </div>
      </main>
    </div>
  );
}

export default App;
