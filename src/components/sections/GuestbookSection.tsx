import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, ThumbsUp } from 'lucide-react';

export const GuestbookSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setMessage('');
      setName('');
      setRelationship('');
      
      // Reset submitted state after a delay
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };
  
  // Sample recent entries
  const recentEntries = [
    {
      id: 1,
      name: "Lisa Johnson",
      relationship: "Marketing Team",
      message: "Sanjib, your leadership during the rebrand was exceptional. Thank you for your guidance!",
      date: "2 days ago",
      likes: 12
    },
    {
      id: 2,
      name: "Carlos Mendez",
      relationship: "Engineering",
      message: "Working with you on the enterprise platform was a highlight of my career. Best wishes!",
      date: "3 days ago",
      likes: 8
    },
    {
      id: 3,
      name: "Aisha Patel",
      relationship: "Client Partner",
      message: "Our clients still talk about how you turned around that challenging situation. You'll be missed!",
      date: "5 days ago",
      likes: 15
    }
  ];
  
  return (
    <section 
      ref={sectionRef}
      id="guestbook"
      className="py-20 bg-blue-50"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Guestbook</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Leave a message for Sanjib to remember you by. Share your favorite memory, 
            a piece of advice, or simply wish him well on his next adventure.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Leave a Message</h3>
              
              {submitted ? (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                  <ThumbsUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-blue-800 font-medium">Thank you for your message!</p>
                  <p className="text-blue-600 text-sm">Your note has been added to Sanjib's farewell collection.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      placeholder="John Smith"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="relationship" className="block text-gray-700 font-medium mb-2">Relationship to Sanjib</label>
                    <input 
                      type="text" 
                      id="relationship" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      placeholder="Team member, Client, etc."
                      value={relationship}
                      onChange={(e) => setRelationship(e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                      placeholder="Share your favorite memory or wish Sanjib well..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-300 flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <span className="inline-flex items-center">
                        <Send className="mr-2 w-4 h-4" />
                        Submit Message
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Recent Entries</h3>
              
              <div className="space-y-6">
                {recentEntries.map((entry) => (
                  <div key={entry.id} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold text-blue-800">{entry.name}</h4>
                        <p className="text-blue-600 text-sm">{entry.relationship}</p>
                      </div>
                      <span className="text-gray-500 text-sm">{entry.date}</span>
                    </div>
                    <p className="text-gray-700 mb-3">{entry.message}</p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <button className="inline-flex items-center hover:text-blue-600">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        Like ({entry.likes})
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <button className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                  View all entries
                  <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};