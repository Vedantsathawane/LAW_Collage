import React from 'react';
import { FaGraduationCap, FaBriefcase, FaHandshake, FaUserCheck } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import PlacementChart from '../../components/placement/PlacementChart';
import RecruiterSlider from '../../components/placement/RecruiterSlider';
import Card from '../../components/ui/Card';
import { PLACEMENTS } from '../../data/mockData';

const Placements = () => {
  const summary = PLACEMENTS.summary;
  const successList = PLACEMENTS.studentSuccess;

  const keyFacts = [
    { icon: <FaBriefcase className="text-secondary w-5 h-5" />, label: "Offers Made", val: summary.offersMade },
    { icon: <FaUserCheck className="text-secondary w-5 h-5" />, label: "Placed Rate", val: `${summary.placedPercentage}%` },
    { icon: <FaHandshake className="text-secondary w-5 h-5" />, label: "Average Package", val: summary.averagePackage },
    { icon: <FaGraduationCap className="text-secondary w-5 h-5" />, label: "Peak Offer Package", val: summary.highestPackage }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Training & Placement Cell" subtitle="Placements Info" />

        {/* Fact Cards row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12.5 text-center select-none">
          {keyFacts.map((fact, idx) => (
            <Card key={idx} className="p-6 bg-white border border-slate-100 shadow-premium flex flex-col items-center justify-center" hoverEffect={true}>
              <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mb-3">
                {fact.icon}
              </div>
              <p className="text-xl md:text-2xl font-extrabold text-primary font-mono leading-none">{fact.val}</p>
              <p className="text-xs font-semibold text-slate-400 mt-2 uppercase tracking-wide">{fact.label}</p>
            </Card>
          ))}
        </div>

        {/* Charts & T&P details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7">
            <PlacementChart />
          </div>

          <div className="lg:col-span-5 bg-white border border-slate-100 shadow-premium rounded-2xl p-6.5 md:p-8 space-y-5 text-slate-600 text-xs md:text-sm">
            <h3 className="text-base md:text-lg font-bold font-heading text-primary-dark border-b border-slate-100 pb-2.5">
              Placement Regulations & Assistance
            </h3>
            <p>
              The Training and Placement cell operates a structured placement guidance module. Eligible final year students register on the portal in August. Resume verification, legal reasoning mockups, and communications classes are conducted prior to law firm visits.
            </p>
            <p>
              Under the college rules, a student securing a package is placed in the 'regular category' or 'dream category' (for offers above ₹12 LPA), allowing other graduates equivalent opportunities.
            </p>
            <p>
              <b>Internships:</b> GWLC mandates a 6-to-8 week summer internship for law candidates and LL.M final batches, mentored jointly by internal faculty and advocacy supervisors.
            </p>
          </div>
        </div>

        {/* Recruiter scrolling row */}
        <div className="mb-16">
          <h3 className="text-xl font-bold font-heading text-primary-dark text-center mb-6">
            Our Principal Recruitment Partners
          </h3>
          <RecruiterSlider />
        </div>

        {/* Student Success Stories */}
        <div className="border-t border-slate-200 pt-16">
          <h3 className="text-2xl font-bold font-heading text-primary-dark text-center mb-10">
            Alumni Success Testimonials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successList.map((student, idx) => (
              <Card key={idx} className="p-6 bg-white border border-slate-100 shadow-premium flex flex-col justify-between" hoverEffect={true}>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-100 shrink-0 select-none">
                      <img
                        src={student.image}
                        alt={student.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary-dark leading-tight">{student.name}</h4>
                      <p className="text-[10px] text-slate-400 mt-0.5">{student.course}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed italic">
                    "{student.testimonial}"
                  </p>
                </div>

                <div className="border-t border-slate-100 pt-3 mt-6 flex justify-between text-[11px] font-bold">
                  <span className="text-slate-400 uppercase">Placed at {student.company}</span>
                  <span className="text-success font-mono">{student.package}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Placements;
