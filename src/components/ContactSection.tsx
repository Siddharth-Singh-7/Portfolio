
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Github, Linkedin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-blue-500 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-lg text-gray-300">
          Ready to collaborate on innovative projects
        </p>
      </div>

      <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm">
        <CardContent className="p-8 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3>
            <a 
              href="mailto:siddharthsinghh71@gmail.com"
              className="text-xl text-blue-400 hover:text-blue-300 transition-colors duration-200"
            >
              siddharthsinghh71@gmail.com
            </a>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 border-none text-white"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub Profile
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-none text-white"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn Profile
            </Button>
          </div>

          <div className="mt-8 text-center text-gray-400">
            <p>📍 Based in Prayagraj, India</p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
