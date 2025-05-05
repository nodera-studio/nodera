
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Showcases.module.css';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import BrowserWindow from './BrowserWindow';

interface UserExperienceCardProps {
  shouldReduceMotion: boolean;
  isMobile?: boolean;
}

const UserExperienceCard: React.FC<UserExperienceCardProps> = ({ shouldReduceMotion, isMobile }) => {
  return (
    <div className={`${styles.showcaseCard} transform-none`}>
      <div className={`h-full w-full absolute top-0 left-0 bg-blue-50`} />
      
      <div className="flex flex-col items-center text-center px-5 md:px-8 pt-10 pb-8 relative z-10 h-full">
        <h3 className="text-2xl md:text-3xl mb-3">The Art of User Experience</h3>
        <p className="text-gray-600 text-sm md:text-base mb-6 max-w-lg">
          Powerful code that anticipates challenges. Scalable architecture paired with intuitive interfaces transforms visions into digital reality, no compromise needed.
        </p>
        
        <Button
          variant="outline"
          size="default"
          asChild
          className="mb-8 border border-gray-200"
        >
          <Link to="/services">Learn more</Link>
        </Button>
        
        <BrowserWindow>
          <div className="p-2 md:p-4 bg-white space-y-4 md:space-y-6">
            {/* Header lines - flat style */}
            <div className="space-y-2 md:space-y-3">
              <div className="h-2 md:h-3 bg-gray-100 w-3/4 rounded"></div>
              <div className="h-2 md:h-3 bg-gray-100 w-full rounded"></div>
            </div>
            
            {/* Grid of cards with flat colors */}
            <div className="grid grid-cols-2 gap-2 md:gap-4 pt-2">
              {[
                "bg-purple-50", 
                "bg-blue-50", 
                "bg-indigo-50", 
                "bg-purple-50"
              ].map((color, index) => (
                <div 
                  key={index}
                  className={`h-12 md:h-20 rounded flex items-center justify-center ${color} border border-gray-100`}
                >
                  <div className="h-6 w-6 md:h-8 md:w-8 bg-white rounded"></div>
                </div>
              ))}
            </div>
            
            {/* Content sections - flat style */}
            <div className="grid grid-cols-3 gap-2 md:gap-3 pt-1 md:pt-2">
              <div className="h-10 md:h-14 rounded bg-blue-50 border border-gray-100"></div>
              <div className="h-10 md:h-14 rounded col-span-2 bg-gray-50 border border-gray-100"></div>
            </div>
            
            {/* Action buttons - flat style */}
            <div className="flex justify-end space-x-2 md:space-x-3 pt-1 md:pt-2">
              <div className="h-7 w-7 md:h-9 md:w-9 rounded bg-green-100 border border-gray-100"></div>
              <div className="h-7 w-7 md:h-9 md:w-9 rounded bg-blue-100 border border-gray-100"></div>
            </div>
          </div>
        </BrowserWindow>
      </div>
    </div>
  );
};

export default UserExperienceCard;
