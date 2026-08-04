import React from 'react';
import { FaQuoteLeft, FaEnvelope } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';

const PrincipalDesk = () => {
  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Principal's Desk" subtitle="Welcome Message" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Photo Column */}
          <div className="lg:col-span-4 select-none">
            <Card className="overflow-hidden border border-slate-100 shadow-premium" hoverEffect={false}>
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=500"
                alt="Dr. G.S. Krishnan, Principal"
                className="w-full object-cover aspect-[4/5]"
              />
              <div className="p-5 bg-primary text-white">
                <h3 className="text-lg font-bold font-heading text-white">Dr. G.S. Krishnan</h3>
                <p className="text-xs text-secondary font-semibold uppercase tracking-wider mt-0.5">Principal & Academic Director</p>
                <p className="text-[11px] text-slate-300 font-mono mt-2">LL.D. (NLSIU Bangalore), LL.M. (Harvard Law School)</p>
                <div className="flex items-center gap-2 mt-4 text-xs">
                  <FaEnvelope className="text-secondary shrink-0" />
                  <a href="mailto:principal@gwlc.edu.in" className="hover:underline text-white font-medium">principal@gwlc.edu.in</a>
                </div>
              </div>
            </Card>
          </div>

          {/* Letter Column */}
          <div className="lg:col-span-8 bg-white border border-slate-100 shadow-premium rounded-2xl p-6 md:p-10 text-slate-600 leading-relaxed text-sm md:text-base space-y-5">
            <FaQuoteLeft className="text-secondary/20 w-12 h-12 mb-2" />
            <h4 className="text-xl font-bold font-heading text-primary-dark">
              Dear Students, Parents, and Colleagues,
            </h4>
            <p>
              It is my distinct privilege to welcome you to the Government West Law College (GWLC). Since our inception in 1965, GWLC has dedicated itself to providing a holistic environment where legal curiosity transitions into advocacy capability and ethical responsibility.
            </p>
            <p>
              Our academic paths are carefully designed to combine core jurisprudential theories with active Moot Court trials and clinical legal aid practices. Backed by Bar Council approval and a NAAC A++ accreditation score of 3.78, we provide our students with the skills required to excel in judicial exams, litigations, and corporate law firm advisory.
            </p>
            <p>
              I encourage you to explore our research cells, cultural events, placement portals, and active sports fields. Let us jointly strive for excellence and build a brighter future for our society.
            </p>
            
            <div className="border-t border-slate-100 pt-6 mt-8 flex flex-col items-end">
              <p className="font-heading font-bold text-primary-dark">Dr. G.S. Krishnan</p>
              <p className="text-xs text-slate-400">Principal, GWLC</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PrincipalDesk;
