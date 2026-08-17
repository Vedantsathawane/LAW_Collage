import React from 'react';
import { FaFileInvoice, FaCheckDouble, FaDownload, FaExternalLinkAlt, FaExclamationTriangle } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Timeline from '../../components/ui/Timeline';
import Card from '../../components/ui/Card';
import { openGoogleForm } from '../../config/institutionConfig';

const Procedure = () => {
  const steps = [
    { year: "Phase 1: Apply", title: "Online Registration & Application", description: "Candidates register through the official Google Student Application Form, select Dr. Milind Yerne College of Law as their preferred institution, and submit required details." },
    { year: "Phase 2: Merit List", title: "Merit List Publication", description: "Selection lists are generated based on qualifying examination scores and university reservation norms." },
    { year: "Phase 3: Counseling", title: "Document Verification & Admissions", description: "Verified candidates report to the college campus with original files for physical verification by admission committees." },
    { year: "Phase 4: Finish", title: "Fee Receipt & Class Induction", description: "Upon committee approval, candidates pay fees online, obtain institutional email credentials, and attend the general orientation." }
  ];

  const docs = [
    "10th & 12th Standard Original Marksheets with 3 attested photocopies",
    "Transfer Certificate (TC) & Migration Certificate from last attended board",
    "Recent Character / Conduct Certificate from the Institution head",
    "Category / Caste Certificate (SC/ST/OBC) issued by competent revenue authority",
    "Income Certificate (if applying for Merit-cum-Means scholarship)",
    "Three recent passport-sized color photographs in formal attire"
  ];

  return (
    <div className="pt-24 pb-16 bg-[#FAF8F3] font-body">
      <Container>
        <SectionTitle title="Admission Procedures & Timelines" subtitle="Admissions" centered={true} />

        {/* 60-Seat Notice Banner */}
        <div className="max-w-4xl mx-auto mb-10 p-6 bg-[#26130D] border-2 border-[#DFAE24] rounded-2xl text-[#FAF8F3] shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#DFAE24] uppercase tracking-wider">
              <FaExclamationTriangle className="w-3.5 h-3.5" />
              Limited Seat Capacity
            </span>
            <h3 className="text-lg md:text-xl font-bold font-heading text-[#FAF8F3]">
              Limited Admission — Only 60 Seats Available
            </h3>
            <p className="text-xs text-[#FAF8F3]/80">
              Applications are evaluated strictly on merit for the 60 sanctioned seats in LL.B. programs.
            </p>
          </div>
          <button
            onClick={openGoogleForm}
            className="bg-[#DFAE24] hover:bg-[#F4C430] text-[#26130D] font-extrabold text-xs px-6 py-3 rounded-xl shadow-lg transition-all border border-[#DFAE24]/50 flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>Fill Google Application Form</span>
            <FaExternalLinkAlt className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Timeline Row */}
        <div className="mb-16">
          <h3 className="text-xl font-bold font-heading text-primary-dark text-center mb-10">
            Yearly Enrollment Roadmap
          </h3>
          <Timeline items={steps} />
        </div>

        {/* Required Documents Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
          <div className="lg:col-span-8">
            <Card className="p-6 md:p-8 bg-white border border-[#DFAE24]/40 shadow-premium relative overflow-hidden" hoverEffect={false}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFAE24]/15 rounded-full blur-xl pointer-events-none -mr-8 -mt-8" />
              <h3 className="text-lg font-bold font-heading text-[#26130D] mb-5 border-b border-[#DFAE24]/30 pb-2.5 flex items-center gap-2 relative z-10">
                <FaCheckDouble className="text-[#B88E1C]" />
                <span>Documents Checklist (At Counseling)</span>
              </h3>
              
              <div className="space-y-3.5 relative z-10">
                {docs.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-[#B88E1C] font-extrabold text-xs mt-0.5">✔</span>
                    <span className="text-xs md:text-sm text-[#211A17] font-semibold">{doc}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="lg:col-span-4 bg-white border border-[#DFAE24]/40 shadow-premium rounded-2xl p-6.5 text-center flex flex-col items-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFAE24]/15 rounded-full blur-xl pointer-events-none -mr-8 -mt-8" />
            <div className="relative z-10 flex flex-col items-center">
              <FaFileInvoice className="text-[#B88E1C] w-12 h-12 mb-3" />
              <h4 className="text-sm font-bold font-heading text-[#26130D]">
                Enrollment Brochure
              </h4>
              <p className="text-[11px] text-[#211A17] font-medium mt-1 leading-relaxed">
                Download the complete brochure detailing eligibility metrics, reservation rules, and sport quota details.
              </p>
              <button
                onClick={() => alert('Downloading Admission Brochure PDF')}
                className="mt-6 flex items-center gap-2 bg-[#26130D] hover:bg-[#3D2017] text-[#DFAE24] text-xs font-bold px-4 py-2.5 rounded-xl shadow-md cursor-pointer border border-[#DFAE24]/40 transition-colors"
              >
                <FaDownload className="w-3 h-3" />
                <span>Download Prospectus</span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Procedure;
