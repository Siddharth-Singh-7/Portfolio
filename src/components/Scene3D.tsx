
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, Text3D, Center, MeshDistortMaterial, Sphere } from '@react-three/drei';
import { Group } from 'three';
import { ProjectCards } from './ProjectCards';
import { SkillsOrb } from './SkillsOrb';

export const Scene3D = () => {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7c3aed" />
      
      {/* Environment */}
      <Environment preset="night" />
      
      {/* Camera Controls */}
      <OrbitControls 
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        minDistance={5}
        maxDistance={15}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI - Math.PI / 6}
      />

      <group ref={groupRef}>
        {/* Main Title */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Center position={[0, 3, 0]}>
            <Text3D
              size={0.8}
              height={0.1}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.02}
              bevelSize={0.02}
              bevelOffset={0}
              bevelSegments={5}
            >
              SIDDHARTH SINGH
              <MeshDistortMaterial
                color="#7c3aed"
                distort={0.2}
                speed={2}
                roughness={0.4}
              />
            </Text3D>
          </Center>
        </Float>

        {/* Subtitle */}
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
          <Center position={[0, 1.8, 0]}>
            <Text3D
              size={0.3}
              height={0.05}
              curveSegments={12}
            >
              College Student & Developer
              <meshStandardMaterial color="#a855f7" />
            </Text3D>
          </Center>
        </Float>

        {/* Background Spheres */}
        <Float speed={1} rotationIntensity={1} floatIntensity={1}>
          <Sphere position={[-6, 2, -5]} scale={0.5}>
            <MeshDistortMaterial
              color="#7c3aed"
              distort={0.6}
              speed={1.5}
              transparent
              opacity={0.6}
            />
          </Sphere>
        </Float>

        <Float speed={1.2} rotationIntensity={0.8} floatIntensity={0.8}>
          <Sphere position={[6, -1, -3]} scale={0.3}>
            <MeshDistortMaterial
              color="#a855f7"
              distort={0.4}
              speed={2}
              transparent
              opacity={0.4}
            />
          </Sphere>
        </Float>

        {/* Project Cards */}
        <ProjectCards />
        
        {/* Skills Orb */}
        <SkillsOrb />
      </group>
    </>
  );
};
