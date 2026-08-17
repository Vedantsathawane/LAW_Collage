import React from 'react';
import { FaMoneyCheckAlt, FaInfoCircle, FaHandHoldingUsd } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import { COURSES } from '../../data/mockData';

const Fees = () => {
  return (
    <div className="pt-24 pb-16 bg-[#FAF8F3] font-body">
      <Container>
        <SectionTitle title="Annual Fee Structure" subtitle="Tuition Fees" centered={true} />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Tuition Fee Table Card */}
          <Card className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
            <h3 className="text-lg font-bold font-heading text-primary-dark mb-4 border-b border-slate-100 pb-2">
              Degree Tuition & Admission Fees
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-xs md:text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-400 uppercase tracking-wider border-b border-slate-100">
                    <th className="py-3 px-4 font-semibold">Course Name</th>
                    <th className="py-3 px-4 font-semibold">Program Level</th>
                    <th className="py-3 px-4 font-semibold text-right">Fee Per Year</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600 font-medium">
                  {COURSES.map((course) => (
                    <tr key={course.id} className="border-b border-slate-50 hover:bg-slate-50/50">
                      <td className="py-3.5 px-4 text-primary font-semibold">{course.name}</td>
                      <td className="py-3.5 px-4">{course.level}</td>
                      <td className="py-3.5 px-4 text-right font-mono text-primary-dark font-bold">{course.fees}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Allied Charges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
              <div className="flex items-center gap-3 mb-4">
                <FaHandHoldingUsd className="text-secondary w-6 h-6 shrink-0" />
                <h3 className="text-base font-bold font-heading text-primary-dark">
                  Other Annual Charges
                </h3>
              </div>
              <ul className="space-y-3.5 text-xs text-slate-500 font-medium leading-relaxed">
                <tr className="flex justify-between border-b border-slate-50 pb-2">
                  <td>Library Security (Refundable)</td>
                  <td className="font-mono font-bold text-primary">₹3,000</td>
                </tr>
                <tr className="flex justify-between border-b border-slate-50 pb-2">
                  <td>Laboratory Contingency Charge</td>
                  <td className="font-mono font-bold text-primary">₹1,500</td>
                </tr>
                <tr className="flex justify-between border-b border-slate-50 pb-2">
                  <td>Sports Arena & Gymkhana Fee</td>
                  <td className="font-mono font-bold text-primary">₹1,200</td>
                </tr>
                <tr className="flex justify-between">
                  <td>Hostel Accommodation & Mess Fee</td>
                  <td className="font-mono font-bold text-primary">₹42,000</td>
                </tr>
              </ul>
            </Card>

            {/* Payment Terms */}
            <Card className="p-6 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
              <div className="flex items-center gap-3 mb-4">
                <FaMoneyCheckAlt className="text-secondary w-6 h-6 shrink-0" />
                <h3 className="text-base font-bold font-heading text-primary-dark">
                  Fee Payment Guidelines
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                All fees must be submitted online or via institutional payment portal as per college instructions. The college does not accept unauthorized cash payments. Installment permissions require written Principal approval.
              </p>
              <div className="p-3.5 bg-slate-50 border border-slate-100 rounded-xl flex items-start gap-2.5">
                <FaInfoCircle className="text-primary w-4.5 h-4.5 shrink-0 mt-0.5" />
                <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                  <b>Refund Policy:</b> Admission cancellations requested within 15 days of counseling receive 100% refund (minus ₹1,000 processing fee) as per state mandate.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Fees;
