import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, description, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row items-center md:justify-between mb-12 md:mb-16 last:mb-0 group">
      {/* Midline Dot */}
      <div className="absolute left-4 md:left-1/2 top-1.5 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#B88E1C] flex items-center justify-center z-10 shadow-md transition-all duration-300 group-hover:scale-125 group-hover:border-[#26130D]" />

      {/* Content cards side */}
      <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? 'md:text-right md:order-1' : 'md:order-2'}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -25 : 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: index * 0.05 }}
          className="bg-white border border-[#DFAE24]/40 p-6 md:p-8 rounded-2xl shadow-premium hover:shadow-lg transition-all duration-300 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-28 h-28 bg-[#DFAE24]/15 rounded-full blur-xl pointer-events-none -mr-8 -mt-8" />
          
          <div className="relative z-10">
            <span className="inline-block text-xs font-extrabold bg-[#26130D] text-[#DFAE24] px-3.5 py-1 rounded-full mb-3 font-heading shadow-sm">
              {year}
            </span>
            <h3 className="text-lg md:text-xl font-bold font-heading text-[#26130D] mb-2.5">
              {title}
            </h3>
            <p className="text-xs md:text-sm text-[#211A17] font-medium leading-relaxed">
              {description}
            </p>
          </div>
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
      <div className="absolute left-8 md:left-1/2 top-4 bottom-4 transform -translate-x-1/2 w-0.5 bg-[#DFAE24]/40" />

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
