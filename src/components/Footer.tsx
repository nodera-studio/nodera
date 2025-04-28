import React from 'react';
import { Github, Linkedin, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const currentYear = new Date().getFullYear();

const navigationLinks = {
  Company: [
    { label: "About", href: "#about" },
    { label: "Our Story", href: "#story" },
    { label: "Contact", href: "#contact" }
  ],
  Services: [
    { label: "Web Development", href: "#services" },
    { label: "UI/UX Design", href: "#design" },
    { label: "Consulting", href: "#consulting" }
  ],
  Resources: [
    { label: "Case Studies", href: "#cases" },
    { label: "FAQ", href: "#faq" }
  ]
};

const socialLinks = [
  { 
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn"
  },
  { 
    icon: Github,
    href: "https://github.com",
    label: "GitHub"
  },
  { 
    icon: Twitter,
    href: "https://twitter.com",
    label: "Twitter"
  }
];

const columnOrder = ['Company', 'Services', 'Connect', 'Resources']; // Define the desired order

const Footer = () => {
  return (
    <footer className="w-full bg-[#f5f5f7] text-[#6e6e73]">
      {/* Main footer content */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12"> {/* Changed to lg:grid-cols-5 */} 
          {/* Logo section (First column) */}
          <div className="col-span-1">
            <img
              src="/lovable-uploads/logo.png"
              alt="Nodera Studio"
              className="h-14 w-auto opacity-80"
            />
          </div>

          {/* Ordered Navigation/Link sections (Next four columns) */}
          {columnOrder.map((columnKey) => {
            if (columnKey === 'Connect') {
              // Render Social Links column
              return (
                <div key={columnKey} className="col-span-1">
                  <h3 className="text-sm font-baloo font-medium text-[#1d1d1f] mb-4">{columnKey}</h3>
                  <ul className="space-y-3">
                    {socialLinks.map((social) => (
                      <li key={social.label}>
                        <a
                          href={social.href}
                          className="text-sm hover:text-[#1d1d1f] transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {social.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            } else {
              // Render Navigation Links column (Company, Services, Resources)
              const links = navigationLinks[columnKey as keyof typeof navigationLinks] || [];
              return (
                <div key={columnKey} className="col-span-1">
                  <h3 className="text-sm font-baloo font-medium text-[#1d1d1f] mb-4">{columnKey}</h3>
                  {links.length > 0 ? (
                    <ul className="space-y-3">
                      {links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            className="text-sm hover:text-[#1d1d1f] transition-colors"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-sm text-gray-400 italic">More coming soon...</div>
                  )}
                </div>
              );
            }
          })}
        </div>
      </div>

      {/* Divider */}
      <Separator className="bg-[#d2d2d7]" />

      {/* Copyright section */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between text-xs">
          <p className="text-xs text-[#515154] font-baloo font-medium">© {currentYear} Nodera Studio. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#privacy" className="hover:text-[#1d1d1f] transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-[#1d1d1f] transition-colors">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
