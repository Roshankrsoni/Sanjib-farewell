import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="pt-6 text-center text-blue-300">
          <p>Created with <Heart className="inline-block w-4 h-4 text-red-400" /> by the team | © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};