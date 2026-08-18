import React from 'react';
import { FaFilePdf, FaExternalLinkAlt, FaDownload, FaInfoCircle } from 'react-icons/fa';

const CETDocumentCard = ({ doc }) => {
  const {
    title,
    description,
    year,
    documentType = "Official CET Result",
    fileType = "PDF",
    fileSize,
    fileUrl,
    isAvailable = true
  } = doc;

  return (
    <div className="p-5 md:p-6 bg-white rounded-2xl border border-[#DFAE24]/30 shadow-xs hover:shadow-md transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-5">
        
        {/* Left Info Column */}
        <div className="flex items-start gap-4 min-w-0 flex-1">
          {/* PDF Icon Badge */}
          <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 border border-red-200/60 flex items-center justify-center shrink-0 shadow-xs">
            <FaFilePdf className="w-6 h-6 text-red-500" />
          </div>

          {/* Details */}
          <div className="min-w-0 flex-1">
            <h4 className="text-base md:text-lg font-bold font-heading text-[#26130D] leading-snug">
              {title}
            </h4>

            {description && (
              <p className="text-xs md:text-sm text-[#756D63] font-body mt-1 leading-relaxed">
                {description}
              </p>
            )}

            {/* Metadata Grid */}
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs font-body">
              <div className="flex items-center gap-1.5 text-[#211A17]">
                <span className="font-semibold text-[#B88E1C]">Academic Year:</span>
                <span className="font-bold">{year}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#211A17]">
                <span className="font-semibold text-[#B88E1C]">Document Type:</span>
                <span className="font-bold">{documentType}</span>
              </div>
              <div className="flex items-center gap-1.5 text-[#211A17]">
                <span className="font-semibold text-[#B88E1C]">Format:</span>
                <span className="font-bold uppercase">{fileType}</span>
              </div>
              {fileSize && (
                <div className="flex items-center gap-1.5 text-[#211A17]">
                  <span className="font-semibold text-[#B88E1C]">File Size:</span>
                  <span className="font-bold">{fileSize}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Buttons / Status Column */}
        <div className="flex sm:flex-col items-center sm:items-end justify-start gap-2.5 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#DFAE24]/20">
          {isAvailable && fileUrl ? (
            <>
              {/* View PDF Button */}
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#26130D] hover:bg-[#3D2017] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-xs transition-all border border-[#26130D]/20 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#DFAE24]"
                title={`View ${year} CET Result PDF`}
              >
                <FaExternalLinkAlt className="w-3 h-3 text-[#DFAE24]" />
                <span>View PDF</span>
              </a>

              {/* Download PDF Button */}
              <a
                href={fileUrl}
                download={`CET-Result-${doc.yearSlug || year}.pdf`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#DFAE24] hover:bg-[#F4C430] text-[#28150A] text-xs font-extrabold px-4 py-2.5 rounded-xl shadow-xs transition-all border border-[#B88E1C]/40 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#26130D]"
                title={`Download ${year} CET Result PDF`}
              >
                <FaDownload className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
            </>
          ) : (
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 text-xs font-bold">
              <FaInfoCircle className="w-3.5 h-3.5 text-amber-600" />
              <span>CET Result Coming Soon</span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default CETDocumentCard;
