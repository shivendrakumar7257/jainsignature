import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/studioData';
import type { Service } from '../data/studioData';
import { ServiceCard } from '../components/ServiceCard';

interface ServicesPageProps {
  onSelectService: (service: Service) => void;
  onOpenInquiry: () => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectService,
  onOpenInquiry
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Residential', 'Custom Fitouts', 'Commercial & Office', 'Bespoke Details'];

  const filteredServices = selectedCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === selectedCategory);

  return (
    <div className="pt-28 pb-24 space-y-16 bg-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs uppercase font-semibold tracking-[0.3em] text-[#1468a2] block">
            OUR COMPLETE CAPABILITIES
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#181818] font-normal leading-[1.08]">
            Designed Around <br />
            <span className="italic font-serif text-[#1468a2]">Your World.</span>
          </h1>
          <p className="text-base text-[#181818]/70 font-light leading-relaxed">
            Discover our comprehensive suite of 12 luxury interior architecture disciplines, ranging from turnkey residential masterplanning to bespoke carpentry and spatial detailing.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-3 mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#181818] text-[#F5F2EC] shadow-md'
                  : 'bg-[#FAF8F5] text-[#181818]/70 border border-[#E2DACD] hover:border-[#1468a2]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onSelectService={onSelectService}
            />
          ))}
        </div>
      </section>

      {/* Bespoke Custom Requirement Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-12">
        <div className="p-10 md:p-14 rounded-3xl bg-[#181818] text-[#F5F2EC] flex flex-col md:flex-row md:items-center justify-between gap-8 border border-[#38322B]">
          <div className="space-y-3 max-w-xl">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#1468a2]">
              TURNKEY ARCHITECTURE
            </span>
            <h3 className="font-serif text-3xl md:text-4xl text-white">
              Have a multi-unit or custom spatial mandate?
            </h3>
            <p className="text-xs md:text-sm text-[#E8E1D7]/70 font-light leading-relaxed">
              We specialize in custom architectural commissions that combine multiple disciplines into a unified design project.
            </p>
          </div>
          <button
            onClick={onOpenInquiry}
            className="px-8 py-4 rounded-full bg-[#1468a2] text-white font-semibold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-[#181818] transition-colors shrink-0 flex items-center justify-center space-x-2"
          >
            <span>Request Studio Proposal</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
