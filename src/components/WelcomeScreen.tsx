import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Particles from './Particles';
import TypewriterEffect from './TypewriterEffect';

interface WelcomeScreenProps {
  onEnter: () => void;
  loaded: boolean;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onEnter, loaded }) => {
  const [showButton, setShowButton] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (loaded) {
      const timer = setTimeout(() => {
        setShowButton(true);
      }, 3500); // Show button after name animation completes
      
      return () => clearTimeout(timer);
    }
  }, [loaded]);

  useEffect(() => {
    if (showButton && buttonRef.current) {
      // Add pulse animation class once button is visible
      buttonRef.current.classList.add('animate-pulse');
    }
  }, [showButton]);

  return (
    <motion.div 
      className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-indigo-900 to-blue-800 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      transition={{ duration: 0.5 }}
    >
      <Particles />
      
      <motion.div 
        className="z-10 flex flex-col items-center justify-center px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-400">
          <TypewriterEffect text="Sanjib Das" delay={100} />
        </h1>
        
        <motion.div
          className="w-full max-w-lg h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent mb-8"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 2.5, duration: 1 }}
        />
        <motion.div
          className="relative w-32 h-32 md:w-40 md:h-40 mb-8 overflow-hidden rounded-full border-2 border-amber-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-blue-700/50 to-blue-900/70 backdrop-blur-sm" />
          <div 
            className="absolute inset-0 bg-[url('https://i.ibb.co/4Z4kqYXP/profile-image-1691128582956.webp')] bg-cover bg-center opacity-80"
            style={{ aspectRatio: '1/1' }}
          />
          {/* Add a placeholder div to maintain space while image loads */}
          <div className="absolute inset-0" style={{ aspectRatio: '1/1' }} />
        </motion.div>

        {showButton && (
          <motion.button
            ref={buttonRef}
            onClick={onEnter}
            className="bg-amber-500 hover:bg-amber-600 text-blue-900 font-semibold py-3 px-6 rounded-full flex items-center transition-all duration-300 transform hover:scale-105 shadow-lg group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Click to Celebrate
            <ChevronRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>
        )}
      </motion.div>
    </motion.div>
  );
};