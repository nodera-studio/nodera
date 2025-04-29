import React from 'react';
import styles from './WhatWeDo.module.css';
import { cn } from "@/lib/utils";

const WhatWeDo = () => {
  return (
    <div className="bg-white py-16 md:py-24 lg:py-32 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-black section-title">
            What We <span className="gradient-word">Actually Do</span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mt-4">
            We transform ideas into captivating digital experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <img src="/lovable-uploads/web-design.svg" alt="Web Design" />
            </div>
            <h3 className={styles.serviceTitle}>Web Design</h3>
            <p className={styles.serviceDescription}>
              Crafting visually stunning and user-friendly websites tailored to your brand.
            </p>
          </div>
          
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <img src="/lovable-uploads/web-development.svg" alt="Web Development" />
            </div>
            <h3 className={styles.serviceTitle}>Web Development</h3>
            <p className={styles.serviceDescription}>
              Building robust and scalable web applications with cutting-edge technologies.
            </p>
          </div>
          
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <img src="/lovable-uploads/e-commerce-solutions.svg" alt="E-Commerce Solutions" />
            </div>
            <h3 className={styles.serviceTitle}>E-Commerce Solutions</h3>
            <p className={styles.serviceDescription}>
              Creating seamless online shopping experiences that drive sales and customer loyalty.
            </p>
          </div>
          
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <img src="/lovable-uploads/mobile-app-development.svg" alt="Mobile App Development" />
            </div>
            <h3 className={styles.serviceTitle}>Mobile App Development</h3>
            <p className={styles.serviceDescription}>
              Developing native and cross-platform mobile apps that engage and delight users.
            </p>
          </div>
          
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <img src="/lovable-uploads/digital-marketing.svg" alt="Digital Marketing" />
            </div>
            <h3 className={styles.serviceTitle}>Digital Marketing</h3>
            <p className={styles.serviceDescription}>
              Driving targeted traffic and increasing brand visibility through strategic online campaigns.
            </p>
          </div>
          
          <div className={styles.serviceCard}>
            <div className={styles.serviceIcon}>
              <img src="/lovable-uploads/seo-optimization.svg" alt="SEO Optimization" />
            </div>
            <h3 className={styles.serviceTitle}>SEO Optimization</h3>
            <p className={styles.serviceDescription}>
              Improving search engine rankings and organic traffic with proven SEO techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
