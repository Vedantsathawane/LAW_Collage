import React from 'react';
import { FaBalanceScale, FaGraduationCap, FaMapMarkerAlt, FaAward } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import { INSTITUTION_NAME } from '../../config/institutionConfig';
import { LOCATION_DETAILS } from '../../data/mockData';
import heroLaw1 from '../../assets/hero-law-1.jpg';

const About = () => {
  const factCards = [
    { icon: <FaBalanceScale className="text-secondary w-6 h-6" />, label: "BCI Approved", detail: "Bar Council of India / State Govt." },
    { icon: <FaGraduationCap className="text-secondary w-6 h-6" />, label: "RTMNU Affiliated", detail: "Rashtrasant Tukadoji Maharaj Nagpur University" },
    { icon: <FaMapMarkerAlt className="text-secondary w-6 h-6" />, label: "Pauni, Bhandara", detail: "Vidarbha Region, Maharashtra" },
    { icon: <FaAward className="text-secondary w-6 h-6" />, label: "Est. 2007", detail: "Late Malatai Yerne Smruti Sanstha" }
  ];

  return (
    <div className="pt-24 pb-16 bg-[#FAF8F3] font-body">
      <Container>
        {/* Banner */}
        <div className="relative h-[250px] md:h-[400px] rounded-3xl overflow-hidden mb-12 md:mb-16 select-none shadow-premium border border-[#DFAE24]/30">
          <img
            src={heroLaw1}
            alt="Dr. Milind Yerne College of Law campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#26130D]/85 via-[#26130D]/60 to-transparent flex items-center p-8 md:p-16">
            <div className="max-w-xl text-white">
              <span className="text-xs md:text-sm font-bold text-[#DFAE24] uppercase tracking-widest bg-[#3D2017]/80 px-3 py-1 rounded-full border border-[#DFAE24]/40 font-heading">
                Institutional Profile
              </span>
              <h1 className="text-3xl md:text-5xl font-bold font-heading mt-3 leading-tight text-white">
                About Our College
              </h1>
              <p className="text-xs md:text-sm text-[#FAF8F3]/90 mt-4 leading-relaxed font-body">
                Professional legal education with the vision of "Education for All" since 2007.
              </p>
            </div>
          </div>
        </div>

        {/* About Content & Fact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-7 space-y-6 text-[#211A17] leading-relaxed text-sm md:text-base font-body font-medium">
            <SectionTitle title="Empowering Rural & Urban Scholars in Legal Education" subtitle="About The College" />
            <p>
              <strong className="text-[#26130D]">{INSTITUTION_NAME}</strong> is managed by <em>Late Malatai Yerne Smruti Bahuddeshiya Sanstha (LMYSBS)</em>, established in 2007 to provide quality professional legal education within reach of every section of society.
            </p>
            <p>
              Situated at <strong>Pauni</strong> — a historical Municipal council along with Nagpur Municipal Corporation in Vidarbha region — the college serves students across Bhandara, Nagpur, Chandrapur, and Gadchiroli districts (including talukas like Nagbhid, Rampuri, Chimur, Wadasa, Armori, Kurkheda, Bhiwapur, Lakhandur, Lakhani, and Sakoli).
            </p>
            <p>
              Approved by the <strong className="text-[#26130D]">Bar Council of India (BCI) / State Govt. of Maharashtra</strong> and affiliated with <strong className="text-[#26130D]">Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU)</strong>, the college offers <strong className="text-[#26130D]">LL.B. 3 Years and 5 Years Semester Courses</strong> with dedicated moot court training, annual legal aid camps, human rights cells, and expert career guidance.
            </p>

            {/* Reach/Coverage */}
            <div className="p-5 bg-white border border-[#DFAE24]/40 rounded-2xl text-xs md:text-sm text-[#211A17] shadow-premium relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFAE24]/15 rounded-full blur-xl pointer-events-none -mr-8 -mt-8" />
              <h4 className="font-bold text-[#26130D] text-sm uppercase tracking-wide border-b border-[#DFAE24]/30 pb-1 mb-2 font-heading relative z-10">
                Regional Coverage
              </h4>
              <ul className="space-y-1 font-medium relative z-10">
                {LOCATION_DETAILS.coveredTalukas.map((taluka, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#B88E1C] font-extrabold">•</span>
                    <span>{taluka}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {factCards.map((fact, idx) => (
              <Card key={idx} className="p-6 text-center bg-white flex flex-col items-center justify-center border border-[#DFAE24]/40 shadow-premium relative overflow-hidden group" hoverEffect={true}>
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#DFAE24]/15 rounded-full blur-xl pointer-events-none -mr-6 -mt-6" />
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF8F3] border border-[#DFAE24]/30 flex items-center justify-center mb-3 shadow-sm">
                    {React.cloneElement(fact.icon, { className: "text-[#B88E1C] w-6 h-6" })}
                  </div>
                  <p className="text-sm font-extrabold text-[#26130D] font-heading leading-none">{fact.label}</p>
                  <p className="text-xs font-semibold text-[#211A17] mt-2">{fact.detail}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
