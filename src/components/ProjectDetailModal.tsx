import React, { useState } from 'react';
import { X, MapPin, ArrowRight } from 'lucide-react';
import type { Project } from '../data/studioData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenInquiry
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fadeIn">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      <div className="relative w-full max-w-5xl bg-[#F5F2EC] rounded-3xl border border-[#E2DACD] shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-6 md:p-8 bg-[#181818] text-[#F5F2EC] flex items-center justify-between border-b border-[#38322B]">
          <div>
            <div className="flex items-center space-x-3 text-xs text-[#1468a2] uppercase font-semibold tracking-widest mb-1">
              <span>{project.category}</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>{project.location}</span>
              </span>
            </div>
            <h3 className="font-serif text-2xl md:text-4xl font-normal text-white">
              {project.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-10 overflow-y-auto space-y-8">
          {/* Main Display Gallery */}
          <div className="space-y-4">
            <div className="rounded-3xl overflow-hidden h-[300px] md:h-[450px] w-full bg-[#181818]">
              <img
                src={project.gallery[activeImageIndex] || project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>

            {/* Thumbnail selector */}
            {project.gallery.length > 1 && (
              <div className="flex items-center space-x-3 overflow-x-auto pb-2">
                {project.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-20 h-16 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${
                      activeImageIndex === idx ? 'border-[#1468a2] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#FAF8F5] border border-[#E2DACD]">
            <div>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#181818]/50 block mb-1">
                Location
              </span>
              <span className="text-xs md:text-sm font-medium text-[#181818]">
                {project.location}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#181818]/50 block mb-1">
                Completion Year
              </span>
              <span className="text-xs md:text-sm font-medium text-[#181818]">
                {project.year}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#181818]/50 block mb-1">
                Spatial Footprint
              </span>
              <span className="text-xs md:text-sm font-medium text-[#181818]">
                {project.area}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-[#181818]/50 block mb-1">
                Client Profile
              </span>
              <span className="text-xs md:text-sm font-medium text-[#181818]">
                {project.clientType}
              </span>
            </div>
          </div>

          {/* Overview & Concept */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="space-y-3">
              <h4 className="font-serif text-2xl text-[#181818]">Project Overview</h4>
              <p className="text-xs md:text-sm text-[#181818]/80 leading-relaxed font-light">
                {project.overview}
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-serif text-2xl text-[#181818]">Design Concept</h4>
              <p className="text-xs md:text-sm text-[#181818]/80 leading-relaxed font-light">
                {project.concept}
              </p>
            </div>
          </div>

          {/* Materials Palette */}
          <div className="space-y-4 pt-4 border-t border-[#E2DACD]">
            <h4 className="font-serif text-2xl text-[#181818]">Curated Material Palette</h4>
            <div className="flex flex-wrap gap-2.5">
              {project.materials.map((mat, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full bg-white border border-[#E2DACD] text-xs text-[#181818] font-medium flex items-center space-x-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#1468a2]" />
                  <span>{mat}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Action Call */}
          <div className="pt-6 border-t border-[#E2DACD] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#181818]/60">
              Desire a similar architectural aesthetic for your property?
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenInquiry();
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#181818] text-white font-medium text-xs uppercase tracking-[0.2em] hover:bg-[#1468a2] transition-colors flex items-center justify-center space-x-2"
            >
              <span>Inquire About Similar Design</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
