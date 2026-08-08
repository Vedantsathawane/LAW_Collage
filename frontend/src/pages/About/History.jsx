import React from 'react';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Timeline from '../../components/ui/Timeline';

const History = () => {
  const milestones = [
    { year: "2007", title: "Sanstha Establishment", description: "Late Malatai Yerne Smruti Bahuddeshiya Sanstha (LMYSBS) was established with the vision of 'Education for All'." },
    { year: "2008", title: "College Inception at Pauni", description: "Dr. Milind Yerne College of Law was founded in Pauni (Dist. Bhandara) to bring professional legal education to rural Vidarbha." },
    { year: "2010", title: "BCI & State Govt Approval", description: "Obtained official Bar Council of India (BCI) & Maharashtra State Govt. approvals for LL.B. degree courses." },
    { year: "2014", title: "RTMNU Affiliation & Course Expansion", description: "Affiliated with Rashtrasant Tukadoji Maharaj Nagpur University (RTMNU) offering both LL.B. 3-Year and 5-Year Semester Courses." },
    { year: "2018", title: "Legal Aid Camp & Human Rights Cell", description: "Launched annual pro-bono Legal Aid Camps and Human Rights Cell to serve underprivileged populations in rural talukas." },
    { year: "2023", title: "Moot Court & Debate Association", description: "Established compulsory Moot Court training for 3-Year & 5-Year LL.B. students to develop practical court advocacy skills." }
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
