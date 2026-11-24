import React, { useState, useEffect } from 'react';
import { 
  Download, 
  ArrowUpRight, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  MessageSquare,
  Compass
} from 'lucide-react';
import { GALLERY_IMAGES } from '../data/studioData';
import type { GalleryItem } from '../data/studioData';

interface GalleryPageProps {
  onOpenInquiry: (serviceTitle?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenInquiry }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Living & Dining',
    'Modular Kitchens',
    'Bedrooms & Wardrobes',
    'Mandir & Pooja Units',
    'Foyers & Entrances'
  ];

  const filteredItems = activeCategory === 'All'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((item) => item.category === activeCategory);

  const handleDownloadPortfolio = () => {
    const link = document.createElement('a');
    link.href = '/Jain_Signature_Studio_Portfolio.pdf';
    link.download = 'Jain_Signature_Studio_Portfolio.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openLightbox = (item: GalleryItem) => {
    const indexInAll = GALLERY_IMAGES.findIndex((img) => img.id === item.id);
    if (indexInAll !== -1) {
      setActiveLightboxIndex(indexInAll);
    }
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => 
        prev === 0 ? GALLERY_IMAGES.length - 1 : (prev! - 1)
      );
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((prev) => 
        (prev! + 1) % GALLERY_IMAGES.length
      );
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') {
        setActiveLightboxIndex((prev) => 
          prev === 0 ? GALLERY_IMAGES.length - 1 : (prev! - 1)
        );
      }
      if (e.key === 'ArrowRight') {
        setActiveLightboxIndex((prev) => 
          (prev! + 1) % GALLERY_IMAGES.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex]);

  const currentItem = activeLightboxIndex !== null ? GALLERY_IMAGES[activeLightboxIndex] : null;

  return (
    <div className="pt-28 pb-24 space-y-16 bg-[#181818] text-[#F5F2EC]">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#38322B]">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#1468a2]/15 border border-[#1468a2]/30 text-[#1468a2] text-xs uppercase tracking-[0.2em] font-semibold">
              <Compass className="w-3.5 h-3.5" />
              <span>AUTHENTIC EXECUTION GALLERY • {GALLERY_IMAGES.length} SIGNATURE SPACES</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.08] text-white">
              Visual Gallery & <br />
              <span className="italic font-serif text-[#1468a2]">Living Architecture.</span>
            </h1>
            <p className="text-base text-[#E8E1D7]/75 font-light leading-relaxed">
              Explore our real-world interior handovers — including diamond-beveled dining salons, high-gloss modular kitchens, bespoke devotional mandirs, luxury master suites, and statement entrance foyers crafted across Ghaziabad, Noida, and Delhi NCR.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <button
              onClick={handleDownloadPortfolio}
              className="inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-full bg-[#1468a2] text-white text-xs uppercase tracking-[0.16em] font-semibold hover:bg-white hover:text-[#181818] transition-all duration-300 shadow-md group"
            >
              <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              <span>Download Portfolio (PDF)</span>
            </button>

            <button
              onClick={() => onOpenInquiry('Gallery Consultation')}
              className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full border border-white/20 hover:border-white text-white text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 hover:bg-white/5"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mt-10">
          {categories.map((cat) => {
            const count = cat === 'All' 
              ? GALLERY_IMAGES.length 
              : GALLERY_IMAGES.filter(i => i.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 flex items-center space-x-2 ${
                  activeCategory === cat
                    ? 'bg-[#1468a2] text-white font-semibold shadow-md'
                    : 'bg-[#29241F] text-[#E8E1D7]/70 border border-[#38322B] hover:border-[#1468a2]'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  activeCategory === cat ? 'bg-white/20 text-white' : 'bg-white/5 text-[#E8E1D7]/50'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Gallery Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative rounded-3xl overflow-hidden cursor-pointer bg-[#201c18] border border-white/10 hover:border-[#1468a2] transition-all duration-500 shadow-lg hover:shadow-2xl flex flex-col"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image Container */}
              <div className="w-full aspect-[4/5] overflow-hidden relative bg-[#12100e]">
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-black/20 opacity-80 group-hover:opacity-70 transition-opacity duration-300" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-[#F5F2EC] bg-[#181818]/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#1468a2] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Highlight Tag */}
                <div className="absolute top-14 left-4 z-10">
                  <span className="inline-flex items-center space-x-1 text-[9px] uppercase font-mono tracking-wider text-[#1468a2] bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-[#1468a2]/30">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>{item.highlight}</span>
                  </span>
                </div>

                {/* Bottom Information */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 space-y-1 text-white">
                  <span className="text-[11px] font-mono tracking-wider text-[#1468a2] uppercase block">
                    {item.space}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-normal group-hover:text-white transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#E8E1D7]/75 font-light line-clamp-2 pt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#1c1815] via-[#231e1a] to-[#1c1815] border border-[#38322B] p-8 md:p-14 text-center space-y-6 relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#1468a2]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#1468a2]/10 rounded-full blur-3xl pointer-events-none" />

          <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#1468a2] block">
            CUSTOM TURNKEY EXECUTION
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-white max-w-2xl mx-auto leading-tight font-normal">
            Envisioning Similar Craftsmanship for Your Property?
          </h2>
          <p className="text-sm sm:text-base text-[#E8E1D7]/80 max-w-xl mx-auto font-light leading-relaxed">
            Every photo above represents an authentic, turnkey handover completed with millimeter precision by our in-house master craftsmen and interior architects.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenInquiry('Full Interior Handover Consultation')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1468a2] text-white text-xs uppercase tracking-[0.18em] font-semibold hover:bg-white hover:text-[#181818] transition-all duration-300 shadow-md flex items-center justify-center space-x-2"
            >
              <span>Book Design Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href="https://api.whatsapp.com/send/?phone=919643431551&text=Hello%2C+I+loved+your+gallery+work+and+would+like+to+discuss+my+home+interiors.&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/20 text-white text-xs uppercase tracking-[0.18em] font-semibold hover:bg-white/10 transition-colors flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-4 h-4 text-[#25D366]" />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Fullscreen Interactive Lightbox Modal */}
      {currentItem && activeLightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/92 backdrop-blur-md transition-opacity" />

          {/* Modal Container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl bg-[#1c1815] rounded-3xl border border-white/15 shadow-2xl overflow-hidden z-10 max-h-[94vh] flex flex-col"
          >
            {/* Top Bar */}
            <div className="px-6 py-4 bg-[#141210] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-3 text-xs text-[#1468a2] uppercase font-semibold tracking-wider">
                <span className="px-2.5 py-0.5 rounded-full bg-[#1468a2]/20 text-[#1468a2] font-mono text-[11px]">
                  {currentItem.category}
                </span>
                <span>•</span>
                <span className="text-white/80 font-mono text-xs">
                  {activeLightboxIndex + 1} of {GALLERY_IMAGES.length}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <button
                  onClick={closeLightbox}
                  className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="p-4 sm:p-6 md:p-8 overflow-y-auto flex-grow flex flex-col lg:flex-row gap-6 items-center">
              {/* Image with Navigation Controls */}
              <div className="relative w-full lg:w-3/5 rounded-2xl overflow-hidden bg-black flex items-center justify-center max-h-[60vh] lg:max-h-[70vh]">
                <img
                  src={currentItem.url}
                  alt={currentItem.title}
                  className="w-full h-full max-h-[65vh] object-contain select-none"
                />

                {/* Left Arrow Button */}
                <button
                  onClick={handlePrev}
                  className="absolute left-3 p-3 rounded-full bg-black/60 hover:bg-[#1468a2] text-white border border-white/20 transition-all shadow-lg hover:scale-110"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Arrow Button */}
                <button
                  onClick={handleNext}
                  className="absolute right-3 p-3 rounded-full bg-black/60 hover:bg-[#1468a2] text-white border border-white/20 transition-all shadow-lg hover:scale-110"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Sidebar Info */}
              <div className="w-full lg:w-2/5 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <span className="text-xs uppercase font-mono tracking-widest text-[#1468a2] block">
                      {currentItem.space}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-snug">
                      {currentItem.title}
                    </h3>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#1468a2] block">
                      Key Architectural Feature:
                    </span>
                    <p className="text-xs text-white/95 font-medium">
                      {currentItem.highlight}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs uppercase tracking-wider text-white/50 font-semibold">
                      Spatial & Material Description
                    </h4>
                    <p className="text-sm text-white/80 font-light leading-relaxed">
                      {currentItem.description}
                    </p>
                  </div>
                </div>

                {/* Inquiry Action */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <button
                    onClick={() => {
                      closeLightbox();
                      onOpenInquiry(`Design Consultation for ${currentItem.title}`);
                    }}
                    className="w-full py-3.5 px-6 rounded-full bg-[#1468a2] text-white text-xs uppercase tracking-[0.16em] font-semibold hover:bg-white hover:text-[#181818] transition-all duration-300 shadow-md flex items-center justify-center space-x-2"
                  >
                    <span>Inquire About This Space</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-white/50">
                    Use arrow keys (← →) or click buttons to navigate spaces
                  </p>
                </div>
              </div>
            </div>

            {/* Thumbnail Ribbon at Bottom */}
            <div className="px-6 py-3 bg-[#141210] border-t border-white/10 flex items-center space-x-2.5 overflow-x-auto">
              {GALLERY_IMAGES.map((img, idx) => (
                <button
                  key={img.id}
                  onClick={() => setActiveLightboxIndex(idx)}
                  className={`relative w-14 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                    activeLightboxIndex === idx
                      ? 'border-[#1468a2] scale-105 opacity-100'
                      : 'border-transparent opacity-40 hover:opacity-80'
                  }`}
                >
                  <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
