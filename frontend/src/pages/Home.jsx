import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBalanceScale, FaAward, FaBookOpen, FaUserTie, FaArrowRight, FaArrowLeft, FaGraduationCap, FaChevronDown, FaCheckCircle, FaBriefcase } from 'react-icons/fa';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import Card from '../components/ui/Card';
import Accordion from '../components/ui/Accordion';
import NoticeTicker from '../components/common/NoticeTicker';
import NewsCard from '../components/home/NewsCard';
import EventCard from '../components/home/EventCard';
import RecruiterSlider from '../components/placement/RecruiterSlider';
import { DEPARTMENTS, NEWS, EVENTS, FAQS } from '../data/mockData';
import useHeroSlider from '../hooks/useHeroSlider';
import { INSTITUTION_NAME, INSTITUTION_SHORT_NAME } from '../config/institutionConfig';
import heroLaw1 from '../assets/hero-law-1.jpg';
import heroLaw2 from '../assets/hero-law-2.jpg';
import heroLaw3 from '../assets/hero-law-3.jpg';

const HERO_SLIDES = [
  {
    image: heroLaw1,
    badge: "Est. 1965",
    title: "A Legacy of Judicial Excellence Since 1965",
    subtitle: "Nurturing elite legal practitioners, pro-bono advocates, and judicial officers of the state. Approved by the Bar Council of India."
  },
  {
    image: heroLaw2,
    badge: "NAAC A++ Grade",
    title: "Highest Institutional Trust & Prestige",
    subtitle: "Consistently ranked among the peak state-funded law colleges in the nation with a certified CGPA score of 3.78."
  },
  {
    image: heroLaw3,
    badge: "91.8% Placement",
    title: "Premier Placements & Clerkships",
    subtitle: "Direct associate hires in Tier-1 corporate law firms (Khaitan, Cyril Amarchand, AZB) and legal compliance boards."
  }
];

const STATS_CARDS = [
  { icon: <FaBalanceScale className="text-secondary w-5 h-5" />, value: "BCI APPROVED", label: "Legal Curriculum Affiliation" },
  { icon: <FaAward className="text-secondary w-5 h-5" />, value: "NAAC A++ GRADE", label: "Peak CGPA Rank: 3.78" },
  { icon: <FaUserTie className="text-secondary w-5 h-5" />, value: "91.8% PLACED", label: "Tier-1 Associate Placements" },
  { icon: <FaBookOpen className="text-secondary w-5 h-5" />, value: "5 DIGITAL PORTALS", label: "SCC Online & Manupatra Access" }
];

const Home = () => {
  const { currentSlide, handleNext, handlePrev } = useHeroSlider(HERO_SLIDES.length);

  return (
    <div className="bg-slate-50 font-body select-none overflow-hidden noise-bg">
      {/* Notice Ticker */}
      <NoticeTicker />

      {/* Hero Section */}
      <section className="relative h-[550px] md:h-[750px] bg-slate-950 overflow-hidden" aria-label="Hero Carousel Banner">
        
        {/* Animated background soft light gradient blobs */}
        <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-primary/20 rounded-full blur-3xl animate-float-1 pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-accent/15 rounded-full blur-3xl animate-float-2 pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 select-none"
          >
            <img
              src={HERO_SLIDES[currentSlide].image}
              alt="GWLC Campus Banner"
              className="w-full h-full object-cover opacity-60"
            />
            {/* Elegant double shadow gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/65 to-slate-950/20" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Slide Content Overlay */}
        <div className="absolute inset-0 flex items-center z-20">
          <Container>
            <div className="max-w-3xl space-y-5 md:space-y-7 text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping" />
                <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest">
                  {HERO_SLIDES[currentSlide].badge}
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-heading text-white leading-tight"
              >
                {HERO_SLIDES[currentSlide].title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xs md:text-base text-slate-300 max-w-xl leading-relaxed font-light"
              >
                {HERO_SLIDES[currentSlide].subtitle}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex items-center gap-4 pt-2.5"
              >
                <Link to="/admission/apply">
                  <Button variant="secondary" size="lg" icon={<FaArrowRight />}>
                    Enroll Online
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-950">
                    Explore Legacy
                  </Button>
                </Link>
              </motion.div>
            </div>
          </Container>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-28 right-6 md:right-12 z-20 flex space-x-3.5 select-none">
          <button
            onClick={handlePrev}
            className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 hover:bg-secondary hover:text-primary-dark border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer"
            aria-label="Previous slide"
          >
            <FaArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/10 hover:bg-secondary hover:text-primary-dark border border-white/20 flex items-center justify-center text-white transition-all cursor-pointer"
            aria-label="Next slide"
          >
            <FaArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Floating Statistics Panel Section */}
      <section className="-mt-16 relative z-30 select-none pb-12">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {STATS_CARDS.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="p-6 bg-white/90 backdrop-blur-md border border-slate-100/80 shadow-premium flex items-center gap-4 hoverEffect" hoverEffect={true}>
                  <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                    {stat.icon}
                  </div>
                  <div>
                    <h3 className="text-xs md:text-sm font-extrabold font-heading text-primary-dark tracking-wider">
                      {stat.value}
                    </h3>
                    <p className="text-[10px] md:text-xs text-slate-400 font-semibold mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Asymmetrical Editorial About College Section */}
      <section className="py-20 bg-white relative">
        
        {/* Soft grid overlay patterns */}
        <div className="absolute inset-0 grid-pattern opacity-60 pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column: Narrative copy */}
            <div className="lg:col-span-6 space-y-6">
              <SectionTitle title="Shaping the Future of Jurisprudence" subtitle={`About ${INSTITUTION_SHORT_NAME}`} />
              
              <div className="text-slate-600 space-y-4 text-xs md:text-sm leading-relaxed font-body font-medium">
                <p>
                  Established in 1965, the {INSTITUTION_NAME} ({INSTITUTION_SHORT_NAME}) stands as a landmark of higher legal training in the state. Backed by Bar Council of India (BCI) approvals and a peak <b className="text-primary-dark font-extrabold">NAAC Grade A++ (3.78 CGPA)</b>, we foster rigorous legal literacy and moot advocacy frameworks.
                </p>
                <p>
                  Our institution houses a state-of-the-art central Moot Court Hall, pro-bono Legal Aid clinics running in tandem with District Legal Services Authorities (DLSA), and extensive digital subscription vaults hosting databases like SCC Online, HeinOnline, and Westlaw.
                </p>
              </div>

              <div className="flex gap-4 pt-3 select-none">
                <Link to="/about">
                  <Button variant="primary">Read Legacy Profile</Button>
                </Link>
                <Link to="/student-corner/gallery">
                  <Button variant="outline">Campus Gallery</Button>
                </Link>
              </div>
            </div>

            {/* Right Column: Stacked double overlapping image framework */}
            <div className="lg:col-span-6 relative h-[380px] md:h-[450px] w-full max-w-md mx-auto select-none mt-10 lg:mt-0">
              <div className="absolute inset-4 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-10">
                <img
                  src={heroLaw1}
                  alt="Moot Court Hall Bench"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-4 rounded-2xl overflow-hidden shadow-xl border-4 border-white transform translate-x-12 translate-y-12 opacity-60">
                <img
                  src={heroLaw2}
                  alt="Law Library Research"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Gold Scaled Stamp frame */}
              <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 z-20 bg-secondary text-primary-dark font-extrabold text-[10px] uppercase tracking-widest px-4 py-2.5 rounded-xl shadow-lg border border-white flex items-center gap-1.5 select-none">
                <FaCheckCircle className="w-3.5 h-3.5" />
                <span>BCI Confirmed</span>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Academic Divisions Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100/80 relative">
        <Container>
          <SectionTitle title="Elite Jurisprudential Divisions" subtitle="Academic Departments" centered={true} />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 select-none">
            {DEPARTMENTS.map((dept, idx) => (
              <motion.div
                key={dept.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="p-6 bg-white border border-slate-100 flex flex-col justify-between h-full hoverEffect" hoverEffect={true}>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[9px] font-extrabold text-secondary uppercase bg-primary-dark px-2.5 py-1 rounded-md">
                        Est. {dept.established}
                      </span>
                      <span className="text-[10px] font-mono text-muted uppercase font-bold">
                        Code: {dept.code}
                      </span>
                    </div>
                    
                    <h3 className="text-base md:text-lg font-bold font-heading text-primary-dark mb-2.5 leading-tight line-clamp-2">
                      {dept.name}
                    </h3>
                    
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-4 font-light">
                      {dept.description}
                    </p>
                  </div>

                  <Link to="/academics/departments" className="mt-6 text-xs font-bold text-primary hover:text-accent flex items-center gap-1">
                    <span>Explore Syllabus</span>
                    <FaArrowRight className="w-2.5 h-2.5" />
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Magazine Press Alerts & Events Section */}
      <section className="py-20 bg-white relative">
        
        {/* Abstract blur background blobs */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
            
            {/* News feed column */}
            <div className="lg:col-span-7 space-y-6">
              <SectionTitle title="Latest Press & Media Alerts" subtitle="News & Updates" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 select-none">
                {NEWS.slice(0, 2).map((item) => (
                  <NewsCard key={item.id} news={item} onSelect={() => alert(`Redirecting to news page: /student-corner/news`)} />
                ))}
              </div>
            </div>

            {/* Events calendar column */}
            <div className="lg:col-span-5 space-y-6">
              <SectionTitle title="Upcoming Activities" subtitle="Events Calendar" />
              <div className="space-y-4 select-none">
                {EVENTS.slice(0, 2).map((evt) => (
                  <EventCard key={evt.id} event={evt} onSelect={() => alert(`Redirecting to event page: /student-corner/events`)} />
                ))}
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Recruiters Infinite Slider */}
      <section className="py-16 bg-slate-50 border-y border-slate-100 select-none">
        <Container>
          <SectionTitle title="Elite Law Firms & Placement Partners" subtitle="Associate Placements" centered={true} />
          <RecruiterSlider />
        </Container>
      </section>

      {/* Interactive FAQ Accordions */}
      <section className="py-20 bg-white relative">
        <Container>
          <SectionTitle title="Frequently Asked Questions" subtitle="Student Support FAQ" centered={true} />
          
          <div className="max-w-3xl mx-auto select-none">
            <Accordion
              items={FAQS.map((faq) => ({
                title: faq.q,
                content: faq.a
              }))}
            />
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Home;
