
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import UXCube from './UXCube';
import PerformanceSphere from './PerformanceSphere';
import styles from './WhatWeDoScene.module.css';

const WhatWeDoScene = () => {
  return (
    <div className={styles.sceneContainer}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 2]} // Use responsive DPR instead of fixed value
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        
        <Suspense fallback={null}>
          <UXCube position={[-2, 0, 0]} />
          <PerformanceSphere position={[2, 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default WhatWeDoScene;
