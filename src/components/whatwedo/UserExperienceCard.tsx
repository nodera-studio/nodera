
import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Showcases.module.css';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import BrowserWindow from './BrowserWindow';

interface UserExperienceCardProps {
  shouldReduceMotion: boolean;
}

const UserExperienceCard: React.FC<UserExperienceCardProps> = ({ shouldReduceMotion }) => {
  return (
    <div className={`${styles.showcaseCard} transform-none`}>
      <div className={`h-full w-full absolute top-0 left-0 bg-gradient-to-br from-blue-300 opacity-10`} />
      
      <div className="flex flex-col items-center text-center px-5 md:px-8 pt-10 pb-8 relative z-10 h-full">
        <h3 className="text-3xl md:text-4xl mb-3 font-light">The Art of User Experience</h3>
        <p className="text-gray-600 text-lg mb-6 max-w-lg font-light">
          Powerful code that anticipates challenges. Scalable architecture paired with intuitive interfaces transforms visions into digital reality, no compromise needed.
        </p>
        
        <Button
          variant="primary"
          size="default"
          asChild
          className="mb-8 rounded-full px-6 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600"
        >
          <Link to="/services">Learn more</Link>
        </Button>
        
        <BrowserWindow>
          <div className="p-4 space-y-6">
            {/* Skeleton loading UI */}
            <div className="space-y-3">
              <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-100 w-3/4 rounded-full"></div>
              <div className="h-3 bg-gradient-to-r from-gray-200 to-gray-100 w-full rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              {[1, 2, 3, 4].map((_, index) => (
                <div 
                  key={index}
                  className="h-24 md:h-36 rounded-2xl flex items-center justify-center p-4"
                  style={{
                    background: index === 0 
                      ? 'linear-gradient(135deg, rgba(219,234,254,0.6) 0%, rgba(191,219,254,0.6) 100%)'
                      : index === 1
                      ? 'linear-gradient(135deg, rgba(254,226,226,0.6) 0%, rgba(254,202,202,0.6) 100%)'
                      : index === 2
                      ? 'linear-gradient(135deg, rgba(236,253,245,0.6) 0%, rgba(209,250,229,0.6) 100%)'
                      : 'linear-gradient(135deg, rgba(237,233,254,0.6) 0%, rgba(221,214,254,0.6) 100%)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                >
                  <div 
                    className="h-10 w-10 rounded-full"
                    style={{
                      background: index === 0 
                        ? 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)'
                        : index === 1
                        ? 'linear-gradient(135deg, #F87171 0%, #EF4444 100%)'
                        : index === 2
                        ? 'linear-gradient(135deg, #34D399 0%, #10B981 100%)'
                        : 'linear-gradient(135deg, #A78BFA 0%, #8B5CF6 100%)',
                      opacity: 0.9
                    }}
                  />
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div 
                className="h-14 rounded-xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(239,246,255,0.6) 0%, rgba(219,234,254,0.6) 100%)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              />
              <div 
                className="h-14 rounded-xl col-span-2"
                style={{
                  background: 'linear-gradient(135deg, rgba(243,244,246,0.6) 0%, rgba(229,231,235,0.6) 100%)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              />
            </div>
            
            <div className="flex justify-end space-x-3 pt-2">
              <div 
                className="h-8 w-8 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #34D399 0%, #10B981 100%)',
                  opacity: 0.9
                }}
              />
              <div 
                className="h-8 w-8 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)',
                  opacity: 0.9
                }}
              />
            </div>
          </div>
        </BrowserWindow>
      </div>
    </div>
  );
};

export default UserExperienceCard;
