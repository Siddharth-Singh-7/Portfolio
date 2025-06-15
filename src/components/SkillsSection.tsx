
import { Badge } from "./ui/badge";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Core Languages",
      skills: ["C", "C++", "Java", "Python", "JavaScript", "HTML", "CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frameworks & Tools",
      skills: ["React", "Node.js", "Tailwind", "TypeScript", "Supabase", "APIs"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Database & Others",
      skills: ["MySQL", "MS Office", "Video Editing", "Prompt Engineering", "AI Tools"],
      color: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <p className="text-lg text-gray-300">
          A comprehensive toolkit for building modern applications
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="space-y-4">
            <h3 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <Badge 
                  key={skillIndex}
                  variant="outline"
                  className={`bg-gradient-to-r ${category.color} bg-opacity-10 border-none text-white hover:scale-105 transition-transform duration-200`}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
