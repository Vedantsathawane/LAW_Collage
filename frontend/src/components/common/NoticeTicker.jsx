import React from 'react';
import { Link } from 'react-router-dom';
import { FaVolumeUp } from 'react-icons/fa';
import { NOTICES } from '../../data/mockData';

const NoticeTicker = () => {
  if (!NOTICES || NOTICES.length === 0) {
    return null;
  }

  return (
    <div className="bg-primary-dark text-white border-b border-primary/20 py-2 overflow-hidden flex items-center relative z-20 select-none">
      <div className="bg-secondary text-primary-dark font-extrabold text-[11px] md:text-xs px-3.5 py-1 flex items-center gap-1.5 shrink-0 z-10 font-heading shadow-sm uppercase tracking-wider">
        <FaVolumeUp className="animate-pulse text-primary-dark w-3 h-3" />
        <span>UPDATES</span>
      </div>
      
      {/* CSS infinite scrolling marquee */}
      <div className="relative w-full flex items-center overflow-hidden">
        <div className="flex animate-[marquee_35s_linear_infinite] whitespace-nowrap gap-12 text-xs md:text-sm font-medium">
          {NOTICES.map((notice) => (
            <Link
              key={notice.id}
              to={notice.link || "/student-corner/notices"}
              className="hover:text-secondary transition-colors inline-flex items-center gap-2 group"
            >
              <span className={`w-2 h-2 rounded-full shrink-0 ${notice.priority === 'high' ? 'bg-secondary animate-ping' : 'bg-secondary/60'}`} />
              <span className="text-slate-200 group-hover:text-white font-medium">{notice.title}</span>
              <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-slate-300 group-hover:text-secondary font-mono">
                {notice.date}
              </span>
            </Link>
          ))}
          
          {/* Duplicate to ensure seamless infinite loop */}
          {NOTICES.map((notice) => (
            <Link
              key={`dup-${notice.id}`}
              to={notice.link || "/student-corner/notices"}
              className="hover:text-secondary transition-colors inline-flex items-center gap-2 group"
            >
              <span className={`w-2 h-2 rounded-full shrink-0 ${notice.priority === 'high' ? 'bg-secondary animate-ping' : 'bg-secondary/60'}`} />
              <span className="text-slate-200 group-hover:text-white font-medium">{notice.title}</span>
              <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-slate-300 group-hover:text-secondary font-mono">
                {notice.date}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default NoticeTicker;
