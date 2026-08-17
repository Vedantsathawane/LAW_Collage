import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronUp, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import Container from '../common/Container';
import { INSTITUTION_NAME, DEVELOPED_BY } from '../../config/institutionConfig';

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.pageYOffset > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing to updates from ${INSTITUTION_NAME}.`);
    e.target.reset();
  };

  return (
    <footer className="bg-[#26130D] text-[#FAF8F3]/90 pt-16 pb-8 relative border-t-2 border-[#DFAE24] font-body select-none">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start mb-12">
          
          {/* Column 1: Institution Brand Details */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-3.5">
              <img 
                src="/logo.png" 
                alt="Dr. Milind Yerne College of Law" 
                className="h-14 w-auto object-contain bg-white rounded-lg p-1 shadow-md shrink-0 border border-[#DFAE24]/40" 
              />
              <div>
                <h3 className="text-base font-extrabold uppercase font-heading tracking-wider text-white">
                  Dr. Milind Yerne
                </h3>
                <p className="text-[11px] text-[#DFAE24] font-bold uppercase tracking-widest mt-0.5">
                  College of Law
                </p>
              </div>
            </Link>
            
            <p className="text-xs text-[#FAF8F3]/80 leading-relaxed font-normal">
              Managed by <strong className="text-[#DFAE24]">Late Malatai Yerne Smruti Bahuuddeshiya Sanstha</strong> (Est. 2007). Approved by Bar Council of India (BCI) & State Govt. of Maharashtra, affiliated with Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU).
            </p>

            {/* Social Icons row */}
            <div className="flex space-x-3 pt-1">
              {[
                { icon: <FaFacebookF />, path: "#facebook" },
                { icon: <FaTwitter />, path: "#twitter" },
                { icon: <FaLinkedinIn />, path: "#linkedin" },
                { icon: <FaYoutube />, path: "#youtube" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.path}
                  className="w-8 h-8 rounded-lg bg-[#3D2017] hover:bg-[#DFAE24] border border-[#DFAE24]/40 flex items-center justify-center text-[#FAF8F3] hover:text-[#26130D] transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[#DFAE24] font-heading font-bold text-sm uppercase tracking-wider mb-1 border-b border-[#DFAE24]/30 pb-2">
              Navigation & Academics
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link to="/about" className="hover:text-[#DFAE24] transition-colors">
                  About College & History
                </Link>
              </li>
              <li>
                <Link to="/academics/courses" className="hover:text-[#DFAE24] transition-colors">
                  LL.B. 3 & 5 Years Programs
                </Link>
              </li>
              <li>
                <Link to="/admission/procedure" className="hover:text-[#DFAE24] transition-colors">
                  Admissions Procedure & Eligibility
                </Link>
              </li>
              <li>
                <Link to="/admission/fees" className="hover:text-[#DFAE24] transition-colors">
                  Fee Structure & Norms
                </Link>
              </li>
              <li>
                <Link to="/student-corner/downloads" className="hover:text-[#DFAE24] transition-colors">
                  Prospectus & Rules Handbook
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[#DFAE24] font-heading font-bold text-sm uppercase tracking-wider mb-1 border-b border-[#DFAE24]/30 pb-2">
              Contact Location
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-[#DFAE24] w-4 h-4 shrink-0 mt-0.5" />
                <span className="text-[#FAF8F3]/90 leading-relaxed">
                  Dr. Milind Yerne College of Law, Pauni, Dist. Bhandara, Maharashtra - 441910
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#DFAE24] w-3.5 h-3.5 shrink-0" />
                <a href="tel:+919422155100" className="hover:text-[#DFAE24] transition-colors">+91-94221-55100</a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-[#DFAE24] w-3.5 h-3.5 shrink-0" />
                <a href="mailto:info@dmycl.edu.in" className="hover:text-[#DFAE24] transition-colors">info@dmycl.edu.in</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[#DFAE24] font-heading font-bold text-sm uppercase tracking-wider mb-1 border-b border-[#DFAE24]/30 pb-2">
              Updates Desk
            </h4>
            <p className="text-xs text-[#FAF8F3]/80 leading-relaxed font-normal">
              Subscribe for institutional updates, notices, and exam announcements.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-xs border border-[#DFAE24]/40 rounded-lg focus:outline-none focus:border-[#DFAE24] text-white bg-[#3D2017]/60"
              />
              <button
                type="submit"
                className="bg-[#DFAE24] hover:bg-[#F4C430] text-[#26130D] text-xs font-extrabold px-3 py-2 rounded-lg transition-all cursor-pointer shadow-xs"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Divider & Copyright — UI/UX Signature Bar */}
        <div className="border-t border-[#DFAE24]/30 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-[#FAF8F3]/70 font-medium">
          {/* Copyright */}
          <p className="text-center md:text-left text-[#FAF8F3]/60">
            &copy; {new Date().getFullYear()} {INSTITUTION_NAME}. All Rights Reserved.
          </p>

          {/* Centered Premium Designer Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-[#3D2017]/60 border border-[#DFAE24]/35 text-[11px] shadow-sm hover:border-[#DFAE24] transition-all">
            <span className="text-[10px] font-bold text-[#DFAE24] uppercase tracking-widest font-heading">
              Design & Tech
            </span>
            <span className="text-[#DFAE24]/40">|</span>
            <span className="font-extrabold text-[#FAF8F3] tracking-wide">
              {DEVELOPED_BY}
            </span>
          </div>

          {/* Quick Institutional Links */}
          <div className="flex items-center space-x-3 text-[#FAF8F3]/60">
            <Link to="/academics/rti" className="hover:text-[#DFAE24] transition-colors">RTI Cell</Link>
            <span className="text-[#DFAE24]/30">•</span>
            <Link to="/academics/anti-ragging" className="hover:text-[#DFAE24] transition-colors">Anti-Ragging Squad</Link>
            <span className="text-[#DFAE24]/30">•</span>
            <Link to="/academics/grievance-cell" className="hover:text-[#DFAE24] transition-colors">Grievance Redressal</Link>
          </div>
        </div>
      </Container>

      {/* Floating Back to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-10 h-10 rounded-xl bg-[#DFAE24] hover:bg-[#F4C430] text-[#26130D] border border-[#B88E1C]/40 flex items-center justify-center shadow-lg transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
          aria-label="Back to Top"
        >
          <FaChevronUp className="w-4 h-4 text-[#26130D]" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
