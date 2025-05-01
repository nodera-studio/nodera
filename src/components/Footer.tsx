import React, { useState } from 'react';
import { Separator } from "@/components/ui/separator";
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const currentYear = new Date().getFullYear();

// Accordion sections for footer
const footerSections = [
  {
    title: "Shop and Learn",
    links: [
      { label: "Services", href: "/services" },
      { label: "Work", href: "/work" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" }
    ]
  },
  {
    title: "Nodera Services",
    links: [
      { label: "Web Development", href: "/services" },
      { label: "UI/UX Design", href: "/services" },
      { label: "Mobile Development", href: "/services" },
      { label: "Consulting", href: "/services" }
    ]
  },
  {
    title: "Account",
    links: [
      { label: "Manage Your Account", href: "/about" },
      { label: "Create Account", href: "/contact" }
    ]
  },
  {
    title: "Projects",
    links: [
      { label: "Latest Work", href: "/work" },
      { label: "Case Studies", href: "/work" },
      { label: "Client Testimonials", href: "/about" }
    ]
  },
  {
    title: "Nodera Studio",
    links: [
      { label: "Our Team", href: "/about" },
      { label: "Our Values", href: "/about" },
      { label: "Our Process", href: "/#about" }
    ]
  },
  {
    title: "For Business",
    links: [
      { label: "Enterprise Solutions", href: "/services" },
      { label: "Business Consulting", href: "/services" }
    ]
  },
  {
    title: "For Education",
    links: [
      { label: "Educational Resources", href: "/about" },
      { label: "Workshops", href: "/about" }
    ]
  },
  {
    title: "About Nodera",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Leadership", href: "/about" },
      { label: "Careers", href: "/about" }
    ]
  }
];

// Social links remain the same
const socialLinks = [
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

const Footer = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (title: string) => {
    if (openSections.includes(title)) {
      setOpenSections(openSections.filter(section => section !== title));
    } else {
      setOpenSections([...openSections, title]);
    }
  };

  return (
    <footer className="w-full bg-[#f5f5f7] text-[#6e6e73]">
      {/* Apple-style collapsible sections */}
      <div className="container mx-auto px-4 md:px-6">
        {/* Logo and Site Map */}
        <div className="py-3 flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src="/lovable-uploads/logo.png"
              alt="Nodera Studio"
              className="h-8 w-auto opacity-80"
            />
          </Link>
          <span className="mx-4 text-[#86868b]">›</span>
          <span className="text-[#1d1d1f] text-sm">Site Map</span>
        </div>
        
        <Separator className="bg-[#d2d2d7]" />
        
        {/* Accordion sections */}
        <div className="py-2">
          {footerSections.map((section) => (
            <div key={section.title}>
              <div 
                className="py-3 flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection(section.title)}
              >
                <h3 className="text-[#1d1d1f] text-lg md:text-xl font-medium">{section.title}</h3>
                <ChevronDown 
                  size={20} 
                  className={`text-[#86868b] transition-transform ${
                    openSections.includes(section.title) ? "rotate-180" : ""
                  }`} 
                />
              </div>
              
              {openSections.includes(section.title) && (
                <ul className="py-2 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm hover:text-[#1d1d1f] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              
              <Separator className="bg-[#d2d2d7]" />
            </div>
          ))}
        </div>
        
        {/* Contact information */}
        <div className="py-6 text-sm">
          <p className="mb-2">More ways to contact: <Link to="/contact" className="text-blue-600">Get in touch</Link> or <Link to="/about" className="text-blue-600">visit our studio</Link>.</p>
          <p>Or call <a href="tel:1-800-123-4567" className="text-blue-600">1-800-123-4567</a>.</p>
        </div>
        
        {/* Location info */}
        <div className="py-2">
          <p className="text-sm">United States</p>
        </div>
        
        <Separator className="bg-[#d2d2d7]" />
        
        {/* Copyright and legal links */}
        <div className="py-4">
          <div className="flex flex-col md:flex-row justify-between text-xs">
            <p className="text-xs text-[#515154] mb-4 md:mb-0">
              Copyright © {currentYear} Nodera Studio. All rights reserved.
            </p>
            <div className="space-x-4 flex flex-wrap">
              <Link to="/about" className="hover:text-[#1d1d1f] transition-colors mb-2">
                Privacy Policy
              </Link>
              <span className="text-[#d2d2d7] hidden md:inline">|</span>
              <Link to="/about" className="hover:text-[#1d1d1f] transition-colors mb-2">
                Terms of Use
              </Link>
              <span className="text-[#d2d2d7] hidden md:inline">|</span>
              <Link to="/about" className="hover:text-[#1d1d1f] transition-colors mb-2">
                Sales and Refunds
              </Link>
              <span className="text-[#d2d2d7] hidden md:inline">|</span>
              <Link to="/about" className="hover:text-[#1d1d1f] transition-colors mb-2">
                Legal
              </Link>
              <span className="text-[#d2d2d7] hidden md:inline">|</span>
              <Link to="/" className="hover:text-[#1d1d1f] transition-colors mb-2">
                Site Map
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
