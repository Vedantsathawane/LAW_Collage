import React from 'react';
import { FaAward, FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';

const NAAC = () => {
  const reports = [
    { title: "Self Study Report (SSR) - Cycle 3 (Submitted Nov 2025)", size: "14.2 MB", type: "PDF" },
    { title: "NAAC Peer Team Evaluation Report - Cycle 3 (June 2026)", size: "3.8 MB", type: "PDF" },
    { title: "Institutional Grade Sheet & CGPA Certificate (Cycle 3)", size: "1.2 MB", type: "PDF" },
    { title: "Student Satisfaction Survey (SSS) Analysis Report", size: "2.5 MB", type: "PDF" }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="NAAC Accreditation Disclosures" subtitle="Institutional NAAC" centered={true} />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* A++ Highlight Banner Card */}
          <Card className="p-8 bg-gradient-to-tr from-primary-dark to-primary text-white border-none relative overflow-hidden" hoverEffect={false}>
            <div className="absolute top-0 right-0 transform translate-x-12 -translate-y-12 w-48 h-48 bg-white/5 rounded-full pointer-events-none" />
            
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center text-primary-dark shrink-0 shadow-md">
                <FaAward className="w-10 h-10" />
              </div>
              <div className="text-center md:text-left">
                <span className="text-[10px] font-bold text-secondary uppercase bg-white/10 px-2.5 py-1 rounded-sm tracking-wider">
                  Accredited Grade
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold font-heading text-white mt-1.5">
                  NAAC A++ (CGPA: 3.78 / 4.0)
                </h3>
                <p className="text-xs md:text-sm text-slate-300 mt-2 font-medium">
                  Highest rating grade awarded for State Government Colleges in Cycle 3 Evaluation (June 2026).
                </p>
              </div>
            </div>
          </Card>

          {/* SSR Documents List */}
          <Card className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
            <h3 className="text-lg font-bold font-heading text-primary-dark mb-5 border-b border-slate-100 pb-2">
              Accreditation Reports & SSR Documents
            </h3>
            
            <div className="space-y-4">
              {reports.map((rep, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 bg-slate-50 border border-slate-100 rounded-xl gap-3">
                  <div className="flex items-start gap-3">
                    <FaFilePdf className="text-red-500 w-5 h-5 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs md:text-sm font-semibold text-primary-dark leading-tight">{rep.title}</p>
                      <p className="text-[10px] text-slate-400 mt-1 font-mono uppercase">{rep.type} • {rep.size}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => alert(`Downloading document: ${rep.title}`)}
                    className="flex items-center justify-center gap-1.5 bg-white border border-slate-200 hover:border-primary hover:text-primary text-slate-600 text-xs font-bold px-3.5 py-2 rounded-lg transition-all cursor-pointer self-start sm:self-auto shrink-0 shadow-xs"
                  >
                    <span>Download</span>
                    <FaExternalLinkAlt className="w-2.5 h-2.5" />
                  </button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default NAAC;
