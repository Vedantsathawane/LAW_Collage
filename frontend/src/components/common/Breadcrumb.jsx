import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaChevronRight } from 'react-icons/fa';
import Container from './Container';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (location.pathname === '/' || pathnames.length === 0) return null;

  // Map path chunks to clean user-facing titles
  const formatName = (name) => {
    if (name.toLowerCase() === 'cap-admission') return 'CAP Admission';
    const uppercaseAcronyms = ['cet', 'nss', 'ncc', 'iqac', 'naac', 'nirf', 'rti', 'cap'];
    if (uppercaseAcronyms.includes(name.toLowerCase())) {
      return name.toUpperCase();
    }
    return name
      .replace(/-/g, ' ')
      .replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
  };

  return (
    <div className="bg-slate-100/80 border-y border-slate-200 py-3.5 backdrop-blur-xs">
      <Container>
        <nav className="flex items-center space-x-2 text-xs md:text-sm text-muted" aria-label="Breadcrumb">
          <Link
            to="/"
            className="flex items-center gap-1.5 hover:text-primary transition-colors focus:outline-none focus:text-primary font-medium"
          >
            <FaHome className="w-3.5 h-3.5 mb-0.5" />
            <span>Home</span>
          </Link>
          
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join('/')}`;

            return (
              <div key={to} className="flex items-center space-x-2">
                <FaChevronRight className="w-2.5 h-2.5 text-slate-400" />
                {last ? (
                  <span className="text-primary font-semibold" aria-current="page">
                    {formatName(value)}
                  </span>
                ) : (
                  <Link
                    to={to}
                    className="hover:text-primary transition-colors focus:outline-none focus:text-primary font-medium"
                  >
                    {formatName(value)}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </Container>
    </div>
  );
};

export default Breadcrumb;
