import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentImage: string;
  onPrevious: () => void;
  onNext: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  currentImage,
  onPrevious,
  onNext,
  hasNext,
  hasPrevious,
}) => {
  // Close modal when Escape key is pressed
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrevious) onPrevious();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrevious, onNext, hasNext, hasPrevious]);

  // Prevent scrolling when modal is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 z-10 p-2 text-white bg-black/20 rounded-full hover:bg-black/40 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation buttons */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 sm:px-8">
            <button
              className={`p-2 rounded-full ${hasPrevious ? 'bg-black/20 hover:bg-black/40 text-white' : 'bg-black/10 text-gray-500 cursor-not-allowed'}`}
              onClick={(e) => {
                e.stopPropagation();
                if (hasPrevious) onPrevious();
              }}
              disabled={!hasPrevious}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              className={`p-2 rounded-full ${hasNext ? 'bg-black/20 hover:bg-black/40 text-white' : 'bg-black/10 text-gray-500 cursor-not-allowed'}`}
              onClick={(e) => {
                e.stopPropagation();
                if (hasNext) onNext();
              }}
              disabled={!hasNext}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Image container */}
          <motion.div
            className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={currentImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};