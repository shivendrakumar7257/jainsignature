import React from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import type { Service } from '../data/studioData';
import { DynamicIcon } from './DynamicIcon';

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
  onOpenInquiryForService: (serviceName: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenInquiryForService
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fadeIn">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      <div className="relative w-full max-w-4xl bg-[#F5F2EC] rounded-3xl border border-[#E2DACD] shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 md:p-8 bg-[#181818] text-[#F5F2EC] flex items-center justify-between border-b border-[#38322B]">
          <div className="flex items-center space-x-4">
            <span className="text-xs font-mono font-semibold tracking-widest text-[#1468a2] bg-white/10 px-3 py-1 rounded-full border border-white/10">
              {service.number}
            </span>
            <div>
              <span className="text-[10px] uppercase font-semibold tracking-[0.2em] text-[#1468a2]">
                {service.category}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-normal text-white">
                {service.title}
              </h3>
            </div>
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
          {service.image && (
            <div className="rounded-2xl overflow-hidden h-64 md:h-80 w-full relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white flex items-center space-x-2">
                <DynamicIcon name={service.iconName} className="w-5 h-5 text-[#1468a2]" />
                <span className="text-sm font-medium tracking-wide">Jain Signature Expertise</span>
              </div>
            </div>
          )}

          <div className="space-y-4">
            <h4 className="font-serif text-2xl text-[#181818]">Scope & Design Philosophy</h4>
            <p className="text-sm md:text-base text-[#181818]/80 leading-relaxed font-light">
              {service.fullDesc}
            </p>
          </div>

          {/* Deliverables Grid */}
          <div className="space-y-4 pt-4 border-t border-[#E2DACD]">
            <h4 className="font-serif text-2xl text-[#181818]">Key Architectural Deliverables</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E2DACD] flex items-start space-x-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#1468a2] shrink-0 mt-0.5" />
                  <span className="text-xs md:text-sm text-[#181818] font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-[#E2DACD] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#181818]/60">
              Looking for custom specifications or sample boards?
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenInquiryForService(service.title);
              }}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#181818] text-white font-medium text-xs uppercase tracking-[0.2em] hover:bg-[#1468a2] transition-colors flex items-center justify-center space-x-2"
            >
              <span>Consult on {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
