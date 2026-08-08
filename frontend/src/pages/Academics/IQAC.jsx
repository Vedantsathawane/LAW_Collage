import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import { INSTITUTION_NAME } from '../../config/institutionConfig';

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
          <Card className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
            <h3 className="text-xl font-bold font-heading text-primary-dark mb-4">
              IQAC Objectives & Focus
            </h3>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-6">
              In pursuance of quality assurance guidelines, <strong>{INSTITUTION_NAME}</strong> maintains an Internal Quality Assurance Cell (IQAC) to coordinate course feedback, academic auditing, and infrastructure quality assurance.
            </p>

            <div className="space-y-3">
              {objectiveList.map((obj, i) => (
                <div key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="text-emerald-600 w-4.5 h-4.5 shrink-0 mt-0.5" />
                  <span className="text-xs md:text-sm text-slate-600 font-medium">{obj}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default IQAC;
