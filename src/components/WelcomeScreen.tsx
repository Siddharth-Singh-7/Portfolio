
import { useEffect, useState } from 'react';

interface WelcomeScreenProps {
  onEnterWebsite: () => void;
}

const welcomeMessages = [
  { lang: 'en', text: 'Hello' },
  { lang: 'es', text: 'Hola' },
  { lang: 'fr', text: 'Bonjour' },
  { lang: 'de', text: 'Hallo' },
  { lang: 'it', text: 'Ciao' },
  { lang: 'pt', text: 'Olá' },
  { lang: 'ru', text: 'Привет' },
  { lang: 'ja', text: 'こんにちは' },
  { lang: 'hi', text: 'नमस्ते' }
];

export const WelcomeScreen = ({ onEnterWebsite }: WelcomeScreenProps) => {
  const [currentWelcomeIndex, setCurrentWelcomeIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isEnding, setIsEnding] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWelcomeIndex((prev) => {
        if (prev >= welcomeMessages.length - 1) {
          clearInterval(timer);
          setIsEnding(true);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => onEnterWebsite(), 500);
          }, 800);
          return prev;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onEnterWebsite]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black text-white transition-opacity duration-500 ${
      isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="text-center">
        <h1 className={`text-6xl md:text-8xl font-light text-white transition-all duration-300 transform ${
          isEnding 
            ? 'scale-110 opacity-90' 
            : 'animate-pulse scale-100 opacity-100'
        }`}>
          {welcomeMessages[currentWelcomeIndex]?.text}
        </h1>
        
        {/* Loading dots animation */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-white rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '0.6s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
