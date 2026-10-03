import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import AppRoutes from './routes/AppRoutes';

function App() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    "name": "Dr. Milind Yerne College of Law",
    "alternateName": ["DMYCL", "Dr. Milind Yerne Law College Bhandara"],
    "url": "https://drmycollegeoflaw.org/",
    "logo": "https://drmycollegeoflaw.org/logo.png",
    "telephone": "+91-9284974125",
    "email": "info@dmycl.edu.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kosra, Kondha, Pauni Tehsil",
      "addressLocality": "Bhandara District",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN",
      "postalCode": "441908"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "20.7850",
      "longitude": "79.6350"
    },
    "parentOrganization": {
      "@type": "CollegeOrUniversity",
      "name": "Rashtrasant Tukadoji Maharaj Nagpur University",
      "url": "https://nagpuruniversity.ac.in/"
    },
    "hasCredential": "Bar Council of India (BCI) Recognized",
    "sameAs": [],
    "description": "Dr. Milind Yerne College of Law, Kosra (Pauni, Bhandara) is a top BCI approved & RTMNU affiliated law college offering 3-Year LL.B & 5-Year B.A. LL.B courses."
  };

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Helmet>
          <title>Dr. Milind Yerne College of Law Bhandara | BCI Approved LL.B. College</title>
          <meta name="description" content="Dr. Milind Yerne College of Law, Kosra (Pauni, Bhandara) is a top BCI approved & RTMNU affiliated law college offering 3-Year LL.B & 5-Year B.A. LL.B courses. Admissions Open 2026-27." />
          <meta name="keywords" content="law college in Bhandara, LLB college Bhandara, BA LLB admission Maharashtra, best law college near Nagpur, Dr Milind Yerne College of Law admission 2026, BCI approved law college" />
          <link rel="canonical" href="https://drmycollegeoflaw.org/" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://drmycollegeoflaw.org/" />
          <meta property="og:title" content="Dr. Milind Yerne College of Law Bhandara | BCI Approved LL.B. College" />
          <meta property="og:description" content="BCI Approved & RTMNU Affiliated Law College offering 3-Year LL.B & 5-Year B.A. LL.B Degree Courses in Pauni Tehsil, Bhandara District." />
          <meta property="og:image" content="https://drmycollegeoflaw.org/logo.png" />
          <meta property="og:site_name" content="Dr. Milind Yerne College of Law" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Dr. Milind Yerne College of Law Bhandara" />
          <meta name="twitter:description" content="Approved by Bar Council of India & Affiliated with RTMNU Nagpur." />
          <meta name="twitter:image" content="https://drmycollegeoflaw.org/logo.png" />

          {/* Geo & Location Tags */}
          <meta name="geo.region" content="IN-MH" />
          <meta name="geo.placename" content="Kosra, Pauni, Bhandara" />

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

