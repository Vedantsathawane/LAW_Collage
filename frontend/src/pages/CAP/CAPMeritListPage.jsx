import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaSearch, FaAward, FaPrint, FaCalendarAlt, FaClock, FaCheckCircle, FaBuilding, FaListOl, FaFolderOpen, FaPlus, FaMinus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../../components/common/Container';
import { capMeritLists } from '../../data/capData';

const CAPMeritListPage = () => {
  // Expanded Date Card state (Default expand the 3rd merit list)
  const [openCardId, setOpenCardId] = useState('3rd-merit-list');
  const [meritSearch, setMeritSearch] = useState('');
  const [selectedMeritCategory, setSelectedMeritCategory] = useState('ALL');

  const handleToggleCard = (listId) => {
    setOpenCardId((prev) => (prev === listId ? null : listId));
    setMeritSearch('');
    setSelectedMeritCategory('ALL');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-8 pb-20 bg-[#FAF8F3] font-body min-h-[85vh]">
      <Helmet>
        <title>Institutional Round Merit List 2026-27 | Dr. Milind Yerne College of Law</title>
        <meta
          name="description"
          content="Official CET CAP Round-IV Institutional Merit Lists for LL.B. (3 Year Course) at Dr. Milind Yerne College of Law Kosra. 1st List (03/10/2026), 2nd List (04/10/2026) & 3rd List (05/10/2026)."
        />
        <link rel="canonical" href="https://drmycollegeoflaw.org/cap-admission/merit-list" />
      </Helmet>

      <Container>
        {/* Top Hero Banner */}
        <div className="relative overflow-hidden mb-8 select-none text-center max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block text-[11px] md:text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#FAF8F3] text-[#B88E1C] border border-[#DFAE24]/40 shadow-xs mb-3 font-heading"
          >
            CET CAP Round-IV (Institutional Round) 2026-27
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#26130D] leading-tight mb-3"
          >
            Official Institutional Round Merit Lists
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-[#756D63] font-medium font-body leading-relaxed max-w-2xl mx-auto"
          >
            L.L.B. (3 Year Course) official date-wise candidate ranking records. <br className="hidden sm:block" />
            <strong className="text-[#26130D]">1st List:</strong> 03/10/2026 &bull; <strong className="text-[#26130D]">2nd List:</strong> 04/10/2026 &bull; <strong className="text-[#26130D]">3rd List:</strong> 05/10/2026 at 1:00 PM IST
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 rounded-full mx-auto mt-4"
            style={{
              background: 'linear-gradient(90deg, #DFAE24 0%, #B88E1C 50%, #26130D 100%)'
            }}
          />
        </div>

        {/* Academic Session Card Header */}
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="p-5 md:p-6 bg-[#26130D] text-[#FAF8F3] rounded-2xl border border-[#DFAE24]/40 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#DFAE24] text-[#26130D] flex items-center justify-center shrink-0 font-bold">
                <FaFolderOpen className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl md:text-2xl font-extrabold font-heading text-[#FAF8F3]">
                    2026–27 Academic Session
                  </h2>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-[#DFAE24] text-[#26130D]">
                    Active
                  </span>
                </div>
                <p className="text-xs text-[#DFAE24] font-medium mt-0.5">
                  Dr. Milind Yerne College of Law &bull; CET CAP Round-IV (Institutional Round)
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 text-xs text-[#DFAE24] bg-white/10 px-3.5 py-2 rounded-xl border border-white/20 font-bold self-start sm:self-auto">
              <FaClock className="w-3.5 h-3.5" />
              <span>Publication Schedule: 1:00 PM IST</span>
            </div>
          </div>

          {/* Date-Wise Expandable Cards List */}
          <div className="space-y-4">
            {capMeritLists.map((list) => {
              const isOpen = openCardId === list.id;
              const totalCandidates = list.categoriesData.reduce((sum, c) => sum + c.candidates.length, 0);
              const availableCategories = list.categoriesData.map(c => c.categoryName);

              // Filter candidates for this list if open
              const filteredCategories = list.categoriesData
                .map(cat => {
                  if (selectedMeritCategory !== 'ALL' && cat.categoryName !== selectedMeritCategory) {
                    return null;
                  }

                  const filteredCandidates = cat.candidates.filter(cand => {
                    if (!meritSearch.trim()) return true;
                    const q = meritSearch.toLowerCase().trim();
                    return (
                      cand.name.toLowerCase().includes(q) ||
                      cand.category.toLowerCase().includes(q) ||
                      String(cand.meritListNo).includes(q) ||
                      String(cand.cetPercentile).includes(q) ||
                      String(cand.interSeMerit).includes(q)
                    );
                  });

                  if (filteredCandidates.length === 0) return null;
                  return {
                    ...cat,
                    candidates: filteredCandidates
                  };
                })
                .filter(Boolean);

              return (
                <div
                  key={list.id}
                  className="border border-[#DFAE24]/40 rounded-2xl bg-white shadow-xs overflow-hidden transition-all duration-300"
                >
                  {/* Card Expand Header Bar */}
                  <button
                    onClick={() => handleToggleCard(list.id)}
                    className={`w-full p-5 md:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left transition-colors cursor-pointer select-none ${
                      isOpen ? 'bg-[#FAF8F3] border-b border-[#DFAE24]/30' : 'hover:bg-[#FAF8F3]/60'
                    }`}
                  >
                    <div className="flex items-start gap-4 min-w-0 flex-1">
                      <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 shadow-xs transition-colors ${
                        isOpen ? 'bg-[#26130D] text-[#DFAE24]' : 'bg-[#F5F0E6] text-[#B88E1C]'
                      }`}>
                        <FaAward className="w-5 h-5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className="text-xs font-extrabold font-heading text-[#26130D] bg-[#F5F0E6] px-2.5 py-0.5 rounded-md border border-[#DFAE24]/30">
                            {list.publishedDate}
                          </span>

                          <span className="text-[11px] font-bold text-[#B88E1C] flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#FAF8F3] border border-[#DFAE24]/20">
                            <FaClock className="w-3 h-3 text-[#B88E1C]" />
                            <span>Published at {list.publicationTime} IST</span>
                          </span>

                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[10px] font-extrabold border border-emerald-200">
                            <FaCheckCircle className="w-2.5 h-2.5 text-emerald-600" />
                            <span>VERIFIED PUBLISHED</span>
                          </span>
                        </div>

                        <h3 className="text-lg md:text-xl font-extrabold font-heading text-[#26130D]">
                          {list.title} &bull; {list.subtitle}
                        </h3>

                        <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-[#756D63]">
                          <span className="font-semibold text-[#B88E1C] bg-[#F5F0E6] px-2 py-0.5 rounded border border-[#DFAE24]/30">
                            <FaListOl className="inline mr-1" /> {totalCandidates} Candidates Listed
                          </span>
                          <span>
                            Categories: <strong className="text-[#26130D]">{availableCategories.join(', ')}</strong>
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                      <span className="text-xs font-extrabold text-[#26130D] font-heading">
                        {isOpen ? "Collapse Records" : "Expand Merit List"}
                      </span>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        isOpen ? 'bg-[#26130D] text-[#DFAE24]' : 'bg-[#F5F0E6] text-[#26130D]'
                      }`}>
                        {isOpen ? <FaMinus className="w-3 h-3" /> : <FaPlus className="w-3 h-3" />}
                      </div>
                    </div>
                  </button>

                  {/* Expanded Body Panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 md:p-6 bg-white space-y-5">
                          {/* Search & Category Controls Bar */}
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-[#FAF8F3] rounded-xl border border-[#DFAE24]/30">
                            <div className="flex flex-wrap items-center gap-2 flex-1">
                              <div className="relative flex-1 min-w-[200px]">
                                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />
                                <input
                                  type="text"
                                  placeholder="Search candidate name, rank or CET score..."
                                  value={meritSearch}
                                  onChange={(e) => setMeritSearch(e.target.value)}
                                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-[#DFAE24]/40 rounded-xl focus:outline-none focus:border-[#B88E1C] text-[#26130D]"
                                />
                              </div>

                              <select
                                value={selectedMeritCategory}
                                onChange={(e) => setSelectedMeritCategory(e.target.value)}
                                className="py-1.5 px-3 text-xs bg-white border border-[#DFAE24]/40 rounded-xl text-[#26130D] font-bold focus:outline-none"
                              >
                                <option value="ALL">All Categories</option>
                                {availableCategories.map((catName) => (
                                  <option key={catName} value={catName}>
                                    {catName} Category
                                  </option>
                                ))}
                              </select>
                            </div>

                            <button
                              onClick={handlePrint}
                              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#DFAE24]/40 rounded-xl text-xs font-bold text-[#26130D] hover:bg-[#FAF8F3] transition-colors shadow-xs font-heading cursor-pointer shrink-0"
                            >
                              <FaPrint className="text-[#B88E1C]" /> Print Official List
                            </button>
                          </div>

                          {/* Candidate Tables Group */}
                          <div className="space-y-6">
                            {filteredCategories.length > 0 ? (
                              filteredCategories.map((categoryGroup, idx) => (
                                <div key={idx} className="border border-[#DFAE24]/30 rounded-xl overflow-hidden bg-white shadow-2xs">
                                  <div className="bg-[#FAF8F3] px-4 py-2.5 border-b border-[#DFAE24]/30 flex items-center justify-between">
                                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#26130D] font-heading flex items-center gap-2">
                                      <FaAward className="text-[#B88E1C]" /> {categoryGroup.categoryName} Category Candidates
                                    </span>
                                    <span className="text-[11px] font-bold text-[#756D63] bg-white px-2.5 py-0.5 rounded border border-[#DFAE24]/30">
                                      {categoryGroup.candidates.length} Candidate{categoryGroup.candidates.length !== 1 ? 's' : ''}
                                    </span>
                                  </div>

                                  <div className="overflow-x-auto">
                                    <table className="w-full text-left text-xs border-collapse">
                                      <thead>
                                        <tr className="bg-[#43230F] text-[#FAF8F3] font-bold text-center">
                                          <th className="py-2.5 px-3 border-r border-[#DFAE24]/20 w-16">Sr. No.</th>
                                          <th className="py-2.5 px-4 text-left border-r border-[#DFAE24]/20">Name of Candidate</th>
                                          <th className="py-2.5 px-3 border-r border-[#DFAE24]/20 w-32">Inter-SE-Merit</th>
                                          <th className="py-2.5 px-3 border-r border-[#DFAE24]/20 w-32">Merit List No.</th>
                                          <th className="py-2.5 px-3 border-r border-[#DFAE24]/20 w-32">CET Percentile</th>
                                          <th className="py-2.5 px-3 w-28">Category</th>
                                        </tr>
                                      </thead>
                                      <tbody className="divide-y divide-[#DFAE24]/15 font-medium text-[#26130D]">
                                        {categoryGroup.candidates.map((cand, cIdx) => (
                                          <tr
                                            key={cIdx}
                                            className={`hover:bg-[#FAF8F3] transition-colors ${
                                              cIdx % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F3]/40'
                                            }`}
                                          >
                                            <td className="py-2.5 px-3 text-center font-bold text-[#756D63] border-r border-[#DFAE24]/15">
                                              {cand.srNo}
                                            </td>
                                            <td className="py-2.5 px-4 font-extrabold font-heading text-[#26130D] border-r border-[#DFAE24]/15">
                                              {cand.name}
                                            </td>
                                            <td className="py-2.5 px-3 text-center font-bold text-[#26130D] border-r border-[#DFAE24]/15 bg-[#F5F0E6]/50">
                                              #{cand.interSeMerit}
                                            </td>
                                            <td className="py-2.5 px-3 text-center font-bold text-[#26130D] border-r border-[#DFAE24]/15">
                                              {cand.meritListNo}
                                            </td>
                                            <td className="py-2.5 px-3 text-center font-extrabold text-[#B88E1C] border-r border-[#DFAE24]/15">
                                              {cand.cetPercentile}
                                            </td>
                                            <td className="py-2.5 px-3 text-center font-bold">
                                              <span className="inline-block px-2 py-0.5 rounded bg-[#F5F0E6] text-[#26130D] border border-[#DFAE24]/30 text-[10px]">
                                                {cand.category}
                                              </span>
                                            </td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <div className="text-center py-8 text-xs text-[#756D63] font-medium">
                                No candidate matches search query "{meritSearch}".
                              </div>
                            )}
                          </div>

                          {/* Footer Signatory Bar */}
                          <div className="bg-[#FAF8F3] p-4 rounded-xl border border-[#DFAE24]/30 flex flex-col sm:flex-row items-center justify-between text-xs text-[#756D63] gap-2">
                            <div className="flex items-center gap-2 font-semibold">
                              <FaCheckCircle className="text-[#B88E1C]" />
                              <span>Official Verified Copy &bull; Dr. Milind Yerne College of Law Seal</span>
                              <span className="text-[10px] font-mono bg-[#F5F0E6] px-2 py-0.5 rounded border border-[#DFAE24]/30 text-[#26130D]">
                                {list.publishedNote}
                              </span>
                            </div>
                            <span className="font-extrabold text-[#26130D]">{list.signatory}</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CAPMeritListPage;
