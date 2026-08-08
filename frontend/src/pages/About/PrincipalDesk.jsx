import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import { INSTITUTION_NAME } from '../../config/institutionConfig';

const PrincipalDesk = () => {
  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Principal's Desk" subtitle="Welcome Message" />

        <div className="max-w-3xl mx-auto">
          <Card className="p-6 md:p-10 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
            <FaQuoteLeft className="text-secondary/20 w-12 h-12 mb-4" />
            <h4 className="text-xl font-bold font-heading text-primary-dark mb-4">
              Welcome to {INSTITUTION_NAME}
            </h4>
            <div className="text-slate-600 leading-relaxed text-sm md:text-base space-y-4">
              <p>
                It is our privilege to welcome students, parents, and visitors to <strong>{INSTITUTION_NAME}</strong>. Our institution is committed to providing quality professional legal education within reach of every section of society.
              </p>
              <p>
                Managed by <em>Late Malatai Yerne Smruti Bahuddeshiya Sanstha (LMYSBS)</em> with the guiding mantra <strong>"Education for All"</strong>, the college strives to develop dynamic lawyers and legal professionals who can contribute to nation building.
              </p>
              <p>
                Our programs — LL.B. 3 Years and LL.B. 5 Years Semester Courses — are approved by the Bar Council of India and the State Government of Maharashtra, and affiliated with Rashtrasant Tukadoji Maharaj Nagpur University. We encourage you to explore our academic programs and student activities.
              </p>
            </div>

            <div className="border-t border-slate-100 pt-4 mt-6 text-right">
              <p className="text-xs text-slate-400 italic">Principal's office details will be updated soon.</p>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default PrincipalDesk;
