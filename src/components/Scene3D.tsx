
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Stars, Sparkles } from '@react-three/drei';
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
      {/* Enhanced Lighting for futuristic feel */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#ff00ff" />
      <pointLight position={[10, -10, 10]} intensity={0.8} color="#00ff00" />
      <spotLight position={[0, 10, 0]} intensity={0.5} color="#ffff00" angle={0.3} />
      
      {/* Environment */}
      <Environment preset="night" />
      <Stars radius={300} depth={60} count={2000} factor={10} />
      <Sparkles count={100} scale={10} size={2} speed={0.4} />
      
      {/* Camera Controls */}
      <OrbitControls 
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.3}
        minDistance={5}
        maxDistance={15}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
      />

      <group ref={groupRef}>
        {/* Main rotating cube with neon glow */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <mesh ref={cubeRef} position={[-4, 2, -2]}>
            <boxGeometry args={[1.2, 1.2, 1.2]} />
            <meshStandardMaterial 
              color="#00ffff" 
              transparent 
              opacity={0.7}
              roughness={0.1}
              metalness={0.9}
              emissive="#001a1a"
              emissiveIntensity={0.2}
            />
          </mesh>
        </Float>

        {/* Floating holographic sphere */}
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
          <mesh ref={sphereRef} position={[4, -1, -1]}>
            <sphereGeometry args={[0.9, 32, 32]} />
            <meshStandardMaterial 
              color="#ff00ff" 
              transparent 
              opacity={0.6}
              roughness={0.1}
              metalness={0.8}
              emissive="#1a001a"
              emissiveIntensity={0.3}
            />
          </mesh>
        </Float>

        {/* Tech ring */}
        <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.6}>
          <mesh position={[0, -3, -3]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[1.5, 0.2, 16, 100]} />
            <meshStandardMaterial 
              color="#00ff00" 
              transparent 
              opacity={0.8}
              roughness={0.2}
              metalness={0.7}
              emissive="#001a00"
              emissiveIntensity={0.4}
            />
          </mesh>
        </Float>

        {/* Orbiting data nodes */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const radius = 7;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          const y = Math.sin(i * 2) * 1.5;
          
          return (
            <Float key={i} speed={1 + i * 0.1} rotationIntensity={0.2} floatIntensity={0.3}>
              <mesh position={[x, y, z]}>
                <octahedronGeometry args={[0.1]} />
                <meshStandardMaterial 
                  color={`hsl(${(i * 30) % 360}, 100%, 60%)`}
                  emissive={`hsl(${(i * 30) % 360}, 100%, 20%)`}
                  emissiveIntensity={0.5}
                />
              </mesh>
            </Float>
          );
        })}

        {/* Wireframe structures */}
        <mesh position={[2, 3, -4]}>
          <dodecahedronGeometry args={[0.8]} />
          <meshBasicMaterial color="#ffffff" wireframe opacity={0.3} transparent />
        </mesh>
        
        <mesh position={[-3, -2, 2]}>
          <icosahedronGeometry args={[0.6]} />
          <meshBasicMaterial color="#ffff00" wireframe opacity={0.4} transparent />
        </mesh>
      </group>
    </>
  );
};
