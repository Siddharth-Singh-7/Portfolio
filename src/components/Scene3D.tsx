
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Stars, Sparkles, Text } from '@react-three/drei';
import { Group, Mesh } from 'three';

export const Scene3D = () => {
  const groupRef = useRef<Group>(null);
  const logoRef = useRef<Mesh>(null);
  const ringRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
    
    if (logoRef.current) {
      logoRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      logoRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.3;
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <>
      {/* Enhanced Lighting for tech atmosphere */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#ff00ff" />
      <pointLight position={[10, -10, 10]} intensity={1} color="#00ff88" />
      <spotLight position={[0, 15, 0]} intensity={1} color="#ffff00" angle={0.3} />
      
      {/* Environment */}
      <Environment preset="night" />
      <Stars radius={500} depth={100} count={5000} factor={15} />
      <Sparkles count={200} scale={20} size={4} speed={0.8} />
      
      {/* Camera Controls */}
      <OrbitControls 
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.3}
        minDistance={8}
        maxDistance={25}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
      />

      <group ref={groupRef}>
        {/* Central Tech Logo/Symbol */}
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
          <mesh ref={logoRef} position={[0, 0, -5]}>
            <octahedronGeometry args={[2]} />
            <meshStandardMaterial 
              color="#00ffff" 
              transparent 
              opacity={0.8}
              roughness={0.1}
              metalness={0.9}
              emissive="#004444"
              emissiveIntensity={0.6}
            />
          </mesh>
        </Float>

        {/* Tech Ring Structure */}
        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.2}>
          <mesh ref={ringRef} position={[0, 0, -8]}>
            <torusGeometry args={[4, 0.2, 16, 100]} />
            <meshStandardMaterial 
              color="#ff00ff" 
              transparent 
              opacity={0.7}
              roughness={0.1}
              metalness={0.8}
              emissive="#440044"
              emissiveIntensity={0.5}
            />
          </mesh>
        </Float>

        {/* Orbiting Data Nodes - Tech themed */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const radius = 6;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          const y = Math.sin(i * 2) * 1.5;
          
          return (
            <Float key={i} speed={1 + i * 0.1} rotationIntensity={0.4} floatIntensity={0.3}>
              <mesh position={[x, y, z]}>
                <tetrahedronGeometry args={[0.2]} />
                <meshStandardMaterial 
                  color={`hsl(${(i * 30) % 360}, 80%, 60%)`}
                  emissive={`hsl(${(i * 30) % 360}, 80%, 20%)`}
                  emissiveIntensity={0.8}
                  transparent
                  opacity={0.9}
                />
              </mesh>
            </Float>
          );
        })}

        {/* Floating Tech Panels */}
        <Float speed={1.8} rotationIntensity={0.1} floatIntensity={0.2}>
          <mesh position={[8, 2, -10]} rotation={[0, Math.PI / 4, 0]}>
            <planeGeometry args={[3, 2]} />
            <meshStandardMaterial 
              color="#00ff88" 
              transparent 
              opacity={0.3}
              emissive="#002200"
              emissiveIntensity={0.3}
            />
          </mesh>
        </Float>

        <Float speed={2.2} rotationIntensity={0.1} floatIntensity={0.2}>
          <mesh position={[-8, -1, -10]} rotation={[0, -Math.PI / 4, 0]}>
            <planeGeometry args={[3, 2]} />
            <meshStandardMaterial 
              color="#ffff00" 
              transparent 
              opacity={0.3}
              emissive="#333300"
              emissiveIntensity={0.3}
            />
          </mesh>
        </Float>

        {/* Holographic Grid Lines */}
        <mesh position={[0, -8, -5]} rotation={[Math.PI / 2, 0, 0]}>
          <planeGeometry args={[20, 20, 20, 20]} />
          <meshBasicMaterial 
            color="#00ffff" 
            wireframe 
            transparent 
            opacity={0.1}
          />
        </mesh>
      </group>
    </>
  );
};
