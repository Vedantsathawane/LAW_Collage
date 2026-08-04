import React, { useState } from 'react';
import { FaEye, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';
import { GALLERY } from '../../data/mockData';

const Gallery = () => {
  const [category, setCategory] = useState('all');
  const [activeImage, setActiveImage] = useState(null);

  const categories = ['all', 'Campus', 'Labs', 'Library', 'Sports'];

  const filteredImages = GALLERY.filter(
    (img) => category === 'all' || img.category === category
  );

  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Campus Photo Archives" subtitle="Student Corner" centered={true} />

        {/* Categories Tab bar */}
        <div className="flex justify-center flex-wrap gap-2.5 mb-10 select-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 border rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
                category === cat
                  ? 'bg-primary text-white border-primary shadow-md'
                  : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Masonry-like image grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={img.id}
              >
                <Card
                  onClick={() => setActiveImage(img)}
                  className="relative overflow-hidden group aspect-[4/3]"
                  hoverEffect={false}
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                      <FaEye className="w-6 h-6 mx-auto mb-2 text-secondary" />
                      <p className="font-heading font-bold text-sm leading-tight text-white">{img.title}</p>
                      <p className="text-[10px] text-slate-300 uppercase mt-1 tracking-wider">{img.category}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Container>

      {/* Lightbox fullscreen Modal */}
      <AnimatePresence>
        {activeImage && (
          <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 text-white hover:text-secondary p-3 bg-white/10 rounded-full transition-colors cursor-pointer"
            >
              <FaTimes className="w-5 h-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl max-h-[80vh] overflow-hidden rounded-xl border border-white/10 select-none shadow-2xl relative"
            >
              <img
                src={activeImage.url}
                alt={activeImage.title}
                className="max-h-full max-w-full object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/80 to-transparent p-5 text-white">
                <h4 className="font-heading font-bold text-base md:text-lg text-white">{activeImage.title}</h4>
                <p className="text-xs text-slate-300 mt-1">{activeImage.category} Collection</p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
