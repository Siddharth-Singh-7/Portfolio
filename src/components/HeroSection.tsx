
import { Button } from "./ui/button";
import { Github, Linkedin, FileText } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
          Siddharth Singh
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-light">
          AI Enthusiast | Full-Stack Developer | Hackathon Finalist
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <Button 
            variant="outline" 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-none text-white"
          >
            <FileText className="mr-2 h-5 w-5" />
            View Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-none text-white"
          >
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-gradient-to-r from-pink-600 to-blue-600 hover:from-pink-700 hover:to-blue-700 border-none text-white"
          >
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
        </div>
      </div>
    </div>
  );
};
