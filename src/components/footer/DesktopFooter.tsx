
import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from "@/components/ui/separator";
import { FooterSection, SocialLink } from './types';

interface DesktopFooterProps {
  footerSections: FooterSection[];
  socialLinks: SocialLink[];
  currentYear: number;
}

const DesktopFooter = ({ footerSections, socialLinks, currentYear }: DesktopFooterProps) => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-4 gap-8">
        {footerSections.map((section) => (
          <div key={section.title}>
            <h3 className="text-lg font-semibold mb-4 text-[#1d1d1f]">{section.title}</h3>
            <ul className="space-y-2">
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
          </div>
        ))}
      </div>
      
      <Separator className="my-8 bg-[#d2d2d7]" />
      
      <div className="flex justify-between items-center">
        <p className="text-sm text-[#515154]">
          Copyright © {currentYear} Nodera Studio. All rights reserved.
        </p>
        <div className="flex space-x-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-[#1d1d1f] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesktopFooter;
