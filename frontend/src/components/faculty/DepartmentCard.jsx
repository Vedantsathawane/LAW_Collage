import React from 'react';
import { FaGraduationCap, FaFlask, FaUserCircle, FaEnvelope } from 'react-icons/fa';
import Card from '../ui/Card';

const DepartmentCard = ({ dept, onSelect }) => {
  return (
    <Card className="flex flex-col h-full hover:shadow-xl transition-all duration-300 group" hoverEffect={true}>
      <div className="p-6 md:p-8 flex flex-col h-full justify-between">
        <div>
          {/* Header row */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-bold tracking-widest text-secondary uppercase bg-primary-dark px-2.5 py-1 rounded-sm">
              Established {dept.established}
            </span>
            <span className="text-xs font-bold text-slate-400 font-mono">
              Code: {dept.code}
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold font-heading text-primary-dark group-hover:text-accent transition-colors mb-3 leading-snug">
            {dept.name}
          </h3>

          <p className="text-xs md:text-sm text-slate-500 leading-relaxed line-clamp-3 mb-6">
            {dept.description}
          </p>

          {/* Department Meta Specs */}
          <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-5 mb-6">
            <div className="flex items-center gap-2">
              <FaGraduationCap className="text-secondary w-4.5 h-4.5 shrink-0" />
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase leading-none">Enrollment</p>
                <p className="text-xs font-bold text-primary-dark mt-0.5">{dept.stats.students} Students</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaFlask className="text-secondary w-4.5 h-4.5 shrink-0" />
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase leading-none">Facilities</p>
                <p className="text-xs font-bold text-primary-dark mt-0.5">{dept.stats.labs} Specialized Labs</p>
              </div>
            </div>
          </div>
        </div>

        {/* HOD Details block */}
        <div className="border-t border-slate-100 pt-4 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2.5">
            <FaUserCircle className="text-slate-300 w-8 h-8 shrink-0" />
            <div className="min-w-0">
              <p className="text-[9px] font-bold text-slate-400 uppercase leading-none">Head of Dept</p>
              <p className="text-xs font-semibold text-primary truncate leading-tight mt-0.5">{dept.hod}</p>
            </div>
          </div>
          <button
            onClick={() => onSelect(dept)}
            className="text-xs font-bold text-primary hover:text-accent flex items-center gap-1 cursor-pointer transition-colors"
          >
            Details &rarr;
          </button>
        </div>
      </div>
    </Card>
  );
};

export default DepartmentCard;
