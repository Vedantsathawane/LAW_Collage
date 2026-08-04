import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Helmet>
          <title>GWLC | Government West Law College</title>
          <meta name="description" content="Official Portal of Government West Law College (GWLC). NAAC A++ Grade accredited state university law college delivering LL.B, B.A. LL.B (Hons.), B.B.A. LL.B (Hons.), and LL.M programs." />
          <meta name="keywords" content="GWLC, law college, admissions 2026, CLAT cut-offs, LL.B, NLU alternative, BCI approved" />
          <link rel="canonical" href="https://gwlc.edu.in/" />
        </Helmet>
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
