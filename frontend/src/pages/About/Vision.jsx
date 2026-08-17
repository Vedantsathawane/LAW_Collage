import React from 'react';
import { FaEye, FaBullseye, FaShieldAlt, FaHeart, FaBalanceScale, FaGraduationCap, FaHandsHelping } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';

const Vision = () => {
  const visionPoints = [
    "To develop dynamic lawyers & legal professionals.",
    "To develop institute into centre of excellence in professional legal education.",
    "To serve the nation by nurturing and developing law professionals and lawyers, who could contribute to nation building.",
    "To instill a sense of duty towards the family, society & nation in the minds of student."
  ];

  const missionPoints = [
    "Empower the youths to be the lawyer of tomorrow with absolute discipline, quest for knowledge, and strong ethics to uphold spirit of professionalism.",
    "Efforts are taken to provide quality education at affordable cost for upliftment of students from backward class, rural areas, mainly economically hurted.",
    "Opportunity of learning to be qualified professional and knowledge driven advocates; equipped and empower youths and contribute to societal transformation."
  ];

  const values = [
    { icon: <FaBalanceScale className="text-amber-600 w-5 h-5" />, title: "Legal Ethics & Discipline", desc: "Instilling absolute discipline and legal integrity to uphold the spirit of professionalism." },
    { icon: <FaGraduationCap className="text-amber-600 w-5 h-5" />, title: "Centre of Excellence", desc: "Providing accessible, high-quality legal education in ruralVidarbha region." },
    { icon: <FaHandsHelping className="text-amber-600 w-5 h-5" />, title: "Rural & Social Empowerment", desc: "Uplifting students from backward classes, rural areas, and economically underprivileged sections." },
    { icon: <FaHeart className="text-amber-600 w-5 h-5" />, title: "Duty to Society & Nation", desc: "Developing dedicated legal advocates committed to nation building and human rights advocacy." }
  ];

  return (
    <div className="pt-24 pb-16 bg-[#FAF8F3] font-body">
      <Container>
        <SectionTitle title="Pillars of Institutional Direction" subtitle="Vision & Mission" centered={true} />

        {/* Vision & Mission Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Vision card */}
          <Card className="p-8 bg-white border border-[#DFAE24]/40 shadow-premium relative overflow-hidden" hoverEffect={false}>
            <div className="absolute top-0 right-0 transform translate-x-12 -translate-y-12 w-48 h-48 bg-[#DFAE24]/15 rounded-full pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-[#FAF8F3] border border-[#DFAE24]/30 flex items-center justify-center mb-6 shadow-sm">
              <FaEye className="text-[#B88E1C] w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-heading mb-4 text-[#26130D]">Our Vision</h3>
            <ul className="space-y-3.5 text-xs md:text-sm text-[#211A17] font-medium leading-relaxed font-body">
              {visionPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#B88E1C] font-extrabold shrink-0">■</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Mission card */}
          <Card className="p-8 bg-white border border-[#DFAE24]/40 shadow-premium relative overflow-hidden" hoverEffect={false}>
            <div className="absolute top-0 right-0 transform translate-x-12 -translate-y-12 w-48 h-48 bg-[#DFAE24]/15 rounded-full pointer-events-none" />
            <div className="w-12 h-12 rounded-xl bg-[#FAF8F3] border border-[#DFAE24]/30 flex items-center justify-center mb-6 shadow-sm">
              <FaBullseye className="text-[#B88E1C] w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold font-heading mb-4 text-[#26130D]">Our Mission</h3>
            <ul className="space-y-3.5 text-xs md:text-sm text-[#211A17] font-medium leading-relaxed font-body">
              {missionPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#B88E1C] font-extrabold shrink-0">✔</span>
                  <span>{point}</span>
                </li>
              ))}
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
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center mb-4">
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
