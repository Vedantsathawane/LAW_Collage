import React, { useState } from 'react';
import { FaSearch, FaEnvelope, FaGraduationCap, FaAward, FaCalendarAlt } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import FacultyCard from '../../components/faculty/FacultyCard';
import Modal from '../../components/ui/Modal';
import { FACULTY, DEPARTMENTS } from '../../data/mockData';

const Faculty = () => {
  const [search, setSearch] = useState('');
  const [selectedDept, setSelectedDept] = useState('all');
  const [activeProfile, setActiveProfile] = useState(null);

  // Filter logic
  const filteredFaculty = FACULTY.filter((f) => {
    const matchesSearch = f.name.toLowerCase().includes(search.toLowerCase()) || 
                          f.specialization.toLowerCase().includes(search.toLowerCase());
    const matchesDept = selectedDept === 'all' || f.deptId === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Our Respected Faculty Members" subtitle="Faculty" centered={true} />

        {/* Filters and search block */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-white border border-slate-100 p-4 md:p-6 rounded-2xl shadow-premium">
          {/* Search Input */}
          <div className="relative w-full md:w-80 flex items-center">
            <FaSearch className="absolute left-3.5 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search faculty by name or area..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-xs md:text-sm focus:outline-none focus:border-primary text-slate-700"
            />
          </div>

          {/* Department Select Filter */}
          <div className="flex items-center gap-2.5 w-full md:w-auto shrink-0 select-none">
            <span className="text-xs md:text-sm font-semibold text-slate-400">Department:</span>
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="px-3.5 py-2 border border-slate-200 rounded-xl text-xs md:text-sm focus:outline-none focus:border-primary text-slate-700 bg-white"
            >
              <option value="all">All Departments</option>
              {DEPARTMENTS.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.shortName}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Faculty Cards Grid */}
        {filteredFaculty.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFaculty.map((f) => (
              <FacultyCard
                key={f.id}
                faculty={f}
                onViewProfile={(profile) => setActiveProfile(profile)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-slate-400 font-medium">
            No faculty members found matching your search.
          </div>
        )}
      </Container>

      {/* Detailed Profile Modal */}
      {activeProfile && (
        <Modal
          isOpen={!!activeProfile}
          onClose={() => setActiveProfile(null)}
          title={activeProfile.name}
          size="md"
        >
          <div className="space-y-5">
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <div className="w-24 h-24 rounded-full overflow-hidden shrink-0 border-2 border-secondary select-none">
                <img
                  src={activeProfile.image}
                  alt={activeProfile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center sm:text-left min-w-0">
                <span className="text-[10px] font-bold text-secondary uppercase bg-primary-dark px-2 py-0.5 rounded-sm">
                  {activeProfile.designation}
                </span>
                <h4 className="text-lg font-bold font-heading text-primary-dark mt-1.5">{activeProfile.name}</h4>
                <p className="text-xs text-slate-500 font-medium mt-1 truncate">{activeProfile.qualification}</p>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4 space-y-3.5 text-xs md:text-sm text-slate-600">
              <div className="flex items-start gap-2.5">
                <FaAward className="text-secondary w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-slate-400 text-[10px] uppercase">Specialization Research</p>
                  <p className="font-medium text-slate-700 mt-0.5">{activeProfile.specialization}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <FaCalendarAlt className="text-secondary w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-slate-400 text-[10px] uppercase">Teaching Experience</p>
                  <p className="font-medium text-slate-700 mt-0.5">{activeProfile.experience}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <FaGraduationCap className="text-secondary w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  <p className="font-bold text-slate-400 text-[10px] uppercase">Research Publications</p>
                  <p className="font-medium text-slate-700 mt-0.5">{activeProfile.publications} papers published in indexed journals</p>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1.5">Biography & Focus</p>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed italic">
                "{activeProfile.bio}"
              </p>
            </div>

            <div className="border-t border-slate-100 pt-4 text-xs text-slate-400">
              <p>Institutional Email: <a href={`mailto:${activeProfile.email}`} className="text-primary hover:underline font-mono">{activeProfile.email}</a></p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Faculty;
