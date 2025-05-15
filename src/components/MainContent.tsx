import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from './sections/HeroSection';
import { MemoriesSection } from './sections/MemoriesSection';
import { MessagesSection } from './sections/MessagesSection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './Footer';
import { Confetti } from './Confetti';
import { TimelineSection } from './sections/TimelineSection';
// import { LegacySection } from './sections/LegacySection';

export const MainContent: React.FC = () => {
  const [showConfetti, setShowConfetti] = React.useState(true);

  useEffect(() => {
    // Hide confetti after a few seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {showConfetti && <Confetti />}
      <main>
        <HeroSection />
        <MemoriesSection />
        <MessagesSection />
        {/* <TimelineSection /> */}
        <ContactSection />
      </main>

      <Footer />
    </motion.div>
  );
};
