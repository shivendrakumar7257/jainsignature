import React from 'react';
import { Compass, ShieldCheck, Feather } from 'lucide-react';
import { BRAND_INFO, TEAM_MEMBERS } from '../data/studioData';
import { SectionHeading } from '../components/SectionHeading';

interface AboutPageProps {
  onOpenInquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenInquiry }) => {
  return (
    <div className="pt-28 pb-20 space-y-24 bg-white">
      {/* About Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <div className="space-y-6 max-w-4xl">
          <span className="text-xs uppercase font-semibold tracking-[0.3em] text-[#1468a2] block">
            ABOUT JAIN SIGNATURE
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#181818] font-normal leading-[1.08]">
            Designing Spaces <br />
            <span className="italic font-serif text-[#1468a2]">With Character.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#181818] font-normal leading-relaxed max-w-2xl">
            Founded on the conviction that interior architecture must harmonize emotional serenity, material authenticity, and architectural precision.
          </p>
        </div>

        {/* Hero Image Banner */}
        <div className="mt-12 rounded-3xl overflow-hidden h-[380px] md:h-[550px] w-full relative border border-[#E2DACD]">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85"
            alt="Jain Signature Studio Overview"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 text-white flex flex-col md:flex-row md:items-end justify-between gap-4">
            <span className="font-serif text-2xl md:text-3xl max-w-md font-normal">
              "Every line drawn in our studio serves a purpose."
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#1468a2] font-semibold">
              GNB Mall Studio • Raj Nagar Extn, Ghaziabad
            </span>
          </div>
        </div>
      </section>

      {/* Key Statistics Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-10 md:p-14 rounded-3xl bg-[#FAF8F5] border border-[#E2DACD] shadow-sm">
          {BRAND_INFO.stats.map((stat, idx) => (
            <div key={idx} className="space-y-2 text-center md:text-left">
              <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#181818] block">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm uppercase font-semibold tracking-wider text-[#181818] block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <SectionHeading
            label="Narrative"
            title="Our Story"
          />
          <p className="text-base md:text-lg text-[#181818] font-normal leading-relaxed">
            Jain Signature was established over a decade ago with a singular objective: to redefine Indian luxury interior architecture through international minimalism and uncompromising local craftsmanship.
          </p>
          <p className="text-base md:text-lg text-[#181818] font-normal leading-relaxed">
            What started as a boutique design laboratory catering to high-net-worth families has expanded into an acclaimed multidisciplinary studio managing private estates, luxury penthouses, boutique hospitality, and corporate headquarters across India.
          </p>
        </div>

        <div className="lg:col-span-6 rounded-3xl overflow-hidden h-[420px] border border-[#E2DACD] relative shadow-md">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85"
            alt="Design Studio Material Workshop"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Our Philosophy & Values */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 rounded-3xl bg-[#181818] text-[#F5F2EC] shadow-xl">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#1468a2] block mb-2">
            Pillars of Practice
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white">
            Our Core Values
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 md:p-10 rounded-3xl bg-[#29241F] border border-[#38322B] space-y-4">
            <Compass className="w-9 h-9 text-[#1468a2]" />
            <h3 className="font-serif text-2xl text-white font-normal">Spatial Intentionality</h3>
            <p className="text-base text-white/90 font-normal leading-relaxed">
              We do not add elements for superficial decoration. Every layout, light fixture, and joinery reveal is calculated to enhance human movement and spatial calm.
            </p>
          </div>

          <div className="p-8 md:p-10 rounded-3xl bg-[#29241F] border border-[#38322B] space-y-4">
            <ShieldCheck className="w-9 h-9 text-[#1468a2]" />
            <h3 className="font-serif text-2xl text-white font-normal">Material Purity</h3>
            <p className="text-base text-white/90 font-normal leading-relaxed">
              We advocate for authentic materials — solid woods, unpolished natural marbles, tactile wools, and hand-forged metals that gain beauty as they age.
            </p>
          </div>

          <div className="p-8 md:p-10 rounded-3xl bg-[#29241F] border border-[#38322B] space-y-4">
            <Feather className="w-9 h-9 text-[#1468a2]" />
            <h3 className="font-serif text-2xl text-white font-normal">Turnkey Excellence</h3>
            <p className="text-base text-white/90 font-normal leading-relaxed">
              From civil modifications to white-glove artwork placement, we take complete responsibility for execution so client experience is effortless.
            </p>
          </div>
        </div>
      </section>

      {/* MEET OUR TEAM SECTION */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeading
          label="LEADERSHIP & CRAFTSMANSHIP"
          title="Meet Our Team"
          subtitle="The visionary architects, interior designers, and master planners behind Jain Signature."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="group relative rounded-3xl overflow-hidden bg-[#181818] border border-[#E2DACD] shadow-md hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-[460px] sm:h-[500px] w-full overflow-hidden relative">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity duration-300" />

                <div className="absolute bottom-0 left-0 right-0 p-8 text-white space-y-1 z-10">
                  <h3 className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm md:text-base text-[#1468a2] font-medium tracking-wide">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onOpenInquiry}
            className="px-8 py-4 rounded-full bg-[#181818] text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#1468a2] transition-colors shadow-md inline-flex items-center space-x-2"
          >
            <span>Consult With Our Design Team</span>
            <span>→</span>
          </button>
        </div>
      </section>
    </div>
  );
};
