import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const WhatsNextSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  // Countdown timer
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    // Set the date to countdown to (example: 1 month from now)
    const futureDate = new Date();
    futureDate.setMonth(futureDate.getMonth() + 1);
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = futureDate.getTime() - now;
      
      if (distance < 0) {
        clearInterval(interval);
        return;
      }
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      setCountdown({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section 
      ref={sectionRef}
      id="whats-next"
      className="py-20 bg-gradient-to-br from-amber-500 to-amber-600 text-white"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Next for Sanjib</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-amber-50">
            As we celebrate Sanjib's contributions, we also look forward to his exciting new chapter.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-4">New Adventure</h3>
              <p className="text-amber-50 mb-4">
                Sanjib will be joining InnoTech Solutions as their Director of Program Management, 
                where he'll be leading strategic initiatives in artificial intelligence and machine learning 
                applications for enterprise clients.
              </p>
              <p className="text-amber-50 mb-4">
                While we'll miss his daily presence, we're thrilled about this well-deserved opportunity
                and the impact he'll make in his new role.
              </p>
              <div className="flex justify-start mt-6">
                <button className="bg-white hover:bg-blue-50 text-amber-600 font-medium py-3 px-6 rounded-md transition-colors duration-300 inline-flex items-center">
                  <span>Read More</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">Time Until Last Day</h3>
              
              <div className="grid grid-cols-4 gap-4 mb-8">
                {[
                  { value: countdown.days, label: "Days" },
                  { value: countdown.hours, label: "Hours" },
                  { value: countdown.minutes, label: "Minutes" },
                  { value: countdown.seconds, label: "Seconds" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white text-amber-600 rounded-lg p-3 mb-2">
                      <span className="text-2xl md:text-3xl font-bold">{item.value}</span>
                    </div>
                    <span className="text-sm text-amber-100">{item.label}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-center text-amber-100">
                Let's make these last days memorable!
              </p>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-4">Farewell Celebration</h3>
          <p className="text-amber-50 max-w-3xl mx-auto mb-6">
            Join us for a special gathering to celebrate Sanjib's contributions and wish him well
            on his next chapter. There will be food, drinks, stories, and a few surprises!
          </p>
          
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-lg p-6 mb-6">
            <div className="grid grid-cols-2 gap-4 text-left">
              <div>
                <p className="text-amber-200 text-sm">Date & Time</p>
                <p className="font-bold">September 30, 2025 at 6:00 PM</p>
              </div>
              <div>
                <p className="text-amber-200 text-sm">Location</p>
                <p className="font-bold">The Atrium, 12th Floor</p>
              </div>
              <div>
                <p className="text-amber-200 text-sm">Dress Code</p>
                <p className="font-bold">Business Casual</p>
              </div>
              <div>
                <p className="text-amber-200 text-sm">RSVP By</p>
                <p className="font-bold">September 23, 2025</p>
              </div>
            </div>
          </div>
          
          <button className="bg-white hover:bg-blue-50 text-amber-600 font-medium py-3 px-6 rounded-md transition-colors duration-300">
            RSVP Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};