import React from 'react';

const Loader = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-slate-50 select-none">
      <div className="flex flex-col items-center space-y-4">
        {/* Animated spinner ring */}
        <div className="w-12 h-12 border-4 border-slate-200 border-t-primary rounded-full animate-spin" />
        <p className="text-xs font-semibold text-muted tracking-wider uppercase">
          Loading Page Portal...
        </p>
      </div>
    </div>
  );
};

export default Loader;
