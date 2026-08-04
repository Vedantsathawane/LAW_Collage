import React from 'react';
import { FaFilePdf, FaDownload, FaSearch } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import { DOWNLOADS } from '../../data/mockData';

const Downloads = () => {
  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Official Downloads & Syllabi" subtitle="Student Corner" centered={true} />

        <div className="max-w-4xl mx-auto space-y-4">
          {DOWNLOADS.map((doc) => (
            <Card key={doc.id} className="p-5 bg-white border border-slate-100 shadow-premium flex flex-col sm:flex-row sm:items-center justify-between gap-4 group" hoverEffect={true}>
              <div className="flex items-start gap-3.5 min-w-0">
                <div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center shrink-0 group-hover:bg-red-500 group-hover:text-white transition-colors">
                  <FaFilePdf className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm md:text-base font-bold text-primary-dark truncate leading-snug group-hover:text-accent transition-colors">
                    {doc.title}
                  </h4>
                  <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase mt-1">
                    Released: {doc.date} • Size: {doc.size} • Format: {doc.type}
                  </p>
                </div>
              </div>

              <button
                onClick={() => alert(`Downloading document file: ${doc.title}`)}
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-light text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md cursor-pointer shrink-0 transition-colors"
              >
                <FaDownload className="w-3.5 h-3.5" />
                <span>Download</span>
              </button>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Downloads;
