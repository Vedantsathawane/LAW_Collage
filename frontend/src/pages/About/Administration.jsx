import React from 'react';
import { FaUserCircle, FaEnvelope, FaBuilding } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';

const Administration = () => {
  const sections = [
    {
      title: "Office of the Registrar",
      head: "Shri Anupam Sen",
      email: "registrar@gwlc.edu.in",
      duties: "Coordinates admissions data, state board affiliations, examinations registration, and general academic regulations."
    },
    {
      title: "Accounts & Audit Block",
      head: "Smt. Preeti Banerjee",
      email: "accounts@gwlc.edu.in",
      duties: "Manages student fee payments, scholarship disbursements, DST research funds, and institutional audit checklists."
    },
    {
      title: "Establishment Section",
      head: "Shri Subhash Nair",
      email: "establishment@gwlc.edu.in",
      duties: "Coordinates recruitments, staff allocations, guest faculty payrolls, and campus infrastructure maintenance tenders."
    },
    {
      title: "Academic & Student Affairs",
      head: "Dr. Jayant Deshmukh",
      email: "academic.admin@gwlc.edu.in",
      duties: "Coordinates student ID cards, hostel allocations, bus passes, and student grievance portal queries."
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Administrative Divisions" subtitle="Administration" centered={true} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {sections.map((sec, idx) => (
            <Card key={idx} className="p-6 bg-white border border-slate-100 shadow-premium flex flex-col justify-between" hoverEffect={true}>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary shrink-0">
                    <FaBuilding className="w-5 h-5" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold font-heading text-primary-dark">
                    {sec.title}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-6">
                  {sec.duties}
                </p>
              </div>

              {/* Head Contact Block */}
              <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FaUserCircle className="text-slate-300 w-8 h-8 shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[9px] font-bold text-slate-400 uppercase leading-none">Officer In-Charge</p>
                    <p className="text-xs font-semibold text-primary-dark mt-0.5 truncate">{sec.head}</p>
                  </div>
                </div>
                <a
                  href={`mailto:${sec.email}`}
                  className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-accent font-semibold"
                >
                  <FaEnvelope className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Email Contact</span>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Administration;
