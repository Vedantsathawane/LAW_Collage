import React, { useState } from 'react';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import DepartmentCard from '../../components/faculty/DepartmentCard';
import Modal from '../../components/ui/Modal';
import { DEPARTMENTS } from '../../data/mockData';

const Departments = () => {
  const [selectedDept, setSelectedDept] = useState(null);

  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle
          title="Our Academic Departments"
          subtitle="Academics"
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEPARTMENTS.map((dept) => (
            <DepartmentCard
              key={dept.id}
              dept={dept}
              onSelect={(d) => setSelectedDept(d)}
            />
          ))}
        </div>
      </Container>

      {/* Detailed Department Modal */}
      {selectedDept && (
        <Modal
          isOpen={!!selectedDept}
          onClose={() => setSelectedDept(null)}
          title={selectedDept.name}
          size="lg"
        >
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">Vision & Mission</h4>
              <p className="text-sm font-semibold text-primary mb-2">Vision:</p>
              <p className="text-xs md:text-sm text-slate-600 italic mb-3">"{selectedDept.vision}"</p>
              <p className="text-sm font-semibold text-primary mb-2">Mission:</p>
              <p className="text-xs md:text-sm text-slate-600">{selectedDept.mission}</p>
            </div>

            <div className="border-t border-slate-100 pt-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Key Highlights</h4>
              <ul className="list-disc pl-5 text-xs md:text-sm text-slate-600 space-y-2">
                {selectedDept.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>

            <div className="border-t border-slate-100 pt-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Specialized Laboratories</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedDept.labs.map((lab, i) => (
                  <div key={i} className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
                    <p className="text-sm font-bold text-primary-dark">{lab.name}</p>
                    <p className="text-[11px] text-slate-400 mt-1 uppercase tracking-wider">Capacity: {lab.capacity} Students</p>
                    <p className="text-xs text-slate-500 mt-2 font-medium">Equipped: {lab.equipment}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="border-t border-slate-100 pt-4 text-xs text-slate-400">
              <p>For research queries or inquiries, contact HOD: <a href={`mailto:${selectedDept.email}`} className="text-primary hover:underline">{selectedDept.email}</a></p>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Departments;
