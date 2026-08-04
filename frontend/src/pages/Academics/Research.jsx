import React from 'react';
import { FaFlask, FaRegLightbulb, FaAward, FaFileAlt } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';

const Research = () => {
  const statistics = [
    { label: "Active Grants", count: "₹1.45 Cr" },
    { label: "Indexed Publications", count: "240+" },
    { label: "Registered Patents", count: "4 Filed" },
    { label: "Ph.D. Scholars Guided", count: "35+" }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Research & Scholarly Pursuits" subtitle="Research Cell" />

        {/* Highlight Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12.5 text-center">
          {statistics.map((s, idx) => (
            <Card key={idx} className="p-6 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
              <p className="text-xl md:text-3xl font-extrabold text-primary font-mono leading-none">{s.count}</p>
              <p className="text-xs font-semibold text-slate-400 mt-2 uppercase tracking-wide">{s.label}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-8 space-y-6 text-slate-600 leading-relaxed text-sm md:text-base">
            <h3 className="text-xl font-bold font-heading text-primary-dark mb-3">
              Fostering Legal Scholarship & Law Journals
            </h3>
            <p>
              The Research Promotion Cell (RPC) at GWLC acts as the steering committee, encouraging faculty and LL.M. scholars to submit research proposals to central agencies like ICSSR and UGC. We provide specialized seed grants up to ₹1 Lakh for promising legal investigations.
            </p>
            <p>
              Our research focuses heavily on Constitutional Amendments, Judicial Activism, Alternative Dispute Resolution (ADR), Cyber security regulations, and Corporate compliance reforms. Regular peer reviews ensure high citation rates in legal indices, SCC Online, and UGC Care lists.
            </p>
          </div>

          <div className="lg:col-span-4 bg-white border border-slate-100 shadow-premium rounded-2xl p-6.5">
            <h4 className="text-sm font-bold font-heading text-primary-dark mb-4 uppercase tracking-wider border-b border-slate-100 pb-2">
              RPC Core Guidelines
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-600 font-medium">
              <li className="flex items-center gap-2.5">
                <FaFileAlt className="text-secondary w-4 h-4 shrink-0" />
                <span>100% funding support for publication processing fees in Q1 journals.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaAward className="text-secondary w-4 h-4 shrink-0" />
                <span>Financial assistance for attending international IEEE / Springer conferences.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaFlask className="text-secondary w-4 h-4 shrink-0" />
                <span>Modern computing servers and liquid helium access for experimental setups.</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Research;
