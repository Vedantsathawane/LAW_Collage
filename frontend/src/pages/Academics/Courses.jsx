import React from 'react';
import { FaClock, FaUsers, FaTag, FaExternalLinkAlt } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Accordion from '../../components/ui/Accordion';
import Card from '../../components/ui/Card';
import { COURSES } from '../../data/mockData';
import { openGoogleForm } from '../../config/institutionConfig';

const Courses = () => {
  return (
    <div className="pt-24 pb-16 bg-[#FAF8F3] font-body">
      <Container>
        <SectionTitle title="Academic Programs Offered" subtitle="Courses" centered={true} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {COURSES.map((course) => {
            const accordionItems = course.syllabus.map((syl) => {
              const [sem, topics] = syl.split(': ');
              return {
                title: sem,
                content: topics || "Detailed curriculum subjects available in syllabus handbook."
              };
            });

            return (
              <Card key={course.id} className="p-6 md:p-8 bg-white border border-[#DFAE24]/40 shadow-premium flex flex-col justify-between relative overflow-hidden group" hoverEffect={false}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFAE24]/15 rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform" />
                <div className="relative z-10">
                  <span className="text-[10px] font-bold text-[#DFAE24] uppercase bg-[#26130D] px-3 py-1 rounded-full mb-3.5 inline-block font-heading shadow-sm">
                    {course.level}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold font-heading text-[#26130D] mb-4">
                    {course.name}
                  </h3>
                  <p className="text-xs md:text-sm text-[#211A17] font-medium leading-relaxed mb-6 font-body">
                    {course.description}
                  </p>

                  {/* Course specs */}
                  <div className="grid grid-cols-3 gap-3 bg-[#FAF8F3] border border-[#DFAE24]/30 p-4 rounded-xl mb-6 text-xs text-[#211A17]">
                    <div className="flex flex-col items-center text-center">
                      <FaClock className="text-[#B88E1C] w-4 h-4 mb-1" />
                      <span className="font-bold text-[#B88E1C] text-[10px] uppercase">Duration</span>
                      <span className="font-bold text-[#26130D] mt-0.5">{course.duration}</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <FaUsers className="text-[#B88E1C] w-4 h-4 mb-1" />
                      <span className="font-bold text-[#B88E1C] text-[10px] uppercase">Intake</span>
                      <span className="font-bold text-[#26130D] mt-0.5">{course.intake} Seats</span>
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <FaTag className="text-[#B88E1C] w-4 h-4 mb-1" />
                      <span className="font-bold text-[#B88E1C] text-[10px] uppercase">Tuition Fee</span>
                      <span className="font-bold text-[#26130D] mt-0.5">{course.fees}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-bold text-[#B88E1C] uppercase tracking-wide mb-1 font-heading">Eligibility Criteria</p>
                    <p className="text-xs text-[#211A17] font-medium leading-relaxed bg-[#FAF8F3] border border-[#DFAE24]/30 rounded-xl p-3 mb-4">
                      {course.eligibility}
                    </p>
                    <button
                      onClick={openGoogleForm}
                      className="w-full bg-[#26130D] hover:bg-[#3D2017] text-[#DFAE24] text-xs font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#DFAE24]/40 shadow-md"
                    >
                      <span>Apply for {course.name} (Google Form)</span>
                      <FaExternalLinkAlt className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                {/* Syllabus Accordion list */}
                <div className="mt-4 relative z-10">
                  <p className="text-xs font-bold text-[#B88E1C] uppercase tracking-wide mb-3 font-heading">Course Semester Outline</p>
                  <Accordion items={accordionItems} />
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Courses;
