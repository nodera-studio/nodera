
import React, { useState } from 'react';
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
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading state for the shimmer effect
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleFeatureHover = (index: number | null) => {
    setActiveFeature(index);
  };

  return (
    <motion.div 
      className={`${styles.showcaseCard}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className={`h-full w-full absolute top-0 left-0 bg-gradient-to-br from-blue-300/10 to-blue-100/10`} />
      
      <div className="flex flex-col items-center text-center px-5 md:px-8 pt-10 pb-12 relative z-10 h-full">
        <h3 className="text-3xl md:text-4xl mb-3 font-bold">The Art of User Experience</h3>
        <p className="text-gray-600 text-lg mb-6 max-w-lg">
          Powerful code that anticipates challenges. Scalable architecture paired with intuitive interfaces transforms visions into digital reality, no compromise needed.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          <Button
            variant="primary"
            size="default"
            asChild
          >
            <Link to="/services">Learn more</Link>
          </Button>
          <Button
            variant="secondary"
            size="default"
            asChild
          >
            <Link to="/services">Our Services</Link>
          </Button>
        </div>
        
        <div className="flex-1 w-full flex items-center justify-center mb-4">
          <BrowserWindow className="max-h-[450px] h-[400px] mx-8 md:mx-12">
            <div className="website-layout">
              {/* Website Header/Navigation */}
              <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
                <div className="flex justify-between items-center px-4 py-3">
                  <div className={`h-8 w-8 rounded-md bg-blue-500 ${isLoading ? 'animate-pulse' : ''}`}></div>
                  <div className="hidden md:flex space-x-4 flex-grow justify-center">
                    {[1, 2, 3, 4].map((item) => (
                      <div
                        key={item}
                        className={`h-4 w-16 rounded ${isLoading ? 'bg-gray-200 animate-pulse' : 'bg-gray-200 hover:bg-gray-300 transition-colors'}`}
                      ></div>
                    ))}
                  </div>
                  <div className={`h-8 w-8 rounded-full ${isLoading ? 'bg-gray-200 animate-pulse' : 'bg-gray-200 hover:bg-gray-300 transition-colors'}`}></div>
                </div>
              </div>
              
              {/* Hero Section */}
              <div className="px-4 py-6 md:py-10">
                <div className="text-center space-y-4 mb-8">
                  <div className={`h-8 w-3/4 mx-auto rounded ${isLoading ? 'bg-gray-200 animate-pulse' : 'bg-gradient-to-r from-blue-400 to-indigo-500 text-white'}`}></div>
                  <div className={`h-4 w-full md:w-2/3 mx-auto rounded ${isLoading ? 'bg-gray-100 animate-pulse' : 'bg-gray-100'}`}></div>
                  <div className={`h-4 w-5/6 md:w-1/2 mx-auto rounded ${isLoading ? 'bg-gray-100 animate-pulse' : 'bg-gray-100'}`}></div>
                </div>
                
                <motion.div 
                  className={`h-40 w-full rounded-lg ${isLoading ? 'bg-gray-200 animate-pulse' : 'bg-blue-50 border border-blue-100'}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-center h-full">
                    {!isLoading && (
                      <div className="h-16 w-16 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="h-8 w-8 bg-white rounded-md"></div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
              
              {/* Features Section */}
              <div className="px-4 py-6 bg-gray-50">
                <div className={`h-6 w-32 mx-auto rounded mb-6 ${isLoading ? 'bg-gray-200 animate-pulse' : 'bg-gray-800'}`}></div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((feature) => (
                    <motion.div
                      key={feature}
                      className={`p-3 rounded-lg ${isLoading 
                        ? 'bg-gray-200 animate-pulse' 
                        : activeFeature === feature
                          ? 'bg-blue-100 border border-blue-200 shadow-md' 
                          : 'bg-white border border-gray-200'
                      }`}
                      whileHover={{ 
                        scale: isLoading ? 1 : 1.05,
                        zIndex: 10
                      }}
                      onHoverStart={() => handleFeatureHover(feature)}
                      onHoverEnd={() => handleFeatureHover(null)}
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className={`h-8 w-8 rounded-md mb-2 ${isLoading 
                          ? 'bg-gray-300' 
                          : activeFeature === feature
                            ? 'bg-blue-500'
                            : 'bg-gray-200'
                        }`}></div>
                        <div className={`h-3 w-2/3 rounded mb-1 ${isLoading ? 'bg-gray-300' : 'bg-gray-300'}`}></div>
                        <div className={`h-2 w-3/4 rounded ${isLoading ? 'bg-gray-300' : 'bg-gray-200'}`}></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="px-4 py-8 text-center">
                <div className={`h-6 w-2/3 mx-auto rounded mb-4 ${isLoading ? 'bg-gray-200 animate-pulse' : 'bg-gray-800'}`}></div>
                <div className={`h-4 w-5/6 md:w-1/2 mx-auto rounded mb-6 ${isLoading ? 'bg-gray-100 animate-pulse' : 'bg-gray-200'}`}></div>
                <motion.div 
                  className={`h-10 w-32 mx-auto rounded-full ${isLoading 
                    ? 'bg-gray-300 animate-pulse' 
                    : 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600'
                  }`}
                  whileHover={{ scale: isLoading ? 1 : 1.05 }}
                  whileTap={{ scale: isLoading ? 1 : 0.95 }}
                ></motion.div>
              </div>
              
              {/* Footer */}
              <div className="px-4 py-6 bg-gray-800">
                <div className="flex flex-wrap justify-between">
                  <div className="w-full md:w-1/3 mb-4 md:mb-0">
                    <div className={`h-5 w-24 rounded mb-3 ${isLoading ? 'bg-gray-600 animate-pulse' : 'bg-gray-600'}`}></div>
                    <div className={`h-3 w-4/5 rounded mb-2 ${isLoading ? 'bg-gray-600 animate-pulse' : 'bg-gray-600'}`}></div>
                    <div className={`h-3 w-3/4 rounded ${isLoading ? 'bg-gray-600 animate-pulse' : 'bg-gray-600'}`}></div>
                  </div>
                  
                  <div className="w-1/2 md:w-1/4">
                    <div className={`h-4 w-16 rounded mb-3 ${isLoading ? 'bg-gray-600 animate-pulse' : 'bg-gray-600'}`}></div>
                    {[1, 2, 3].map((item) => (
                      <div 
                        key={item}
                        className={`h-3 w-20 rounded mb-2 ${isLoading ? 'bg-gray-600 animate-pulse' : 'bg-gray-600 hover:bg-gray-500 transition-colors'}`}
                      ></div>
                    ))}
                  </div>
                  
                  <div className="w-1/2 md:w-1/4">
                    <div className={`h-4 w-16 rounded mb-3 ${isLoading ? 'bg-gray-600 animate-pulse' : 'bg-gray-600'}`}></div>
                    {[1, 2, 3].map((item) => (
                      <div 
                        key={item} 
                        className={`h-3 w-20 rounded mb-2 ${isLoading ? 'bg-gray-600 animate-pulse' : 'bg-gray-600 hover:bg-gray-500 transition-colors'}`}
                      ></div>
                    ))}
                  </div>
                </div>
                
                <div className={`h-0.5 w-full my-4 ${isLoading ? 'bg-gray-700 animate-pulse' : 'bg-gray-700'}`}></div>
                
                <div className="flex justify-between items-center">
                  <div className={`h-3 w-24 rounded ${isLoading ? 'bg-gray-600 animate-pulse' : 'bg-gray-600'}`}></div>
                  <div className="flex space-x-2">
                    {[1, 2, 3].map((item) => (
                      <div 
                        key={item} 
                        className={`h-6 w-6 rounded-full ${isLoading ? 'bg-gray-600 animate-pulse' : 'bg-gray-600 hover:bg-gray-500 transition-colors'}`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </BrowserWindow>
        </div>
      </div>
    </motion.div>
  );
};

export default UserExperienceCard;
