
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Stars, Sparkles } from '@react-three/drei';
import { Group, Mesh } from 'three';

export const Scene3D = () => {
  const groupRef = useRef<Group>(null);
  const cubeRef = useRef<Mesh>(null);
  const sphereRef = useRef<Mesh>(null);
  const torusRef = useRef<Mesh>(null);

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

    if (torusRef.current) {
      torusRef.current.rotation.z = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <>
      {/* Enhanced Lighting for futuristic feel */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={1.2} color="#ff00ff" />
      <pointLight position={[10, -10, 10]} intensity={1} color="#00ff00" />
      <spotLight position={[0, 15, 0]} intensity={0.8} color="#ffff00" angle={0.3} />
      
      {/* Environment */}
      <Environment preset="night" />
      <Stars radius={400} depth={80} count={3000} factor={12} />
      <Sparkles count={150} scale={15} size={3} speed={0.6} />
      
      {/* Camera Controls */}
      <OrbitControls 
        enablePan={false}
        enableZoom={false}
        enableRotate={true}
        autoRotate={true}
        autoRotateSpeed={0.5}
        minDistance={6}
        maxDistance={20}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
      />

      <group ref={groupRef}>
        {/* Main rotating cube with enhanced neon glow */}
        <Float speed={2} rotationIntensity={0.8} floatIntensity={0.6}>
          <mesh ref={cubeRef} position={[-5, 3, -3]}>
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshStandardMaterial 
              color="#00ffff" 
              transparent 
              opacity={0.8}
              roughness={0.1}
              metalness={0.9}
              emissive="#003333"
              emissiveIntensity={0.4}
            />
          </mesh>
        </Float>

        {/* Floating holographic sphere */}
        <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1}>
          <mesh ref={sphereRef} position={[5, -2, -2]}>
            <sphereGeometry args={[1.2, 32, 32]} />
            <meshStandardMaterial 
              color="#ff00ff" 
              transparent 
              opacity={0.7}
              roughness={0.1}
              metalness={0.8}
              emissive="#330033"
              emissiveIntensity={0.5}
            />
          </mesh>
        </Float>

        {/* Enhanced tech ring */}
        <Float speed={3} rotationIntensity={0.6} floatIntensity={0.8}>
          <mesh ref={torusRef} position={[0, -4, -4]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[2, 0.3, 20, 100]} />
            <meshStandardMaterial 
              color="#00ff00" 
              transparent 
              opacity={0.9}
              roughness={0.2}
              metalness={0.7}
              emissive="#003300"
              emissiveIntensity={0.6}
            />
          </mesh>
        </Float>

        {/* Orbiting data nodes with more variety */}
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i / 16) * Math.PI * 2;
          const radius = 8 + Math.sin(i * 0.5) * 2;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          const y = Math.sin(i * 3) * 2;
          
          return (
            <Float key={i} speed={1.2 + i * 0.1} rotationIntensity={0.3} floatIntensity={0.4}>
              <mesh position={[x, y, z]}>
                <octahedronGeometry args={[0.15]} />
                <meshStandardMaterial 
                  color={`hsl(${(i * 22.5) % 360}, 100%, 60%)`}
                  emissive={`hsl(${(i * 22.5) % 360}, 100%, 20%)`}
                  emissiveIntensity={0.7}
                  transparent
                  opacity={0.8}
                />
              </mesh>
            </Float>
          );
        })}

        {/* Additional wireframe structures */}
        <mesh position={[3, 4, -5]}>
          <dodecahedronGeometry args={[1]} />
          <meshBasicMaterial color="#ffffff" wireframe opacity={0.4} transparent />
        </mesh>
        
        <mesh position={[-4, -3, 3]}>
          <icosahedronGeometry args={[0.8]} />
          <meshBasicMaterial color="#ffff00" wireframe opacity={0.5} transparent />
        </mesh>

        {/* Floating tech panels */}
        <Float speed={2.5} rotationIntensity={0.2} floatIntensity={0.3}>
          <mesh position={[6, 0, -6]} rotation={[0, Math.PI / 4, 0]}>
            <planeGeometry args={[2, 1.2]} />
            <meshStandardMaterial 
              color="#00ffff" 
              transparent 
              opacity={0.3}
              emissive="#001a1a"
              emissiveIntensity={0.2}
            />
          </mesh>
        </Float>
      </group>
    </>
  );
};
