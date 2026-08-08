import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { INSTITUTION_NAME } from '../../config/institutionConfig';

const UtilityBar = () => {
  return (
    <div className="bg-[#26130D] text-[#FAF8F3] border-b border-[#DFAE24]/30 py-2 text-[11px] font-semibold tracking-wide hidden lg:block select-none relative z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center whitespace-nowrap">
        {/* Left: Official College Name */}
        <div className="flex items-center space-x-6">
          <span className="font-heading font-extrabold text-[#DFAE24] tracking-wider uppercase text-[11px]">
            {INSTITUTION_NAME}
          </span>
          <span className="text-[#DFAE24]/40">|</span>
          <a href="tel:+919422155100" className="flex items-center gap-1.5 hover:text-[#DFAE24] transition-colors group">
            <FaPhoneAlt className="text-[#DFAE24] w-2.5 h-2.5" />
            <span>+91-94221-55100</span>
          </a>
          <a href="mailto:info@dmycl.edu.in" className="flex items-center gap-1.5 hover:text-[#DFAE24] transition-colors group">
            <FaEnvelope className="text-[#DFAE24] w-2.5 h-2.5" />
            <span>info@dmycl.edu.in</span>
          </a>
        </div>

        {/* Right: Quick Links */}
        <div className="flex items-center space-x-5 text-[11px]">
          <Link to="/admission/procedure" className="hover:text-[#DFAE24] transition-colors font-bold text-[#DFAE24]">
            Admissions 2026-27
          </Link>
          <span className="text-[#DFAE24]/40">|</span>
          <Link to="/student-corner/notices" className="hover:text-[#DFAE24] transition-colors">
            Notices
          </Link>
          <span className="text-[#DFAE24]/40">|</span>
          <Link to="/student-corner/downloads" className="hover:text-[#DFAE24] transition-colors">
            Prospectus & Rules
          </Link>
          <span className="text-[#DFAE24]/40">|</span>
          <Link to="/contact" className="hover:text-[#DFAE24] transition-colors">
            Contact Us
          </Link>
          <span className="text-[#DFAE24]/40">|</span>
          <Link to="/admission/apply" className="bg-[#DFAE24] hover:bg-[#F4C430] text-[#26130D] text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-sm transition-all shadow-xs">
            Student Portal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
