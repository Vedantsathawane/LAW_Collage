import React from 'react';
import { FaCalendarAlt, FaFileSignature, FaInfoCircle } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';

const Examination = () => {
  const guidelines = [
    "Students must check their seat placement coordinates on the department boards 30 minutes before exams start.",
    "Calculators and mathematical tables are allowed only when specified by the examiners.",
    "Carrying mobile phones, smartwatches, or printed chits into the exam halls is a non-bailable offense leading to suspension.",
    "A minimum of 75% attendance in theory and practical units is mandatory to sit for the odd and even semester final exams."
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Examination Control & Guidelines" subtitle="Student Corner" centered={true} />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Calendar updates */}
          <Card className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
            <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-2">
              <FaCalendarAlt className="text-secondary w-6 h-6 shrink-0" />
              <h3 className="text-xl font-bold font-heading text-primary-dark">
                Upcoming Examination Schedule
              </h3>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-primary-dark">Semester Final Examination (Odd Semesters)</p>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase font-mono font-bold">Tentative Starting Date: Nov 18, 2026</p>
                </div>
                <span className="text-xs font-bold text-red-500 font-mono animate-pulse">Pending Release</span>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-primary-dark">Mid-Term Sessional Tests (Odd Semesters)</p>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase font-mono font-bold">Tentative Starting Date: Sep 20, 2026</p>
                </div>
                <span className="text-xs font-bold text-success font-mono">Confirmed</span>
              </div>
            </div>
          </Card>

          {/* Rules and Conduct */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-8">
              <Card className="p-6 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
                <h3 className="text-base md:text-lg font-bold font-heading text-primary-dark mb-4 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <FaFileSignature className="text-secondary" />
                  <span>Student Conduct & Rules</span>
                </h3>
                <div className="space-y-3.5">
                  {/* Prospectus Exam & Casual Student Rules */}
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl mb-4 text-xs md:text-sm text-amber-900 leading-relaxed font-semibold">
                    <p className="font-bold text-amber-950 mb-1">■ College Examination & Sessional Rules:</p>
                    <p className="mb-2">Students must appear in the terminal examination held twice during the academic session. Satisfactory performance is mandatory for academic progress under RTMNU regulations.</p>
                    <p className="font-bold text-amber-950 mb-1">■ Casual Student Provision (Page 7 Prospectus):</p>
                    <p>Students absent or failing in sessional examinations will have to take admission as a casual student by paying the required fees within 15 days from the declaration of results.</p>
                  </div>

                  {guidelines.map((guide, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-amber-600 text-xs mt-1 shrink-0">•</span>
                      <span className="text-xs md:text-sm text-slate-600 leading-relaxed">{guide}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div className="md:col-span-4 bg-white border border-slate-100 shadow-premium rounded-2xl p-6 text-center flex flex-col items-center">
              <FaInfoCircle className="text-slate-300 w-12 h-12 mb-3" />
              <h4 className="text-sm font-bold font-heading text-primary-dark">
                Grade Inquiries
              </h4>
              <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">
                For corrections in name spelling or marks card updates, download the Form and submit it directly to Controller Office counter #2.
              </p>
              <button
                onClick={() => alert('Redirecting to downloadable forms section...')}
                className="mt-6 bg-primary hover:bg-primary-light text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md cursor-pointer"
              >
                Download Form
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Examination;
