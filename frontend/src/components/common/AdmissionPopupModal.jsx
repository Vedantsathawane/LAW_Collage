import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPhoneAlt, FaExternalLinkAlt, FaCalendarAlt, FaCheckCircle, FaAward } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { capAdvertisementNotice } from '../../data/capData';

const AdmissionPopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ad = capAdvertisementNotice;

  useEffect(() => {
    // Check if user already dismissed pop-up in current session
    const hasSeenPopup = sessionStorage.getItem('dmycl_cap_ad_seen');

    if (!hasSeenPopup) {
      // Set timer to trigger popup after 30 seconds (30,000 ms)
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 30000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('dmycl_cap_ad_seen', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm select-none">
          {/* Overlay backdrop click to close */}
          <div className="absolute inset-0" onClick={handleClose} />

          {/* Modal Content Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative w-full max-w-2xl bg-white border-2 border-[#DFAE24]/60 rounded-3xl shadow-2xl overflow-hidden z-10 font-body"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-[#26130D]/80 text-[#DFAE24] hover:bg-[#26130D] hover:scale-110 flex items-center justify-center transition-all cursor-pointer border border-[#DFAE24]/40"
              aria-label="Close Advertisement Popup"
            >
              <FaTimes className="text-sm" />
            </button>

            {/* Top Banner Header */}
            <div className="bg-[#26130D] text-[#FAF8F3] p-5 md:p-6 text-center border-b-2 border-[#DFAE24]/40 relative">
              <span className="inline-block bg-[#DFAE24] text-[#26130D] font-black text-xl md:text-2xl px-5 py-0.5 rounded mb-2 font-heading tracking-wider">
                {ad.paperName}
              </span>
              <p className="text-xs md:text-sm font-extrabold tracking-wider text-[#DFAE24] uppercase font-heading">
                {ad.heading}
              </p>
              <p className="text-[11px] text-[#FAF8F3]/90 mt-1 font-medium">
                {ad.sansthaName}
              </p>
              <h3 className="text-base md:text-lg font-bold font-heading text-[#FAF8F3] mt-0.5">
                {ad.collegeName}
              </h3>
              <p className="text-[10px] md:text-xs text-amber-200 mt-1 font-semibold">
                {ad.approvals}
              </p>
            </div>

            {/* Courses & Vacant Seats Body */}
            <div className="p-5 md:p-6 bg-[#FAF8F3]">
              <div className="text-center mb-4">
                <span className="inline-block bg-[#F5F0E6] text-[#26130D] font-extrabold text-xs px-3.5 py-1 rounded-full border border-[#DFAE24]/40 font-heading">
                  {ad.academicYear} • {ad.subTitle}
                </span>
              </div>

              {/* Vacant Seats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                {ad.courses.map((c, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-2xl border border-[#DFAE24]/40 shadow-xs flex items-center justify-between">
                    <div>
                      <h4 className="text-xs md:text-sm font-extrabold font-heading text-[#26130D]">{c.courseName}</h4>
                      <p className="text-[11px] text-[#756D63] mt-1 flex items-center gap-1">
                        <FaCalendarAlt className="text-[#B88E1C]" /> {c.admissionDates}
                      </p>
                    </div>
                    <div className="text-center bg-[#F5F0E6] px-3 py-1.5 rounded-xl border border-[#DFAE24]/30 shrink-0">
                      <span className="text-[9px] font-extrabold text-[#756D63] uppercase block">Vacant Seats</span>
                      <span className="text-lg font-black text-[#26130D] font-heading">{c.vacantSeats}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Reporting & Allotment Time Highlights */}
              <div className="bg-white p-3.5 rounded-2xl border border-[#DFAE24]/30 shadow-xs mb-5 text-xs text-[#756D63] space-y-1">
                <p className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#B88E1C]" />
                  <span>Reporting Time: <strong className="text-[#26130D]">10:00 a.m. to 12:00 noon</strong></span>
                </p>
                <p className="flex items-center gap-2">
                  <FaCheckCircle className="text-[#B88E1C]" />
                  <span>Allotment List: <strong className="text-[#26130D]">1:00 p.m. on admission days</strong></span>
                </p>
              </div>

              {/* Action Strip */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to="/cap-admission"
                  onClick={handleClose}
                  className="w-full sm:flex-1 py-3 px-4 bg-[#26130D] hover:bg-[#43230F] text-[#DFAE24] text-center font-extrabold text-xs md:text-sm rounded-xl shadow-md transition-all font-heading flex items-center justify-center gap-2"
                >
                  View Full CAP Vacancy & Merit List <FaExternalLinkAlt className="text-xs" />
                </Link>

                <a
                  href={`tel:${ad.contactNumbers[0]}`}
                  className="w-full sm:w-auto py-3 px-4 bg-[#DFAE24] hover:bg-[#b88e1c] text-[#26130D] text-center font-extrabold text-xs md:text-sm rounded-xl shadow-md transition-all font-heading flex items-center justify-center gap-2"
                >
                  <FaPhoneAlt className="text-xs" /> Call Admission Desk
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AdmissionPopupModal;
