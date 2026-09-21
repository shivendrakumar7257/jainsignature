import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, MessageSquare, PhoneCall } from 'lucide-react';
import { BRAND_INFO } from '../data/studioData';

interface ProjectInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const ProjectInquiryModal: React.FC<ProjectInquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedService = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: 'Mumbai',
    projectType: preselectedService || 'Full Home Interiors',
    budget: '₹50 Lakhs – ₹1 Crore',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Jain Signature Studio,\n\nI would like to start a project.\nName: ${formData.name}\nCity: ${formData.city}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\nPhone: ${formData.phone}`
    );
    window.open(`https://wa.me/${BRAND_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fadeIn">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-[#F5F2EC] rounded-3xl border border-[#E2DACD] shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 md:p-8 bg-[#181818] text-[#F5F2EC] flex items-center justify-between border-b border-[#38322B]">
          <div>
            <span className="text-[10px] uppercase font-semibold tracking-[0.25em] text-[#1468a2]">
              Bespoke Inquiry
            </span>
            <h3 className="font-serif text-2xl md:text-3xl font-normal text-white">
              Start Your Signature Project
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-10 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="text-center py-12 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#1468a2]/15 text-[#1468a2] border border-[#1468a2]/30 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 stroke-[1.5]" />
              </div>
              <div className="space-y-2">
                <h4 className="font-serif text-3xl text-[#181818]">Inquiry Received</h4>
                <p className="text-sm text-[#181818]/70 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#181818]">{formData.name}</strong>. Our senior interior architect will review your project requirements and connect with you within 24 hours.
                </p>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md hover:bg-[#20b858] transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect Instantly on WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#181818] text-[#181818] text-xs font-semibold uppercase tracking-wider hover:bg-[#181818] hover:text-white transition-all"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#181818]/70 font-semibold mb-2">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikramaditya Singhania"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E2DACD] text-[#181818] text-sm focus:outline-none focus:border-[#1468a2]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#181818]/70 font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E2DACD] text-[#181818] text-sm focus:outline-none focus:border-[#1468a2]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#181818]/70 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E2DACD] text-[#181818] text-sm focus:outline-none focus:border-[#1468a2]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#181818]/70 font-semibold mb-2">
                    Project City / Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mumbai / Delhi NCR / Bengaluru / Goa"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E2DACD] text-[#181818] text-sm focus:outline-none focus:border-[#1468a2]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#181818]/70 font-semibold mb-2">
                    Project Type *
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E2DACD] text-[#181818] text-sm focus:outline-none focus:border-[#1468a2]"
                  >
                    <option value="Full Home Interiors">Full Home Interiors</option>
                    <option value="Luxury Interior Design">Luxury Villa / Penthouse</option>
                    <option value="Modular Kitchen & Wardrobes">Modular Kitchen & Wardrobes</option>
                    <option value="Executive Office Interiors">Executive Office / HQ</option>
                    <option value="Commercial Space">Luxury Commercial Boutique</option>
                    <option value="Bespoke Architectural Fitouts">Bespoke Architectural Fitouts</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#181818]/70 font-semibold mb-2">
                    Approximate Budget Range *
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E2DACD] text-[#181818] text-sm focus:outline-none focus:border-[#1468a2]"
                  >
                    <option value="₹25 Lakhs – ₹50 Lakhs">₹25 Lakhs – ₹50 Lakhs</option>
                    <option value="₹50 Lakhs – ₹1 Crore">₹50 Lakhs – ₹1 Crore</option>
                    <option value="₹1 Crore – ₹3 Crores">₹1 Crore – ₹3 Crores</option>
                    <option value="₹3 Crores+">₹3 Crores+ (Ultra Luxury / Estate)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#181818]/70 font-semibold mb-2">
                  Tell Us About Your Vision & Timeline
                </label>
                <textarea
                  rows={3}
                  placeholder="Share details about your space size, architectural layout, target possession date..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-[#E2DACD] text-[#181818] text-sm focus:outline-none focus:border-[#1468a2]"
                ></textarea>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#181818] text-white font-medium text-xs uppercase tracking-[0.2em] hover:bg-[#1468a2] transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Submit Project Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center space-x-2 text-xs text-[#181818]/60">
                  <PhoneCall className="w-3.5 h-3.5 text-[#1468a2]" />
                  <span>Direct Concierge: {BRAND_INFO.phone}</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
