
import { 
  Code, 
  Database, 
  Globe, 
  Cpu, 
  Terminal, 
  Layers,
  GitBranch,
  FileCode,
  Braces,
  Cloud
} from "lucide-react";

export const FloatingTechIcons = () => {
  const techIcons = [
    { Icon: Code, position: "top-20 left-10", delay: "0s", name: "JavaScript" },
    { Icon: Database, position: "top-32 right-16", delay: "2s", name: "Database" },
    { Icon: Globe, position: "top-48 left-20", delay: "4s", name: "React" },
    { Icon: Cpu, position: "top-64 right-12", delay: "1s", name: "Python" },
    { Icon: Terminal, position: "top-80 left-16", delay: "3s", name: "Node.js" },
    { Icon: Layers, position: "bottom-80 right-20", delay: "5s", name: "TypeScript" },
    { Icon: GitBranch, position: "bottom-64 left-8", delay: "2.5s", name: "Git" },
    { Icon: FileCode, position: "bottom-48 right-14", delay: "1.5s", name: "Development" },
    { Icon: Braces, position: "bottom-32 left-12", delay: "3.5s", name: "Programming" },
    { Icon: Cloud, position: "bottom-16 right-8", delay: "4.5s", name: "Cloud" }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {techIcons.map((tech, index) => {
        const { Icon, position, delay, name } = tech;
        return (
          <div
            key={index}
            className={`absolute ${position} text-white/10 opacity-60 animate-float`}
            style={{ 
              animationDelay: delay, 
              animationDuration: `${6 + index * 0.3}s`
            }}
          >
            <Icon size={20} className="transition-all duration-500 hover:text-white/30" />
          </div>
        );
      })}
    </div>
  );
};
