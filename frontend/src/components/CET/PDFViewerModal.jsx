import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaDownload, FaFilePdf, FaListOl, FaSearch, FaPrint } from 'react-icons/fa';
import OfficialStraightDocumentSheet from './OfficialStraightDocumentSheet';

const PDFViewerModal = ({ isOpen, onClose, record }) => {
  const [activeTab, setActiveTab] = useState('sheet'); // 'sheet' | 'candidates'
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen || !record) return null;

  const {
    title,
    displayDate,
    publicationTimeDisplay = "1:00 PM IST",
    roundName,
    course = "L.L.B. (3 Year Course)",
    fileUrl,
    candidates = [],
    publishedNote
  } = record;

  const filteredCandidates = candidates.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(c.meritSrNo).includes(searchTerm)
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-[#26130D]/80 backdrop-blur-xs overflow-y-auto print:p-0 print:bg-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="bg-white border border-[#DFAE24]/40 rounded-2xl shadow-2xl w-full max-w-5xl flex flex-col max-h-[94vh] overflow-hidden print:max-h-none print:border-0 print:shadow-none print:rounded-none"
          role="dialog"
          aria-modal="true"
          aria-labelledby="pdf-modal-title"
        >
          {/* Header Bar */}
          <div className="p-4 md:p-5 bg-[#FAF8F3] border-b border-[#DFAE24]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0 print:hidden">
            <div className="flex items-start gap-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-red-600 border border-red-200 flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                <FaFilePdf className="w-5 h-5 text-red-500" />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#26130D] text-[#DFAE24] text-[10px] font-extrabold uppercase tracking-wider">
                    {roundName}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-[#F5F0E6] text-[#B88E1C] border border-[#DFAE24]/30 text-[10px] font-bold">
                    {displayDate} • {publicationTimeDisplay}
                  </span>
                </div>
                <h3 id="pdf-modal-title" className="text-base md:text-lg font-bold font-heading text-[#26130D] truncate">
                  {title}
                </h3>
                <p className="text-xs text-[#756D63] font-body mt-0.5">
                  {course} • Dr. Milind Yerne College of Law
                </p>
              </div>
            </div>

            {/* Switch Tabs & Action Buttons */}
            <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
              <div className="flex bg-[#F5F0E6] p-1 rounded-xl border border-[#DFAE24]/30">
                <button
                  onClick={() => setActiveTab('sheet')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    activeTab === 'sheet'
                      ? 'bg-[#26130D] text-[#DFAE24] shadow-xs'
                      : 'text-[#756D63] hover:text-[#26130D]'
                  }`}
                >
                  <FaFilePdf className="w-3 h-3" />
                  <span>Straight Document Sheet</span>
                </button>
                {candidates.length > 0 && (
                  <button
                    onClick={() => setActiveTab('candidates')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeTab === 'candidates'
                        ? 'bg-[#26130D] text-[#DFAE24] shadow-xs'
                        : 'text-[#756D63] hover:text-[#26130D]'
                    }`}
                  >
                    <FaListOl className="w-3 h-3" />
                    <span className="hidden sm:inline">Search Candidates ({candidates.length})</span>
                  </button>
                )}
              </div>

              <a
                href={fileUrl}
                download
                className="inline-flex items-center gap-1.5 bg-[#DFAE24] hover:bg-[#F4C430] text-[#28150A] text-xs font-extrabold px-3 py-1.5 rounded-xl shadow-xs border border-[#B88E1C]/40 transition-all"
                title="Download original PDF"
              >
                <FaDownload className="w-3 h-3" />
                <span className="hidden md:inline">Download</span>
              </a>

              <button
                onClick={onClose}
                className="w-8 h-8 rounded-xl bg-white hover:bg-red-50 hover:text-red-600 border border-[#DFAE24]/30 flex items-center justify-center text-[#756D63] transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#FAF8F3]/50 print:bg-white print:p-0">
            {activeTab === 'sheet' ? (
              <OfficialStraightDocumentSheet record={record} />
            ) : (
              <div className="space-y-4">
                {/* Search & Header */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3.5 rounded-xl border border-[#DFAE24]/30">
                  <div className="text-xs font-bold text-[#26130D]">
                    Search Candidate Merit Records ({filteredCandidates.length} Candidates)
                  </div>
                  <div className="relative w-full sm:w-64">
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-[#756D63]" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Filter candidate name/category..."
                      className="w-full pl-8 pr-3 py-1.5 text-xs bg-[#FAF8F3] border border-[#DFAE24]/30 rounded-lg text-[#211A17] focus:outline-none focus:ring-1 focus:ring-[#DFAE24]"
                    />
                  </div>
                </div>

                {/* Candidate Table */}
                <div className="overflow-x-auto bg-white rounded-xl border border-[#DFAE24]/30 shadow-xs">
                  <table className="w-full text-left text-xs font-body">
                    <thead className="bg-[#26130D] text-[#DFAE24] font-heading uppercase tracking-wider text-[11px]">
                      <tr>
                        <th className="py-3 px-3.5 text-center w-12">Sr No</th>
                        <th className="py-3 px-4">Candidate Name</th>
                        <th className="py-3 px-3.5 text-center">Inter-SE Merit</th>
                        <th className="py-3 px-3.5 text-center">Merit List Sr. No</th>
                        <th className="py-3 px-3.5 text-center">CET Percentile</th>
                        <th className="py-3 px-4">Category</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#DFAE24]/15 text-[#211A17]">
                      {filteredCandidates.map((cand, idx) => (
                        <tr
                          key={idx}
                          className="hover:bg-[#FAF8F3] transition-colors odd:bg-white even:bg-[#FAF8F3]/30"
                        >
                          <td className="py-3 px-3.5 text-center font-bold text-[#756D63]">
                            {cand.srNo}
                          </td>
                          <td className="py-3 px-4 font-bold text-[#26130D]">
                            {cand.name}
                          </td>
                          <td className="py-3 px-3.5 text-center font-semibold">
                            {cand.interSeMerit}
                          </td>
                          <td className="py-3 px-3.5 text-center font-bold text-[#B88E1C]">
                            {cand.meritSrNo}
                          </td>
                          <td className="py-3 px-3.5 text-center font-bold text-[#26130D]">
                            <span className="inline-block px-2 py-0.5 rounded bg-amber-50 text-amber-900 border border-amber-200 font-extrabold">
                              {cand.percentile}
                            </span>
                          </td>
                          <td className="py-3 px-4 font-semibold text-[#43230F]">
                            <span className="px-2 py-0.5 rounded-md bg-[#F5F0E6] border border-[#DFAE24]/30 text-[11px]">
                              {cand.category}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-3 md:p-4 bg-[#FAF8F3] border-t border-[#DFAE24]/30 flex items-center justify-between text-xs text-[#756D63] print:hidden">
            <span>Official CET CAP Merit List Document • Dr. Milind Yerne College of Law</span>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-[#26130D] text-white hover:bg-[#3D2017] font-bold transition-all cursor-pointer"
            >
              Close Document
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PDFViewerModal;
