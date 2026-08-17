import React from 'react';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import { INSTITUTION_NAME } from '../../config/institutionConfig';

const Research = () => {
  return (
    <div className="pt-24 pb-16 bg-[#FAF8F3] font-body">
      <Container>
        <SectionTitle title="Research & Scholarly Pursuits" subtitle="Research" />

        <div className="max-w-3xl mx-auto">
          <Card className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
            <h3 className="text-xl font-bold font-heading text-primary-dark mb-4">
              Legal Research at {INSTITUTION_NAME}
            </h3>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-4">
              The college encourages faculty and students to engage in scholarly research in areas of constitutional law, criminal jurisprudence, property law, human rights, and other branches of legal study.
            </p>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-4">
              Students are provided access to the college library's reference collection, text books, encyclopedias, periodicals, and magazines to support their academic research and dissertation work.
            </p>
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 font-medium">
              Research publications, ongoing projects, and faculty research profiles will be updated as information becomes available. Contact the college for current research activities.
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Research;
