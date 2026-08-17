import React from 'react';
import { FaLaptopCode, FaUtensils, FaDribbble, FaMicrophoneAlt, FaFlask, FaCheckSquare } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';

const CampusFacilities = () => {
  const facilities = [
    { icon: <FaLaptopCode className="text-secondary w-5 h-5" />, title: "Smart IT Laboratories", desc: "4 state-of-the-art computational labs equipped with high-end dual-screen Intel i7 systems, dedicated GPU modules, and cloud learning toolkits." },
    { icon: <FaFlask className="text-secondary w-5 h-5" />, title: "DST Experimental Labs", desc: "Advanced physical chemistry fume hoods and observational decks housing automated Schmidt-Cassegrain telescopes for physics research." },
    { icon: <FaUtensils className="text-secondary w-5 h-5" />, title: "Multi-Cuisine Canteen", desc: "Clean and hygienic dining block serving fresh vegetarian meals, hot beverages, and snacks at subsidized rates approved by welfare boards." },
    { icon: <FaMicrophoneAlt className="text-secondary w-5 h-5" />, title: "Central Seminar Auditorium", desc: "A fully air-conditioned, acoustic-designed indoor hall seating 500+ guests, equipped with 4K projectors and line array speaker sets." },
    { icon: <FaDribbble className="text-secondary w-5 h-5" />, title: "Sports Complex", desc: "Full-sized green turf football field, professional concrete basketball courts, indoor badminton arenas, and high-performance gyms." }
  ];

  return (
    <div className="pt-24 pb-16 bg-[#FAF8F3] font-body">
      <Container>
        <SectionTitle title="Campus Infrastructures & Facilities" subtitle="Campus Life" centered={true} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {facilities.map((fac, idx) => (
            <Card key={idx} className="p-6 md:p-8 bg-white border border-[#DFAE24]/40 shadow-premium relative overflow-hidden flex flex-col justify-between" hoverEffect={true}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#DFAE24]/15 rounded-full blur-xl pointer-events-none -mr-8 -mt-8" />
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl bg-[#FAF8F3] border border-[#DFAE24]/30 flex items-center justify-center mb-5 shadow-sm">
                  {React.cloneElement(fac.icon, { className: "text-[#B88E1C] w-5 h-5" })}
                </div>
                <h3 className="text-base md:text-lg font-bold font-heading text-[#26130D] mb-2.5">
                  {fac.title}
                </h3>
                <p className="text-xs md:text-sm text-[#211A17] font-medium leading-relaxed">
                  {fac.desc}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default CampusFacilities;
