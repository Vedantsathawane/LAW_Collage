import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({
  title,
  subtitle,
  centered = false,
  light = false,
  className = ""
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-left'} ${className} select-none`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`inline-block text-[10px] md:text-xs font-bold uppercase tracking-widest mb-3.5 px-3.5 py-1.5 rounded-full ${
            light 
              ? 'bg-white/10 text-secondary border border-white/20' 
              : 'bg-primary/5 text-primary border border-primary/10'
          }`}
        >
          {subtitle}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading mb-4 leading-tight ${
          light ? 'text-white' : 'text-gradient'
        }`}
      >
        {title}
      </motion.h2>
      
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`h-1.5 rounded-full ${centered ? 'mx-auto' : ''} ${
          light ? 'bg-secondary' : 'bg-secondary'
        }`}
        style={{
          background: 'linear-gradient(90deg, #E6B325 0%, #1E88E5 100%)'
        }}
      />
    </div>
  );
};

export default SectionTitle;
