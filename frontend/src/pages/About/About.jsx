import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaBuilding, FaUsers, FaGraduationCap } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';

const About = () => {
  const stats = [
    { icon: <FaGraduationCap className="text-secondary w-6 h-6" />, count: "4,500+", label: "Alumni Globally" },
    { icon: <FaUsers className="text-secondary w-6 h-6" />, count: "180+", label: "Expert Faculty" },
    { icon: <FaBuilding className="text-secondary w-6 h-6" />, count: "45 Acres", label: "Lush Campus" },
    { icon: <FaAward className="text-secondary w-6 h-6" />, count: "A++", label: "NAAC Grade" }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50">
      <Container>
        {/* Banner with overlaid text */}
        <div className="relative h-[250px] md:h-[400px] rounded-3xl overflow-hidden mb-12 md:mb-16 select-none shadow-premium">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200&h=600"
            alt="College campus overview"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 to-transparent flex items-center p-8 md:p-16">
            <div className="max-w-xl text-white">
              <span className="text-xs md:text-sm font-bold text-secondary uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full border border-white/20">
                Institutional Profile
              </span>
              <h1 className="text-3xl md:text-5xl font-bold font-heading mt-3 leading-tight text-white">
                About Our Institute
              </h1>
              <p className="text-xs md:text-sm text-slate-300 mt-4 leading-relaxed font-body">
                Nurturing scholarly competence, academic excellence, and ethical values since 1965.
              </p>
            </div>
          </div>
        </div>

        {/* Narrative & Stats section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-7 space-y-6 text-slate-600 leading-relaxed text-sm md:text-base font-body">
            <SectionTitle title="A Legacy of Excellence in Legal Education" subtitle="Overview" />
            <p>
              Government West Law College (GWLC) stands as a beacon of jurisprudential rigor and student empowerment. Established with a vision to provide world-class legal education, GWLC hosts multiple Moot Court Chambers, a free Legal Aid Clinic, a digitalized law library, and regular placement cycles hosting top national law firms.
            </p>
            <p>
              Approved by the Bar Council of India (BCI) and recognized with a prestigious <b>NAAC A++ Grade (CGPA 3.78)</b>, we offer comprehensive undergraduate and postgraduate paths in Constitutional Law, Criminal Criminology, Corporate Advisory, and IP & Technology Regulations.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <Card key={idx} className="p-6 text-center bg-white flex flex-col items-center justify-center border border-slate-100 shadow-premium" hoverEffect={true}>
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-3">
                  {stat.icon}
                </div>
                <p className="text-2xl font-extrabold text-primary font-mono leading-none">{stat.count}</p>
                <p className="text-xs font-semibold text-slate-400 mt-2 uppercase tracking-wide">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
