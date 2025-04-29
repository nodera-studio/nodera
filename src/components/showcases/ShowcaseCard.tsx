
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

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
      className={`showcase-card ${disableHover ? 'no-hover-effect' : ''} ${className}`}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      style={style}
      {...props}
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
        <div className="lg:w-3/5 space-y-5 order-2 lg:order-1">
          <div>
            <span className="text-xs uppercase tracking-widest text-gray-500 font-medium">Featured Project</span>
            <h3 className="text-3xl md:text-4xl font-light mt-2 tracking-tight">{title}</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap gap-6 mt-6 pt-2">
            <Button
              variant="ghost"
              className="group px-0 hover:bg-transparent"
              asChild
            >
              <a href="#" className="flex items-center gap-2 text-black hover:text-black/80">
                <span className="border-b border-transparent group-hover:border-black/80 transition-all duration-300">The Full Story</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </Button>
            <Button
              variant="ghost"
              className="text-gray-500 px-0 hover:text-gray-800 hover:bg-transparent"
              asChild
            >
              <a href="#">More Creations</a>
            </Button>
          </div>
        </div>
        <div className="lg:w-2/5 order-1 lg:order-2 overflow-hidden">
          <div className="image-container overflow-hidden">
            <img 
              src={imageSrc} 
              alt={imageAlt} 
              className="showcase-image w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
});

ShowcaseCard.displayName = 'ShowcaseCard';

export default ShowcaseCard;
