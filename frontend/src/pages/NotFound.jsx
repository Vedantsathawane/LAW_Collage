import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaExclamationCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Container from '../components/common/Container';
import Button from '../components/common/Button';

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#FAF8F3] font-body py-16">
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto space-y-6 flex flex-col items-center"
        >
          <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center shadow-lg mb-4 select-none">
            <FaExclamationCircle className="w-10 h-10 animate-bounce" />
          </div>
          
          <h1 className="text-7xl font-extrabold text-primary font-mono leading-none tracking-tight">404</h1>
          <h2 className="text-2xl font-bold font-heading text-primary-dark mt-2">
            Page Not Found
          </h2>
          <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
            The academic path or folder disclosure you are looking for has been moved, renamed, or is temporarily offline.
          </p>

          <Link to="/" className="pt-4 select-none">
            <Button variant="primary" icon={<FaHome className="mb-0.5" />} iconPosition="left">
              Return to Homepage
            </Button>
          </Link>
        </motion.div>
      </Container>
    </div>
  );
};

export default NotFound;
