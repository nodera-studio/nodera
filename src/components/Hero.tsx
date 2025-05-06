
import React from 'react';
import styles from './Hero.module.css';
import { useBreakpoint } from '../hooks/use-mobile';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const title = "Nodera";
  const subtitle = "Web Studio";
  
  const breakpoint = useBreakpoint();
  
  // Get responsive settings based on breakpoint
  const getBlurAmount = () => {
    switch (breakpoint) {
      case 'mobile':
        return '25px';
      case 'small_tablet':
      case 'tablet':
        return '30px';
      case 'desktop':
      case 'large_desktop':
      case 'wide':
        return '40px';
      default:
        return '30px';
    }
  };
  
  const getScale = () => {
    switch (breakpoint) {
      case 'mobile':
        return 1.3;
      case 'small_tablet':
        return 1.4;
      case 'tablet':
        return 1.5;
      default:
        return 1.5;
    }
  };
  
  return (
		<div className={styles.hero}>
			<div className={styles.heroBackgroundContainer}>
				<motion.img
					src="/lovable-uploads/logo.png"
					alt="Blurred logo background"
					className={styles.heroBackground}
					loading="eager"
					animate={{
						opacity: 0.6,
						filter: `blur(${getBlurAmount()})`,
						transform: `translate(-50%, -50%) scale(${getScale() * 1})`,
						scale: [getScale() * 0.95, getScale() * 1.05, getScale() * 0.95],
					}}
					transition={{ 
						scale: { 
							repeat: Infinity, 
							duration: 4, 
							ease: "easeInOut" 
						},
						filter: { duration: 0.8 },
						transform: { duration: 0.8 }
					}}
				/>
			</div>

			<motion.div
				className="relative z-10 flex flex-col items-center justify-center h-full"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
			>
				<div className={styles.heroContent}>
					<motion.h1
						className="text-[#f5f7f8] drop-shadow-md m-0 text-6xl sm:text-8xl md:!text-9xl lg:!text-10xl font-comfortaa font-bold"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						{title}
					</motion.h1>
					<motion.span
						className="hero-subtitle text-[#f5f7f8] drop-shadow-md m-0 text-3xl sm:text-4xl md:!text-5xl font-comfortaa font-bold mt-2"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						{subtitle}
					</motion.span>
				</div>
			</motion.div>
		</div>
  );
};

export default Hero;
