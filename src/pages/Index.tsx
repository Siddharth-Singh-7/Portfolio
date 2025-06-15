
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Scene3D } from '../components/Scene3D';
import { LoadingScreen } from '../components/LoadingScreen';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { AchievementsSection } from '../components/AchievementsSection';
import { EducationSection } from '../components/EducationSection';
import { ContactSection } from '../components/ContactSection';
import { FloatingTechIcons } from '../components/FloatingTechIcons';
import { MouseCursor } from '../components/MouseCursor';
import { ParticleField } from '../components/ParticleField';
import { GeometricShapes } from '../components/GeometricShapes';
import { InteractiveGrid } from '../components/InteractiveGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative cursor-none">
      {/* Custom mouse cursor */}
      <MouseCursor />
      
      {/* Interactive grid background */}
      <InteractiveGrid />
      
      {/* Particle field effect */}
      <ParticleField />
      
      {/* Geometric shapes */}
      <GeometricShapes />
      
      {/* Floating Tech Icons */}
      <FloatingTechIcons />
      
      {/* Enhanced 3D Scene Background */}
      <div className="fixed inset-0 z-0 opacity-40">
        <Canvas
          camera={{ position: [0, 0, 15], fov: 65 }}
          className="w-full h-full"
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </Canvas>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <HeroSection />
        <div className="backdrop-blur-[2px] bg-black/30">
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <AchievementsSection />
          <EducationSection />
          <ContactSection />
        </div>
      </div>

      <Suspense fallback={<LoadingScreen />} />
    </div>
  );
};

export default Index;
