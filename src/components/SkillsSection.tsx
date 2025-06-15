
import { Badge } from "./ui/badge";
import { Code, Layers, Database } from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Core Languages",
      skills: ["C", "C++", "Java", "Python", "JavaScript", "HTML", "CSS"],
      color: "from-cyan-500 to-blue-500",
      icon: Code
    },
    {
      title: "Frameworks & Tools",
      skills: ["React", "Node.js", "Tailwind", "TypeScript", "Supabase", "APIs"],
      color: "from-purple-500 to-pink-500",
      icon: Layers
    },
    {
      title: "Database & Others",
      skills: ["MySQL", "MS Office", "Video Editing", "Prompt Engineering", "AI Tools"],
      color: "from-green-500 to-cyan-500",
      icon: Database
    }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-20 h-20 border border-cyan-400/20 rotate-45 animate-spin"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border border-purple-400/20 rotate-12 animate-pulse"></div>
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
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <div key={index} className="space-y-4 group">
              <div className="flex items-center gap-3">
                <IconComponent className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                <h3 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="outline"
                    className={`bg-gradient-to-r ${category.color} bg-opacity-10 border border-current/30 text-white hover:scale-105 hover:shadow-lg transition-all duration-300 backdrop-blur-sm hover:bg-opacity-20`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
