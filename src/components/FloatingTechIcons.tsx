
import { Code, Database, Globe, Cpu, Smartphone, Terminal, Zap, Star } from "lucide-react";

export const FloatingTechIcons = () => {
  const techIcons = [
    { Icon: Code, position: "top-20 left-10", delay: "0s", color: "text-cyan-400" },
    { Icon: Database, position: "top-40 right-16", delay: "2s", color: "text-green-400" },
    { Icon: Globe, position: "top-60 left-20", delay: "4s", color: "text-blue-400" },
    { Icon: Cpu, position: "top-80 right-10", delay: "1s", color: "text-purple-400" },
    { Icon: Smartphone, position: "bottom-80 left-16", delay: "3s", color: "text-pink-400" },
    { Icon: Terminal, position: "bottom-60 right-20", delay: "5s", color: "text-yellow-400" },
    { Icon: Zap, position: "bottom-40 left-8", delay: "2.5s", color: "text-orange-400" },
    { Icon: Star, position: "bottom-20 right-12", delay: "1.5s", color: "text-indigo-400" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {techIcons.map((tech, index) => {
        const { Icon, position, delay, color } = tech;
        return (
          <div
            key={index}
            className={`absolute ${position} ${color} opacity-20 animate-pulse`}
            style={{ animationDelay: delay, animationDuration: "3s" }}
          >
            <div className="animate-bounce" style={{ animationDelay: delay }}>
              <Icon size={24} className="drop-shadow-lg" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
