
import { useEffect, useState } from 'react';

export const AnimatedBulb = () => {
  const [isGlowing, setIsGlowing] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlowing(prev => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-96 h-96 mx-auto mb-8">
      {/* Outer glow ring */}
      <div className={`absolute inset-0 rounded-full transition-all duration-1000 ${
        isGlowing 
          ? 'shadow-[0_0_100px_rgba(255,255,255,0.3),0_0_200px_rgba(124,58,237,0.2)]' 
          : 'shadow-[0_0_50px_rgba(255,255,255,0.1)]'
      }`}>
        
        {/* Main bulb container */}
        <div className="relative w-full h-full rounded-full bg-gradient-to-br from-white/20 via-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-white/20">
          
          {/* Inner light core */}
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full transition-all duration-1000 ${
            isGlowing 
              ? 'bg-gradient-to-br from-yellow-200 via-white to-purple-200 shadow-[0_0_60px_rgba(255,255,255,0.8)]' 
              : 'bg-gradient-to-br from-gray-300 via-gray-100 to-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]'
          }`}>
            
            {/* Filament lines */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-16 h-px transition-all duration-1000 ${
                    isGlowing ? 'bg-orange-400' : 'bg-gray-400'
                  }`}
                  style={{
                    transform: `rotate(${i * 30}deg)`,
                    transformOrigin: 'center',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Rotating energy rings */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border border-white/10 animate-spin"
              style={{
                animationDuration: `${10 + i * 5}s`,
                animationDirection: i % 2 === 0 ? 'normal' : 'reverse',
                transform: `scale(${0.7 + i * 0.15})`,
              }}
            >
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full transform -translate-x-1/2 -translate-y-1" />
            </div>
          ))}

          {/* Floating particles */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/60 rounded-full animate-float"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
