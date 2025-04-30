
import React from 'react';
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  onOpenModal: () => void;
}

const ServiceCard = ({ 
  title, 
  description, 
  onOpenModal 
}: ServiceCardProps) => (
  <div 
    onClick={onOpenModal}
    className={cn(
      "bg-white rounded-xl px-7 py-6 transition-all cursor-pointer",
      "border border-[#EAEAEA] hover:shadow-sm mb-6",
      "flex justify-between items-center"
    )}
  >
    <div className="flex-grow">
      <h3 className="font-comfortaa font-bold text-[22px] text-[#1D1D1F] mb-3">
        {title}
      </h3>
      <p className="font-comfortaa font-normal text-[16px] text-[#6E6E73] leading-[1.6]">
        {description}
      </p>
    </div>
    <div className="flex-shrink-0 ml-6">
      <ChevronRight 
        className="text-[#6E6E73] w-5 h-5 group-hover:translate-x-1 transition-transform" 
        aria-hidden="true"
      />
    </div>
  </div>
);

export default ServiceCard;
