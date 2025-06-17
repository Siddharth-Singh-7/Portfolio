
import { Button } from "./ui/button";
import { Github, Linkedin, FileText, ArrowRight } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { AnimatedBulb } from './AnimatedBulb';
import { LanguageSelector } from './LanguageSelector';

export const HeroSection = () => {
  const { t } = useTranslation();

  const handleViewResume = () => {
    window.open('/siddharthsinghcv_Latest.pdf', '_blank');
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      {/* Language selector in top right */}
      <div className="absolute top-8 right-8 z-20">
        <LanguageSelector />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-12 px-4 z-10">
        {/* Profile section with animated bulb */}
        <div className="space-y-8">
          <AnimatedBulb />
          
          {/* Name and title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-light tracking-tight text-white">
              {t('name')}
            </h1>
            <div className="space-y-2">
              <p className="text-xl md:text-2xl text-white/60 font-light">
                {t('title')}
              </p>
              <p className="text-lg text-white/40">
                {t('subtitle')}
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            variant="outline" 
            size="lg"
            className="bg-transparent border-white/20 text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300 group"
            onClick={handleViewResume}
          >
            <FileText className="mr-2 h-4 w-4" />
            {t('viewResume')}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-transparent border-white/20 text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300 group"
            onClick={() => window.open('https://github.com/Siddharth-Singh-7', '_blank')}
          >
            <Github className="mr-2 h-4 w-4" />
            {t('github')}
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-transparent border-white/20 text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300 group"
            onClick={() => window.open('https://www.linkedin.com/in/siddharth-singh-6414432b2/', '_blank')}
          >
            <Linkedin className="mr-2 h-4 w-4" />
            {t('linkedin')}
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-20 bg-gradient-to-b from-white/20 to-transparent">
            <div className="w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
