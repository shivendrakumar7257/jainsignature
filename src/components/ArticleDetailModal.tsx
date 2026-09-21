import React, { useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, User, X, Share2 } from 'lucide-react';
import type { Article } from '../data/studioData';
import { BRAND_INFO } from '../data/studioData';

interface ArticleDetailModalProps {
  article: Article | null;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  article,
  onClose,
  onOpenInquiry
}) => {
  useEffect(() => {
    if (article) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [article]);

  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-white text-[#181818] animate-fadeIn flex flex-col justify-between">
      {/* Top Sticky Full Article Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2DACD] py-4 shadow-xs">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Back Button */}
          <button
            onClick={onClose}
            className="inline-flex items-center space-x-2 text-xs md:text-sm font-semibold uppercase tracking-[0.18em] text-[#181818] hover:text-[#1468a2] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Journal</span>
          </button>

          {/* Center Brand Tag */}
          <span className="hidden sm:block text-xs font-mono uppercase tracking-[0.25em] text-[#1468a2] font-semibold">
            JAIN SIGNATURE EDITORIAL
          </span>

          {/* Right Action */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: article.title,
                    text: article.excerpt,
                    url: window.location.href,
                  }).catch(() => {});
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Article link copied to clipboard!');
                }
              }}
              aria-label="Share Article"
              className="p-2 rounded-full border border-[#E2DACD] text-[#181818] hover:bg-[#FAF8F5] transition-colors"
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              aria-label="Close Article View"
              className="p-2.5 rounded-full bg-[#181818] text-white hover:bg-[#1468a2] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Full Article Page View */}
      <main className="flex-grow max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-16 space-y-12">
        {/* Category & Title */}
        <div className="space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1468a2] block">
            {article.category}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#181818] font-normal leading-[1.12]">
            {article.title}
          </h1>

          {/* Metadata Bar */}
          <div className="flex flex-wrap items-center gap-6 text-xs md:text-sm text-[#181818] pt-4 border-t border-[#E2DACD] font-medium">
            <span className="flex items-center space-x-2">
              <User className="w-4 h-4 text-[#1468a2]" />
              <span>{article.author}</span>
            </span>
            <span className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-[#1468a2]" />
              <span>{article.date}</span>
            </span>
            <span className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-[#1468a2]" />
              <span>{article.readTime}</span>
            </span>
          </div>
        </div>

        {/* Featured Cover Image */}
        <div className="rounded-3xl overflow-hidden h-[360px] md:h-[520px] w-full border border-[#E2DACD] shadow-md">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Lead Excerpt Blockquote */}
        <blockquote className="font-serif text-2xl md:text-3xl text-[#181818] italic leading-relaxed border-l-4 border-[#1468a2] pl-6 md:pl-8 my-8">
          "{article.excerpt}"
        </blockquote>

        {/* Full Article Content */}
        <div className="space-y-6 text-lg md:text-xl text-[#1a1a1a] font-normal leading-relaxed">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Article End Callout Banner */}
        <div className="pt-12 border-t border-[#E2DACD]">
          <div className="p-8 md:p-12 rounded-3xl bg-[#FAF8F5] border border-[#E2DACD] flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
            <div className="space-y-2 max-w-lg">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#1468a2] block">
                STUDIO DIALOGUE
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-[#181818] font-normal">
                Inspired by this architectural perspective?
              </h3>
              <p className="text-base text-[#181818] font-normal leading-relaxed">
                Connect with our principal design team at Jain Signature Studio to compose your living sanctuary.
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenInquiry();
              }}
              className="px-8 py-4 rounded-full bg-[#181818] text-white font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#1468a2] transition-colors shrink-0 shadow-md"
            >
              Start Your Project →
            </button>
          </div>
        </div>
      </main>

      {/* Footer bar */}
      <footer className="bg-[#FAF8F5] border-t border-[#E2DACD] py-6 text-center text-xs text-[#181818] font-medium">
        <p>© 2026 {BRAND_INFO.name}. All Rights Reserved.</p>
      </footer>
    </div>
  );
};
