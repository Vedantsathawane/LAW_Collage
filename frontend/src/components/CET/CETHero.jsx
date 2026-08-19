import React from 'react';
import { motion } from 'framer-motion';

const CETHero = () => {
  return (
    <div className="relative overflow-hidden mb-10 select-none">
      <div className="text-center max-w-3xl mx-auto">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-block text-[11px] md:text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#FAF8F3] text-[#B88E1C] border border-[#DFAE24]/40 shadow-xs mb-3 font-heading"
        >
          Official CET Portal
        </motion.span>

        {/* Main Heading H1 */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#26130D] leading-tight mb-3"
        >
          CET Results
        </motion.h1>

        {/* Subtitle required by specification */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm md:text-base text-[#756D63] font-medium font-body leading-relaxed max-w-2xl mx-auto"
        >
          View CET results and score records of our students, organized year-wise and date-wise.
        </motion.p>

        {/* Accent Divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="h-1 rounded-full mx-auto mt-5"
          style={{
            background: 'linear-gradient(90deg, #DFAE24 0%, #B88E1C 50%, #26130D 100%)'
          }}
        />
      </div>
    </div>
  );
};

export default CETHero;
