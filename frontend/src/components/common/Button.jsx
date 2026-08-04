import React from 'react';
import { motion } from 'framer-motion';

const Button = ({
  children,
  variant = 'primary', // primary | secondary | outline | text
  size = 'md', // sm | md | lg
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon,
  iconPosition = 'right'
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-xl tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer font-btn select-none";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-light hover:shadow-[0_8px_20px_-6px_rgba(11,60,145,0.4)] shadow-md border border-primary-light/20",
    secondary: "bg-secondary text-primary-dark hover:bg-secondary-dark hover:shadow-[0_8px_20px_-6px_rgba(230,179,37,0.4)] shadow-md border border-secondary/20",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:shadow-[0_8px_20px_-6px_rgba(11,60,145,0.2)]",
    text: "text-primary hover:text-primary-light hover:underline focus:ring-transparent p-0"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-xs md:text-sm",
    lg: "px-8 py-4 text-sm md:text-base"
  };

  const buttonContent = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2.5 text-base flex shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2.5 text-base flex shrink-0">{icon}</span>}
    </>
  );

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.025, y: -1 }}
      whileTap={disabled ? {} : { scale: 0.975 }}
      transition={{ type: 'spring', stiffness: 450, damping: 25 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;
