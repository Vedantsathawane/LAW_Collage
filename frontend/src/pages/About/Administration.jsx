import React from 'react';
import { FaBuilding, FaEnvelope } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import { CONTACTS } from '../../config/institutionConfig';

const Administration = () => {
  const sections = [
    {
      title: "Office of the Principal",
      email: CONTACTS.principal,
      duties: "Overall academic administration, faculty coordination, student discipline, and institutional governance."
    },
    {
      title: "Admissions & Registration",
      email: CONTACTS.registrar,
      duties: "Manages student admissions, registration, enrollment records, and university examination coordination."
    },
    {
      title: "Accounts & Finance",
      email: CONTACTS.accounts,
      duties: "Handles student fee payments, scholarship disbursements, institutional budgets, and audit compliance."
    },
    {
      title: "Academic Affairs",
      email: CONTACTS.academicAdmin,
      duties: "Coordinates academic schedules, student ID cards, library operations, and student welfare activities."
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

              <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                <a
                  href={`mailto:${sec.email}`}
                  className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-accent font-semibold"
                >
                  <FaEnvelope className="w-3.5 h-3.5" />
                  <span>{sec.email}</span>
                </a>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-slate-400 italic">
            Staff directory and officer details will be updated with official information.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Administration;
