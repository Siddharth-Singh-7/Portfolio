
import { Canvas } from '@react-three/fiber';
import { Suspense, useState, memo } from 'react';
import { Scene3D } from '../components/Scene3D';
import { WelcomeScreen } from '../components/WelcomeScreen';
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

// Memoize heavy components
const MemoizedScene3D = memo(Scene3D);
const MemoizedParticleField = memo(ParticleField);
const MemoizedGeometricShapes = memo(GeometricShapes);
const MemoizedFloatingTechIcons = memo(FloatingTechIcons);

const Index = () => {
  const [showMainContent, setShowMainContent] = useState(false);

  const handleEnterWebsite = () => {
    setShowMainContent(true);
  };

  if (!showMainContent) {
    return <WelcomeScreen onEnterWebsite={handleEnterWebsite} />;
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative cursor-none">
      <MouseCursor />
      <InteractiveGrid />
      <MemoizedParticleField />
      <MemoizedGeometricShapes />
      <MemoizedFloatingTechIcons />
      
      <div className="fixed inset-0 z-0 opacity-30">
        <Canvas
          camera={{ position: [0, 0, 15], fov: 65 }}
          className="w-full h-full"
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance"
          }}
          dpr={Math.min(window.devicePixelRatio, 2)}
        >
          <Suspense fallback={null}>
            <MemoizedScene3D />
          </Suspense>
        </Canvas>
      </div>

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
    </div>
  );
};

export default Index;
