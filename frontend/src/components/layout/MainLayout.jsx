import React from 'react';
import { Outlet } from 'react-router-dom';
import UtilityBar from './UtilityBar';
import Navbar from './Navbar';
import Footer from './Footer';
import Breadcrumb from '../common/Breadcrumb';
import ScrollToTop from '../common/ScrollToTop';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Scroll manager */}
      <ScrollToTop />

      {/* Header section wrapper */}
      <header className="sticky top-0 z-40 shadow-sm">
        <UtilityBar />
        <Navbar />
      </header>

      {/* Main body area */}
      <main className="flex-1">
        <Breadcrumb />
        <Outlet />
      </main>

      {/* Footer section */}
      <Footer />
    </div>
  );
};

export default MainLayout;
