import React from 'react';
import { FaUserCircle, FaInfoCircle, FaFileAlt } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';

const RTI = () => {
  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Right to Information Act Disclosures" subtitle="Statutory RTI" centered={true} />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Statutory declaration details */}
          <Card className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
            <div className="flex items-center gap-3 mb-4">
              <FaInfoCircle className="text-secondary w-6 h-6 shrink-0" />
              <h3 className="text-xl font-bold font-heading text-primary-dark">
                Statutory Declaration Under Section 4(1)(b)
              </h3>
            </div>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed space-y-4">
              GWLC is a state-funded institution governed under the regulations of the State Higher Education Department. We maintain complete compliance with the Right to Information Act, 2005. Citizens of India can request official academic records, financial sheets, and recruitment guidelines as permitted under the act.
            </p>
            <div className="mt-4 p-4 bg-slate-50 border border-slate-100 rounded-xl flex items-start gap-3">
              <FaFileAlt className="text-primary w-5 h-5 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                RTI applications should be drafted with clear inquiries, accompanied by a fee stamp of ₹10 (by demand draft, IPO, or judicial stamp) favoring the <b>"Principal, Government West Law College"</b>, payable at New Delhi.
              </p>
            </div>
          </Card>

          {/* Officers List */}
          <Card className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
            <h3 className="text-lg font-bold font-heading text-primary-dark mb-5 border-b border-slate-100 pb-2">
              Appointed RTI Authority Directory
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* FAA */}
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl text-center flex flex-col items-center">
                <FaUserCircle className="text-slate-300 w-12 h-12 mb-2" />
                <h4 className="text-sm font-bold text-primary-dark">Dr. G.S. Krishnan</h4>
                <p className="text-[10px] font-bold text-secondary uppercase mt-0.5">First Appellate Authority</p>
                <p className="text-[11px] text-slate-400 mt-2">Principal desk</p>
              </div>

              {/* PIO */}
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl text-center flex flex-col items-center">
                <FaUserCircle className="text-slate-300 w-12 h-12 mb-2" />
                <h4 className="text-sm font-bold text-primary-dark">Shri Anupam Sen</h4>
                <p className="text-[10px] font-bold text-secondary uppercase mt-0.5">Public Information Officer</p>
                <p className="text-[11px] text-slate-400 mt-2">Office of Registrar</p>
              </div>

              {/* APIO */}
              <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl text-center flex flex-col items-center">
                <FaUserCircle className="text-slate-300 w-12 h-12 mb-2" />
                <h4 className="text-sm font-bold text-primary-dark">Shri Subhash Nair</h4>
                <p className="text-[10px] font-bold text-secondary uppercase mt-0.5">Asst. Information Officer</p>
                <p className="text-[11px] text-slate-400 mt-2">Establishment Block</p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default RTI;
