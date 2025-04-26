
import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { AdaptiveDpr, PerformanceMonitor } from '@react-three/drei';
import UXCube from './UXCube';
import PerformanceSphere from './PerformanceSphere';
import styles from './WhatWeDoScene.module.css';

const WhatWeDoScene = () => {
  const [dpr, setDpr] = React.useState(1.5);
  
  return (
    <div className={styles.sceneContainer}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={dpr}
      >
        <PerformanceMonitor
          onIncline={() => setDpr(Math.min(dpr + 0.5, 2))}
          onDecline={() => setDpr(Math.max(dpr - 0.5, 1))}
        >
          <AdaptiveDpr pixelated />
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          
          <UXCube position={[-2, 0, 0]} />
          <PerformanceSphere position={[2, 0, 0]} />
        </PerformanceMonitor>
      </Canvas>
    </div>
  );
};

export default WhatWeDoScene;
