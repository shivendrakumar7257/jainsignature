import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { Service } from '../data/studioData';
import { DynamicIcon } from './DynamicIcon';

interface ServiceCardProps {
  service: Service;
  onSelectService: (service: Service) => void;
  index?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelectService }) => {
  const fallbackImage = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85";
  const bgImage = service.image || fallbackImage;

  return (
    <div
      onClick={() => onSelectService(service)}
      className="group relative rounded-3xl overflow-hidden cursor-pointer min-h-[400px] md:min-h-[450px] flex flex-col justify-between p-8 md:p-10 border border-[#E2DACD] hover:border-[#1468a2] transition-all duration-500 shadow-md hover:shadow-2xl transform hover:-translate-y-1 bg-[#181818]"
    >
      {/* Background Image with Zoom */}
      <img
        src={bgImage}
        alt={service.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        loading="lazy"
      />

      {/* Dynamic Overlay: Gradient in resting state, darker blurred overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/30 transition-colors duration-500 group-hover:bg-black/80 group-hover:backdrop-blur-xs z-10" />

      {/* Top Bar: Number Badge + Icon + Arrow Button */}
      <div className="relative z-20 flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <span className="text-xs font-mono font-bold tracking-widest text-[#1468a2] bg-[#181818]/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            {service.number}
          </span>
          <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
            <DynamicIcon name={service.iconName} className="w-4 h-4 text-[#1468a2]" />
          </div>
        </div>

        {/* Circular Arrow Button */}
        <div className="w-12 h-12 rounded-full border border-white/40 bg-white/10 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#1468a2] group-hover:border-[#1468a2] group-hover:text-white shrink-0">
          <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-20 space-y-3 pt-12">
        {/* Category Label */}
        <div className="inline-flex items-center space-x-2 text-white/90 text-xs tracking-wider uppercase font-semibold">
          <span className="w-2 h-2 rounded-full bg-[#1468a2]" />
          <span>{service.category}</span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl md:text-3xl text-white font-normal group-hover:text-white transition-colors duration-300 leading-snug">
          {service.title}
        </h3>

        {/* Description & Deliverables CTA: Hidden in Resting state, Smoothly REVEALED ON HOVER */}
        <div className="overflow-hidden transition-all duration-500 ease-out opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-56 group-hover:pt-2">
          <p className="text-base text-white/95 font-normal leading-relaxed">
            {service.shortDesc}
          </p>

          <div className="pt-4 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#1468a2]">
            <span>Explore Deliverables</span>
            <span className="text-white">→</span>
          </div>
        </div>
      </div>
    </div>
  );
};
