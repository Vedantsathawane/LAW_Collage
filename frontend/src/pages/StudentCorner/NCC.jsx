import React from 'react';
import { FaUserCircle, FaAward, FaShieldAlt } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';

const NCC = () => {
  return (
    <div className="pt-24 pb-16 bg-[#FAF8F3] font-body">
      <Container>
        <SectionTitle title="National Cadet Corps (NCC) Wing" subtitle="Student Corner" centered={true} />

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
            <h3 className="text-xl font-bold font-heading text-primary-dark mb-4 flex items-center gap-2">
              <FaShieldAlt className="text-secondary" />
              <span>NCC Unit</span>
            </h3>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed font-medium">
              The NCC Unit instills discipline, patriotism, and leadership in students. Cadets undergo systematic drill formations, adventure camps, and personality development activities.
            </p>

            <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex items-start gap-3.5 mb-6">
              <FaAward className="text-secondary w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-primary-dark">Certification Credits</h4>
                <p className="text-xs text-slate-500 leading-relaxed mt-1">
                  Cadets clearing the 'C' certificate exam receive direct SSB interview eligibility options for commissions in the Indian Army, Navy, and Air Force, alongside bonus marks in state police recruitment screenings.
                </p>
              </div>
            </div>
          </Card>

          {/* NCC Officer detail */}
          <Card className="p-5 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
            <div className="flex items-center gap-3">
              <FaUserCircle className="text-slate-300 w-10 h-10 shrink-0" />
              <div>
                <p className="text-xs font-bold text-primary-dark">NCC Associate Officer (ANO)</p>
                <p className="text-sm font-semibold text-slate-600 mt-0.5">Lt. Mr. Amit Verma (Assistant Professor, Law)</p>
                <p className="text-[11px] text-slate-400 mt-1 font-mono">Contact: info@dmycl.edu.in</p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default NCC;
