import React, { useState } from 'react';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import NewsCard from '../../components/home/NewsCard';
import Modal from '../../components/ui/Modal';
import { NEWS } from '../../data/mockData';

const News = () => {
  const [activeNews, setActiveNews] = useState(null);

  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Latest Campus News & Highlights" subtitle="Student Corner" centered={true} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEWS.map((item) => (
            <NewsCard
              key={item.id}
              news={item}
              onSelect={(newsItem) => setActiveNews(newsItem)}
            />
          ))}
        </div>
      </Container>

      {/* Detailed News Modal */}
      {activeNews && (
        <Modal
          isOpen={!!activeNews}
          onClose={() => setActiveNews(null)}
          title={activeNews.title}
          size="lg"
        >
          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden aspect-video bg-slate-100 select-none">
              <img
                src={activeNews.image}
                alt={activeNews.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex justify-between items-center text-xs text-slate-400 font-mono">
              <span>Published Date: {activeNews.date}</span>
              <div className="flex gap-1.5">
                {activeNews.tags.map((t, idx) => (
                  <span key={idx} className="bg-secondary/20 text-primary-dark font-bold px-2 py-0.5 rounded-sm">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-xs md:text-sm text-slate-600 leading-relaxed pt-2">
              {activeNews.content}
            </p>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default News;
