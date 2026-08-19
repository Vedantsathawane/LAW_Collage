import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import AppRoutes from './routes/AppRoutes';

function App() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Dr. Milind Yerne College of Law",
    "alternateName": ["DMYCL", "Dr. Milind Yerne Law College Pauni"],
    "url": "https://drmycollegeoflaw.org/",
    "logo": "https://drmycollegeoflaw.org/logo.png",
    "telephone": "+91-9284974125",
    "email": "info@dmycl.edu.in",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pauni",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN",
      "postalCode": "441910"
    },
    "sameAs": [],
    "description": "Official website of Dr. Milind Yerne College of Law, Pauni, Bhandara. BCI Approved & RTMNU Affiliated Law College offering LL.B 3 Years & 5 Years courses."
  };

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Helmet>
          <title>Dr. Milind Yerne College of Law | LL.B. 3 & 5 Years Course | Pauni, Bhandara</title>
          <meta name="description" content="Official website of Dr. Milind Yerne College of Law, Pauni, Dist. Bhandara, Maharashtra. Approved by Bar Council of India / State Govt. Affiliated with Rashtrasant Tukadoji Maharaj Nagpur University. Offering LL.B. 3 and 5 Years Semester Courses." />
          <meta name="keywords" content="Dr Milind Yerne College of Law, DMYCL, law college Pauni, LL.B. Bhandara, BCI approved law college, RTMNU law, legal education Maharashtra, MH CET law" />
          <link rel="canonical" href="https://drmycollegeoflaw.org/" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://drmycollegeoflaw.org/" />
          <meta property="og:title" content="Dr. Milind Yerne College of Law | Pauni, Dist. Bhandara" />
          <meta property="og:description" content="BCI Approved & RTMNU Affiliated Law College offering LL.B. 3 Years & 5 Years Degree Courses." />
          <meta property="og:image" content="https://drmycollegeoflaw.org/logo.png" />
          <meta property="og:site_name" content="Dr. Milind Yerne College of Law" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Dr. Milind Yerne College of Law, Pauni" />
          <meta name="twitter:description" content="Approved by Bar Council of India & Affiliated with RTMNU Nagpur." />
          <meta name="twitter:image" content="https://drmycollegeoflaw.org/logo.png" />

          {/* Geo & Location Tags */}
          <meta name="geo.region" content="IN-MH" />
          <meta name="geo.placename" content="Pauni, Bhandara" />

          {/* Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </Helmet>
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

