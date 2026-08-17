import React from 'react';
import { FaBuilding, FaUtensils, FaUserShield, FaClipboardList } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';

const Hostel = () => {
  const specs = [
    { icon: <FaBuilding className="text-secondary w-5 h-5" />, title: "Separate Boys & Girls Blocks", desc: "Two secure multi-story buildings equipped with backup generators, solar water heaters, and common recreation lounges." },
    { icon: <FaUtensils className="text-secondary w-5 h-5" />, title: "Nutritious Mess Meals", desc: "Four daily meal times serving balance-diet vegetarian food supervised by student mess committee and hygiene inspectors." },
    { icon: <FaUserShield className="text-secondary w-5 h-5" />, title: "24/7 Security & Wardens", desc: "Biometric attendance scanning, CCTV monitoring, and dedicated resident wardens managing medical emergencies." },
    { icon: <FaClipboardList className="text-secondary w-5 h-5" />, title: "Hostel Rules & Curfew", desc: "Night entry curfew at 08:30 PM. Outing passes require parent verification logs submitted on the hostel portal." }
  ];

  return (
    <div className="pt-24 pb-16 bg-[#FAF8F3] font-body">
      <Container>
        <SectionTitle title="Residential Student Hostels" subtitle="Hostel Info" centered={true} />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Blocks overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-white border border-[#DFAE24]/40 shadow-premium relative overflow-hidden text-center" hoverEffect={false}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFAE24]/15 rounded-full blur-xl pointer-events-none -mr-8 -mt-8" />
              <span className="text-[10px] font-bold text-[#B88E1C] uppercase tracking-widest font-heading">Boys Residence</span>
              <h3 className="text-lg font-bold font-heading text-[#26130D] mt-1">Boys Hostel Block</h3>
              <p className="text-xs text-[#211A17] font-semibold mt-2">Cap: 250 Beds • Double Sharing Rooms</p>
              <div className="border border-[#DFAE24]/30 bg-[#FAF8F3] rounded-xl mt-4 p-3 text-xs text-[#26130D] font-extrabold">
                Fee: ₹42,000 / Year (Mess Inclusive)
              </div>
            </Card>

            <Card className="p-6 bg-white border border-[#DFAE24]/40 shadow-premium relative overflow-hidden text-center" hoverEffect={false}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFAE24]/15 rounded-full blur-xl pointer-events-none -mr-8 -mt-8" />
              <span className="text-[10px] font-bold text-[#B88E1C] uppercase tracking-widest font-heading">Girls Residence</span>
              <h3 className="text-lg font-bold font-heading text-[#26130D] mt-1">Girls Hostel Block</h3>
              <p className="text-xs text-[#211A17] font-semibold mt-2">Cap: 200 Beds • Single & Double Rooms</p>
              <div className="border border-[#DFAE24]/30 bg-[#FAF8F3] rounded-xl mt-4 p-3 text-xs text-[#26130D] font-extrabold">
                Fee: ₹42,000 / Year (Mess Inclusive)
              </div>
            </Card>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {specs.map((spec, i) => (
              <Card key={i} className="p-6 bg-white border border-slate-100 shadow-premium flex flex-col justify-between" hoverEffect={true}>
                <div>
                  <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                    {spec.icon}
                  </div>
                  <h4 className="text-base font-bold font-heading text-primary-dark mb-2">{spec.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{spec.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hostel;
