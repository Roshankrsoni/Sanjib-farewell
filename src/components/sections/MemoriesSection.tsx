import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ImageModal } from '../ImageModal';

// Sample gallery items (would be replaced with actual data)
const memories = [
    {
    id: 4,
    image: "https://i.ibb.co/cSNWs60Z/New-Project.png",
  },

  {
    id: 2,
    image: "https://i.ibb.co/WNMscDbt/shared-image-1.jpg",
  },
  {
    id: 1,
    image: "https://i.ibb.co/wqM25Cq/New-Project-1.png",
  },
  {
    id: 3,
    image: "https://i.ibb.co/svkK97M6/shared-image.jpg",
  },

  {
    id: 5,
    image: "https://i.postimg.cc/T1G41JzH/shared-image-3.jpg",
  },
  {
    id: 6,
    image: "https://i.postimg.cc/g2Kpy4qd/shared-image-2.jpg",
  },
  
];

export const MemoriesSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  // State for image modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  return (
    <section 
      ref={sectionRef}
      id="memories"
      className="py-20 bg-blue-50"
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Memories Gallery</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            A visual journey through some of the memorable moments we've shared with Sanjib over the years.
          </p>
        </motion.div>
        
        <div className="relative mb-10">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {memories.map((memory, index) => (
              <motion.div
                key={memory.id}
                className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => {
                  setCurrentImageIndex(index);
                  setIsModalOpen(true);
                }}
              >
                <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                  <img 
                    src={memory.image} 
                    alt={`Memory ${memory.id}`}
                    className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
        
        {/* Image Modal for zoomed view */}
        <ImageModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          currentImage={memories[currentImageIndex]?.image || ''}
          onPrevious={() => setCurrentImageIndex(prev => Math.max(0, prev - 1))}
          onNext={() => setCurrentImageIndex(prev => Math.min(memories.length - 1, prev + 1))}
          hasPrevious={currentImageIndex > 0}
          hasNext={currentImageIndex < memories.length - 1}
        />
      </div>
    </section>
  );
};