
import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { FooterSection } from './types';

interface MobileFooterProps {
  footerSections: FooterSection[];
  currentYear: number;
}

const MobileFooter = ({ footerSections, currentYear }: MobileFooterProps) => {
  return (
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
      </div>
      
      <Separator className="bg-[#d2d2d7]" />
      
      {/* Accordion sections using shadcn/ui accordion */}
      <div className="py-2">
        <Accordion type="single" collapsible className="w-full">
          {footerSections.map((section, index) => (
            <AccordionItem key={section.title} value={`item-${index}`}>
              <AccordionTrigger className="py-3 text-[#1d1d1f] text-lg md:text-xl font-medium">
                {section.title}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="py-2 space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {link.href.startsWith("http") ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:text-[#1d1d1f] transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          to={link.href}
                          className="text-sm hover:text-[#1d1d1f] transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
              <Separator className="bg-[#d2d2d7]" />
            </AccordionItem>
          ))}
        </Accordion>
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
              Legal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
