
import { Button } from "./ui/button";
import { Github, Linkedin, FileText, ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto text-center space-y-12 px-4 z-10">
        {/* Profile section */}
        <div className="space-y-8">
          <div className="w-80 h-80 mx-auto relative">
            <div className="w-full h-full rounded-full overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="/lovable-uploads/04f69df9-7777-43ee-b204-2741b7ddd12a.png" 
                alt="Siddharth Singh" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
          
          {/* Name and title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-light tracking-tight text-white">
              Siddharth Singh
            </h1>
            <div className="space-y-2">
              <p className="text-xl md:text-2xl text-white/60 font-light">
                AI Enthusiast & Full-Stack Developer
              </p>
              <p className="text-lg text-white/40">
                Hackathon Finalist • Problem Solver • Tech Innovator
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
          >
            <FileText className="mr-2 h-4 w-4" />
            View Resume
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-transparent border-white/20 text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300 group"
            onClick={() => window.open('https://github.com/Siddharth-Singh-7', '_blank')}
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-transparent border-white/20 text-white hover:bg-white/5 backdrop-blur-sm transition-all duration-300 group"
            onClick={() => window.open('https://www.linkedin.com/in/siddharth-singh-6414432b2/', '_blank')}
          >
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
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
