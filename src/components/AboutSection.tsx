
import { Card, CardContent } from "./ui/card";

export const AboutSection = () => {
  const traits = [
    { name: "Ambivert", description: "Balanced social energy" },
    { name: "Intuitive", description: "Future-focused thinking" },
    { name: "Thinker", description: "Logic-driven decisions" },
    { name: "Judger", description: "Organized approach" }
  ];

  const powerSkills = ["Communication", "Teamwork", "Adaptability"];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          A passionate full-stack developer with expertise in modern technologies and AI tools. 
          I love building innovative solutions and pushing the boundaries of what's possible with code.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/20 backdrop-blur-sm">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Personality Traits</h3>
            <div className="grid grid-cols-2 gap-4">
              {traits.map((trait, index) => (
                <div key={index} className="text-center p-3 rounded-lg bg-blue-500/10">
                  <div className="font-semibold text-blue-300">{trait.name}</div>
                  <div className="text-xs text-gray-400">{trait.description}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/20 backdrop-blur-sm">
          <CardContent className="p-6">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Power Skills</h3>
            <div className="space-y-3">
              {powerSkills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
