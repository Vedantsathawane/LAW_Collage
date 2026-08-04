import React from 'react';
import { motion } from 'framer-motion';
import { PLACEMENTS } from '../../data/mockData';

const PlacementChart = () => {
  const data = PLACEMENTS.yearlyStats;

  // Find max values for scale calculations
  const maxAverage = Math.max(...data.map(d => d.average));
  const maxHighest = Math.max(...data.map(d => d.highest));

  return (
    <div className="bg-white border border-slate-100 rounded-2xl shadow-premium p-6 md:p-8 select-none">
      <h3 className="text-lg md:text-xl font-bold font-heading text-primary-dark mb-6 text-center md:text-left">
        5-Year Placement Trend Analysis
      </h3>

      <div className="space-y-6">
        {data.map((stat, index) => {
          // Calculate percentage width for rendering bars
          const avgPercent = (stat.average / maxHighest) * 100;
          const highPercent = (stat.highest / maxHighest) * 100;

          return (
            <div key={index} className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center border-b border-slate-50 pb-5 last:border-0 last:pb-0">
              {/* Year */}
              <div className="md:col-span-2 text-sm font-bold text-slate-500 font-mono">
                {stat.year}
              </div>

              {/* Bars container */}
              <div className="md:col-span-7 space-y-2">
                {/* Average package bar */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${avgPercent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.05 }}
                      className="bg-accent h-full rounded-full"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-muted w-14 shrink-0 font-mono">
                    Avg: {stat.average}L
                  </span>
                </div>

                {/* Highest package bar */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${highPercent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.05 }}
                      className="bg-secondary h-full rounded-full"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-primary-dark w-14 shrink-0 font-mono">
                    High: {stat.highest}L
                  </span>
                </div>
              </div>

              {/* Placed percentage card */}
              <div className="md:col-span-3 text-right">
                <p className="text-[9px] font-bold text-slate-400 uppercase leading-none">Placed Percentage</p>
                <p className="text-base md:text-lg font-extrabold text-success mt-1 font-mono">
                  {stat.placed}%
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-6 mt-8 border-t border-slate-100 pt-5 text-xs text-slate-500 font-medium">
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-2 bg-accent rounded-full" />
          <span>Average Package (LPA)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-2 bg-secondary rounded-full" />
          <span>Highest Package (LPA)</span>
        </div>
      </div>
    </div>
  );
};

export default PlacementChart;
