import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Helmet>
          <title>Dr. Milind Yerne College of Law | LL.B. 3 & 5 Years Semester Course | Pauni, Bhandara</title>
          <meta name="description" content="Official website of Dr. Milind Yerne College of Law, Pauni, Dist. Bhandara, Maharashtra. Approved by Bar Council of India / State Govt. Affiliated with Rashtrasant Tukadoji Maharaj Nagpur University. Offering LL.B. 3 and 5 Years Semester Courses." />
          <meta name="keywords" content="Dr Milind Yerne College of Law, DMYCL, law college Pauni, LL.B. Bhandara, BCI approved law college, RTMNU law, legal education Maharashtra" />
          <link rel="canonical" href="https://dmycl.edu.in/" />
        </Helmet>
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
