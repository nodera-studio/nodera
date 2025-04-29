
// Common type definitions for the application

export interface NavItem {
  title: string;
  href: string;
}

export interface ShowcaseProject {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
  link?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon?: React.ReactNode;
  order: number;
}

export interface TechLogo {
  name: string;
  src: string;
  alt: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
