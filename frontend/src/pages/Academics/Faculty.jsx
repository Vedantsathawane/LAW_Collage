import React from 'react';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import { INSTITUTION_NAME } from '../../config/institutionConfig';

const Faculty = () => {
  return (
    <div className="pt-24 pb-16 bg-[#FAF8F3] font-body">
      <Container>
        <SectionTitle title="Our Faculty Members" subtitle="Faculty" centered={true} />

        <div className="max-w-3xl mx-auto">
          <Card className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium text-center" hoverEffect={false}>
            <h3 className="text-xl font-bold font-heading text-primary-dark mb-4">
              Faculty Directory
            </h3>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-4">
              <strong>{INSTITUTION_NAME}</strong> has a dedicated team of qualified faculty members committed to delivering quality legal education. The faculty includes experienced professors, associate professors, and assistant professors specializing in various branches of law.
            </p>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 font-medium">
              The complete faculty directory with qualifications, specializations, and contact information will be updated with official records. Please contact the college office for faculty-related inquiries.
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Faculty;
