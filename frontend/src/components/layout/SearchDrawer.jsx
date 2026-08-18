import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaTimes, FaBook, FaSchool } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { DEPARTMENTS, COURSES } from '../../data/mockData';

const SearchDrawer = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
      setQuery('');
      setResults([]);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const term = query.toLowerCase();
    
    // Filter departments
    const filteredDepts = DEPARTMENTS.filter(
      (d) => d.name.toLowerCase().includes(term) || d.hod.toLowerCase().includes(term)
    ).map((d) => ({
      id: d.id,
      title: d.name,
      type: 'Department',
      link: `/academics/departments`
    }));

    // Filter courses
    const filteredCourses = COURSES.filter(
      (c) => c.name.toLowerCase().includes(term) || c.level.toLowerCase().includes(term)
    ).map((c) => ({
      id: c.id,
      title: c.name,
      type: 'Course',
      link: `/academics/courses`
    }));

    setResults([...filteredDepts, ...filteredCourses].slice(0, 8));
  }, [query]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-start">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs cursor-pointer"
          />

          {/* Search container panel */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: 'spring', damping: 26, stiffness: 290 }}
            className="bg-white border-b border-slate-200 shadow-2xl relative z-10 w-full px-4 md:px-8 py-8 md:py-12"
          >
            <div className="max-w-4xl mx-auto flex flex-col">
              {/* Input field row */}
              <div className="flex items-center justify-between gap-4 border-b-2 border-primary pb-3.5">
                <FaSearch className="text-muted w-6 h-6 shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search departments, degree courses, faculty, admission guide..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full text-lg md:text-xl font-heading font-medium text-primary placeholder-slate-400 focus:outline-none border-none bg-transparent"
                />
                <button
                  onClick={onClose}
                  className="text-muted hover:text-primary p-2 hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
                  aria-label="Close search"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>

              {/* Suggestions results block */}
              {results.length > 0 ? (
                <div className="mt-6 md:mt-8">
                  <h4 className="text-xs font-bold text-muted uppercase tracking-wider mb-4">
                    Matching Results ({results.length})
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {results.map((res, index) => (
                      <Link
                        key={`${res.type}-${res.id}-${index}`}
                        to={res.link}
                        onClick={onClose}
                        className="flex items-center gap-3.5 p-3.5 bg-slate-50 hover:bg-primary/5 rounded-xl border border-slate-100 hover:border-primary/20 transition-all duration-300 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-white shadow-xs border border-slate-100 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                          {res.type === 'Course' ? <FaBook className="w-4 h-4" /> : <FaSchool className="w-4 h-4" />}
                        </div>
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-muted uppercase tracking-wider">
                            {res.type}
                          </p>
                          <p className="text-sm font-semibold text-primary truncate group-hover:text-primary-light">
                            {res.title}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ) : query.trim() ? (
                <div className="mt-8 text-center py-6 text-muted">
                  No matching courses or departments found for "{query}"
                </div>
              ) : (
                <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-3 text-center">
                  <Link
                    to="/academics/departments"
                    onClick={onClose}
                    className="p-3.5 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all font-medium text-xs md:text-sm text-primary"
                  >
                    View Departments
                  </Link>
                  <Link
                    to="/academics/courses"
                    onClick={onClose}
                    className="p-3.5 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all font-medium text-xs md:text-sm text-primary"
                  >
                    Explore Courses
                  </Link>
                  <Link
                    to="/cet"
                    onClick={onClose}
                    className="p-3.5 bg-[#FAF8F3] hover:bg-[#F5F0E6] rounded-xl border border-[#DFAE24]/40 transition-all font-bold text-xs md:text-sm text-[#26130D]"
                  >
                    CET Results
                  </Link>
                  <Link
                    to="/admission/procedure"
                    onClick={onClose}
                    className="p-3.5 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all font-medium text-xs md:text-sm text-primary"
                  >
                    Admission Guide
                  </Link>
                  <Link
                    to="/student-corner/downloads"
                    onClick={onClose}
                    className="p-3.5 bg-slate-50 hover:bg-slate-100 rounded-xl transition-all font-medium text-xs md:text-sm text-primary"
                  >
                    Syllabus PDFs
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SearchDrawer;
