import React from 'react';
import { FaEnvelope, FaGraduationCap, FaUserTie } from 'react-icons/fa';
import Card from '../ui/Card';

const FacultyCard = ({ faculty, onViewProfile }) => {
  return (
    <Card className="flex flex-col h-full group" hoverEffect={true}>
      {/* Profile Image container */}
      <div className="relative overflow-hidden aspect-[4/5] bg-slate-100 shrink-0">
        <img
          src={faculty.image}
          alt={faculty.name}
          className="w-full h-full object-cover hover-zoom-img"
          loading="lazy"
        />
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Profile Details */}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-[10px] font-bold text-secondary uppercase bg-primary/5 border border-primary/10 px-2 py-0.5 rounded-sm self-start mb-2.5">
          {faculty.designation}
        </span>
        <h3 className="text-base md:text-lg font-bold font-heading text-primary-dark group-hover:text-accent transition-colors leading-tight mb-1.5">
          {faculty.name}
        </h3>
        
        <div className="flex items-start gap-2 text-xs text-slate-500 mt-2">
          <FaGraduationCap className="text-secondary w-3.5 h-3.5 mt-0.5 shrink-0" />
          <span className="truncate" title={faculty.qualification}>{faculty.qualification}</span>
        </div>

        <div className="flex items-start gap-2 text-xs text-slate-500 mt-1.5">
          <FaUserTie className="text-secondary w-3.5 h-3.5 mt-0.5 shrink-0" />
          <span className="truncate">{faculty.specialization}</span>
        </div>

        <div className="flex items-center gap-2 text-xs text-slate-500 mt-1.5">
          <FaEnvelope className="text-secondary w-3.5 h-3.5 shrink-0" />
          <a href={`mailto:${faculty.email}`} className="truncate hover:underline">{faculty.email}</a>
        </div>

        {/* View Profile button */}
        <button
          onClick={() => onViewProfile(faculty)}
          className="mt-5 w-full bg-slate-100 hover:bg-primary hover:text-white text-primary-dark text-xs font-semibold py-2 rounded-lg transition-all duration-300 font-btn cursor-pointer"
        >
          View Profile
        </button>
      </div>
    </Card>
  );
};

export default FacultyCard;
