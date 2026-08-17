import React from 'react';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import { INSTITUTION_NAME } from '../../config/institutionConfig';

const NIRF = () => {
  return (
    <div className="pt-24 pb-16 bg-[#FAF8F3] font-body">
      <Container>
        <SectionTitle title="NIRF Ranking" subtitle="National Rankings" centered={true} />

        <div className="max-w-3xl mx-auto">
          <Card className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
            <h3 className="text-xl font-bold font-heading text-primary-dark mb-4">
              National Institutional Ranking Framework (NIRF)
            </h3>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-4">
              The National Institutional Ranking Framework (NIRF), instituted by the Ministry of Education, Government of India, ranks institutions based on parameters including Teaching, Learning & Resources, Research & Professional Practice, Graduation Outcomes, Outreach & Inclusivity, and Perception.
            </p>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-4">
              <strong>{INSTITUTION_NAME}</strong> participates in the ranking process as part of its commitment to transparency and quality improvement in legal education.
            </p>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 font-medium">
              NIRF ranking reports and data submissions will be updated on this page as they become available. Please contact the college administration for current ranking information.
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default NIRF;
