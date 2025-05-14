import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/90 to-blue-900/90" />
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          style={{ filter: 'blur(2px)' }}
        />
      </div>

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div
            className="md:w-1/2 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Thank You <span className="text-amber-400">Sanjib</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-100 mb-6">
              The Best Project Manager I've Worked With
            </h2>
            <p className="text-lg text-blue-200 max-w-xl mb-8">
              From the Planning sessions to debugging & deployments, you've been
              more than a manager - you've been a mentor and friend. This is my
              way of saying thank you for everything.
            </p>

          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
            animate={
              isInView
                ? { opacity: 1, scale: 1, rotateY: 0 }
                : { opacity: 0, scale: 0.8, rotateY: -180 }
            }
            transition={{ duration: 1.2, delay: 0.4, type: 'spring' }}
          >
            <div className="relative group cursor-pointer">
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-amber-400 to-amber-600 rounded-2xl transform rotate-3 scale-105 -z-10 group-hover:rotate-6 transition-transform duration-300"
                animate={{
                  scale: [1.05, 1.08, 1.05],
                  rotate: [3, 5, 3],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
              <div className="relative w-64 h-64 md:w-96 md:h-96 overflow-hidden rounded-2xl border-4 border-white shadow-2xl transform transition-transform duration-500 group-hover:scale-105">
                <motion.div
                  className="absolute inset-0 bg-[url('https://i.ibb.co/4Z4kqYXP/profile-image-1691128582956.webp')] bg-contain bg-center bg-no-repeat bg-white"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-blue-700/30 to-blue-900/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <motion.div
                className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm py-3 px-6 rounded-lg shadow-lg transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-blue-900 font-bold text-lg">
                Leader, Mentor & Friend
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated down arrow */}
      <motion.div 
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: 1, 
          y: [0, 10, 0],
        }}
        transition={{ 
          delay: 1.5,
          duration: 1.5, 
          repeat: Infinity, 
          repeatType: "loop" 
        }}
      >
        <div 
          className="relative bg-white/20 backdrop-blur-sm p-3 rounded-full cursor-pointer hover:bg-white/30 transition-colors duration-300 group shadow-lg hover:shadow-xl"
          onClick={() => {
            const nextSection = document.getElementById('memories');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <ChevronDown className="w-8 h-8 text-white" />
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white/90 text-blue-900 px-3 py-1 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Scroll Down
          </div>
        </div>
      </motion.div>
    </section>
  );
};
