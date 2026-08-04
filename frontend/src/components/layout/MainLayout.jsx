import React from 'react';
import { Outlet } from 'react-router-dom';
import UtilityBar from './UtilityBar';
import Navbar from './Navbar';
import Footer from './Footer';
import Breadcrumb from '../common/Breadcrumb';
import ScrollToTop from '../common/ScrollToTop';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Scroll manager */}
      <ScrollToTop />

      {/* Header sections */}
      <UtilityBar />
      <Navbar />

      {/* Main body area spacing for fixed header */}
      <main className="flex-1 pt-16 lg:pt-20">
        <Breadcrumb />
        <Outlet />
      </main>

      {/* Footer section */}
      <Footer />
    </div>
  );
};

export default MainLayout;
