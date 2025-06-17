
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' }
];

export const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        className="bg-transparent border-white/20 text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="mr-2 h-4 w-4" />
        <span className="mr-1">{currentLanguage.flag}</span>
        <span className="hidden sm:inline">{currentLanguage.name}</span>
        <ChevronDown className="ml-2 h-4 w-4" />
      </Button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-black/90 backdrop-blur-md border border-white/20 rounded-lg shadow-xl z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              className="w-full px-4 py-3 text-left hover:bg-white/10 transition-colors duration-200 flex items-center space-x-3 first:rounded-t-lg last:rounded-b-lg"
              onClick={() => handleLanguageChange(language.code)}
            >
              <span className="text-xl">{language.flag}</span>
              <span className="text-white">{language.name}</span>
              {language.code === i18n.language && (
                <span className="ml-auto text-green-400">✓</span>
              )}
            </button>
          ))}
        </div>
      )}

      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};
