
import { useEffect, useRef, useState } from 'react';

export const InteractiveGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (gridRef.current) {
        const rect = gridRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const gridItems = Array.from({ length: 400 }, (_, i) => {
    const row = Math.floor(i / 20);
    const col = i % 20;
    const distance = Math.sqrt(
      Math.pow((col * 5) - mousePosition.x, 2) + 
      Math.pow((row * 5) - mousePosition.y, 2)
    );
    const intensity = Math.max(0, 1 - distance / 50);
    
    return { id: i, intensity };
  });

  return (
    <div
      ref={gridRef}
      className="fixed inset-0 pointer-events-none z-5 opacity-30"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
      }}
    >
      <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
        {gridItems.map((item) => (
          <div
            key={item.id}
            className="border border-white/5 transition-all duration-300"
            style={{
              backgroundColor: `rgba(255, 255, 255, ${item.intensity * 0.1})`,
              borderColor: `rgba(255, 255, 255, ${0.05 + item.intensity * 0.15})`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
