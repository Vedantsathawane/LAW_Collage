import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';
import CETDocumentCard from './CETDocumentCard';

const CETYearSection = ({ item, isOpen, onToggle }) => {
  return (
    <div className="border border-[#DFAE24]/40 rounded-2xl bg-white shadow-xs overflow-hidden transition-all duration-300">
      {/* Accordion Header Bar */}
      <button
        onClick={onToggle}
        className={`w-full p-5 md:p-6 flex items-center justify-between gap-4 text-left transition-colors cursor-pointer select-none ${
          isOpen ? 'bg-[#FAF8F3] border-b border-[#DFAE24]/30' : 'hover:bg-[#FAF8F3]/60'
        }`}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3 md:gap-4">
          <span className="w-2.5 h-2.5 rounded-full bg-[#DFAE24] shrink-0" />
          <h3 className="text-lg md:text-xl font-bold font-heading text-[#26130D]">
            {item.year}
          </h3>
          <span className="hidden sm:inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#F5F0E6] text-[#B88E1C] border border-[#DFAE24]/30">
            Academic Session
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs font-semibold text-[#756D63] hidden md:inline">
            {isOpen ? "Hide Details" : "View Score Document"}
          </span>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            isOpen ? 'bg-[#26130D] text-[#DFAE24]' : 'bg-[#F5F0E6] text-[#26130D]'
          }`}>
            {isOpen ? <FaMinus className="w-3 h-3" /> : <FaPlus className="w-3 h-3" />}
          </div>
        </div>
      </button>

      {/* Accordion Body Panel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="p-4 md:p-6 bg-[#FAF8F3]/40">
              <CETDocumentCard doc={item} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CETYearSection;
