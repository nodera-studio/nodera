
import React from 'react';
import { Button } from "@/components/ui/button";
import styles from '../styles/Showcases.module.css';
import { motion } from 'framer-motion';

interface ShowcaseCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  gradientDirection?: string;
  gradientColor?: string;
  style?: React.CSSProperties;
  className?: string;
  initial?: any;
  whileInView?: any;
  viewport?: any;
  transition?: any;
}

const ShowcaseCard = React.forwardRef<HTMLDivElement, ShowcaseCardProps>(({
  title,
  description,
  imageSrc,
  imageAlt,
  gradientDirection = "to-br",
  gradientColor = "from-purple-300",
  style,
  className = '',
  initial,
  whileInView,
  viewport,
  transition,
  ...props
}, ref) => {
  return (
    <motion.div 
      ref={ref}
      className={`${styles.showcaseCard} ${className}`}
      initial={initial || { opacity: 0, y: 50 }}
      whileInView={whileInView || { opacity: 1, y: 0 }}
      viewport={viewport || { once: true, margin: "-100px" }}
      transition={transition || { duration: 0.6 }}
      style={style}
      {...props}
    >
      <div className={`h-full w-full absolute top-0 left-0 bg-gradient-to-br ${gradientDirection} ${gradientColor} opacity-10`} />
      
      <div className="flex flex-col items-center text-center px-5 md:px-8 py-8 relative z-10">
        <h3 className="text-[27px] md:text-[33px] mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 max-w-lg">
          {description}
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <Button
            variant="primary"
            size="default"
            asChild
          >
            <a href="#">The Full Story</a>
          </Button>
          <Button
            variant="secondary"
            size="default"
            asChild
          >
            <a href="#">More Creations</a>
          </Button>
        </div>
        <div className="mt-4 max-w-4xl">
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </motion.div>
  );
});

ShowcaseCard.displayName = 'ShowcaseCard';

export default ShowcaseCard;
