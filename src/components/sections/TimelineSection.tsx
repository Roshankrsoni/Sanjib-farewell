import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CalendarDays, Star, TrendingUp, Users, Award, Rocket } from 'lucide-react';

// Timeline events
const timelineEvents = [
  {
    id: 1,
    year: "2018",
    title: "Joined the Company",
    description: "Sanjib joined as Senior Project Manager, bringing 10 years of prior experience",
    icon: CalendarDays
  },
  {
    id: 2,
    year: "2019",
    title: "First Major Success",
    description: "Led the Atlas project to completion, 2 weeks ahead of schedule and under budget",
    icon: Star
  },
  {
    id: 3,
    year: "2020",
    title: "Promotion to Team Lead",
    description: "Took over leadership of the project management department during challenging times",
    icon: TrendingUp
  },
  {
    id: 4,
    year: "2021",
    title: "Team Expansion",
    description: "Grew the project management team from 3 to 8 members, implementing structured mentoring",
    icon: Users
  },
  {
    id: 5,
    year: "2022",
    title: "Excellence Award",
    description: "Recognized with the company's highest honor for leadership excellence",
    icon: Award
  },
  {
    id: 6,
    year: "2023-2025",
    title: "Enterprise Transformation",
    description: "Spearheaded the company-wide adoption of new methodologies that increased efficiency by 40%",
    icon: Rocket
  }
];

export const TimelineSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  return (
    <section 
      ref={sectionRef}
      id="timeline"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Sanjib's Journey</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            A timeline of key milestones and achievements during Sanjib's time with our company.
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 hidden md:block"></div>
          
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-full text-white flex items-center justify-center z-10 border-4 border-white shadow-lg hidden md:flex">
                    <event.icon className="w-5 h-5" />
                  </div>
                  
                  {/* Year marker (mobile only) */}
                  <div className="bg-blue-500 text-white font-bold px-4 py-2 rounded-full inline-block mb-4 md:hidden">
                    {event.year}
                  </div>
                  
                  {/* Content */}
                  <div className="w-full md:w-5/12 mb-8 md:mb-0">
                    <div className={`bg-blue-50 rounded-lg p-6 shadow-md ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                      <div className="hidden md:block text-xl font-bold text-blue-700 mb-2">{event.year}</div>
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">{event.title}</h3>
                      <p className="text-gray-700">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Empty space for alignment */}
                  <div className="w-full md:w-5/12"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};