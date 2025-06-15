
import { useEffect, useState } from 'react';

export const GeometricShapes = () => {
  const [shapes, setShapes] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    rotation: number;
    type: 'circle' | 'square' | 'triangle';
    delay: number;
  }>>([]);

  useEffect(() => {
    const newShapes = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 40 + 20,
      rotation: Math.random() * 360,
      type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as 'circle' | 'square' | 'triangle',
      delay: Math.random() * 10,
    }));
    setShapes(newShapes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute opacity-20"
          style={{
            left: `${shape.x}%`,
            top: `${shape.y}%`,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            transform: `rotate(${shape.rotation}deg)`,
            animation: `float 15s ease-in-out infinite`,
            animationDelay: `${shape.delay}s`,
          }}
        >
          {shape.type === 'circle' && (
            <div className="w-full h-full rounded-full border border-white/10 animate-pulse" />
          )}
          {shape.type === 'square' && (
            <div className="w-full h-full border border-white/10 rotate-45 animate-spin" 
                 style={{ animationDuration: '20s' }} />
          )}
          {shape.type === 'triangle' && (
            <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-white/10" />
          )}
        </div>
      ))}
    </div>
  );
};
