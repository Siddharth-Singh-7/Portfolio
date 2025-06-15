
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto relative">
      {/* Particle field background */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <div className="absolute inset-0 text-4xl md:text-5xl font-bold text-pink-400 opacity-10 blur-sm">
          Let's Connect
        </div>
        <p className="text-lg text-gray-300 relative z-10">
          Ready to collaborate on innovative projects
        </p>
      </div>

      <Card className="bg-black/50 border border-gray-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 relative z-10">
        <CardContent className="p-8 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-pink-400/5 rounded-lg"></div>
          
          <div className="mb-8 relative z-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-cyan-400 animate-pulse" />
              <h3 className="text-2xl font-bold text-white">Get In Touch</h3>
            </div>
            <a 
              href="mailto:siddharthsinghh71@gmail.com"
              className="text-xl text-cyan-400 hover:text-cyan-300 transition-colors duration-200 hover:underline"
            >
              siddharthsinghh71@gmail.com
            </a>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-8 relative z-10">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-gradient-to-r from-violet-600/30 to-purple-600/30 hover:from-violet-500/40 hover:to-purple-500/40 border-violet-400/60 text-violet-100 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-500/30"
              onClick={() => window.open('https://github.com/Siddharth-Singh-7', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub Profile
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-gradient-to-r from-blue-600/30 to-indigo-600/30 hover:from-blue-500/40 hover:to-indigo-500/40 border-blue-400/60 text-blue-100 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30"
              onClick={() => window.open('https://www.linkedin.com/in/siddharth-singh-6414432b2/', '_blank')}
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn Profile
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-gradient-to-r from-emerald-600/30 to-teal-600/30 hover:from-emerald-500/40 hover:to-teal-500/40 border-emerald-400/60 text-emerald-100 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/30"
              onClick={() => window.open('mailto:siddharthsinghh71@gmail.com', '_blank')}
            >
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </Button>
          </div>

          <div className="text-center text-gray-400 relative z-10">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <p>Based in Prayagraj, India</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
