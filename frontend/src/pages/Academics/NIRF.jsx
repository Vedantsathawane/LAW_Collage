import React from 'react';
import { FaFilePdf, FaAward, FaSlidersH } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';

const NIRF = () => {
  const scores = [
    { name: "Teaching, Learning & Resources (TLR)", score: "84.5 / 100" },
    { name: "Research and Professional Practice (RP)", score: "68.2 / 100" },
    { name: "Graduation Outcomes (GO)", score: "89.0 / 100" },
    { name: "Outreach and Inclusivity (OI)", score: "78.4 / 100" }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="NIRF Ranking & Disclosures" subtitle="NIRF Data" centered={true} />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Info Card */}
          <Card className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
            <div className="flex items-center gap-3 mb-4">
              <FaAward className="text-secondary w-6 h-6 shrink-0" />
              <h3 className="text-xl font-bold font-heading text-primary-dark">
                NIRF Institutional Rankings
              </h3>
            </div>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-6">
              Under the National Institutional Ranking Framework (NIRF) instituted by the Ministry of Education, Govt. of India, GWLC ranks consistently in the top 100 college cadres nationwide. The ranking is based on criteria like learning resource availability, doctoral guides, and graduation averages.
            </p>

            {/* Score bars details */}
            <div className="space-y-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">NIRF 2026 Parameter Breakdown</p>
              {scores.map((sc, i) => (
                <div key={i} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-semibold text-slate-700">
                    <span>{sc.name}</span>
                    <span className="font-mono text-primary">{sc.score}</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-primary h-full rounded-full"
                      style={{ width: `${parseFloat(sc.score)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Submission sheets downloads */}
          <Card className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
            <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-2">
              <h3 className="text-lg font-bold font-heading text-primary-dark">
                NIRF Annual Submission Records
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-100 rounded-xl">
                <div className="flex items-center gap-2.5">
                  <FaFilePdf className="text-red-500 w-4.5 h-4.5 shrink-0" />
                  <span className="text-xs md:text-sm font-semibold text-slate-600">NIRF 2026 Submission Document (Complete)</span>
                </div>
                <button
                  onClick={() => alert('Downloading NIRF 2026 Disclosure PDF')}
                  className="text-xs text-primary hover:text-accent font-bold cursor-pointer"
                >
                  Download PDF
                </button>
              </div>

              <div className="flex items-center justify-between p-3.5 bg-slate-50 border border-slate-100 rounded-xl">
                <div className="flex items-center gap-2.5">
                  <FaFilePdf className="text-red-500 w-4.5 h-4.5 shrink-0" />
                  <span className="text-xs md:text-sm font-semibold text-slate-600">NIRF 2025 Submission Document (Complete)</span>
                </div>
                <button
                  onClick={() => alert('Downloading NIRF 2025 Disclosure PDF')}
                  className="text-xs text-primary hover:text-accent font-bold cursor-pointer"
                >
                  Download PDF
                </button>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default NIRF;
