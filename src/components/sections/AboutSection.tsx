import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Target, Users, TrendingUp } from 'lucide-react';

const achievements = [
  {
    icon: Target,
    title: 'Project Success Rate',
    description: 'Led 35+ successful projects with a 98% on-time delivery rate',
  },
  {
    icon: Users,
    title: 'Team Growth',
    description: 'Expanded and mentored the project management team from 3 to 12 members',
  },
  {
    icon: TrendingUp,
    title: 'Process Optimization',
    description: 'Implemented methodologies that improved team efficiency by 40%',
  },
  {
    icon: Award,
    title: 'Recognition',
    description: 'Recipient of the Excellence in Leadership award three years in a row',
  },
];

export const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  
  return (
    <section 
      ref={sectionRef}
      id="about"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">About Sanjib</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            For seven remarkable years, Sanjib has been the driving force behind our project management team,
            delivering exceptional results and inspiring everyone around him.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Leadership Journey</h3>
            <p className="text-gray-700 mb-4">
              Sanjib joined our company in 2018 as a Senior Project Manager and quickly demonstrated
              his exceptional leadership abilities. Within two years, he was promoted to Head of Project Management,
              where he revolutionized our approach to project execution and team development.
            </p>
            <p className="text-gray-700 mb-4">
              His strategic vision helped the company navigate through challenging market conditions
              while maintaining growth and team morale. Sanjib's ability to anticipate problems before they arise
              and his innovative solutions to complex challenges have been invaluable to our success.
            </p>
            <p className="text-gray-700">
              Beyond his technical expertise, Sanjib's empathetic leadership style created a
              culture of trust and collaboration that will remain his lasting legacy.
            </p>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Key Contributions</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div className="ml-3">
                  <p className="text-gray-700">
                    <span className="font-semibold">Enterprise Project Framework:</span> Developed and implemented a 
                    company-wide project management methodology that became the standard for all departments.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div className="ml-3">
                  <p className="text-gray-700">
                    <span className="font-semibold">Client Relationship Management:</span> Established our customer-first 
                    approach that improved client satisfaction scores by 45%.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div className="ml-3">
                  <p className="text-gray-700">
                    <span className="font-semibold">Mentorship Program:</span> Created a structured mentoring system 
                    that has helped over 30 employees advance their careers within the organization.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div className="ml-3">
                  <p className="text-gray-700">
                    <span className="font-semibold">Crisis Management:</span> Successfully guided the team through 
                    the pandemic transition to remote work without missing a single project deadline.
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-blue-50 rounded-lg p-6 text-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <item.icon className="w-8 h-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};