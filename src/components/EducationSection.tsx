
import { Card, CardContent } from "./ui/card";

export const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering (AI/ML)",
      institution: "United University",
      location: "Prayagraj",
      status: "Currently Pursuing",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      degree: "12th Grade (Science)",
      institution: "CBSE Board School",
      location: "Prayagraj",
      status: "Completed",
      gradient: "from-green-500 to-blue-500"
    },
    {
      degree: "10th Grade",
      institution: "CBSE Board School", 
      location: "Prayagraj",
      status: "Completed",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Education
        </h2>
        <p className="text-lg text-gray-300">
          Academic foundation in computer science and technology
        </p>
      </div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:scale-105 transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex-1">
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${edu.gradient} bg-clip-text text-transparent mb-2`}>
                    {edu.degree}
                  </h3>
                  <p className="text-gray-300 mb-1">{edu.institution}</p>
                  <p className="text-sm text-gray-400">{edu.location}</p>
                </div>
                <div className={`mt-4 md:mt-0 px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${edu.gradient} bg-opacity-10 border border-current`}>
                  {edu.status}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
