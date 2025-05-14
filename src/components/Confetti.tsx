import React, { useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';

export const Confetti: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const myConfetti = confetti.create(canvas, {
      resize: true,
      useWorker: true
    });
    
    // Random confetti explosion
    const duration = 3 * 1000;
    const end = Date.now() + duration;
    
    const frame = () => {
      myConfetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FFD700', '#1E40AF', '#FFA500', '#FFFFFF']
      });
      
      myConfetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FFD700', '#1E40AF', '#FFA500', '#FFFFFF']
      });
      
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    
    frame();
    
    return () => {
      // Cleanup confetti canvas
      myConfetti.reset();
    };
  }, []);
  
  return (
    <>
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-50"
      style={{ width: '100vw', height: '100vh' }}
    />
    </>
  );
};
