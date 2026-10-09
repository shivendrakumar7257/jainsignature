import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, ExternalLink, ShieldCheck, MapPin } from 'lucide-react';

export interface GoogleReview {
  id: string;
  name: string;
  initials: string;
  avatarColor: string;
  rating: number;
  date: string;
  location: string;
  projectType: string;
  reviewText: string;
  verified: boolean;
}

export const GOOGLE_REVIEWS_DATA: GoogleReview[] = [
  {
    id: 'rev-1',
    name: 'Rohan & Meenakshi Sharma',
    initials: 'RS',
    avatarColor: 'bg-[#1468a2]',
    rating: 5,
    date: '2 weeks ago',
    location: 'Raj Nagar Extn, Ghaziabad',
    projectType: 'Full Home Interior',
    reviewText: 'Jain Signature Studio transformed our 4BHK apartment into a dream home. Their team is extremely professional, transparent with pricing, and completed execution right on schedule. The 3D renderings matched reality 100%!',
    verified: true
  },
  {
    id: 'rev-2',
    name: 'Dr. Alok Verma',
    initials: 'AV',
    avatarColor: 'bg-[#8B5CF6]',
    rating: 5,
    date: '1 month ago',
    location: 'Sector 150, Noida',
    projectType: 'Luxury Apartment',
    reviewText: 'Outstanding experience with Jain Signature Studio LLP. From initial consultation to final reveal, Mr. Jain and his architects paid immense attention to detail. The Statuario marble work and modular kitchen are top notch.',
    verified: true
  },
  {
    id: 'rev-3',
    name: 'Siddharth & Nidhi Gupta',
    initials: 'SG',
    avatarColor: 'bg-[#10B981]',
    rating: 5,
    date: '2 months ago',
    location: 'Jaypee Greens, Greater Noida',
    projectType: 'Golf Villa Estate',
    reviewText: 'We hired Jain Signature Studio for our villa interior design in Greater Noida. Their material quality (BWP ply, Blum hardware, custom veneers) and multi-tier quality checks are exceptional. Zero budget overruns!',
    verified: true
  },
  {
    id: 'rev-4',
    name: 'Priya & Amit Mehra',
    initials: 'PM',
    avatarColor: 'bg-[#F59E0B]',
    rating: 5,
    date: '3 months ago',
    location: 'South Delhi',
    projectType: 'Penthouse Residence',
    reviewText: 'Best interior design company in Delhi NCR! Designed our penthouse with incredible elegance. The lighting design, false ceiling shadow gaps, and custom wardrobes exceeded our expectations. Highly responsive team.',
    verified: true
  },
  {
    id: 'rev-5',
    name: 'Sanjay Singhal',
    initials: 'SS',
    avatarColor: 'bg-[#EC4899]',
    rating: 5,
    date: '4 months ago',
    location: 'GNB Mall, Ghaziabad',
    projectType: 'Commercial Showroom',
    reviewText: 'Top class boutique commercial interior designers! Handled our showroom fitout with ultimate perfection. On-time delivery and white-glove aftercare support. 5 stars all the way!',
    verified: true
  },
  {
    id: 'rev-6',
    name: 'Deepak Tyagi',
    initials: 'DT',
    avatarColor: 'bg-[#3B82F6]',
    rating: 5,
    date: '5 months ago',
    location: 'Indirapuram, Ghaziabad',
    projectType: 'Luxury Villa Fitout',
    reviewText: 'Extremely satisfied with the service and craftsmanship. Dedicated single point of contact made site coordination seamless. The 3D designs and real-life execution matched flawlessly!',
    verified: true
  }
];

const GOOGLE_MAPS_REVIEW_URL = "https://www.google.com/search?q=Jain+Signature+Studio+LLP&oq=jain&gs_lcrp=EgZjaHJvbWUqCAgCEEUYJxg7MgYIABBFGDwyBggBEEUYOTIICAIQRRgnGDsyBggDEEUYOzIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPTIGCAcQRRhB0gEIMjMwMmowajeoAgiwAgE&sourceid=chrome&source=chrome.ob&ie=UTF-8#lpg=cid:CgIgAQ%3D%3D,ik:CAoSHENJQUJJaERldFJ2OWNNaW1IYlkwS0RrbEY4U0o%3D&lrd=0x390cf1aca38b468b:0x994ba08cd46d721d,1,,,,";

export const GoogleReviewsSlider: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Auto-scroll left to right continuously on fast speed
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        // If at the end, scroll back to 0 smooth
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
        }
      }
    }, 1800);

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  const handleScrollLeft = () => {
    setIsAutoScrolling(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    setIsAutoScrolling(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full space-y-8">
      {/* Header Bar: Google Rating & Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-[#E2DACD] shadow-sm">
        <div className="flex items-center space-x-4">
          {/* Google Icon Badge */}
          <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#E2DACD] flex items-center justify-center shadow-xs flex-shrink-0">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <span className="font-serif text-2xl font-bold text-[#181818]">4.9</span>
              <div className="flex items-center space-x-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                ))}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1468a2] bg-[#1468a2]/10 px-2.5 py-0.5 rounded-full">
                Verified Profile
              </span>
            </div>
            <p className="text-xs text-[#181818]/70 font-normal mt-0.5">
              Based on genuine 5-star customer reviews on Google Maps
            </p>
          </div>
        </div>

        {/* Action Controls & External Link */}
        <div className="flex items-center justify-between sm:justify-end space-x-3">
          <a
            href={GOOGLE_MAPS_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-full bg-[#181818] text-white text-xs font-semibold hover:bg-[#1468a2] transition-colors shadow-sm"
          >
            <span>Read on Google</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleScrollLeft}
              className="p-2.5 rounded-full bg-[#FAF8F5] border border-[#E2DACD] text-[#181818] hover:bg-[#1468a2] hover:text-white hover:border-[#1468a2] transition-colors shadow-xs"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleScrollRight}
              className="p-2.5 rounded-full bg-[#FAF8F5] border border-[#E2DACD] text-[#181818] hover:bg-[#1468a2] hover:text-white hover:border-[#1468a2] transition-colors shadow-xs"
              aria-label="Next Review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Sliding Carousel Container (Left to Right) */}
      <div
        ref={scrollContainerRef}
        onMouseEnter={() => setIsAutoScrolling(false)}
        onMouseLeave={() => setIsAutoScrolling(true)}
        className="flex space-x-5 overflow-x-auto scrollbar-none pb-4 pt-1 snap-x snap-mandatory transition-all duration-300"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {GOOGLE_REVIEWS_DATA.map((review) => (
          <div
            key={review.id}
            className="w-[300px] sm:w-[340px] flex-shrink-0 snap-start rounded-2xl bg-white border border-[#E2DACD] hover:border-[#1468a2] transition-all duration-300 p-6 flex flex-col justify-between space-y-4 shadow-sm hover:shadow-xl transform hover:-translate-y-1"
          >
            {/* Top Reviewer Info & Rating */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {/* Avatar Initials */}
                  <div
                    className={`w-10 h-10 rounded-full ${review.avatarColor} text-white font-bold text-xs flex items-center justify-center shadow-xs`}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-semibold text-[#181818] leading-tight flex items-center space-x-1">
                      <span>{review.name}</span>
                    </h4>
                    <span className="text-[11px] text-[#181818]/60 font-mono block">
                      {review.date}
                    </span>
                  </div>
                </div>

                {/* Google Badge */}
                <div className="flex items-center space-x-1 bg-white px-2 py-1 rounded-full border border-[#E2DACD]">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    />
                  </svg>
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center space-x-1 text-amber-500">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-[#181818]/85 font-normal leading-relaxed italic line-clamp-4">
                "{review.reviewText}"
              </p>
            </div>

            {/* Bottom Location & Project Tag */}
            <div className="pt-3 border-t border-[#E2DACD]/70 flex items-center justify-between text-[11px] text-[#181818]/70">
              <span className="flex items-center space-x-1 font-medium text-[#1468a2]">
                <MapPin className="w-3 h-3" />
                <span>{review.location}</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-white border border-[#E2DACD] text-[10px] font-semibold text-[#181818]/80">
                {review.projectType}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
