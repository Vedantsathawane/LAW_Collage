import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  FaGraduationCap, 
  FaExternalLinkAlt, 
  FaCalendarAlt, 
  FaPrint, 
  FaInfoCircle, 
  FaCheckCircle, 
  FaBuilding,
  FaPhoneAlt,
  FaShieldAlt,
  FaFileInvoice
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import { capVacancyReport } from '../../data/capData';

const CAPAdmissionPage = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [searchTerm, setSearchTerm] = useState('');

  const report = capVacancyReport;

  // Calculate totals per category column across all quotas
  const categoryTotals = useMemo(() => {
    const totals = {};
    report.categories.forEach(cat => {
      totals[cat.key] = { g: 0, f: 0, total: 0 };
    });

    report.quotaRows.forEach(row => {
      Object.keys(row.vacancies).forEach(catKey => {
        const item = row.vacancies[catKey];
        if (item) {
          totals[catKey].g += item.g;
          totals[catKey].f += item.f;
          totals[catKey].total += item.g + item.f;
        }
      });
    });
    return totals;
  }, [report]);

  // Overall vacancy sum
  const grandTotalVacancy = useMemo(() => {
    return report.quotaRows.reduce((sum, row) => sum + row.totalSeats, 0);
  }, [report]);

  // Filtered Quota Rows
  const filteredQuotaRows = useMemo(() => {
    return report.quotaRows.filter(row => {
      if (activeFilter !== 'ALL' && row.type !== activeFilter) return false;
      if (searchTerm) {
        return row.quotaName.toLowerCase().includes(searchTerm.toLowerCase());
      }
      return true;
    });
  }, [report, activeFilter, searchTerm]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-8 pb-20 bg-[#FAF8F3] font-body min-h-[85vh]">
      <Helmet>
        <title>CAP Admission & Vacancy Report | Dr. Milind Yerne College of Law</title>
        <meta
          name="description"
          content="Official Centralized Admission Process (CAP) Vacancy Report for LL.B. (3 Yrs) at Dr. Milind Yerne College of Law Kosra, Pauni, Bhandara."
        />
        <meta
          name="keywords"
          content="CAP Admission, MH CET Law Vacancy Report, Dr Milind Yerne Law College CAP, LL.B 3 Years Seats Vacancy, BCI Approved Law Admission"
        />
        <link rel="canonical" href="https://drmycollegeoflaw.org/cap-admission" />
      </Helmet>

      <Container>
        {/* Top Hero Section matching website CET Hero UI */}
        <div className="relative overflow-hidden mb-10 select-none text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block text-[11px] md:text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#FAF8F3] text-[#B88E1C] border border-[#DFAE24]/40 shadow-xs mb-3 font-heading"
          >
            Official CAP Portal • State CET Cell
          </motion.span>

          {/* Main Heading H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#26130D] leading-tight mb-3"
          >
            CAP Admission & Vacancy Report
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-[#756D63] font-medium font-body leading-relaxed max-w-2xl mx-auto"
          >
            Centralized Admission Process (CAP) seat vacancy matrix for <strong className="text-[#26130D]">LL.B. (3 Yrs.)</strong> un-aided English medium co-education program.
          </motion.p>

          {/* Accent Divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 rounded-full mx-auto mt-5"
            style={{
              background: 'linear-gradient(90deg, #DFAE24 0%, #B88E1C 50%, #26130D 100%)'
            }}
          />
        </div>

        {/* Quick Summary Stat Cards matching site UI styling */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="border border-[#DFAE24]/40 rounded-2xl bg-white p-5 text-center shadow-xs"
          >
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#756D63] mb-1 font-heading">
              Total Vacant Seats
            </p>
            <p className="text-3xl font-extrabold text-[#26130D] font-heading">{grandTotalVacancy}</p>
            <span className="inline-block mt-1 text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F5F0E6] text-[#B88E1C] border border-[#DFAE24]/30">
              All Quotas
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="border border-[#DFAE24]/40 rounded-2xl bg-white p-5 text-center shadow-xs"
          >
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#756D63] mb-1 font-heading">
              Maharashtra State
            </p>
            <p className="text-3xl font-extrabold text-[#B88E1C] font-heading">
              {report.quotaRows[0].totalSeats}
            </p>
            <span className="inline-block mt-1 text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F5F0E6] text-[#B88E1C] border border-[#DFAE24]/30">
              MS Quota
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="border border-[#DFAE24]/40 rounded-2xl bg-white p-5 text-center shadow-xs"
          >
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#756D63] mb-1 font-heading">
              OMS Quota
            </p>
            <p className="text-3xl font-extrabold text-[#26130D] font-heading">
              {report.quotaRows[1].totalSeats}
            </p>
            <span className="inline-block mt-1 text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F5F0E6] text-[#756D63] border border-[#DFAE24]/30">
              Outside MH
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="border border-[#DFAE24]/40 rounded-2xl bg-white p-5 text-center shadow-xs"
          >
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#756D63] mb-1 font-heading">
              Management
            </p>
            <p className="text-3xl font-extrabold text-[#26130D] font-heading">
              {report.quotaRows[4].totalSeats}
            </p>
            <span className="inline-block mt-1 text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F5F0E6] text-[#B88E1C] border border-[#DFAE24]/30">
              Inst. Quota
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="col-span-2 md:col-span-1 border border-[#DFAE24]/40 rounded-2xl bg-white p-5 text-center shadow-xs"
          >
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#756D63] mb-1 font-heading">
              Parallel Vacancy
            </p>
            <div className="flex justify-center gap-1.5 mt-2">
              <span className="text-[11px] font-bold text-[#26130D] bg-[#FAF8F3] px-2 py-1 rounded border border-[#DFAE24]/30">
                Defence: 2
              </span>
              <span className="text-[11px] font-bold text-[#756D63] bg-[#FAF8F3] px-2 py-1 rounded border border-[#DFAE24]/30">
                PH: 0
              </span>
            </div>
          </motion.div>
        </div>

        {/* Section Header Controls */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold font-heading text-[#26130D]">
              Seat Matrix & Category Distribution
            </h2>
            <p className="text-xs text-[#756D63] font-body mt-0.5 flex items-center gap-1.5">
              <FaCalendarAlt className="text-[#B88E1C]" />
              <span>Report Date: <strong className="text-[#26130D]">30/09/2026</strong> • Official State CET Cell Vacancy Data</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-[#DFAE24]/40 rounded-xl text-xs font-bold text-[#26130D] hover:bg-[#FAF8F3] transition-colors shadow-xs font-heading"
            >
              <FaPrint className="text-[#B88E1C]" /> Print Report
            </button>
            <a
              href={report.officialPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#26130D] text-[#DFAE24] rounded-xl text-xs font-bold hover:bg-[#43230F] transition-colors shadow-xs font-heading"
            >
              Verify on CAP Portal <FaExternalLinkAlt className="text-[10px]" />
            </a>
          </div>
        </div>

        {/* Main Official Banner Card */}
        <div className="border border-[#DFAE24]/40 rounded-2xl bg-white shadow-xs overflow-hidden mb-10">
          {/* Header Bar */}
          <div className="bg-[#26130D] text-white p-5 md:p-6 border-b border-[#DFAE24]/30">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded bg-[#FAF8F3]/10 text-[#DFAE24] border border-[#DFAE24]/30 mb-1.5">
                  Choice Code: 1400410812
                </span>
                <h3 className="text-lg md:text-xl font-extrabold font-heading text-[#FAF8F3]">
                  Vacancy Report of 14004 - Dr Milind Yerne College Of Law
                </h3>
                <p className="text-xs text-[#DFAE24] font-semibold mt-1">
                  1400410812-LL.B. (3 Yrs.), Un-Aided, English, Co-Education
                </p>
              </div>

              <div className="bg-[#43230F] p-3 rounded-xl border border-[#DFAE24]/20 text-xs text-[#FAF8F3] font-medium whitespace-nowrap">
                <p>Parallel Vacancy : <strong className="text-[#DFAE24]">( PH - 0 ), (Defence - 2), (Orphan - 0)</strong></p>
                <p className="text-[11px] text-gray-300 mt-0.5">As of Date : <strong>30/09/2026</strong></p>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse min-w-[950px]">
              <thead>
                {/* Header Level 1 */}
                <tr className="bg-[#43230F] text-[#FAF8F3] font-bold text-center border-b border-[#DFAE24]/30">
                  <th rowSpan={2} className="py-3 px-4 text-left border-r border-[#DFAE24]/20 w-48 text-xs md:text-sm font-heading">
                    Quota
                  </th>
                  {report.categories.map((cat) => (
                    <th key={cat.key} colSpan={2} className="py-2.5 px-2 border-r border-[#DFAE24]/20 font-bold tracking-wider font-heading">
                      {cat.label}
                    </th>
                  ))}
                  <th rowSpan={2} className="py-3 px-3 text-center w-20 text-xs md:text-sm bg-[#26130D] text-[#DFAE24] font-heading font-extrabold">
                    Total
                  </th>
                </tr>

                {/* Header Level 2 (G / F) */}
                <tr className="bg-[#26130D] text-[#DFAE24] text-center font-bold border-b border-[#DFAE24]/30">
                  {report.categories.map((cat) => (
                    <React.Fragment key={`${cat.key}-sub`}>
                      <th className="py-1.5 px-2 border-r border-[#DFAE24]/20 w-9 bg-[#26130D]">G</th>
                      <th className="py-1.5 px-2 border-r border-[#DFAE24]/20 w-9 bg-[#351C13]">F</th>
                    </React.Fragment>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-[#DFAE24]/15 font-medium text-[#26130D]">
                {filteredQuotaRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-[#FAF8F3] transition-colors ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F3]/50'
                    }`}
                  >
                    {/* Quota Name */}
                    <td className="py-3 px-4 font-extrabold font-heading text-[#26130D] border-r border-[#DFAE24]/20">
                      {row.quotaName}
                    </td>

                    {/* Category Cells */}
                    {report.categories.map((cat) => {
                      const item = row.vacancies[cat.key];
                      if (!item) {
                        return (
                          <React.Fragment key={cat.key}>
                            <td className="py-3 px-2 text-center text-gray-400 border-r border-[#DFAE24]/20">-</td>
                            <td className="py-3 px-2 text-center text-gray-400 border-r border-[#DFAE24]/20">-</td>
                          </React.Fragment>
                        );
                      }
                      return (
                        <React.Fragment key={cat.key}>
                          <td className={`py-3 px-2 text-center border-r border-[#DFAE24]/20 ${item.g > 0 ? 'font-extrabold text-[#26130D] bg-[#F5F0E6]' : 'text-gray-400'}`}>
                            {item.g}
                          </td>
                          <td className={`py-3 px-2 text-center border-r border-[#DFAE24]/20 ${item.f > 0 ? 'font-extrabold text-[#B88E1C] bg-[#FAF8F3]' : 'text-gray-400'}`}>
                            {item.f}
                          </td>
                        </React.Fragment>
                      );
                    })}

                    {/* Row Total */}
                    <td className="py-3 px-3 text-center font-extrabold font-heading text-[#26130D] bg-[#F5F0E6] text-sm">
                      {row.totalSeats}
                    </td>
                  </tr>
                ))}
              </tbody>

              {/* Footer Row */}
              <tfoot>
                <tr className="bg-[#26130D] text-[#FAF8F3] font-bold text-center text-xs">
                  <td className="py-3.5 px-4 text-left font-extrabold font-heading text-sm border-r border-[#DFAE24]/30 text-[#DFAE24]">
                    Total Vacancy
                  </td>
                  {report.categories.map((cat) => {
                    const catTot = categoryTotals[cat.key];
                    return (
                      <React.Fragment key={`${cat.key}-total`}>
                        <td className="py-2.5 px-2 border-r border-[#DFAE24]/20 bg-[#26130D] text-white">
                          {catTot.g}
                        </td>
                        <td className="py-2.5 px-2 border-r border-[#DFAE24]/20 bg-[#351C13] text-[#DFAE24]">
                          {catTot.f}
                        </td>
                      </React.Fragment>
                    );
                  })}
                  <td className="py-3.5 px-3 text-center font-extrabold font-heading text-base bg-[#43230F] text-[#DFAE24]">
                    {grandTotalVacancy}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Informational Guidance Cards with college design theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-[#DFAE24]/40 rounded-2xl bg-white p-6 shadow-xs">
            <h3 className="text-base md:text-lg font-extrabold text-[#26130D] font-heading mb-3 flex items-center gap-2">
              <FaInfoCircle className="text-[#B88E1C]" /> Admission Guidelines & Regulations
            </h3>
            <ul className="space-y-3 text-xs text-[#756D63] font-body">
              <li className="flex items-start gap-2.5">
                <FaCheckCircle className="text-[#B88E1C] shrink-0 mt-0.5" />
                <span>Admissions are strictly governed under the regulations of State Common Entrance Test Cell, Maharashtra State.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FaCheckCircle className="text-[#B88E1C] shrink-0 mt-0.5" />
                <span>Reserved category candidates (SC, ST, VJ/DT, NT, OBC, SEBC, EWS) must submit valid Caste & Validity Certificate during admission reporting.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <FaCheckCircle className="text-[#B88E1C] shrink-0 mt-0.5" />
                <span>Institutional & Management quota seats are filled as per merit and CET Cell guidelines.</span>
              </li>
            </ul>
          </div>

          <div className="border border-[#DFAE24]/40 rounded-2xl bg-white p-6 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-base md:text-lg font-extrabold text-[#26130D] font-heading mb-3 flex items-center gap-2">
                <FaPhoneAlt className="text-[#B88E1C]" /> CAP Admission Helpline & Assistance
              </h3>
              <p className="text-xs text-[#756D63] font-body mb-4">
                For queries regarding CAP allotment, document verification, or institutional round application, contact our admission desk:
              </p>
              <div className="space-y-2 text-xs font-semibold text-[#26130D]">
                <p className="flex items-center gap-2">
                  <FaBuilding className="text-[#B88E1C]" /> Dr. Milind Yerne College of Law, Kosra (Pauni, Bhandara)
                </p>
                <p className="flex items-center gap-2">
                  <FaExternalLinkAlt className="text-[#B88E1C]" /> Portal: <a href="https://llb3cap26.mahacet.org" target="_blank" rel="noopener noreferrer" className="text-[#B88E1C] underline font-bold">llb3cap26.mahacet.org</a>
                </p>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-[#DFAE24]/20 flex items-center justify-between text-[11px] text-[#756D63]">
              <span>Document Code: 1400410812-LL.B.</span>
              <span>Report Date: 30/09/2026</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CAPAdmissionPage;
