import React from 'react';
import { FaGraduationCap, FaChalkboardTeacher, FaCode, FaRegHandshake } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';

const Training = () => {
  const activities = [
    { icon: <FaCode className="text-secondary w-5 h-5" />, title: "Technical Coding Bootcamps", desc: "Weekly mock coding contests, DSA worksheets, and live debugging hackathons conducted by engineering mentors." },
    { icon: <FaChalkboardTeacher className="text-secondary w-5 h-5" />, title: "Soft Skills Grooming", desc: "Professional communication lectures, mock group discussions, email etiquettes, and formal business presentation workshops." },
    { icon: <FaRegHandshake className="text-secondary w-5 h-5" />, title: "Corporate Guest Lectures", desc: "Monthly sessions featuring Tech Architects, CFOs, and Product Managers discussing industry tech stacks and expectations." },
    { icon: <FaGraduationCap className="text-secondary w-5 h-5" />, title: "Syllabus Bridging Courses", desc: "Collaborations with AWS Academy and Red Hat to offer certifications in Cloud Architectures, Cyber Security, and Red Hat Linux." }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Training & Development Division" subtitle="Training Cell" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-5 text-slate-600 leading-relaxed text-sm md:text-base">
            <h3 className="text-xl font-bold font-heading text-primary-dark">
              Bridging the Gap Between Academia and Litigation Practice
            </h3>
            <p>
              GWLC's Training Cell is dedicated to transforming students into court-ready and corporate-ready advocates. Realizing that statutory knowledge must be backed by crisp court oral presentation and logical cross-examination, we conduct structured workshops starting from the second year.
            </p>
            <p>
              Through our dedicated 'Advocacy Grooming Program', we analyze firm recruiting formats and align our training sessions to prepare graduates for moot court trials, group debates, and corporate firm legal drafting rounds.
            </p>
          </div>

          <div className="lg:col-span-5 select-none">
            <Card className="overflow-hidden border border-slate-100 shadow-premium" hoverEffect={false}>
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600&h=400"
                alt="Corporate training workshop"
                className="w-full object-cover"
              />
            </Card>
          </div>
        </div>

        {/* Activities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activities.map((act, idx) => (
            <Card key={idx} className="p-6 bg-white border border-slate-100 shadow-premium flex flex-col justify-between" hoverEffect={true}>
              <div>
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                  {act.icon}
                </div>
                <h4 className="text-base font-bold font-heading text-primary-dark mb-2">{act.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{act.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Training;
