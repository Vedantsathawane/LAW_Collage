import React from 'react';
import { FaUserCircle, FaHeart, FaStar, FaAward, FaBuilding } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import { SANSTHA_NAME, LEADERSHIP } from '../../config/institutionConfig';

const Management = () => {
  const leaders = [
    {
      name: LEADERSHIP.inspiration.name,
      role: LEADERSHIP.inspiration.title,
      details: LEADERSHIP.inspiration.designation,
      iconColor: "text-amber-500",
      badge: "Inspiration"
    },
    {
      name: LEADERSHIP.mentor.name,
      role: LEADERSHIP.mentor.title,
      details: LEADERSHIP.mentor.designation,
      iconColor: "text-blue-600",
      badge: "Mentor"
    },
    {
      name: LEADERSHIP.president.name,
      role: LEADERSHIP.president.title,
      details: "Leading Sanstha Administration & Institutional Growth",
      iconColor: "text-emerald-600",
      badge: "President"
    },
    {
      name: LEADERSHIP.secretary.name,
      role: LEADERSHIP.secretary.title,
      details: "Founder & Academic Visionary of Dr. M.Y. College of Law",
      iconColor: "text-purple-600",
      badge: "Secretary & Founder"
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-[#FAF8F3] font-body">
      <Container>
        <SectionTitle title="Sanstha Management & Patron Leadership" subtitle={SANSTHA_NAME} centered={true} />

        {/* Tribute Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="p-8 bg-white border border-[#DFAE24]/40 shadow-premium relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#DFAE24]/15 rounded-full blur-xl pointer-events-none -mr-12 -mt-12" />
            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
              <div className="w-20 h-20 rounded-full bg-[#FAF8F3] border-2 border-[#DFAE24] flex items-center justify-center text-[#B88E1C] shrink-0 shadow-sm">
                <FaHeart className="w-9 h-9" />
              </div>
              <div className="text-center md:text-left">
                <span className="text-xs font-bold text-[#B88E1C] uppercase tracking-widest bg-[#FAF8F3] px-3 py-1 rounded-full border border-[#DFAE24]/40 font-heading">
                  A Tribute To Our Inspiration
                </span>
                <h3 className="text-2xl font-bold font-heading text-[#26130D] mt-2">
                  LATE MALATAI YERNE
                </h3>
                <p className="text-sm italic text-[#211A17] mt-2 leading-relaxed font-serif font-medium">
                  "Education for All" was your mantra which we imbibe while laying the foundation of our 'Sanstha'. It's been your inspiration & blessings that has enabled us to make 'professional education' within reach of every section of society.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Patrons & Office Bearers Grid */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-bold font-heading text-primary-dark text-center mb-8">
            Governing Sanstha Leadership ({SANSTHA_NAME})
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leaders.map((m, idx) => (
              <Card key={idx} className="p-6 bg-white border border-slate-100 shadow-premium" hoverEffect={true}>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200">
                    <FaUserCircle className={`w-10 h-10 ${m.iconColor}`} />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-md bg-primary/10 text-primary-dark">
                      {m.badge}
                    </span>
                    <h4 className="text-lg font-bold font-heading text-primary-dark mt-1">
                      {m.name}
                    </h4>
                    <p className="text-xs font-semibold text-amber-700">{m.role}</p>
                    <p className="text-xs text-slate-500 mt-1">{m.details}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Management;
