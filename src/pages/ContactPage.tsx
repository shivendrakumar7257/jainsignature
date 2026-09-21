import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { BRAND_INFO } from '../data/studioData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: 'Ghaziabad',
    projectType: 'Full Home Interiors',
    budget: '₹50 Lakhs – ₹1 Crore',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Jain Signature Studio,\n\nI would like to start a project.\nName: ${formData.name}\nCity: ${formData.city}\nProject Type: ${formData.projectType}\nBudget: ${formData.budget}\nPhone: ${formData.phone}`
    );
    window.open(`https://api.whatsapp.com/send/?phone=${BRAND_INFO.rawPhone}&text=${text}&type=phone_number&app_absent=0`, '_blank');
  };

  return (
    <div className="pt-28 pb-24 space-y-16 bg-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <div className="space-y-4 max-w-3xl">
          <span className="text-xs uppercase font-semibold tracking-[0.3em] text-[#1468a2] block">
            STUDIO INQUIRIES & CONCIERGE
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#181818] font-normal leading-[1.08]">
            Let's Begin Your <br />
            <span className="italic font-serif text-[#1468a2]">Next Space.</span>
          </h1>
          <p className="text-base md:text-lg text-[#181818] font-normal leading-relaxed">
            Tell us about your property, architectural vision, or commercial requirements. We consult by appointment at our GNB Mall studio in Raj Nagar Extension, Ghaziabad or on location.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Studio Details */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-[#FAF8F5] p-8 md:p-12 lg:p-14 rounded-3xl border border-[#E2DACD] shadow-sm">
          {submitted ? (
            <div className="text-center py-16 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#1468a2]/15 text-[#1468a2] border border-[#1468a2]/30 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 stroke-[1.5]" />
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-3xl text-[#181818] font-normal">Enquiry Dispatched</h3>
                <p className="text-base text-[#181818] max-w-md mx-auto leading-relaxed font-normal">
                  Thank you, <strong className="text-[#181818]">{formData.name}</strong>. Our senior interior architect will review your project brief and contact you within 24 hours.
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
                  onClick={() => setSubmitted(false)}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#181818] text-[#181818] text-xs font-semibold uppercase tracking-wider hover:bg-[#181818] hover:text-white transition-all"
                >
                  Submit Another Brief
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-[#E2DACD] pb-4 mb-2">
                <h3 className="font-serif text-2xl md:text-3xl text-[#181818] font-normal">Project Intake Form</h3>
                <p className="text-xs md:text-sm text-[#181818] font-normal mt-1">
                  Complete the fields below to schedule an introductory consultation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#181818] font-bold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikramaditya Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white border border-[#E2DACD] text-[#181818] text-base focus:outline-none focus:border-[#1468a2]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#181818] font-bold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9643431551"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white border border-[#E2DACD] text-[#181818] text-base focus:outline-none focus:border-[#1468a2]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#181818] font-bold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="info@jainstudio.co.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white border border-[#E2DACD] text-[#181818] text-base focus:outline-none focus:border-[#1468a2]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#181818] font-bold mb-2">
                    City / Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ghaziabad / Delhi NCR / Noida"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white border border-[#E2DACD] text-[#181818] text-base focus:outline-none focus:border-[#1468a2]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#181818] font-bold mb-2">
                    Project Type *
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white border border-[#E2DACD] text-[#181818] text-base focus:outline-none focus:border-[#1468a2]"
                  >
                    <option value="Full Home Interiors">Full Home Interiors</option>
                    <option value="Luxury Villa / Penthouse">Luxury Villa / Penthouse</option>
                    <option value="Modular Kitchen & Wardrobes">Modular Kitchen & Wardrobes</option>
                    <option value="Executive Office Interiors">Executive Office / HQ</option>
                    <option value="Commercial Space">Luxury Commercial Boutique</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#181818] font-bold mb-2">
                    Approximate Budget *
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white border border-[#E2DACD] text-[#181818] text-base focus:outline-none focus:border-[#1468a2]"
                  >
                    <option value="₹25 Lakhs – ₹50 Lakhs">₹25 Lakhs – ₹50 Lakhs</option>
                    <option value="₹50 Lakhs – ₹1 Crore">₹50 Lakhs – ₹1 Crore</option>
                    <option value="₹1 Crore – ₹3 Crores">₹1 Crore – ₹3 Crores</option>
                    <option value="₹3 Crores+">₹3 Crores+ (Ultra Luxury / Estate)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#181818] font-bold mb-2">
                  Message / Spatial Vision Notes
                </label>
                <textarea
                  rows={4}
                  placeholder="Share any specific requirements regarding layout, target move-in dates, architect plans..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl bg-white border border-[#E2DACD] text-[#181818] text-base focus:outline-none focus:border-[#1468a2]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#181818] text-white font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#1468a2] transition-colors flex items-center justify-center space-x-2 shadow-md"
              >
                <span>Send Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

        {/* Studio Info Sidebar & Interactive Google Map Preview */}
        <div className="lg:col-span-5 space-y-8">
          <div className="p-8 md:p-10 rounded-3xl bg-[#181818] text-[#F5F2EC] space-y-6 border border-[#38322B] shadow-xl">
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#1468a2]">
              STUDIO HEADQUARTERS
            </span>
            <h3 className="font-serif text-3xl font-normal text-white">
              Ghaziabad Studio
            </h3>

            <div className="space-y-4 text-base text-white/95 font-normal">
              <a
                href={BRAND_INFO.mapLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-start space-x-3 group hover:text-white transition-colors"
              >
                <MapPin className="w-5 h-5 text-[#1468a2] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>{BRAND_INFO.address}</span>
              </a>
              <a href={`tel:${BRAND_INFO.phone}`} className="flex items-center space-x-3 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-[#1468a2] shrink-0" />
                <span>{BRAND_INFO.phone}</span>
              </a>
              <a href={`mailto:${BRAND_INFO.email}`} className="flex items-center space-x-3 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-[#1468a2] shrink-0" />
                <span>{BRAND_INFO.email}</span>
              </a>
              <div className="flex items-start space-x-3 pt-2">
                <Clock className="w-5 h-5 text-[#1468a2] shrink-0 mt-0.5" />
                <span>{BRAND_INFO.hours}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#38322B] flex flex-col space-y-3">
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full py-3.5 rounded-full bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md hover:bg-[#20b858] transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Direct Inquiry</span>
              </button>

              <a
                href={BRAND_INFO.mapLink}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 rounded-full border border-white/20 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-2 hover:bg-white hover:text-[#181818] transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Google Maps Directions</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Preview Card */}
          <div className="rounded-3xl overflow-hidden border border-[#E2DACD] bg-[#181818] relative group">
            <div className="h-72 w-full relative overflow-hidden">
              <iframe
                title="Jain Signature Studio Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.7891789!2d77.43!3d28.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQxJzI0LjAiTiA3N8KwMjUnNDguMCJF!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale invert opacity-75 group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-700 pointer-events-none"
                loading="lazy"
              ></iframe>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

              <a
                href={BRAND_INFO.mapLink}
                target="_blank"
                rel="noreferrer"
                className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center text-white space-y-3"
              >
                <div className="w-12 h-12 rounded-full bg-[#1468a2] text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-serif text-xl font-semibold text-white">GNB Mall Raj Nagar Extension</h4>
                  <p className="text-xs text-white/80 font-light mt-1">L-08, GNB Mall, Ghaziabad 201017 (UP)</p>
                </div>
                <span className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-semibold uppercase tracking-widest text-white border border-white/30 group-hover:bg-[#1468a2] group-hover:text-white transition-all">
                  <span>Click for Live Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
