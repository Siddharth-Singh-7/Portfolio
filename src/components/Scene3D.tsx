
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Stars } from '@react-three/drei';
import { Group, Mesh } from 'three';

export const Scene3D = () => {
  const groupRef = useRef<Group>(null);
  const sphereRef = useRef<Mesh>(null);
  const ringsRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.02;
    }
    
    if (sphereRef.current) {
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }

    if (ringsRef.current) {
      ringsRef.current.rotation.x = state.clock.elapsedTime * 0.05;
      ringsRef.current.rotation.z = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <>
      {/* Enhanced lighting */}
      <ambientLight intensity={0.15} />
      <directionalLight position={[10, 10, 5]} intensity={0.4} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={0.3} color="#4f46e5" />
      
      {/* Environment */}
      <Environment preset="night" />
      <Stars radius={400} depth={60} count={3000} factor={5} />
      
      {/* Camera Controls */}
      <OrbitControls 
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.3}
        minDistance={10}
        maxDistance={20}
      />

      <group ref={groupRef}>
        {/* Central sphere with enhanced materials */}
        <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
          <mesh ref={sphereRef} position={[0, 0, -8]}>
            <sphereGeometry args={[1.8, 64, 64]} />
            <meshStandardMaterial 
              color="#ffffff" 
              transparent 
              opacity={0.08}
              roughness={0.6}
              metalness={0.4}
              wireframe
            />
          </mesh>
        </Float>

        {/* Rotating rings around the sphere - Fixed to use proper ring geometry */}
        <group ref={ringsRef} position={[0, 0, -8]}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[2.5, 2.7, 64]} />
            <meshStandardMaterial 
              color="#4f46e5"
              transparent
              opacity={0.3}
              wireframe
            />
          </mesh>
          
          <mesh rotation={[0, Math.PI / 2, 0]}>
            <ringGeometry args={[3.2, 3.4, 64]} />
            <meshStandardMaterial 
              color="#06b6d4"
              transparent
              opacity={0.25}
              wireframe
            />
          </mesh>
          
          <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
            <ringGeometry args={[3.8, 4.0, 64]} />
            <meshStandardMaterial 
              color="#10b981"
              transparent
              opacity={0.2}
              wireframe
            />
          </mesh>
        </group>

        {/* Enhanced orbital elements */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const radius = 5 + Math.sin(i) * 1;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          const y = Math.sin(i * 0.5) * 2;
          
          return (
            <Float key={i} speed={0.8 + i * 0.1} rotationIntensity={0.2} floatIntensity={0.3}>
              <mesh position={[x, y, z]}>
                <sphereGeometry args={[0.08]} />
                <meshStandardMaterial 
                  color={i % 3 === 0 ? "#4f46e5" : i % 3 === 1 ? "#06b6d4" : "#10b981"}
                  transparent
                  opacity={0.6}
                  emissive={i % 3 === 0 ? "#4f46e5" : i % 3 === 1 ? "#06b6d4" : "#10b981"}
                  emissiveIntensity={0.2}
                />
              </mesh>
            </Float>
          );
        })}

        {/* Additional floating geometric shapes */}
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          const radius = 8;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          
          return (
            <Float key={`geo-${i}`} speed={0.3 + i * 0.05} rotationIntensity={0.1} floatIntensity={0.2}>
              <mesh position={[x, 0, z]} rotation={[i, i * 0.5, 0]}>
                <boxGeometry args={[0.3, 0.3, 0.3]} />
                <meshStandardMaterial 
                  color="#ffffff"
                  transparent
                  opacity={0.1}
                  wireframe
                />
              </mesh>
            </Float>
          );
        })}
      </group>
    </>
  );
};
