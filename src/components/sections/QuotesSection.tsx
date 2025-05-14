import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';

// Sanjib's memorable quotes and phrases
const quotes = [
  {
    id: 1,
    text: "Don't just identify problems—come with three possible solutions.",
    context: "Project Planning Meetings"
  },
  {
    id: 2,
    text: "A good plan today is better than a perfect plan tomorrow.",
    context: "During tight deadlines"
  },
  {
    id: 3,
    text: "Communication isn't about speaking; it's about being understood.",
    context: "Team workshops"
  },
  {
    id: 4,
    text: "We're not in the business of building products, we're in the business of solving problems.",
    context: "Client presentations"
  },
  {
    id: 5,
    text: "Take the time to celebrate small wins—they fuel the journey to big successes.",
    context: "Team retrospectives"
  },
  {
    id: 6,
    text: "The best risk management strategy is having a team that can adapt quickly.",
    context: "Leadership training"
  }
];

export const QuotesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  return (
    <section 
      ref={sectionRef}
      id="quotes"
      className="py-20 bg-amber-50"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Sanjib-isms</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Memorable quotes and wisdom from Sanjib that we'll continue to reference long after he's gone.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quotes.map((quote, index) => (
            <motion.div
              key={quote.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30, rotateZ: index % 2 === 0 ? -2 : 2 }}
              animate={isInView ? { opacity: 1, y: 0, rotateZ: index % 2 === 0 ? -2 : 2 } : { opacity: 0, y: 30, rotateZ: index % 2 === 0 ? -2 : 2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Quote className="w-8 h-8 text-amber-500 mb-4" />
              <blockquote className="text-xl font-medium text-blue-800 mb-4">
                "{quote.text}"
              </blockquote>
              <div className="text-right">
                <div className="inline-block bg-blue-100 px-3 py-1 rounded-full text-blue-600 text-sm">
                  {quote.context}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-gray-600 italic">
            Do you have a favorite Sanjib quote that's not listed here? Add it to the guestbook!
          </p>
        </motion.div>
      </div>
    </section>
  );
};