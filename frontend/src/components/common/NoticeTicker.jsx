import React from 'react';
import { Link } from 'react-router-dom';
import { FaVolumeUp } from 'react-icons/fa';
import { NOTICES } from '../../data/mockData';

const NoticeTicker = () => {
  return (
    <div className="bg-primary text-white border-b border-primary-dark/40 py-2.5 overflow-hidden flex items-center relative z-20">
      <div className="bg-secondary text-primary-dark font-semibold text-xs md:text-sm px-4 py-1.5 flex items-center gap-2 select-none shadow-md shrink-0 z-10 font-heading">
        <FaVolumeUp className="animate-bounce" />
        <span>UPDATES:</span>
      </div>
      
      {/* CSS infinite scrolling marquee */}
      <div className="relative w-full flex items-center overflow-hidden">
        <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap gap-16 text-xs md:text-sm font-medium">
          {NOTICES.map((notice) => (
            <Link
              key={notice.id}
              to={notice.link || "/student-corner/notices"}
              className="hover:text-secondary transition-colors inline-flex items-center gap-2 group"
            >
              <span className={`w-2 h-2 rounded-full shrink-0 ${notice.priority === 'high' ? 'bg-red-500 animate-ping' : 'bg-secondary'}`} />
              <span>{notice.title}</span>
              <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded-sm text-slate-300 group-hover:text-secondary font-mono">
                {notice.date}
              </span>
            </Link>
          ))}
          
          {/* Duplicate to ensure seamless loop */}
          {NOTICES.map((notice) => (
            <Link
              key={`dup-${notice.id}`}
              to={notice.link || "/student-corner/notices"}
              className="hover:text-secondary transition-colors inline-flex items-center gap-2 group"
            >
              <span className={`w-2 h-2 rounded-full shrink-0 ${notice.priority === 'high' ? 'bg-red-500 animate-ping' : 'bg-secondary'}`} />
              <span>{notice.title}</span>
              <span className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded-sm text-slate-300 group-hover:text-secondary font-mono">
                {notice.date}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Ticker marquee css styles injectors in react style */}
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
