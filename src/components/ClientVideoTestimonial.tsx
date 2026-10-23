import React, { useState, useRef, useEffect } from 'react';
import { Play, Volume2, VolumeX, Star, ShieldCheck, Sparkles, Maximize2 } from 'lucide-react';

export interface VideoTestimonialItem {
  id: string;
  videoUrl: string;
  badge: string;
  clientName: string;
  subtitle: string;
  rating: number;
}

export const VIDEO_TESTIMONIALS: VideoTestimonialItem[] = [
  {
    id: 'client-review',
    videoUrl: '/testimonials/client-review.mp4',
    badge: 'Client Review',
    clientName: 'Mr. R. K. Jain & Family',
    subtitle: 'Raj Nagar Extension, Ghaziabad',
    rating: 5
  },
  {
    id: 'villa-tour',
    videoUrl: '/reels/reel-1.mp4',
    badge: 'Villa Handover',
    clientName: 'Signature Villa Tour',
    subtitle: 'Turnkey Luxury Interior',
    rating: 5
  },
  {
    id: 'craftsmanship',
    videoUrl: '/reels/reel-2.mp4',
    badge: 'Craftsmanship',
    clientName: 'Architectural Details',
    subtitle: 'Bespoke Joinery & Finishes',
    rating: 5
  }
];

export const ClientVideoTestimonial: React.FC = () => {
  const [playingState, setPlayingState] = useState<{ [key: string]: boolean }>({
    'client-review': true,
    'villa-tour': true,
    'craftsmanship': true
  });

  const [mutedState, setMutedState] = useState<{ [key: string]: boolean }>({
    'client-review': true,
    'villa-tour': true,
    'craftsmanship': true
  });

  const [progressState, setProgressState] = useState<{ [key: string]: number }>({
    'client-review': 0,
    'villa-tour': 0,
    'craftsmanship': 0
  });

  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  // Ensure autoplay on mount
  useEffect(() => {
    VIDEO_TESTIMONIALS.forEach((item) => {
      const vid = videoRefs.current[item.id];
      if (vid) {
        vid.play().then(() => {
          setPlayingState((prev) => ({ ...prev, [item.id]: true }));
        }).catch(() => {
          setPlayingState((prev) => ({ ...prev, [item.id]: false }));
        });
      }
    });
  }, []);

  const togglePlay = (id: string) => {
    const vid = videoRefs.current[id];
    if (vid) {
      if (vid.paused) {
        vid.play();
        setPlayingState((prev) => ({ ...prev, [id]: true }));
      } else {
        vid.pause();
        setPlayingState((prev) => ({ ...prev, [id]: false }));
      }
    }
  };

  const toggleMute = (id: string) => {
    const vid = videoRefs.current[id];
    if (!vid) return;

    const willBeMuted = !vid.muted;

    // If unmuting this video, mute all other videos so audio doesn't clash
    if (!willBeMuted) {
      VIDEO_TESTIMONIALS.forEach((item) => {
        const otherVid = videoRefs.current[item.id];
        if (otherVid && item.id !== id) {
          otherVid.muted = true;
        }
      });
      setMutedState({
        'client-review': id === 'client-review' ? false : true,
        'villa-tour': id === 'villa-tour' ? false : true,
        'craftsmanship': id === 'craftsmanship' ? false : true
      });
      vid.muted = false;
    } else {
      vid.muted = true;
      setMutedState((prev) => ({ ...prev, [id]: true }));
    }
  };

  const handleTimeUpdate = (id: string) => {
    const vid = videoRefs.current[id];
    if (vid && vid.duration) {
      setProgressState((prev) => ({
        ...prev,
        [id]: (vid.currentTime / vid.duration) * 100
      }));
    }
  };

  const handleFullscreen = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const vid = videoRefs.current[id];
    if (vid) {
      if (vid.requestFullscreen) {
        vid.requestFullscreen();
      }
    }
  };

  return (
    <div className="w-full">
      {/* 3 Videos in a Row Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {VIDEO_TESTIMONIALS.map((item) => {
          const isPlaying = playingState[item.id] ?? true;
          const isMuted = mutedState[item.id] ?? true;
          const progress = progressState[item.id] ?? 0;

          return (
            <div
              key={item.id}
              className="group relative w-full aspect-[9/16] rounded-3xl overflow-hidden bg-black border border-[#E2DACD] shadow-xl hover:shadow-2xl hover:border-[#1468a2] transition-all duration-500 flex flex-col justify-between"
            >
              {/* HTML5 Video */}
              <video
                ref={(el) => { videoRefs.current[item.id] = el; }}
                src={item.videoUrl}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                onTimeUpdate={() => handleTimeUpdate(item.id)}
                onClick={() => togglePlay(item.id)}
                className="absolute inset-0 w-full h-full object-cover cursor-pointer"
              />

              {/* Gradient Overlay for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/40 pointer-events-none" />

              {/* Top Header Overlay: Badge & Sound Toggle */}
              <div className="relative z-10 p-4 flex items-center justify-between">
                <div className="flex items-center space-x-1.5">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold tracking-wider border border-white/20 flex items-center space-x-1.5 shadow-sm">
                    {item.id === 'client-review' ? (
                      <Sparkles className="w-3 h-3 text-amber-400" />
                    ) : (
                      <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    )}
                    <span>{item.badge}</span>
                  </span>
                </div>

                {/* Unmute / Mute Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMute(item.id);
                  }}
                  className={`p-2 rounded-full backdrop-blur-md transition-all shadow-md flex items-center space-x-1.5 text-xs font-semibold ${
                    isMuted
                      ? 'bg-amber-500/90 hover:bg-amber-500 text-white animate-pulse'
                      : 'bg-black/60 hover:bg-black/80 text-white border border-white/20'
                  }`}
                  aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
                >
                  {isMuted ? (
                    <>
                      <VolumeX className="w-3.5 h-3.5" />
                      <span className="text-[10px] hidden sm:inline">Unmute</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[10px] hidden sm:inline">Sound On</span>
                    </>
                  )}
                </button>
              </div>

              {/* Center Play / Pause Floating Toggle Button */}
              <div
                onClick={() => togglePlay(item.id)}
                className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
              >
                {!isPlaying && (
                  <div className="w-14 h-14 rounded-full bg-white/95 text-[#181818] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                )}
              </div>

              {/* Bottom Card Overlay: Stars, Client Name, Subtitle, Fullscreen */}
              <div className="relative z-10 p-5 space-y-2 pointer-events-none">
                {/* 5 Stars Rating */}
                <div className="flex items-center space-x-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                  ))}
                  <span className="text-[11px] font-mono font-bold text-white ml-1">5.0</span>
                </div>

                {/* Client / Project Name */}
                <div className="flex items-end justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-white leading-tight drop-shadow-md">
                      {item.clientName}
                    </h3>
                    <p className="text-xs text-white/80 font-normal mt-0.5 drop-shadow-sm">
                      {item.subtitle}
                    </p>
                  </div>

                  <button
                    onClick={(e) => handleFullscreen(item.id, e)}
                    className="pointer-events-auto p-1.5 rounded-full bg-black/50 hover:bg-black/80 text-white/90 hover:text-white transition-colors"
                    aria-label="Fullscreen"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Progress Bar at the bottom of the card */}
                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden mt-2">
                  <div
                    className="h-full bg-[#1468a2] transition-all duration-150"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
