import React, { useState } from 'react';
import { FaBell, FaFileInvoice, FaSearch, FaFilter } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import { NOTICES } from '../../data/mockData';

const Notices = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const categories = ['all', 'Exams', 'Admissions', 'Scholarships', 'Regulatory', 'Events', 'IQAC'];

  const filteredNotices = NOTICES.filter((notice) => {
    const matchesSearch = notice.title.toLowerCase().includes(search.toLowerCase());
    const matchesCat = category === 'all' || notice.category === category;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Official Notices Board" subtitle="Student Corner" centered={true} />

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white border border-slate-100 p-4 md:p-6 rounded-2xl shadow-premium">
          <div className="relative w-full md:w-80 flex items-center">
            <FaSearch className="absolute left-3.5 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search announcements..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-xs md:text-sm focus:outline-none focus:border-primary text-slate-700"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto shrink-0 select-none">
            <FaFilter className="text-slate-400 w-3.5 h-3.5 shrink-0" />
            <span className="text-xs font-semibold text-slate-400">Category:</span>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-3 py-1.5 border rounded-lg text-[10px] md:text-xs font-bold transition-all cursor-pointer ${
                    category === cat
                      ? 'bg-primary text-white border-primary'
                      : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Notices Index list */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredNotices.length > 0 ? (
            filteredNotices.map((n) => (
              <Card key={n.id} className="p-5 bg-white border border-slate-100 shadow-premium flex items-start gap-4 group" hoverEffect={true}>
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${n.priority === 'high' ? 'bg-red-50 text-red-500' : 'bg-primary/5 text-primary'}`}>
                  <FaBell className={`w-4.5 h-4.5 ${n.priority === 'high' ? 'animate-bounce' : ''}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[9px] font-bold text-secondary uppercase bg-primary-dark px-2 py-0.5 rounded-sm">
                    {n.category}
                  </span>
                  <h4 className="text-sm md:text-base font-bold text-primary-dark mt-2 group-hover:text-accent transition-colors leading-snug">
                    {n.title}
                  </h4>
                  <p className="text-[10px] text-slate-400 mt-1 font-mono font-semibold">
                    Published: {n.date}
                  </p>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center py-12 text-slate-400 font-semibold">
              No notices match your filter parameters.
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Notices;
