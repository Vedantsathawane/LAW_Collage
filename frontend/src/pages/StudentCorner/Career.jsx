import React from 'react';
import { FaBriefcase, FaPaperPlane, FaFileAlt } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';

const Career = () => {
  const jobs = [
    {
      title: "Guest Lecturer in Computer Science",
      type: "Contractual (1 Year)",
      qualification: "M.Tech / MCA with minimum 55% marks, UGC NET / Ph.D. holders preferred.",
      duties: "Conduct lectures in Advanced Algorithms, database architectures, and supervise BCA labs.",
      deadline: "August 20, 2026"
    },
    {
      title: "Laboratory Assistant in Chemistry",
      type: "Full Time (Permanent)",
      qualification: "B.Sc. in Chemistry from a recognized state or central university.",
      duties: "Maintain organic syntheses inventory, prepare chemical solutions, and coordinate lab safety audits.",
      deadline: "August 25, 2026"
    },
    {
      title: "Administrative Office Assistant",
      type: "Full Time (Permanent)",
      qualification: "Graduation in any stream with standard certifications in typing and office suite spreadsheets.",
      duties: "Manage student admissions database updates, fee receipts collections, and draft dispatch registers.",
      deadline: "September 02, 2026"
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Careers & Recruitment openings" subtitle="Student Corner" centered={true} />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Vacancy Card List */}
          <div className="space-y-6">
            {jobs.map((job, idx) => (
              <Card key={idx} className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium flex flex-col sm:flex-row sm:items-center justify-between gap-6" hoverEffect={true}>
                <div className="space-y-3 min-w-0">
                  <span className="text-[10px] font-bold text-secondary uppercase bg-primary-dark px-2.5 py-1 rounded-sm">
                    {job.type}
                  </span>
                  <h3 className="text-lg font-bold font-heading text-primary-dark mt-2.5">
                    {job.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    <b>Eligibility:</b> {job.qualification}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    <b>Responsibilities:</b> {job.duties}
                  </p>
                  <p className="text-[10px] text-red-500 font-mono font-bold uppercase mt-1">
                    Application Deadline: {job.deadline}
                  </p>
                </div>

                <button
                  onClick={() => alert(`To apply for ${job.title}, please send your detailed resume, marks cards transcripts, and experience letters to: establishment@gwlc.edu.in before ${job.deadline}.`)}
                  className="bg-primary hover:bg-primary-light text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md cursor-pointer shrink-0"
                >
                  Apply Now
                </button>
              </Card>
            ))}
          </div>

          {/* Core Guidelines */}
          <Card className="p-6 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
            <div className="flex items-center gap-3 mb-4">
              <FaFileAlt className="text-secondary w-6 h-6 shrink-0" />
              <h3 className="text-base font-bold font-heading text-primary-dark">
                General Recruitment Terms
              </h3>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed leading-loose">
              All recruitments are processed in compliance with State Service Rules and reservation metrics. Selected candidates undergo a physical verification of academic documents, certifications, and previous service history prior to joining orders.
            </p>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Career;
