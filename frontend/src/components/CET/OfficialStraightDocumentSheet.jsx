import React from 'react';
import { FaPrint, FaDownload, FaCheckCircle, FaStamp } from 'react-icons/fa';

const OfficialStraightDocumentSheet = ({ record }) => {
  if (!record) return null;

  const {
    fullHeaderTitle,
    displayDate,
    roundName,
    sections = [],
    candidates = [],
    fileUrl,
    publishedNote = "1st Published 1:00 PM"
  } = record;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Control Bar for Print/Download */}
      <div className="w-full max-w-4xl mb-4 flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-xl border border-[#DFAE24]/30 shadow-xs print:hidden">
        <div className="flex items-center gap-2 text-xs text-[#26130D] font-bold">
          <FaCheckCircle className="w-4 h-4 text-emerald-600" />
          <span>Official Straight Merit List Document Sheet (Upright Orientation)</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 bg-[#26130D] hover:bg-[#3D2017] text-[#DFAE24] text-xs font-bold px-3.5 py-1.5 rounded-lg transition-all cursor-pointer shadow-xs"
          >
            <FaPrint className="w-3 h-3" />
            <span>Print Straight Sheet</span>
          </button>
          <a
            href={fileUrl}
            download
            className="inline-flex items-center gap-1.5 bg-[#DFAE24] hover:bg-[#F4C430] text-[#28150A] text-xs font-extrabold px-3.5 py-1.5 rounded-lg transition-all cursor-pointer shadow-xs"
          >
            <FaDownload className="w-3 h-3" />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {/* STRAIGHT OFFICIAL DOCUMENT CANVAS (A4 Ratio Sheet) */}
      <div
        id="printable-merit-document"
        className="w-full max-w-4xl bg-white text-black p-6 sm:p-10 border border-gray-300 shadow-xl rounded-sm font-serif select-text relative leading-normal print:shadow-none print:border-0 print:p-0 print:m-0 print:w-full"
      >
        {/* Top Header */}
        <div className="text-center border-b-2 border-black pb-4 mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wider uppercase font-serif text-black mb-1">
            MERIT LIST
          </h1>
          <h2 className="text-lg sm:text-xl font-bold text-black font-serif">
            Dr. Milind Yerne College of Law, Kosara Kondha
          </h2>
          <p className="text-xs sm:text-sm font-semibold text-gray-800 mt-1 font-serif">
            CET CAP Round-IV (Institutional Round) 2025-26 | L.L.B. (3 Year Course) |
          </p>
          <div className="mt-2 text-sm font-extrabold uppercase tracking-wide text-black border-t border-black pt-1 inline-block px-4">
            {fullHeaderTitle || `${roundName} | ${displayDate}`}
          </div>
        </div>

        {/* Official Merit Grid Table */}
        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse border-2 border-black text-xs sm:text-sm font-serif">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-black font-bold text-center">
                <th className="border-r border-black p-2 w-12">Sr. No.</th>
                <th className="border-r border-black p-2 text-left">Name of Candidate</th>
                <th className="border-r border-black p-2 w-24">Inter-SE-Merit</th>
                <th className="border-r border-black p-2 w-28">Merit List Sr. No.</th>
                <th className="border-r border-black p-2 w-28">CET Percentile</th>
                <th className="p-2 w-24">Category</th>
              </tr>
            </thead>
            <tbody>
              {sections && sections.length > 0 ? (
                sections.map((sec, secIdx) => (
                  <React.Fragment key={secIdx}>
                    {/* Category Header Row */}
                    <tr className="bg-gray-200 border-t border-b border-black font-extrabold">
                      <td colSpan={6} className="p-2 uppercase text-left tracking-wide font-sans text-xs">
                        {sec.categoryName}
                      </td>
                    </tr>
                    {/* Items */}
                    {sec.items.map((item, itemIdx) => (
                      <tr key={itemIdx} className="border-b border-gray-400 hover:bg-yellow-50/50">
                        <td className="border-r border-black p-2 text-center font-semibold">
                          {item.srNo}
                        </td>
                        <td className="border-r border-black p-2 font-bold text-left">
                          {item.name}
                        </td>
                        <td className="border-r border-black p-2 text-center">
                          {item.interSeMerit}
                        </td>
                        <td className="border-r border-black p-2 text-center font-bold">
                          {item.meritSrNo}
                        </td>
                        <td className="border-r border-black p-2 text-center font-bold">
                          {item.percentile}
                        </td>
                        <td className="p-2 text-center font-semibold uppercase">
                          {item.category}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))
              ) : (
                candidates.map((cand, idx) => (
                  <tr key={idx} className="border-b border-gray-400">
                    <td className="border-r border-black p-2 text-center font-semibold">{cand.srNo}</td>
                    <td className="border-r border-black p-2 font-bold text-left">{cand.name}</td>
                    <td className="border-r border-black p-2 text-center">{cand.interSeMerit}</td>
                    <td className="border-r border-black p-2 text-center font-bold">{cand.meritSrNo}</td>
                    <td className="border-r border-black p-2 text-center font-bold">{cand.percentile}</td>
                    <td className="p-2 text-center font-semibold uppercase">{cand.category}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Footer Stamps & Signatures Block */}
        <div className="pt-6 border-t border-dashed border-gray-400 flex flex-col sm:flex-row items-center justify-between gap-6 font-sans">
          
          {/* Left Handwritten Publication Box */}
          <div className="border-2 border-blue-900/60 bg-blue-50/40 p-3 rounded-lg text-blue-950 text-xs font-semibold leading-snug w-48 relative transform -rotate-1 shadow-xs">
            <div className="font-extrabold italic text-sm text-blue-900 border-b border-blue-300 pb-1 mb-1">
              1st Published
            </div>
            <div>{displayDate}</div>
            <div className="font-bold">1:00 pm</div>
            <div className="italic text-[10px] text-blue-800 mt-1 font-serif">Verified Official Copy</div>
          </div>

          {/* Center Seal Stamp */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full border-4 border-double border-red-800/70 flex flex-col items-center justify-center p-1 text-[9px] font-extrabold text-red-900 uppercase tracking-tighter leading-none transform rotate-3 shadow-xs">
              <FaStamp className="w-4 h-4 mb-0.5 text-red-700" />
              <span>DR. MILIND YERNE</span>
              <span className="text-[7px] font-bold">COLLEGE OF LAW</span>
              <span className="text-[7px] text-red-700">KOSARA KONDHA</span>
              <span className="font-black text-[8px] mt-0.5">SEAL</span>
            </div>
          </div>

          {/* Right Signature Block */}
          <div className="text-center sm:text-right font-body">
            <div className="h-10 border-b border-gray-400 w-44 mx-auto sm:ml-auto mb-1 flex items-end justify-center sm:justify-end pb-1 italic text-xs text-gray-600 font-serif">
              [Authorized Signature]
            </div>
            <div className="text-xs font-extrabold text-black font-sans uppercase">
              Principal / Incharge
            </div>
            <div className="text-xs font-semibold text-gray-800">
              Dr. Milind Yerne College of Law
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OfficialStraightDocumentSheet;
