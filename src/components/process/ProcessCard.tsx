
import React from 'react';
import { LucideIcon } from 'lucide-react';
import styles from './ProcessCard.module.css';

interface ProcessCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor: string;
}

const ProcessCard = ({ title, description, icon: Icon, iconColor }: ProcessCardProps) => {
  return (
    <div className={styles.processCard}>
      <div className={styles.iconContainer}>
        <div className={styles.iconBackground} style={{ backgroundColor: `${iconColor}15` }}>
          <Icon size={48} color={iconColor} strokeWidth={2.5} />
        </div>
      </div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default ProcessCard;
