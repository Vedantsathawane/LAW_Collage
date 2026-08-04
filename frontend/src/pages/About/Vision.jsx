import React from 'react';
import { FaEye, FaBullseye, FaShieldAlt, FaHeart, FaFlask, FaHandsHelping } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';

const Vision = () => {
  const values = [
    { icon: <FaShieldAlt className="text-secondary w-5 h-5" />, title: "Academic Integrity", desc: "Honesty and transparency in classrooms, moot court rooms, evaluations, and active legal publication research." },
    { icon: <FaFlask className="text-secondary w-5 h-5" />, title: "Legal Reasoning", desc: "Cultivating critical litigation analysis, statutory interpretations, and procedural legal ethics." },
    { icon: <FaHandsHelping className="text-secondary w-5 h-5" />, title: "Social Responsibility", desc: "Fostering NSS, NCC, and free Legal Aid Clinic outreach to build civic values in future lawyers." },
    { icon: <FaHeart className="text-secondary w-5 h-5" />, title: "Inclusive Justice", desc: "Equal legal access, fee concessions, and specialized scholarships to help students from weaker economic backgrounds." }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Pillars of Institutional Direction" subtitle="Vision & Mission" centered={true} />

        {/* Vision & Mission Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Vision card */}
          <Card className="p-8 bg-gradient-to-tr from-primary to-primary-light text-white relative border-none overflow-hidden" hoverEffect={false}>
            <div className="absolute top-0 right-0 transform translate-x-12 -translate-y-12 w-48 h-48 bg-white/5 rounded-full pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6">
              <FaEye className="text-secondary w-6 h-6 animate-pulse" />
            </div>
            <h3 className="text-2xl font-bold font-heading mb-4 text-white">Our Vision</h3>
            <p className="text-xs md:text-sm text-slate-200 leading-relaxed">
              To be an internationally recognized center of legal excellence, incubating professional advocacy skills, constitutional research, and moral justice principles that empower students to serve the bar and bench effectively.
            </p>
          </Card>

          {/* Mission card */}
          <Card className="p-8 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
            <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6">
              <FaBullseye className="text-secondary w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-primary-dark mb-4">Our Mission</h3>
            <ul className="space-y-3 text-xs md:text-sm text-slate-600 leading-relaxed font-medium">
              <li className="flex items-start gap-2.5">
                <span className="text-secondary mt-1 shrink-0">•</span>
                <span>Offer progressive curricula in litigation, corporate compliance, and technology laws.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-secondary mt-1 shrink-0">•</span>
                <span>Nurture advocacy standards by funding digitized Moot Court simulation chambers.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-secondary mt-1 shrink-0">•</span>
                <span>Expand law firm alliances to ensure associate placements and clerkships.</span>
              </li>
            </ul>
          </Card>
        </div>

        {/* Core Values grid */}
        <div className="border-t border-slate-200 pt-16">
          <h3 className="text-2xl font-bold font-heading text-primary-dark text-center mb-10">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => (
              <Card key={idx} className="p-6 bg-white border border-slate-100 shadow-premium" hoverEffect={true}>
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                  {v.icon}
                </div>
                <h4 className="text-base font-bold font-heading text-primary-dark mb-2">{v.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Vision;
