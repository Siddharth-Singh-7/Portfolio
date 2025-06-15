
import { Button } from "./ui/button";
import { Github, Linkedin, FileText, Code, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <div className="text-center space-y-8 px-4">
        {/* Glitch effect name */}
        <div className="relative">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            Siddharth Singh
          </h1>
          <div className="absolute inset-0 text-6xl md:text-8xl font-bold text-cyan-400 opacity-20 animate-ping">
            Siddharth Singh
          </div>
        </div>
        
        {/* Futuristic tagline with icons */}
        <div className="flex items-center justify-center gap-4 text-xl md:text-2xl text-gray-300 font-light">
          <Code className="text-cyan-400 animate-pulse" />
          <span>AI Enthusiast | Full-Stack Developer | Hackathon Finalist</span>
          <Zap className="text-yellow-400 animate-pulse" />
        </div>
        
        {/* Holographic buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Button 
            variant="outline" 
            size="lg"
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border-cyan-400 text-cyan-100 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
          >
            <FileText className="mr-2 h-5 w-5" />
            View Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 border-purple-400 text-purple-100 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/25"
          >
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-gradient-to-r from-pink-500/20 to-cyan-500/20 hover:from-pink-500/30 hover:to-cyan-500/30 border-pink-400 text-pink-100 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-400/25"
          >
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
        </div>
        
        {/* Floating indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
