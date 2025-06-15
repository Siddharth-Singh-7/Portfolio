
import { Card, CardContent } from "./ui/card";
import { GraduationCap, BookOpen, School } from "lucide-react";

export const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering (AI/ML)",
      institution: "United University",
      location: "Prayagraj",
      status: "Currently Pursuing",
      gradient: "from-blue-500 to-purple-500",
      icon: GraduationCap
    },
    {
      degree: "12th Grade (Science)",
      institution: "CBSE Board School",
      location: "Prayagraj",
      status: "Completed",
      gradient: "from-green-500 to-blue-500",
      icon: BookOpen
    },
    {
      degree: "10th Grade",
      institution: "CBSE Board School", 
      location: "Prayagraj",
      status: "Completed",
      gradient: "from-purple-500 to-pink-500",
      icon: School
    }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto relative">
      {/* Circuit pattern background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="circuit" patternUnits="userSpaceOnUse" width="20" height="20">
              <path d="M0 10h5v-5h5v5h5" stroke="currentColor" strokeWidth="0.5" fill="none"/>
              <circle cx="5" cy="5" r="1" fill="currentColor"/>
              <circle cx="15" cy="15" r="1" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" className="text-cyan-400"/>
        </svg>
      </div>
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="absolute inset-0 text-4xl md:text-5xl font-bold text-indigo-400 opacity-10 blur-sm">
          Education
        </div>
        <p className="text-lg text-gray-300 relative z-10">
          Academic foundation in computer science and technology
        </p>
      </div>

      <div className="space-y-6 relative z-10">
        {education.map((edu, index) => {
          const IconComponent = edu.icon;
          return (
            <Card key={index} className="bg-black/50 border border-gray-700/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 group hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-400/20">
              <CardContent className="p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-blue-400/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between relative z-10">
                  <div className="flex-1 flex items-start gap-4">
                    <IconComponent className="w-8 h-8 text-purple-400 mt-1 group-hover:animate-pulse" />
                    <div>
                      <h3 className={`text-xl font-bold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300`}>
                        {edu.degree}
                      </h3>
                      <p className="text-gray-300 mb-1 group-hover:text-gray-200 transition-colors duration-300">
                        {edu.institution}
                      </p>
                      <p className="text-sm text-gray-400">{edu.location}</p>
                    </div>
                  </div>
                  <div className={`mt-4 md:mt-0 px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${edu.gradient} bg-opacity-20 border border-current/30 backdrop-blur-sm group-hover:bg-opacity-30 transition-all duration-300`}>
                    {edu.status}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};
