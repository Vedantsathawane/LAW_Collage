import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBalanceScale, FaGraduationCap, FaBookOpen, FaUserTie, FaArrowRight, 
  FaArrowLeft, FaQuoteLeft, FaCheckCircle, FaLandmark, 
  FaGavel, FaHandsHelping, FaUserShield, FaVolumeUp, FaTimes, FaMapMarkerAlt, FaExternalLinkAlt
} from 'react-icons/fa';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/ui/Card';
import Accordion from '../components/ui/Accordion';
import { FAQS, SPECIAL_FEATURES, COURSES, NOTICES, LOCATION_DETAILS, LIBRARY_INFO } from '../data/mockData';
import useHeroSlider from '../hooks/useHeroSlider';
import { INSTITUTION_NAME, openGoogleForm } from '../config/institutionConfig';
import heroLaw1 from '../assets/hero-law-1.jpg';
import heroLaw2 from '../assets/hero-law-2.jpg';
import heroLaw3 from '../assets/hero-law-3.jpg';
import tributeImg from '../assets/tribute-malatai-yerne.jpg';

const HERO_SLIDES = [
  {
    image: heroLaw1,
    badge: "BCI & State Govt. Approved",
    eyebrow: "DR. MILIND YERNE COLLEGE OF LAW",
    title: "SHAPING THE NEXT GENERATION OF LEGAL MINDS",
    subtitle: "Dr. Milind Yerne College of Law offers LL.B. 3 & 5 Years Semester Courses, affiliated with Rashtrasant Tukadoji Maharaj Nagpur University."
  },
  {
    image: heroLaw2,
    badge: "LMYSBS Sanstha (Est. 2007)",
    eyebrow: "QUALITY LEGAL EDUCATION FOR ALL",
    title: "EDUCATION FOR ALL — LATE MALATAI YERNE LEGACY",
    subtitle: "Bringing professional legal education within reach of every section of society in Bhandara, Nagpur, Chandrapur, & Gadchiroli districts."
  },
  {
    image: heroLaw3,
    badge: "Practical Litigation Training",
    eyebrow: "CLINICAL LEGAL EDUCATION",
    title: "MOOT COURT, LEGAL AID & HUMAN RIGHTS CELL",
    subtitle: "Fostering practical courtroom advocacy, moot competitions, pro-bono rural legal aid camps, and comprehensive student development."
  }
];

const Home = () => {
  const { currentSlide, handleNext, handlePrev } = useHeroSlider(HERO_SLIDES.length);
  const [activeGalleryImg, setActiveGalleryImg] = useState(null);

  const galleryItems = [
    { title: "Moot Court Chamber", category: "Moot Court", src: heroLaw3 },
    { title: "Central Library & Reading Hall", category: "Academic Activities", src: heroLaw1 },
    { title: "Main College Campus", category: "Campus", src: heroLaw2 },
    { title: "Legal Aid Camp Outreach", category: "Legal Aid", src: heroLaw3 }
  ];

  return (
    <div className="bg-[#FAF8F3] text-[#211A17] font-body select-none overflow-hidden noise-bg">

      {/* ============================================================
          03 — HERO SECTION (EXACT COLOR SWATCH #26130D & NATURAL UNTINTED CRISP HERO IMAGE)
      ============================================================ */}
      <section className="relative h-[600px] md:h-[720px] bg-[#26130D] overflow-hidden border-b-2 border-[#DFAE24]/40" aria-label="Hero Carousel Banner">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 select-none"
          >
            {/* Pure untinted 100% sharp clear original image */}
            <img
              src={HERO_SLIDES[currentSlide].image}
              alt="Dr. Milind Yerne College of Law Campus"
              className="w-full h-full object-cover opacity-100"
            />
            {/* Clean dark gradient on text area only — leaves image crisp and uncolored */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#26130D]/95 via-[#26130D]/60 to-transparent max-w-3xl" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#26130D] to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center z-20">
          <Container>
            <div className="max-w-2xl space-y-5 md:space-y-6 text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#26130D]/90 border border-[#DFAE24]/50 shadow-md"
              >
                <span className="w-2 h-2 rounded-full bg-[#DFAE24] animate-ping" />
                <span className="text-[10px] md:text-xs font-bold text-[#DFAE24] uppercase tracking-widest font-heading">
                  {HERO_SLIDES[currentSlide].eyebrow}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading text-[#FAF8F3] leading-[1.1] tracking-tight drop-shadow-lg"
              >
                {HERO_SLIDES[currentSlide].title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xs md:text-base text-[#FAF8F3]/95 max-w-xl leading-relaxed font-normal drop-shadow-sm"
              >
                {HERO_SLIDES[currentSlide].subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 pt-3"
              >
                <Link to="/about">
                  <button className="bg-[#DFAE24] hover:bg-[#F4C430] text-[#26130D] font-extrabold text-xs md:text-sm px-6 py-3.5 rounded-xl shadow-xl transition-all border border-[#DFAE24]/40 flex items-center gap-2 cursor-pointer">
                    <span>Explore the College</span>
                    <FaArrowRight className="w-3.5 h-3.5" />
                  </button>
                </Link>
                <Link to="/academics/courses">
                  <button className="bg-[#26130D]/90 hover:bg-[#DFAE24] text-[#FAF8F3] hover:text-[#26130D] border-2 border-[#DFAE24] font-extrabold text-xs md:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all cursor-pointer">
                    View Courses
                  </button>
                </Link>
              </motion.div>
            </div>
          </Container>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-8 right-6 md:right-12 z-20 flex space-x-3 select-none">
          <button
            onClick={handlePrev}
            className="w-11 h-11 rounded-xl bg-[#26130D]/90 hover:bg-[#DFAE24] hover:text-[#26130D] border border-[#DFAE24]/50 flex items-center justify-center text-[#FAF8F3] transition-all cursor-pointer shadow-lg"
            aria-label="Previous slide"
          >
            <FaArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="w-11 h-11 rounded-xl bg-[#26130D]/90 hover:bg-[#DFAE24] hover:text-[#26130D] border border-[#DFAE24]/50 flex items-center justify-center text-[#FAF8F3] transition-all cursor-pointer shadow-lg"
            aria-label="Next slide"
          >
            <FaArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* ============================================================
          04 — IMPORTANT NOTICES
      ============================================================ */}
      <section className="bg-[#26130D] text-[#FAF8F3] border-b border-[#DFAE24]/30 py-3 relative z-30 select-none">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3 shrink-0">
              <span className="bg-[#DFAE24] text-[#26130D] text-[10px] font-extrabold px-3 py-1 rounded-xs uppercase tracking-wider font-heading flex items-center gap-1.5 shadow-xs">
                <FaVolumeUp className="animate-pulse" />
                IMPORTANT NOTICE
              </span>
              <span className="text-xs text-[#DFAE24] font-bold hidden sm:inline">Latest Announcements:</span>
            </div>

            <div className="flex-1 overflow-hidden">
              <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap gap-10 text-xs font-semibold text-[#FAF8F3]">
                {NOTICES.map((n) => (
                  <Link key={n.id} to={n.link} className="hover:text-[#DFAE24] transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#DFAE24]" />
                    <span>{n.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/student-corner/notices" className="text-xs font-extrabold text-[#DFAE24] hover:underline flex items-center gap-1 shrink-0">
              <span>View All Notices</span>
              <FaArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ============================================================
          05 — COLLEGE INTRODUCTION
      ============================================================ */}
      <section className="py-20 bg-[#FAF8F3] relative border-b border-[#DFAE24]/20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold text-[#B88E1C] tracking-widest uppercase font-heading">
                <span className="px-2.5 py-0.5 bg-[#26130D] text-[#DFAE24] rounded-xs">01</span>
                <span>ABOUT THE COLLEGE</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-[#26130D] leading-tight">
                A PLACE FOR LEGAL EDUCATION WITH PURPOSE
              </h2>
              <div className="w-20 h-1 bg-[#DFAE24] rounded-full" />
            </div>

            <div className="lg:col-span-7 space-y-5 text-sm md:text-base text-[#756D63] leading-relaxed font-body">
              <p className="font-semibold text-[#211A17]">
                <strong>{INSTITUTION_NAME}</strong> at Pauni (Dist. Bhandara) is managed by <em>Late Malatai Yerne Smruti Bahuuddeshiya Sanstha (LMYSBS)</em>, established in 2007 with the guiding mantra <strong>"Education for All"</strong>.
              </p>
              <p>
                Realizing that rural and backward areas of Bhandara, Nagpur, Chandrapur, and Gadchiroli districts required accessible professional legal education, the Sanstha established this college to empower students with theoretical jurisprudence, courtroom advocacy, and ethical responsibility.
              </p>
              <p>
                Approved by the Bar Council of India (BCI) & State Government of Maharashtra, and affiliated with <strong>Rashtrasant Tukadoji Maharaj Nagpur University</strong>, the college offers 3-Year and 5-Year LL.B. semester programs.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          06 — WHY THIS COLLEGE (REGIONAL REACH)
      ============================================================ */}
      <section className="py-20 bg-[#F5F0E6] relative border-b border-[#DFAE24]/20">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-xs font-extrabold text-[#B88E1C] tracking-widest uppercase font-heading">
              REGIONAL IMPACT & ACCESSIBILITY
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-[#26130D]">
              LEGAL EDUCATION WITHIN REACH
            </h2>
            <p className="text-xs md:text-sm text-[#756D63] max-w-xl mx-auto">
              Serving students across Pauni Municipal council, Bhandara, Nagpur, Chandrapur, Gadchiroli, and Gondia districts.
            </p>
          </div>

          {/* Regional Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LOCATION_DETAILS.distances.map((item, idx) => (
              <Card key={idx} className="p-6 bg-[#FAF8F3] border border-[#DFAE24]/30 shadow-premium flex flex-col items-center text-center" hoverEffect={true}>
                <div className="w-12 h-12 rounded-full bg-[#26130D]/10 text-[#26130D] flex items-center justify-center mb-3">
                  <FaMapMarkerAlt className="w-5 h-5 text-[#B88E1C]" />
                </div>
                <h3 className="text-lg font-bold font-heading text-[#26130D]">{item.city}</h3>
                <p className="text-xs font-extrabold text-[#B88E1C] uppercase tracking-wider mt-1">{item.distance} Distance</p>
              </Card>
            ))}
          </div>

          <div className="mt-10 p-6 bg-[#FAF8F3] border border-[#DFAE24]/30 rounded-2xl max-w-4xl mx-auto text-center space-y-2">
            <h4 className="text-xs font-bold text-[#26130D] uppercase tracking-widest font-heading">
              Covered Surrounding Talukas & Regions
            </h4>
            <p className="text-xs md:text-sm text-[#756D63] font-medium leading-relaxed">
              Nagbhid, Rampuri, Chimur (Chandrapur) • Wadasa, Armori, Kurkheda (Gadchiroli) • Bhiwapur (Nagpur) • Lakhandur, Lakhani, Sakoli (Bhandara) • Pauni Municipal Region
            </p>
          </div>
        </Container>
      </section>

      {/* ============================================================
          07 — COURSES
      ============================================================ */}
      <section className="py-20 bg-[#FAF8F3] relative border-b border-[#DFAE24]/20">
        <Container>
          <SectionTitle title="ACADEMIC PROGRAMS" subtitle="Degree Courses" centered={true} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {COURSES.map((course) => (
              <div key={course.id} className="p-8 bg-white border border-[#DFAE24]/30 rounded-2xl shadow-premium flex flex-col justify-between relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-28 sm:h-28 bg-[#F4ECDA] rounded-bl-full pointer-events-none group-hover:scale-105 transition-transform border-b border-l border-[#DFAE24]/30 z-0" />

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-extrabold font-heading text-[#B88E1C]">
                      {course.id === 'llb-3yr' ? '03' : '05'}
                    </span>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#B88E1C] block">YEAR PROGRAM</span>
                      <h3 className="text-xl font-bold font-heading text-[#26130D]">{course.name}</h3>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-[#756D63] leading-relaxed mb-6 font-body">
                    {course.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-xs bg-[#FAF8F3] p-4 rounded-xl border border-[#DFAE24]/30 mb-6">
                    <div>
                      <span className="font-extrabold text-[#B88E1C] text-[10px] uppercase tracking-wider block mb-0.5 font-heading">DURATION</span>
                      <span className="font-bold text-[#26130D]">{course.duration}</span>
                    </div>
                    <div>
                      <span className="font-extrabold text-[#B88E1C] text-[10px] uppercase tracking-wider block mb-0.5 font-heading">SANCTIONED INTAKE</span>
                      <span className="font-bold text-[#26130D]">{course.intake} Seats</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-[#DFAE24]/20 pt-4">
                  <Link to="/academics/courses" className="text-xs font-bold text-[#26130D] hover:text-[#B88E1C] flex items-center gap-1.5 transition-colors">
                    <span>View Syllabus Details</span>
                    <FaArrowRight className="w-3 h-3 text-[#B88E1C]" />
                  </Link>
                  <button
                    onClick={openGoogleForm}
                    className="bg-[#26130D] hover:bg-[#3D2017] text-[#DFAE24] text-xs font-extrabold px-5 py-2.5 rounded-xl shadow-md border border-[#DFAE24]/40 flex items-center gap-1.5 cursor-pointer transition-all shrink-0"
                  >
                    <span>Apply Now</span>
                    <FaExternalLinkAlt className="w-3 h-3 text-[#DFAE24]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ============================================================
          08 — VISION & MISSION (DARK COLOR SWATCH #26130D SECTION WITH WHITE CARDS)
      ============================================================ */}
      <section className="py-20 bg-[#26130D] text-[#FAF8F3] relative border-b border-[#DFAE24]/30">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            <div className="space-y-5 p-8 bg-white text-[#211A17] border-2 border-[#DFAE24] rounded-2xl shadow-xl relative">
              <span className="text-xs font-extrabold text-[#B88E1C] uppercase tracking-widest font-heading">
                INSTITUTIONAL VISION
              </span>
              <h3 className="text-2xl md:text-4xl font-extrabold font-heading text-[#26130D]">
                VISION
              </h3>
              <p className="text-sm md:text-base text-[#26130D] leading-relaxed font-serif italic border-l-4 border-[#DFAE24] pl-4">
                "To emerge as a centre of excellence in legal education, producing dynamic lawyers and legal professionals equipped with statutory knowledge, professional ethics, and a deep commitment towards nation building and social justice."
              </p>
            </div>

            <div className="space-y-5 p-8 bg-white text-[#211A17] border-2 border-[#DFAE24] rounded-2xl shadow-xl relative">
              <span className="text-xs font-extrabold text-[#B88E1C] uppercase tracking-widest font-heading">
                INSTITUTIONAL MISSION
              </span>
              <h3 className="text-2xl md:text-4xl font-extrabold font-heading text-[#26130D]">
                MISSION
              </h3>
              <ul className="space-y-3 text-xs md:text-sm text-[#26130D] leading-relaxed font-body font-medium">
                <li className="flex items-start gap-2">
                  <span className="text-[#B88E1C] font-bold">•</span>
                  <span>To make professional legal education accessible to every section of society in rural and urban areas.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B88E1C] font-bold">•</span>
                  <span>To sharpen lawyering skills through compulsory moot court simulations, mock trials, and clinical legal aid.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#B88E1C] font-bold">•</span>
                  <span>To instill human values, discipline, and moral sensitivity towards disadvantaged and underprivileged sections.</span>
                </li>
              </ul>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          09 — TRIBUTE TO OUR INSPIRATION (LATE MALATAI YERNE)
      ============================================================ */}
      <section className="py-24 bg-[#FAF8F3] relative border-b border-[#DFAE24]/30">
        <Container>
          <div className="max-w-5xl mx-auto gold-framed-box p-8 md:p-14 rounded-3xl bg-[#FAF8F3]">
            
            {/* Header Title */}
            <div className="text-center space-y-3 mb-10">
              <span className="text-xs font-extrabold text-[#B88E1C] uppercase tracking-widest font-heading">
                A TRIBUTE TO OUR INSPIRATION
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-[#26130D] tracking-tight">
                LATE MALATAI YERNE
              </h2>
              <div className="w-24 h-0.5 bg-[#DFAE24] mx-auto" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Framed Portrait Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative p-3 bg-white border-2 border-[#DFAE24] rounded-2xl shadow-2xl max-w-sm">
                  <div className="overflow-hidden rounded-xl border border-[#DFAE24]/40">
                    <img
                      src={tributeImg}
                      alt="A Tribute to Our Inspiration - Late Malatai Yerne"
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700 opacity-100"
                    />
                  </div>
                </div>
              </div>

              {/* Quote Block from Official Poster */}
              <div className="lg:col-span-7 space-y-6">
                <div className="bg-[#26130D] text-[#FAF8F3] p-8 md:p-10 rounded-2xl border-2 border-[#DFAE24]/40 shadow-xl relative">
                  <FaQuoteLeft className="text-[#DFAE24]/40 w-10 h-10 mb-4" />
                  
                  <p className="text-sm md:text-base leading-relaxed font-serif italic text-[#FAF8F3]">
                    "Education for All' was your mantra which we imbibe while laying the foundation of our 'Sanstha'. It's been your inspiration & blessings that has enabled us to make 'professional education' within reach of every section of the society. In future we commit our self to make your dream get fulfilled in real sense by empowering society through quality education."
                  </p>

                  <div className="mt-6 border-t border-[#DFAE24]/30 pt-4 text-right">
                    <p className="text-xs font-bold text-[#DFAE24] uppercase tracking-widest font-heading">
                      Late Malatai Yerne Smruti Bahuuddeshiya Sanstha
                    </p>
                    <p className="text-[10px] text-[#FAF8F3]/70 font-mono mt-0.5">Est. 2007 • Registration & Governance</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* ============================================================
          10 — LEGAL EDUCATION EXPERIENCE & 11 MOOT COURT
      ============================================================ */}
      <section className="py-20 bg-[#F5F0E6] relative border-b border-[#DFAE24]/20">
        <Container>
          <div className="text-center space-y-3 mb-14">
            <span className="text-xs font-extrabold text-[#B88E1C] tracking-widest uppercase font-heading">
              BEYOND THE CLASSROOM
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-[#26130D]">
              LEARNING LAW THROUGH EXPERIENCE
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Moot Court Featured Big Card */}
            <div className="lg:col-span-7 bg-white border border-[#DFAE24]/30 rounded-2xl p-8 shadow-premium flex flex-col justify-between">
              <div>
                <span className="bg-[#26130D] text-[#DFAE24] text-[10px] font-extrabold px-3 py-1 rounded-xs uppercase tracking-wider">
                  FEATURED CLINICAL TRAINING
                </span>
                <h3 className="text-2xl font-bold font-heading text-[#26130D] mt-4 mb-3">
                  Moot Court Association & Mock Trials
                </h3>
                <p className="text-xs md:text-sm text-[#756D63] leading-relaxed mb-6 font-body">
                  To sharpen lawyering skills, mock cases and moot courts are organized systematically. Moot court is compulsory for every 3-Year LL.B. student (from 1st semester) and 5-Year LL.B. student (from 5th semester) under RTMNU regulations.
                </p>
              </div>

              <div className="relative h-64 rounded-xl overflow-hidden mb-6 border border-[#DFAE24]/30">
                <img src={heroLaw3} alt="Moot Court Exercise" className="w-full h-full object-cover opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#26130D]/80 to-transparent flex items-end p-4">
                  <span className="text-xs font-bold text-[#DFAE24]">Practical Advocacy & Courtroom Defense Preparation</span>
                </div>
              </div>

              <Link to="/academics/training">
                <button className="bg-[#26130D] hover:bg-[#3D2017] text-[#DFAE24] font-extrabold text-xs px-5 py-3 rounded-xl transition-all flex items-center gap-2 cursor-pointer">
                  <span>Explore Moot Court Details</span>
                  <FaArrowRight className="w-3.5 h-3.5" />
                </button>
              </Link>
            </div>

            {/* Other Activities Stack */}
            <div className="lg:col-span-5 space-y-4">
              {SPECIAL_FEATURES.filter(f => f.title !== "Moot Court Association").slice(0, 4).map((feat, idx) => (
                <div key={idx} className="p-5 bg-white border border-[#DFAE24]/30 rounded-xl shadow-xs hover:border-[#DFAE24] transition-all">
                  <h4 className="text-base font-bold font-heading text-[#26130D] mb-1">{feat.title}</h4>
                  <p className="text-xs text-[#756D63] leading-relaxed font-body">{feat.description}</p>
                </div>
              ))}
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          12 — LEGAL AID + HUMAN RIGHTS CELL
      ============================================================ */}
      <section className="py-20 bg-[#FAF8F3] relative border-b border-[#DFAE24]/20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            <div className="p-8 bg-white border border-[#DFAE24]/30 rounded-2xl shadow-premium space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#26130D]/10 text-[#26130D] flex items-center justify-center">
                <FaHandsHelping className="w-6 h-6 text-[#B88E1C]" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#26130D]">Legal Aid Camp</h3>
              <p className="text-xs md:text-sm text-[#756D63] leading-relaxed font-body">
                LMYSBS organizes legal aid camps every year to benefit the poor, weaker, illiterate, and people who have suffered injustice in rural and surrounding backward areas.
              </p>
            </div>

            <div className="p-8 bg-white border border-[#DFAE24]/30 rounded-2xl shadow-premium space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#26130D]/10 text-[#26130D] flex items-center justify-center">
                <FaUserShield className="w-6 h-6 text-[#B88E1C]" />
              </div>
              <h3 className="text-xl font-bold font-heading text-[#26130D]">Human Rights Cell</h3>
              <p className="text-xs md:text-sm text-[#756D63] leading-relaxed font-body">
                Formed by LMYSBS to grow human values and morals in students, making them sensitive towards human rights of disadvantaged and underprivileged weaker sections of society.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          13 — LIBRARY / ACADEMIC RESOURCES (EXACT COLOR SWATCH #26130D SECTION)
      ============================================================ */}
      <section className="py-20 bg-[#26130D] text-[#FAF8F3] relative border-b border-[#DFAE24]/30">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-extrabold text-[#DFAE24] uppercase tracking-widest font-heading">
                KNOWLEDGE BEYOND THE CLASSROOM
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-[#FAF8F3]">
                CENTRAL COLLEGE LIBRARY
              </h2>
              <p className="text-xs md:text-sm text-[#FAF8F3]/90 leading-relaxed font-body">
                {LIBRARY_INFO.description}
              </p>

              <div className="p-5 bg-[#3D2017] border border-[#DFAE24]/30 rounded-xl space-y-2 text-xs shadow-sm">
                <h4 className="font-bold text-[#DFAE24] uppercase tracking-wide font-heading">Library Regulations</h4>
                <ul className="space-y-1.5 text-[#FAF8F3]/90 font-medium">
                  {LIBRARY_INFO.rules.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#DFAE24] font-bold">•</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border-2 border-[#DFAE24]/40 shadow-xl">
                <img src={heroLaw1} alt="College Library" className="w-full h-72 object-cover opacity-100" />
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* ============================================================
          16 — GALLERY (LIGHTBOX CAPABLE)
      ============================================================ */}
      <section className="py-20 bg-[#FAF8F3] relative border-b border-[#DFAE24]/20">
        <Container>
          <SectionTitle title="CAMPUS GALLERY" subtitle="Visual Highlights" centered={true} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveGalleryImg(item)}
                className="group relative rounded-2xl overflow-hidden border border-[#DFAE24]/30 shadow-premium cursor-pointer bg-white"
              >
                <img src={item.src} alt={item.title} className="w-full h-48 object-cover opacity-100 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#26130D]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <span className="text-[10px] text-[#DFAE24] font-bold uppercase">{item.category}</span>
                  <h4 className="text-sm font-bold text-white leading-tight">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Lightbox Modal */}
      {activeGalleryImg && (
        <div className="fixed inset-0 z-50 bg-[#26130D]/90 flex items-center justify-center p-4" onClick={() => setActiveGalleryImg(null)}>
          <div className="relative max-w-3xl w-full bg-white p-2 rounded-2xl overflow-hidden shadow-2xl" onClick={e => e.stopPropagation()}>
            <button onClick={() => setActiveGalleryImg(null)} className="absolute top-4 right-4 p-2 bg-white/80 rounded-full text-[#26130D] z-10">
              <FaTimes />
            </button>
            <img src={activeGalleryImg.src} alt={activeGalleryImg.title} className="w-full h-auto max-h-[75vh] object-contain rounded-xl opacity-100" />
            <div className="p-4 text-center">
              <h3 className="text-base font-bold text-[#26130D] font-heading">{activeGalleryImg.title}</h3>
            </div>
          </div>
        </div>
      )}

      {/* ============================================================
          17 — IMPORTANT LINKS & FAQ ACCORDION
      ============================================================ */}
      <section className="py-20 bg-[#F5F0E6] relative border-b border-[#DFAE24]/20">
        <Container>
          <SectionTitle title="FREQUENTLY ASKED QUESTIONS" subtitle="Student Info" centered={true} />

          <div className="max-w-3xl mx-auto">
            <Accordion
              items={FAQS.map(f => ({
                title: f.q,
                content: f.a
              }))}
            />
          </div>
        </Container>
      </section>

      {/* ============================================================
          18 — CONTACT CTA (EXACT COLOR SWATCH #26130D DESIGN)
      ============================================================ */}
      <section className="py-20 bg-[#26130D] text-[#FAF8F3] text-center relative border-t-2 border-[#DFAE24]">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-extrabold text-[#DFAE24] uppercase tracking-widest font-heading">
              ADMISSIONS OPEN SESSION 2026-27
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading text-[#FAF8F3]">
              BEGIN YOUR LEGAL EDUCATION JOURNEY
            </h2>
            <p className="text-xs md:text-sm text-[#FAF8F3]/90 leading-relaxed max-w-xl mx-auto font-normal">
              Join Dr. Milind Yerne College of Law to pursue LL.B. 3 & 5 Years Semester Courses approved by the Bar Council of India & RTMNU.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <button
                onClick={openGoogleForm}
                className="bg-[#DFAE24] hover:bg-[#F4C430] text-[#26130D] font-extrabold text-xs md:text-sm px-6 py-3.5 rounded-xl shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <span>Apply Now (Google Form)</span>
                <FaExternalLinkAlt className="w-3.5 h-3.5" />
              </button>
              <Link to="/admission/apply">
                <button className="bg-[#26130D] hover:bg-[#3D2017] text-[#FAF8F3] border-2 border-[#DFAE24] font-bold text-xs md:text-sm px-6 py-3.5 rounded-xl shadow-md cursor-pointer">
                  Admission Portal & Requirements
                </button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
};

export default Home;
