import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const UtilityBar = () => {
  return (
    <div className="bg-primary-dark text-slate-200 border-b border-primary/20 py-2 text-[11px] md:text-xs tracking-wide hidden lg:block select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Left side contacts */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-secondary w-3 h-3" />
            <a href="tel:+911127667725" className="hover:text-white transition-colors">
              +91-11-27667725
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-secondary w-3 h-3" />
            <a href="mailto:info@gwlc.edu.in" className="hover:text-white transition-colors">
              info@gwlc.edu.in
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-secondary w-3 h-3" />
            <span>North Campus, New Delhi, India</span>
          </div>
        </div>

        {/* Right side links */}
        <div className="flex items-center space-x-4 border-l border-slate-700 pl-4">
          <Link to="/admission/procedure" className="hover:text-secondary transition-colors font-medium">Admissions 2026</Link>
          <span className="text-slate-600">|</span>
          <Link to="/student-corner/downloads" className="hover:text-secondary transition-colors">Downloads</Link>
          <span className="text-slate-600">|</span>
          <Link to="/academics/iqac" className="hover:text-secondary transition-colors">IQAC</Link>
          <span className="text-slate-600">|</span>
          <Link to="/academics/naac" className="hover:text-secondary transition-colors">NAAC A++</Link>
          <span className="text-slate-600">|</span>
          <Link to="/academics/rti" className="hover:text-secondary transition-colors">RTI</Link>
          <span className="text-slate-600">|</span>
          <a href="#portal-login" className="hover:text-secondary transition-colors font-semibold bg-white/10 px-2 py-0.5 rounded-sm">
            Portal Logins
          </a>
        </div>
      </div>
    </div>
  );
};

export default UtilityBar;
