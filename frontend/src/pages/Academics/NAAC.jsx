import React from 'react';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import { INSTITUTION_NAME } from '../../config/institutionConfig';

const NAAC = () => {
  return (
    <div className="pt-24 pb-16 bg-[#FAF8F3] font-body">
      <Container>
        <SectionTitle title="NAAC Accreditation" subtitle="Quality Assurance" centered={true} />

        <div className="max-w-3xl mx-auto">
          <Card className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
            <h3 className="text-xl font-bold font-heading text-primary-dark mb-4">
              NAAC Accreditation Status
            </h3>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-4">
              <strong>{INSTITUTION_NAME}</strong> is committed to maintaining high standards of quality in legal education as prescribed by the National Assessment and Accreditation Council (NAAC).
            </p>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-4">
              The college is approved by the Bar Council of India (BCI) / State Government of Maharashtra and affiliated with Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU).
            </p>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 font-medium">
              NAAC accreditation details and Self Study Report (SSR) documents will be updated on this page as they become available. Please contact the college administration for current accreditation status.
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default NAAC;
