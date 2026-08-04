import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Tabs = ({
  tabs, // Array of { label: string, key: string, content: ReactNode }
  defaultActiveKey,
  onChange,
  className = ""
}) => {
  const [activeKey, setActiveKey] = useState(defaultActiveKey || tabs[0]?.key);

  const handleTabClick = (key) => {
    setActiveKey(key);
    if (onChange) onChange(key);
  };

  return (
    <div className={`w-full ${className}`}>
      {/* Tab bar list */}
      <div className="flex border-b border-slate-200 overflow-x-auto no-scrollbar scroll-smooth mb-8 select-none">
        <div className="flex space-x-6 md:space-x-8 px-1 pb-px">
          {tabs.map((tab) => {
            const isActive = activeKey === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => handleTabClick(tab.key)}
                className={`py-3 px-1 text-sm font-semibold border-b-2 font-heading transition-all duration-300 relative focus:outline-none shrink-0 cursor-pointer ${
                  isActive 
                    ? "text-primary border-primary" 
                    : "text-slate-400 border-transparent hover:text-slate-600"
                }`}
              >
                {tab.label}
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Tab Panel */}
      <div className="tab-content transition-all duration-300">
        {tabs.map((tab) => {
          if (activeKey !== tab.key) return null;
          return (
            <motion.div
              key={tab.key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              role="tabpanel"
            >
              {tab.content}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
