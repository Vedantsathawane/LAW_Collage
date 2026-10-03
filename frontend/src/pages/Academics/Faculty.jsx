import React from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import { INSTITUTION_NAME } from '../../config/institutionConfig';

const Faculty = () => {
  return (
    <div className="pt-24 pb-16 bg-[#FAF8F3] font-body">
      <Helmet>
        <title>Faculty Members & Professors | Dr Milind Yerne Law College Bhandara</title>
        <meta name="description" content="Meet the experienced law faculty members, professors & legal scholars at Dr. Milind Yerne College of Law, Pauni (Bhandara). Expert legal education for LL.B 3 & 5 years." />
        <meta name="keywords" content="law college faculty Bhandara, Dr Milind Yerne Law College professors, RTMNU law faculty members" />
        <link rel="canonical" href="https://drmycollegeoflaw.org/academics/faculty" />
      </Helmet>

      <Container>
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-extrabold font-heading text-[#26130D]">
            Faculty Directory & Legal Scholars
          </h1>
          <p className="text-xs md:text-sm text-[#B88E1C] font-semibold mt-2">
            Dr. Milind Yerne College of Law, Pauni, Bhandara
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-6 md:p-8 bg-white border border-[#DFAE24]/40 shadow-premium text-center" hoverEffect={false}>
            <h2 className="text-xl font-bold font-heading text-[#26130D] mb-4">
              Experienced Legal Educators
            </h2>
            <p className="text-xs md:text-sm text-[#211A17] leading-relaxed mb-4">
              <strong>{INSTITUTION_NAME}</strong> has a dedicated team of qualified faculty members committed to delivering quality legal education. The faculty includes experienced professors, advocate mentors, and legal experts specializing in Constitutional Law, Criminal Law, Civil Procedure, and Corporate Law.
            </p>
            <div className="p-4 bg-[#FAF8F3] border border-[#DFAE24]/40 rounded-xl text-xs text-[#26130D] font-medium">
              The complete faculty directory with LL.M. and Ph.D. qualifications and specializations is maintained at the academic office.
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Faculty;
