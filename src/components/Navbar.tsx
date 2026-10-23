import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Phone, Mail } from 'lucide-react';
import { BRAND_INFO } from '../data/studioData';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  onOpenInquiry: (serviceTitle?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, setActivePage, onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'journal', label: 'Journal' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 shadow-xs">
        {/* Upper Header Contact & Social Bar */}
        <div className="bg-[#181818] text-[#F5F2EC] text-[10px] md:text-[11px] py-1.5 border-b border-[#2d2824]/80">
          <div className="w-full max-w-[1650px] mx-auto px-4 md:px-8 xl:px-12 flex flex-row items-center justify-between gap-3">
            {/* Contact Details: Phone & Email */}
            <div className="flex items-center space-x-2 sm:space-x-5 shrink-0">
              <a
                href={`tel:${BRAND_INFO.rawPhone}`}
                className="flex items-center space-x-1.5 text-white/90 hover:text-[#1468a2] transition-colors whitespace-nowrap group shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-[#1468a2] group-hover:scale-110 transition-transform shrink-0" />
                <span className="font-semibold tracking-wide text-white text-[11px] sm:text-xs">{BRAND_INFO.phone}</span>
              </a>

              <span className="text-white/20">|</span>

              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="flex items-center space-x-1.5 text-white/85 hover:text-[#1468a2] transition-colors whitespace-nowrap group shrink-0"
              >
                <Mail className="w-3.5 h-3.5 text-[#1468a2] group-hover:scale-110 transition-transform shrink-0" />
                <span className="font-medium tracking-wide hidden sm:inline">{BRAND_INFO.email}</span>
              </a>
            </div>

            {/* Direct Social & Messaging Buttons */}
            <div className="flex items-center space-x-2 md:space-x-3 shrink-0">
              {/* WhatsApp Button */}
              <a
                href={BRAND_INFO.whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Concierge"
                className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-[#25D366]/15 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-[#25D366]/30 hover:border-[#25D366] transition-all duration-300 font-medium text-[10px] md:text-[11px]"
              >
                <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.301-.15-1.785-.881-2.062-.982-.276-.101-.477-.15-.677.15-.199.301-.776.982-.952 1.183-.175.201-.351.226-.652.075-1.543-.772-2.584-1.378-3.626-3.167-.275-.471.275-.437.786-1.458.075-.15.037-.276-.019-.376-.056-.101-.677-1.631-.928-2.235-.243-.585-.49-.505-.677-.514-.175-.008-.376-.008-.577-.008-.201 0-.526.075-.802.376-.276.301-1.053 1.03-1.053 2.512 0 1.482 1.078 2.913 1.229 3.113.151.201 2.122 3.241 5.14 4.547 2.155.932 2.986.999 4.024.846 1.134-.167 2.479-1.011 2.83-1.988.351-.977.351-1.812.246-1.988-.106-.176-.307-.276-.608-.426z"/>
                </svg>
                <span className="hidden sm:inline">WhatsApp</span>
              </a>

              {/* Instagram Button */}
              <a
                href={BRAND_INFO.instagramLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Profile"
                className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r from-[#f09433]/15 via-[#dc2743]/15 to-[#bc1888]/15 hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-[#e1306c] hover:text-white border border-[#dc2743]/30 hover:border-[#dc2743] transition-all duration-300 font-medium text-[10px] md:text-[11px]"
              >
                <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.162c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="hidden sm:inline">Instagram</span>
              </a>

              {/* Facebook Button */}
              <a
                href={BRAND_INFO.facebookLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Page"
                className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-[#1877F2]/15 hover:bg-[#1877F2] text-[#1877F2] hover:text-white border border-[#1877F2]/30 hover:border-[#1877F2] transition-all duration-300 font-medium text-[10px] md:text-[11px]"
              >
                <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="hidden sm:inline">Facebook</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="bg-white/95 backdrop-blur-md border-b border-[#E2DACD] py-3.5 md:py-4 transition-all duration-300">
          <div className="w-full max-w-[1650px] mx-auto px-6 md:px-10 xl:px-16 flex items-center justify-between">
            {/* Official Logo Image */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center group focus:outline-none text-left shrink-0"
              aria-label="Jain Signature Studio Home"
            >
              <img
                src={BRAND_INFO.logoUrl}
                alt="Jain Signature Studio"
                className="h-8.5 md:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-7 xl:space-x-10">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-xs xl:text-[13px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 relative py-1 focus:outline-none ${
                    activePage === item.id
                      ? 'text-[#1468a2]'
                      : 'text-[#181818]/80 hover:text-[#181818]'
                  }`}
                >
                  {item.label}
                  {activePage === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#1468a2]" />
                  )}
                </button>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center">
              <button
                onClick={() => onOpenInquiry('Book a Free Consultation')}
                className="text-xs uppercase tracking-[0.16em] px-6 py-2.5 rounded-full border border-[#1468a2] bg-[#1468a2] text-white font-semibold transition-all duration-300 flex items-center space-x-2 group hover:bg-[#181818] hover:border-[#181818] shadow-sm hover:shadow-md"
              >
                <span>Book Free Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
              className="lg:hidden p-2 rounded-full text-[#181818] hover:bg-[#FAF8F5] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#181818] text-[#F5F2EC] flex flex-col justify-between px-8 py-10 transition-all duration-500 animate-fadeIn overflow-y-auto">
          {/* Top Bar inside Mobile Overlay */}
          <div className="flex items-center justify-between pt-2">
            <img
              src={BRAND_INFO.logoUrl}
              alt="Jain Signature Studio"
              className="h-8 w-auto brightness-200"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full border border-white/20 text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <div className="flex flex-col space-y-4 my-6">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-2xl font-serif tracking-wider transition-all duration-300 flex items-center justify-between group ${
                  activePage === item.id ? 'text-[#1468a2] italic pl-2' : 'text-white/80 hover:text-white'
                }`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <span>{item.label}</span>
                <span className="text-xs font-sans tracking-widest text-[#1468a2] opacity-0 group-hover:opacity-100 transition-opacity">
                  0{index + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Footer: CTA, Direct Contact & Social Buttons */}
          <div className="space-y-2.5 pt-5 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry('Book a Free Consultation');
              }}
              className="w-full py-3 rounded-full bg-[#1468a2] text-white font-medium uppercase tracking-[0.14em] text-xs flex items-center justify-center space-x-2 shadow-lg hover:bg-[#0f4e7a] transition-colors"
            >
              <span>Book Free Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry('Get a Project Estimate');
              }}
              className="w-full py-2.5 rounded-full border border-white/30 text-white font-medium uppercase tracking-[0.14em] text-xs flex items-center justify-center space-x-2 hover:bg-white/10 transition-colors"
            >
              <span>Get a Project Estimate</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Direct Contact Info */}
            <div className="grid grid-cols-1 gap-2 text-xs text-white/80">
              <a href={`tel:${BRAND_INFO.rawPhone}`} className="flex items-center space-x-2 hover:text-[#1468a2]">
                <Phone className="w-4 h-4 text-[#1468a2]" />
                <span>{BRAND_INFO.phone}</span>
              </a>
              <a href={`mailto:${BRAND_INFO.email}`} className="flex items-center space-x-2 hover:text-[#1468a2]">
                <Mail className="w-4 h-4 text-[#1468a2]" />
                <span>{BRAND_INFO.email}</span>
              </a>
            </div>

            {/* Mobile Social Action Buttons */}
            <div className="pt-2 flex items-center space-x-3">
              <a
                href={BRAND_INFO.whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex-1 py-2 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] text-xs font-medium flex items-center justify-center space-x-1.5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.301-.15-1.785-.881-2.062-.982-.276-.101-.477-.15-.677.15-.199.301-.776.982-.952 1.183-.175.201-.351.226-.652.075-1.543-.772-2.584-1.378-3.626-3.167-.275-.471.275-.437.786-1.458.075-.15.037-.276-.019-.376-.056-.101-.677-1.631-.928-2.235-.243-.585-.49-.505-.677-.514-.175-.008-.376-.008-.577-.008-.201 0-.526.075-.802.376-.276.301-1.053 1.03-1.053 2.512 0 1.482 1.078 2.913 1.229 3.113.151.201 2.122 3.241 5.14 4.547 2.155.932 2.986.999 4.024.846 1.134-.167 2.479-1.011 2.83-1.988.351-.977.351-1.812.246-1.988-.106-.176-.307-.276-.608-.426z"/>
                </svg>
                <span>WhatsApp</span>
              </a>

              <a
                href={BRAND_INFO.instagramLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex-1 py-2 rounded-xl bg-gradient-to-r from-[#f09433]/20 via-[#dc2743]/20 to-[#bc1888]/20 border border-[#dc2743]/40 text-[#e1306c] text-xs font-medium flex items-center justify-center space-x-1.5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>

              <a
                href={BRAND_INFO.facebookLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex-1 py-2 rounded-xl bg-[#1877F2]/20 border border-[#1877F2]/40 text-[#1877F2] text-xs font-medium flex items-center justify-center space-x-1.5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

