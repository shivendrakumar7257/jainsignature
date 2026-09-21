import React from 'react';
import { ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/studioData';

interface FooterProps {
  setActivePage: (page: string) => void;
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, onOpenInquiry }) => {
  const handleNav = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#181818] text-[#F5F2EC] pt-20 pb-12 border-t border-[#29241F] relative overflow-hidden">
      {/* Ambient background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1468a2]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Brand Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#38322B]">
          {/* Brand Info & Single Logo */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <img
                src={BRAND_INFO.logoUrl}
                alt="Jain Signature Studio Logo"
                className="h-12 w-auto object-contain brightness-200"
              />
            </div>
            <p className="text-base text-white/90 font-normal leading-relaxed max-w-md">
              "Creating spaces with character, craftsmanship and timeless elegance. We craft bespoke residential and commercial environments that endure beyond trends."
            </p>
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-full bg-[#1468a2] text-white text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-[#181818] transition-colors shadow-md"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#1468a2] font-bold">
              Navigation
            </h4>
            <ul className="space-y-3.5 text-base text-white/90 font-medium">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-[#1468a2] transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-[#1468a2] transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#1468a2] transition-colors">
                  Services & Expertise
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('projects')} className="hover:text-[#1468a2] transition-colors">
                  Selected Work
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('journal')} className="hover:text-[#1468a2] transition-colors">
                  The Journal
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#1468a2] transition-colors">
                  Contact Studio
                </button>
              </li>
            </ul>
          </div>

          {/* Studio Contact */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#1468a2] font-bold">
              Studio Concierge
            </h4>
            <div className="space-y-4 text-base text-white/90 font-normal">
              <a
                href={BRAND_INFO.mapLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-start space-x-3 group hover:text-[#1468a2] transition-colors"
              >
                <MapPin className="w-5 h-5 text-[#1468a2] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>{BRAND_INFO.address}</span>
              </a>
              <a href={`tel:${BRAND_INFO.phone}`} className="flex items-center space-x-3 hover:text-[#1468a2] transition-colors">
                <Phone className="w-5 h-5 text-[#1468a2] shrink-0" />
                <span>{BRAND_INFO.phone}</span>
              </a>
              <a href={`mailto:${BRAND_INFO.email}`} className="flex items-center space-x-3 hover:text-[#1468a2] transition-colors">
                <Mail className="w-5 h-5 text-[#1468a2] shrink-0" />
                <span>{BRAND_INFO.email}</span>
              </a>
            </div>

            {/* Official Brand Social Icons */}
            <div className="pt-4 flex items-center space-x-4">
              {/* Instagram Official Icon */}
              <a
                href={BRAND_INFO.instagramLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Profile"
                className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Facebook Official Icon */}
              <a
                href={BRAND_INFO.facebookLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Page"
                className="w-11 h-11 rounded-2xl bg-[#1877F2] flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* WhatsApp Official Icon */}
              <a
                href={BRAND_INFO.whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Direct WhatsApp Concierge"
                className="w-11 h-11 rounded-2xl bg-[#25D366] flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.301-.15-1.785-.881-2.062-.982-.276-.101-.477-.15-.677.15-.199.301-.776.982-.952 1.183-.175.201-.351.226-.652.075-1.543-.772-2.584-1.378-3.626-3.167-.275-.471.275-.437.786-1.458.075-.15.037-.276-.019-.376-.056-.101-.677-1.631-.928-2.235-.243-.585-.49-.505-.677-.514-.175-.008-.376-.008-.577-.008-.201 0-.526.075-.802.376-.276.301-1.053 1.03-1.053 2.512 0 1.482 1.078 2.913 1.229 3.113.151.201 2.122 3.241 5.14 4.547 2.155.932 2.986.999 4.024.846 1.134-.167 2.479-1.011 2.83-1.988.351-.977.351-1.812.246-1.988-.106-.176-.307-.276-.608-.426z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/70 font-normal gap-4">
          <p>© 2026 Jain Signature Studio. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <button onClick={() => handleNav('contact')} className="hover:text-[#1468a2] transition-colors">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => handleNav('contact')} className="hover:text-[#1468a2] transition-colors">
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
