import React from 'react';
import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import Card from '../ui/Card';

const NewsCard = ({ news, onSelect }) => {
  return (
    <Card className="flex flex-col h-full hover:shadow-xl transition-all duration-300 group" hoverEffect={true}>
      {/* Image header */}
      <div className="relative overflow-hidden aspect-[16/10] bg-slate-100 shrink-0">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover hover-zoom-img"
          loading="lazy"
        />
        {/* Soft tag overlays */}
        {news.tags && news.tags.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-wrap gap-1.5">
            {news.tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-[9px] font-bold tracking-wider text-primary-dark bg-secondary uppercase px-2 py-0.5 rounded-sm shadow-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Body content */}
      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-2 font-mono">
            <FaCalendarAlt className="w-3 h-3 text-secondary" />
            <span>{news.date}</span>
          </div>

          <h3 className="text-base md:text-lg font-bold font-heading text-primary-dark group-hover:text-accent transition-colors leading-snug mb-2.5">
            {news.title}
          </h3>

          <p className="text-xs md:text-sm text-slate-500 leading-relaxed line-clamp-3">
            {news.summary}
          </p>
        </div>

        <button
          onClick={() => onSelect(news)}
          className="mt-6 flex items-center gap-1.5 text-xs font-bold text-primary hover:text-accent transition-all duration-300 self-start group-hover:translate-x-1 cursor-pointer"
        >
          <span>Read Full Article</span>
          <FaArrowRight className="w-3 h-3" />
        </button>
      </div>
    </Card>
  );
};

export default NewsCard;
