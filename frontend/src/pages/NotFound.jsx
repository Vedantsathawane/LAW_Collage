import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  FaHome, 
  FaGraduationCap, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaBookOpen, 
  FaSearch, 
  FaBalanceScale,
  FaFileDownload,
  FaBullhorn,
  FaQuestionCircle
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/common/Button';

const NotFound = () => {
  const quickLinks = [
    { label: 'College Home', path: '/', icon: <FaHome />, desc: 'Return to main homepage' },
    { label: 'LL.B. Courses', path: '/academics/courses', icon: <FaBookOpen />, desc: '3 & 5 Years Degree Programs' },
    { label: 'Admissions 2026', path: '/admission', icon: <FaGraduationCap />, desc: 'Eligibility & Fees Structure' },
    { label: 'MH-CET Law Info', path: '/cet', icon: <FaSearch />, desc: 'Entrance Exam Guidelines' },
    { label: 'Student Downloads', path: '/student-corner/downloads', icon: <FaFileDownload />, desc: 'Syllabus, Forms & Notices' },
    { label: 'Contact Helpdesk', path: '/contact', icon: <FaPhoneAlt />, desc: 'Reach out to College Office' },
  ];

  return (
    <>
      <Helmet>
        <title>404 Page Not Found | Dr. Milind Yerne College of Law, Pauni</title>
        <meta name="description" content="The page you requested on Dr. Milind Yerne College of Law website could not be found. Access quick links to courses, admissions, and contact info." />
      </Helmet>

      <div className="pt-24 pb-20 bg-[#FAF8F3] font-body relative overflow-hidden grid-pattern">
        {/* Ambient Gold Glow Orbs */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#DFAE24]/10 rounded-full blur-3xl pointer-events-none" />
        
        <Container className="relative z-10">
          <SectionTitle 
            title="Page Not Found" 
            subtitle="404 Error • Dr. Milind Yerne College of Law" 
            centered={true} 
          />

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Main 404 Hero Banner Card */}
            <Card className="p-8 md:p-12 bg-white border border-[#DFAE24]/40 shadow-premium text-center relative overflow-hidden" hoverEffect={false}>
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#DFAE24]/15 rounded-bl-full pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#26130D]/5 rounded-tr-full pointer-events-none" />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6 relative z-10"
              >
                {/* College Crest Motif & 404 Badge */}
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 bg-[#26130D] text-[#DFAE24] rounded-2xl flex items-center justify-center shadow-lg mb-4 border border-[#DFAE24]/50">
                    <FaBalanceScale className="w-10 h-10 animate-pulse" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#B88E1C] bg-[#FAF8F3] border border-[#DFAE24]/40 px-3.5 py-1 rounded-full font-heading shadow-sm">
                    Legal Repository • Error 404
                  </span>
                </div>

                {/* Big 404 Title */}
                <div>
                  <h1 className="text-6xl md:text-8xl font-black font-heading text-[#26130D] tracking-tight leading-none">
                    404
                  </h1>
                  <h2 className="text-xl md:text-2xl font-bold font-heading text-[#26130D] mt-3">
                    The requested page could not be located
                  </h2>
                  <p className="text-sm md:text-base text-[#211A17] font-medium max-w-xl mx-auto mt-2 leading-relaxed">
                    The web page, folder, or document you are trying to access has been updated, renamed, or is temporarily offline.
                  </p>
                </div>

                {/* Return Home Button */}
                <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                  <Link to="/">
                    <Button variant="primary" icon={<FaHome className="mb-0.5" />} iconPosition="left" className="px-6 py-3 shadow-md">
                      Return to Homepage
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" icon={<FaEnvelope className="mb-0.5" />} iconPosition="left" className="px-6 py-3">
                      Contact Office
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </Card>

            {/* Quick Navigation Directory Card */}
            <Card className="p-6 md:p-8 bg-white border border-[#DFAE24]/40 shadow-premium" hoverEffect={false}>
              <div className="flex items-center justify-between border-b border-[#DFAE24]/30 pb-4 mb-6">
                <div>
                  <span className="text-[10px] font-bold text-[#B88E1C] uppercase tracking-widest font-heading">Navigation Assistance</span>
                  <h3 className="text-lg font-bold font-heading text-[#26130D]">
                    Popular Campus Destinations
                  </h3>
                </div>
                <FaBullhorn className="text-[#B88E1C] w-5 h-5 hidden sm:block" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {quickLinks.map((link, idx) => (
                  <Link key={idx} to={link.path} className="group">
                    <div className="p-4 bg-[#FAF8F3] hover:bg-white border border-[#DFAE24]/30 hover:border-[#DFAE24] rounded-xl transition-all duration-300 shadow-sm hover:shadow-md h-full flex flex-col justify-between">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-[#26130D] text-[#DFAE24] flex items-center justify-center text-sm shrink-0 group-hover:scale-110 transition-transform">
                          {link.icon}
                        </div>
                        <h4 className="font-bold text-sm text-[#26130D] group-hover:text-[#B88E1C] transition-colors font-heading truncate">
                          {link.label}
                        </h4>
                      </div>
                      <p className="text-xs text-slate-500 font-medium leading-normal">
                        {link.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </Card>

            {/* Helpline Notice */}
            <div className="bg-[#26130D] text-[#FAF8F3] p-6 rounded-2xl border border-[#DFAE24]/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="w-12 h-12 rounded-full bg-[#DFAE24]/20 text-[#DFAE24] flex items-center justify-center shrink-0 border border-[#DFAE24]/30">
                  <FaQuestionCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold font-heading text-base text-white">Need help finding information?</h4>
                  <p className="text-xs text-slate-300">Contact Dr. Milind Yerne College of Law admission & administrative desk.</p>
                </div>
              </div>
              <a 
                href="tel:+919284974125"
                className="bg-[#DFAE24] hover:bg-[#F4C430] text-[#26130D] font-extrabold text-xs px-5 py-2.5 rounded-xl transition-colors shrink-0 shadow-md flex items-center gap-2"
              >
                <FaPhoneAlt className="text-xs" />
                <span>+91-92849-74125</span>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NotFound;


