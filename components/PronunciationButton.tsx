import React, { useCallback } from 'react';
import { Volume2 } from 'lucide-react';

interface PronunciationButtonProps {
  text: string;
  size?: 'sm' | 'md';
}

export const PronunciationButton: React.FC<PronunciationButtonProps> = ({ text, size = 'md' }) => {
  const handleSpeak = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 0.9; // Slightly slower for learning
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Text-to-speech is not supported in this browser.");
    }
  }, [text]);

  const iconSize = size === 'sm' ? 16 : 20;

  return (
    <button
      onClick={handleSpeak}
      className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label={`Listen to pronunciation of ${text}`}
      title="Listen"
    >
      <Volume2 size={iconSize} />
    </button>
  );
};