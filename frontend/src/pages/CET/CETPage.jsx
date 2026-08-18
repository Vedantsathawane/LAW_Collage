import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaSearch, FaTimes, FaGraduationCap, FaFilePdf } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import CETHero from '../../components/CET/CETHero';
import CETYearSection from '../../components/CET/CETYearSection';
import { CET_RESULTS } from '../../data/cetData';

const CETPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openYearId, setOpenYearId] = useState(() => {
    return CET_RESULTS.length > 0 ? CET_RESULTS[0].id : null;
  });

  // Data-driven list filtered by search term
  const filteredResults = useMemo(() => {
    if (!searchQuery.trim()) return CET_RESULTS;
    const query = searchQuery.toLowerCase().trim();
    return CET_RESULTS.filter(
      (item) =>
        item.year.toLowerCase().includes(query) ||
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        (item.documentType && item.documentType.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  const handleToggle = (id) => {
    setOpenYearId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="pt-10 pb-20 bg-[#FAF8F3] font-body min-h-[80vh]">
      <Helmet>
        <title>CET Results & Scores | Dr. Milind Yerne College of Law</title>
        <meta
          name="description"
          content="View official CET score and result records of students of Dr. Milind Yerne College of Law, organized by academic year."
        />
        <meta
          name="keywords"
          content="CET Results, Law CET Score, DMYCL CET, Dr Milind Yerne College of Law CET, LL.B. CET result, Maharashtra Law CET score card"
        />
        <link rel="canonical" href="https://dmycl.edu.in/cet" />
      </Helmet>

      <Container>
        {/* Page Header / Hero Component */}
        <CETHero />

        <div className="max-w-4xl mx-auto">
          {/* Controls Bar: Search Field */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 md:p-5 rounded-2xl border border-[#DFAE24]/30 shadow-xs">
            <div className="flex items-center gap-2.5 text-[#26130D]">
              <FaGraduationCap className="w-5 h-5 text-[#B88E1C]" />
              <span className="text-sm font-bold font-heading">
                Search CET Results
              </span>
            </div>

            {/* Search Input Box */}
            <div className="relative flex-1 sm:max-w-xs">
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#756D63]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by academic year..."
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

          {/* Main Section Header */}
          <SectionTitle
            title="Previous Year CET Results"
            subtitle="Official Documents"
            centered={false}
            className="mb-8"
          />

          {/* Accordion / List of Year Results */}
          {filteredResults.length > 0 ? (
            <div className="space-y-4">
              {filteredResults.map((item) => (
                <CETYearSection
                  key={item.id}
                  item={item}
                  isOpen={openYearId === item.id}
                  onToggle={() => handleToggle(item.id)}
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
                No official CET score document matches your search term "{searchQuery}".
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#B88E1C] hover:text-[#26130D] border-b border-[#B88E1C] pb-0.5 transition-colors cursor-pointer"
              >
                Clear Search Query
              </button>
            </motion.div>
          )}

          {/* Informational Footer Note */}
          <div className="mt-12 p-4 md:p-5 rounded-2xl bg-[#F5F0E6]/80 border border-[#DFAE24]/30 text-xs text-[#756D63] leading-relaxed font-body flex items-start gap-3">
            <span className="text-[#B88E1C] font-extrabold text-sm mt-0.5">•</span>
            <p>
              <strong>Official Note:</strong> CET score cards and result documents published on this portal are authorized official records of <strong>Dr. Milind Yerne College of Law, Pauni</strong>. For queries regarding CET admission verification, please visit the Administrative Office or contact the Admission Cell.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CETPage;
