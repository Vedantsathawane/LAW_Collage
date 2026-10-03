import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaPrint, FaPhoneAlt, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Container from '../../components/common/Container';
import { capAdvertisementNotice } from '../../data/capData';

const CAPAdvertisementPage = () => {
  const ad = capAdvertisementNotice;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-8 pb-20 bg-[#FAF8F3] font-body min-h-[85vh]">
      <Helmet>
        <title>Official Deshonnati Admission Notice | Dr. Milind Yerne College of Law</title>
        <meta
          name="description"
          content="Official Deshonnati Newspaper Notice for IVth Institutional Round Admissions at Dr. Milind Yerne College of Law Kosra."
        />
        <link rel="canonical" href="https://drmycollegeoflaw.org/cap-admission/advertisement" />
      </Helmet>

      <Container>
        {/* Page Top Header */}
        <div className="relative overflow-hidden mb-8 select-none text-center max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block text-[11px] md:text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#FAF8F3] text-[#B88E1C] border border-[#DFAE24]/40 shadow-xs mb-3 font-heading"
          >
            Newspaper Release • देशोन्नती
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#26130D] leading-tight mb-3"
          >
            Deshonnati Admission Notice
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-[#756D63] font-medium font-body leading-relaxed max-w-2xl mx-auto"
          >
            Official newspaper notification as published in Deshonnati for IVth Institutional Round Admissions.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 rounded-full mx-auto mt-4"
            style={{
              background: 'linear-gradient(90deg, #DFAE24 0%, #B88E1C 50%, #26130D 100%)'
            }}
          />
        </div>

        {/* Action Button Strip */}
        <div className="flex justify-between items-center mb-6 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-[#756D63]">
            Published Notice • As of 30/09/2026
          </span>
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#DFAE24]/40 rounded-xl text-xs font-bold text-[#26130D] hover:bg-[#FAF8F3] transition-colors shadow-xs font-heading"
          >
            <FaPrint className="text-[#B88E1C]" /> Print Advertisement
          </button>
        </div>

        {/* EXACT NEWSPAPER ADVERTISEMENT LAYOUT WITH OUR WEBSITE'S BRANDED UI STYLING */}
        <div className="border-4 border-[#26130D] rounded-3xl bg-white shadow-xl overflow-hidden max-w-3xl mx-auto mb-10 text-center font-body select-none">
          {/* 1. Newspaper Title Header */}
          <div className="bg-[#26130D] text-[#DFAE24] py-3.5 border-b-4 border-[#DFAE24]">
            <h2 className="text-3xl md:text-4xl font-black font-heading tracking-wider">
              देशोन्नती
            </h2>
          </div>

          {/* 2. Main Box Inner Notice */}
          <div className="p-6 md:p-8 bg-[#FAF8F3]/40 space-y-4">
            {/* Header Titles */}
            <div className="border-b-2 border-[#26130D]/20 pb-4 space-y-1.5">
              <h3 className="text-base md:text-lg font-black font-heading text-[#26130D] tracking-wide uppercase">
                ADMISSION OPEN – IVth INSTITUTIONAL ROUND
              </h3>
              <p className="text-xs md:text-sm font-extrabold text-[#756D63] uppercase tracking-wider font-heading">
                LATE MALATAI YERNE SMRUTI BAHUUDDESHIYA SANSTHA'S
              </p>
              <h4 className="text-lg md:text-xl font-extrabold font-heading text-[#26130D] uppercase tracking-tight">
                DR. MILIND YERNE COLLEGE OF LAW, KOSARA-KONDHA
              </h4>
              <p className="text-xs font-bold text-[#B88E1C] uppercase tracking-wider">
                APPROVED BY BAR COUNCIL OF INDIA (BCI)
              </p>
              <p className="text-xs font-bold text-[#756D63] uppercase tracking-wider">
                AFFILIATED TO RASHTRASANT TUKADOJI MAHARAJ NAGPUR UNIVERSITY
              </p>

              <div className="pt-2">
                <span className="inline-block bg-[#26130D] text-[#DFAE24] font-extrabold text-xs md:text-sm px-5 py-1.5 rounded-lg font-heading shadow-xs">
                  LL.B. FIRST YEAR ADMISSION – 2026-27<br />
                  B.A. LL.B. (5 Years) & LL.B. (3 Years)
                </span>
              </div>

              <p className="text-xs font-extrabold text-[#26130D] pt-1 italic font-heading">
                Admissions against CAP Vacant Seats – IVth Institutional Round
              </p>
            </div>

            {/* 3. Course Table (Matching exact image layout) */}
            <div className="overflow-x-auto py-2">
              <table className="w-full border-2 border-[#26130D] text-xs font-body border-collapse">
                <thead>
                  <tr className="bg-[#26130D] text-[#DFAE24] font-extrabold font-heading text-center">
                    <th className="py-2.5 px-4 border-r border-[#DFAE24]/40 border-b border-[#DFAE24]/40 w-1/3">
                      COURSE
                    </th>
                    <th className="py-2.5 px-4 border-r border-[#DFAE24]/40 border-b border-[#DFAE24]/40 w-1/3">
                      ADMISSION DATE
                    </th>
                    <th className="py-2.5 px-4 border-b border-[#DFAE24]/40 w-1/3">
                      VACANT SEATS
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#26130D]/20 font-bold text-[#26130D] text-center">
                  <tr className="bg-white hover:bg-[#FAF8F3]">
                    <td className="py-3 px-4 border-r border-[#26130D]/20 font-extrabold font-heading">
                      B.A. LL.B. 5 Years
                    </td>
                    <td className="py-3 px-4 border-r border-[#26130D]/20 text-[#26130D]">
                      01/10/2026 to 04/10/2026
                    </td>
                    <td className="py-3 px-4 font-black font-heading text-lg text-[#26130D] bg-[#F5F0E6]">
                      66
                    </td>
                  </tr>
                  <tr className="bg-[#FAF8F3]/60 hover:bg-[#FAF8F3]">
                    <td className="py-3 px-4 border-r border-[#26130D]/20 font-extrabold font-heading">
                      LL.B. – 3 Years
                    </td>
                    <td className="py-3 px-4 border-r border-[#26130D]/20 text-[#26130D]">
                      03/10/2026 to 04/10/2026
                    </td>
                    <td className="py-3 px-4 font-black font-heading text-lg text-[#26130D] bg-[#F5F0E6]">
                      52
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-center text-xs font-semibold text-[#756D63] italic">
              Vacant seats are inclusive of EWS seats and subject to availability.
            </p>

            {/* 4. IMPORTANT Notice Section */}
            <div className="text-left bg-white p-5 rounded-2xl border-2 border-[#26130D]/20 shadow-xs space-y-2">
              <h5 className="text-xs font-black font-heading text-[#26130D] uppercase tracking-wider border-b border-[#26130D]/10 pb-1">
                IMPORTANT
              </h5>
              <ul className="space-y-1.5 text-xs text-[#211A17] font-medium leading-relaxed">
                <li>• Admission will be conducted as per the CET Cell-generated Merit List available on the CET Web Portal, College Website and College Notice Board.</li>
                <li>• <strong className="text-[#26130D]">Reporting Time:</strong> 10:00 a.m. to 12:00 noon</li>
                <li>• <strong className="text-[#26130D]">Allotment List:</strong> 1:00 p.m. on respective admission days.</li>
                <li>• Students are required to follow the IVth Institutional Round admission procedure as per the instructions displayed on the College Website and Notice Board.</li>
              </ul>
            </div>

            {/* 5. CONTACT FOR ADMISSION & SIGNATORY */}
            <div className="bg-[#26130D] text-[#FAF8F3] p-5 rounded-2xl border-2 border-[#DFAE24]/40 text-center space-y-3">
              <h5 className="text-xs font-black font-heading text-[#DFAE24] uppercase tracking-widest">
                CONTACT FOR ADMISSION
              </h5>
              <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs md:text-sm font-extrabold text-white">
                <a href="tel:8975677965" className="bg-white/10 hover:bg-[#DFAE24] hover:text-[#26130D] px-3 py-1 rounded-lg border border-white/20 transition-colors">
                  8975677965
                </a>
                <span>|</span>
                <a href="tel:9284974125" className="bg-white/10 hover:bg-[#DFAE24] hover:text-[#26130D] px-3 py-1 rounded-lg border border-white/20 transition-colors">
                  9284974125
                </a>
                <span>|</span>
                <a href="tel:9422659807" className="bg-white/10 hover:bg-[#DFAE24] hover:text-[#26130D] px-3 py-1 rounded-lg border border-white/20 transition-colors">
                  9422659807
                </a>
                <span>|</span>
                <a href="tel:9405249027" className="bg-white/10 hover:bg-[#DFAE24] hover:text-[#26130D] px-3 py-1 rounded-lg border border-white/20 transition-colors">
                  9405249027
                </a>
              </div>

              {/* Bottom Footer / Signatory Row */}
              <div className="pt-3 border-t border-[#DFAE24]/30 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-200 gap-2">
                <span className="font-semibold text-gray-300">
                  Website: <a href="https://drmycollegeoflaw.org" target="_blank" rel="noopener noreferrer" className="text-[#DFAE24] hover:underline font-bold">www.drmycollegeoflaw.org</a>
                </span>
                <div className="text-right">
                  <p className="font-black text-[#DFAE24] font-heading">Principal</p>
                  <p className="text-[11px] font-semibold text-gray-300">Dr. Milind Yerne College of Law, Kosara-Kondha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CAPAdvertisementPage;
