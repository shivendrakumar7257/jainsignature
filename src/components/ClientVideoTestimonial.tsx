import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Star, CheckCircle2, MapPin, Sparkles, ArrowUpRight, ShieldCheck, Maximize2 } from 'lucide-react';

interface ClientVideoTestimonialProps {
  onOpenInquiry?: (serviceTitle?: string) => void;
}

export interface VideoTestimonialItem {
  id: string;
  videoUrl: string;
  badge: string;
  clientName: string;
  role: string;
  location: string;
  projectType: string;
  rating: number;
  highlightQuote: string;
  fullQuote: string;
  deliverables: string[];
}

export const VIDEO_TESTIMONIALS: VideoTestimonialItem[] = [
  {
    id: 'client-review',
    videoUrl: '/testimonials/client-review.mp4',
    badge: 'Verified Client Video Review',
    clientName: 'Mr. R. K. Jain & Family',
    role: 'Luxury Villa Homeowner',
    location: 'Raj Nagar Extension, Ghaziabad',
    projectType: 'Turnkey Residential Architecture & Execution',
    rating: 5,
    highlightQuote: '“Jain Signature Studio transformed our home with millimeter precision. An effortless and truly enjoyable journey.”',
    fullQuote: 'From the initial 3D architectural renders to the final handover, Mr. Jain and the entire design team delivered beyond expectations. The seamless veneer panelling, imported Italian marble joinery, and atmospheric warm lighting completely elevated our day-to-day living. Their transparency with timelines and budget made the execution stress-free.',
    deliverables: [
      '4BHK Luxury Villa Handover',
      'Millimeter-Precision Italian Marble Work',
      'Bespoke Fluted Oak & Concealed Joinery',
      'Concealed Shadow Gaps & Architectural Lighting'
    ]
  },
  {
    id: 'foyer-tour',
    videoUrl: '/reels/reel-3.mp4',
    badge: 'On-Site Walkthrough',
    clientName: 'Grand Foyer & Monumental Entrance',
    role: 'Architectural Entryway',
    location: 'Sector 150, Noida',
    projectType: 'Luxury Estate Entrance Fitout',
    rating: 5,
    highlightQuote: '“First impressions matter. Monumental pivot entrance and book-matched marble arrival.”',
    fullQuote: 'Crafted with heavy brass architectural hardware, fluted acoustic panelling, and integrated touchless security. Designed to welcome guests into an environment of quiet confidence.',
    deliverables: [
      'Custom Pivot Entrance Door with CNC Inlays',
      'Bookmatched Statuario Marble Accent Wall',
      'Integrated Architectural Cove Warm Diffusers',
      'Zero-Clutter Concealed Electrical Automation'
    ]
  },
  {
    id: 'mandir-tour',
    videoUrl: '/reels/reel-4.mp4',
    badge: 'Sacred Architecture',
    clientName: 'Bespoke Handcrafted Mandir',
    role: 'Spiritual Sanctum',
    location: 'Vasundhara, Ghaziabad',
    projectType: 'Sacred Pooja Room Architecture',
    rating: 5,
    highlightQuote: '“Hand-sculpted Corian relief and gold leafing that evokes timeless reverence.”',
    fullQuote: 'Seamlessly marrying timeless spiritual traditions with modern architectural serenity. Features custom backlit onyx, precision CNC lotus reliefs, and dedicated acoustic dampening.',
    deliverables: [
      'Hand-Carved Krishna & Cow Wall Mural',
      'Backlit Imported Onyx Altar',
      'Concealed Brass Hardware & Aarti Storage',
      'Custom Temple Bell & Ceiling Coffers'
    ]
  }
];

export const ClientVideoTestimonial: React.FC<ClientVideoTestimonialProps> = ({ onOpenInquiry }) => {
  const [activeItem, setActiveItem] = useState<VideoTestimonialItem>(VIDEO_TESTIMONIALS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Sync video source change
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  }, [activeItem]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const pct = clickX / rect.width;
    videoRef.current.currentTime = pct * duration;
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="w-full space-y-8">
      {/* Main Video & Story Card */}
      <div className="rounded-3xl bg-white border border-[#E2DACD] shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 transition-all duration-500">
        
        {/* Left Column: 9:16 Video Player Container */}
        <div className="lg:col-span-5 bg-[#121212] relative flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black group">
            
            {/* The HTML5 Video Player */}
            <video
              ref={videoRef}
              src={activeItem.videoUrl}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onClick={togglePlay}
              className="w-full h-full object-cover cursor-pointer"
            />

            {/* Gradient Overlays for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/40 pointer-events-none" />

            {/* Top Bar: Badges */}
            <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-20 pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-mono font-bold tracking-wider border border-white/20 flex items-center space-x-1.5 shadow-sm">
                <Sparkles className="w-3 h-3 text-amber-400" />
                <span>CLIENT REVIEW</span>
              </span>

              <span className="px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-[10px] font-semibold tracking-wider flex items-center space-x-1 shadow-sm">
                <ShieldCheck className="w-3 h-3" />
                <span>VERIFIED</span>
              </span>
            </div>

            {/* Center Play/Pause Large Floating Button */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer bg-black/35 backdrop-blur-[2px]"
              >
                <div className="w-16 h-16 rounded-full bg-white/95 text-[#181818] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
              </div>
            )}

            {/* Sound Toggle Floating Banner / Button */}
            <div className="absolute top-14 left-3.5 right-3.5 z-20">
              <button
                onClick={toggleMute}
                className={`w-full py-1.5 px-3 rounded-full text-xs font-semibold flex items-center justify-center space-x-2 backdrop-blur-md transition-all shadow-md ${
                  isMuted
                    ? 'bg-amber-500/90 hover:bg-amber-500 text-white animate-pulse'
                    : 'bg-black/60 hover:bg-black/80 text-white border border-white/20'
                }`}
              >
                {isMuted ? (
                  <>
                    <VolumeX className="w-3.5 h-3.5" />
                    <span>Click to Unmute & Listen to Client</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Sound On • Playing Audio</span>
                  </>
                )}
              </button>
            </div>

            {/* Bottom Controls Bar */}
            <div className="absolute bottom-3 left-3 right-3 z-20 space-y-2">
              {/* Seek Progress Bar */}
              <div
                onClick={handleSeek}
                className="w-full h-1.5 bg-white/25 hover:h-2 rounded-full cursor-pointer relative overflow-hidden transition-all"
              >
                <div
                  className="h-full bg-[#1468a2] transition-all duration-100"
                  style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                />
              </div>

              {/* Bottom Row Controls */}
              <div className="flex items-center justify-between text-white text-xs pt-0.5">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={togglePlay}
                    className="p-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
                    aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
                  >
                    {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-mono text-white/80">
                    {Math.floor(currentTime)}s / {Math.floor(duration || 25)}s
                  </span>
                  <button
                    onClick={handleFullscreen}
                    className="p-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-colors"
                    aria-label="Fullscreen"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Verified Story Details & Client Statement */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8 bg-[#FAF8F5]">
          
          {/* Header & Client Profile */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#1468a2]/10 text-[#1468a2] text-xs font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#1468a2]" />
                <span>{activeItem.badge}</span>
              </span>

              <div className="flex items-center space-x-1 text-amber-500">
                {[...Array(activeItem.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                ))}
                <span className="text-xs font-mono font-bold text-[#181818] ml-1">5.0 / 5.0</span>
              </div>
            </div>

            {/* Client Headline */}
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#181818] font-normal leading-tight">
                {activeItem.clientName}
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-xs text-[#181818]/70 mt-1.5 font-medium">
                <span className="flex items-center space-x-1 text-[#1468a2]">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{activeItem.location}</span>
                </span>
                <span>•</span>
                <span className="text-[#181818]/80">{activeItem.projectType}</span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <div className="space-y-4 pt-2 border-t border-[#E2DACD]">
              <p className="font-serif text-lg sm:text-xl text-[#181818] italic leading-relaxed text-[#1468a2]">
                {activeItem.highlightQuote}
              </p>
              <p className="text-sm sm:text-base text-[#181818]/85 font-normal leading-relaxed">
                "{activeItem.fullQuote}"
              </p>
            </div>

            {/* Key Deliverables Grid */}
            <div className="space-y-2.5 pt-2">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#1468a2] block">
                Delivered Architecture & Execution Scope:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeItem.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 text-xs text-[#181818] bg-white px-3 py-2 rounded-xl border border-[#E2DACD]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1468a2] shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Video Switcher Thumbnails & CTA */}
          <div className="space-y-4 pt-6 border-t border-[#E2DACD]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#181818]">
                Select Video Experience:
              </span>
              <span className="text-[11px] text-[#181818]/60 font-mono">
                {VIDEO_TESTIMONIALS.length} On-Site Videos
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
              {VIDEO_TESTIMONIALS.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setActiveItem(v)}
                  className={`p-2.5 sm:p-3 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between space-y-1.5 ${
                    activeItem.id === v.id
                      ? 'bg-[#181818] text-white border-[#181818] shadow-md scale-[1.02]'
                      : 'bg-white hover:bg-[#FAF8F5] text-[#181818] border-[#E2DACD]'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded ${
                        activeItem.id === v.id
                          ? 'bg-[#1468a2] text-white'
                          : 'bg-[#1468a2]/10 text-[#1468a2]'
                      }`}
                    >
                      {v.id === 'client-review' ? 'Featured' : 'Tour'}
                    </span>
                    <Play
                      className={`w-3 h-3 ${
                        activeItem.id === v.id ? 'fill-white text-white' : 'text-[#181818]/60'
                      }`}
                    />
                  </div>
                  <span className="text-xs font-serif font-semibold line-clamp-1">
                    {v.clientName}
                  </span>
                </button>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3">
              <button
                onClick={() => onOpenInquiry && onOpenInquiry('Villa Interior Consultation')}
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-full bg-[#1468a2] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#181818] transition-colors shadow-sm"
              >
                <span>Book Free Design Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <span className="text-[11px] text-[#181818]/60 text-center sm:text-right font-medium">
                ★ 100% Genuine Client Experiences Recorded On-Site
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
