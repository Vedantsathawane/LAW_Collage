import React from 'react';
import { FaUsers, FaUserShield, FaClipboardCheck } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import { COMMITTEE_MEMBERS } from '../../data/mockData';

const Committees = () => {
  // Group members by committee
  const getMembersByCommittee = (name) => {
    return COMMITTEE_MEMBERS.filter((m) => m.committee.toLowerCase().includes(name.toLowerCase()));
  };

  const categories = [
    { name: "Anti-Ragging Squad", list: getMembersByCommittee("Anti-Ragging"), desc: "Performs surprise inspections in common squares, cafeterias, and hostels, enforcing zero tolerance rules." },
    { name: "Grievance Cell", list: getMembersByCommittee("Grievance"), desc: "Addresses student complaints regarding evaluation coordinates, library assets, or dining hygiene." },
    { name: "Internal Complaints Committee (ICC)", list: getMembersByCommittee("ICC"), desc: "Maintains a safe, gender-equal working and learning environment, addressing complaints under POSH rules." }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Institutional Committees & Cells" subtitle="Student Corner" centered={true} />

        <div className="max-w-4xl mx-auto space-y-8">
          {categories.map((cat, idx) => (
            <Card key={idx} className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
              <div className="flex items-center gap-3 mb-3.5 border-b border-slate-100 pb-3">
                <FaUsers className="text-secondary w-6 h-6 shrink-0" />
                <div>
                  <h3 className="text-lg font-bold font-heading text-primary-dark">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 font-medium">{cat.desc}</p>
                </div>
              </div>

              {/* Members of this committee */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {cat.list.map((m, i) => (
                  <div key={i} className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                    <p className="text-sm font-bold text-primary-dark">{m.name}</p>
                    <p className="text-[10px] font-bold text-secondary uppercase tracking-wider mt-0.5">{m.role}</p>
                    <p className="text-[11px] text-slate-500 font-mono mt-2">Ph: {m.contact}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Committees;
