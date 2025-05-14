import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  delay: number;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text, delay }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span>{displayedText}<span className="animate-blink">|</span></span>
  );
};

export default TypewriterEffect;