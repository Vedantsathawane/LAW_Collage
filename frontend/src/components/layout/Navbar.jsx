import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch, FaChevronDown, FaBalanceScale } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../common/Container';
import SearchDrawer from './SearchDrawer';
import { INSTITUTION_NAME, INSTITUTION_SHORT_NAME } from '../../config/institutionConfig';

const NAV_MENU = [
  {
    title: "About",
    key: "about",
    submenu: [
      { name: "Overview", path: "/about" },
      { name: "History", path: "/about/history" },
      { name: "Vision & Mission", path: "/about/vision-mission" },
      { name: "Management Structure", path: "/about/management" },
      { name: "Principal's Desk", path: "/about/principal-desk" },
      { name: "Administration", path: "/about/administration" }
    ]
  },
  {
    title: "Academics",
    key: "academics",
    submenu: [
      { name: "Academic Departments", path: "/academics/departments" },
      { name: "Courses Offered", path: "/academics/courses" },
      { name: "Faculty Directory", path: "/academics/faculty" },
      { name: "Central Library", path: "/academics/library" },
      { name: "Research & Projects", path: "/academics/research" },
      { name: "Placements Cell", path: "/academics/placements" },
      { name: "Training & Development", path: "/academics/training" },
      { name: "IQAC cell", path: "/academics/iqac" },
      { name: "NAAC SSR", path: "/academics/naac" },
      { name: "NIRF ranking", path: "/academics/nirf" }
    ]
  },
  {
    title: "Admissions",
    key: "admissions",
    submenu: [
      { name: "Apply Online", path: "/admission/apply" },
      { name: "Admission Procedure", path: "/admission/procedure" },
      { name: "Fee Structure", path: "/admission/fees" },
      { name: "Scholarships Details", path: "/admission/scholarship" }
    ]
  },
  {
    title: "Student Corner",
    key: "students",
    submenu: [
      { name: "Examination Center", path: "/student-corner/examination" },
      { name: "Downloads & Syllabi", path: "/student-corner/downloads" },
      { name: "News Highlights", path: "/student-corner/news" },
      { name: "Notice Ticker List", path: "/student-corner/notices" },
      { name: "Upcoming Events", path: "/student-corner/events" },
      { name: "Campus Photo Gallery", path: "/student-corner/gallery" },
      { name: "Student Testimonials", path: "/student-corner/testimonials" },
      { name: "RTI Cell", path: "/academics/rti" },
      { name: "Anti-Ragging Squad", path: "/academics/anti-ragging" },
      { name: "Grievance Redressal", path: "/academics/grievance-cell" }
    ]
  },
  {
    title: "Campus Life",
    key: "campus",
    submenu: [
      { name: "Facilities Overview", path: "/student-corner/campus-facilities" },
      { name: "Student Hostels", path: "/student-corner/hostel" },
      { name: "Sports Arena", path: "/student-corner/sports" },
      { name: "NSS Activities", path: "/student-corner/nss" },
      { name: "NCC Detachment", path: "/student-corner/ncc" },
      { name: "Committees Directory", path: "/student-corner/committees" },
      { name: "Alumni Network", path: "/student-corner/alumni" },
      { name: "Career Openings", path: "/student-corner/career" }
    ]
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const location = useLocation();

  // Scroll tracking to trigger morph state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
    setActiveAccordion(null);
  }, [location]);

  const toggleAccordion = (key) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  return (
    <>
      <header
        className={`fixed z-40 transition-all duration-500 ease-out ${
          isScrolled 
            ? 'top-4 left-4 right-4 max-w-7xl mx-auto rounded-2xl bg-white/75 backdrop-blur-lg border border-white/40 shadow-premium py-2 px-6 text-primary' 
            : 'top-0 lg:top-10 left-0 right-0 bg-white border-b border-slate-100 py-3.5 px-4 text-primary'
        }`}
      >
        <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none select-none shrink-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white shadow-md shadow-primary/20 group-hover:scale-105 transition-transform shrink-0">
              <FaBalanceScale className="w-5 h-5 text-secondary" />
            </div>
            <div className="min-w-0">
              <h1 className="text-xs md:text-sm font-extrabold tracking-wider uppercase font-heading text-primary-dark group-hover:text-primary transition-colors leading-tight">
                {INSTITUTION_SHORT_NAME}
              </h1>
              <p className="text-[8px] md:text-[9px] text-muted font-semibold tracking-wider uppercase truncate max-w-[150px] md:max-w-none">
                {INSTITUTION_NAME}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 select-none" aria-label="Main Navigation">
            <Link
              to="/"
              className={`text-xs md:text-sm font-bold font-heading hover:text-accent transition-colors relative ${
                location.pathname === '/' ? 'text-primary' : 'text-slate-500'
              }`}
            >
              Home
              {location.pathname === '/' && (
                <motion.div
                  layoutId="activeNavUnderline"
                  className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </Link>
            
            {NAV_MENU.map((menu) => {
              const hasActiveChild = menu.submenu.some(item => location.pathname === item.path);
              return (
                <div key={menu.key} className="relative group/nav">
                  <button
                    className={`flex items-center gap-1.5 text-xs md:text-sm font-bold font-heading hover:text-accent transition-colors cursor-pointer py-1 relative ${
                      hasActiveChild ? 'text-primary' : 'text-slate-500'
                    }`}
                  >
                    <span>{menu.title}</span>
                    <FaChevronDown className="w-2 h-2 text-slate-400 group-hover/nav:text-accent group-hover/nav:rotate-180 transition-all duration-300" />
                    {hasActiveChild && (
                      <motion.div
                        layoutId="activeNavUnderline"
                        className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary"
                        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      />
                    )}
                  </button>
                  
                  {/* Dropdown Card */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3.5 bg-white/95 backdrop-blur-md border border-slate-100/80 rounded-2xl shadow-premium w-60 py-3.5 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 scale-95 group-hover/nav:scale-100 z-50">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1.5 w-3 h-3 bg-white rotate-45 border-t border-l border-slate-100/80" />
                    <div className="flex flex-col">
                      {menu.submenu.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.path}
                          className="px-5 py-2.5 text-xs font-semibold text-slate-500 hover:text-primary hover:bg-slate-50 transition-all font-body rounded-lg mx-1.5"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            <Link
              to="/contact"
              className={`text-xs md:text-sm font-bold font-heading hover:text-accent transition-colors relative ${
                location.pathname === '/contact' ? 'text-primary' : 'text-slate-500'
              }`}
            >
              Contact
              {location.pathname === '/contact' && (
                <motion.div
                  layoutId="activeNavUnderline"
                  className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-primary"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </Link>
          </nav>

          {/* Action elements */}
          <div className="flex items-center space-x-3.5 select-none shrink-0">
            <button
              onClick={() => setSearchOpen(true)}
              className="w-9 h-9 md:w-10 md:h-10 rounded-xl hover:bg-slate-100 border border-slate-100 flex items-center justify-center text-primary-dark transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20"
              aria-label="Search site query"
            >
              <FaSearch className="w-4 h-4" />
            </button>

            <Link
              to="/admission/apply"
              className="hidden sm:inline-flex items-center justify-center bg-secondary hover:bg-secondary-dark text-primary-dark font-bold text-xs px-5 py-2.5 rounded-xl shadow-xs transition-all border border-secondary/20 hover:-translate-y-0.5 active:translate-y-0 duration-300"
            >
              Apply Online
            </Link>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-9 h-9 rounded-xl hover:bg-slate-100 border border-slate-100 flex items-center justify-center text-primary-dark transition-all cursor-pointer focus:outline-none"
              aria-label="Open mobile drawer"
            >
              <FaBars className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`absolute top-0 right-0 w-80 max-w-[85vw] h-full bg-white shadow-2xl flex flex-col transition-transform duration-300 transform ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaBalanceScale className="text-primary w-5 h-5 text-secondary" />
              <span className="font-bold text-sm text-primary font-heading uppercase">{INSTITUTION_SHORT_NAME} Menu</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-slate-100 rounded-lg text-muted hover:text-primary cursor-pointer"
            >
              <FaTimes className="w-4 h-4" />
            </button>
          </div>

          {/* Links */}
          <div className="flex-1 overflow-y-auto px-4 py-6">
            <nav className="flex flex-col space-y-4 font-heading text-sm font-semibold">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="font-bold text-primary border-b border-slate-50 pb-2.5"
              >
                Home
              </Link>
              
              {NAV_MENU.map((menu) => {
                const isOpen = activeAccordion === menu.key;
                return (
                  <div key={menu.key} className="border-b border-slate-50 pb-2.5">
                    <button
                      onClick={() => toggleAccordion(menu.key)}
                      className="w-full flex items-center justify-between font-bold text-slate-700 text-left cursor-pointer"
                    >
                      <span>{menu.title}</span>
                      <FaChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isOpen && (
                      <div className="pl-4 mt-2.5 flex flex-col space-y-2.5 border-l-2 border-slate-100 font-body text-xs font-semibold text-slate-500">
                        {menu.submenu.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            onClick={() => setMobileMenuOpen(false)}
                            className="hover:text-primary py-0.5"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="font-bold text-slate-700 pb-2.5"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          <div className="p-4 border-t border-slate-100 bg-slate-50">
            <Link
              to="/admission/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center bg-secondary text-primary-dark font-bold text-xs py-3.5 rounded-xl shadow-xs"
            >
              Apply Online 2026-27
            </Link>
          </div>
        </div>
      </div>

      {/* Global Search Drawer */}
      <SearchDrawer isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export default Navbar;
export { NAV_MENU };
