
import { useEffect, useState, useRef, useCallback } from 'react';

export const MouseCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const animationRef = useRef<number>();
  const trailIdRef = useRef(0);
  const lastTrailUpdate = useRef(0);

  const updateTrail = useCallback((x: number, y: number) => {
    const now = Date.now();
    if (now - lastTrailUpdate.current > 16) { // Throttle to ~60fps
      lastTrailUpdate.current = now;
      trailIdRef.current += 1;
      setTrail(prev => [
        ...prev.slice(-8), // Reduced trail points for better performance
        { x, y, id: trailIdRef.current }
      ]);
    }
  }, []);

  useEffect(() => {
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const updateMousePosition = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setMousePosition({ x: targetX, y: targetY });
      updateTrail(targetX, targetY);
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
      const ease = 0.12; // Increased easing for snappier response
      const deltaX = targetX - currentX;
      const deltaY = targetY - currentY;
      
      currentX += deltaX * ease;
      currentY += deltaY * ease;
      
      setSmoothPosition({ x: currentX, y: currentY });
      animationRef.current = requestAnimationFrame(animatePosition);
    };

    window.addEventListener('mousemove', updateMousePosition, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
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
  }, [updateTrail]);

  return (
    <>
      {/* Optimized trail effect */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed top-0 left-0 w-1 h-1 bg-white/20 rounded-full pointer-events-none z-[9999]"
          style={{
            transform: `translate3d(${point.x - 2}px, ${point.y - 2}px, 0)`,
            opacity: (index + 1) / trail.length * 0.3,
            willChange: 'transform',
          }}
        />
      ))}
      
      {/* Main cursor dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: `translate3d(${mousePosition.x - 3}px, ${mousePosition.y - 3}px, 0) scale(${isClicking ? 0.8 : 1})`,
          willChange: 'transform',
          transition: 'transform 0.1s ease-out',
        }}
      />
      
      {/* Outer ring */}
      <div
        className="fixed top-0 left-0 w-8 h-8 border border-white/25 rounded-full pointer-events-none z-[9998]"
        style={{
          transform: `translate3d(${smoothPosition.x - 16}px, ${smoothPosition.y - 16}px, 0) scale(${isHovering ? 1.6 : 1})`,
          borderColor: isHovering ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.25)',
          willChange: 'transform',
          transition: 'transform 0.15s ease-out, border-color 0.15s ease-out',
        }}
      />
    </>
  );
};
