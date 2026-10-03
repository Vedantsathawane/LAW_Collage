import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';
import {
  FaGraduationCap,
  FaFileInvoiceDollar,
  FaAward,
  FaClipboardCheck,
  FaExternalLinkAlt,
  FaExclamationTriangle,
  FaCheckCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight
} from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import { INSTITUTION_NAME, INSTITUTION_SHORT_NAME, PHONE_PRIMARY, CONTACTS, openGoogleForm } from '../../config/institutionConfig';
import { COURSES } from '../../data/mockData';

const Admission = () => {
  const quickLinks = [
    {
      title: "Admission Procedure",
      description: "Step-by-step enrollment roadmap, eligibility criteria, and documents checklist.",
      icon: <FaClipboardCheck className="w-6 h-6 text-[#B88E1C]" />,
      path: "/admission/procedure",
      badge: "Roadmap & Rules"
    },
    {
      title: "Fee Structure",
      description: "Detailed tuition fee breakdown, payment schedule, and university charges.",
      icon: <FaFileInvoiceDollar className="w-6 h-6 text-[#B88E1C]" />,
      path: "/admission/fees",
      badge: "Course Fees"
    },
    {
      title: "Scholarships & Freeships",
      description: "Government scholarships for SC, ST, OBC, VJNT, EWS, and merit students.",
      icon: <FaAward className="w-6 h-6 text-[#B88E1C]" />,
      path: "/admission/scholarship",
      badge: "Financial Aid"
    },
    {
      title: "Online Application",
      description: "Submit your admission enquiry & register online via official application form.",
      icon: <FaGraduationCap className="w-6 h-6 text-[#B88E1C]" />,
      path: "/admission/apply",
      badge: "Apply 2026-27"
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Dr. Milind Yerne College of Law approved by BCI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Dr. Milind Yerne College of Law, Kosra (Pauni, Bhandara) is approved by the Bar Council of India (BCI), New Delhi and affiliated with Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU)."
        }
      },
      {
        "@type": "Question",
        "name": "What courses are offered for law admissions in Bhandara?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer 3-Year LL.B. (for graduates) and 5-Year B.A. LL.B. (for 10+2 / 12th pass students) with a sanctioned intake of 60 seats per course."
        }
      },
      {
        "@type": "Question",
        "name": "How to apply for law admission in Maharashtra?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Candidates must appear for the State Common Entrance Test (MH CET Law) and participate in the Centralized Admission Process (CAP) rounds."
        }
      }
    ]
  };

  return (
    <div className="pt-24 pb-16 bg-[#FAF8F3] font-body min-h-screen">
      <Helmet>
        <title>Law Admission 2026-27 Bhandara | Dr Milind Yerne Law College</title>
        <meta name="description" content="Apply for LL.B 3-Year & B.A. LL.B 5-Year admission 2026-27 at Dr. Milind Yerne College of Law, Bhandara. Check eligibility, MH CET Law CAP rounds, documents & fee structure." />
        <meta name="keywords" content="law college admission Bhandara, BA LLB admission Maharashtra 2026, LLB admission near Nagpur, MH CET Law CAP rounds, law course fees Bhandara" />
        <link rel="canonical" href="https://drmycollegeoflaw.org/admission" />
        <meta property="og:title" content="Law Admission 2026-27 Bhandara | Dr Milind Yerne Law College" />
        <meta property="og:description" content="Admission guidelines for LL.B 3-Year and 5-Year B.A. LL.B degree courses at Dr. Milind Yerne College of Law, Pauni Tehsil, Bhandara District." />
        <meta property="og:url" content="https://drmycollegeoflaw.org/admission" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Container>
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-4xl font-extrabold font-heading text-[#26130D]">
            Law College Admissions 2026-27: LL.B. 3-Year & B.A. LL.B. 5-Year
          </h1>
          <p className="text-xs md:text-sm text-[#B88E1C] font-semibold mt-2">
            Dr. Milind Yerne College of Law, Kosra, Pauni Tehsil, Bhandara District
          </p>
        </div>

        {/* 60-Seat Notice Banner */}
        <div className="max-w-5xl mx-auto mb-12 p-6 md:p-8 rounded-2xl bg-[#26130D] border-2 border-[#DFAE24] text-[#FAF8F3] shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#DFAE24]/10 rounded-bl-full pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFAE24] text-[#26130D] text-[11px] font-extrabold uppercase tracking-wider">
                <FaExclamationTriangle className="w-3.5 h-3.5" />
                <span>Sanctioned Capacity Notice</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-[#FAF8F3]">
                Strict 60 Seats Capacity
              </h2>
              <p className="text-xs md:text-sm text-[#FAF8F3]/90 leading-relaxed font-body">
                {INSTITUTION_NAME} offers BCI & RTMNU approved <strong>LL.B. 3-Year and 5-Year Semester Courses</strong> with a strictly sanctioned intake of <strong>60 seats</strong> per course. Seats are filled on a first-cum-merit basis.
              </p>
            </div>

            <div className="shrink-0 w-full md:w-auto flex flex-col sm:flex-row md:flex-col gap-3">
              <button
                onClick={openGoogleForm}
                className="w-full bg-[#DFAE24] hover:bg-[#F4C430] text-[#26130D] font-extrabold text-xs px-6 py-3.5 rounded-xl shadow-lg transition-all border border-[#DFAE24]/50 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Apply Online Form</span>
                <FaExternalLinkAlt className="w-3.5 h-3.5" />
              </button>
              <RouterLink
                to="/admission/procedure"
                className="w-full bg-[#3D2017] hover:bg-[#4E2B1F] text-[#DFAE24] font-bold text-xs px-6 py-3.5 rounded-xl transition-all border border-[#DFAE24]/30 flex items-center justify-center gap-2 text-center"
              >
                <span>View Guidelines</span>
                <FaArrowRight className="w-3 h-3" />
              </RouterLink>
            </div>
          </div>
        </div>

        {/* 4 Main Admission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {quickLinks.map((item, idx) => (
            <Card
              key={idx}
              className="p-6 bg-white border border-[#DFAE24]/40 shadow-premium flex flex-col justify-between relative overflow-hidden group"
              hoverEffect={true}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF8F3] border border-[#DFAE24]/30 flex items-center justify-center shadow-xs">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-extrabold text-[#B88E1C] bg-[#FAF8F3] px-2.5 py-1 rounded-md border border-[#DFAE24]/30 uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>
                <h2 className="text-lg font-bold font-heading text-[#26130D]">
                  {item.title}
                </h2>
                <p className="text-xs text-[#756D63] leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>

              <RouterLink
                to={item.path}
                className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold text-[#26130D] hover:text-[#B88E1C] group-hover:translate-x-1 transition-all"
              >
                <span>Explore Details</span>
                <FaArrowRight className="w-3 h-3 text-[#B88E1C]" />
              </RouterLink>
            </Card>
          ))}
        </div>

        {/* Programs & Intake Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold font-heading text-[#26130D]">
              Programs Offered & Intake Capacity
            </h2>
            <p className="text-xs md:text-sm text-[#756D63] mt-1 font-medium">
              Affiliated with Rashtrasant Tukadoji Maharaj Nagpur University & Approved by Bar Council of India (BCI)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COURSES.map((course) => (
              <Card key={course.id} className="p-6 md:p-8 bg-white border border-[#DFAE24]/40 shadow-premium relative overflow-hidden" hoverEffect={false}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFAE24]/15 rounded-full blur-xl pointer-events-none -mr-8 -mt-8" />
                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold text-[#B88E1C] uppercase tracking-wider">{course.level}</span>
                    <span className="text-xs font-extrabold px-3 py-1 bg-[#26130D] text-[#DFAE24] rounded-lg shadow-xs">
                      {course.intake} Seats Sanctioned
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-[#26130D]">{course.name}</h3>
                  <div className="space-y-2 text-xs text-[#756D63]">
                    <p className="font-semibold text-[#211A17]"><strong>Duration:</strong> {course.duration}</p>
                    <p className="font-semibold text-[#211A17]"><strong>Eligibility:</strong> {course.eligibility}</p>
                    <p className="leading-relaxed">{course.description}</p>
                  </div>

                  <div className="pt-4 border-t border-[#DFAE24]/20 flex items-center justify-between">
                    <RouterLink
                      to="/academics/courses"
                      className="text-xs font-bold text-[#26130D] hover:text-[#B88E1C] flex items-center gap-1.5"
                    >
                      <span>Syllabus & Details</span>
                      <FaArrowRight className="w-3 h-3 text-[#B88E1C]" />
                    </RouterLink>
                    <button
                      onClick={openGoogleForm}
                      className="text-xs font-extrabold text-[#26130D] bg-[#DFAE24] hover:bg-[#F4C430] px-4 py-2 rounded-lg border border-[#B88E1C]/30 shadow-xs cursor-pointer"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Admission Contact & Helpline Banner */}
        <div className="max-w-5xl mx-auto p-6 md:p-8 bg-white border border-[#DFAE24]/40 rounded-2xl shadow-premium flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg font-bold font-heading text-[#26130D]">
              Need Help with Admissions?
            </h3>
            <p className="text-xs text-[#756D63] font-medium">
              Contact our admission cell for counseling, documents verification, or fee details.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-xs font-bold">
            <a
              href={`tel:${PHONE_PRIMARY}`}
              className="flex items-center gap-2 bg-[#26130D] text-[#DFAE24] px-4 py-3 rounded-xl shadow-md hover:bg-[#3D2017] transition-colors"
            >
              <FaPhoneAlt className="w-3.5 h-3.5" />
              <span>{PHONE_PRIMARY}</span>
            </a>
            <a
              href={`mailto:${CONTACTS.info}`}
              className="flex items-center gap-2 bg-[#FAF8F3] text-[#26130D] border border-[#DFAE24]/50 px-4 py-3 rounded-xl hover:bg-[#F5F0E6] transition-colors"
            >
              <FaEnvelope className="w-3.5 h-3.5 text-[#B88E1C]" />
              <span>{CONTACTS.info}</span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Admission;
