import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  FaGraduationCap, 
  FaExternalLinkAlt, 
  FaCalendarAlt, 
  FaPrint, 
  FaInfoCircle, 
  FaCheckCircle, 
  FaBuilding,
  FaPhoneAlt,
  FaSearch,
  FaFilePdf,
  FaAward,
  FaNewspaper,
  FaTable,
  FaClock,
  FaUserCheck,
  FaDownload
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import { capVacancyReport, capMeritLists, capAdvertisementNotice } from '../../data/capData';

const CAPAdmissionPage = () => {
  const [activeTab, setActiveTab] = useState('ALL'); // 'ALL' | 'VACANCY' | 'MERIT_LIST' | 'ADVERTISEMENT'
  const [selectedMeritListId, setSelectedMeritListId] = useState('3rd-merit-list');
  const [meritSearch, setMeritSearch] = useState('');
  const [selectedMeritCategory, setSelectedMeritCategory] = useState('ALL');

  const report = capVacancyReport;
  const meritList = useMemo(() => {
    return capMeritLists.find(l => l.id === selectedMeritListId) || capMeritLists[0];
  }, [selectedMeritListId]);
  const adNotice = capAdvertisementNotice;

  const availableCategories = useMemo(() => {
    return meritList.categoriesData.map(cat => cat.categoryName);
  }, [meritList]);

  // Calculate vacancy totals per category column
  const categoryTotals = useMemo(() => {
    const totals = {};
    report.categories.forEach(cat => {
      totals[cat.key] = { g: 0, f: 0, total: 0 };
    });

    report.quotaRows.forEach(row => {
      Object.keys(row.vacancies).forEach(catKey => {
        const item = row.vacancies[catKey];
        if (item) {
          totals[catKey].g += item.g;
          totals[catKey].f += item.f;
          totals[catKey].total += item.g + item.f;
        }
      });
    });
    return totals;
  }, [report]);

  // Overall vacancy sum
  const grandTotalVacancy = useMemo(() => {
    return report.quotaRows.reduce((sum, row) => sum + row.totalSeats, 0);
  }, [report]);

  // Filtered Candidates in Merit List
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
        <title>CAP Admission, Vacancy Report & Merit List 2026-27 | Dr. Milind Yerne College of Law</title>
        <meta
          name="description"
          content="Official CAP Round-IV Vacancy Report, Institutional Round Merit List, and Admission Notifications for LL.B. 3 Years & B.A. LL.B. 5 Years at Dr. Milind Yerne College of Law Kosra."
        />
        <meta
          name="keywords"
          content="CAP Admission 2026, Institutional Round Merit List, Dr Milind Yerne Law College Merit List, LL.B CET Merit List, Deshonnati Admission Notice, Law College Bhandara"
        />
        <link rel="canonical" href="https://drmycollegeoflaw.org/cap-admission" />
      </Helmet>

      <Container>
        {/* Top Hero Section */}
        <div className="relative overflow-hidden mb-8 select-none text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block text-[11px] md:text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#FAF8F3] text-[#B88E1C] border border-[#DFAE24]/40 shadow-xs mb-3 font-heading"
          >
            Centralized Admission Process (CAP) • Session 2026-27
          </motion.span>

          {/* Main Heading H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#26130D] leading-tight mb-3"
          >
            CAP Admission & Merit List
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-[#756D63] font-medium font-body leading-relaxed max-w-2xl mx-auto"
          >
            Official CAP Vacancy Matrix, CET Round-IV Institutional Merit List & Newspaper Notification as of <strong className="text-[#26130D]">30/09/2026</strong>.
          </motion.p>

          {/* Accent Divider */}
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

        {/* Quick View Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 select-none">
          <button
            onClick={() => setActiveTab('ALL')}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold font-heading transition-all cursor-pointer ${
              activeTab === 'ALL'
                ? 'bg-[#26130D] text-[#DFAE24] shadow-md border border-[#DFAE24]/30'
                : 'bg-white text-[#756D63] border border-[#DFAE24]/30 hover:bg-[#F5F0E6] hover:text-[#26130D]'
            }`}
          >
            View All Reports & Notices
          </button>

          <button
            onClick={() => setActiveTab('VACANCY')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs md:text-sm font-bold font-heading transition-all cursor-pointer ${
              activeTab === 'VACANCY'
                ? 'bg-[#26130D] text-[#DFAE24] shadow-md border border-[#DFAE24]/30'
                : 'bg-white text-[#756D63] border border-[#DFAE24]/30 hover:bg-[#F5F0E6] hover:text-[#26130D]'
            }`}
          >
            <FaTable className="text-[#B88E1C]" />
            Vacancy Matrix ({grandTotalVacancy} Seats)
          </button>

          <button
            onClick={() => setActiveTab('MERIT_LIST')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs md:text-sm font-bold font-heading transition-all cursor-pointer ${
              activeTab === 'MERIT_LIST'
                ? 'bg-[#26130D] text-[#DFAE24] shadow-md border border-[#DFAE24]/30'
                : 'bg-white text-[#756D63] border border-[#DFAE24]/30 hover:bg-[#F5F0E6] hover:text-[#26130D]'
            }`}
          >
            <FaAward className="text-[#B88E1C]" />
            Institutional Merit List ({totalMeritCandidates})
          </button>

          <button
            onClick={() => setActiveTab('ADVERTISEMENT')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs md:text-sm font-bold font-heading transition-all cursor-pointer ${
              activeTab === 'ADVERTISEMENT'
                ? 'bg-[#26130D] text-[#DFAE24] shadow-md border border-[#DFAE24]/30'
                : 'bg-white text-[#756D63] border border-[#DFAE24]/30 hover:bg-[#F5F0E6] hover:text-[#26130D]'
            }`}
          >
            <FaNewspaper className="text-[#B88E1C]" />
            Official Deshonnati Advertisement
          </button>
        </div>

        {/* 1. ADVERTISEMENT NOTICE SECTION */}
        {(activeTab === 'ALL' || activeTab === 'ADVERTISEMENT') && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded bg-[#F5F0E6] text-[#B88E1C] border border-[#DFAE24]/30 mb-1 font-heading">
                  News Notice Release • देशोन्नती
                </span>
                <h2 className="text-xl md:text-2xl font-extrabold font-heading text-[#26130D]">
                  Official Admission Notice – IVth Institutional Round
                </h2>
              </div>
              <button
                onClick={handlePrint}
                className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#DFAE24]/40 rounded-xl text-xs font-bold text-[#26130D] hover:bg-[#FAF8F3] transition-colors shadow-xs font-heading"
              >
                <FaPrint className="text-[#B88E1C]" /> Print Advertisement
              </button>
            </div>

            {/* Newspaper Styled Card */}
            <div className="border-2 border-[#DFAE24]/50 rounded-2xl bg-white shadow-sm overflow-hidden">
              {/* Top Paper Header */}
              <div className="bg-[#26130D] text-[#FAF8F3] p-5 text-center border-b-2 border-[#DFAE24]/40">
                <div className="inline-block bg-[#DFAE24] text-[#26130D] font-black text-2xl md:text-3xl px-6 py-1 rounded-md mb-2 font-heading tracking-wider">
                  देशोन्नती
                </div>
                <p className="text-xs md:text-sm font-extrabold tracking-wider text-[#DFAE24] uppercase font-heading">
                  {adNotice.heading}
                </p>
                <p className="text-[11px] text-[#FAF8F3]/90 mt-1 font-medium">
                  {adNotice.sansthaName}
                </p>
                <h3 className="text-base md:text-lg font-bold font-heading text-[#FAF8F3] mt-0.5">
                  {adNotice.collegeName}
                </h3>
                <p className="text-[10px] md:text-xs text-amber-200 mt-1 font-semibold">
                  {adNotice.approvals}
                </p>
              </div>

              {/* Course & Vacancies Grid */}
              <div className="p-6 bg-[#FAF8F3]/60">
                <div className="text-center mb-6">
                  <span className="inline-block bg-[#F5F0E6] text-[#26130D] font-extrabold text-xs px-4 py-1 rounded-full border border-[#DFAE24]/40 font-heading">
                    {adNotice.academicYear} • {adNotice.subTitle}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-6">
                  {adNotice.courses.map((c, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-xl border border-[#DFAE24]/40 shadow-xs flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-extrabold font-heading text-[#26130D]">{c.courseName}</h4>
                        <p className="text-xs text-[#756D63] mt-1 flex items-center gap-1.5">
                          <FaCalendarAlt className="text-[#B88E1C]" />
                          Dates: <strong className="text-[#26130D]">{c.admissionDates}</strong>
                        </p>
                      </div>
                      <div className="text-right bg-[#F5F0E6] px-3.5 py-2 rounded-lg border border-[#DFAE24]/30">
                        <span className="text-[10px] font-extrabold text-[#756D63] uppercase block">Vacant Seats</span>
                        <span className="text-xl font-black text-[#26130D] font-heading">{c.vacantSeats}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-center text-xs font-semibold text-[#756D63] italic mb-6">
                  * {adNotice.note}
                </p>

                {/* Rules & Timings Box */}
                <div className="bg-white p-5 rounded-xl border border-[#DFAE24]/30 shadow-xs max-w-3xl mx-auto mb-6">
                  <h4 className="text-xs font-extrabold text-[#26130D] font-heading uppercase tracking-wider mb-3 flex items-center gap-2">
                    <FaInfoCircle className="text-[#B88E1C]" /> Important Admission Instructions
                  </h4>
                  <ul className="space-y-2 text-xs text-[#756D63]">
                    {adNotice.importantNotice.map((note, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <FaCheckCircle className="text-[#B88E1C] shrink-0 mt-0.5" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Strip */}
                <div className="bg-[#26130D] text-[#FAF8F3] p-4 rounded-xl border border-[#DFAE24]/30 text-center max-w-3xl mx-auto">
                  <p className="text-xs font-extrabold text-[#DFAE24] uppercase tracking-wider font-heading mb-2">
                    Contact For Admission & Verification
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm font-bold text-white">
                    {adNotice.contactNumbers.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:${phone}`}
                        className="flex items-center gap-1.5 bg-white/10 hover:bg-[#DFAE24] hover:text-[#26130D] px-3 py-1 rounded-lg border border-white/20 transition-colors"
                      >
                        <FaPhoneAlt className="text-[10px]" /> {phone}
                      </a>
                    ))}
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/10 text-[11px] text-gray-300 flex justify-between items-center px-2">
                    <span>{adNotice.signatory}</span>
                    <span>Website: {adNotice.websiteUrl}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 2. INSTITUTIONAL MERIT LIST SECTION */}
        {(activeTab === 'ALL' || activeTab === 'MERIT_LIST') && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            {/* Merit List Selectors (1st vs 2nd) */}
            <div className="flex flex-wrap items-center justify-start gap-3 mb-6 select-none">
              {capMeritLists.map((list) => {
                const isSelected = selectedMeritListId === list.id;
                return (
                  <button
                    key={list.id}
                    onClick={() => {
                      setSelectedMeritListId(list.id);
                      setSelectedMeritCategory('ALL');
                    }}
                    className={`px-4 py-2.5 rounded-xl text-xs font-bold font-heading transition-all duration-200 cursor-pointer flex items-center gap-2 border shadow-xs ${
                      isSelected
                        ? 'bg-[#26130D] text-[#DFAE24] border-[#DFAE24]/50 shadow-sm'
                        : 'bg-white text-[#756D63] border-[#DFAE24]/30 hover:bg-[#F5F0E6] hover:text-[#26130D]'
                    }`}
                  >
                    <FaAward className={isSelected ? 'text-[#DFAE24]' : 'text-[#B88E1C]'} />
                    <span>{list.title}</span>
                    <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${
                      isSelected 
                        ? 'bg-[#DFAE24] text-[#26130D] border-transparent' 
                        : 'bg-[#F5F0E6] text-[#756D63] border-[#DFAE24]/30'
                    }`}>
                      {list.publishedDate} (1:00 PM)
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded bg-[#F5F0E6] text-[#B88E1C] border border-[#DFAE24]/30 mb-1 font-heading">
                  Official Verified Copy &bull; Published {meritList.displayDate}
                </span>
                <h2 className="text-xl md:text-2xl font-extrabold font-heading text-[#26130D]">
                  {meritList.title} – CET CAP Round-IV Institutional Merit List
                </h2>
                <p className="text-xs text-[#756D63] mt-0.5">
                  L.L.B. (3 Year Course) Candidate Records (Published: {meritList.publishedDate} at 1:00 PM)
                </p>
              </div>

              {/* Search & Filter Controls */}
              <div className="flex flex-wrap items-center gap-2">
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
                  {availableCategories.map((catName) => (
                    <option key={catName} value={catName}>
                      {catName} Category
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Merit List Banner Card */}
            <div className="border border-[#DFAE24]/40 rounded-2xl bg-white shadow-xs overflow-hidden">
              <div className="bg-[#26130D] text-[#FAF8F3] p-5 border-b border-[#DFAE24]/30 flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="bg-[#DFAE24] text-[#26130D] font-black text-[10px] uppercase px-2 py-0.5 rounded font-heading">
                      {meritList.publishedDate === '04/10/2026' ? '2nd List' : '1st List'}
                    </span>
                    <span className="text-xs text-[#DFAE24] font-bold flex items-center gap-1">
                      <FaClock className="text-[11px]" /> Published at 1:00 PM IST
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold font-heading text-[#FAF8F3]">
                    {meritList.title} – {meritList.subtitle}
                  </h3>
                  <p className="text-xs text-[#DFAE24] font-semibold mt-1">
                    {meritList.collegeName} &bull; {meritList.roundTitle} ({meritList.displayDate})
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#DFAE24] bg-white/10 px-3 py-1.5 rounded-lg border border-white/20">
                    Total Candidates: {totalMeritCandidates}
                  </span>
                </div>
              </div>

              {/* Render Merit Category Tables */}
              <div className="p-4 md:p-6 space-y-6">
                {filteredMeritCategories.map((categoryGroup, idx) => (
                  <div key={idx} className="border border-[#DFAE24]/30 rounded-xl overflow-hidden bg-white">
                    {/* Category Subheader */}
                    <div className="bg-[#FAF8F3] px-4 py-2.5 border-b border-[#DFAE24]/30 flex items-center justify-between">
                      <span className="text-xs font-extrabold uppercase tracking-widest text-[#26130D] font-heading flex items-center gap-2">
                        <FaAward className="text-[#B88E1C]" /> {categoryGroup.categoryName} Category Candidates
                      </span>
                      <span className="text-[11px] font-bold text-[#756D63] bg-white px-2 py-0.5 rounded border border-[#DFAE24]/30">
                        {categoryGroup.candidates.length} Candidate{categoryGroup.candidates.length !== 1 ? 's' : ''}
                      </span>
                    </div>

                    {/* Candidate Table */}
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

              {/* Signatory Footer */}
              <div className="bg-[#FAF8F3] p-4 border-t border-[#DFAE24]/30 flex flex-col sm:flex-row items-center justify-between text-xs text-[#756D63] gap-2">
                <div className="flex items-center gap-2 font-semibold">
                  <FaCheckCircle className="text-[#B88E1C]" />
                  <span>Official Verified Copy &bull; Dr. Milind Yerne College of Law Seal</span>
                  <span className="text-[10px] font-mono bg-[#F5F0E6] px-2 py-0.5 rounded border border-[#DFAE24]/30 text-[#26130D]">
                    {meritList.publishedNote}
                  </span>
                </div>
                <span className="font-extrabold text-[#26130D]">{meritList.signatory}</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* 3. CAP VACANCY MATRIX SECTION */}
        {(activeTab === 'ALL' || activeTab === 'VACANCY') && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            {/* Main Official Banner Card */}
            <div className="border border-[#DFAE24]/40 rounded-2xl bg-white shadow-xs overflow-hidden">
              {/* Header Bar */}
              <div className="bg-[#26130D] text-white p-5 md:p-6 border-b border-[#DFAE24]/30">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded bg-[#FAF8F3]/10 text-[#DFAE24] border border-[#DFAE24]/30 mb-1.5">
                      Choice Code: 1400410812
                    </span>
                    <h3 className="text-lg md:text-xl font-extrabold font-heading text-[#FAF8F3]">
                      Vacancy Report of 14004 - Dr Milind Yerne College Of Law
                    </h3>
                    <p className="text-xs text-[#DFAE24] font-semibold mt-1">
                      1400410812-LL.B. (3 Yrs.), Un-Aided, English, Co-Education
                    </p>
                  </div>

                  <div className="bg-[#43230F] p-3 rounded-xl border border-[#DFAE24]/20 text-xs text-[#FAF8F3] font-medium">
                    <div className="flex flex-wrap items-center gap-1.5 leading-relaxed">
                      <span className="font-bold text-[#FAF8F3]">Parallel Vacancy:</span>
                      <span className="text-[#DFAE24] font-extrabold bg-white/10 px-2 py-0.5 rounded border border-[#DFAE24]/30 text-[11px]">PH - 0</span>
                      <span className="text-[#DFAE24] font-extrabold bg-white/10 px-2 py-0.5 rounded border border-[#DFAE24]/30 text-[11px]">Defence - 2</span>
                      <span className="text-[#DFAE24] font-extrabold bg-white/10 px-2 py-0.5 rounded border border-[#DFAE24]/30 text-[11px]">Orphan - 0</span>
                    </div>
                    <p className="text-[11px] text-gray-300 mt-1">As of Date : <strong>30/09/2026</strong></p>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse min-w-[950px]">
                  <thead>
                    {/* Header Level 1 */}
                    <tr className="bg-[#43230F] text-[#FAF8F3] font-bold text-center border-b border-[#DFAE24]/30">
                      <th rowSpan={2} className="py-3 px-4 text-left border-r border-[#DFAE24]/20 w-48 text-xs md:text-sm font-heading">
                        Quota
                      </th>
                      {report.categories.map((cat) => (
                        <th key={cat.key} colSpan={2} className="py-2.5 px-2 border-r border-[#DFAE24]/20 font-bold tracking-wider font-heading">
                          {cat.label}
                        </th>
                      ))}
                      <th rowSpan={2} className="py-3 px-3 text-center w-20 text-xs md:text-sm bg-[#26130D] text-[#DFAE24] font-heading font-extrabold">
                        Total
                      </th>
                    </tr>

                    {/* Header Level 2 (G / F) */}
                    <tr className="bg-[#26130D] text-[#DFAE24] text-center font-bold border-b border-[#DFAE24]/30">
                      {report.categories.map((cat) => (
                        <React.Fragment key={`${cat.key}-sub`}>
                          <th className="py-1.5 px-2 border-r border-[#DFAE24]/20 w-9 bg-[#26130D]">G</th>
                          <th className="py-1.5 px-2 border-r border-[#DFAE24]/20 w-9 bg-[#351C13]">F</th>
                        </React.Fragment>
                      ))}
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-[#DFAE24]/15 font-medium text-[#26130D]">
                    {report.quotaRows.map((row, idx) => (
                      <tr
                        key={idx}
                        className={`hover:bg-[#FAF8F3] transition-colors ${
                          idx % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F3]/50'
                        }`}
                      >
                        {/* Quota Name */}
                        <td className="py-3 px-4 font-extrabold font-heading text-[#26130D] border-r border-[#DFAE24]/20">
                          {row.quotaName}
                        </td>

                        {/* Category Cells */}
                        {report.categories.map((cat) => {
                          const item = row.vacancies[cat.key];
                          if (!item) {
                            return (
                              <React.Fragment key={cat.key}>
                                <td className="py-3 px-2 text-center text-gray-400 border-r border-[#DFAE24]/20">-</td>
                                <td className="py-3 px-2 text-center text-gray-400 border-r border-[#DFAE24]/20">-</td>
                              </React.Fragment>
                            );
                          }
                          return (
                            <React.Fragment key={cat.key}>
                              <td className={`py-3 px-2 text-center border-r border-[#DFAE24]/20 ${item.g > 0 ? 'font-extrabold text-[#26130D] bg-[#F5F0E6]' : 'text-gray-400'}`}>
                                {item.g}
                              </td>
                              <td className={`py-3 px-2 text-center border-r border-[#DFAE24]/20 ${item.f > 0 ? 'font-extrabold text-[#B88E1C] bg-[#FAF8F3]' : 'text-gray-400'}`}>
                                {item.f}
                              </td>
                            </React.Fragment>
                          );
                        })}

                        {/* Row Total */}
                        <td className="py-3 px-3 text-center font-extrabold font-heading text-[#26130D] bg-[#F5F0E6] text-sm">
                          {row.totalSeats}
                        </td>
                      </tr>
                    ))}
                  </tbody>

                  {/* Footer Row */}
                  <tfoot>
                    <tr className="bg-[#26130D] text-[#FAF8F3] font-bold text-center text-xs">
                      <td className="py-3.5 px-4 text-left font-extrabold font-heading text-sm border-r border-[#DFAE24]/30 text-[#DFAE24]">
                        Total Vacancy
                      </td>
                      {report.categories.map((cat) => {
                        const catTot = categoryTotals[cat.key];
                        return (
                          <React.Fragment key={`${cat.key}-total`}>
                            <td className="py-2.5 px-2 border-r border-[#DFAE24]/20 bg-[#26130D] text-white">
                              {catTot.g}
                            </td>
                            <td className="py-2.5 px-2 border-r border-[#DFAE24]/20 bg-[#351C13] text-[#DFAE24]">
                              {catTot.f}
                            </td>
                          </React.Fragment>
                        );
                      })}
                      <td className="py-3.5 px-3 text-center font-extrabold font-heading text-base bg-[#43230F] text-[#DFAE24]">
                        {grandTotalVacancy}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </motion.div>
        )}

        {/* Informational Guidance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-[#DFAE24]/40 rounded-2xl bg-white p-6 shadow-xs">
            <h3 className="text-base md:text-lg font-extrabold text-[#26130D] font-heading mb-3 flex items-center gap-2">
              <FaInfoCircle className="text-[#B88E1C]" /> Admission Guidelines & Regulations
            </h3>
            <ul className="space-y-3 text-xs text-[#756D63] font-body">
              <li className="flex items-start gap-2.5">
                <FaCheckCircle className="text-[#B88E1C] shrink-0 mt-0.5" />
                <span>Admissions are strictly governed under the regulations of State Common Entrance Test Cell, Maharashtra State.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FaCheckCircle className="text-[#B88E1C] shrink-0 mt-0.5" />
                <span>Reserved category candidates (SC, ST, VJ/DT, NT, OBC, SEBC, EWS) must submit valid Caste & Validity Certificate during admission reporting.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FaCheckCircle className="text-[#B88E1C] shrink-0 mt-0.5" />
                <span>Institutional & Management quota seats are filled as per merit and CET Cell guidelines.</span>
              </li>
            </ul>
          </div>

          <div className="border border-[#DFAE24]/40 rounded-2xl bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-base md:text-lg font-extrabold text-[#26130D] font-heading mb-3 flex items-center gap-2">
                <FaPhoneAlt className="text-[#B88E1C]" /> CAP Admission Helpline & Assistance
              </h3>
              <p className="text-xs text-[#756D63] font-body mb-4">
                For queries regarding CAP allotment, document verification, or institutional round application, contact our admission desk:
              </p>
              <div className="space-y-2 text-xs font-semibold text-[#26130D]">
                <p className="flex items-center gap-2">
                  <FaBuilding className="text-[#B88E1C]" /> Dr. Milind Yerne College of Law, Kosra (Pauni, Bhandara)
                </p>
                <p className="flex items-center gap-2">
                  <FaExternalLinkAlt className="text-[#B88E1C]" /> Portal: <a href="https://llb3cap26.mahacet.org" target="_blank" rel="noopener noreferrer" className="text-[#B88E1C] underline font-bold">llb3cap26.mahacet.org</a>
                </p>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[#DFAE24]/20 flex items-center justify-between text-[11px] text-[#756D63]">
              <span>Document Code: 1400410812-LL.B.</span>
              <span>Report Date: 30/09/2026</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CAPAdmissionPage;
