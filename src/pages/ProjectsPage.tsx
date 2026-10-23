import React, { useState } from 'react';
import { Download, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/studioData';
import type { Project } from '../data/studioData';
import { ProjectCard } from '../components/ProjectCard';

interface ProjectsPageProps {
  onSelectProject: (project: Project) => void;
  onOpenInquiry: (serviceTitle?: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onSelectProject,
  onOpenInquiry
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Luxury', 'Residential', 'Office', 'Commercial'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeCategory);

  const handleDownloadPortfolio = () => {
    const link = document.createElement('a');
    link.href = '/Jain_Signature_Studio_Portfolio.pdf';
    link.download = 'Jain_Signature_Studio_Portfolio.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-28 pb-24 space-y-16 bg-[#181818] text-[#F5F2EC]">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-[#38322B]">
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs uppercase font-semibold tracking-[0.3em] text-[#1468a2] block">
              SELECTED ARCHITECTURAL ARCHIVE
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.08] text-white">
              Portfolio & <br />
              <span className="italic font-serif text-[#1468a2]">Architectural Work.</span>
            </h1>
            <p className="text-base text-[#E8E1D7]/70 font-light leading-relaxed">
              Explore our curated portfolio of private residences, coastal villas, high-rise penthouses, executive corporate spaces, and luxury boutiques across India.
            </p>
          </div>

          {/* Download Portfolio & Consultation Actions */}
          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <button
              onClick={handleDownloadPortfolio}
              className="inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-full bg-[#1468a2] text-white text-xs uppercase tracking-[0.16em] font-semibold hover:bg-white hover:text-[#181818] transition-all duration-300 shadow-md group"
            >
              <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              <span>Download Portfolio (PDF)</span>
            </button>

            <button
              onClick={() => onOpenInquiry('Portfolio Consultation')}
              className="inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-full border border-white/20 hover:border-white text-white text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-300 hover:bg-white/5"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-3 mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#1468a2] text-white font-semibold shadow-xs'
                  : 'bg-[#29241F] text-[#E8E1D7]/70 border border-[#38322B] hover:border-[#1468a2]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectProject={onSelectProject}
              aspect={index % 2 === 0 ? 'portrait' : 'landscape'}
            />
          ))}
        </div>
      </section>

      {/* Bottom Commission Callout */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-12 text-center">
        <div className="p-10 sm:p-14 rounded-3xl bg-[#29241F] border border-[#38322B] space-y-6 max-w-3xl mx-auto shadow-xl">
          <h3 className="font-serif text-2xl sm:text-3xl text-white">
            Discreet Portfolio Mandate
          </h3>
          <p className="text-xs md:text-sm text-[#E8E1D7]/70 font-light leading-relaxed">
            Due to non-disclosure agreements with high-profile clients, several estate projects are excluded from public view. Download our official lookbook or contact our studio for a private portfolio presentation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={handleDownloadPortfolio}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-7 py-3.5 rounded-full border border-[#1468a2] bg-[#1468a2]/20 text-white font-semibold text-xs uppercase tracking-[0.16em] hover:bg-[#1468a2] transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Studio Portfolio PDF</span>
            </button>
            <button
              onClick={() => onOpenInquiry('Private Portfolio Access')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#1468a2] text-white font-semibold text-xs uppercase tracking-[0.16em] hover:bg-white hover:text-[#181818] transition-colors"
            >
              Request Private Access
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
