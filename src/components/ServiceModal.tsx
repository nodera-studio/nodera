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
  heading?: string;
  intro?: string;
  note?: string;
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
  standardInclusions?: { heading: string; items: string[] };
  optionalAddOns?: { heading: string; description: string };
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

  const techHeading = technologyOptions?.[0]?.heading;
  const techIntro = technologyOptions?.[0]?.intro;
  const techNote = technologyOptions?.[technologyOptions.length - 1]?.note;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[800px] p-0 bg-white rounded-xl">
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
            
            {technologyOptions && technologyOptions.length > 0 && (
              <div className="space-y-2">
                {techHeading && <h3 className="font-bold text-[18px] text-[#1D1D1F] mb-3">{techHeading}</h3>}
                {techIntro && <p className="text-[14px] text-[#1D1D1F] mb-3">{techIntro}</p>}
                <ul className="space-y-4">
                  {technologyOptions.map((tech, index) => (
                    <li key={index}>
                      <span className="text-[15px] font-bold text-[#1D1D1F]">{tech.name}</span>
                      <p className="text-[14px] text-[#1D1D1F] mt-1">{tech.description}</p>
                    </li>
                  ))}
                </ul>
                {techNote && 
                  <p className="text-[14px] text-[#6E6E73] mt-3">
                    {techNote}
                  </p>
                }
              </div>
            )}
            
            {designApproach && (
              <div className="space-y-2">
                <h3 className="font-bold text-[18px] text-[#1D1D1F] mb-3">Design Approach</h3>
                <p className="text-[14px] text-[#1D1D1F]">{designApproach}</p>
              </div>
            )}
            
            {standardInclusions && standardInclusions.items.length > 0 && (
              <div className="space-y-2">
                <h3 className="font-bold text-[18px] text-[#1D1D1F] mb-3">{standardInclusions.heading}</h3>
                <ul className="space-y-3">
                  {standardInclusions.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[14px] text-[#1D1D1F]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {optionalAddOns && (
              <div className="space-y-2">
                <h3 className="font-bold text-[18px] text-[#1D1D1F] mb-3">{optionalAddOns.heading}</h3>
                <p className="text-[14px] text-[#1D1D1F]">{optionalAddOns.description}</p>
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
