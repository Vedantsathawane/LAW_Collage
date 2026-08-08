import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaClock } from 'react-icons/fa';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/common/Button';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received. Our helpdesk team will respond to: ${formData.email} within 24-48 hours.`);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Get in Touch with Us" subtitle="Contact Us" centered={true} />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-5xl mx-auto">
          {/* Contact Details Directory */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="p-6 md:p-8 bg-gradient-to-tr from-primary to-primary-light text-white border-none" hoverEffect={false}>
              <h3 className="text-lg font-bold font-heading text-white mb-6 border-b border-white/10 pb-2.5">
                Campus Location & Office
              </h3>
              
              <ul className="space-y-4 text-xs md:text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-secondary w-5 h-5 shrink-0 mt-0.5" />
                  <span>Dr. Milind Yerne College of Law, Pauni, Dist. Bhandara, Maharashtra - 441910</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaPhoneAlt className="text-secondary w-5 h-5 shrink-0" />
                  <a href="tel:+919422155100" className="hover:underline">+91-94221-55100</a>
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-secondary w-5 h-5 shrink-0" />
                  <a href="mailto:info@dmycl.edu.in" className="hover:underline">info@dmycl.edu.in</a>
                </li>
              </ul>
            </Card>

            {/* Timings card */}
            <Card className="p-6 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
              <div className="flex items-center gap-3 mb-4">
                <FaClock className="text-secondary w-5 h-5 shrink-0" />
                <h3 className="text-base font-bold font-heading text-primary-dark">
                  Office Working Hours
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-500 font-medium">
                <tr className="flex justify-between border-b border-slate-50 pb-2">
                  <td>Monday - Friday:</td>
                  <td className="font-semibold text-primary">09:00 AM - 05:00 PM</td>
                </tr>
                <tr className="flex justify-between border-b border-slate-50 pb-2">
                  <td>Saturday (1st & 3rd):</td>
                  <td className="font-semibold text-primary">09:00 AM - 01:00 PM</td>
                </tr>
                <tr className="flex justify-between">
                  <td>Sunday / Holidays:</td>
                  <td className="font-semibold text-red-500">Closed</td>
                </tr>
              </ul>
            </Card>
          </div>

          {/* Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <Card className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
              <h3 className="text-lg font-bold font-heading text-primary-dark mb-6 border-b border-slate-100 pb-3">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs md:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-500">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Arun Kumar"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-500">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. arun@gmail.com"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-500">Contact Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="font-bold text-slate-500">Subject *</label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Admission Query"
                      className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-slate-500">Detailed Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Type your message or enquiry here..."
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl focus:outline-none focus:border-primary text-slate-700 bg-white"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full"
                  icon={<FaPaperPlane />}
                >
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
