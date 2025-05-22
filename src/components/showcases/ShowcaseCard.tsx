
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initial?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  whileInView?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  viewport?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transition?: any;
}

const ShowcaseCard = React.forwardRef<HTMLDivElement, ShowcaseCardProps>(({
  title,
  description,
  imageSrc,
  imageAlt,
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
      className={`${styles.showcaseCard} ${className} flex flex-col justify-between pt-[60px] pb-[60px]`}
      initial={initial || { opacity: 0, y: 50 }}
      whileInView={whileInView || { opacity: 1, y: 0 }}
      viewport={viewport || { once: true, margin: "-100px" }}
      transition={transition || { duration: 0.6 }}
      style={style}
      {...props}
    >
      {/* Removed the gradient div that was here */}
      
      <div className="flex flex-col justify-between items-center text-center min-h-[160px] px-5 md:px-8 relative z-10">
        <h3 className="text-3xl md:text-4xl">
          {title}
        </h3>
        <p className="text-gray-600 text-lg max-w-xl my-2">
          {description}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
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
      </div>

      <div className="flex justify-center items-center flex-grow px-5 md:px-8 relative z-10 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className="w-auto h-auto max-w-full max-h-[65%] object-contain"
        />
      </div>
    </motion.div>
  );
});

ShowcaseCard.displayName = 'ShowcaseCard';

export default ShowcaseCard;
