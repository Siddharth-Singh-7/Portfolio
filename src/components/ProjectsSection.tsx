
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "HealthDesk AI",
      description: "AI-based health tracking application with intelligent monitoring and personalized recommendations",
      technologies: ["React", "TypeScript", "Tailwind CSS", "AI/ML"],
      status: "Completed",
      gradient: "from-green-500 to-blue-500"
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
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-lg text-gray-300">
          Showcasing innovative solutions and creative implementations
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer group">
            <CardHeader>
              <CardTitle className={`text-xl bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-200`}>
                {project.title}
              </CardTitle>
              <Badge 
                variant={project.status === "Completed" ? "default" : "secondary"}
                className="w-fit"
              >
                {project.status}
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="text-xs">
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
