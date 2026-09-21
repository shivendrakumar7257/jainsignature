import React from 'react';
import { MessageSquare } from 'lucide-react';
import { BRAND_INFO } from '../data/studioData';

export const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    window.open(BRAND_INFO.whatsappLink, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Direct WhatsApp Consultation"
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center space-x-2 group focus:outline-none border border-white/20"
    >
      <MessageSquare className="w-6 h-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-xs font-semibold uppercase tracking-wider pr-1">
        WhatsApp Concierge
      </span>
    </button>
  );
};
