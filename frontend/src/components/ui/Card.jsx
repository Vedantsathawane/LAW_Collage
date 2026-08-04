import React from 'react';
import { motion } from 'framer-motion';

const Card = ({
  children,
  className = "",
  hoverEffect = true,
  glass = false,
  onClick
}) => {
  const CardComponent = onClick ? motion.div : 'div';
  
  const interactivityProps = onClick ? {
    whileHover: hoverEffect ? { y: -6 } : {},
    whileTap: { scale: 0.985 },
    onClick,
    style: { cursor: 'pointer' }
  } : {};

  const baseStyles = "rounded-2xl border transition-all duration-300 overflow-hidden relative";
  
  // Apply our custom classes defined in global.css
  const themeStyles = glass 
    ? "glass-panel shadow-premium border-white/30" 
    : "bg-white shadow-premium hover:shadow-premium-hover border-slate-100/80 gradient-border-box";

  return (
    <CardComponent
      className={`${baseStyles} ${themeStyles} ${className}`}
      {...interactivityProps}
    >
      {children}
    </CardComponent>
  );
};

export default Card;
