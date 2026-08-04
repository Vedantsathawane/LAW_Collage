import React from 'react';
import { PLACEMENTS } from '../../data/mockData';

const RecruiterSlider = () => {
  const logos = PLACEMENTS.recruiters;

  return (
    <div className="bg-slate-50 py-8 border-y border-slate-100 overflow-hidden relative select-none w-full">
      <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

      {/* Recruiter loop container */}
      <div className="flex animate-[recruits_25s_linear_infinite] whitespace-nowrap gap-12 w-max">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="h-14 w-32 bg-white rounded-xl border border-slate-100 shadow-xs flex items-center justify-center p-3.5 hover:shadow-md transition-shadow group shrink-0"
          >
            <img
              src={logo.logo}
              alt={logo.name}
              className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              loading="lazy"
            />
          </div>
        ))}
        {/* Duplicate loop */}
        {logos.map((logo, index) => (
          <div
            key={`dup-${index}`}
            className="h-14 w-32 bg-white rounded-xl border border-slate-100 shadow-xs flex items-center justify-center p-3.5 hover:shadow-md transition-shadow group shrink-0"
          >
            <img
              src={logo.logo}
              alt={logo.name}
              className="max-h-full max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes recruits {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default RecruiterSlider;
