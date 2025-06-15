
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, Text, Html } from '@react-three/drei';
import { Group } from 'three';

const skills = [
  { name: "JavaScript", level: 85, color: "#f7df1e" },
  { name: "React", level: 80, color: "#61dafb" },
  { name: "Python", level: 75, color: "#3776ab" },
  { name: "Node.js", level: 70, color: "#339933" },
  { name: "TypeScript", level: 65, color: "#3178c6" },
  { name: "Three.js", level: 60, color: "#000000" }
];

export const SkillsOrb = () => {
  const groupRef = useRef<Group>(null);
  const [showSkills, setShowSkills] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group 
      ref={groupRef} 
      position={[0, -3, 0]}
      onPointerOver={() => setShowSkills(true)}
      onPointerOut={() => setShowSkills(false)}
    >
      <Sphere scale={showSkills ? 1.2 : 1}>
        <meshStandardMaterial 
          color="#7c3aed" 
          transparent 
          opacity={0.8}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
      
      <Text
        position={[0, 0, 1.1]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        SKILLS
      </Text>

      {showSkills && (
        <>
          {skills.map((skill, index) => {
            const angle = (index / skills.length) * Math.PI * 2;
            const radius = 2;
            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            
            return (
              <group key={skill.name} position={[x, 0, z]}>
                <Sphere scale={0.1}>
                  <meshStandardMaterial color={skill.color} />
                </Sphere>
                <Html position={[0, 0.3, 0]} center>
                  <div className="bg-black/90 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                    <div className="font-bold">{skill.name}</div>
                    <div className="w-16 bg-gray-600 rounded-full h-1 mt-1">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </Html>
              </group>
            );
          })}
        </>
      )}
    </group>
  );
};
