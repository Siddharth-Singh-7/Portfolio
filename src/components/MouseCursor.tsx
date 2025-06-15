
import { useEffect, useState } from 'react';

export const MouseCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border-2 border-cyan-400 pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
        style={{
          transform: `translate(${mousePosition.x - 12}px, ${mousePosition.y - 12}px) scale(${isHovering ? 1.5 : 1})`,
        }}
      />
      
      {/* Trailing cursor */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-cyan-400 rounded-full pointer-events-none z-50 transition-all duration-300"
        style={{
          transform: `translate(${mousePosition.x - 4}px, ${mousePosition.y - 4}px)`,
          opacity: 0.7,
        }}
      />
      
      {/* Glow effect */}
      <div
        className="fixed top-0 left-0 w-20 h-20 rounded-full pointer-events-none z-40 transition-all duration-500"
        style={{
          transform: `translate(${mousePosition.x - 40}px, ${mousePosition.y - 40}px)`,
          background: 'radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, transparent 70%)',
        }}
      />
    </>
  );
};
