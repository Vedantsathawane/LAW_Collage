import React from 'react';
import { FaShieldAlt, FaPhoneAlt, FaEnvelope, FaExclamationTriangle } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import { COMMITTEE_MEMBERS } from '../../data/mockData';

const AntiRagging = () => {
  const members = COMMITTEE_MEMBERS.filter(m => m.committee.includes("Anti-Ragging"));

  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Zero Tolerance: Anti-Ragging Guidelines" subtitle="Anti-Ragging Squad" centered={true} />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Warning banner */}
          <Card className="p-6 md:p-8 bg-red-50 border border-red-100 rounded-2xl" hoverEffect={false}>
            <div className="flex items-start gap-4">
              <FaExclamationTriangle className="text-red-600 w-8 h-8 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold font-heading text-red-950 mb-2">
                  Ragging is a Cognizable Offense
                </h3>
                <p className="text-xs md:text-sm text-red-900 leading-relaxed font-medium">
                  In compliance with the UGC Regulations on curbing the menace of ragging in higher educational institutions, 2009, the college maintains a strict <b>Zero Tolerance policy</b>. Ragging in any form (verbal, physical, psychological) is strictly prohibited inside the campus.
                </p>
                <div className="mt-4 flex flex-wrap gap-4 text-xs font-bold text-red-950">
                  <span className="bg-red-200/50 px-3 py-1.5 rounded-lg">Punishable with Suspension</span>
                  <span className="bg-red-200/50 px-3 py-1.5 rounded-lg">Imprisonment up to 3 Years</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Emergency contacts card */}
          <Card className="p-6 md:p-8 bg-primary text-white border-none relative overflow-hidden" hoverEffect={false}>
            <div className="absolute top-0 right-0 transform translate-x-12 -translate-y-12 w-48 h-48 bg-white/5 rounded-full pointer-events-none" />
            <h3 className="text-lg font-bold font-heading text-white mb-4 flex items-center gap-2">
              <FaShieldAlt className="text-secondary" />
              <span>Anti-Ragging 24x7 Help Desk</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/10 rounded-xl flex items-center gap-3">
                <FaPhoneAlt className="text-secondary shrink-0" />
                <div>
                  <p className="text-[10px] font-bold text-slate-300 uppercase leading-none">National Help Number</p>
                  <a href="tel:18001805522" className="text-base font-extrabold text-white mt-1.5 block">1800-180-5522</a>
                </div>
              </div>
              <div className="p-4 bg-white/10 rounded-xl flex items-center gap-3">
                <FaEnvelope className="text-secondary shrink-0" />
                <div>
                  <p className="text-[10px] font-bold text-slate-300 uppercase leading-none">Anti-Ragging Email Address</p>
                  <a href="mailto:helpline@antiragging.in" className="text-sm font-bold text-white mt-1.5 block">helpline@antiragging.in</a>
                </div>
              </div>
            </div>
          </Card>

          {/* Committee Contacts list */}
          <Card className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
            <h3 className="text-lg font-bold font-heading text-primary-dark mb-5 border-b border-slate-100 pb-2">
              Institutional Committee Members
            </h3>
            <div className="space-y-4">
              {members.map((mem, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-xl gap-2.5">
                  <div>
                    <p className="text-sm font-bold text-primary-dark">{mem.name}</p>
                    <p className="text-[10px] font-bold text-secondary uppercase tracking-wider mt-0.5">{mem.role}</p>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-slate-500 font-semibold">
                    <FaPhoneAlt className="text-slate-400 w-3.5 h-3.5 shrink-0" />
                    <span>{mem.contact}</span>
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

export default AntiRagging;
