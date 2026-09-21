import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Award, Building2, ShieldCheck, Trophy } from 'lucide-react';
import {
  BRAND_INFO,
  SERVICES_DATA,
  PROJECTS_DATA,
  PROCESS_STEPS,
  CORE_PRINCIPLES,
  TESTIMONIALS,
  ARTICLES_DATA,
  GALLERY_IMAGES
} from '../data/studioData';
import type { Service, Project, Article } from '../data/studioData';
import { SectionHeading } from '../components/SectionHeading';
import { ServiceCard } from '../components/ServiceCard';
import { ProjectCard } from '../components/ProjectCard';

interface HomePageProps {
  setActivePage: (page: string) => void;
  onSelectService: (service: Service) => void;
  onSelectProject: (project: Project) => void;
  onSelectArticle: (article: Article) => void;
  onOpenInquiry: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  setActivePage,
  onSelectService,
  onSelectProject,
  onSelectArticle,
  onOpenInquiry
}) => {
  const [activeServiceCategory, setActiveServiceCategory] = useState<string>('All');
  const [activeProjectCategory, setActiveProjectCategory] = useState<string>('All');

  // Hero Slider State (User Uploaded 4 High-Quality Interior Images)
  const heroImages = [
    {
      url: "/hero1.jpg",
      caption: "Double-Height Architectural Villa Lounge & Pool View",
      location: "Raj Nagar Extension, Ghaziabad"
    },
    {
      url: "/hero2.jpg",
      caption: "Sunset Ocean-View Modern Luxury Living Room",
      location: "Delhi NCR Region"
    },
    {
      url: "/hero3.jpg",
      caption: "Marble Waterfall Island & Warm Ambient Kitchen",
      location: "GNB Mall Studio Showcase"
    },
    {
      url: "/hero4.jpg",
      caption: "Book-Matched Marble Spa Sanctuary & Freestanding Tub",
      location: "Private Estate Project"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const filteredServices = activeServiceCategory === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeServiceCategory);

  const filteredProjects = activeProjectCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeProjectCategory);

  const serviceCategories = ['All', 'Residential', 'Custom Fitouts', 'Commercial & Office', 'Bespoke Details'];
  const projectCategories = ['All', 'Luxury', 'Residential', 'Office', 'Commercial'];

  return (
    <div className="space-y-0 bg-white">
      {/* ================= HERO SECTION WITH RIGHT-SIDE WHITE CARD ================= */}
      <section className="relative w-full bg-[#FAF8F5] lg:bg-[#181818] lg:h-screen lg:min-h-[650px] lg:flex lg:items-center overflow-hidden pt-16 lg:pt-0">
        {/* Hero Image Area (Mobile: Top Banner, Desktop: Fullscreen Background) */}
        <div className="relative h-[320px] sm:h-[420px] lg:absolute lg:inset-0 lg:h-full w-full overflow-hidden bg-[#181818]">
          {heroImages.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
                currentSlide === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              }`}
            >
              <img
                src={slide.url}
                alt={slide.caption}
                className="w-full h-full object-cover"
                loading={idx === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-black/25" />
            </div>
          ))}
        </div>

        {/* Hero Content: Right-Aligned Narrow White Card (Below Image on Mobile, Side-card on Desktop) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-center lg:justify-end mt-4 sm:mt-6 lg:mt-0 py-4 lg:py-0">
          <div className="w-full max-w-[380px] sm:max-w-[400px] md:max-w-[415px] mr-0 lg:mr-4 xl:mr-8 bg-white/95 backdrop-blur-sm p-7 sm:p-9 md:p-10 rounded-3xl border border-[#E2DACD] shadow-2xl space-y-6 text-left transform transition-all duration-500 min-h-[460px] sm:min-h-[500px] md:min-h-[540px] flex flex-col justify-between">
            {/* Top Container */}
            <div className="space-y-5">
              {/* Top Label */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FAF8F5] border border-[#E2DACD]">
                <span className="w-2 h-2 rounded-full bg-[#1468a2] animate-ping" />
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-semibold text-[#1468a2]">
                  LUXURY INTERIORS • ARCHITECTURE
                </span>
              </div>

              {/* Main Title & Subtitle */}
              <div className="space-y-3">
                <h1 className="font-serif text-3xl sm:text-4xl md:text-[42px] font-normal text-[#181818] leading-[1.15]">
                  Where Luxury <br />
                  <span className="italic font-serif text-[#1468a2]">Becomes Personal.</span>
                </h1>
                <p className="text-sm md:text-base text-[#181818] font-normal leading-relaxed pt-1">
                  "{BRAND_INFO.subtitle}"
                </p>
              </div>

              {/* Hero CTAs */}
              <div className="pt-3 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={onOpenInquiry}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#181818] text-white font-semibold text-xs uppercase tracking-[0.18em] hover:bg-[#1468a2] transition-colors flex items-center justify-center space-x-2 shadow-md"
                >
                  <span>Start Your Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById('selected-work');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-[#181818] text-[#181818] font-semibold text-xs uppercase tracking-[0.18em] hover:bg-[#FAF8F5] transition-colors"
                >
                  Explore Work
                </button>
              </div>
            </div>

            {/* Card Footer: Slide Controls & Location Info */}
            <div className="pt-4 border-t border-[#E2DACD] flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrevSlide}
                  aria-label="Previous Slide"
                  className="w-8 h-8 rounded-full border border-[#181818]/20 flex items-center justify-center text-[#181818] hover:bg-[#181818] hover:text-white transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextSlide}
                  aria-label="Next Slide"
                  className="w-8 h-8 rounded-full border border-[#181818]/20 flex items-center justify-center text-[#181818] hover:bg-[#181818] hover:text-white transition-all"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-[#1468a2] font-bold ml-2">
                  0{currentSlide + 1} / 0{heroImages.length}
                </span>
              </div>

              {/* Progress Dots */}
              <div className="flex items-center space-x-1.5">
                {heroImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentSlide === idx ? 'w-5 bg-[#1468a2]' : 'w-1.5 bg-[#E2DACD]'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div
          className="hidden lg:block absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-center text-white/80 hover:text-white transition-colors cursor-pointer"
          onClick={() => {
            const el = document.getElementById('about-us');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] block mb-1 font-medium text-white shadow-sm">Scroll</span>
          <ChevronDown className="w-4 h-4 mx-auto animate-bounce text-white drop-shadow" />
        </div>
      </section>

      {/* ================= ABOUT US SECTION (WHITE BACKGROUND) ================= */}
      <section id="about-us" className="py-20 md:py-28 bg-white border-b border-[#E2DACD]/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12 md:space-y-16">
          {/* Section Header */}
          <div className="space-y-4 max-w-full">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1468a2] flex items-center space-x-2">
              <span className="w-6 h-[1px] bg-[#1468a2]" />
              <span>ABOUT US</span>
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[50px] xl:text-6xl text-[#181818] font-normal leading-[1.12] sm:whitespace-nowrap">
              Designing Spaces <span className="italic font-serif text-[#1468a2]">With Character.</span>
            </h2>
          </div>

          {/* Side-by-Side Content Grid: Left Image & Right Text */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Showcase Image */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden h-[340px] sm:h-[420px] w-full border border-[#E2DACD] shadow-lg relative group">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
                  alt="Jain Signature Architectural Interior"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 text-white flex justify-between items-center text-xs font-medium">
                  <span className="tracking-wider uppercase font-sans">Bespoke Architectural Spaces</span>
                  <span className="text-[#FAF8F5]/80 font-serif italic">Jain Signature Studio</span>
                </div>
              </div>
            </div>

            {/* Right Column: Story & Narrative Aligned with Image */}
            <div className="lg:col-span-6 space-y-6 flex flex-col justify-center">
              <p className="text-lg md:text-xl text-[#181818] font-normal leading-relaxed">
                Jain Signature is an acclaimed luxury interior design & architecture studio based in Ghaziabad, UP. Founded over a decade ago, we specialize in high-end residential estates, luxury penthouses, modular fitouts, and commercial environments across India.
              </p>
              <p className="text-base md:text-lg text-[#181818] font-normal leading-relaxed">
                Our practice harmonizes emotional serenity, material authenticity, and architectural precision. From civil masterplanning to white-glove styling, we compose spaces that remain timeless across generations.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setActivePage('about')}
                  className="inline-flex items-center space-x-2 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#181818] hover:text-[#1468a2] transition-colors border-b-2 border-[#181818] hover:border-[#1468a2] pb-1.5"
                >
                  <span>Learn More About Studio</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Key Statistics Grid - Ultra Modern Luxury Obsidian Card */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#141414] border border-[#2B2B2B] shadow-2xl p-8 sm:p-12 md:p-14 text-white group">
            {/* Ambient Lighting Accents */}
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-[#1468a2]/20 rounded-full blur-[90px] pointer-events-none transition-all duration-700 group-hover:bg-[#1468a2]/30" />
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#1468a2]/15 rounded-full blur-[90px] pointer-events-none" />

            {/* Subtle Metallic Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#282828]">
              {BRAND_INFO.stats.map((stat, idx) => {
                const statIcons = [
                  <Award className="w-5 h-5 text-[#1468a2]" key="1" />,
                  <Building2 className="w-5 h-5 text-[#1468a2]" key="2" />,
                  <ShieldCheck className="w-5 h-5 text-[#1468a2]" key="3" />,
                  <Trophy className="w-5 h-5 text-[#1468a2]" key="4" />
                ];

                return (
                  <div
                    key={idx}
                    className={`space-y-4 pt-6 md:pt-0 ${
                      idx !== 0 ? 'md:pl-8 lg:pl-10' : ''
                    } ${idx !== BRAND_INFO.stats.length - 1 ? 'md:pr-8 lg:pr-10' : ''} group/stat`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-2xl bg-white/[0.06] border border-white/[0.12] flex items-center justify-center text-[#1468a2] group-hover/stat:bg-[#1468a2] group-hover/stat:text-white group-hover/stat:border-[#1468a2] transition-all duration-300 shadow-inner">
                        {statIcons[idx]}
                      </div>
                      <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-white/40">
                        0{idx + 1}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white group-hover/stat:text-[#1468a2] transition-colors duration-300 block tracking-tight">
                        {stat.value}
                      </span>
                      <span className="text-xs sm:text-sm uppercase font-semibold tracking-wider text-white/70 block leading-snug">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES SECTION (WHITE BACKGROUND) ================= */}
      <section className="py-24 md:py-32 bg-white border-b border-[#E2DACD]/60 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            label="Services"
            title="Our Expertise"
            subtitle="From complete interior transformations to the smallest architectural detail, every element is thoughtfully designed."
          />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            {serviceCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveServiceCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                  activeServiceCategory === cat
                    ? 'bg-[#181818] text-[#F5F2EC] shadow-md'
                    : 'bg-[#FAF8F5] text-[#181818]/70 border border-[#E2DACD] hover:border-[#1468a2]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Asymmetric Reference-Inspired Services Grid */}
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

          {/* View All Services Footer Callout */}
          <div className="mt-16 text-center">
            <button
              onClick={() => setActivePage('services')}
              className="px-8 py-4 rounded-full border border-[#181818] text-[#181818] text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#181818] hover:text-white transition-all duration-300"
            >
              Explore Full Service Index →
            </button>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROJECTS SECTION ================= */}
      <section id="selected-work" className="py-24 md:py-32 bg-[#181818] text-[#F5F2EC]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            dark
            label="Portfolio"
            title="Selected Work"
            subtitle="A collection of spaces shaped by detail, material and intention."
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveProjectCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                  activeProjectCategory === cat
                    ? 'bg-[#1468a2] text-white font-semibold'
                    : 'bg-[#29241F] text-[#E8E1D7]/70 border border-[#38322B] hover:border-[#1468a2]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Masonry Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelectProject={onSelectProject}
                aspect={index % 3 === 0 ? 'portrait' : index % 3 === 1 ? 'square' : 'landscape'}
              />
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="mt-16 text-center">
            <button
              onClick={() => setActivePage('projects')}
              className="px-8 py-4 rounded-full border border-white/40 text-white text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#1468a2] hover:border-[#1468a2] hover:text-white transition-all duration-300"
            >
              View Entire Portfolio ({PROJECTS_DATA.length} Projects) →
            </button>
          </div>
        </div>
      </section>

      {/* ================= DESIGN PROCESS / METHODOLOGY SECTION (WHITE BACKGROUND) ================= */}
      <section className="py-24 md:py-32 bg-white border-b border-[#E2DACD]/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            label="Methodology"
            title="From Vision to Reality"
            subtitle="Our structured five-stage architectural process ensures precision, transparency, and serene delivery."
          />

          {/* Process Steps Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 lg:gap-6 relative">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="group p-6 rounded-2xl bg-[#FAF8F5] border border-[#E2DACD] hover:border-[#1468a2] transition-all duration-500 flex flex-col justify-between min-h-[250px] md:min-h-[270px] shadow-xs hover:shadow-lg transform hover:-translate-y-1"
              >
                <div>
                  <span className="text-2xl md:text-3xl font-serif font-medium text-[#1468a2] block mb-2">
                    {step.number}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl text-[#181818] font-normal mb-2 group-hover:text-[#1468a2] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#181818] font-normal leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#E2DACD] text-[11px] font-mono font-bold text-[#1468a2] tracking-widest">
                  STAGE 0{idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY JAIN SIGNATURE / BRAND LEGACY (WHITE BACKGROUND) ================= */}
      <section className="py-24 md:py-32 bg-white border-b border-[#E2DACD]/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1468a2]">
                Brand Legacy
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#181818] leading-tight font-normal">
                More Than Interiors. <br />
                <span className="italic font-serif text-[#1468a2]">A Signature.</span>
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base md:text-lg lg:text-xl text-[#181818] font-normal leading-relaxed">
                We believe your home should be an intimate sanctuary that reflects your heritage and aspirations. We do not apply standardized templates; we compose unique living atmospheres from first principles.
              </p>
            </div>
          </div>

          {/* 4 Core Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORE_PRINCIPLES.map((principle) => (
              <div
                key={principle.number}
                className="p-8 md:p-10 rounded-3xl bg-[#FAF8F5] border border-[#E2DACD] hover:border-[#1468a2] transition-all duration-300 space-y-4 shadow-sm hover:shadow-xl"
              >
                <span className="text-sm font-mono tracking-widest text-[#1468a2] font-bold">
                  {principle.number}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-[#181818] font-normal">
                  {principle.title}
                </h3>
                <p className="text-base text-[#181818] font-normal leading-relaxed">
                  {principle.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS / CLIENT WORDS (WHITE BACKGROUND) ================= */}
      <section className="py-24 md:py-32 bg-white border-b border-[#E2DACD]/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            label="Client Words"
            title="Words From Our Clients"
            subtitle="Discreet feedback from homeowners, villa developers, and business owners."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-8 md:p-10 lg:p-12 rounded-3xl bg-[#FAF8F5] border border-[#E2DACD] flex flex-col justify-between space-y-8 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-4">
                  <span className="font-serif text-5xl text-[#1468a2] leading-none block">“</span>
                  <p className="text-base md:text-lg lg:text-xl text-[#181818] font-normal italic leading-relaxed">
                    {t.quote}
                  </p>
                </div>
                <div className="pt-6 border-t border-[#E2DACD] space-y-1">
                  <h4 className="font-serif text-lg md:text-xl text-[#181818] font-semibold">{t.clientName}</h4>
                  <div className="text-xs md:text-sm text-[#1468a2] font-semibold uppercase tracking-wider">
                    {t.role} • {t.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= JOURNAL PREVIEW / EDITORIAL (WHITE BACKGROUND) ================= */}
      <section className="py-24 md:py-32 bg-white border-b border-[#E2DACD]/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <SectionHeading
              label="Editorial"
              title="From The Journal"
              subtitle="Perspectives on architectural design, material curation, and living well."
            />
            <button
              onClick={() => setActivePage('journal')}
              className="hidden md:inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#181818] hover:text-[#1468a2] mb-12 border-b-2 border-[#181818] pb-1"
            >
              <span>Explore All Articles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ARTICLES_DATA.map((article) => (
              <div
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="group cursor-pointer rounded-3xl bg-[#FAF8F5] border border-[#E2DACD] hover:border-[#1468a2] overflow-hidden transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="h-64 overflow-hidden relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute top-4 left-4 text-xs uppercase tracking-widest font-semibold text-[#F5F2EC] bg-[#181818]/90 px-3.5 py-1.5 rounded-full backdrop-blur-md">
                      {article.category}
                    </span>
                  </div>

                  <div className="p-8 space-y-3">
                    <div className="text-xs text-[#1468a2] font-sans font-semibold tracking-wider uppercase">
                      {article.date} • {article.readTime}
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl text-[#181818] group-hover:text-[#1468a2] transition-colors leading-snug font-medium">
                      {article.title}
                    </h3>
                    <p className="text-base text-[#181818] line-clamp-3 font-normal leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#181818] group-hover:text-[#1468a2]">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INSTAGRAM / VISUAL GALLERY (WHITE BACKGROUND) ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center space-y-12">
          <div>
            <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#1468a2] block mb-2">
              Visual Dialogue
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#181818]">
              Follow The Signature
            </h2>
            <a
              href={BRAND_INFO.instagramLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#1468a2] mt-2 hover:underline"
            >
              <span>{BRAND_INFO.instagram}</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {GALLERY_IMAGES.map((img, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer border border-[#E2DACD]"
              >
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2 text-center text-white text-xs font-medium">
                  <span>{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
