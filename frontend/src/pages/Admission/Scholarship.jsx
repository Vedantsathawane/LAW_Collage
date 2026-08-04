import React from 'react';
import { FaGraduationCap, FaHandsHelping, FaFileSignature } from 'react-icons/fa';
import Container from '../../components/common/Container';
import SectionTitle from '../../components/common/SectionTitle';
import Card from '../../components/ui/Card';

const Scholarship = () => {
  const scholarshipTiers = [
    {
      title: "State Merit Scholarship Scheme",
      eligibility: "Top 5% scorers in the qualifying boards/university examination with regular attendance above 85%.",
      coverage: "100% Tuition Fee waiver plus a monthly book allowance stipend of ₹1,200 for 10 academic months."
    },
    {
      title: "Post-Matric SC/ST/OBC Scholarship",
      eligibility: "Candidates belonging to reserved categories with annual family income below ₹2.5 Lakhs.",
      coverage: "Full reimbursement of tuition fees and mandatory charges as direct benefit transfer (DBT) from the Welfare Department."
    },
    {
      title: "Merit-cum-Means Financial Support",
      eligibility: "General and EWS category candidates with annual family income below ₹2.0 Lakhs, subject to clean academic conduct.",
      coverage: "50% to 75% Tuition Fee concessions based on academic screening scores and verification checks."
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-slate-50 font-body">
      <Container>
        <SectionTitle title="Scholarships & Financial Aid" subtitle="Financial Support" centered={true} />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Tiers List */}
          <div className="space-y-6">
            {scholarshipTiers.map((tier, idx) => (
              <Card key={idx} className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium group" hoverEffect={true}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/5 group-hover:bg-primary group-hover:text-white text-primary flex items-center justify-center shrink-0 transition-colors">
                    <FaGraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-heading text-primary-dark group-hover:text-accent transition-colors mb-2.5">
                      {tier.title}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-4">
                      <b>Eligibility:</b> {tier.eligibility}
                    </p>
                    <div className="p-3.5 bg-slate-50 border border-slate-100 rounded-xl flex items-center gap-2.5">
                      <FaHandsHelping className="text-secondary shrink-0" />
                      <p className="text-xs text-slate-600 font-semibold">{tier.coverage}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Submission Guidelines */}
          <Card className="p-6 md:p-8 bg-white border border-slate-100 shadow-premium" hoverEffect={false}>
            <div className="flex items-center gap-3 mb-4">
              <FaFileSignature className="text-secondary w-6 h-6 shrink-0" />
              <h3 className="text-lg font-bold font-heading text-primary-dark">
                How to Apply for Scholarships
              </h3>
            </div>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed mb-4">
              Applications open in September each year. Fresh and renewal candidates must follow these steps:
            </p>
            <ol className="list-decimal pl-5 text-xs text-slate-500 space-y-2.5 font-semibold">
              <li>Download the specific application form from our Student Corner &rarr; Downloads block.</li>
              <li>Attach income certificates, cast credentials, and marksheets certified by your respective HOD.</li>
              <li>Submit the physical binder to the Admin block counter #3. Keep a scanned duplicate copy for your records.</li>
            </ol>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Scholarship;
