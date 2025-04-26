
import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import UXCube from './UXCube';
import PerformanceSphere from './PerformanceSphere';
import styles from './WhatWeDoScene.module.css';

const WhatWeDoScene = () => {
  const [dpr] = useState(1.5);
  
  return (
    <div className={styles.sceneContainer}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={dpr}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        
        <UXCube position={[-2, 0, 0]} />
        <PerformanceSphere position={[2, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default WhatWeDoScene;
