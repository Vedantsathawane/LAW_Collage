import React from 'react';
import { FaFileInvoice, FaCheckDouble, FaDownload } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Timeline from '../../components/ui/Timeline';
import Card from '../../components/ui/Card';

const Procedure = () => {
  const steps = [
    { year: "Phase 1: Apply", title: "Online Registration & Portal Upload", description: "Candidates register on the state centralized admission portal, select GWLC as their preferred institution, and upload marks records." },
    { year: "Phase 2: Cut-offs", title: "Cut-off Generation & Merit Verification", description: "Merit lists are declared based on aggregate qualifying exams (10+2 scores or CLAT ranks for UG, graduation averages for LL.B)." },
    { year: "Phase 3: Counseling", title: "Document Verification & Counseling", description: "Verified candidates report to the GWLC campus auditorium with original files for physical authentication by HOD committees." },
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
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Admission Procedures & Timelines" subtitle="Admissions" centered={true} />

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
            <Card className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
              <h3 className="text-lg font-bold font-heading text-primary-dark mb-5 border-b border-slate-100 pb-2.5 flex items-center gap-2">
                <FaCheckDouble className="text-secondary" />
                <span>Documents Checklist (At Counseling)</span>
              </h3>
              
              <div className="space-y-3.5">
                {docs.map((doc, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-success text-xs mt-1">✔</span>
                    <span className="text-xs md:text-sm text-slate-600 font-medium">{doc}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="lg:col-span-4 bg-white border border-slate-100 shadow-premium rounded-2xl p-6.5 text-center flex flex-col items-center">
            <FaFileInvoice className="text-slate-300 w-12 h-12 mb-3" />
            <h4 className="text-sm font-bold font-heading text-primary-dark">
              Enrollment Brochure
            </h4>
            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
              Download the complete brochure detailing eligibility metrics, reservation rules, and sport quota details.
            </p>
            <button
              onClick={() => alert('Downloading Admission Brochure PDF')}
              className="mt-6 flex items-center gap-2 bg-primary hover:bg-primary-light text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md cursor-pointer"
            >
              <FaDownload className="w-3 h-3" />
              <span>Download Prospectus</span>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Procedure;
