
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
      // Smooth interpolation with easing
      const ease = 0.15;
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
      {/* Main cursor - follows mouse exactly */}
      <div
        className="fixed top-0 left-0 w-4 h-4 rounded-full border border-cyan-400/60 pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          transform: `translate3d(${mousePosition.x - 8}px, ${mousePosition.y - 8}px, 0) scale(${isHovering ? 2 : 1})`,
          willChange: 'transform',
        }}
      />
      
      {/* Trailing cursor - smooth follow */}
      <div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400/30 pointer-events-none z-40 transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(${smoothPosition.x - 16}px, ${smoothPosition.y - 16}px, 0) scale(${isHovering ? 1.5 : 1})`,
          willChange: 'transform',
        }}
      />
      
      {/* Glow effect - even smoother follow */}
      <div
        className="fixed top-0 left-0 w-16 h-16 rounded-full pointer-events-none z-30 transition-all duration-300 ease-out"
        style={{
          transform: `translate3d(${smoothPosition.x - 32}px, ${smoothPosition.y - 32}px, 0) scale(${isHovering ? 1.2 : 1})`,
          background: 'radial-gradient(circle, rgba(0, 255, 255, 0.1) 0%, transparent 70%)',
          willChange: 'transform',
        }}
      />
    </>
  );
};
