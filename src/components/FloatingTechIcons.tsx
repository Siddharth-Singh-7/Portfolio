
import { 
  Code, 
  Database, 
  Globe, 
  Cpu, 
  Smartphone, 
  Terminal, 
  Zap, 
  Star,
  Layers,
  GitBranch,
  FileCode,
  Braces,
  Cloud,
  Coffee,
  Monitor
} from "lucide-react";

export const FloatingTechIcons = () => {
  const techIcons = [
    { Icon: Code, position: "top-20 left-10", delay: "0s", color: "text-cyan-400", name: "JavaScript" },
    { Icon: Database, position: "top-32 right-16", delay: "2s", color: "text-green-400", name: "MySQL" },
    { Icon: Globe, position: "top-48 left-20", delay: "4s", color: "text-blue-400", name: "React" },
    { Icon: Cpu, position: "top-64 right-12", delay: "1s", color: "text-purple-400", name: "Python" },
    { Icon: Terminal, position: "top-80 left-16", delay: "3s", color: "text-yellow-400", name: "Node.js" },
    { Icon: Layers, position: "bottom-80 right-20", delay: "5s", color: "text-pink-400", name: "TypeScript" },
    { Icon: GitBranch, position: "bottom-64 left-8", delay: "2.5s", color: "text-orange-400", name: "Git" },
    { Icon: FileCode, position: "bottom-48 right-14", delay: "1.5s", color: "text-indigo-400", name: "C++" },
    { Icon: Braces, position: "bottom-32 left-12", delay: "3.5s", color: "text-red-400", name: "Java" },
    { Icon: Cloud, position: "bottom-16 right-8", delay: "4.5s", color: "text-teal-400", name: "Cloud" },
    { Icon: Coffee, position: "top-96 left-24", delay: "6s", color: "text-amber-400", name: "Coffee" },
    { Icon: Monitor, position: "bottom-96 right-24", delay: "0.5s", color: "text-emerald-400", name: "Development" },
    { Icon: Zap, position: "top-40 left-32", delay: "7s", color: "text-violet-400", name: "Performance" },
    { Icon: Star, position: "bottom-40 right-32", delay: "8s", color: "text-rose-400", name: "Quality" },
    { Icon: Smartphone, position: "top-72 right-28", delay: "9s", color: "text-lime-400", name: "Mobile" }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {techIcons.map((tech, index) => {
        const { Icon, position, delay, color, name } = tech;
        return (
          <div
            key={index}
            className={`absolute ${position} ${color} opacity-20 group`}
            style={{ 
              animationDelay: delay, 
              animationDuration: "4s",
              animation: `float ${4 + index * 0.2}s ease-in-out infinite alternate`
            }}
          >
            <div 
              className="relative"
              style={{ 
                animationDelay: delay,
                animation: `spin ${8 + index * 0.5}s linear infinite`
              }}
            >
              <Icon size={28} className="drop-shadow-lg filter hover:drop-shadow-xl transition-all duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-current to-transparent rounded-full blur-sm opacity-30"></div>
            </div>
            
            {/* Tooltip on hover */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white bg-black/50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap backdrop-blur-sm">
              {name}
            </div>
          </div>
        );
      })}
      
      {/* Custom floating animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(360deg); }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};
