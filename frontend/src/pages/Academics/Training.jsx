import React from 'react';
import { FaGraduationCap, FaChalkboardTeacher, FaBalanceScale, FaHandsHelping } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import { SPECIAL_FEATURES } from '../../data/mockData';

const Training = () => {
  const activities = [
    { icon: <FaBalanceScale className="text-secondary w-5 h-5" />, title: "Moot Court Training", desc: SPECIAL_FEATURES.find(f => f.title === "Moot Court Association")?.description || "Mock cases and moot courts organized to sharpen lawyering skills." },
    { icon: <FaChalkboardTeacher className="text-secondary w-5 h-5" />, title: "Guest Lectures", desc: SPECIAL_FEATURES.find(f => f.title === "Guest Lectures")?.description || "Guest lectures by eminent legal speakers on current legal topics." },
    { icon: <FaGraduationCap className="text-secondary w-5 h-5" />, title: "Career Counseling", desc: SPECIAL_FEATURES.find(f => f.title === "Career Counseling")?.description || "Personalized guidance on career opportunities in law." },
    { icon: <FaHandsHelping className="text-secondary w-5 h-5" />, title: "Debate & Communication", desc: SPECIAL_FEATURES.find(f => f.title === "Debate Committee")?.description || "Debates, elocution, and essay writing competitions." }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Training & Development" subtitle="Student Development" />

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-5 text-slate-600 leading-relaxed text-sm md:text-base">
            <h3 className="text-xl font-bold font-heading text-primary-dark">
              Bridging Academic Knowledge with Practical Legal Skills
            </h3>
            <p>
              The college is committed to developing well-rounded legal professionals through a combination of academic education and practical skill development. Through moot courts, guest lectures, career counseling, and debate competitions, students gain the confidence and competence required for successful legal careers.
            </p>
          </div>

          {/* Activities grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((act, idx) => (
              <Card key={idx} className="p-6 bg-white border border-slate-100 shadow-premium flex flex-col justify-between" hoverEffect={true}>
                <div>
                  <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                    {act.icon}
                  </div>
                  <h4 className="text-base font-bold font-heading text-primary-dark mb-2">{act.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{act.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Training;
