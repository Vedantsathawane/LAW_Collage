import React from 'react';
import { FaBook, FaGlobe, FaClock, FaClipboardList } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';

const Library = () => {
  const sections = [
    { icon: <FaBook className="text-secondary w-5 h-5" />, title: "65,000+ Print Volumes", desc: "Covers extensive subjects in modern coding, advanced quantum physics, business studies, organic synthetics, and Shakespearean critiques." },
    { icon: <FaGlobe className="text-secondary w-5 h-5" />, title: "E-Resource Portal Access", desc: "Direct access to Delnet, INFLIBNET N-LIST consortium, IEEE Xplore, and Springer research e-journals from digital lab kiosks." },
    { icon: <FaClock className="text-secondary w-5 h-5" />, title: "Extended Study Hours", desc: "Reading hall remains accessible from 08:30 AM to 06:00 PM on all working days, and up to 08:00 PM during exam weeks." },
    { icon: <FaClipboardList className="text-secondary w-5 h-5" />, title: "Automated Circulation", desc: "Integrated Koha library management system with RFID card verification for smooth issues and returns." }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Central Library & Knowledge Hub" subtitle="Library Info" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-5 text-slate-600 leading-relaxed text-sm md:text-base">
            <h3 className="text-xl font-bold font-heading text-primary-dark">
              A Sanctum of Intellectual Resource
            </h3>
            <p>
              The GWLC Central Law Library serves as the information focal point of the college. Equipped with spacious ventilation, high-speed Wi-Fi connectivity, and over 250 reading desk seats, it supports both undergraduate briefs and deep legal research.
            </p>
            <p>
              Students can query book availability online using the OPAC (Online Public Access Catalog) stations located at the entrance lobby, or request digitized scans of rare journals via the internal digital repository.
            </p>
          </div>

          <div className="lg:col-span-5 select-none">
            <Card className="overflow-hidden border border-slate-100 shadow-premium" hoverEffect={false}>
              <img
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=600&h=400"
                alt="Central Library Reading room"
                className="w-full object-cover"
              />
            </Card>
          </div>
        </div>

        {/* Resources grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sections.map((sec, idx) => (
            <Card key={idx} className="p-6 bg-white border border-slate-100 shadow-premium flex flex-col justify-between" hoverEffect={true}>
              <div>
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                  {sec.icon}
                </div>
                <h4 className="text-base font-bold font-heading text-primary-dark mb-2">{sec.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{sec.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Library;
