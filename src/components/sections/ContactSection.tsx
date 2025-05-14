import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, Calendar } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Reach out directly",
      action: "Sanjibdas0289@gmail.com",
      link: "mailto:Sanjibdas0289@gmail.com"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect professionally",
      action: "View Profile",
      link: "https://www.linkedin.com/in/sanjib-das-0476a2134/"
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Virtual coffee chat",
      action: "Book Time",
      link: "mailto:Sanjibdas0289@gmail.com"
    }
  ];
  
  return (
    <section 
      ref={sectionRef}
      id="contact"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Stay Connected</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Just because Sanjib is leaving doesn't mean your relationship has to end. 
            Here's how you can keep in touch with him after his departure.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 rounded-lg p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <method.icon className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">{method.title}</h3>
              <p className="text-gray-600 mb-4">{method.description}</p>
              <a 
                href={method.link} 
                className="inline-block bg-white hover:bg-blue-700 hover:text-white text-blue-700 border border-blue-700 font-medium px-4 py-2 rounded-md transition-colors duration-300"
                target='_blank'
              >
                {method.action}
              </a>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};