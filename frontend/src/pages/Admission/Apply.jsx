import React from 'react';
import { FaUserPlus, FaPaperPlane, FaUser, FaBook, FaSchool } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import Button from '../../components/common/Button';
import { DEPARTMENTS } from '../../data/mockData';
import useAdmissionForm from '../../hooks/useAdmissionForm';
import { INSTITUTION_SHORT_NAME } from '../../config/institutionConfig';

const Apply = () => {
  const {
    formData,
    submitted,
    filteredCourses: availableCourses,
    handleInputChange,
    handleDepartmentChange,
    executeSubmit
  } = useAdmissionForm();

  const handleSubmit = (e) => {
    executeSubmit(e, (applicationNumber, email) => {
      alert(`Admission Form Submitted Successfully!\nApplication Number: ${applicationNumber}\nAn email with details has been sent to ${email}.`);
    });
  };

  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Online Admission Portal" subtitle="Apply Online" centered={true} />

        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-10 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
            <div className="flex items-center gap-3.5 mb-8 border-b border-slate-100 pb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary shrink-0">
                <FaUserPlus className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading text-primary-dark">
                  {INSTITUTION_SHORT_NAME} Professional Candidates Registration 2026-27
                </h3>
                <p className="text-xs text-slate-400 mt-1 font-medium">
                  Ensure all fields marked with * are filled accurately in compliance with Bar Council guidelines.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 text-xs md:text-sm">
              
              {/* Step 1: Personal Details */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-primary flex items-center gap-2 border-b border-slate-50 pb-2 font-heading">
                  <FaUser className="text-secondary w-3.5 h-3.5" />
                  <span>1. Candidate Personal Information</span>
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-500">Candidate Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      placeholder="As per secondary certificated sheet"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-500">Date of Birth *</label>
                      <input
                        type="date"
                        required
                        value={formData.dob}
                        onChange={(e) => handleInputChange('dob', e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="font-bold text-slate-500">Gender *</label>
                      <select
                        required
                        value={formData.gender}
                        onChange={(e) => handleInputChange('gender', e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                      >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-500">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="For admissions updates"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-500">Mobile Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-500">Parent / Guardian Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => handleInputChange('parentName', e.target.value)}
                      placeholder="Father's or Mother's name"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-500">Parent Contact Mobile *</label>
                    <input
                      type="tel"
                      required
                      value={formData.parentPhone}
                      onChange={(e) => handleInputChange('parentPhone', e.target.value)}
                      placeholder="For emergency alerts"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                  <div className="sm:col-span-6 space-y-1.5">
                    <label className="font-bold text-slate-500">Correspondence Address *</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      placeholder="Street, locality, city details"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                    />
                  </div>
                  <div className="sm:col-span-3 space-y-1.5">
                    <label className="font-bold text-slate-500">State *</label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      placeholder="e.g. Delhi"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                    />
                  </div>
                  <div className="sm:col-span-3 space-y-1.5">
                    <label className="font-bold text-slate-500">Pincode *</label>
                    <input
                      type="text"
                      required
                      value={formData.pincode}
                      onChange={(e) => handleInputChange('pincode', e.target.value)}
                      placeholder="6 digits"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Course Preferences */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h4 className="text-sm font-bold text-primary flex items-center gap-2 border-b border-slate-50 pb-2 font-heading">
                  <FaBook className="text-secondary w-3.5 h-3.5" />
                  <span>2. Program Selection Preference</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-500">Department Preference *</label>
                    <select
                      required
                      value={formData.deptPreference}
                      onChange={(e) => handleDepartmentChange(e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                    >
                      <option value="">Select Department</option>
                      {COURSES.map((course) => (
                        <option key={course.id} value={course.id}>
                          {course.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-500">Course Preference *</label>
                    <select
                      required
                      value={formData.coursePreference}
                      onChange={(e) => handleInputChange('coursePreference', e.target.value)}
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                      disabled={!formData.deptPreference}
                    >
                      <option value="">Select Course</option>
                      {availableCourses.map((course) => (
                        <option key={course.id} value={course.id}>
                          {course.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 3: Academic Qualifications */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h4 className="text-sm font-bold text-primary flex items-center gap-2 border-b border-slate-50 pb-2 font-heading">
                  <FaSchool className="text-secondary w-3.5 h-3.5" />
                  <span>3. Prior Academic Qualifications</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-500">Qualifying Examination *</label>
                    <input
                      type="text"
                      required
                      value={formData.qualifyingExam}
                      onChange={(e) => handleInputChange('qualifyingExam', e.target.value)}
                      placeholder="e.g. CBSE 10+2 / B.A. Degree"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-500">Aggregate Marks Score *</label>
                    <input
                      type="text"
                      required
                      value={formData.qualifyingScore}
                      onChange={(e) => handleInputChange('qualifyingScore', e.target.value)}
                      placeholder="e.g. 84.5% or 8.9 CGPA"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-500">Passing Year *</label>
                    <input
                      type="number"
                      required
                      min={2020}
                      max={2026}
                      value={formData.passingYear}
                      onChange={(e) => handleInputChange('passingYear', e.target.value)}
                      placeholder="e.g. 2026"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-500">CLAT / LSAT Rank (Optional)</label>
                    <input
                      type="text"
                      placeholder="e.g. AIR 1402"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="pt-6 border-t border-slate-100 flex items-center justify-end">
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full sm:w-auto px-10 py-3"
                  icon={<FaPaperPlane />}
                  disabled={submitted}
                >
                  {submitted ? "Registering Candidate..." : "Submit Admission Application"}
                </Button>
              </div>

            </form>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Apply;
