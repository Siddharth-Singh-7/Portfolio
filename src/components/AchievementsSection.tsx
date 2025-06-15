
import { Card, CardContent } from "./ui/card";

export const AchievementsSection = () => {
  const achievements = [
    {
      title: "Build With AI Startup",
      organization: "Google Developers Group",
      position: "2nd Place 🥈",
      description: "Developed an innovative AI-powered solution that secured second place in this prestigious competition",
      year: "2024",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "HackDiwas",
      organization: "Tech Hackathon",
      position: "Finalist 🏆",
      description: "Reached the finals with a creative solution showcasing technical excellence and innovation",
      year: "2024",
      gradient: "from-blue-400 to-purple-500"
    }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Achievements
        </h2>
        <p className="text-lg text-gray-300">
          Recognition for innovation and technical excellence
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {achievements.map((achievement, index) => (
          <Card key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className={`text-2xl font-bold bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                  {achievement.position}
                </div>
                <div className="text-sm text-gray-400">{achievement.year}</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
              <p className="text-sm text-gray-400 mb-3">{achievement.organization}</p>
              <p className="text-gray-300">{achievement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
