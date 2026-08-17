import React, { useState } from 'react';
import { FaUserGraduate, FaPaperPlane, FaBriefcase } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import Button from '../../components/common/Button';

const Alumni = () => {
  const [formData, setFormData] = useState({
    name: '',
    batch: '',
    course: '',
    company: '',
    designation: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your alumni registration request has been submitted for verification. We will send you updates regarding the upcoming Alumni Meet 2026.`);
    setFormData({ name: '', batch: '', course: '', company: '', designation: '', email: '', message: '' });
  };

  return (
    <div className="pt-24 pb-16 bg-[#FAF8F3] font-body">
      <Container>
        <SectionTitle title="Alumni Network & Registration" subtitle="Alumni Connect" centered={true} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          {/* Intro column */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-6 bg-white border border-[#DFAE24]/40 shadow-premium relative overflow-hidden" hoverEffect={false}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFAE24]/15 rounded-full blur-xl pointer-events-none -mr-8 -mt-8" />
              <div className="w-12 h-12 rounded-xl bg-[#FAF8F3] border border-[#DFAE24]/30 flex items-center justify-center mb-4 shadow-sm">
                <FaUserGraduate className="text-[#B88E1C] w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-[#26130D]">Join Our Global Network</h3>
              <p className="text-xs text-[#211A17] font-medium leading-relaxed mt-2.5">
                Our alumni network connects graduates working in legal practice, judicial services, corporate counsel roles, and public administration. Join the alumni register to stay connected with the institution.
              </p>
            </Card>

            <Card className="p-6 bg-white border border-[#DFAE24]/40 shadow-premium relative overflow-hidden" hoverEffect={false}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFAE24]/15 rounded-full blur-xl pointer-events-none -mr-8 -mt-8" />
              <span className="text-[10px] font-bold text-[#B88E1C] uppercase tracking-widest font-heading">Event Notice</span>
              <h3 className="text-base font-bold font-heading text-[#26130D] mt-1 mb-3 border-b border-[#DFAE24]/20 pb-2">
                Upcoming Alumni Summit 2026
              </h3>
              <p className="text-xs text-[#211A17] font-medium leading-relaxed">
                The Annual Alumni Meet is scheduled for <b className="text-[#B88E1C]">December 15, 2026</b> at the Main campus auditorium lobby. Panel discussions will focus on industrial syllabus updates and guest lecturing setups.
              </p>
            </Card>
          </div>

          {/* Form column */}
          <div className="lg:col-span-7">
            <Card className="p-6 md:p-8 bg-white border border-[#DFAE24]/30 shadow-premium" hoverEffect={false}>
              <h3 className="text-lg font-bold font-heading text-[#26130D] mb-5 border-b border-slate-100 pb-3.5">
                Register Your Alumni Details
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs md:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-extrabold text-[#211A17]">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priyesh Nair"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:border-[#26130D] text-[#211A17] font-semibold bg-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-extrabold text-[#211A17]">Graduation Year / Batch *</label>
                    <input
                      type="text"
                      required
                      value={formData.batch}
                      onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                      placeholder="e.g. 2020-23"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:border-[#26130D] text-[#211A17] font-semibold bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-extrabold text-[#211A17]">Degree Course Studied *</label>
                  <input
                    type="text"
                    required
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    placeholder="e.g. LL.B. 3 Years Semester Course"
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:border-[#26130D] text-[#211A17] font-semibold bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-extrabold text-[#211A17]">Current Employer / Company *</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. District Court / Law Firm"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:border-[#26130D] text-[#211A17] font-semibold bg-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-extrabold text-[#211A17]">Current Designation *</label>
                    <input
                      type="text"
                      required
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      placeholder="e.g. Advocate / Legal Consultant"
                      className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:border-[#26130D] text-[#211A17] font-semibold bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-extrabold text-[#211A17]">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. priyesh@law.com"
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:border-[#26130D] text-[#211A17] font-semibold bg-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-extrabold text-[#211A17]">Message / Suggestions</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Any message or suggestions for college juniors..."
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:border-[#26130D] text-[#211A17] font-semibold bg-white"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  icon={<FaPaperPlane />}
                >
                  Submit Registration
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Alumni;
