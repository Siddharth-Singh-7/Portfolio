
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Stars } from '@react-three/drei';
import { Group, Mesh } from 'three';

export const Scene3D = () => {
  const groupRef = useRef<Group>(null);
  const cubeRef = useRef<Mesh>(null);
  const sphereRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
    
    if (cubeRef.current) {
      cubeRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      cubeRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }

    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7c3aed" />
      <pointLight position={[10, -10, 10]} intensity={0.3} color="#3b82f6" />
      
      {/* Environment */}
      <Environment preset="night" />
      <Stars radius={300} depth={60} count={1000} factor={7} />
      
      {/* Camera Controls */}
      <OrbitControls 
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
        minDistance={5}
        maxDistance={15}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
      />

      <group ref={groupRef}>
        {/* Main rotating cube */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh ref={cubeRef} position={[-4, 2, -2]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial 
              color="#7c3aed" 
              transparent 
              opacity={0.8}
              roughness={0.3}
              metalness={0.7}
            />
          </mesh>
        </Float>

        {/* Floating sphere */}
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
          <mesh ref={sphereRef} position={[4, -1, -1]}>
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshStandardMaterial 
              color="#3b82f6" 
              transparent 
              opacity={0.7}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>
        </Float>

        {/* Additional geometric shapes */}
        <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.6}>
          <mesh position={[0, -3, -3]}>
            <torusGeometry args={[1, 0.3, 16, 100]} />
            <meshStandardMaterial 
              color="#ec4899" 
              transparent 
              opacity={0.6}
              roughness={0.4}
              metalness={0.6}
            />
          </mesh>
        </Float>

        {/* Orbiting particles */}
        {Array.from({ length: 20 }).map((_, i) => {
          const angle = (i / 20) * Math.PI * 2;
          const radius = 6;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          
          return (
            <mesh key={i} position={[x, Math.sin(i) * 2, z]}>
              <sphereGeometry args={[0.05, 8, 8]} />
              <meshStandardMaterial 
                color={`hsl(${(i * 18) % 360}, 70%, 60%)`}
                emissive={`hsl(${(i * 18) % 360}, 70%, 30%)`}
              />
            </mesh>
          );
        })}
      </group>
    </>
  );
};
