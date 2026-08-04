import React from 'react';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Timeline from '../../components/ui/Timeline';

const History = () => {
  const milestones = [
    { year: "1965", title: "Institutional Inception", description: "Established under the State Education Act, starting as a dedicated legal studies college with professional LL.B. classes." },
    { year: "1970", title: "Constitutional Chair Inauguration", description: "Inaugurated the Constitutional Law research chair and built a mini court hall area for mock trials." },
    { year: "1982", title: "Legal Aid Clinic Expansion", description: "Launched the Legal Aid Clinic to provide pro-bono advice to nearby residents, initiating active clinical legal training." },
    { year: "1995", title: "Integrated Hons. Launch", description: "Introduced the 5-Year Integrated B.A. LL.B. (Hons.) course, aligning with new Bar Council of India regulations." },
    { year: "2012", title: "Digital Law Library Grant", description: "DST and UGC grants received for upgrading advanced digital search databases (SCC Online, Manupatra) and computerized moot chambers." },
    { year: "2020", title: "Corporate Arbitration Cells", description: "Set up the Corporate Law & Arbitration board simulations to align with corporate litigation growth." },
    { year: "2026", title: "Peak BCI & NAAC Ranks", description: "Awarded NAAC Grade A++ with 3.78 CGPA, marking the college as a premier legal center." }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50">
      <Container>
        <SectionTitle
          title="Milestones of Academic Advancement"
          subtitle="Our History"
          centered={true}
        />
        <Timeline items={milestones} />
      </Container>
    </div>
  );
};

export default History;
