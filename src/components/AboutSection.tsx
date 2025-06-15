
import { User, Brain, Users, Zap, Target, Heart } from "lucide-react";

export const AboutSection = () => {
  const traits = [
    { icon: User, label: "Ambivert", description: "Balance of introversion and extroversion" },
    { icon: Brain, label: "Intuitive", description: "Future-focused and innovative thinking" },
    { icon: Target, label: "Thinker", description: "Logical and analytical approach" },
    { icon: Zap, label: "Judger", description: "Structured and decisive" }
  ];

  const powerSkills = [
    { icon: Users, label: "Communication", level: 90 },
    { icon: Heart, label: "Teamwork", level: 95 },
    { icon: Zap, label: "Adaptability", level: 85 }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          A passionate full-stack developer with expertise in modern technologies and a keen interest in AI. 
          I love solving complex problems and building innovative solutions that make a difference.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Personality Traits */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6">Personality Traits</h3>
          <div className="grid grid-cols-2 gap-4">
            {traits.map((trait, index) => {
              const IconComponent = trait.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/10 group"
                >
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-0.5 group-hover:animate-spin">
                      <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{trait.label}</h4>
                      <p className="text-xs text-gray-400">{trait.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Power Skills */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-green-400 mb-6">Power Skills</h3>
          <div className="space-y-4">
            {powerSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 hover:border-green-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/10"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <IconComponent className="w-6 h-6 text-green-400" />
                      <span className="text-white font-medium">{skill.label}</span>
                    </div>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700/50 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
