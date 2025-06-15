
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Scene3D } from '../components/Scene3D';
import { LoadingScreen } from '../components/LoadingScreen';
import { FloatingUI } from '../components/FloatingUI';

const Index = () => {
  return (
    <div className="h-screen w-full overflow-hidden bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        shadows
        className="w-full h-full"
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <Scene3D />
        </Suspense>
      </Canvas>
      <Suspense fallback={<LoadingScreen />}>
        <FloatingUI />
      </Suspense>
    </div>
  );
};

export default Index;
