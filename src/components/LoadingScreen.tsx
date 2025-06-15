
import { useEffect, useState } from 'react';
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

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setShowButton(true), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white overflow-hidden cursor-none">
      {/* Custom mouse cursor */}
      <MouseCursor />
      
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
        <div className="space-y-6">
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

          {/* Enhanced title with gradient */}
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-shimmer">
              Siddharth Singh
            </h2>
            <p className="text-xl text-gray-300 font-light tracking-wide">
              AI Enthusiast & Full-Stack Developer
            </p>
            <div className="flex justify-center space-x-2 mt-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
          
          {/* Enhanced progress bar */}
          <div className="relative w-80 mx-auto">
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
