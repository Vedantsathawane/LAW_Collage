import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaClock, FaUsers, FaTag, FaExternalLinkAlt } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Accordion from '../../components/ui/Accordion';
import Card from '../../components/ui/Card';
import { COURSES } from '../../data/mockData';
import { openGoogleForm } from '../../config/institutionConfig';

const Courses = () => {
  const courseSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Bachelor of Laws (LL.B. 3 Years)",
      "description": "3-Year professional law degree approved by BCI and affiliated with RTMNU Nagpur for graduates seeking legal careers in litigation, judiciary, and corporate sectors.",
      "provider": {
        "@type": "CollegeOrUniversity",
        "name": "Dr. Milind Yerne College of Law",
        "url": "https://drmycollegeoflaw.org/"
      },
      "educationalCredentialAwarded": "LL.B. Degree",
      "occupationalCredentialAwarded": "Advocate / Lawyer"
    },
    {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": "Bachelor of Arts & Bachelor of Laws (B.A. LL.B. 5 Years)",
      "description": "5-Year integrated dual degree law course approved by BCI for students who passed 10+2 / 12th standard.",
      "provider": {
        "@type": "CollegeOrUniversity",
        "name": "Dr. Milind Yerne College of Law",
        "url": "https://drmycollegeoflaw.org/"
      },
      "educationalCredentialAwarded": "B.A. LL.B. Degree",
      "occupationalCredentialAwarded": "Advocate / Lawyer"
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-[#FAF8F3] font-body">
      <Helmet>
        <title>LL.B. 3-Year & B.A. LL.B. 5-Year Courses | Dr Milind Yerne Law College Bhandara</title>
        <meta name="description" content="Explore BCI approved 3-Year LL.B & 5-Year B.A. LL.B degree programs at Dr. Milind Yerne College of Law, Bhandara (Pauni). RTMNU curriculum, Moot Court & MH CET Law admissions." />
        <meta name="keywords" content="LLB course Bhandara, BA LLB admission Maharashtra, 3 year LLB college near Nagpur, BCI approved law degree, RTMNU law syllabus" />
        <link rel="canonical" href="https://drmycollegeoflaw.org/academics/courses" />
        <meta property="og:title" content="LL.B. 3-Year & B.A. LL.B. 5-Year Courses | Dr Milind Yerne Law College" />
        <meta property="og:description" content="BCI Approved 3-Year LL.B & 5-Year B.A. LL.B Degree Courses offered at Dr. Milind Yerne College of Law, Pauni Tehsil, Bhandara District." />
        <meta property="og:url" content="https://drmycollegeoflaw.org/academics/courses" />
        <script type="application/ld+json">
          {JSON.stringify(courseSchema)}
        </script>
      </Helmet>

      <Container>
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-extrabold font-heading text-[#26130D]">
            Law Courses & Programs: LL.B. 3-Year & B.A. LL.B. 5-Year
          </h1>
          <p className="text-xs md:text-sm text-[#B88E1C] font-semibold mt-2">
            Approved by Bar Council of India (BCI) & Affiliated with RTMNU Nagpur University
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {COURSES.map((course) => {
            const accordionItems = course.syllabus.map((syl) => {
              const [sem, topics] = syl.split(': ');
              return {
                title: sem,
                content: topics || "Detailed curriculum subjects available in syllabus handbook."
              };
            });

            return (
              <Card key={course.id} className="p-6 md:p-8 bg-white border border-[#DFAE24]/40 shadow-premium flex flex-col justify-between relative overflow-hidden group" hoverEffect={false}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFAE24]/15 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
                <div className="relative z-10">
                  <span className="text-[10px] font-bold text-[#DFAE24] uppercase bg-[#26130D] px-3 py-1 rounded-full mb-3.5 inline-block font-heading shadow-sm">
                    {course.level}
                  </span>
                  <h2 className="text-lg md:text-xl font-bold font-heading text-[#26130D] mb-4">
                    {course.name}
                  </h2>
                  <p className="text-xs md:text-sm text-[#211A17] font-medium leading-relaxed mb-6 font-body">
                    {course.description}
                  </p>

                  {/* Course specs */}
                  <div className="grid grid-cols-3 gap-3 bg-[#FAF8F3] border border-[#DFAE24]/30 p-4 rounded-xl mb-6 text-xs text-[#211A17]">
                    <div className="flex flex-col items-center text-center">
                      <FaClock className="text-[#B88E1C] w-4 h-4 mb-1" />
                      <span className="font-bold text-[#B88E1C] text-[10px] uppercase">Duration</span>
                      <span className="font-bold text-[#26130D] mt-0.5">{course.duration}</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <FaUsers className="text-[#B88E1C] w-4 h-4 mb-1" />
                      <span className="font-bold text-[#B88E1C] text-[10px] uppercase">Intake</span>
                      <span className="font-bold text-[#26130D] mt-0.5">{course.intake} Seats</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <FaTag className="text-[#B88E1C] w-4 h-4 mb-1" />
                      <span className="font-bold text-[#B88E1C] text-[10px] uppercase">Tuition Fee</span>
                      <span className="font-bold text-[#26130D] mt-0.5">{course.fees}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-bold text-[#B88E1C] uppercase tracking-wide mb-1 font-heading">Eligibility Criteria</p>
                    <p className="text-xs text-[#211A17] font-medium leading-relaxed bg-[#FAF8F3] border border-[#DFAE24]/30 rounded-xl p-3 mb-4">
                      {course.eligibility}
                    </p>
                    <button
                      onClick={openGoogleForm}
                      className="w-full bg-[#26130D] hover:bg-[#3D2017] text-[#DFAE24] text-xs font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#DFAE24]/40 shadow-md"
                    >
                      <span>Apply for {course.name} (Google Form)</span>
                      <FaExternalLinkAlt className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Syllabus Accordion list */}
                <div className="mt-4 relative z-10">
                  <h3 className="text-xs font-bold text-[#B88E1C] uppercase tracking-wide mb-3 font-heading">Course Semester Outline</h3>
                  <Accordion items={accordionItems} />
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Courses;
