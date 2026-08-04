import React from 'react';
import { FaHandsHelping, FaHeartbeat, FaLeaf, FaUserCircle } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';

const NSS = () => {
  const campaigns = [
    { icon: <FaHeartbeat className="text-secondary w-5 h-5" />, title: "Annual Blood Donation Drives", desc: "Collaborates with the Red Cross Society to host annual blood donations, securing 150+ units from volunteer student donors." },
    { icon: <FaHandsHelping className="text-secondary w-5 h-5" />, title: "Village Literacy Campaigns", desc: "NSS volunteers conduct weekend classes in adopted suburban sectors, teaching arithmetic and basic legal awareness to local kids." },
    { icon: <FaLeaf className="text-secondary w-5 h-5" />, title: "Tree Plantation Initiatives", desc: "Regular 'Green Campus, Clean Campus' plantation runs, planting over 400 saplings across Mall Road squares annually." }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="National Service Scheme (NSS)" subtitle="Student Corner" centered={true} />

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
            <h3 className="text-xl font-bold font-heading text-primary-dark mb-4">
              NSS Unit: 'Not Me But You'
            </h3>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-6">
              The NSS wing at GWLC encourages students to build a strong civic sense by participating directly in community service projects. Active volunteers who complete 120 hours of social programs are awarded certificates recognized by central boards and universities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {campaigns.map((camp, idx) => (
                <div key={idx} className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex flex-col justify-between">
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-white shadow-xs border border-slate-100 text-primary flex items-center justify-center mb-3">
                      {camp.icon}
                    </div>
                    <h4 className="text-sm font-bold text-primary-dark mb-1.5">{camp.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{camp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Coordinator detail */}
          <Card className="p-5 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
            <div className="flex items-center gap-3">
              <FaUserCircle className="text-slate-300 w-10 h-10 shrink-0" />
              <div>
                <p className="text-xs font-bold text-primary-dark">NSS Program Officer</p>
                <p className="text-sm font-semibold text-slate-600 mt-0.5">Dr. Jayant Patel (Associate Professor, Law)</p>
                <p className="text-[11px] text-slate-400 mt-1 font-mono">Contact: nss@gwlc.edu.in</p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default NSS;
