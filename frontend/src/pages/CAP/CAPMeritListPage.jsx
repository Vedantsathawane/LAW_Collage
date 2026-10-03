import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaSearch, FaAward, FaPrint, FaCalendarAlt, FaCheckCircle, FaBuilding } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Container from '../../components/common/Container';
import { capMeritListRoundIV } from '../../data/capData';

const CAPMeritListPage = () => {
  const [meritSearch, setMeritSearch] = useState('');
  const [selectedMeritCategory, setSelectedMeritCategory] = useState('ALL');

  const meritList = capMeritListRoundIV;

  const filteredMeritCategories = useMemo(() => {
    return meritList.categoriesData
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
  }, [meritList, selectedMeritCategory, meritSearch]);

  const totalMeritCandidates = useMemo(() => {
    return meritList.categoriesData.reduce((sum, c) => sum + c.candidates.length, 0);
  }, [meritList]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-8 pb-20 bg-[#FAF8F3] font-body min-h-[85vh]">
      <Helmet>
        <title>Institutional Round Merit List | Dr. Milind Yerne College of Law</title>
        <meta
          name="description"
          content="Official CET CAP Round-IV Institutional Round-I Merit List for LL.B. (3 Year Course) at Dr. Milind Yerne College of Law Kosra."
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
            Institutional Round Merit List
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-[#756D63] font-medium font-body leading-relaxed max-w-2xl mx-auto"
          >
            L.L.B. (3 Year Course) Round-I candidate merit records as of <strong className="text-[#26130D]">30/09/2026</strong>.
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

        {/* Controls Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded bg-[#F5F0E6] text-[#B88E1C] border border-[#DFAE24]/30 mb-1 font-heading">
              Official Verified Document
            </span>
            <h2 className="text-xl md:text-2xl font-extrabold font-heading text-[#26130D]">
              Candidate Rankings & CET Percentile Scores
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="relative min-w-[200px]">
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />
              <input
                type="text"
                placeholder="Search candidate name..."
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
              <option value="OPEN">OPEN Category</option>
              <option value="OBC">OBC Category</option>
              <option value="SC">SC Category</option>
            </select>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#DFAE24]/40 rounded-xl text-xs font-bold text-[#26130D] hover:bg-[#FAF8F3] transition-colors shadow-xs font-heading"
            >
              <FaPrint className="text-[#B88E1C]" /> Print Merit List
            </button>
          </div>
        </div>

        {/* Merit List Banner Card */}
        <div className="border border-[#DFAE24]/40 rounded-2xl bg-white shadow-xs overflow-hidden">
          <div className="bg-[#26130D] text-[#FAF8F3] p-5 border-b border-[#DFAE24]/30 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-extrabold font-heading text-[#FAF8F3]">
                {meritList.title} – {meritList.subtitle}
              </h3>
              <p className="text-xs text-[#DFAE24] font-semibold mt-1">
                {meritList.collegeName} • {meritList.roundTitle} ({meritList.displayDate})
              </p>
            </div>
            <div>
              <span className="text-xs font-bold text-[#DFAE24] bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">
                Total Candidates: {totalMeritCandidates}
              </span>
            </div>
          </div>

          <div className="p-4 md:p-6 space-y-6">
            {filteredMeritCategories.map((categoryGroup, idx) => (
              <div key={idx} className="border border-[#DFAE24]/30 rounded-xl overflow-hidden bg-white">
                <div className="bg-[#FAF8F3] px-4 py-2.5 border-b border-[#DFAE24]/30 flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#26130D] font-heading flex items-center gap-2">
                    <FaAward className="text-[#B88E1C]" /> {categoryGroup.categoryName} Category Candidates
                  </span>
                  <span className="text-[11px] font-bold text-[#756D63] bg-white px-2 py-0.5 rounded border border-[#DFAE24]/30">
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
            ))}
          </div>

          <div className="bg-[#FAF8F3] p-4 border-t border-[#DFAE24]/30 flex flex-col sm:flex-row items-center justify-between text-xs text-[#756D63] gap-2">
            <span className="font-semibold">Official Verified Copy • Dr. Milind Yerne College of Law Seal</span>
            <span className="font-extrabold text-[#26130D]">{meritList.signatory}</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CAPMeritListPage;
