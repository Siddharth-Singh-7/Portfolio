
import { useEffect, useState, useRef } from 'react';

export const MouseCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const animationRef = useRef<number>();

  useEffect(() => {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const updateMousePosition = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setMousePosition({ x: targetX, y: targetY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const animatePosition = () => {
      const ease = 0.1;
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;
      
      setSmoothPosition({ x: currentX, y: currentY });
      animationRef.current = requestAnimationFrame(animatePosition);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    animationRef.current = requestAnimationFrame(animatePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed top-0 left-0 w-1 h-1 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          transform: `translate3d(${mousePosition.x - 2}px, ${mousePosition.y - 2}px, 0)`,
          willChange: 'transform',
        }}
      />
      
      {/* Trailing ring */}
      <div
        className="fixed top-0 left-0 w-8 h-8 border border-white/20 rounded-full pointer-events-none z-40 transition-all duration-200 ease-out"
        style={{
          transform: `translate3d(${smoothPosition.x - 16}px, ${smoothPosition.y - 16}px, 0) scale(${isHovering ? 1.5 : 1})`,
          willChange: 'transform',
        }}
      />
    </>
  );
};
