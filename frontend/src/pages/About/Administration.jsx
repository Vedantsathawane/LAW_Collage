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
    <div className="pt-24 pb-16 bg-[#FAF8F3] font-body">
      <Container>
        <SectionTitle title="Administrative Divisions" subtitle="Administration" centered={true} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {sections.map((sec, idx) => (
            <Card key={idx} className="p-6 bg-white border border-[#DFAE24]/40 shadow-premium flex flex-col justify-between relative overflow-hidden group" hoverEffect={true}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFAE24]/15 rounded-full blur-xl pointer-events-none -mr-8 -mt-8" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F3] border border-[#DFAE24]/30 flex items-center justify-center text-[#B88E1C] shrink-0 shadow-sm">
                    <FaBuilding className="w-5 h-5" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold font-heading text-[#26130D]">
                    {sec.title}
                  </h3>
                </div>
                <p className="text-xs md:text-sm text-[#211A17] font-medium leading-relaxed mb-6">
                  {sec.duties}
                </p>
              </div>

              <div className="border-t border-[#DFAE24]/20 pt-4 flex items-center justify-between relative z-10">
                <a
                  href={`mailto:${sec.email}`}
                  className="flex items-center gap-1.5 text-xs text-[#B88E1C] hover:text-[#26130D] font-bold transition-colors"
                >
                  <FaEnvelope className="w-3.5 h-3.5" />
                  <span>{sec.email}</span>
                </a>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-xs text-[#211A17]/80 font-medium italic">
            Staff directory and officer details will be updated with official information.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Administration;
