import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import { SPECIAL_FEATURES } from '../../data/mockData';
import { INSTITUTION_NAME } from '../../config/institutionConfig';

const Placements = () => {
  const careerFeature = SPECIAL_FEATURES.find(f => f.title === "Career Counseling");

  return (
    <div className="pt-24 pb-16 bg-[#FAF8F3] font-body">
      <Helmet>
        <title>Placements & Career Opportunities | Dr Milind Yerne Law College Bhandara</title>
        <meta name="description" content="Explore legal career guidance, judicial services coaching, advocacy practice & corporate placements at Dr. Milind Yerne College of Law, Pauni (Bhandara)." />
        <meta name="keywords" content="law college placements Bhandara, legal career guidance Nagpur, JMFC judicial exam coaching, advocate career options LLB" />
        <link rel="canonical" href="https://drmycollegeoflaw.org/academics/placements" />
      </Helmet>

      <Container>
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-extrabold font-heading text-[#26130D]">
            Career Guidance, Legal Practice & Placements
          </h1>
          <p className="text-xs md:text-sm text-[#B88E1C] font-semibold mt-2">
            Dr. Milind Yerne College of Law, Pauni, Bhandara
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary shrink-0">
                <FaBriefcase className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-heading text-primary-dark">
                Career Counseling
              </h3>
            </div>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-4">
              {careerFeature ? careerFeature.description : "Students are provided personalized guidance on diverse career opportunities in Law by expert faculties from time to time."}
            </p>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
              <strong>{INSTITUTION_NAME}</strong> prepares students for diverse career paths in the legal profession including court practice, judicial services, corporate law advisory, legal consultancy, public administration, and academic research.
            </p>
          </Card>

          <Card className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary shrink-0">
                <FaGraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold font-heading text-primary-dark">
                Career Opportunities for Law Graduates
              </h3>
            </div>
            <ul className="space-y-2 text-xs md:text-sm text-slate-600 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>Legal Practice — Advocate in District Courts, High Courts, and Supreme Court</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>Judicial Services — Civil Judge, Magistrate through competitive examinations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>Corporate Legal Advisory — In-house counsel for companies and organizations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>Legal Aid & Social Work — Legal aid clinics, NGOs, and human rights organizations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>Government Services — Legal officers in government departments and public undertakings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary font-bold">•</span>
                <span>Academic & Research — Teaching positions in law colleges and legal research</span>
              </li>
            </ul>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Placements;
