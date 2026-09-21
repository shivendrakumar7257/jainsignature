import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/studioData';
import type { Project } from '../data/studioData';
import { ProjectCard } from '../components/ProjectCard';

interface ProjectsPageProps {
  onSelectProject: (project: Project) => void;
  onOpenInquiry: () => void;
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

  return (
    <div className="pt-28 pb-24 space-y-16 bg-[#181818] text-[#F5F2EC]">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
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

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-3 mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#1468a2] text-white font-semibold'
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
        <div className="p-12 rounded-3xl bg-[#29241F] border border-[#38322B] space-y-6 max-w-3xl mx-auto">
          <h3 className="font-serif text-3xl text-white">
            Discreet Portfolio Mandate
          </h3>
          <p className="text-xs md:text-sm text-[#E8E1D7]/70 font-light">
            Due to non-disclosure agreements with high-profile clients, several estate projects are excluded from public view. Contact our studio for a private portfolio presentation.
          </p>
          <div>
            <button
              onClick={onOpenInquiry}
              className="px-8 py-4 rounded-full bg-[#1468a2] text-white font-semibold text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-[#181818] transition-colors"
            >
              Request Private Portfolio Access
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
