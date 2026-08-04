import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, description, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row items-center md:justify-between mb-12 md:mb-16 last:mb-0 group">
      {/* Midline Dot */}
      <div className="absolute left-4 md:left-1/2 top-1.5 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-secondary flex items-center justify-center z-10 shadow-md transition-all duration-300 group-hover:scale-125 group-hover:border-primary" />

      {/* Content cards side */}
      <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? 'md:text-right md:order-1' : 'md:order-2'}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -25 : 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: index * 0.05 }}
          className="bg-white border border-slate-100 p-6 md:p-8 rounded-2xl shadow-premium hover:shadow-lg transition-all duration-300 relative"
        >
          {/* Accent small line on desktop */}
          <div className={`hidden md:block absolute top-4 w-4 h-4 bg-white border-t border-r border-slate-100 rotate-45 ${
            isEven 
              ? '-right-2 border-l border-b border-t-0 border-r-0' 
              : '-left-2 border-l border-b border-r-0 border-t-0'
          }`} />

          <span className="inline-block text-sm font-bold bg-primary/5 text-primary border border-primary/10 px-3 py-1 rounded-full mb-3 font-mono">
            {year}
          </span>
          <h3 className="text-lg md:text-xl font-bold font-heading text-primary mb-2.5">
            {title}
          </h3>
          <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Empty side for layout on desktop */}
      <div className="hidden md:block w-[45%] md:order-1" />
    </div>
  );
};

const Timeline = ({ items }) => {
  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 md:px-0 py-8">
      {/* Midline strip */}
      <div className="absolute left-8 md:left-1/2 top-4 bottom-4 transform -translate-x-1/2 w-0.5 bg-slate-200" />

      <div className="relative">
        {items.map((item, idx) => (
          <TimelineItem
            key={idx}
            index={idx}
            year={item.year}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
export { TimelineItem };
