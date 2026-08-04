import React from 'react';
import { FaQuoteLeft, FaGraduationCap } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import { PLACEMENTS } from '../../data/mockData';

const Testimonials = () => {
  const list = PLACEMENTS.studentSuccess;

  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Voice of Our Achievers" subtitle="Student Corner" centered={true} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {list.map((item, idx) => (
            <Card key={idx} className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium flex flex-col justify-between" hoverEffect={true}>
              <div className="space-y-4">
                <FaQuoteLeft className="text-secondary/15 w-10 h-10 mb-1" />
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed italic">
                  "{item.testimonial}"
                </p>
              </div>

              <div className="border-t border-slate-100 pt-4 mt-6 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full overflow-hidden border border-slate-100 shrink-0 select-none">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary-dark leading-tight">{item.name}</h4>
                  <p className="text-[10px] text-slate-400 mt-0.5">{item.course}</p>
                  <p className="text-[9px] font-bold text-success uppercase mt-1 leading-none">Placed at {item.company}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
