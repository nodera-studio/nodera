
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";

interface ServiceFeature {
  title: string;
}

interface TechnologyOption {
  name: string;
  description: string;
}

export interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  features: ServiceFeature[];
  idealFor?: string;
  visual?: string;
  technologyOptions?: TechnologyOption[];
  designApproach?: string;
  standardInclusions?: string[];
  optionalAddOns?: string;
}

const ServiceModal = ({
  isOpen,
  onClose,
  title,
  description,
  features,
  idealFor,
  visual,
  technologyOptions,
  designApproach,
  standardInclusions,
  optionalAddOns
}: ServiceModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[800px] p-0 bg-white rounded-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full text-[#6E6E73] hover:bg-[#F5F5F7] transition-colors focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:ring-opacity-50"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>
        
        <div className="py-8 px-10 max-h-[80vh] overflow-y-auto">
          <DialogHeader className="pb-4">
            <DialogTitle className="text-[28px] font-comfortaa font-bold text-[#1D1D1F]">
              {title}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 font-comfortaa">
            <p className="text-[17px] leading-[1.6] text-[#1D1D1F]">
              {description}
            </p>
            
            <div className="space-y-2">
              <h3 className="font-bold text-[18px] text-[#1D1D1F] mb-3">What's included</h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-[#007AFF] mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-[15px] text-[#1D1D1F]">{feature.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {technologyOptions && technologyOptions.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-bold text-[18px] text-[#1D1D1F] mb-3">Technology Options</h3>
                <ul className="space-y-4">
                  {technologyOptions.map((tech, index) => (
                    <li key={index}>
                      <p className="text-[15px] font-bold text-[#1D1D1F]">{tech.name}</p>
                      <p className="text-[14px] text-[#1D1D1F] mt-1">{tech.description}</p>
                    </li>
                  ))}
                </ul>
                <p className="text-[14px] text-[#6E6E73] mt-3">
                  The best platform depends on your specific needs, design complexity, and budget. We'll help you choose.
                </p>
              </div>
            )}
            
            {designApproach && (
              <div className="space-y-2">
                <h3 className="font-bold text-[18px] text-[#1D1D1F] mb-3">Design Approach</h3>
                <p className="text-[14px] text-[#1D1D1F]">{designApproach}</p>
              </div>
            )}
            
            {standardInclusions && standardInclusions.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-bold text-[18px] text-[#1D1D1F] mb-3">What's Always Included</h3>
                <ul className="space-y-3">
                  {standardInclusions.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-[#007AFF] mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-[14px] text-[#1D1D1F]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {optionalAddOns && (
              <div className="space-y-2">
                <h3 className="font-bold text-[18px] text-[#1D1D1F] mb-3">Available Add-ons</h3>
                <p className="text-[14px] text-[#1D1D1F]">{optionalAddOns}</p>
              </div>
            )}
            
            {idealFor && (
              <div className="mt-6">
                <p className="text-[14px] text-[#6E6E73]">
                  {idealFor}
                </p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;
