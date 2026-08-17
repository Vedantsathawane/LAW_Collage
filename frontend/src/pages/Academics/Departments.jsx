import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import { COURSES } from '../../data/mockData';
import { INSTITUTION_NAME, openGoogleForm } from '../../config/institutionConfig';

const Departments = () => {
  return (
    <div className="pt-24 pb-16 bg-[#FAF8F3] font-body min-h-screen">
      <Container>
        <SectionTitle
          title="ACADEMIC PROGRAMS"
          subtitle="Degree Courses"
          centered={true}
        />

        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center text-[#756D63] text-xs md:text-sm font-medium leading-relaxed max-w-3xl mx-auto mb-10">
            <p>
              <strong className="text-[#26130D]">{INSTITUTION_NAME}</strong> offers the following degree programs approved by the Bar Council of India (BCI) / State Government of Maharashtra and affiliated with Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU).
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {COURSES.map((course) => (
              <Card
                key={course.id}
                className="p-6 md:p-8 bg-white border border-[#DFAE24]/40 shadow-premium flex flex-col justify-between relative overflow-hidden rounded-2xl group"
                hoverEffect={true}
              >
                {/* Gold corner accent blob */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FAF8F3] rounded-bl-full pointer-events-none group-hover:scale-105 transition-transform border-b border-l border-[#DFAE24]/20" />

                <div className="relative z-10">
                  {/* Top program number & label */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <span className="text-3xl md:text-4xl font-extrabold font-heading text-[#B88E1C] leading-none">
                      {course.id === 'llb-3yr' ? '03' : '05'}
                    </span>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#B88E1C] block font-heading">
                        YEAR PROGRAM
                      </span>
                      <h3 className="text-lg md:text-xl font-bold font-heading text-[#26130D]">
                        {course.name}
                      </h3>
                    </div>
                  </div>

                  {/* Course Description */}
                  <p className="text-xs md:text-sm text-[#756D63] font-medium leading-relaxed my-5 font-body">
                    {course.description}
                  </p>

                  {/* Duration & Sanctioned Intake Box */}
                  <div className="grid grid-cols-2 gap-4 bg-[#FAF8F3] p-4 rounded-xl border border-[#DFAE24]/30 mb-6 text-xs">
                    <div>
                      <span className="font-extrabold text-[#756D63] text-[10px] uppercase tracking-wider block mb-0.5 font-heading">
                        DURATION
                      </span>
                      <span className="font-bold text-[#26130D] text-xs md:text-sm">
                        {course.duration}
                      </span>
                    </div>
                    <div>
                      <span className="font-extrabold text-[#756D63] text-[10px] uppercase tracking-wider block mb-0.5 font-heading">
                        SANCTIONED INTAKE
                      </span>
                      <span className="font-bold text-[#26130D] text-xs md:text-sm">
                        {course.intake} Seats
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="flex items-center justify-between border-t border-[#DFAE24]/20 pt-4 mt-auto relative z-10">
                  <Link
                    to="/academics/courses"
                    className="text-xs font-bold text-[#26130D] hover:text-[#B88E1C] flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Syllabus Details</span>
                    <FaArrowRight className="w-3 h-3 text-[#B88E1C]" />
                  </Link>

                  <button
                    onClick={openGoogleForm}
                    className="bg-[#26130D] hover:bg-[#3D2017] text-[#DFAE24] text-xs font-extrabold px-5 py-2.5 rounded-xl shadow-md border border-[#DFAE24]/40 flex items-center gap-1.5 cursor-pointer transition-all shrink-0"
                  >
                    <span>Apply Now</span>
                    <FaExternalLinkAlt className="w-3 h-3" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Departments;
