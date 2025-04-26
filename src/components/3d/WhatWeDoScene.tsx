
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, AdaptiveDpr, BakeShadows } from '@react-three/drei';
import UXCube from './UXCube';
import PerformanceSphere from './PerformanceSphere';

const WhatWeDoScene: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '300px', position: 'relative' }}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight
            position={[10, 10, 10]}
            intensity={0.8}
            castShadow
          />
          <group>
            <UXCube position={[-2, 0, 0]} />
            <PerformanceSphere position={[2, 0, 0]} />
          </group>
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 2 - 0.5}
            maxPolarAngle={Math.PI / 2 + 0.5}
          />
          <AdaptiveDpr pixelated />
          <BakeShadows />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default WhatWeDoScene;
