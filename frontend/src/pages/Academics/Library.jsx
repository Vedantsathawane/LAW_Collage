import React from 'react';
import { FaBook, FaGlobe, FaClock, FaClipboardList } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import { LIBRARY_INFO } from '../../data/mockData';
import { INSTITUTION_NAME } from '../../config/institutionConfig';

const Library = () => {
  return (
    <div className="pt-24 pb-16 bg-[#FAF8F3] font-body">
      <Container>
        <SectionTitle title="College Library & Reading Room" subtitle="Library Facilities" />

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
            <h3 className="text-xl font-bold font-heading text-primary-dark mb-4">
              Equipped Library & Spacious Reading Room
            </h3>
            <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-6 font-medium">
              The college library at <strong>{INSTITUTION_NAME}</strong> is very well equipped with reference books, text books, encyclopedias, law journals, periodicals, and magazines. The reading room for students and staff is quite spacious and quiet.
            </p>

            {/* Prospectus Library Rules Box */}
            <div className="p-5 bg-amber-50 border border-amber-200 rounded-2xl text-xs md:text-sm text-amber-900 leading-relaxed space-y-2">
              <h4 className="font-bold text-amber-950 text-sm uppercase tracking-wide border-b border-amber-200 pb-1">
                Library Rules & Regulations (Prospectus Page 7)
              </h4>
              <ul className="space-y-1.5 font-medium">
                {LIBRARY_INFO.rules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-700 font-bold">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Library;
