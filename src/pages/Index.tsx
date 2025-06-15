
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
      
      {/* Subtle grid background */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />
      
      {/* Floating Tech Icons */}
      <FloatingTechIcons />
      
      {/* 3D Scene Background - more subtle */}
      <div className="fixed inset-0 z-0 opacity-30">
        <Canvas
          camera={{ position: [0, 0, 15], fov: 60 }}
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
        <div className="backdrop-blur-[1px] bg-black/20">
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
