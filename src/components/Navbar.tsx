import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO } from '../data/studioData';

interface NavbarProps {
  activePage: string;
  setActivePage: (page: string) => void;
  onOpenInquiry: () => void;
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
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E2DACD] py-3.5 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Single Official Logo Image (No Duplicate Text) */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center group focus:outline-none text-left"
            aria-label="Jain Signature Studio Home"
          >
            <img
              src={BRAND_INFO.logoUrl}
              alt="Jain Signature Studio"
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-9">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 relative py-1 focus:outline-none ${
                  activePage === item.id
                    ? 'text-[#1468a2] font-semibold'
                    : 'text-[#181818]/75 hover:text-[#181818]'
                }`}
              >
                {item.label}
                {activePage === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#1468a2]" />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={onOpenInquiry}
              className="text-xs uppercase tracking-[0.18em] px-6 py-3 rounded-full border border-[#181818] bg-[#181818] text-white font-medium transition-all duration-300 flex items-center space-x-2 group hover:bg-[#1468a2] hover:border-[#1468a2]"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 rounded-full text-[#181818]"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#181818] text-[#F5F2EC] flex flex-col justify-between px-8 py-12 transition-all duration-500 animate-fadeIn">
          {/* Top Bar inside Mobile Overlay */}
          <div className="flex items-center justify-between">
            <img
              src={BRAND_INFO.logoUrl}
              alt="Jain Signature Studio"
              className="h-9 w-auto brightness-200"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full border border-white/20 text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Nav Links */}
          <div className="flex flex-col space-y-6 my-auto">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-3xl font-serif tracking-wider transition-all duration-300 flex items-center justify-between group ${
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

          {/* Mobile Menu Footer & CTA */}
          <div className="space-y-6 pt-6 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-4 rounded-full bg-[#1468a2] text-white font-medium uppercase tracking-[0.18em] text-xs flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="flex flex-col space-y-1 text-xs text-white/50 tracking-wider">
              <span>{BRAND_INFO.phone}</span>
              <span>{BRAND_INFO.email}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
