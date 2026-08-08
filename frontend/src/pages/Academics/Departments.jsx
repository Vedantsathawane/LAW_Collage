import React from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaArrowRight } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import { COURSES } from '../../data/mockData';
import { INSTITUTION_NAME } from '../../config/institutionConfig';

const Departments = () => {
  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle
          title="Academic Programs"
          subtitle="Academics"
          centered={true}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center text-slate-600 text-sm md:text-base leading-relaxed mb-8">
            <p>
              <strong>{INSTITUTION_NAME}</strong> offers the following degree programs approved by the Bar Council of India (BCI) / State Government of Maharashtra and affiliated with Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COURSES.map((course) => (
              <Card key={course.id} className="p-6 bg-white border border-slate-100 shadow-premium flex flex-col justify-between" hoverEffect={true}>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary shrink-0">
                      <FaGraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold font-heading text-primary-dark">
                        {course.name}
                      </h3>
                      <span className="text-[10px] font-bold text-secondary uppercase">{course.level}</span>
                    </div>
                  </div>
                  
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-4">
                    {course.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3 text-xs text-slate-500 bg-slate-50 border border-slate-100 rounded-xl p-3">
                    <div>
                      <span className="font-bold text-slate-400 text-[10px] uppercase block">Duration</span>
                      <span className="font-semibold text-primary">{course.duration}</span>
                    </div>
                    <div>
                      <span className="font-bold text-slate-400 text-[10px] uppercase block">Intake</span>
                      <span className="font-semibold text-primary">{course.intake} Seats</span>
                    </div>
                  </div>
                </div>

                <Link to="/academics/courses" className="mt-6 text-xs font-bold text-primary hover:text-accent flex items-center gap-1">
                  <span>View Full Syllabus</span>
                  <FaArrowRight className="w-2.5 h-2.5" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Departments;
