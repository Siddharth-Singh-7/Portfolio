
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Globe } from 'lucide-react';
import { MouseCursor } from './MouseCursor';
import { ParticleField } from './ParticleField';
import { GeometricShapes } from './GeometricShapes';
import { AnimatedBulb } from './AnimatedBulb';
import { useTranslation } from 'react-i18next';

interface WelcomeScreenProps {
  onEnterWebsite: () => void;
}

const welcomeMessages = [
  { lang: 'en', text: 'Welcome', flag: '🇺🇸' },
  { lang: 'es', text: 'Bienvenido', flag: '🇪🇸' },
  { lang: 'fr', text: 'Bienvenue', flag: '🇫🇷' },
  { lang: 'de', text: 'Willkommen', flag: '🇩🇪' },
  { lang: 'hi', text: 'स्वागत', flag: '🇮🇳' },
  { lang: 'ja', text: 'ようこそ', flag: '🇯🇵' },
  { lang: 'zh', text: '欢迎', flag: '🇨🇳' },
  { lang: 'ar', text: 'أهلاً وسهلاً', flag: '🇸🇦' }
];

export const WelcomeScreen = ({ onEnterWebsite }: WelcomeScreenProps) => {
  const [currentWelcomeIndex, setCurrentWelcomeIndex] = useState(0);
  const [showButton, setShowButton] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const welcomeTimer = setInterval(() => {
      setCurrentWelcomeIndex((prev) => {
        if (prev >= welcomeMessages.length - 1) {
          clearInterval(welcomeTimer);
          setTimeout(() => setShowButton(true), 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(welcomeTimer);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white overflow-hidden cursor-none">
      <MouseCursor />
      <ParticleField />
      <GeometricShapes />

      <div className="relative z-10 text-center space-y-12">
        <AnimatedBulb />

        <div className="space-y-8">
          <div className="relative h-32 flex flex-col items-center justify-center">
            {welcomeMessages.map((welcome, index) => (
              <div
                key={welcome.lang}
                className={`absolute transition-all duration-500 ${
                  index === currentWelcomeIndex
                    ? 'opacity-100 scale-100 translate-y-0'
                    : index < currentWelcomeIndex
                    ? 'opacity-0 scale-95 -translate-y-4'
                    : 'opacity-0 scale-105 translate-y-4'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{welcome.flag}</span>
                  <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    {welcome.text}
                  </h1>
                </div>
              </div>
            ))}
          </div>

          {currentWelcomeIndex >= welcomeMessages.length - 1 && (
            <div className="animate-fade-in space-y-4" style={{ animationDelay: '1s', animationFillMode: 'forwards', opacity: 0 }}>
              <h2 className="text-3xl md:text-4xl font-light text-white/80">
                {t('name')}
              </h2>
              <p className="text-xl text-gray-300 font-light tracking-wide">
                {t('title')}
              </p>
            </div>
          )}
        </div>

        {showButton && (
          <div className="animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded-lg blur opacity-30 group-hover:opacity-50 animate-pulse"></div>
              
              <Button 
                onClick={onEnterWebsite}
                size="lg"
                className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 hover:from-purple-700 hover:via-blue-700 hover:to-green-700 text-white px-12 py-4 text-xl font-bold transition-all duration-300 transform hover:scale-105 border-2 border-white/20 backdrop-blur-sm"
              >
                <span className="relative z-10 flex items-center">
                  <Globe className="mr-3 h-6 w-6" />
                  Enter Portfolio
                  <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="fixed inset-0 pointer-events-none z-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};
