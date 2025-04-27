import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import styles from './styles/Showcases.module.css';

const Showcases = () => {
  const isMobile = useIsMobile();
  const sectionTitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    
    if (sectionTitleRef.current) {
      observer.observe(sectionTitleRef.current);
    }
    
    return () => {
      if (sectionTitleRef.current) {
        observer.unobserve(sectionTitleRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white py-16 md:py-24 lg:py-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between items-center mb-12 md:mb-16 lg:mb-20 gap-4">
          <h2 ref={sectionTitleRef} className="text-5xl sm:text-6xl md:text-7xl font-comfortaa font-bold text-black section-title">
            Digital <span className="gradient-word">Showcases</span>
          </h2>
          <a 
            href="#" 
            className="text-xl sm:text-2xl font-comfortaa font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent hover:translate-x-1 transition-transform"
          >
            View All →
          </a>
        </div>
        
        <div className="flex flex-col gap-8 lg:gap-12">
          <div className={styles.showcaseCard}>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              <div className="lg:w-1/2 space-y-4 md:space-y-6 order-2 lg:order-1">
                <h3 className={styles.cardTitle}>Museum CMS Platform</h3>
                <p className={styles.cardDescription}>
                  The behind-the-scenes system that powers museum mobile guides, intuitive for staff, informative for visitors.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a 
                    href="#" 
                    className="px-6 py-3 bg-black text-white rounded-full font-baloo font-semibold text-lg hover:scale-101 transition-transform duration-200"
                  >
                    The Full Story
                  </a>
                  <a 
                    href="#" 
                    className="px-6 py-3 bg-white border border-black text-black rounded-full font-baloo font-semibold text-lg hover:scale-101 transition-transform duration-200"
                  >
                    More Creations
                  </a>
                </div>
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                <img 
                  src="/lovable-uploads/nous-cms.png" 
                  alt="Museum CMS Platform" 
                  className="showcase-image rounded-xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className={styles.showcaseCard}>
            <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-12 items-center">
              <div className="lg:w-1/2">
                <img 
                  src="/lovable-uploads/8379e5c3-25c3-48da-9e3b-916491ac1570.png" 
                  alt="Furnihaus Collection" 
                  className="showcase-image rounded-xl w-full h-auto object-cover"
                />
              </div>
              <div className="lg:w-1/2 space-y-4 md:space-y-6">
                <h3 className={styles.cardTitle}>Furnihaus Collection</h3>
                <p className={styles.cardDescription}>
                  Where craftsmanship meets digital presence. Elegantly showcasing custom furniture and connecting artisans with clients.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a 
                    href="#" 
                    className="px-6 py-3 bg-black text-white rounded-full font-baloo font-semibold text-lg hover:scale-101 transition-transform duration-200"
                  >
                    The Full Story
                  </a>
                  <a 
                    href="#" 
                    className="px-6 py-3 bg-white border border-black text-black rounded-full font-baloo font-semibold text-lg hover:scale-101 transition-transform duration-200"
                  >
                    More Creations
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcases;
