import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const LegacySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  return (
    <section 
      ref={sectionRef}
      id="legacy"
      className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0 md:w-1/3">
              <div className="relative">
                <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                  <img 
                    src="https://i.ibb.co/DgmbRJBj/Ekta.jpg" 
                    alt="Sanjib's Quote" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-500 rounded-full flex items-center justify-center transform rotate-12">
                  <span className="text-blue-900 font-bold text-lg">Legacy</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 text-amber-300">In His Own Words</h3>
              <blockquote className="text-xl italic text-blue-50 mb-6">
                "Success is never about the individual, but always about the team. My goal has always been to build systems and foster relationships that empower everyone to achieve their best work."
              </blockquote>
              <p className="text-blue-200">
                This philosophy has been embedded into our company culture and will continue to guide how we approach project management, team development, and client relationships for years to come.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};