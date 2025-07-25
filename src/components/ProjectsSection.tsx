
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Github } from "lucide-react";
import { DetailedOverview } from "./DetailedOverview";

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      title: "HealthDesk AI",
      description: "AI-based health tracking application with intelligent monitoring and personalized recommendations",
      technologies: ["React", "TypeScript", "Tailwind CSS", "AI/ML"],
      status: "Completed",
      gradient: "from-green-500 to-cyan-500",
      details: "HealthDesk AI is a comprehensive health monitoring platform that leverages artificial intelligence to provide personalized health insights and recommendations. The application features real-time health data tracking, symptom analysis using natural language processing, and predictive health analytics. Users can input their daily health metrics, receive AI-powered recommendations, and track their progress over time with detailed visualizations and reports.",
      photos: [
        "/lovable-uploads/c4f76d2c-280b-4287-87e0-52f1d41efc2e.png",
        "/lovable-uploads/36f6fa9a-a729-4c9f-a4f6-e816152b3470.png"
      ],
      features: [
        "Real-time health data visualization with interactive charts",
        "AI-powered symptom analysis and health recommendations",
        "Personalized health goals and progress tracking",
        "Integration with wearable devices and health APIs",
        "Secure data encryption and HIPAA compliance considerations"
      ],
      challenges: [
        "Implemented complex machine learning algorithms for health prediction",
        "Designed intuitive UI for health data visualization",
        "Ensured data privacy and security for sensitive health information",
        "Optimized performance for real-time data processing"
      ],
      github: "https://github.com/Siddharth-Singh-7/HealthDesk-AI"
    },
    {
      title: "Visualisation Pizza",
      description: "Advanced AI dataset visualization platform with intelligent labeling tools and interactive charts",
      technologies: ["Python", "React", "D3.js", "AI/ML"],
      status: "Completed",
      gradient: "from-blue-500 to-purple-500",
      details: "Visualisation Pizza is a powerful data visualization platform that transforms complex datasets into intuitive, interactive visualizations. The platform features AI-powered data analysis, automatic chart generation, and intelligent labeling systems. Built with a Python backend for data processing and a React frontend for user interaction, it supports multiple data formats and provides real-time collaboration features for teams working on data analysis projects.",
      photos: [
        "/lovable-uploads/8f8d0631-c93d-422c-9044-89e1f61d2993.png",
        "/lovable-uploads/c1330d15-9354-4e83-9e65-30278e6c9ead.png",
        "/lovable-uploads/e7897567-767a-499a-a411-7f0562777f0e.png",
        "/lovable-uploads/0201ddec-195e-49db-8a54-1cb18497265a.png",
        "/lovable-uploads/8c20a275-a0e4-4a4a-970a-9bd7e873ef32.png"
      ],
      features: [
        "AI-powered automatic chart type suggestions based on data structure",
        "Interactive dashboard builder with drag-and-drop interface",
        "Real-time collaboration and sharing capabilities",
        "Support for multiple data formats (CSV, JSON, API integration)",
        "Advanced filtering and data transformation tools"
      ],
      challenges: [
        "Optimized D3.js performance for large datasets (100k+ data points)",
        "Implemented real-time collaboration using WebSocket technology",
        "Created intelligent data type detection and visualization suggestions",
        "Built responsive design that works across different screen sizes"
      ],
      github: "https://github.com/Siddharth-Singh-7/visualisation-pizza-dummy-main"
    },
    {
      title: "Austra Motion Studio",
      description: "Modern website for a marketing agency featuring dynamic animations and responsive design",
      technologies: ["React", "Framer Motion", "Tailwind CSS"],
      status: "In Progress",
      gradient: "from-purple-500 to-pink-500",
      details: "Austra Motion Studio is a cutting-edge website for a digital marketing agency that showcases their services through stunning animations and interactive elements. The project emphasizes smooth user experience with carefully crafted micro-interactions, parallax scrolling effects, and dynamic content presentation. Built with performance in mind, the site features optimized animations that maintain 60fps across all devices while delivering an engaging user experience.",
      features: [
        "Smooth parallax scrolling with optimized performance",
        "Interactive service showcase with hover animations",
        "Dynamic portfolio filtering and sorting",
        "Integrated contact forms with real-time validation",
        "Mobile-first responsive design with touch-friendly interactions"
      ],
      challenges: [
        "Optimized Framer Motion animations for mobile devices",
        "Implemented complex scroll-triggered animations without affecting performance",
        "Created seamless transitions between different sections",
        "Ensured accessibility compliance while maintaining visual appeal"
      ],
      github: "https://github.com/Siddharth-Singh-7/austra-studio"
    }
  ];

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto relative">
      {/* Optimized tech grid background */}
      <div className="absolute inset-0 opacity-3">
        <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-cyan-400/20" style={{ animationDelay: `${i * 0.2}s` }}></div>
          ))}
        </div>
      </div>
      
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <div className="absolute inset-0 text-4xl md:text-5xl font-bold text-green-400 opacity-5 blur-sm">
          Featured Projects
        </div>
        <p className="text-lg text-gray-300 relative z-10">
          Showcasing innovative solutions and creative implementations
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="bg-black/40 border border-gray-700/30 backdrop-blur-sm hover:scale-[1.02] transition-all duration-200 cursor-pointer group hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/10"
            onClick={() => setSelectedProject(project)}
          >
            <CardHeader className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/3 to-purple-400/3 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              <CardTitle className={`text-xl bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent group-hover:scale-[1.02] transition-transform duration-150 relative z-10`}>
                {project.title}
              </CardTitle>
              <div className="flex items-center gap-2 relative z-10">
                <Badge 
                  variant={project.status === "Completed" ? "default" : "secondary"}
                  className={`${project.status === "Completed" ? 'bg-green-500/15 text-green-400 border-green-500/25' : 'bg-yellow-500/15 text-yellow-400 border-yellow-500/25'} backdrop-blur-sm`}
                >
                  {project.status}
                </Badge>
                <div className="ml-auto flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {project.github && <Github className="w-4 h-4 text-cyan-400 hover:text-cyan-300 cursor-pointer" />}
                </div>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <p className="text-gray-300 mb-4 group-hover:text-gray-200 transition-colors duration-200">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="text-xs border-gray-600/50 text-gray-400 hover:border-cyan-400/40 hover:text-cyan-300 transition-all duration-200">
                    {tech}
                  </Badge>
                ))}
              </div>
              <p className="text-xs text-cyan-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Click to view details
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <DetailedOverview
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        type="project"
        data={selectedProject || projects[0]}
      />
    </section>
  );
};
