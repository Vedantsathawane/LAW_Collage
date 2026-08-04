import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';

const Management = () => {
  const members = [
    { name: "Shri Vikramaditya Singh", role: "Chairman", details: "Retd. IAS Officer, State Administration Specialist" },
    { name: "Smt. Suchitra Sen", role: "Treasurer", details: "Senior Chartered Accountant & Finance Consultant" },
    { name: "Dr. G.S. Krishnan", role: "Member Secretary", details: "Ex-Officio Principal, GWLC Academic Head" },
    { name: "Dr. Ramesh Chandra", role: "Government Nominee", details: "Director, State Higher Education Board Authority" },
    { name: "Prof. H.S. Kapoor", role: "University Representative", details: "Professor of Law, State Central University" },
    { name: "Mr. Nandan Nilekar", role: "Bar Council Representative", details: "Senior Advocate, State High Court Panels" }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Our Leadership & Governance" subtitle="Management" centered={true} />

        <div className="max-w-4xl mx-auto space-y-6">
          <Card className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
            <h3 className="text-xl font-bold font-heading text-primary-dark mb-4 border-b border-slate-100 pb-2">
              Governing Council Structure
            </h3>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-6">
              The Governing Council coordinates the strategic policies, infrastructural development, financial budgets, and recruitment guidelines for GWLC. The council contains representatives from the State Government, academic law universities, Bar Council panels, and institutional faculty nominees.
            </p>

            {/* Members directory */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {members.map((m, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-xl group hover:border-primary/20 transition-all duration-300">
                  <FaUserCircle className="text-slate-300 w-10 h-10 group-hover:text-primary transition-colors shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-primary-dark truncate">{m.name}</p>
                    <p className="text-[10px] font-bold text-secondary uppercase tracking-wider">{m.role}</p>
                    <p className="text-[11px] text-slate-400 truncate mt-0.5">{m.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Management;
