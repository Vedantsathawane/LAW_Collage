import React, { useState } from 'react';
import { FaUserCircle, FaPaperPlane, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import Button from '../../components/common/Button';
import { COMMITTEE_MEMBERS } from '../../data/mockData';

const GrievanceCell = () => {
  const members = COMMITTEE_MEMBERS.filter(m => m.committee.includes("Grievance"));

  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    email: '',
    phone: '',
    subject: '',
    description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}. Your grievance has been recorded. Reference Ticket ID: GWLC-2026-${Math.floor(1000 + Math.random() * 9000)}. Our committee will contact you shortly.`);
    setFormData({ name: '', rollNo: '', email: '', phone: '', subject: '', description: '' });
  };

  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Student Grievance Redressal Cell" subtitle="Grievance Cell" centered={true} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          {/* Info & Committee Column */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-6 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
              <h3 className="text-base md:text-lg font-bold font-heading text-primary-dark mb-4 border-b border-slate-100 pb-2.5">
                Redressal Mechanism
              </h3>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                GWLC is dedicated to solving student grievances in a timely and objective manner. Complaints regarding examinations, evaluations, fee structures, classroom facilities, or canteen hygiene can be submitted directly through this portal.
              </p>
            </Card>

            {/* Committee lists */}
            <Card className="p-6 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
              <h3 className="text-base md:text-lg font-bold font-heading text-primary-dark mb-4 border-b border-slate-100 pb-2.5">
                Nodal Officers Directory
              </h3>
              <div className="space-y-4">
                {members.map((mem, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl">
                    <FaUserCircle className="text-slate-300 w-10 h-10 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-primary-dark leading-tight">{mem.name}</p>
                      <p className="text-[10px] font-bold text-secondary uppercase tracking-wider mt-0.5">{mem.role}</p>
                      <p className="text-[11px] text-slate-400 mt-1 font-mono">{mem.contact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Grievance Submission Form Column */}
          <div className="lg:col-span-7">
            <Card className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
              <h3 className="text-lg font-bold font-heading text-primary-dark mb-6 border-b border-slate-100 pb-3">
                Register a Complaint / Inquiry
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 text-xs md:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-500">Student Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sen"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-500">Roll Number *</label>
                    <input
                      type="text"
                      required
                      value={formData.rollNo}
                      onChange={(e) => setFormData({ ...formData, rollNo: e.target.value })}
                      placeholder="e.g. GWLC/LAW/2026/025"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-500">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rahul@gmail.com"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-500">Mobile Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-slate-500">Subject / Category *</label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                  >
                    <option value="">Select Category</option>
                    <option value="Academic">Academic (Classes, Labs)</option>
                    <option value="Examination">Examination & Valuation</option>
                    <option value="Hostel">Hostel Accommodation & Food</option>
                    <option value="Infrastructure">Library or Canteen Infrastructure</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-slate-500">Detailed Description *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Provide details about the issue you are facing..."
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  icon={<FaPaperPlane />}
                >
                  Submit Grievance ticket
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GrievanceCell;
