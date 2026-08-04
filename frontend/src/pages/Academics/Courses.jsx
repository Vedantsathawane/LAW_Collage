import React, { useState } from 'react';
import { FaGraduationCap, FaClock, FaUsers, FaTag } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Tabs from '../../components/ui/Tabs';
import Accordion from '../../components/ui/Accordion';
import Card from '../../components/ui/Card';
import { COURSES, DEPARTMENTS } from '../../data/mockData';

const Courses = () => {
  const ugCourses = COURSES.filter(c => c.level === 'Undergraduate');
  const pgCourses = COURSES.filter(c => c.level === 'Postgraduate');

  const renderCourseGrid = (courses) => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {courses.map((course) => {
          const dept = DEPARTMENTS.find(d => d.id === course.deptId);
          
          // Map syllabus array to accordion item objects
          const accordionItems = course.syllabus.map((syl) => {
            const [sem, topics] = syl.split(': ');
            return {
              title: sem,
              content: topics || "Detail curriculum subjects available in syllabus handbook."
            };
          });

          return (
            <Card key={course.id} className="p-6 md:p-8 bg-white border border-slate-100 flex flex-col justify-between" hoverEffect={false}>
              <div>
                <span className="text-[10px] font-bold text-secondary uppercase bg-primary-dark px-2.5 py-1 rounded-sm mb-3.5 inline-block">
                  {dept ? dept.shortName : "General"} Course
                </span>
                <h3 className="text-lg md:text-xl font-bold font-heading text-primary-dark mb-4">
                  {course.name}
                </h3>
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-6">
                  {course.description}
                </p>

                {/* Course specs */}
                <div className="grid grid-cols-3 gap-3 border-y border-slate-100 py-4 mb-6 text-xs text-slate-500">
                  <div className="flex flex-col items-center text-center">
                    <FaClock className="text-secondary w-4 h-4 mb-1" />
                    <span className="font-bold text-slate-400 text-[10px] uppercase">Duration</span>
                    <span className="font-semibold text-primary mt-0.5">{course.duration}</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <FaUsers className="text-secondary w-4 h-4 mb-1" />
                    <span className="font-bold text-slate-400 text-[10px] uppercase">Intake</span>
                    <span className="font-semibold text-primary mt-0.5">{course.intake} Seats</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <FaTag className="text-secondary w-4 h-4 mb-1" />
                    <span className="font-bold text-slate-400 text-[10px] uppercase">Tuition Fee</span>
                    <span className="font-semibold text-primary mt-0.5">{course.fees}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-1">Eligibility Criteria</p>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed bg-slate-50 border border-slate-100 rounded-lg p-3">
                    {course.eligibility}
                  </p>
                </div>
              </div>

              {/* Syllabus Accordion list */}
              <div className="mt-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">Course Semester Outline</p>
                <Accordion items={accordionItems} />
              </div>
            </Card>
          );
        })}
      </div>
    );
  };

  const tabs = [
    { label: "Undergraduate (UG) Programs", key: "ug", content: renderCourseGrid(ugCourses) },
    { label: "Postgraduate (PG) Programs", key: "pg", content: renderCourseGrid(pgCourses) }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Academic Programs Offered" subtitle="Courses" centered={true} />
        <Tabs tabs={tabs} defaultActiveKey="ug" />
      </Container>
    </div>
  );
};

export default Courses;
