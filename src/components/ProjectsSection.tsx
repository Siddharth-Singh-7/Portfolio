
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "HealthDesk AI",
      description: "AI-based health tracking application with intelligent monitoring and personalized recommendations",
      technologies: ["React", "TypeScript", "Tailwind CSS", "AI/ML"],
      status: "Completed",
      gradient: "from-green-500 to-cyan-500"
    },
    {
      title: "Visualisation Pizza",
      description: "Advanced AI dataset visualization platform with intelligent labeling tools and interactive charts",
      technologies: ["Python", "React", "D3.js", "AI/ML"],
      status: "Completed",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      title: "Austra Motion Studio",
      description: "Modern website for a marketing agency featuring dynamic animations and responsive design",
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      status: "In Progress",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto relative">
      {/* Tech grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
          {Array.from({ length: 96 }).map((_, i) => (
            <div key={i} className="border border-cyan-400 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
          ))}
        </div>
      </div>
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="absolute inset-0 text-4xl md:text-5xl font-bold text-green-400 opacity-10 blur-sm">
          Featured Projects
        </div>
        <p className="text-lg text-gray-300 relative z-10">
          Showcasing innovative solutions and creative implementations
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {projects.map((project, index) => (
          <Card key={index} className="bg-black/50 border border-gray-700/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer group hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20">
            <CardHeader className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-400/5 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardTitle className={`text-xl bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-200 relative z-10`}>
                {project.title}
              </CardTitle>
              <div className="flex items-center gap-2 relative z-10">
                <Badge 
                  variant={project.status === "Completed" ? "default" : "secondary"}
                  className={`${project.status === "Completed" ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'} backdrop-blur-sm`}
                >
                  {project.status}
                </Badge>
                <div className="ml-auto flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-4 h-4 text-cyan-400 hover:text-cyan-300 cursor-pointer" />
                  <Github className="w-4 h-4 text-cyan-400 hover:text-cyan-300 cursor-pointer" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-300">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="text-xs border-gray-600 text-gray-400 hover:border-cyan-400/50 hover:text-cyan-300 transition-all duration-300">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
