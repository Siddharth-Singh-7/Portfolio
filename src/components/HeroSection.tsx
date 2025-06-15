
import { Button } from "./ui/button";
import { Github, Linkedin, FileText, Code, Zap, Instagram } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="text-center space-y-8 px-4 z-10">
        {/* Profile Photo with 3D effect */}
        <div className="relative mb-8">
          <div className="w-40 h-40 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-lg opacity-60 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-2xl shadow-cyan-400/25 backdrop-blur-sm">
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b" 
                alt="Siddharth Singh" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full flex items-center justify-center border-2 border-black shadow-lg">
              <Instagram className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
        
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
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            AI Enthusiast | Full-Stack Developer | Hackathon Finalist
          </span>
          <Zap className="text-yellow-400 animate-pulse" />
        </div>
        
        {/* Holographic buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Button 
            variant="outline" 
            size="lg"
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border-cyan-400 text-cyan-100 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25 group"
          >
            <FileText className="mr-2 h-5 w-5 group-hover:animate-spin" />
            View Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 border-purple-400 text-purple-100 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/25 group"
          >
            <Github className="mr-2 h-5 w-5 group-hover:animate-spin" />
            GitHub
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-gradient-to-r from-pink-500/20 to-cyan-500/20 hover:from-pink-500/30 hover:to-cyan-500/30 border-pink-400 text-pink-100 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-400/25 group"
          >
            <Linkedin className="mr-2 h-5 w-5 group-hover:animate-spin" />
            LinkedIn
          </Button>
        </div>
        
        {/* Floating scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center bg-gradient-to-b from-cyan-400/20 to-transparent">
            <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
