
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox, Text, Html } from '@react-three/drei';
import { Mesh, Group } from 'three';
import { useSpring, animated } from '@react-spring/three';

const projects = [
  {
    title: "Web Portfolio",
    description: "3D interactive portfolio built with React Three Fiber",
    tech: "React, Three.js, TypeScript",
    position: [-3, 0, 2] as [number, number, number],
    color: "#3b82f6"
  },
  {
    title: "Study Tracker",
    description: "App to track study sessions and progress",
    tech: "React, Node.js, MongoDB",
    position: [0, -1, 1] as [number, number, number],
    color: "#10b981"
  },
  {
    title: "Campus Navigator",
    description: "Mobile app for campus navigation and events",
    tech: "React Native, Firebase",
    position: [3, 0.5, 1.5] as [number, number, number],
    color: "#f59e0b"
  }
];

export const ProjectCards = () => {
  return (
    <group>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </group>
  );
};

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    tech: string;
    position: [number, number, number];
    color: string;
  };
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const meshRef = useRef<Mesh>(null);
  const groupRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);
  
  const { scale } = useSpring({
    scale: hovered ? 1.1 : 1,
    config: { tension: 300, friction: 10 }
  });

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime + project.position[0]) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={project.position}>
      <animated.group scale={scale}>
        <RoundedBox
          ref={meshRef}
          args={[2, 1.5, 0.1]}
          radius={0.05}
          smoothness={4}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          castShadow
          receiveShadow
        >
          <meshStandardMaterial 
            color={project.color} 
            transparent 
            opacity={hovered ? 0.9 : 0.7}
            roughness={0.3}
            metalness={0.1}
          />
        </RoundedBox>
        
        <Text
          position={[0, 0.3, 0.06]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {project.title}
        </Text>
        
        <Text
          position={[0, 0, 0.06]}
          fontSize={0.08}
          color="#e2e8f0"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.8}
          textAlign="center"
        >
          {project.description}
        </Text>
        
        <Text
          position={[0, -0.3, 0.06]}
          fontSize={0.06}
          color="#cbd5e1"
          anchorX="center"
          anchorY="middle"
          maxWidth={1.8}
          textAlign="center"
        >
          {project.tech}
        </Text>

        {hovered && (
          <Html position={[0, -0.8, 0]} center>
            <div className="bg-black/80 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
              Click to learn more
            </div>
          </Html>
        )}
      </animated.group>
    </group>
  );
};
