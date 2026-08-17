import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBell, FaSearch, FaArrowRight, FaTimes } from 'react-icons/fa';
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
    const matchesCat = category === 'all' || (notice.category && notice.category.toLowerCase() === category.toLowerCase());
    return matchesSearch && matchesCat;
  });

  return (
    <div className="pt-24 pb-16 bg-[#FAF8F3] font-body min-h-screen">
      <Container>
        <SectionTitle
          title="Official Notices Board"
          subtitle="Announcements"
          centered={true}
        />

        {/* Search & Category Filter Bar */}
        <div className="max-w-4xl mx-auto mb-8 bg-white border border-[#DFAE24]/30 p-4 rounded-2xl shadow-sm space-y-3">
          <div className="relative w-full flex items-center">
            <FaSearch className="absolute left-3.5 text-[#B88E1C] w-4 h-4 pointer-events-none" />
            <input
              type="text"
              placeholder="Search announcements by keyword..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-9 py-2 border border-[#DFAE24]/30 rounded-xl text-xs md:text-sm focus:outline-none focus:border-[#B88E1C] text-[#211A17] bg-[#FAF8F3]/50 font-medium"
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

          {/* Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none select-none">
            {categories.map((cat) => {
              const isActive = category.toLowerCase() === cat.toLowerCase();
              return (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap border ${
                    isActive
                      ? 'bg-[#26130D] text-[#DFAE24] border-[#DFAE24]'
                      : 'bg-[#FAF8F3] text-[#756D63] border-[#DFAE24]/30 hover:bg-[#F5F0E6] hover:text-[#26130D]'
                  }`}
                >
                  {cat === 'all' ? 'All Notices' : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Notice List Matching Image Layout (Gold & Black Theme) */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredNotices.length > 0 ? (
            filteredNotices.map((n) => (
              <Card
                key={n.id}
                className="p-5 bg-white border border-[#DFAE24]/30 shadow-premium flex items-start gap-4 rounded-2xl group"
                hoverEffect={true}
              >
                {/* Bell Icon Container (Black & Gold Only) */}
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                    n.priority === 'high'
                      ? 'bg-[#26130D] border-[#DFAE24] text-[#DFAE24]'
                      : 'bg-[#FAF8F3] border-[#DFAE24]/40 text-[#B88E1C]'
                  }`}
                >
                  <FaBell className="w-4.5 h-4.5" />
                </div>

                {/* Content Area */}
                <div className="min-w-0 flex-1 space-y-1">
                  {/* Category Pill Badge */}
                  {n.category && (
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-[#26130D] text-[#DFAE24] border border-[#DFAE24]/30 font-heading">
                      {n.category}
                    </span>
                  )}

                  {/* Title */}
                  <h4 className="text-base md:text-lg font-bold font-heading text-[#26130D] group-hover:text-[#B88E1C] transition-colors leading-snug">
                    {n.title}
                  </h4>

                  {/* Date */}
                  <p className="text-xs text-[#756D63] font-semibold pt-0.5">
                    Published: {n.date}
                  </p>
                </div>

                {/* Action Link */}
                <Link
                  to={n.link || '/student-corner/downloads'}
                  className="hidden sm:inline-flex items-center gap-1.5 bg-[#26130D] hover:bg-[#3D2017] text-[#DFAE24] font-bold text-xs px-3.5 py-2 rounded-lg border border-[#DFAE24]/40 shrink-0 self-center transition-colors"
                >
                  <span>View</span>
                  <FaArrowRight className="w-3 h-3 text-[#DFAE24]" />
                </Link>
              </Card>
            ))
          ) : (
            <div className="text-center py-12 bg-white border border-[#DFAE24]/30 rounded-2xl p-6 text-xs text-[#756D63] font-semibold">
              No notices match your search filter.
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Notices;
