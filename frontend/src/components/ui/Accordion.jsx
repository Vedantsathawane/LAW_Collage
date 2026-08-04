import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const AccordionItem = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border border-slate-100 rounded-xl bg-white shadow-xs overflow-hidden mb-3">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4.5 text-left font-semibold text-primary hover:bg-slate-50 transition-colors focus:outline-none focus:bg-slate-50 cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="font-heading text-sm md:text-base leading-snug">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-secondary shrink-0 ml-4"
        >
          <FaChevronDown className="w-3.5 h-3.5" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-5 pt-1 border-t border-slate-50 text-xs md:text-sm text-slate-600 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Accordion = ({ items, allowMultiple = false }) => {
  const [openIndex, setOpenIndex] = useState(allowMultiple ? [] : null);

  const handleToggle = (index) => {
    if (allowMultiple) {
      if (openIndex.includes(index)) {
        setOpenIndex(openIndex.filter((i) => i !== index));
      } else {
        setOpenIndex([...openIndex, index]);
      }
    } else {
      setOpenIndex(openIndex === index ? null : index);
    }
  };

  const isItemOpen = (index) => {
    return allowMultiple ? openIndex.includes(index) : openIndex === index;
  };

  return (
    <div className="w-full">
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          title={item.title}
          isOpen={isItemOpen(idx)}
          onToggle={() => handleToggle(idx)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;
export { AccordionItem };
