import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, ArrowUpRight, Film, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/studioData';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export interface ReelData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  tag: string;
  videoUrl: string;
  poster: string;
}

export const REELS_LIST: ReelData[] = [
  {
    id: 'reel-review',
    number: '01',
    title: 'Client Review & Villa Handover',
    subtitle: 'Direct feedback and walkthrough of completed luxury residence with our homeowner.',
    tag: 'Client Review & Experience',
    videoUrl: '/reels/reel-review.mp4',
    poster: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'reel-1',
    number: '02',
    title: 'Designed for Your Lifestyle, Crafted for Your Comfort',
    subtitle: 'From functional luxury kitchens to serene master suites — step inside our completed architectural projects.',
    tag: 'Project Tour & Craftsmanship',
    videoUrl: '/reels/reel-1.mp4',
    poster: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'reel-2',
    number: '03',
    title: "Your Dream Home, Designed Your Way!",
    subtitle: "Beautiful interiors aren't just about aesthetics — they're about living harmony and architectural precision.",
    tag: 'Signature Villa Transformation',
    videoUrl: '/reels/reel-2.mp4',
    poster: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'reel-3',
    number: '04',
    title: 'Grand Foyer & Architectural Entrance',
    subtitle: 'Monumental entrance doors, custom brass hardware, and bookmatched marble arrival.',
    tag: 'Architectural Foyer',
    videoUrl: '/reels/reel-3.mp4',
    poster: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=85'
  }
];

export const VideoReelsSection: React.FC = () => {
  const [playingState, setPlayingState] = useState<{ [key: string]: boolean }>({
    'reel-review': true,
    'reel-1': true,
    'reel-2': true,
    'reel-3': true
  });
  const [mutedState, setMutedState] = useState<{ [key: string]: boolean }>({
    'reel-review': true,
    'reel-1': true,
    'reel-2': true,
    'reel-3': true
  });

  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const togglePlay = (id: string) => {
    const video = videoRefs.current[id];
    if (video) {
      if (video.paused) {
        video.play();
        setPlayingState((prev) => ({ ...prev, [id]: true }));
      } else {
        video.pause();
        setPlayingState((prev) => ({ ...prev, [id]: false }));
      }
    }
  };

  const toggleMute = (id: string) => {
    const video = videoRefs.current[id];
    if (video) {
      video.muted = !video.muted;
      setMutedState((prev) => ({ ...prev, [id]: video.muted }));
    }
  };

  return (
    <section className="pt-12 md:pt-16 pb-20 md:pb-28 bg-white border-b border-[#E2DACD]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-8 md:space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs uppercase font-semibold tracking-[0.25em] text-[#1468a2] inline-flex items-center space-x-2">
            <Film className="w-4 h-4" />
            <span>Visual Dialogue</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl text-[#181818] font-normal leading-tight">
            Follow The Signature
          </h2>
          <p className="text-sm sm:text-base text-[#181818]/80 font-normal leading-relaxed">
            Experience our walkthrough reels showcasing real project executions, material craftsmanship, client testimonials, and turnkey villa reveals.
          </p>
          <div>
            <a
              href={BRAND_INFO.instagramLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-[#1468a2] hover:text-[#181818] transition-colors border-b border-[#1468a2]/30 pb-0.5"
            >
              <InstagramIcon className="w-4 h-4 text-[#E1306C]" />
              <span>{BRAND_INFO.instagram}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Reels Centered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {REELS_LIST.map((reel) => {
            const isPlaying = playingState[reel.id] ?? true;
            const isMuted = mutedState[reel.id] ?? true;

            return (
              <div
                key={reel.id}
                className="w-full group relative rounded-2xl bg-[#181818] border border-[#38322B] overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-[#1468a2] flex flex-col"
              >
                {/* 9:16 Video Player Container */}
                <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
                  <video
                    ref={(el) => { videoRefs.current[reel.id] = el; }}
                    src={reel.videoUrl}
                    poster={reel.poster}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay for Text Visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 pointer-events-none" />

                  {/* Top Badge Overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] font-mono font-bold tracking-wider border border-white/20 flex items-center space-x-1">
                      <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                      <span>REEL {reel.number}</span>
                    </span>

                    <span className="px-2.5 py-0.5 rounded-full bg-[#1468a2] text-white text-[9px] font-semibold uppercase tracking-widest shadow-md">
                      {reel.tag}
                    </span>
                  </div>

                  {/* Center Play / Pause Floating Toggle Button */}
                  <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                    <button
                      onClick={() => togglePlay(reel.id)}
                      className={`pointer-events-auto w-12 h-12 rounded-full bg-black/50 backdrop-blur-md text-white border border-white/20 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#1468a2] ${
                        isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
                      }`}
                      aria-label={isPlaying ? 'Pause video' : 'Play video'}
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 text-white" />
                      ) : (
                        <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                      )}
                    </button>
                  </div>

                  {/* Audio Toggle Button in Corner */}
                  <div className="absolute top-12 right-3 z-20">
                    <button
                      onClick={() => toggleMute(reel.id)}
                      className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 hover:bg-[#1468a2] transition-colors shadow-md"
                      aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                    >
                      {isMuted ? (
                        <VolumeX className="w-3.5 h-3.5" />
                      ) : (
                        <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                      )}
                    </button>
                  </div>

                  {/* Bottom Text Details Overlaid on Video */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1.5 z-10">
                    <h3 className="font-serif text-sm font-semibold text-white leading-snug line-clamp-2 drop-shadow-md">
                      {reel.title}
                    </h3>
                    <p className="text-[11px] text-white/80 line-clamp-2 leading-relaxed">
                      {reel.subtitle}
                    </p>
                  </div>
                </div>

                {/* Bottom External Instagram Action */}
                <div className="p-3 bg-[#181818] border-t border-[#2d2824] flex items-center justify-between text-xs text-white/70">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#1468a2]">
                    Jain Signature Reels
                  </span>
                  <a
                    href={BRAND_INFO.instagramLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1 text-[11px] font-semibold text-white/90 hover:text-[#1468a2] transition-colors"
                  >
                    <span>Watch Full</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
