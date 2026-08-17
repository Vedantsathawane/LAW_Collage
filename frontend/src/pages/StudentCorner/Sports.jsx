import React from 'react';
import { FaFutbol, FaTrophy, FaDribbble, FaRunning } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';

const Sports = () => {
  const assets = [
    { icon: <FaFutbol className="text-secondary w-5 h-5" />, title: "Full-Size Turf Field", desc: "A green turf football field featuring spectator galleries, running lanes, and automatic floodlight rigs for training." },
    { icon: <FaDribbble className="text-secondary w-5 h-5" />, title: "Concrete Basketball Courts", desc: "Two standard-dimension courts with acrylic backboards, alongside a concrete tennis court setup." },
    { icon: <FaRunning className="text-secondary w-5 h-5" />, title: "Indoor Sports Gymnasium", desc: "Four high-end table tennis decks, two wooden-floored badminton arenas, and standard weightlifting setups." },
    { icon: <FaTrophy className="text-secondary w-5 h-5" />, title: "University Achievements", desc: "Our student athletes have secured top ranks in inter-collegiate athletics and sports meets." }
  ];

  return (
    <div className="pt-24 pb-16 bg-[#FAF8F3] font-body">
      <Container>
        <SectionTitle title="Sports Facilities & Achievements" subtitle="Campus Life" centered={true} />

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {assets.map((asset, i) => (
              <Card key={i} className="p-6 bg-white border border-[#DFAE24]/40 shadow-premium relative overflow-hidden flex flex-col justify-between" hoverEffect={true}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFAE24]/15 rounded-full blur-xl pointer-events-none -mr-8 -mt-8" />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F3] border border-[#DFAE24]/30 flex items-center justify-center mb-4 shadow-sm">
                    {React.cloneElement(asset.icon, { className: "text-[#B88E1C] w-5 h-5" })}
                  </div>
                  <h4 className="text-base font-bold font-heading text-[#26130D] mb-2">{asset.title}</h4>
                  <p className="text-xs text-[#211A17] font-medium leading-relaxed">{asset.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Sports;
