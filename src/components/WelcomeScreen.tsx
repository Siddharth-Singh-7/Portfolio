
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWelcomeIndex((prev) => {
        if (prev >= welcomeMessages.length - 1) {
          clearInterval(timer);
          setTimeout(() => onEnterWebsite(), 100);
          return prev;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onEnterWebsite]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-light text-white">
          {welcomeMessages[currentWelcomeIndex]?.text}
        </h1>
      </div>
    </div>
  );
};
