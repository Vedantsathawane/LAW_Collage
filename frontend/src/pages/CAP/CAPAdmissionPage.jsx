import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  FaGraduationCap, 
  FaExternalLinkAlt, 
  FaCalendarAlt, 
  FaPrint, 
  FaInfoCircle, 
  FaCheckCircle, 
  FaUserShield,
  FaBuilding,
  FaFileAlt,
  FaPhoneAlt
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

      {/* Hero Header Banner */}
      <div className="bg-gradient-to-r from-[#1A365D] via-[#2B6CB0] to-[#1A365D] text-white py-12 px-4 shadow-lg relative overflow-hidden mb-10">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <Container>
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold tracking-wider text-[#DFAE24] uppercase mb-4">
              <FaGraduationCap className="text-sm" /> Centralized Admission Process (CAP) 2026-27
            </div>
            <h1 className="text-2xl md:text-4xl font-extrabold font-heading text-white tracking-tight mb-3">
              CAP Admission & Vacancy Report
            </h1>
            <p className="text-sm md:text-base text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Official seat vacancy matrix for <strong className="text-white">LL.B. (3 Yrs.)</strong> un-aided English medium co-education program at Dr. Milind Yerne College of Law.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs md:text-sm text-blue-100">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                <FaCalendarAlt className="text-[#DFAE24]" />
                As of Date: <strong className="text-white">30/09/2026</strong>
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg border border-white/15">
                <FaBuilding className="text-[#DFAE24]" />
                College Code: <strong className="text-white">14004</strong>
              </span>
              <a
                href={report.officialPortalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-[#DFAE24] hover:bg-[#c99b1e] text-[#1A365D] font-bold px-4 py-1.5 rounded-lg transition-colors shadow-sm"
              >
                MAH-CET CAP Portal <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        {/* Quick Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-4 rounded-xl border border-[#DFAE24]/30 shadow-xs text-center"
          >
            <p className="text-xs font-semibold text-[#756D63] uppercase tracking-wider mb-1">Total Vacant Seats</p>
            <p className="text-2xl md:text-3xl font-extrabold text-[#1A365D] font-heading">{grandTotalVacancy}</p>
            <span className="text-[11px] text-emerald-600 font-bold">Across All Quotas</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-4 rounded-xl border border-[#DFAE24]/30 shadow-xs text-center"
          >
            <p className="text-xs font-semibold text-[#756D63] uppercase tracking-wider mb-1">Maharashtra State</p>
            <p className="text-2xl md:text-3xl font-extrabold text-[#2B6CB0] font-heading">
              {report.quotaRows[0].totalSeats}
            </p>
            <span className="text-[11px] text-blue-600 font-bold">MS Quota</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-4 rounded-xl border border-[#DFAE24]/30 shadow-xs text-center"
          >
            <p className="text-xs font-semibold text-[#756D63] uppercase tracking-wider mb-1">OMS Quota</p>
            <p className="text-2xl md:text-3xl font-extrabold text-[#D97706] font-heading">
              {report.quotaRows[1].totalSeats}
            </p>
            <span className="text-[11px] text-amber-600 font-bold">Outside MH</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-4 rounded-xl border border-[#DFAE24]/30 shadow-xs text-center"
          >
            <p className="text-xs font-semibold text-[#756D63] uppercase tracking-wider mb-1">Management</p>
            <p className="text-2xl md:text-3xl font-extrabold text-[#7C3AED] font-heading">
              {report.quotaRows[4].totalSeats}
            </p>
            <span className="text-[11px] text-purple-600 font-bold">Inst. Quota</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="col-span-2 md:col-span-1 bg-white p-4 rounded-xl border border-[#DFAE24]/30 shadow-xs text-center"
          >
            <p className="text-xs font-semibold text-[#756D63] uppercase tracking-wider mb-1">Parallel Vacancy</p>
            <div className="text-xs font-bold text-gray-700 flex justify-center gap-2 mt-2">
              <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-200">Defence: 2</span>
              <span className="bg-gray-50 text-gray-700 px-2 py-1 rounded border border-gray-200">PH: 0</span>
            </div>
          </motion.div>
        </div>

        {/* Section Title & Actions */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <SectionTitle
              title="State CAP Vacancy Report"
              subtitle="Detailed seat breakdown by Quota, Category (G/F), and reservation rules."
            />
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors shadow-xs"
            >
              <FaPrint className="text-gray-500" /> Print Report
            </button>
            <a
              href={report.officialPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A365D] text-white rounded-lg text-xs font-bold hover:bg-[#2B6CB0] transition-colors shadow-xs"
            >
              Verify on CAP Portal <FaExternalLinkAlt className="text-[10px]" />
            </a>
          </div>
        </div>

        {/* Official Header Details Banner */}
        <div className="bg-[#1D4ED8] text-white rounded-t-xl p-4 md:p-5 shadow-sm border-b-2 border-blue-400">
          <div className="text-center font-heading">
            <h3 className="text-base md:text-lg font-bold tracking-wide">
              Vacancy Report of 14004 - Dr Milind Yerne College Of Law
            </h3>
            <p className="text-xs md:text-sm text-blue-100 font-semibold mt-1">
              1400410812-LL.B. (3 Yrs.), Un-Aided, English, Co-Education
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-blue-100 mt-2 font-medium">
              <span><strong>Parallel Vacancy:</strong> ( PH - {report.parallelVacancy.ph} ), ( Defence - {report.parallelVacancy.defence} ), ( Orphan - {report.parallelVacancy.orphan} )</span>
              <span className="hidden md:inline">|</span>
              <span><strong>Report Date:</strong> 30/09/2026</span>
            </div>
          </div>
        </div>

        {/* Main Table */}
        <div className="bg-white rounded-b-xl border border-gray-200 shadow-md overflow-x-auto mb-10">
          <table className="w-full text-left text-xs border-collapse min-w-[900px]">
            {/* Table Header Level 1 */}
            <thead>
              <tr className="bg-[#2563EB] text-white font-bold text-center border-b border-blue-400">
                <th rowSpan={2} className="py-3 px-4 text-left border-r border-blue-400 w-48 text-sm">
                  Quota
                </th>
                {report.categories.map((cat) => (
                  <th key={cat.key} colSpan={2} className="py-2 px-2 border-r border-blue-400 font-bold tracking-wider">
                    {cat.label}
                  </th>
                ))}
                <th rowSpan={2} className="py-3 px-3 text-center w-20 text-sm bg-[#1D4ED8]">
                  Total
                </th>
              </tr>

              {/* Table Header Level 2 (G / F Sub-columns) */}
              <tr className="bg-[#3B82F6] text-white text-center font-bold border-b border-blue-400">
                {report.categories.map((cat) => (
                  <React.Fragment key={`${cat.key}-sub`}>
                    <th className="py-1.5 px-2 border-r border-blue-400 w-9 bg-[#2563EB]/80">G</th>
                    <th className="py-1.5 px-2 border-r border-blue-400 w-9 bg-[#3B82F6]">F</th>
                  </React.Fragment>
                ))}
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-200 font-medium">
              {filteredQuotaRows.map((row, idx) => (
                <tr
                  key={idx}
                  className={`hover:bg-blue-50/50 transition-colors ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/60'
                  }`}
                >
                  {/* Quota Name */}
                  <td className="py-3 px-4 font-bold text-gray-900 border-r border-gray-200">
                    {row.quotaName}
                  </td>

                  {/* Category Cells */}
                  {report.categories.map((cat) => {
                    const item = row.vacancies[cat.key];
                    if (!item) {
                      return (
                        <React.Fragment key={cat.key}>
                          <td className="py-3 px-2 text-center text-gray-400 border-r border-gray-200">-</td>
                          <td className="py-3 px-2 text-center text-gray-400 border-r border-gray-200">-</td>
                        </React.Fragment>
                      );
                    }
                    return (
                      <React.Fragment key={cat.key}>
                        <td className={`py-3 px-2 text-center border-r border-gray-200 ${item.g > 0 ? 'font-bold text-blue-700 bg-blue-50/80' : 'text-gray-500'}`}>
                          {item.g}
                        </td>
                        <td className={`py-3 px-2 text-center border-r border-gray-200 ${item.f > 0 ? 'font-bold text-emerald-700 bg-emerald-50/80' : 'text-gray-500'}`}>
                          {item.f}
                        </td>
                      </React.Fragment>
                    );
                  })}

                  {/* Row Total */}
                  <td className="py-3 px-3 text-center font-extrabold text-[#1A365D] bg-gray-100/80 text-sm">
                    {row.totalSeats}
                  </td>
                </tr>
              ))}
            </tbody>

            {/* Table Footer Total Summary */}
            <tfoot>
              <tr className="bg-[#1E3A8A] text-white font-bold text-center text-xs">
                <td className="py-3 px-4 text-left font-extrabold text-sm border-r border-blue-800">
                  Total Vacancy
                </td>
                {report.categories.map((cat) => {
                  const catTot = categoryTotals[cat.key];
                  return (
                    <React.Fragment key={`${cat.key}-total`}>
                      <td className="py-2.5 px-2 border-r border-blue-800 bg-[#1D4ED8]">
                        {catTot.g}
                      </td>
                      <td className="py-2.5 px-2 border-r border-blue-800 bg-[#2563EB]">
                        {catTot.f}
                      </td>
                    </React.Fragment>
                  );
                })}
                <td className="py-3 px-3 text-center font-black text-base bg-[#0F172A] text-[#DFAE24]">
                  {grandTotalVacancy}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Informational Guidance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-[#DFAE24]/30 shadow-xs">
            <h3 className="text-base font-bold text-[#1A365D] font-heading mb-3 flex items-center gap-2">
              <FaInfoCircle className="text-[#DFAE24]" /> CAP Admission Guidelines & Eligibility
            </h3>
            <ul className="space-y-2.5 text-xs text-gray-700">
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Admissions are strictly strictly conducted through MAH-CET Law Centralized Admission Process (CAP) rounds.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Candidates belonging to reserved categories (SC, ST, VJ/DT, NT, OBC, SEBC, EWS) must produce valid Caste & Validity Certificate during reporting.</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheckCircle className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Institutional & Management quota seats are filled as per State CET Cell guidelines.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#DFAE24]/30 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-[#1A365D] font-heading mb-3 flex items-center gap-2">
                <FaPhoneAlt className="text-[#DFAE24]" /> CAP Admission Helpdesk & Contact
              </h3>
              <p className="text-xs text-gray-600 mb-4">
                For assistance regarding CAP allotment, document verification, or institutional round application, contact our admission desk:
              </p>
              <div className="space-y-1.5 text-xs font-semibold text-gray-800">
                <p>📍 Location: Dr. Milind Yerne College of Law, Kosra (Pauni, Bhandara)</p>
                <p>🌐 CAP Portal: <a href="https://llb3cap26.mahacet.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">llb3cap26.mahacet.org</a></p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
              <span>Document Ref: 1400410812-LL.B.</span>
              <span>Updated: 30/09/2026</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CAPAdmissionPage;
