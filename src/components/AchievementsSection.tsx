
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Trophy, Award } from "lucide-react";
import { DetailedOverview } from "./DetailedOverview";

export const AchievementsSection = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<any>(null);

  const achievements = [
    {
      title: "Build With AI Startup",
      organization: "Google Developers Group",
      position: "2nd Place 🥈",
      description: "Developed an innovative AI-powered solution that secured second place in this prestigious competition",
      year: "2024",
      gradient: "from-yellow-400 to-orange-500",
      icon: Trophy,
      details: "Built a comprehensive AI-powered healthcare solution that intelligently analyzes patient data and provides personalized treatment recommendations. The project involved complex machine learning algorithms, natural language processing for symptom analysis, and a user-friendly interface for both patients and healthcare providers. Our team worked for 48 hours straight, implementing features like real-time health monitoring, predictive analytics, and automated report generation.",
      photos: [
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56",
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
      ],
      skills: ["React", "Python", "Machine Learning", "TensorFlow", "Natural Language Processing", "UI/UX Design", "Team Leadership"]
    },
    {
      title: "HackDiwas",
      organization: "Tech Hackathon",
      position: "Finalist 🏆",
      description: "Reached the finals with a creative solution showcasing technical excellence and innovation",
      year: "2024",
      gradient: "from-blue-400 to-purple-500",
      icon: Award,
      details: "Created an innovative campus navigation system that uses augmented reality to help students find their way around university campuses. The application combines GPS technology with AR overlays to provide real-time directions, building information, and event notifications. We implemented features like indoor navigation using WiFi triangulation, integration with university databases for real-time room availability, and a social component for students to share tips and reviews about campus locations.",
      photos: [
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
      ],
      skills: ["React Native", "Augmented Reality", "GPS Integration", "Firebase", "UI/UX Design", "Problem Solving"]
    }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto relative">
      {/* Floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-40 w-1 h-1 bg-purple-400 rounded-full animate-bounce"></div>
      </div>
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Achievements
        </h2>
        <div className="absolute inset-0 text-4xl md:text-5xl font-bold text-yellow-400 opacity-10 blur-sm">
          Achievements
        </div>
        <p className="text-lg text-gray-300 relative z-10">
          Recognition for innovation and technical excellence
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 relative z-10">
        {achievements.map((achievement, index) => {
          const IconComponent = achievement.icon;
          return (
            <Card 
              key={index} 
              className="bg-black/50 border border-gray-700/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 group hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/20 cursor-pointer"
              onClick={() => setSelectedAchievement(achievement)}
            >
              <CardContent className="p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-orange-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-8 h-8 text-yellow-400 group-hover:animate-pulse" />
                    <div className={`text-2xl font-bold bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                      {achievement.position}
                    </div>
                  </div>
                  <div className="text-sm text-gray-400 bg-gray-800/50 px-2 py-1 rounded-full border border-gray-600/50">
                    {achievement.year}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-100 transition-colors duration-300 relative z-10">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3 relative z-10">{achievement.organization}</p>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 relative z-10">
                  {achievement.description}
                </p>
                <p className="text-xs text-yellow-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to view details
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <DetailedOverview
        isOpen={selectedAchievement !== null}
        onClose={() => setSelectedAchievement(null)}
        type="achievement"
        data={selectedAchievement || achievements[0]}
      />
    </section>
  );
};
