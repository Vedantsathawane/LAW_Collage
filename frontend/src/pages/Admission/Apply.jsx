import React from 'react';
import { FaGraduationCap, FaExternalLinkAlt, FaCheckCircle, FaClipboardList, FaExclamationTriangle, FaShieldAlt, FaFileAlt } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import Button from '../../components/common/Button';
import { INSTITUTION_NAME, INSTITUTION_SHORT_NAME, openGoogleForm } from '../../config/institutionConfig';
import { COURSES } from '../../data/mockData';

const Apply = () => {
  return (
    <div className="pt-24 pb-16 bg-[#FAF8F3] font-body min-h-screen">
      <Container>
        <SectionTitle title="ONLINE ADMISSION PORTAL 2026-27" subtitle="Student Application" centered={true} />

        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Official 60 Seats Admission Notice Header Banner */}
          <div className="p-6 md:p-8 rounded-2xl bg-[#26130D] border-2 border-[#DFAE24] text-[#FAF8F3] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFAE24]/10 rounded-bl-full pointer-events-none" />
            
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFAE24] text-[#26130D] text-[11px] font-extrabold uppercase tracking-wider">
                  <FaExclamationTriangle className="w-3.5 h-3.5" />
                  <span>Limited Admission Notice</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold font-heading text-[#FAF8F3]">
                  Sanctioned Intake Capacity: 60 Seats
                </h2>
                <p className="text-xs md:text-sm text-[#FAF8F3]/90 leading-relaxed font-body max-w-xl">
                  {INSTITUTION_NAME} maintains a strictly approved capacity of <strong>60 Seats</strong> for LL.B. 3 Years & 5 Years Semester Courses under RTMNU & Bar Council of India guidelines.
                </p>
              </div>

              <div className="shrink-0 w-full md:w-auto">
                <button
                  onClick={openGoogleForm}
                  className="w-full md:w-auto bg-[#DFAE24] hover:bg-[#F4C430] text-[#26130D] font-extrabold text-sm px-7 py-4 rounded-xl shadow-lg transition-all border border-[#DFAE24]/50 flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <span>Start Application Form</span>
                  <FaExternalLinkAlt className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Student Application Instructions Card */}
          <Card className="p-6 md:p-10 bg-white border border-[#DFAE24]/30 shadow-premium" hoverEffect={false}>
            <div className="flex items-center gap-3.5 mb-8 border-b border-[#DFAE24]/20 pb-4">
              <div className="w-12 h-12 rounded-xl bg-[#26130D]/10 flex items-center justify-center text-[#26130D] shrink-0">
                <FaGraduationCap className="w-6 h-6 text-[#B88E1C]" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-[#26130D]">
                  {INSTITUTION_SHORT_NAME} Student Registration Guidelines (2026-27)
                </h3>
                <p className="text-xs text-[#756D63] mt-1 font-medium">
                  Follow the official steps below to complete your admission enquiry and student application.
                </p>
              </div>
            </div>

            {/* Steps Outline */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="p-5 bg-[#FAF8F3] border border-[#DFAE24]/30 rounded-xl space-y-2">
                <span className="w-7 h-7 rounded-full bg-[#26130D] text-[#DFAE24] text-xs font-bold flex items-center justify-center">1</span>
                <h4 className="text-sm font-bold font-heading text-[#26130D]">Fill Google Form</h4>
                <p className="text-xs text-[#756D63]">Enter personal, contact, academic details, and course selection accurately in the Google Form.</p>
              </div>

              <div className="p-5 bg-[#FAF8F3] border border-[#DFAE24]/30 rounded-xl space-y-2">
                <span className="w-7 h-7 rounded-full bg-[#26130D] text-[#DFAE24] text-xs font-bold flex items-center justify-center">2</span>
                <h4 className="text-sm font-bold font-heading text-[#26130D]">Application Processing</h4>
                <p className="text-xs text-[#756D63]">The college admission committee reviews submitted applications for 60-seat merit eligibility.</p>
              </div>

              <div className="p-5 bg-[#FAF8F3] border border-[#DFAE24]/30 rounded-xl space-y-2">
                <span className="w-7 h-7 rounded-full bg-[#26130D] text-[#DFAE24] text-xs font-bold flex items-center justify-center">3</span>
                <h4 className="text-sm font-bold font-heading text-[#26130D]">Counseling & Fee</h4>
                <p className="text-xs text-[#756D63]">Shortlisted candidates are notified to submit original documents for verification at campus.</p>
              </div>
            </div>

            {/* Courses Offered Details */}
            <div className="space-y-4 mb-8 pt-6 border-t border-[#DFAE24]/20">
              <h4 className="text-base font-bold text-[#26130D] font-heading flex items-center gap-2">
                <FaClipboardList className="text-[#B88E1C]" />
                <span>Programs Available for Application</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {COURSES.map((course) => (
                  <div key={course.id} className="p-5 bg-[#FAF8F3] border border-[#DFAE24]/30 rounded-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-[#B88E1C] uppercase tracking-wider">{course.level}</span>
                      <span className="text-xs font-bold px-2.5 py-0.5 bg-[#26130D] text-[#DFAE24] rounded-md">{course.intake} Seats</span>
                    </div>
                    <h5 className="text-sm font-bold font-heading text-[#26130D]">{course.name}</h5>
                    <p className="text-xs text-[#756D63] font-medium"><strong>Duration:</strong> {course.duration}</p>
                    <p className="text-xs text-[#756D63]">{course.eligibility}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Required Documents List */}
            <div className="space-y-4 mb-8 pt-6 border-t border-[#DFAE24]/20">
              <h4 className="text-base font-bold text-[#26130D] font-heading flex items-center gap-2">
                <FaFileAlt className="text-[#B88E1C]" />
                <span>Documents Required During Physical Verification</span>
              </h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#756D63] font-medium">
                <div className="flex items-start gap-2 p-2.5 bg-[#FAF8F3] rounded-lg border border-[#DFAE24]/20">
                  <FaCheckCircle className="text-[#16A34A] w-4 h-4 shrink-0 mt-0.5" />
                  <span>10th & 12th Standard Original Marksheets with 3 photocopies</span>
                </div>
                <div className="flex items-start gap-2 p-2.5 bg-[#FAF8F3] rounded-lg border border-[#DFAE24]/20">
                  <FaCheckCircle className="text-[#16A34A] w-4 h-4 shrink-0 mt-0.5" />
                  <span>Graduation Marksheet (For 3-Year LL.B. Candidates)</span>
                </div>
                <div className="flex items-start gap-2 p-2.5 bg-[#FAF8F3] rounded-lg border border-[#DFAE24]/20">
                  <FaCheckCircle className="text-[#16A34A] w-4 h-4 shrink-0 mt-0.5" />
                  <span>Transfer Certificate (TC) & Migration Certificate</span>
                </div>
                <div className="flex items-start gap-2 p-2.5 bg-[#FAF8F3] rounded-lg border border-[#DFAE24]/20">
                  <FaCheckCircle className="text-[#16A34A] w-4 h-4 shrink-0 mt-0.5" />
                  <span>Caste Certificate & Validity Certificate (if applicable)</span>
                </div>
                <div className="flex items-start gap-2 p-2.5 bg-[#FAF8F3] rounded-lg border border-[#DFAE24]/20">
                  <FaCheckCircle className="text-[#16A34A] w-4 h-4 shrink-0 mt-0.5" />
                  <span>Aadhaar Card Copy & 4 Passport Photos</span>
                </div>
                <div className="flex items-start gap-2 p-2.5 bg-[#FAF8F3] rounded-lg border border-[#DFAE24]/20">
                  <FaCheckCircle className="text-[#16A34A] w-4 h-4 shrink-0 mt-0.5" />
                  <span>Entrance Exam Scorecard (MH-CET / CLAT if applicable)</span>
                </div>
              </div>
            </div>

            {/* Launch Google Form Large CTA */}
            <div className="pt-6 border-t border-[#DFAE24]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#756D63] font-medium">
                <FaShieldAlt className="text-[#B88E1C] w-4 h-4 shrink-0" />
                <span>Official Application hosted on secure Google Forms platform</span>
              </div>

              <button
                onClick={openGoogleForm}
                className="w-full sm:w-auto bg-[#26130D] hover:bg-[#3D2017] text-[#DFAE24] font-extrabold text-sm px-8 py-3.5 rounded-xl shadow-xl transition-all border border-[#DFAE24]/40 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Open Google Application Form</span>
                <FaExternalLinkAlt className="w-3.5 h-3.5" />
              </button>
            </div>

          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Apply;

