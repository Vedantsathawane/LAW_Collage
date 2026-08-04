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
    { icon: <FaTrophy className="text-secondary w-5 h-5" />, title: "State-Level Achievements", desc: "GWLC athletes have secured top ranks in state-level university football divisions and athletic short sprints." }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Sports Facilities & Achievements" subtitle="Campus Life" centered={true} />

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {assets.map((asset, i) => (
              <Card key={i} className="p-6 bg-white border border-slate-100 shadow-premium flex flex-col justify-between" hoverEffect={true}>
                <div>
                  <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center mb-4">
                    {asset.icon}
                  </div>
                  <h4 className="text-base font-bold font-heading text-primary-dark mb-2">{asset.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{asset.desc}</p>
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
