
import { Card, CardContent } from "./ui/card";
import { Brain, Users, Zap, Target } from "lucide-react";

export const AboutSection = () => {
  const traits = [
    { name: "Ambivert", description: "Balanced social energy", icon: Users },
    { name: "Intuitive", description: "Future-focused thinking", icon: Brain },
    { name: "Thinker", description: "Logic-driven decisions", icon: Zap },
    { name: "Judger", description: "Organized approach", icon: Target }
  ];

  const powerSkills = ["Communication", "Teamwork", "Adaptability"];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto relative">
      {/* Section header with neon glow */}
      <div className="text-center mb-16 relative">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="absolute inset-0 text-4xl md:text-5xl font-bold text-cyan-400 opacity-10 blur-sm">
          About Me
        </div>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto relative z-10">
          A passionate full-stack developer with expertise in modern technologies and AI tools. 
          I love building innovative solutions and pushing the boundaries of what's possible with code.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Personality traits with holographic effect */}
        <Card className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20">
          <CardContent className="p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-lg"></div>
            <h3 className="text-2xl font-bold mb-4 text-cyan-400 relative z-10">Personality Traits</h3>
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {traits.map((trait, index) => {
                const IconComponent = trait.icon;
                return (
                  <div key={index} className="text-center p-3 rounded-lg bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500/20 transition-all duration-300">
                    <IconComponent className="w-6 h-6 mx-auto mb-2 text-cyan-400" />
                    <div className="font-semibold text-cyan-300">{trait.name}</div>
                    <div className="text-xs text-gray-400">{trait.description}</div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Power skills with tech aesthetic */}
        <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/20">
          <CardContent className="p-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-lg"></div>
            <h3 className="text-2xl font-bold mb-4 text-purple-400 relative z-10">Power Skills</h3>
            <div className="space-y-3 relative z-10">
              {powerSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-300 group-hover:text-purple-300 transition-colors duration-300">{skill}</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-purple-400/50 to-transparent"></div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
