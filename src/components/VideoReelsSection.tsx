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
    id: 'reel-1',
    number: '01',
    title: 'Designed for Your Lifestyle, Crafted for Your Comfort',
    subtitle: 'From functional luxury kitchens to serene master suites — step inside our completed architectural projects.',
    tag: 'Project Tour & Craftsmanship',
    videoUrl: '/reels/reel-1.mp4',
    poster: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 'reel-2',
    number: '02',
    title: 'Your Dream Home, Designed Your Way!',
    subtitle: 'Beautiful interiors aren\'t just about aesthetics — they\'re about living harmony and architectural precision.',
    tag: 'Signature Villa Transformation',
    videoUrl: '/reels/reel-2.mp4',
    poster: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=85'
  }
];

export const VideoReelsSection: React.FC = () => {
  const [playingState, setPlayingState] = useState<{ [key: string]: boolean }>({
    'reel-1': true,
    'reel-2': true
  });
  const [mutedState, setMutedState] = useState<{ [key: string]: boolean }>({
    'reel-1': true,
    'reel-2': true
  });

  const videoRefs = {
    'reel-1': useRef<HTMLVideoElement>(null),
    'reel-2': useRef<HTMLVideoElement>(null)
  };

  const togglePlay = (id: 'reel-1' | 'reel-2') => {
    const video = videoRefs[id].current;
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

  const toggleMute = (id: 'reel-1' | 'reel-2') => {
    const video = videoRefs[id].current;
    if (video) {
      video.muted = !video.muted;
      setMutedState((prev) => ({ ...prev, [id]: video.muted }));
    }
  };

  return (
    <section className="pt-8 md:pt-12 pb-20 md:pb-28 bg-white border-b border-[#E2DACD]/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-8 md:space-y-10">
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
            Experience our walkthrough reels showcasing real project executions, material craftsmanship, and turnkey villa reveals.
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

        {/* 2 Reels Centered Compact Grid */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 max-w-3xl mx-auto">
          {REELS_LIST.map((reel) => {
            const reelId = reel.id as 'reel-1' | 'reel-2';
            const isPlaying = playingState[reelId];
            const isMuted = mutedState[reelId];

            return (
              <div
                key={reel.id}
                className="w-full sm:w-[310px] max-w-[320px] group relative rounded-2xl bg-[#181818] border border-[#38322B] overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-[#1468a2] flex flex-col"
              >
                {/* 9:16 Video Player Container */}
                <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
                  <video
                    ref={videoRefs[reelId]}
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
                      onClick={() => togglePlay(reelId)}
                      className="pointer-events-auto w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white flex items-center justify-center hover:scale-110 hover:bg-white hover:text-[#181818] transition-all shadow-xl"
                      aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 fill-current" />
                      ) : (
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      )}
                    </button>
                  </div>

                  {/* Bottom Right Sound Mute / Unmute Button */}
                  <div className="absolute bottom-3 right-3 z-20">
                    <button
                      onClick={() => toggleMute(reelId)}
                      className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-[#1468a2] transition-colors shadow-md"
                      title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4 text-amber-400" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-emerald-400" />
                      )}
                    </button>
                  </div>

                  {/* Bottom Text Overlays on Video */}
                  <div className="absolute bottom-3 left-3 right-12 z-10 space-y-1 pointer-events-none">
                    <div className="flex items-center space-x-1.5 text-white/80 text-[10px] font-semibold uppercase tracking-wider">
                      <InstagramIcon className="w-3 h-3 text-[#E1306C]" />
                      <span>{BRAND_INFO.instagram}</span>
                    </div>
                    <h3 className="font-serif text-sm sm:text-base text-white font-semibold leading-tight drop-shadow-md">
                      {reel.title}
                    </h3>
                  </div>
                </div>

                {/* Subtitle Card Footer */}
                <div className="p-4 bg-[#181818] text-white/90 space-y-2 border-t border-white/10">
                  <p className="text-xs text-white/75 font-normal leading-relaxed line-clamp-2">
                    {reel.subtitle}
                  </p>
                  <div className="pt-1.5 flex items-center justify-between">
                    <button
                      onClick={() => togglePlay(reelId)}
                      className="text-[11px] font-semibold uppercase tracking-wider text-[#1468a2] hover:text-white transition-colors flex items-center space-x-1"
                    >
                      <span>{isPlaying ? 'Pause' : 'Watch'}</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                    <span className="text-[10px] font-mono text-white/50">
                      Reel {reel.number}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
