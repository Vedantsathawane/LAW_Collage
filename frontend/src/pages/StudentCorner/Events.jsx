import React, { useState } from 'react';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import EventCard from '../../components/home/EventCard';
import Modal from '../../components/ui/Modal';
import Button from '../../components/common/Button';
import { EVENTS } from '../../data/mockData';

const Events = () => {
  const [activeEvent, setActiveEvent] = useState(null);
  const [rsvpState, setRsvpState] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setRsvpState(true);
    setTimeout(() => {
      alert(`Success! You have registered for: ${activeEvent.title}. Entrance QR code sent to email.`);
      setActiveEvent(null);
      setRsvpState(false);
    }, 1000);
  };

  return (
    <div className="pt-24 pb-16 bg-[#FAF8F3] font-body">
      <Container>
        <SectionTitle title="Campus Activity Calendar" subtitle="Student Corner" centered={true} />

        <div className="space-y-6 max-w-4xl mx-auto">
          {EVENTS.map((evt) => (
            <EventCard
              key={evt.id}
              event={evt}
              onSelect={(item) => {
                setActiveEvent(item);
                setRsvpState(false);
              }}
            />
          ))}
        </div>
      </Container>

      {/* RSVP Modal */}
      {activeEvent && (
        <Modal
          isOpen={!!activeEvent}
          onClose={() => setActiveEvent(null)}
          title={`RSVP: ${activeEvent.title}`}
          size="md"
        >
          <div className="space-y-4 text-xs md:text-sm">
            <div className="rounded-xl overflow-hidden aspect-video bg-slate-100 select-none">
              <img
                src={activeEvent.image}
                alt={activeEvent.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <p className="text-slate-500 leading-relaxed font-medium">
              {activeEvent.description}
            </p>

            <form onSubmit={handleRegister} className="border-t border-slate-100 pt-4 space-y-3.5">
              <p className="font-bold text-primary-dark text-xs uppercase tracking-wide">Register For Entry Passes</p>
              
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="px-3 py-2 border border-slate-200 rounded-lg text-slate-700 bg-white"
                />
                <input
                  type="text"
                  required
                  placeholder="Roll Number / Guest"
                  className="px-3 py-2 border border-slate-200 rounded-lg text-slate-700 bg-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="px-3 py-2 border border-slate-200 rounded-lg text-slate-700 bg-white"
                />
                <input
                  type="tel"
                  required
                  placeholder="Contact Mobile"
                  className="px-3 py-2 border border-slate-200 rounded-lg text-slate-700 bg-white"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                className="w-full py-2.5 text-xs font-bold"
                disabled={rsvpState}
              >
                {rsvpState ? "Processing passes..." : "Generate Entry Pass QR"}
              </Button>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Events;
