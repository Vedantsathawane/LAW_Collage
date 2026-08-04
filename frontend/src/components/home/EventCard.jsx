import React from 'react';
import { FaCalendarDay, FaMapMarkerAlt, FaClock, FaArrowRight } from 'react-icons/fa';
import Card from '../ui/Card';

const EventCard = ({ event, onSelect }) => {
  return (
    <Card className="flex flex-col md:flex-row items-stretch h-full overflow-hidden hover:shadow-xl transition-all duration-300 group" hoverEffect={false}>
      {/* Event Image */}
      <div className="relative overflow-hidden md:w-2/5 aspect-video md:aspect-auto bg-slate-100 shrink-0">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 to-transparent" />
      </div>

      {/* Event Content */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-1 bg-white">
        <div>
          <span className="text-[10px] font-bold text-secondary uppercase bg-primary-dark/5 border border-primary-dark/10 px-2 py-0.5 rounded-sm self-start mb-2 inline-block">
            {event.organizer}
          </span>
          <h3 className="text-lg md:text-xl font-bold font-heading text-primary-dark group-hover:text-accent transition-colors leading-snug mb-3">
            {event.title}
          </h3>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed line-clamp-2 mb-4">
            {event.description}
          </p>
        </div>

        {/* Meta row */}
        <div className="border-t border-slate-100 pt-4 mt-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-500 mb-4">
            <div className="flex items-center gap-2">
              <FaCalendarDay className="text-secondary w-3.5 h-3.5 shrink-0" />
              <span className="font-mono truncate">{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-secondary w-3.5 h-3.5 shrink-0" />
              <span className="font-mono truncate">{event.time}</span>
            </div>
            <div className="flex items-center gap-2 sm:col-span-2">
              <FaMapMarkerAlt className="text-secondary w-3.5 h-3.5 shrink-0" />
              <span className="truncate">{event.venue}</span>
            </div>
          </div>

          <button
            onClick={() => onSelect(event)}
            className="flex items-center gap-1.5 text-xs font-bold text-primary hover:text-accent transition-all duration-300 cursor-pointer"
          >
            <span>Event Registration & Info</span>
            <FaArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default EventCard;
