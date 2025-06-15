
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

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Hero Section with 3D Background */}
      <div className="relative h-screen">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 75 }}
          className="absolute inset-0"
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <Scene3D />
          </Suspense>
        </Canvas>
        <HeroSection />
      </div>

      {/* Main Content Sections */}
      <div className="relative z-10">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <EducationSection />
        <ContactSection />
      </div>

      <Suspense fallback={<LoadingScreen />} />
    </div>
  );
};

export default Index;
