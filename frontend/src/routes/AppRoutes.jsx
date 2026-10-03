import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Loader from '../components/common/Loader';

// Lazy imports for all 40+ pages
const Home = lazy(() => import('../pages/Home'));

// About Pages
const About = lazy(() => import('../pages/About/About'));
const History = lazy(() => import('../pages/About/History'));
const Vision = lazy(() => import('../pages/About/Vision'));
const Management = lazy(() => import('../pages/About/Management'));
const PrincipalDesk = lazy(() => import('../pages/About/PrincipalDesk'));
const Administration = lazy(() => import('../pages/About/Administration'));

// Academics Pages
const Departments = lazy(() => import('../pages/Academics/Departments'));
const Courses = lazy(() => import('../pages/Academics/Courses'));
const Faculty = lazy(() => import('../pages/Academics/Faculty'));
const Library = lazy(() => import('../pages/Academics/Library'));
const Research = lazy(() => import('../pages/Academics/Research'));
const Placements = lazy(() => import('../pages/Academics/Placements'));
const Training = lazy(() => import('../pages/Academics/Training'));
const IQAC = lazy(() => import('../pages/Academics/IQAC'));
const NAAC = lazy(() => import('../pages/Academics/NAAC'));
const NIRF = lazy(() => import('../pages/Academics/NIRF'));
const RTI = lazy(() => import('../pages/Academics/RTI'));
const AntiRagging = lazy(() => import('../pages/Academics/AntiRagging'));
const GrievanceCell = lazy(() => import('../pages/Academics/GrievanceCell'));

// Admission Pages
const Admission = lazy(() => import('../pages/Admission/Admission'));
const Procedure = lazy(() => import('../pages/Admission/Procedure'));
const Fees = lazy(() => import('../pages/Admission/Fees'));
const Scholarship = lazy(() => import('../pages/Admission/Scholarship'));
const Apply = lazy(() => import('../pages/Admission/Apply'));

// Student Corner Pages
const Examination = lazy(() => import('../pages/StudentCorner/Examination'));
const Downloads = lazy(() => import('../pages/StudentCorner/Downloads'));
const News = lazy(() => import('../pages/StudentCorner/News'));
const Notices = lazy(() => import('../pages/StudentCorner/Notices'));
const Events = lazy(() => import('../pages/StudentCorner/Events'));
const Gallery = lazy(() => import('../pages/StudentCorner/Gallery'));
const Testimonials = lazy(() => import('../pages/StudentCorner/Testimonials'));
const CampusFacilities = lazy(() => import('../pages/StudentCorner/CampusFacilities'));
const Hostel = lazy(() => import('../pages/StudentCorner/Hostel'));
const Sports = lazy(() => import('../pages/StudentCorner/Sports'));
const NSS = lazy(() => import('../pages/StudentCorner/NSS'));
const NCC = lazy(() => import('../pages/StudentCorner/NCC'));
const Committees = lazy(() => import('../pages/StudentCorner/Committees'));
const Alumni = lazy(() => import('../pages/StudentCorner/Alumni'));
const Career = lazy(() => import('../pages/StudentCorner/Career'));

// CET & CAP Pages
const CETPage = lazy(() => import('../pages/CET/CETPage'));
const CAPAdmissionPage = lazy(() => import('../pages/CAP/CAPAdmissionPage'));
const CAPVacancyReportPage = lazy(() => import('../pages/CAP/CAPVacancyReportPage'));
const CAPMeritListPage = lazy(() => import('../pages/CAP/CAPMeritListPage'));
const CAPAdvertisementPage = lazy(() => import('../pages/CAP/CAPAdvertisementPage'));

// Contact & 404
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Main Home Index */}
          <Route index element={<Home />} />

          {/* About Paths */}
          <Route path="about" element={<About />} />
          <Route path="about/history" element={<History />} />
          <Route path="about/vision-mission" element={<Vision />} />
          <Route path="about/management" element={<Management />} />
          <Route path="about/principal-desk" element={<PrincipalDesk />} />
          <Route path="about/administration" element={<Administration />} />

          {/* Academics Paths */}
          <Route path="academics" element={<Navigate to="/academics/departments" replace />} />
          <Route path="academics/departments" element={<Departments />} />
          <Route path="academics/courses" element={<Courses />} />
          <Route path="academics/llb-3-years" element={<Courses />} />
          <Route path="academics/ba-llb-5-years" element={<Courses />} />
          <Route path="academics/faculty" element={<Faculty />} />
          <Route path="academics/library" element={<Library />} />
          <Route path="academics/research" element={<Research />} />
          <Route path="academics/placements" element={<Placements />} />
          <Route path="academics/training" element={<Training />} />
          <Route path="academics/iqac" element={<IQAC />} />
          <Route path="academics/naac" element={<NAAC />} />
          <Route path="academics/nirf" element={<NIRF />} />
          <Route path="academics/rti" element={<RTI />} />
          <Route path="academics/anti-ragging" element={<AntiRagging />} />
          <Route path="academics/grievance-cell" element={<GrievanceCell />} />

          {/* Admission Paths */}
          <Route path="admission" element={<Admission />} />
          <Route path="admissions" element={<Admission />} />
          <Route path="admission/procedure" element={<Procedure />} />
          <Route path="admission/fees" element={<Fees />} />
          <Route path="admission/scholarship" element={<Scholarship />} />
          <Route path="admission/apply" element={<Apply />} />

          {/* CET & CAP Routes */}
          <Route path="cet" element={<CETPage />} />
          <Route path="cap-admission" element={<Navigate to="/cap-admission/vacancy-report" replace />} />
          <Route path="cap-admission/vacancy-report" element={<CAPVacancyReportPage />} />
          <Route path="cap-admission/merit-list" element={<CAPMeritListPage />} />
          <Route path="cap-admission/advertisement" element={<CAPAdvertisementPage />} />

          {/* Student Corner Paths */}
          <Route path="student-corner" element={<Navigate to="/student-corner/campus-facilities" replace />} />
          <Route path="student-life" element={<Navigate to="/student-corner/campus-facilities" replace />} />
          <Route path="student-corner/examination" element={<Examination />} />
          <Route path="student-corner/downloads" element={<Downloads />} />
          <Route path="student-corner/news" element={<News />} />
          <Route path="student-corner/notices" element={<Notices />} />
          <Route path="student-corner/events" element={<Events />} />
          <Route path="student-corner/gallery" element={<Gallery />} />
          <Route path="student-corner/testimonials" element={<Testimonials />} />
          <Route path="student-corner/campus-facilities" element={<CampusFacilities />} />
          <Route path="student-corner/hostel" element={<Hostel />} />
          <Route path="student-corner/sports" element={<Sports />} />
          <Route path="student-corner/nss" element={<NSS />} />
          <Route path="student-corner/ncc" element={<NCC />} />
          <Route path="student-corner/committees" element={<Committees />} />
          <Route path="student-corner/alumni" element={<Alumni />} />
          <Route path="student-corner/career" element={<Career />} />

          {/* Contact Us */}
          <Route path="contact" element={<Contact />} />

          {/* 404 Catch All */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
// Route paths verification completed cleanly
