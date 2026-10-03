import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaExternalLinkAlt, FaCalendarAlt, FaPrint, FaInfoCircle, FaCheckCircle, FaBuilding, FaPhoneAlt, FaTable } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import { capVacancyReport } from '../../data/capData';

const CAPVacancyReportPage = () => {
  const report = capVacancyReport;

  // Calculate vacancy totals per category column
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="pt-8 pb-20 bg-[#FAF8F3] font-body min-h-[85vh]">
      <Helmet>
        <title>State CAP Vacancy Report | Dr. Milind Yerne College of Law</title>
        <meta
          name="description"
          content="Official Centralized Admission Process (CAP) Vacancy Report for LL.B. (3 Yrs) at Dr. Milind Yerne College of Law Kosra, Pauni, Bhandara."
        />
        <link rel="canonical" href="https://drmycollegeoflaw.org/cap-admission/vacancy-report" />
      </Helmet>

      <Container>
        {/* Top Hero Banner */}
        <div className="relative overflow-hidden mb-8 select-none text-center max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-block text-[11px] md:text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#FAF8F3] text-[#B88E1C] border border-[#DFAE24]/40 shadow-xs mb-3 font-heading"
          >
            Official CAP Portal • Choice Code: 1400410812
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#26130D] leading-tight mb-3"
          >
            State CAP Vacancy Report
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base text-[#756D63] font-medium font-body leading-relaxed max-w-2xl mx-auto"
          >
            Official seat vacancy matrix for <strong className="text-[#26130D]">LL.B. (3 Yrs.)</strong> un-aided English medium co-education program as of 30/09/2026.
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

        {/* Stat Summary Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10">
          <div className="border border-[#DFAE24]/40 rounded-2xl bg-white p-5 text-center shadow-xs">
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#756D63] mb-1 font-heading">
              Total Vacant Seats
            </p>
            <p className="text-3xl font-extrabold text-[#26130D] font-heading">{grandTotalVacancy}</p>
            <span className="inline-block mt-1 text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F5F0E6] text-[#B88E1C] border border-[#DFAE24]/30">
              All Quotas
            </span>
          </div>

          <div className="border border-[#DFAE24]/40 rounded-2xl bg-white p-5 text-center shadow-xs">
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#756D63] mb-1 font-heading">
              Maharashtra State
            </p>
            <p className="text-3xl font-extrabold text-[#B88E1C] font-heading">
              {report.quotaRows[0].totalSeats}
            </p>
            <span className="inline-block mt-1 text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F5F0E6] text-[#B88E1C] border border-[#DFAE24]/30">
              MS Quota
            </span>
          </div>

          <div className="border border-[#DFAE24]/40 rounded-2xl bg-white p-5 text-center shadow-xs">
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#756D63] mb-1 font-heading">
              OMS Quota
            </p>
            <p className="text-3xl font-extrabold text-[#26130D] font-heading">
              {report.quotaRows[1].totalSeats}
            </p>
            <span className="inline-block mt-1 text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F5F0E6] text-[#756D63] border border-[#DFAE24]/30">
              Outside MH
            </span>
          </div>

          <div className="border border-[#DFAE24]/40 rounded-2xl bg-white p-5 text-center shadow-xs">
            <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#756D63] mb-1 font-heading">
              Management
            </p>
            <p className="text-3xl font-extrabold text-[#26130D] font-heading">
              {report.quotaRows[4].totalSeats}
            </p>
            <span className="inline-block mt-1 text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F5F0E6] text-[#B88E1C] border border-[#DFAE24]/30">
              Inst. Quota
            </span>
          </div>

          <div className="col-span-2 md:col-span-1 border border-[#DFAE24]/40 rounded-2xl bg-white p-5 text-center shadow-xs">
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
          </div>
        </div>

        {/* Actions Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold font-heading text-[#26130D]">
              Seat Matrix & Reservation Breakdown
            </h2>
            <p className="text-xs text-[#756D63] mt-0.5 flex items-center gap-1.5">
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

        {/* Main Banner & Table */}
        <div className="border border-[#DFAE24]/40 rounded-2xl bg-white shadow-xs overflow-hidden mb-10">
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

              <div className="bg-[#43230F] p-3 rounded-xl border border-[#DFAE24]/20 text-xs text-[#FAF8F3] font-medium">
                <div className="flex flex-wrap items-center gap-1.5 leading-relaxed">
                  <span className="font-bold text-[#FAF8F3]">Parallel Vacancy:</span>
                  <span className="text-[#DFAE24] font-extrabold bg-white/10 px-2 py-0.5 rounded border border-[#DFAE24]/30 text-[11px]">PH - 0</span>
                  <span className="text-[#DFAE24] font-extrabold bg-white/10 px-2 py-0.5 rounded border border-[#DFAE24]/30 text-[11px]">Defence - 2</span>
                  <span className="text-[#DFAE24] font-extrabold bg-white/10 px-2 py-0.5 rounded border border-[#DFAE24]/30 text-[11px]">Orphan - 0</span>
                </div>
                <p className="text-[11px] text-gray-300 mt-1">As of Date : <strong>30/09/2026</strong></p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse min-w-[950px]">
              <thead>
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
                {report.quotaRows.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-[#FAF8F3] transition-colors ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F3]/50'
                    }`}
                  >
                    <td className="py-3 px-4 font-extrabold font-heading text-[#26130D] border-r border-[#DFAE24]/20">
                      {row.quotaName}
                    </td>

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

                    <td className="py-3 px-3 text-center font-extrabold font-heading text-[#26130D] bg-[#F5F0E6] text-sm">
                      {row.totalSeats}
                    </td>
                  </tr>
                ))}
              </tbody>

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
      </Container>
    </div>
  );
};

export default CAPVacancyReportPage;
