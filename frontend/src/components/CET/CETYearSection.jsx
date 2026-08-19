import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus, FaFolderOpen, FaCalendarAlt, FaWrench, FaInfoCircle } from 'react-icons/fa';
import CETDateCard from './CETDateCard';

const CETYearSection = ({ yearGroup, isOpen, onToggle, onViewPdf }) => {
  const { year, records = [], isUnderMaintenance, maintenanceMessage } = yearGroup;

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
        <div className="flex items-center gap-3 md:gap-4 min-w-0 flex-1">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
            isUnderMaintenance
              ? 'bg-amber-100 text-amber-800 border border-amber-300'
              : isOpen
              ? 'bg-[#26130D] text-[#DFAE24]'
              : 'bg-[#F5F0E6] text-[#B88E1C]'
          }`}>
            {isUnderMaintenance ? <FaWrench className="w-4 h-4 text-amber-700" /> : <FaFolderOpen className="w-4 h-4" />}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-xl md:text-2xl font-extrabold font-heading text-[#26130D]">
                {year}
              </h2>
              <span className="text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-[#F5F0E6] text-[#B88E1C] border border-[#DFAE24]/30">
                Academic Session
              </span>
              {isUnderMaintenance && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-900 border border-amber-300 text-[10px] font-extrabold tracking-wide uppercase">
                  <FaWrench className="w-2.5 h-2.5 text-amber-700" />
                  <span>Under Maintenance</span>
                </span>
              )}
            </div>
            <p className="text-xs text-[#756D63] font-body mt-0.5 flex items-center gap-1.5">
              <FaCalendarAlt className="w-3 h-3 text-[#B88E1C]" />
              {isUnderMaintenance ? (
                <span className="font-semibold text-amber-800">Records currently undergoing maintenance</span>
              ) : (
                <span>{records.length} Date-Wise CET Record{records.length !== 1 ? 's' : ''} Published</span>
              )}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="text-xs font-semibold text-[#756D63] hidden md:inline">
            {isOpen ? "Collapse Year" : "Expand Year"}
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
            <div className="p-4 md:p-6 bg-[#FAF8F3]/40 space-y-4">
              {isUnderMaintenance ? (
                /* Elegant Under Maintenance Banner */
                <div className="p-6 md:p-8 bg-white rounded-2xl border border-amber-300/80 shadow-xs text-center flex flex-col items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center mb-3 shadow-xs">
                    <FaWrench className="w-6 h-6 animate-pulse" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-extrabold uppercase tracking-widest mb-2">
                    Under Maintenance
                  </span>
                  <h3 className="text-base md:text-lg font-bold font-heading text-[#26130D]">
                    {year} CET Records Currently Under Maintenance
                  </h3>
                  <p className="text-xs md:text-sm text-[#756D63] font-body mt-1.5 leading-relaxed max-w-xl mx-auto">
                    {maintenanceMessage || `Official CET score and result records for the ${year} academic session are currently undergoing data verification and administrative maintenance.`}
                  </p>
                  <div className="mt-4 p-3 rounded-xl bg-[#FAF8F3] border border-[#DFAE24]/30 text-xs text-[#756D63] inline-flex items-center gap-2 font-body max-w-md">
                    <FaInfoCircle className="w-4 h-4 text-[#B88E1C] shrink-0" />
                    <span>For historical CET score inquiries, please contact the College Administrative Office.</span>
                  </div>
                </div>
              ) : (
                records.map((record) => (
                  <CETDateCard
                    key={record.id}
                    record={record}
                    onViewPdf={onViewPdf}
                  />
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CETYearSection;
