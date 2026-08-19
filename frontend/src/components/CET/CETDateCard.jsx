import React from 'react';
import { FaFilePdf, FaExternalLinkAlt, FaDownload, FaClock, FaListOl, FaCheckCircle, FaGraduationCap } from 'react-icons/fa';
import { isRecordPublished } from '../../data/cetData';

const CETDateCard = ({ record, onViewPdf }) => {
  const {
    id,
    displayDate,
    publicationTimeDisplay = "1:00 PM IST",
    title,
    roundName,
    categorySummary,
    fileUrl,
    fileType = "PDF",
    fileSize,
    candidates = []
  } = record;

  const published = isRecordPublished(record);

  return (
    <div className="p-5 md:p-6 bg-white rounded-2xl border border-[#DFAE24]/30 shadow-xs hover:shadow-md transition-all duration-300 relative group overflow-hidden">
      {/* Decorative top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#DFAE24] via-[#B88E1C] to-[#26130D]" />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
        
        {/* Left Column: Icon & Document Details */}
        <div className="flex items-start gap-4 flex-1 min-w-0">
          {/* PDF Badge Icon */}
          <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 border border-red-200/80 flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
            <FaFilePdf className="w-6 h-6 text-red-500" />
          </div>

          <div className="min-w-0 flex-1">
            {/* Top Date & Publication Badge */}
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-xs font-extrabold font-heading text-[#26130D] flex items-center gap-1 bg-[#FAF8F3] px-2.5 py-0.5 rounded-md border border-[#DFAE24]/30">
                <span>{displayDate}</span>
              </span>

              <span className="text-[11px] font-bold text-[#B88E1C] flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#F5F0E6] border border-[#DFAE24]/20">
                <FaClock className="w-3 h-3 text-[#B88E1C]" />
                <span>Published at {publicationTimeDisplay}</span>
              </span>

              {published ? (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 text-[10px] font-extrabold border border-emerald-200">
                  <FaCheckCircle className="w-2.5 h-2.5 text-emerald-600" />
                  <span>PUBLISHED</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 text-[10px] font-extrabold border border-amber-200">
                  <FaClock className="w-2.5 h-2.5 text-amber-600 animate-spin" />
                  <span>UPCOMING (1:00 PM IST)</span>
                </span>
              )}
            </div>

            {/* Title */}
            <h4 className="text-base md:text-lg font-bold font-heading text-[#26130D] leading-snug group-hover:text-[#43230F] transition-colors">
              {title}
            </h4>

            {/* Category / Merit Summary info */}
            {categorySummary && (
              <p className="text-xs md:text-sm text-[#756D63] font-body mt-1 flex items-center gap-1.5 flex-wrap">
                <span className="font-semibold text-[#B88E1C]">Categories:</span>
                <span className="text-[#211A17] font-medium">{categorySummary}</span>
              </p>
            )}

            {/* Sub Meta Info */}
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs font-body text-[#756D63]">
              <span className="inline-flex items-center gap-1 font-semibold text-[#26130D]">
                <FaGraduationCap className="w-3.5 h-3.5 text-[#B88E1C]" />
                <span>{roundName}</span>
              </span>

              {candidates.length > 0 && (
                <span className="inline-flex items-center gap-1 font-semibold text-[#B88E1C] bg-[#FAF8F3] px-2 py-0.5 rounded border border-[#DFAE24]/30">
                  <FaListOl className="w-3 h-3" />
                  <span>{candidates.length} Candidates Listed</span>
                </span>
              )}

              {fileSize && (
                <span className="text-[11px] text-[#756D63]">
                  Format: <strong className="uppercase">{fileType}</strong> ({fileSize})
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Actions (View PDF / Download PDF) */}
        <div className="flex flex-wrap lg:flex-col items-stretch lg:items-end justify-start gap-2.5 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-[#DFAE24]/20">
          {published ? (
            <>
              {/* View PDF Button */}
              <button
                onClick={() => onViewPdf(record)}
                className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 bg-[#26130D] hover:bg-[#3D2017] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition-all border border-[#26130D]/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#DFAE24]"
                aria-label={`View CET Results PDF for ${displayDate}`}
                title={`View CET Results PDF for ${displayDate}`}
              >
                <FaExternalLinkAlt className="w-3 h-3 text-[#DFAE24]" />
                <span>View PDF</span>
              </button>

              {/* Download PDF Button */}
              <a
                href={fileUrl}
                download={`CET-Result-${roundName.replace(/\s+/g, '-')}-${displayDate.replace(/\s+/g, '-')}.pdf`}
                className="flex-1 lg:flex-none inline-flex items-center justify-center gap-2 bg-[#DFAE24] hover:bg-[#F4C430] text-[#28150A] text-xs font-extrabold px-4 py-2.5 rounded-xl shadow-xs transition-all border border-[#B88E1C]/40 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#26130D]"
                aria-label={`Download CET Results PDF for ${displayDate}`}
                title={`Download CET Results PDF for ${displayDate}`}
              >
                <FaDownload className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </>
          ) : (
            <div className="w-full text-center px-4 py-2 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold">
              Available at 1:00 PM IST
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default CETDateCard;
