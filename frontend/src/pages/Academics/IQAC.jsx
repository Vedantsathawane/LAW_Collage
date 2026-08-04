import React from 'react';
import { FaCheckCircle, FaFilePdf, FaUsers } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';

const IQAC = () => {
  const objectiveList = [
    "Develop a system for conscious, consistent and catalytic improvement in the overall performance of the institution.",
    "Promote measures for institutional functioning towards quality enhancement through internalization of quality culture.",
    "Coordinate quality-related activities, including adoption and dissemination of best classroom and research methodologies."
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Internal Quality Assurance Cell" subtitle="IQAC Portal" centered={true} />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Info */}
          <Card className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
            <h3 className="text-xl font-bold font-heading text-primary-dark mb-4">
              IQAC Objectives & Focus
            </h3>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-6">
              In pursuance of the National Action Plan of the NAAC, GWLC established the Internal Quality Assurance Cell (IQAC) as a post-accreditation quality sustenance measure. The cell works constantly to coordinate course feedback, faculty research audits, and infrastructure quality checks.
            </p>

            <div className="space-y-3">
              {objectiveList.map((obj, i) => (
                <div key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="text-success w-4.5 h-4.5 shrink-0 mt-0.5" />
                  <span className="text-xs md:text-sm text-slate-600 font-medium">{obj}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Committee composition */}
          <Card className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
            <div className="flex items-center gap-3 mb-4">
              <FaUsers className="text-secondary w-6 h-6" />
              <h3 className="text-xl font-bold font-heading text-primary-dark">
                IQAC Committee Composition
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs md:text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-400 uppercase tracking-wider border-b border-slate-100">
                    <th className="py-3 px-4 font-semibold">Name</th>
                    <th className="py-3 px-4 font-semibold">Designation</th>
                    <th className="py-3 px-4 font-semibold">Role in IQAC</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600 font-medium">
                  <tr className="border-b border-slate-50">
                    <td className="py-3.5 px-4 text-primary font-bold">Dr. G.S. Krishnan</td>
                    <td className="py-3.5 px-4">Principal</td>
                    <td className="py-3.5 px-4 text-secondary font-bold">Chairperson</td>
                  </tr>
                  <tr className="border-b border-slate-50">
                    <td className="py-3.5 px-4 text-primary font-bold">Dr. Rajesh K. Sharma</td>
                    <td className="py-3.5 px-4">Professor (Computer Science)</td>
                    <td className="py-3.5 px-4 font-semibold">Director Coordinator</td>
                  </tr>
                  <tr className="border-b border-slate-50">
                    <td className="py-3.5 px-4 text-primary font-bold">Dr. Ananya Mukherji</td>
                    <td className="py-3.5 px-4">HOD Physics</td>
                    <td className="py-3.5 px-4">Senior Faculty Member</td>
                  </tr>
                  <tr className="border-b border-slate-50">
                    <td className="py-3.5 px-4 text-primary font-bold">Shri Anupam Sen</td>
                    <td className="py-3.5 px-4">Registrar</td>
                    <td className="py-3.5 px-4">Administrative Officer</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 text-primary font-bold">Mr. Nandan Nilekar</td>
                    <td className="py-3.5 px-4">VP, regional IT Hub</td>
                    <td className="py-3.5 px-4">Local Society / Industry Nominee</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default IQAC;
