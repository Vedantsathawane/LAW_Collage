import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaSearch, FaTimes, FaGraduationCap, FaFilePdf, FaFilter, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import CETHero from '../../components/CET/CETHero';
import CETYearSection from '../../components/CET/CETYearSection';
import PDFViewerModal from '../../components/CET/PDFViewerModal';
import { getSortedCETResults } from '../../data/cetData';

const CETPage = () => {
  const sortedYearData = useMemo(() => getSortedCETResults(), []);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYearFilter, setSelectedYearFilter] = useState('ALL'); // 'ALL' | year string e.g. '2025–26'
  const [activeModalRecord, setActiveModalRecord] = useState(null);

  // Expanded year accordion state (Default expand the first/newest year)
  const [openYearId, setOpenYearId] = useState(() => {
    return sortedYearData.length > 0 ? sortedYearData[0].year : null;
  });

  // Unique list of available years for filter pills
  const availableYears = useMemo(() => {
    return sortedYearData.map(y => y.year);
  }, [sortedYearData]);

  // Filter logic: Year filter + search query (searches year, title, displayDate, candidates, category)
  const filteredYearData = useMemo(() => {
    let dataset = sortedYearData;

    // 1. Year Filter
    if (selectedYearFilter !== 'ALL') {
      dataset = dataset.filter(y => y.year === selectedYearFilter);
    }

    // 2. Search Query Filter
    if (!searchQuery.trim()) return dataset;
    const query = searchQuery.toLowerCase().trim();

    return dataset
      .map((yearGroup) => {
        const matchesYear = yearGroup.year.toLowerCase().includes(query);
        const matchingRecords = yearGroup.records.filter((rec) => {
          if (matchesYear) return true;
          if (rec.title && rec.title.toLowerCase().includes(query)) return true;
          if (rec.displayDate && rec.displayDate.toLowerCase().includes(query)) return true;
          if (rec.date && rec.date.includes(query)) return true;
          if (rec.roundName && rec.roundName.toLowerCase().includes(query)) return true;
          if (rec.categorySummary && rec.categorySummary.toLowerCase().includes(query)) return true;
          
          // Check if any candidate inside this record matches search term
          if (rec.candidates && rec.candidates.length > 0) {
            return rec.candidates.some(
              (c) =>
                c.name.toLowerCase().includes(query) ||
                c.category.toLowerCase().includes(query) ||
                String(c.meritSrNo).includes(query)
            );
          }
          return false;
        });

        if (matchingRecords.length > 0) {
          return {
            ...yearGroup,
            records: matchingRecords
          };
        }
        return null;
      })
      .filter(Boolean);
  }, [sortedYearData, selectedYearFilter, searchQuery]);

  const handleToggleYear = (year) => {
    setOpenYearId((prev) => (prev === year ? null : year));
  };

  const handleOpenPdfModal = (record) => {
    setActiveModalRecord(record);
  };

  const handleClosePdfModal = () => {
    setActiveModalRecord(null);
  };

  return (
    <div className="pt-10 pb-20 bg-[#FAF8F3] font-body min-h-[80vh]">
      <Helmet>
        <title>CET Results | Dr. Milind Yerne College of Law</title>
        <meta
          name="description"
          content="View CET results and score records of our students, organized year-wise and date-wise with 1:00 PM IST publication system."
        />
        <meta
          name="keywords"
          content="CET Results, Law CET Score, Dr Milind Yerne College of Law CET, LL.B CET Result, Maharashtra Law CET score card, Institutional Round Merit List"
        />
        <link rel="canonical" href="https://dmycl.edu.in/cet" />
      </Helmet>

      <Container>
        {/* Hero Section */}
        <CETHero />

        <div className="max-w-5xl mx-auto">
          {/* Controls Bar: Search & Year Filter */}
          <div className="mb-8 p-4 md:p-6 bg-white rounded-2xl border border-[#DFAE24]/30 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2.5 text-[#26130D]">
                <FaGraduationCap className="w-5 h-5 text-[#B88E1C]" />
                <span className="text-sm font-bold font-heading">
                  Search & Filter CET Merit Records
                </span>
              </div>

              {/* Search Input Box */}
              <div className="relative flex-1 sm:max-w-xs">
                <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#756D63]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by student, date or round..."
                  className="w-full pl-9 pr-9 py-2 bg-[#FAF8F3] border border-[#DFAE24]/30 rounded-xl text-xs md:text-sm text-[#211A17] placeholder-[#756D63]/70 focus:outline-none focus:ring-2 focus:ring-[#DFAE24] focus:bg-white transition-all font-body"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#756D63] hover:text-[#26130D] cursor-pointer"
                    aria-label="Clear search"
                  >
                    <FaTimes className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>

            {/* Year Filter Pills */}
            <div className="pt-3 border-t border-[#DFAE24]/20 flex items-center gap-2 flex-wrap text-xs">
              <span className="text-[#756D63] font-bold flex items-center gap-1 mr-1">
                <FaFilter className="w-3 h-3 text-[#B88E1C]" /> Filter Year:
              </span>
              <button
                onClick={() => setSelectedYearFilter('ALL')}
                className={`px-3 py-1.5 rounded-xl font-extrabold transition-all cursor-pointer ${
                  selectedYearFilter === 'ALL'
                    ? 'bg-[#26130D] text-[#DFAE24] shadow-xs'
                    : 'bg-[#FAF8F3] text-[#756D63] border border-[#DFAE24]/30 hover:bg-[#F5F0E6]'
                }`}
              >
                All Years
              </button>
              {availableYears.map((yr) => (
                <button
                  key={yr}
                  onClick={() => setSelectedYearFilter(yr)}
                  className={`px-3 py-1.5 rounded-xl font-extrabold transition-all cursor-pointer ${
                    selectedYearFilter === yr
                      ? 'bg-[#26130D] text-[#DFAE24] shadow-xs'
                      : 'bg-[#FAF8F3] text-[#756D63] border border-[#DFAE24]/30 hover:bg-[#F5F0E6]'
                  }`}
                >
                  {yr}
                </button>
              ))}
            </div>
          </div>

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <SectionTitle
              title="Official Year-Wise & Date-Wise CET Results"
              subtitle="Published at 1:00 PM IST"
              centered={false}
            />

            <div className="inline-flex items-center gap-1.5 text-xs text-[#B88E1C] bg-[#F5F0E6] px-3 py-1.5 rounded-xl border border-[#DFAE24]/30 font-bold self-start sm:self-auto">
              <FaClock className="w-3.5 h-3.5" />
              <span>Official Publication Time: 1:00 PM IST (Asia/Kolkata)</span>
            </div>
          </div>

          {/* Accordion List of Year Results */}
          {filteredYearData.length > 0 ? (
            <div className="space-y-5">
              {filteredYearData.map((yg) => (
                <CETYearSection
                  key={yg.year}
                  yearGroup={yg}
                  isOpen={openYearId === yg.year || filteredYearData.length === 1}
                  onToggle={() => handleToggleYear(yg.year)}
                  onViewPdf={handleOpenPdfModal}
                />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12 px-6 bg-white rounded-2xl border border-[#DFAE24]/30 shadow-xs"
            >
              <div className="w-12 h-12 rounded-full bg-[#FAF8F3] text-[#B88E1C] flex items-center justify-center mx-auto mb-3 border border-[#DFAE24]/30">
                <FaFilePdf className="w-5 h-5" />
              </div>
              <h4 className="text-base md:text-lg font-bold font-heading text-[#26130D]">
                No CET Results Found
              </h4>
              <p className="text-xs md:text-sm text-[#756D63] mt-1 font-body">
                No official CET score or merit list matches your filter or search query "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedYearFilter('ALL');
                }}
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#B88E1C] hover:text-[#26130D] border-b border-[#B88E1C] pb-0.5 transition-colors cursor-pointer"
              >
                Reset All Filters
              </button>
            </motion.div>
          )}

          {/* Official Footer Note */}
          <div className="mt-12 p-4 md:p-5 rounded-2xl bg-[#F5F0E6]/80 border border-[#DFAE24]/30 text-xs text-[#756D63] leading-relaxed font-body flex items-start gap-3">
            <span className="text-[#B88E1C] font-extrabold text-sm mt-0.5">•</span>
            <p>
              <strong>Official Notice & System Rules:</strong> All CET score records and merit lists published on this portal are authorized records of <strong>Dr. Milind Yerne College of Law, Kosara Kondha</strong>. Each record has a fixed publication schedule of <strong>1:00 PM IST (Asia/Kolkata timezone)</strong>. Original unmodified PDFs remain accessible permanently after publication.
            </p>
          </div>
        </div>
      </Container>

      {/* PDF Modal Viewer */}
      <PDFViewerModal
        isOpen={Boolean(activeModalRecord)}
        onClose={handleClosePdfModal}
        record={activeModalRecord}
      />
    </div>
  );
};

export default CETPage;
