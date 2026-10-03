import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaPhoneAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdmissionPopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Trigger ad popup modal after 30 seconds (30,000 ms) of opening website
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4 bg-black/75 backdrop-blur-sm select-none">
          {/* Overlay backdrop */}
          <div className="absolute inset-0" onClick={handleClose} />

          {/* Modal Content Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="relative w-full max-w-2xl bg-white border-4 border-[#26130D] rounded-3xl shadow-2xl overflow-hidden z-10 font-body max-h-[92vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-[#26130D] text-[#DFAE24] hover:bg-[#43230F] hover:scale-110 flex items-center justify-center transition-all cursor-pointer border border-[#DFAE24]/50 shadow-md"
              aria-label="Close Advertisement Popup"
            >
              <FaTimes className="text-sm" />
            </button>

            {/* 1. Newspaper Title Header */}
            <div className="bg-[#26130D] text-[#DFAE24] py-3 text-center border-b-4 border-[#DFAE24]">
              <h2 className="text-2xl md:text-3xl font-black font-heading tracking-wider">
                देशोन्नती
              </h2>
            </div>

            {/* 2. Main Box Inner Notice (Exact Newspaper Advertisement Layout) */}
            <div className="p-4 md:p-6 bg-[#FAF8F3]/60 space-y-3.5 text-center">
              {/* Header Info */}
              <div className="border-b-2 border-[#26130D]/20 pb-3 space-y-1">
                <h3 className="text-xs md:text-sm font-black font-heading text-[#26130D] uppercase tracking-wider">
                  ADMISSION OPEN – IVth INSTITUTIONAL ROUND
                </h3>
                <p className="text-[10px] md:text-xs font-extrabold text-[#756D63] uppercase tracking-wider font-heading">
                  LATE MALATAI YERNE SMRUTI BAHUUDDESHIYA SANSTHA'S
                </p>
                <h4 className="text-sm md:text-base font-extrabold font-heading text-[#26130D] uppercase">
                  DR. MILIND YERNE COLLEGE OF LAW, KOSARA-KONDHA
                </h4>
                <p className="text-[10px] font-bold text-[#B88E1C] uppercase">
                  APPROVED BY BAR COUNCIL OF INDIA (BCI)
                </p>
                <p className="text-[10px] font-bold text-[#756D63] uppercase">
                  AFFILIATED TO RASHTRASANT TUKADOJI MAHARAJ NAGPUR UNIVERSITY
                </p>

                <div className="pt-1.5">
                  <span className="inline-block bg-[#26130D] text-[#DFAE24] font-extrabold text-xs px-3.5 py-1 rounded font-heading">
                    LL.B. FIRST YEAR ADMISSION – 2026-27<br />
                    B.A. LL.B. (5 Years) & LL.B. (3 Years)
                  </span>
                </div>

                <p className="text-[11px] font-extrabold text-[#26130D] italic font-heading pt-1">
                  Admissions against CAP Vacant Seats – IVth Institutional Round
                </p>
              </div>

              {/* 3. Course Table */}
              <div className="overflow-x-auto py-1">
                <table className="w-full border-2 border-[#26130D] text-xs font-body border-collapse">
                  <thead>
                    <tr className="bg-[#26130D] text-[#DFAE24] font-extrabold font-heading text-center text-[11px]">
                      <th className="py-2 px-2 border-r border-[#DFAE24]/40 border-b border-[#DFAE24]/40 w-1/3">
                        COURSE
                      </th>
                      <th className="py-2 px-2 border-r border-[#DFAE24]/40 border-b border-[#DFAE24]/40 w-1/3">
                        ADMISSION DATE
                      </th>
                      <th className="py-2 px-2 border-b border-[#DFAE24]/40 w-1/3">
                        VACANT SEATS
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#26130D]/20 font-bold text-[#26130D] text-center text-xs">
                    <tr className="bg-white">
                      <td className="py-2 px-2 border-r border-[#26130D]/20 font-extrabold font-heading">
                        B.A. LL.B. 5 Years
                      </td>
                      <td className="py-2 px-2 border-r border-[#26130D]/20 text-[#26130D]">
                        01/10/2026 to 04/10/2026
                      </td>
                      <td className="py-2 px-2 font-black font-heading text-base text-[#26130D] bg-[#F5F0E6]">
                        66
                      </td>
                    </tr>
                    <tr className="bg-[#FAF8F3]/60">
                      <td className="py-2 px-2 border-r border-[#26130D]/20 font-extrabold font-heading">
                        LL.B. – 3 Years
                      </td>
                      <td className="py-2 px-2 border-r border-[#26130D]/20 text-[#26130D]">
                        03/10/2026 to 04/10/2026
                      </td>
                      <td className="py-2 px-2 font-black font-heading text-base text-[#26130D] bg-[#F5F0E6]">
                        52
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-center text-[10px] md:text-xs font-semibold text-[#756D63] italic">
                Vacant seats are inclusive of EWS seats and subject to availability.
              </p>

              {/* 4. IMPORTANT Section */}
              <div className="text-left bg-white p-3.5 rounded-xl border border-[#26130D]/20 shadow-xs space-y-1 text-[11px] md:text-xs text-[#211A17]">
                <h5 className="font-black font-heading text-[#26130D] uppercase border-b border-[#26130D]/10 pb-0.5">
                  IMPORTANT
                </h5>
                <p>• Admission as per CET Cell Merit List on Portal & Website.</p>
                <p>• <strong className="text-[#26130D]">Reporting Time:</strong> 10:00 a.m. to 12:00 noon</p>
                <p>• <strong className="text-[#26130D]">Allotment List:</strong> 1:00 p.m. on admission days.</p>
              </div>

              {/* 5. Contact & Action Buttons */}
              <div className="bg-[#26130D] text-[#FAF8F3] p-4 rounded-2xl border border-[#DFAE24]/40 text-center space-y-3">
                <p className="text-[11px] font-black font-heading text-[#DFAE24] uppercase tracking-wider">
                  CONTACT FOR ADMISSION: <a href="tel:8975677965" className="text-white hover:underline ml-1">8975677965</a> | <a href="tel:9284974125" className="text-white hover:underline">9284974125</a> | <a href="tel:9422659807" className="text-white hover:underline">9422659807</a>
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
                  <Link
                    to="/cap-admission/advertisement"
                    onClick={handleClose}
                    className="w-full sm:flex-1 py-2.5 px-3 bg-[#DFAE24] hover:bg-[#b88e1c] text-[#26130D] text-center font-extrabold text-xs rounded-xl shadow-md transition-all font-heading flex items-center justify-center gap-1.5"
                  >
                    View Official Deshonnati Notice <FaExternalLinkAlt className="text-[10px]" />
                  </Link>

                  <Link
                    to="/cap-admission/merit-list"
                    onClick={handleClose}
                    className="w-full sm:flex-1 py-2.5 px-3 bg-white hover:bg-[#FAF8F3] text-[#26130D] text-center font-extrabold text-xs rounded-xl shadow-md transition-all font-heading flex items-center justify-center gap-1.5"
                  >
                    Check Merit List Candidates <FaExternalLinkAlt className="text-[10px]" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AdmissionPopupModal;
