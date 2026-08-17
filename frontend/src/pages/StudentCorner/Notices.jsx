import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaBell,
  FaSearch,
  FaFilter,
  FaCalendarAlt,
  FaArrowRight,
  FaTimes,
  FaBullhorn,
  FaExclamationCircle
} from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import { NOTICES } from '../../data/mockData';

const Notices = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const categories = ['all', 'Admissions', 'Academic', 'Regulatory', 'Events', 'Scholarships', 'Exams'];

  const filteredNotices = NOTICES.filter((notice) => {
    const matchesSearch =
      notice.title.toLowerCase().includes(search.toLowerCase()) ||
      (notice.description && notice.description.toLowerCase().includes(search.toLowerCase()));
    const matchesCat = category === 'all' || notice.category.toLowerCase() === category.toLowerCase();
    return matchesSearch && matchesCat;
  });

  return (
    <div className="pt-24 pb-16 bg-[#FAF8F3] font-body min-h-screen">
      <Container>
        <SectionTitle
          title="Official Announcements & Notices"
          subtitle="Student Corner Board"
          centered={true}
        />

        {/* Search & Category Filter Control Panel */}
        <div className="max-w-4xl mx-auto mb-10 bg-white border border-[#DFAE24]/40 p-5 md:p-6 rounded-2xl shadow-premium space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative w-full md:w-96 flex items-center">
              <FaSearch className="absolute left-3.5 text-[#B88E1C] w-4 h-4 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by keyword, topic, or department..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 border border-[#DFAE24]/30 rounded-xl text-xs md:text-sm focus:outline-none focus:border-[#B88E1C] focus:ring-1 focus:ring-[#B88E1C] text-[#211A17] bg-[#FAF8F3]/50 font-medium placeholder-[#756D63]/60"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 text-[#756D63] hover:text-[#26130D] p-1 cursor-pointer"
                >
                  <FaTimes className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Total Notices Count Badge */}
            <div className="flex items-center gap-2 text-xs font-bold text-[#756D63] shrink-0">
              <FaBullhorn className="w-3.5 h-3.5 text-[#B88E1C]" />
              <span>Showing {filteredNotices.length} of {NOTICES.length} Announcements</span>
            </div>
          </div>

          {/* Filter Category Chips */}
          <div className="pt-3 border-t border-[#DFAE24]/20 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none select-none">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#26130D] shrink-0 mr-1">
              <FaFilter className="text-[#B88E1C] w-3 h-3" />
              <span>Category:</span>
            </div>
            <div className="flex items-center gap-2 flex-nowrap md:flex-wrap">
              {categories.map((cat) => {
                const isActive = category.toLowerCase() === cat.toLowerCase();
                return (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-extrabold transition-all duration-200 cursor-pointer whitespace-nowrap border ${
                      isActive
                        ? 'bg-[#26130D] text-[#DFAE24] border-[#DFAE24] shadow-xs'
                        : 'bg-[#FAF8F3] text-[#756D63] border-[#DFAE24]/30 hover:bg-[#F5F0E6] hover:text-[#26130D]'
                    }`}
                  >
                    {cat === 'all' ? 'All Notices' : cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Notices Cards List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredNotices.length > 0 ? (
            filteredNotices.map((n) => {
              const isHighPriority = n.priority === 'high';
              return (
                <Card
                  key={n.id}
                  className="p-5 md:p-6 bg-white border border-[#DFAE24]/30 shadow-premium hover:border-[#DFAE24] transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-5 group rounded-2xl relative overflow-hidden"
                  hoverEffect={true}
                >
                  <div className="flex items-start gap-4 min-w-0 flex-1">
                    {/* Left Icon Container (Strict Black & Gold Theme) */}
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md bg-[#26130D] border-2 border-[#DFAE24] transition-transform group-hover:scale-105">
                      <FaBell className={`w-5.5 h-5.5 text-[#DFAE24] ${isHighPriority ? 'animate-pulse' : ''}`} />
                    </div>

                    {/* Notice Info Container */}
                    <div className="space-y-1.5 min-w-0 flex-1">
                      {/* Meta Tags Row */}
                      <div className="flex flex-wrap items-center gap-2">
                        {n.category && (
                          <span className="px-2.5 py-0.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider bg-[#26130D] text-[#DFAE24] border border-[#DFAE24]/30">
                            {n.category}
                          </span>
                        )}
                        {n.isNew && (
                          <span className="px-2.5 py-0.5 rounded-md text-[9px] font-extrabold uppercase tracking-widest bg-[#DFAE24] text-[#26130D] border border-[#B88E1C]/40 shadow-xs">
                            NEW
                          </span>
                        )}
                        <span className="text-[11px] text-[#756D63] font-semibold flex items-center gap-1 ml-auto sm:ml-0">
                          <FaCalendarAlt className="w-3 h-3 text-[#B88E1C]" />
                          <span>{n.date}</span>
                          {n.issuer && <span className="text-[#756D63]/60">• {n.issuer}</span>}
                        </span>
                      </div>

                      {/* Notice Title */}
                      <h4 className="text-base md:text-lg font-bold font-heading text-[#26130D] group-hover:text-[#B88E1C] transition-colors leading-snug">
                        {n.title}
                      </h4>

                      {/* Notice Description */}
                      {n.description && (
                        <p className="text-xs text-[#756D63] font-medium leading-relaxed">
                          {n.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Right Action Button */}
                  <div className="w-full md:w-auto shrink-0 flex items-center justify-end pt-2 md:pt-0 border-t md:border-t-0 border-[#DFAE24]/20">
                    <Link
                      to={n.link || '/student-corner/downloads'}
                      className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#26130D] hover:bg-[#3D2017] text-[#DFAE24] font-bold text-xs px-5 py-2.5 rounded-xl border border-[#DFAE24]/40 shadow-xs transition-all cursor-pointer group-hover:shadow-md"
                    >
                      <span>View Notice</span>
                      <FaArrowRight className="w-3 h-3 text-[#DFAE24] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </Card>
              );
            })
          ) : (
            <div className="text-center py-16 bg-white border border-[#DFAE24]/30 rounded-2xl p-8 shadow-premium space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#FAF8F3] border border-[#DFAE24]/40 text-[#B88E1C] flex items-center justify-center mx-auto">
                <FaExclamationCircle className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold font-heading text-[#26130D]">
                No Announcements Match Your Search
              </h3>
              <p className="text-xs text-[#756D63] max-w-sm mx-auto font-medium">
                Try resetting your search query or selecting "All Notices" from the category filters above.
              </p>
              <button
                onClick={() => {
                  setSearch('');
                  setCategory('all');
                }}
                className="mt-2 text-xs font-extrabold text-[#26130D] bg-[#DFAE24] hover:bg-[#F4C430] px-4 py-2 rounded-xl shadow-xs border border-[#B88E1C]/30 cursor-pointer"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Notices;
