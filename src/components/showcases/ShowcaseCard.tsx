
import React from 'react';
import { Button } from "@/components/ui/button";
import styles from '../styles/Showcases.module.css';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ShowcaseCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  category?: string;
  disableHover?: boolean;
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
  category = "Case Study",
  disableHover = false,
  style,
  className = '',
  ...props
}, ref) => {
  return (
    <div 
      ref={ref}
      className={`${styles.showcaseCard} ${disableHover ? styles.noHoverEffect : ''} ${className}`}
      style={style}
      {...props}
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
        <div className="lg:w-3/5 space-y-4 order-2 lg:order-1">
          <div className={styles.categoryTag}>{category}</div>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>
            {description}
          </p>
          <div className={styles.showcaseButtons}>
            <Button
              variant="primary"
              size="lg"
              asChild
              className="group"
            >
              <a href="#" className="flex items-center gap-2">
                View Project
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <a href="#">More Like This</a>
            </Button>
          </div>
        </div>
        <div className="lg:w-2/5 order-1 lg:order-2">
          <div className={styles.showcaseImage}>
            <img 
              src={imageSrc} 
              alt={imageAlt} 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
});

ShowcaseCard.displayName = 'ShowcaseCard';

export default ShowcaseCard;
