
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

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative cursor-none">
      {/* Custom mouse cursor */}
      <MouseCursor />
      
      {/* Enhanced animated background grid with tech patterns */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
      
      {/* Floating Tech Icons */}
      <FloatingTechIcons />
      
      {/* 3D Scene Background */}
      <div className="fixed inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 12], fov: 75 }}
          className="w-full h-full"
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </Canvas>
      </div>

      {/* Main Content - Single Page Flow */}
      <div className="relative z-10">
        <HeroSection />
        <div className="backdrop-blur-sm bg-black/10">
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
