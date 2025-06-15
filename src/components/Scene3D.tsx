
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Stars } from '@react-three/drei';
import { Group, Mesh } from 'three';

export const Scene3D = () => {
  const groupRef = useRef<Group>(null);
  const sphereRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.02;
    }
    
    if (sphereRef.current) {
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  return (
    <>
      {/* Minimal lighting */}
      <ambientLight intensity={0.1} />
      <directionalLight position={[10, 10, 5]} intensity={0.3} color="#ffffff" />
      
      {/* Environment */}
      <Environment preset="night" />
      <Stars radius={300} depth={50} count={2000} factor={4} />
      
      {/* Camera Controls */}
      <OrbitControls 
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.2}
        minDistance={10}
        maxDistance={20}
      />

      <group ref={groupRef}>
        {/* Central minimalist sphere */}
        <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
          <mesh ref={sphereRef} position={[0, 0, -8]}>
            <sphereGeometry args={[1.5, 32, 32]} />
            <meshStandardMaterial 
              color="#ffffff" 
              transparent 
              opacity={0.05}
              roughness={0.8}
              metalness={0.2}
              wireframe
            />
          </mesh>
        </Float>

        {/* Subtle orbital elements */}
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          const radius = 4;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          
          return (
            <Float key={i} speed={0.5 + i * 0.1} rotationIntensity={0.1} floatIntensity={0.2}>
              <mesh position={[x, 0, z]}>
                <sphereGeometry args={[0.05]} />
                <meshStandardMaterial 
                  color="#ffffff"
                  transparent
                  opacity={0.3}
                />
              </mesh>
            </Float>
          );
        })}
      </group>
    </>
  );
};
