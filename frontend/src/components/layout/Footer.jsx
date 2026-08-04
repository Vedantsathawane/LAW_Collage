import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronUp, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaBalanceScale } from 'react-icons/fa';
import Container from '../common/Container';
import { INSTITUTION_NAME, INSTITUTION_SHORT_NAME } from '../../config/institutionConfig';

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
    alert(`Thank you for subscribing to ${INSTITUTION_SHORT_NAME} news updates.`);
    e.target.reset();
  };

  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-8 relative border-t border-slate-900 font-body select-none">
      
      {/* Background radial highlight */}
      <div className="absolute top-0 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start mb-16">
          
          {/* Column 1: Institution Brand Details */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white shadow-lg shadow-primary/20 shrink-0">
                <FaBalanceScale className="w-5.5 h-5.5 text-secondary" />
              </div>
              <div>
                <h3 className="text-base font-extrabold uppercase font-heading tracking-wider text-white">
                  {INSTITUTION_SHORT_NAME}
                </h3>
                <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest mt-0.5">
                  {INSTITUTION_NAME}
                </p>
              </div>
            </Link>
            
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-light">
              {INSTITUTION_NAME} ({INSTITUTION_SHORT_NAME}) is a premier BCI-approved institution accredited with a peak NAAC A++ Grade, fostering ethical advocacy standards, jurisprudential academic excellence, and global legal leadership.
            </p>

            {/* Social Icons row */}
            <div className="flex space-x-3">
              {[
                { icon: <FaFacebookF />, path: "#facebook" },
                { icon: <FaTwitter />, path: "#twitter" },
                { icon: <FaLinkedinIn />, path: "#linkedin" },
                { icon: <FaYoutube />, path: "#youtube" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.path}
                  className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-primary border border-slate-800/80 hover:border-primary-light flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-1 border-b border-slate-800 pb-2">
              Admissions
            </h4>
            <ul className="space-y-3.5 text-xs font-semibold">
              <li>
                <Link to="/admission/apply" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Apply Online 2026-27
                </Link>
              </li>
              <li>
                <Link to="/admission/procedure" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Guidelines & Steps
                </Link>
              </li>
              <li>
                <Link to="/admission/fees" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Course Fee Sheet
                </Link>
              </li>
              <li>
                <Link to="/admission/scholarship" className="hover:text-white hover:translate-x-1 inline-block transition-all">
                  Scholarships & Cuts
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-1 border-b border-slate-800 pb-2">
              Contact Desk
            </h4>
            <ul className="space-y-3.5 text-xs font-semibold">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-secondary w-4 h-4 shrink-0 mt-0.5" />
                <span className="text-slate-500 font-light leading-relaxed">
                  North Campus, Mall Road, University Enclave, New Delhi, 110007, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-secondary w-4 h-4 shrink-0" />
                <a href="tel:+911127667725" className="hover:text-secondary transition-colors">+91-11-27667725</a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-secondary w-4 h-4 shrink-0" />
                <a href="mailto:info@gwlc.edu.in" className="hover:text-secondary transition-colors">info@gwlc.edu.in</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Map Preview */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-1 border-b border-slate-800 pb-2">
              Institutional Updates
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed font-light">
              Subscribe to the legal advisory desk newsletters for moot problems lists, events, and results.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Enter email address"
                className="w-full px-3.5 py-2 text-xs border border-slate-800 rounded-xl focus:outline-none focus:border-primary text-slate-200 bg-slate-900/60"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-light text-white text-xs font-bold px-4 py-2 rounded-xl transition-all cursor-pointer border border-primary-light/10"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] md:text-xs text-slate-600 font-semibold uppercase">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} {INSTITUTION_NAME}. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <Link to="/academics/rti" className="hover:text-slate-400">RTI Cell Link</Link>
            <Link to="/academics/anti-ragging" className="hover:text-slate-400">Anti-Ragging Squad</Link>
            <Link to="/academics/grievance-cell" className="hover:text-slate-400">Grievance Portal</Link>
          </div>
        </div>
      </Container>

      {/* Floating Back to Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-xl bg-primary hover:bg-primary-light text-white border border-primary-light/20 flex items-center justify-center shadow-lg transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer animate-fade-in"
          aria-label="Back to Top"
        >
          <FaChevronUp className="w-4 h-4 text-secondary" />
        </button>
      )}

    </footer>
  );
};

export default Footer;
