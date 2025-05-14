import React, { useState, useEffect } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { MainContent } from './components/MainContent';
import { AnimatePresence } from 'framer-motion';
import './index.css';

function App() {
  const [showMainContent, setShowMainContent] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Set loaded to true after a short delay to allow for initial animations
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <AnimatePresence mode="wait">
        {!showMainContent ? (
          <WelcomeScreen
            onEnter={() => setShowMainContent(true)}
            loaded={loaded}
            key="welcome"
          />
        ) : (
          <MainContent key="main-content" />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
