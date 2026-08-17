import React from 'react';
import { FaFilePdf, FaDownload, FaSearch } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import { STUDENT_RULES, SPECIAL_FEATURES } from '../../data/mockData';

const Downloads = () => {
  const prospectusDownloads = [
    { id: 1, title: "Dr. Milind Yerne College of Law - Official Prospectus (3 & 5 Yr LL.B.)", size: "4.8 MB", date: "2026-27 Session", type: "PDF" },
    { id: 2, title: "LL.B. 3 Years & 5 Years Semester Course Syllabus (RTMNU Affiliated)", size: "3.5 MB", date: "Academic Year 2026", type: "PDF" },
    { id: 3, title: "Bar Council of India (BCI) & State Govt. Approval Declaration", size: "1.2 MB", date: "Official Document", type: "PDF" },
    { id: 4, title: "Rules for Students & Code of Conduct (21 Rules Sheet)", size: "650 KB", date: "Student Directive", type: "PDF" }
  ];

  return (
    <div className="pt-24 pb-16 bg-[#FAF8F3] font-body">
      <Container>
        <SectionTitle title="Official Prospectus, Rules & Syllabi" subtitle="Student Corner" centered={true} />

        {/* Downloadable Documents */}
        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          <h3 className="text-lg font-bold font-heading text-primary-dark mb-4 border-b border-slate-200 pb-2">
            Prospectus & Official Downloads
          </h3>
          {prospectusDownloads.map((doc) => (
            <Card key={doc.id} className="p-5 bg-white border border-slate-100 shadow-premium flex flex-col sm:flex-row sm:items-center justify-between gap-4 group" hoverEffect={true}>
              <div className="flex items-start gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <FaFilePdf className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm md:text-base font-bold text-primary-dark truncate leading-snug group-hover:text-accent transition-colors">
                    {doc.title}
                  </h4>
                  <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase mt-1">
                    Released: {doc.date} • Size: {doc.size} • Format: {doc.type}
                  </p>
                </div>
              </div>

              <button
                onClick={() => alert(`Downloading official file: ${doc.title}`)}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md cursor-pointer shrink-0 transition-colors"
              >
                <FaDownload className="w-3.5 h-3.5" />
                <span>Download</span>
              </button>
            </Card>
          ))}
        </div>

        {/* Dress Code Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-6 md:p-8 bg-white border border-[#DFAE24]/40 shadow-premium relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFAE24]/15 rounded-full blur-xl pointer-events-none -mr-8 -mt-8" />
            <h3 className="text-xl font-bold font-heading mb-4 text-[#26130D] border-b border-[#DFAE24]/30 pb-2">
              Prescribed College Dress Code (Prospectus Page 7)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm">
              <div className="p-4 bg-[#FAF8F3] rounded-xl border border-[#DFAE24]/30">
                <p className="font-extrabold text-[#B88E1C] uppercase tracking-wide mb-1 font-heading">Boys Dress Code:</p>
                <p className="text-[#211A17] font-semibold">Black full pant and White shirt</p>
              </div>
              <div className="p-4 bg-[#FAF8F3] rounded-xl border border-[#DFAE24]/30">
                <p className="font-extrabold text-[#B88E1C] uppercase tracking-wide mb-1 font-heading">Girls Dress Code:</p>
                <p className="text-[#211A17] font-semibold">Black Salwar and White Kurta OR Black Saree & White blouse</p>
                <p className="text-[11px] text-[#DC2626] font-extrabold mt-1.5">(Skirts, Jeans, Tops, T-Shirts are strictly prohibited)</p>
              </div>
            </div>
          </Card>
        </div>

        {/* 21 Rules for Students */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
            <h3 className="text-xl font-bold font-heading text-primary-dark mb-6 border-b border-slate-100 pb-3">
              Rules for Students (Prospectus Pages 5 & 6)
            </h3>
            <div className="space-y-3.5 text-xs md:text-sm text-slate-700 leading-relaxed font-medium">
              {STUDENT_RULES.map((rule, idx) => (
                <div key={idx} className="p-3 bg-slate-50 border border-slate-100 rounded-xl flex items-start gap-3">
                  <span className="text-amber-700 font-bold shrink-0">{idx + 1}.</span>
                  <p>{rule.replace(/^\d+\.\s*/, '')}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Downloads;
