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
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Alumni Network & Registration" subtitle="Alumni Connect" centered={true} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          {/* Intro column */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-6 bg-gradient-to-tr from-primary to-primary-light text-white border-none" hoverEffect={false}>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                <FaUserGraduate className="text-secondary w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white">Join Our Global Network</h3>
              <p className="text-xs text-slate-200 leading-relaxed mt-2.5">
                GWLC boasts an active network of alumni working in top law firms (Cyril Amarchand, Khaitan & Co, Trilegal), judicial services (High Court Judges, Magistrates), corporate counsel roles, and government legal advisory circles globally. Join the register to mentor junior batches and attend yearly summits.
              </p>
            </Card>

            <Card className="p-6 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
              <h3 className="text-base font-bold font-heading text-primary-dark mb-4 border-b border-slate-100 pb-2">
                Upcoming Alumni Summit 2026
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                The Annual Alumni Meet is scheduled for <b>December 15, 2026</b> at the Main campus auditorium lobby. Panel discussions will focus on industrial syllabus updates and guest lecturing setups.
              </p>
            </Card>
          </div>

          {/* Form column */}
          <div className="lg:col-span-7">
            <Card className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
              <h3 className="text-lg font-bold font-heading text-primary-dark mb-5 border-b border-slate-100 pb-3.5">
                Register Your Alumni Details
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs md:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-500">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priyesh Nair"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-500">Graduation Year / Batch *</label>
                    <input
                      type="text"
                      required
                      value={formData.batch}
                      onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                      placeholder="e.g. 2020-23"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-slate-500">Degree Course Studied *</label>
                  <input
                    type="text"
                    required
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    placeholder="e.g. B.Sc. Hons. Computer Science"
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-500">Current Employer / Company *</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. TCS Research"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-500">Current Designation *</label>
                    <input
                      type="text"
                      required
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      placeholder="e.g. Senior Software Engineer"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-slate-500">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. priyesh@tcs.com"
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-slate-500">Message / Suggestions</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Any message or suggestions for college juniors..."
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
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
