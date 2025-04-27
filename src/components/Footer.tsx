
import React from 'react';
import { Github, Linkedin, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const currentYear = new Date().getFullYear();

const navigationLinks = {
  Company: [
    { label: "About", href: "#about" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" }
  ],
  Services: [
    { label: "Web Development", href: "#services" },
    { label: "UI/UX Design", href: "#design" },
    { label: "Consulting", href: "#consulting" }
  ],
  Resources: [
    { label: "Blog", href: "#blog" },
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

const Footer = () => {
  return (
    <footer className="w-full bg-[#f5f5f7] text-[#6e6e73]">
      {/* Main footer content */}
      <div className="container mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo section */}
          <div className="col-span-1">
            <img 
              src="/lovable-uploads/logo.png"
              alt="Nodera Studio"
              className="h-8 w-auto opacity-80"
            />
          </div>

          {/* Navigation sections */}
          {Object.entries(navigationLinks).map(([title, links]) => (
            <div key={title} className="col-span-1">
              <h3 className="text-sm font-semibold text-[#1d1d1f] mb-4">{title}</h3>
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
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="mt-12">
          <div className="flex items-center justify-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-[#6e6e73] hover:text-[#1d1d1f] transition-colors"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <Separator className="bg-[#d2d2d7]" />

      {/* Copyright section */}
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between text-xs">
          <p>© {currentYear} Nodera Studio. All rights reserved.</p>
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
