
import { useEffect, useState, useRef } from 'react';

export const MouseCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const animationRef = useRef<number>();
  const trailIdRef = useRef(0);

  useEffect(() => {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const updateMousePosition = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setMousePosition({ x: targetX, y: targetY });
      
      // Add trail point with smoother trail
      trailIdRef.current += 1;
      setTrail(prev => [
        ...prev.slice(-12), // Keep more trail points for smoother effect
        { x: targetX, y: targetY, id: trailIdRef.current }
      ]);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const animatePosition = () => {
      // Much smoother easing for more fluid movement
      const ease = 0.08;
      const deltaX = targetX - currentX;
      const deltaY = targetY - currentY;
      
      // Apply smoother interpolation
      currentX += deltaX * ease;
      currentY += deltaY * ease;
      
      setSmoothPosition({ x: currentX, y: currentY });
      animationRef.current = requestAnimationFrame(animatePosition);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    animationRef.current = requestAnimationFrame(animatePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Enhanced trail effect with smoother transitions */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed top-0 left-0 w-1 h-1 bg-white/25 rounded-full pointer-events-none z-40 transition-opacity duration-150"
          style={{
            transform: `translate3d(${point.x - 2}px, ${point.y - 2}px, 0)`,
            opacity: (index + 1) / trail.length * 0.4,
            willChange: 'transform, opacity',
          }}
        />
      ))}
      
      {/* Main cursor dot with smoother scaling */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${mousePosition.x - 3}px, ${mousePosition.y - 3}px, 0) scale(${isClicking ? 0.7 : 1})`,
          willChange: 'transform',
        }}
      />
      
      {/* Outer ring with smoother following */}
      <div
        className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-40 transition-all duration-200 ease-out"
        style={{
          transform: `translate3d(${smoothPosition.x - 16}px, ${smoothPosition.y - 16}px, 0) scale(${isHovering ? 1.8 : 1})`,
          borderColor: isHovering ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.3)',
          willChange: 'transform',
        }}
      />
      
      {/* Magnetic field effect with enhanced smoothness */}
      <div
        className="fixed top-0 left-0 w-16 h-16 border border-white/10 rounded-full pointer-events-none z-30 transition-all duration-400 ease-out"
        style={{
          transform: `translate3d(${smoothPosition.x - 32}px, ${smoothPosition.y - 32}px, 0) scale(${isHovering ? 1.2 : 0.8})`,
          opacity: isHovering ? 0.4 : 0.1,
          willChange: 'transform, opacity',
        }}
      />
    </>
  );
};
