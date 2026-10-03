import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch, FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SearchDrawer from './SearchDrawer';

const NAV_MENU = [
  {
    title: "About",
    key: "about",
    submenu: [
      { name: "Overview & Profile", path: "/about" },
      { name: "Institutional History", path: "/about/history" },
      { name: "Vision & Mission", path: "/about/vision-mission" },
      { name: "Management Sanstha", path: "/about/management" },
      { name: "Principal's Desk", path: "/about/principal-desk" },
      { name: "Administration", path: "/about/administration" }
    ]
  },
  {
    title: "Academics",
    key: "academics",
    submenu: [
      { name: "Academic Programs", path: "/academics/departments" },
      { name: "Courses & Syllabi", path: "/academics/courses" },
      { name: "Faculty Directory", path: "/academics/faculty" },
      { name: "Central Library", path: "/academics/library" },
      { name: "Research Pursuits", path: "/academics/research" },
      { name: "IQAC Cell", path: "/academics/iqac" },
      { name: "NAAC Accreditation", path: "/academics/naac" },
      { name: "NIRF Ranking", path: "/academics/nirf" }
    ]
  },
  {
    title: "Admissions",
    key: "admissions",
    submenu: [
      { name: "Apply Online", path: "/admission/apply" },
      { name: "CAP Admission & Vacancy", path: "/cap-admission" },
      { name: "Admission Procedure", path: "/admission/procedure" },
      { name: "Fee Structure", path: "/admission/fees" },
      { name: "Scholarships & Rules", path: "/admission/scholarship" }
    ]
  },
  {
    title: "Student Life",
    key: "students",
    submenu: [
      { name: "Moot Court Association", path: "/academics/training" },
      { name: "Legal Aid & Human Rights", path: "/academics/research" },
      { name: "Campus Facilities", path: "/student-corner/campus-facilities" },
      { name: "Student Hostels", path: "/student-corner/hostel" },
      { name: "Sports & Athletics", path: "/student-corner/sports" },
      { name: "NSS & NCC Units", path: "/student-corner/nss" },
      { name: "Committees Directory", path: "/student-corner/committees" }
    ]
  },
  {
    title: "Activities",
    key: "activities",
    submenu: [
      { name: "Examination Center", path: "/student-corner/examination" },
      { name: "Downloads & Syllabi", path: "/student-corner/downloads" },
      { name: "News & Highlights", path: "/student-corner/news" },
      { name: "Upcoming Events", path: "/student-corner/events" },
      { name: "Testimonials", path: "/student-corner/testimonials" }
    ]
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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
      <nav
        className={`bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#DFAE24]/20 transition-all duration-300 relative z-40 select-none ${
          isScrolled ? 'py-2.5 shadow-md' : 'py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* LEFT: Official College Logo & Name */}
          <Link to="/" className="flex items-center gap-3.5 group focus:outline-none shrink-0">
            <img 
              src="/logo.png" 
              alt="Dr. Milind Yerne College of Law Official Logo" 
              className="h-11 md:h-12 w-auto object-contain rounded-md bg-white p-0.5 shadow-xs border border-[#DFAE24]/30 group-hover:scale-105 transition-transform" 
            />
            <div className="min-w-0">
              <h1 className="text-xs md:text-sm font-extrabold tracking-wider uppercase font-heading text-[#28150A] group-hover:text-[#43230F] transition-colors leading-tight whitespace-nowrap">
                Dr. Milind Yerne
              </h1>
              <p className="text-[10px] text-[#B88E1C] font-bold tracking-widest uppercase whitespace-nowrap">
                College of Law
              </p>
            </div>
          </Link>

            {/* CENTER / RIGHT: Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6" aria-label="Main Navigation">
              <Link
                to="/"
                className={`text-xs md:text-sm font-bold font-heading hover:text-[#B88E1C] transition-colors relative py-1 ${
                  location.pathname === '/' ? 'text-[#43230F]' : 'text-[#756D63]'
                }`}
              >
                Home
                {location.pathname === '/' && (
                  <motion.div
                    layoutId="activeNavUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#DFAE24]"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
              </Link>

              {/* About, Academics, Admissions */}
              {NAV_MENU.slice(0, 3).map((menu) => {
                const hasActiveChild = menu.submenu.some(item => location.pathname === item.path);
                return (
                  <div key={menu.key} className="relative group/nav">
                    <button
                      className={`flex items-center gap-1 text-xs md:text-sm font-bold font-heading hover:text-[#B88E1C] transition-colors cursor-pointer py-1 relative ${
                        hasActiveChild ? 'text-[#43230F]' : 'text-[#756D63]'
                      }`}
                    >
                      <span>{menu.title}</span>
                      <FaChevronDown className="w-2.5 h-2.5 text-[#B88E1C]/60 group-hover/nav:text-[#B88E1C] group-hover/nav:rotate-180 transition-all duration-300" />
                      {hasActiveChild && (
                        <motion.div
                          layoutId="activeNavUnderline"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#DFAE24]"
                          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                        />
                      )}
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-[#FAF8F3] border border-[#DFAE24]/30 rounded-xl shadow-xl w-60 py-2.5 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-200 z-50">
                      <div className="flex flex-col">
                        {menu.submenu.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            className="px-4 py-2 text-xs font-semibold text-[#211A17] hover:text-[#43230F] hover:bg-[#F5F0E6] transition-colors font-body"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* CET & CAP Main Links */}
              <Link
                to="/cet"
                className={`text-xs md:text-sm font-bold font-heading hover:text-[#B88E1C] transition-colors relative py-1 ${
                  location.pathname === '/cet' ? 'text-[#43230F]' : 'text-[#756D63]'
                }`}
              >
                CET
                {location.pathname === '/cet' && (
                  <motion.div
                    layoutId="activeNavUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#DFAE24]"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
              </Link>

              <Link
                to="/cap-admission"
                className={`text-xs md:text-sm font-bold font-heading hover:text-[#B88E1C] transition-colors relative py-1 ${
                  location.pathname === '/cap-admission' ? 'text-[#43230F]' : 'text-[#756D63]'
                }`}
              >
                CAP Admission
                {location.pathname === '/cap-admission' && (
                  <motion.div
                    layoutId="activeNavUnderline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#DFAE24]"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
              </Link>

              {/* Student Life, Activities */}
              {NAV_MENU.slice(3).map((menu) => {
                const hasActiveChild = menu.submenu.some(item => location.pathname === item.path);
                return (
                  <div key={menu.key} className="relative group/nav">
                    <button
                      className={`flex items-center gap-1 text-xs md:text-sm font-bold font-heading hover:text-[#B88E1C] transition-colors cursor-pointer py-1 relative ${
                        hasActiveChild ? 'text-[#43230F]' : 'text-[#756D63]'
                      }`}
                    >
                      <span>{menu.title}</span>
                      <FaChevronDown className="w-2.5 h-2.5 text-[#B88E1C]/60 group-hover/nav:text-[#B88E1C] group-hover/nav:rotate-180 transition-all duration-300" />
                      {hasActiveChild && (
                        <motion.div
                          layoutId="activeNavUnderline"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#DFAE24]"
                          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                        />
                      )}
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-[#FAF8F3] border border-[#DFAE24]/30 rounded-xl shadow-xl w-60 py-2.5 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-200 z-50">
                      <div className="flex flex-col">
                        {menu.submenu.map((item, idx) => (
                          <Link
                            key={idx}
                            to={item.path}
                            className="px-4 py-2 text-xs font-semibold text-[#211A17] hover:text-[#43230F] hover:bg-[#F5F0E6] transition-colors font-body"
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
                to="/student-corner/gallery"
                className={`text-xs md:text-sm font-bold font-heading hover:text-[#B88E1C] transition-colors relative py-1 ${
                  location.pathname === '/student-corner/gallery' ? 'text-[#43230F]' : 'text-[#756D63]'
                }`}
              >
                Gallery
              </Link>

              <Link
                to="/student-corner/notices"
                className={`text-xs md:text-sm font-bold font-heading hover:text-[#B88E1C] transition-colors relative py-1 ${
                  location.pathname === '/student-corner/notices' ? 'text-[#43230F]' : 'text-[#756D63]'
                }`}
              >
                Notices
              </Link>

              <Link
                to="/contact"
                className={`text-xs md:text-sm font-bold font-heading hover:text-[#B88E1C] transition-colors relative py-1 ${
                  location.pathname === '/contact' ? 'text-[#43230F]' : 'text-[#756D63]'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Action elements */}
            <div className="flex items-center space-x-3 shrink-0">
              <button
                onClick={() => setSearchOpen(true)}
                className="w-9 h-9 rounded-xl hover:bg-[#F5F0E6] border border-[#DFAE24]/30 flex items-center justify-center text-[#43230F] transition-all cursor-pointer focus:outline-none"
                aria-label="Search site query"
              >
                <FaSearch className="w-3.5 h-3.5" />
              </button>

              <Link
                to="/admission/apply"
                className="hidden sm:inline-flex items-center justify-center bg-[#DFAE24] hover:bg-[#F4C430] text-[#28150A] font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-xs transition-all border border-[#B88E1C]/30 hover:shadow-md cursor-pointer"
              >
                Admissions
              </Link>

              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden w-9 h-9 rounded-xl hover:bg-[#F5F0E6] border border-[#DFAE24]/30 flex items-center justify-center text-[#43230F] transition-all cursor-pointer focus:outline-none"
                aria-label="Open mobile menu"
              >
                <FaBars className="w-4 h-4" />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Drawer */}
        <div
          className={`fixed inset-0 z-50 bg-[#28150A]/70 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className={`absolute top-0 right-0 w-80 max-w-[85vw] h-full bg-[#FAF8F3] shadow-2xl flex flex-col transition-transform duration-300 transform ${
              mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 border-b border-[#DFAE24]/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain bg-white rounded p-0.5 border border-[#DFAE24]/30" />
                <div>
                  <span className="font-extrabold text-xs text-[#28150A] font-heading uppercase block leading-tight">Dr. Milind Yerne</span>
                  <span className="text-[10px] text-[#B88E1C] font-bold uppercase block">College of Law</span>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 hover:bg-[#F5F0E6] rounded-lg text-[#756D63] hover:text-[#43230F] cursor-pointer"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto px-4 py-5">
              <nav className="flex flex-col space-y-3.5 font-heading text-sm font-semibold">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-bold text-[#43230F] border-b border-[#DFAE24]/20 pb-2"
                >
                  Home
                </Link>
                
                {NAV_MENU.slice(0, 3).map((menu) => {
                  const isOpen = activeAccordion === menu.key;
                  return (
                    <div key={menu.key} className="border-b border-[#DFAE24]/20 pb-2">
                      <button
                        onClick={() => toggleAccordion(menu.key)}
                        className="w-full flex items-center justify-between font-bold text-[#211A17] text-left cursor-pointer"
                      >
                        <span>{menu.title}</span>
                        <FaChevronDown className={`w-3 h-3 text-[#B88E1C] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isOpen && (
                        <div className="pl-3.5 mt-2 flex flex-col space-y-2 border-l-2 border-[#DFAE24]/40 font-body text-xs font-medium text-[#756D63]">
                          {menu.submenu.map((item, idx) => (
                            <Link
                              key={idx}
                              to={item.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="hover:text-[#43230F] py-0.5"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* CET & CAP Mobile Links */}
                <Link
                  to="/cet"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-bold border-b border-[#DFAE24]/20 pb-2 flex items-center justify-between ${
                    location.pathname === '/cet' ? 'text-[#B88E1C]' : 'text-[#211A17]'
                  }`}
                >
                  <span>CET</span>
                  {location.pathname === '/cet' && (
                    <span className="w-2 h-2 rounded-full bg-[#DFAE24]" />
                  )}
                </Link>

                <Link
                  to="/cap-admission"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-bold border-b border-[#DFAE24]/20 pb-2 flex items-center justify-between ${
                    location.pathname === '/cap-admission' ? 'text-[#B88E1C]' : 'text-[#211A17]'
                  }`}
                >
                  <span>CAP Admission</span>
                  {location.pathname === '/cap-admission' && (
                    <span className="w-2 h-2 rounded-full bg-[#DFAE24]" />
                  )}
                </Link>

                {NAV_MENU.slice(3).map((menu) => {
                  const isOpen = activeAccordion === menu.key;
                  return (
                    <div key={menu.key} className="border-b border-[#DFAE24]/20 pb-2">
                      <button
                        onClick={() => toggleAccordion(menu.key)}
                        className="w-full flex items-center justify-between font-bold text-[#211A17] text-left cursor-pointer"
                      >
                        <span>{menu.title}</span>
                        <FaChevronDown className={`w-3 h-3 text-[#B88E1C] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isOpen && (
                        <div className="pl-3.5 mt-2 flex flex-col space-y-2 border-l-2 border-[#DFAE24]/40 font-body text-xs font-medium text-[#756D63]">
                          {menu.submenu.map((item, idx) => (
                            <Link
                              key={idx}
                              to={item.path}
                              onClick={() => setMobileMenuOpen(false)}
                              className="hover:text-[#43230F] py-0.5"
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
                to="/student-corner/gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="font-bold text-[#211A17] border-b border-[#DFAE24]/20 pb-2"
              >
                Gallery
              </Link>

              <Link
                to="/student-corner/notices"
                onClick={() => setMobileMenuOpen(false)}
                className="font-bold text-[#211A17] border-b border-[#DFAE24]/20 pb-2"
              >
                Notices
              </Link>

              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="font-bold text-[#211A17] pb-2"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          <div className="p-4 border-t border-[#DFAE24]/20 bg-[#F5F0E6]">
            <Link
              to="/admission/apply"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center bg-[#DFAE24] text-[#28150A] font-extrabold text-xs py-3 rounded-xl shadow-xs"
            >
              Admissions 2026-27
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
