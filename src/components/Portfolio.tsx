import React from 'react';
import { motion } from 'framer-motion';
import styles from './styles/Portfolio.module.css';

interface PortfolioItemProps {
  title: string;
  description: string;
  imageSrc: string;
  projectUrl: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, description, imageSrc, projectUrl }) => {
  return (
    <motion.a
      href={projectUrl}
      className={styles.portfolioCard}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.imageContainer}>
        <img src={imageSrc} alt={title} className={styles.portfolioImage} />
      </div>
      <div className={styles.portfolioContent}>
        <h3 className={styles.portfolioTitle}>{title}</h3>
        <p className={styles.portfolioDescription}>{description}</p>
        <span className={styles.viewProject}>View Project →</span>
      </div>
    </motion.a>
  );
};

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      title: "Museum CMS Platform",
      description: "Interactive digital experience design with custom content management system.",
      imageSrc: "/lovable-uploads/nous-cms.png",
      projectUrl: "#museum-cms"
    },
    {
      title: "Furnihaus Collection",
      description: "E-commerce platform with product visualization and custom checkout experience.",
      imageSrc: "/lovable-uploads/8379e5c3-25c3-48da-9e3b-916491ac1570.png",
      projectUrl: "#furnihaus"
    },
    {
      title: "Digital Marketing Hub",
      description: "Responsive analytics dashboard with real-time data visualization.",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      projectUrl: "#marketing-hub"
    },
    {
      title: "Tech Startup Website",
      description: "Modern website with animated interactions and lead generation capabilities.",
      imageSrc: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      projectUrl: "#tech-startup"
    }
  ];

  return (
    <section className={styles.portfolioSection}>
      <div className="bg-[#F9F9F9] py-10 text-center mb-[5px]">
        <h2 className={styles.sectionTitle}>Our Work</h2>
        <p className={styles.sectionIntro}>A selection of projects we're proud of.</p>
      </div>

      <div className="container mx-auto px-6 mt-[5px]">
        <div className={styles.portfolioGrid}>
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PortfolioItem
                title={item.title}
                description={item.description}
                imageSrc={item.imageSrc}
                projectUrl={item.projectUrl}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
