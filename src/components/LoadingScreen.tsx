
import { useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { MouseCursor } from './MouseCursor';
import { Scene3D } from './Scene3D';
import { ParticleField } from './ParticleField';
import { GeometricShapes } from './GeometricShapes';

interface LoadingScreenProps {
  onEnterWebsite: () => void;
}

export const LoadingScreen = ({ onEnterWebsite }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const [nameProgress, setNameProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const nameRef = useRef<HTMLDivElement>(null);

  const fullName = "Siddharth Singh";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // First animate the name typing effect
    const nameTimer = setInterval(() => {
      setNameProgress((prev) => {
        if (prev >= fullName.length) {
          clearInterval(nameTimer);
          // Start progress bar after name is complete
          setTimeout(() => {
            const progressTimer = setInterval(() => {
              setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                  clearInterval(progressTimer);
                  setTimeout(() => setShowButton(true), 500);
                  return 100;
                }
                return prevProgress + 2;
              });
            }, 50);
          }, 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 150);

    return () => clearInterval(nameTimer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white overflow-hidden cursor-none">
      {/* Custom mouse cursor */}
      <MouseCursor />
      
      {/* 3D Cursor Following Effect */}
      <div 
        className="fixed pointer-events-none z-20 transition-all duration-300 ease-out"
        style={{
          transform: `translate3d(${mousePosition.x - 100}px, ${mousePosition.y - 100}px, 0)`,
        }}
      >
        <div className="relative w-48 h-48">
          {/* Outer ring that follows cursor */}
          <div className="absolute inset-0 border-2 border-purple-500/30 rounded-full animate-spin" style={{ animationDuration: '8s' }}>
            <div className="absolute top-0 left-1/2 w-3 h-3 bg-purple-500 rounded-full transform -translate-x-1/2 -translate-y-1.5"></div>
          </div>
          
          {/* Middle ring */}
          <div className="absolute inset-4 border border-blue-500/20 rounded-full animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}>
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
          </div>
          
          {/* Inner ring */}
          <div className="absolute inset-8 border border-green-500/15 rounded-full animate-spin" style={{ animationDuration: '4s' }}>
            <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-green-500 rounded-full transform -translate-x-1/2 -translate-y-0.75"></div>
          </div>
          
          {/* Center glow */}
          <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-white/10 rounded-full blur-md transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        </div>
      </div>
      
      {/* 3D Background Scene */}
      <div className="fixed inset-0 z-0 opacity-60">
        <Canvas
          camera={{ position: [0, 0, 15], fov: 65 }}
          className="w-full h-full"
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </Canvas>
      </div>

      {/* Particle Field */}
      <ParticleField />
      
      {/* Geometric Shapes */}
      <GeometricShapes />

      {/* Loading Content */}
      <div className="relative z-10 text-center space-y-8">
        <div className="space-y-8">
          {/* Animated 3D-style spinner */}
          <div className="relative mx-auto mb-8">
            <div className="animate-spin w-20 h-20 border-4 border-transparent rounded-full mx-auto relative">
              <div className="absolute inset-0 border-4 border-purple-500 border-t-transparent rounded-full animate-spin" style={{ animationDuration: '1s' }}></div>
              <div className="absolute inset-2 border-4 border-blue-500 border-b-transparent rounded-full animate-spin" style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}></div>
              <div className="absolute inset-4 border-4 border-green-500 border-l-transparent rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
            </div>
            
            {/* Pulsing core */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full animate-pulse"></div>
          </div>

          {/* Enhanced name with typing effect */}
          <div className="space-y-4" ref={nameRef}>
            <div className="relative">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                {fullName.slice(0, nameProgress)}
                {nameProgress < fullName.length && (
                  <span className="animate-pulse text-white">|</span>
                )}
              </h1>
              
              {/* Glowing underline that grows with the name */}
              <div 
                className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full mx-auto mt-2 transition-all duration-300"
                style={{ width: `${(nameProgress / fullName.length) * 100}%`, maxWidth: '400px' }}
              ></div>
            </div>
            
            <p className="text-xl text-gray-300 font-light tracking-wide opacity-0 animate-fade-in" style={{ animationDelay: '3s', animationFillMode: 'forwards' }}>
              AI Enthusiast & Full-Stack Developer
            </p>
            
            {/* Loading dots that appear after name */}
            {nameProgress >= fullName.length && (
              <div className="flex justify-center space-x-2 mt-4 animate-fade-in">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            )}
          </div>
          
          {/* Enhanced progress bar - only shows after name is complete */}
          {nameProgress >= fullName.length && (
            <div className="relative w-80 mx-auto animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards', opacity: 0 }}>
              <div className="w-full bg-gray-800/50 backdrop-blur-sm rounded-full h-4 border border-gray-600/30">
                <div 
                  className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 h-4 rounded-full transition-all duration-300 relative overflow-hidden"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-sm text-gray-400">Loading...</span>
                <span className="text-sm text-purple-400 font-semibold">{progress}%</span>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced button with 3D effects */}
        {showButton && (
          <div className="animate-fade-in">
            <div className="relative group">
              {/* Button glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-lg blur opacity-30 group-hover:opacity-50 animate-pulse"></div>
              
              <Button 
                onClick={onEnterWebsite}
                size="lg"
                className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 hover:from-purple-700 hover:via-blue-700 hover:to-green-700 text-white px-12 py-4 text-xl font-bold transition-all duration-300 transform hover:scale-105 border-2 border-white/20 backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center">
                  View My Portfolio
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
            
            {/* Floating elements around button */}
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
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
        )}
      </div>

      {/* Ambient overlay effects */}
      <div className="fixed inset-0 pointer-events-none z-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};
