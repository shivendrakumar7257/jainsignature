import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import type { Project } from '../data/studioData';

interface ProjectCardProps {
  project: Project;
  onSelectProject: (project: Project) => void;
  aspect?: 'portrait' | 'landscape' | 'square' | 'tall';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelectProject,
  aspect = 'landscape'
}) => {
  const aspectClasses = {
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
    square: 'aspect-square',
    tall: 'aspect-[9/12]'
  };

  return (
    <div
      onClick={() => onSelectProject(project)}
      className="group relative rounded-3xl overflow-hidden cursor-pointer bg-[#181818] border border-[#E2DACD]/40 hover:border-[#1468a2] transition-all duration-500 shadow-md hover:shadow-2xl"
    >
      {/* Image Container with Aspect Ratio */}
      <div className={`w-full ${aspectClasses[aspect]} overflow-hidden relative`}>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-75 transition-opacity duration-300" />
      </div>

      {/* Top Badges */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
        <span className="text-[10px] uppercase font-semibold tracking-widest text-[#F5F2EC] bg-[#181818]/70 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          {project.category}
        </span>
        <span className="text-[11px] font-mono tracking-wider text-[#1468a2]">
          {project.year}
        </span>
      </div>

      {/* Bottom Content & Circular Hover Button */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10 flex items-end justify-between">
        <div className="space-y-1 text-white pr-4">
          <div className="flex items-center space-x-1.5 text-xs text-[#1468a2] font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#1468a2]" />
            <span>{project.location}</span>
          </div>
          <h3 className="font-serif text-2xl md:text-3xl text-white font-normal group-hover:text-white transition-colors duration-300">
            {project.name}
          </h3>
        </div>

        <div className="w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-[#1468a2] group-hover:border-[#1468a2] group-hover:text-white shrink-0">
          <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </div>
  );
};
