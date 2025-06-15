
import { Code, Database, Globe, Smartphone, Cpu, Terminal, Zap, Star, Layers, Wrench } from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Core Languages",
      skills: [
        { name: "C", icon: Code, level: 90 },
        { name: "C++", icon: Cpu, level: 85 },
        { name: "Java", icon: Terminal, level: 80 },
        { name: "Python", icon: Code, level: 85 },
        { name: "JavaScript", icon: Globe, level: 90 },
        { name: "HTML/CSS", icon: Globe, level: 95 }
      ],
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Frameworks & Tools",
      skills: [
        { name: "React", icon: Layers, level: 90 },
        { name: "Node.js", icon: Terminal, level: 80 },
        { name: "Tailwind", icon: Star, level: 85 },
        { name: "TypeScript", icon: Code, level: 75 },
        { name: "Supabase", icon: Database, level: 70 },
        { name: "APIs", icon: Zap, level: 80 }
      ],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Database & Others",
      skills: [
        { name: "MySQL", icon: Database, level: 80 },
        { name: "MS Office", icon: Wrench, level: 90 },
        { name: "Video Editing", icon: Smartphone, level: 75 },
        { name: "AI Tools", icon: Cpu, level: 85 },
        { name: "Prompt Engineering", icon: Terminal, level: 80 }
      ],
      color: "from-green-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto relative">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 border border-cyan-400/20 rotate-45 animate-spin"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-purple-400/20 rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-green-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-14 h-14 border border-pink-400/20 rotate-45 animate-pulse"></div>
      </div>
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="absolute inset-0 text-4xl md:text-5xl font-bold text-purple-400 opacity-10 blur-sm">
          Skills & Technologies
        </div>
        <p className="text-lg text-gray-300 relative z-10">
          A comprehensive toolkit for building modern applications
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {skillCategories.map((category, index) => (
          <div key={index} className="space-y-6 group">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} p-0.5`}>
                <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>
            </div>
            
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => {
                const IconComponent = skill.icon;
                return (
                  <div 
                    key={skillIndex}
                    className="group/skill bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg p-4 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/10"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <IconComponent className={`w-5 h-5 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`} />
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 group-hover/skill:animate-pulse`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
