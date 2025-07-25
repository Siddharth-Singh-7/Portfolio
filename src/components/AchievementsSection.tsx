
import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Trophy, Award, Users } from "lucide-react";
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
        "/lovable-uploads/31934c91-cf56-4df4-8870-1811f30767b2.png",
        "/lovable-uploads/f178e685-31e6-40b4-9ea9-e62d6c49a2cf.png",
        "/lovable-uploads/6d0ed6c3-60df-4ce0-88ff-91e580ec1847.png"
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
        "/lovable-uploads/ad3e326c-dac8-480c-8496-80d106863e3a.png",
        "/lovable-uploads/6c42cc7f-abed-42a4-8713-044a92377f59.png",
        "/lovable-uploads/d478bceb-a7a9-4de1-b73b-eebb7d58babd.png"
      ],
      skills: ["React Native", "Augmented Reality", "GPS Integration", "Firebase", "UI/UX Design", "Problem Solving"]
    },
    {
      title: "HackDiwas 2.0",
      organization: "United University",
      position: "Lead Organizer 🎯",
      description: "Core member of the organizing team for the national-level hackathon, coordinating end-to-end event execution",
      year: "2025",
      gradient: "from-emerald-400 to-teal-500",
      icon: Users,
      details: "Served as Lead Organizer for HackDiwas 2.0, a national-level hackathon hosted at United University (May 1–2, 2025). Coordinated end-to-end event execution from team registrations to final judging, managed communications between mentors, judges, participants, and sponsors. Oversaw team logistics, technical infrastructure, and day-of-event support. Contributed to the event's smooth execution alongside Kavaljeet, Aakash, Shivraj, and Anshuman. Helped deliver a successful, large-scale hackathon with nationwide student participation and promoted innovation and tech collaboration through well-structured ideation and demo sessions.",
      photos: [
        "/lovable-uploads/dad0b21c-5e5a-4011-b4dc-0469a943f2c9.png",
        "/lovable-uploads/8fc861ee-2888-4d53-9feb-9d6635569157.png",
        "/lovable-uploads/9b116ae7-f8eb-49c5-b3eb-5042cd756946.png",
        "/lovable-uploads/d14bc1c0-ea00-4d03-83a2-05a7c1aa6bfc.png",
        "/lovable-uploads/603a9dac-5995-4f5b-a311-e99ea2a4a409.png",
        "/lovable-uploads/bd9cc981-74a9-4d31-97f0-c974d535454f.png"
      ],
      skills: ["Event Management", "Team Leadership", "Communication", "Project Coordination", "Problem Solving", "Stakeholder Management", "Technical Infrastructure"]
    }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto relative">
      {/* Simplified floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-400/30 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-cyan-400/30 rounded-full animate-pulse"></div>
      </div>
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Achievements
        </h2>
        <div className="absolute inset-0 text-4xl md:text-5xl font-bold text-yellow-400 opacity-5 blur-sm">
          Achievements
        </div>
        <p className="text-lg text-gray-300 relative z-10">
          Recognition for innovation and technical excellence
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {achievements.map((achievement, index) => {
          const IconComponent = achievement.icon;
          return (
            <Card 
              key={index} 
              className="bg-black/40 border border-gray-700/30 backdrop-blur-sm hover:scale-[1.02] transition-all duration-200 group hover:border-yellow-400/40 hover:shadow-lg hover:shadow-yellow-400/10 cursor-pointer"
              onClick={() => setSelectedAchievement(achievement)}
            >
              <CardContent className="p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/3 to-orange-400/3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="flex items-center gap-3">
                    <IconComponent className="w-8 h-8 text-yellow-400" />
                    <div className={`text-2xl font-bold bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                      {achievement.position}
                    </div>
                  </div>
                  <div className="text-sm text-gray-400 bg-gray-800/30 px-2 py-1 rounded-full border border-gray-600/30">
                    {achievement.year}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-100 transition-colors duration-200 relative z-10">
                  {achievement.title}
                </h3>
                <p className="text-sm text-gray-400 mb-3 relative z-10">{achievement.organization}</p>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-200 relative z-10">
                  {achievement.description}
                </p>
                <p className="text-xs text-yellow-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
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
