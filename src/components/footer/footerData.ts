
import { FooterSection, SocialLink } from './types';

// Accordion sections for footer based on the image provided
export const footerSections: FooterSection[] = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" }
    ]
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/services" },
      { label: "UI/UX Design", href: "/services" },
      { label: "Consulting", href: "/services" }
    ]
  },
  {
    title: "Connect",
    links: [
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "GitHub", href: "https://github.com" },
      { label: "Twitter", href: "https://twitter.com" }
    ]
  },
  {
    title: "Resources",
    links: [
      { label: "Work", href: "/work" },
      { label: "FAQ", href: "/about" }
    ]
  }
];

// Social links for desktop footer
export const socialLinks: SocialLink[] = [
  { 
    href: "https://linkedin.com",
    label: "LinkedIn"
  },
  { 
    href: "https://github.com",
    label: "GitHub"
  },
  { 
    href: "https://twitter.com",
    label: "Twitter"
  }
];
