import React, { useState } from 'react';
import { ArrowRight, Clock, Calendar, Search } from 'lucide-react';
import { ARTICLES_DATA } from '../data/studioData';
import type { Article } from '../data/studioData';

interface JournalPageProps {
  onSelectArticle: (article: Article) => void;
}

export const JournalPage: React.FC<JournalPageProps> = ({ onSelectArticle }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'INTERIOR DESIGN', 'MATERIALS', 'DESIGN TRENDS', 'ARCHITECTURE'];

  const filteredArticles = ARTICLES_DATA.filter((art) => {
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          art.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = ARTICLES_DATA[0];

  return (
    <div className="pt-28 pb-24 space-y-16 bg-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs uppercase font-semibold tracking-[0.3em] text-[#1468a2] block">
              EDITORIAL & DESIGN ESSAYS
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#181818] font-normal leading-[1.08]">
              The Journal.
            </h1>
            <p className="text-base text-[#181818]/70 font-light leading-relaxed">
              Curated essays on spatial philosophy, stone curation, acoustic harmony, and the architecture of living well.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-[#1468a2] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-[#FAF8F5] border border-[#E2DACD] text-xs text-[#181818] focus:outline-none focus:border-[#1468a2]"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap items-center gap-3 mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-[#181818] text-[#F5F2EC] shadow-md'
                  : 'bg-[#FAF8F5] text-[#181818]/70 border border-[#E2DACD] hover:border-[#1468a2]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured Big Article Card */}
      {selectedCategory === 'All' && !searchQuery && featuredArticle && (
        <section className="max-w-7xl mx-auto px-6 md:px-12">
          <div
            onClick={() => onSelectArticle(featuredArticle)}
            className="group cursor-pointer rounded-3xl bg-[#FAF8F5] border border-[#E2DACD] hover:border-[#1468a2] overflow-hidden transition-all duration-500 grid grid-cols-1 lg:grid-cols-12 shadow-md hover:shadow-2xl"
          >
            <div className="lg:col-span-7 h-72 sm:h-96 lg:h-auto overflow-hidden relative">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute top-6 left-6 text-xs uppercase font-semibold tracking-widest text-white bg-[#181818]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
                FEATURED ESSAY
              </span>
            </div>

            <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs uppercase font-semibold tracking-widest text-[#1468a2] block">
                  {featuredArticle.category}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#181818] font-medium leading-snug group-hover:text-[#1468a2] transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-sm sm:text-base text-[#181818]/80 font-normal leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-[#E2DACD]">
                <div className="flex items-center space-x-4 text-xs font-sans font-medium text-[#181818]/80">
                  <span className="flex items-center space-x-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#1468a2]" />
                    <span>{featuredArticle.date}</span>
                  </span>
                  <span className="text-[#181818]/30">•</span>
                  <span className="flex items-center space-x-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#1468a2]" />
                    <span>{featuredArticle.readTime}</span>
                  </span>
                </div>

                <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#181818] group-hover:text-[#1468a2]">
                  <span>Read Full Essay</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Grid of Articles */}
      <section className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="group cursor-pointer rounded-3xl bg-[#FAF8F5] border border-[#E2DACD] hover:border-[#1468a2] overflow-hidden transition-all duration-500 shadow-sm hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-widest font-semibold text-[#F5F2EC] bg-[#181818]/80 px-3 py-1 rounded-full backdrop-blur-md">
                    {article.category}
                  </span>
                </div>

                <div className="p-6 md:p-8 space-y-3">
                  <div className="flex items-center space-x-2 text-[11px] text-[#1468a2] font-sans font-semibold tracking-wider uppercase">
                    <Calendar className="w-3.5 h-3.5 text-[#1468a2]" />
                    <span>{article.date}</span>
                    <span className="text-[#181818]/30">•</span>
                    <Clock className="w-3.5 h-3.5 text-[#1468a2]" />
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl text-[#181818] font-semibold group-hover:text-[#1468a2] transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#181818]/80 line-clamp-3 font-normal leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 md:p-8 pt-0 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#181818] group-hover:text-[#1468a2]">
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
