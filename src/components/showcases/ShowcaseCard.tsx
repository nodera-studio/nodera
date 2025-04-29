
import React from 'react';
import { Button } from "@/components/ui/button";
import styles from '../styles/Showcases.module.css';
import { motion } from 'framer-motion';

interface ShowcaseCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  disableHover?: boolean;
  style?: React.CSSProperties;
  className?: string;
  initial?: any;
  whileInView?: any;
  viewport?: any;
  transition?: any;
}

// Using explicit forwardRef pattern with proper types
const ShowcaseCard = React.forwardRef<HTMLDivElement, ShowcaseCardProps>(({
  title,
  description,
  imageSrc,
  imageAlt,
  disableHover = false,
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
      className={`${styles.showcaseCard} ${disableHover ? styles.noHoverEffect : ''} ${className}`}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      style={style}
      {...props}
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        <div className="lg:w-1/2 space-y-4 order-2 lg:order-1">
          <h3 className="">{title}</h3>
          <p className="text-gray-600 mb-3">
            {description}
          </p>
          <div className="flex flex-wrap gap-4 mt-3">
            <Button
              variant="primary"
              size="lg"
              asChild
            >
              <a href="#">The Full Story</a>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              asChild
            >
              <a href="#">More Creations</a>
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 order-1 lg:order-2">
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="showcase-image rounded-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
});

ShowcaseCard.displayName = 'ShowcaseCard';

export default ShowcaseCard;
