// Premium mock data for Government West Law College (GWLC) / Government Elite Law College (GELC)

export const DEPARTMENTS = [
  {
    id: "const-law",
    name: "Division of Constitutional & Administrative Law",
    shortName: "Constitutional Law",
    code: "CAL",
    established: 1965,
    hod: "Dr. Rajesh K. Sharma",
    email: "constitutional.dept@gwlc.edu.in",
    phone: "+91-11-27667725 Ext: 201",
    description: "The Division of Constitutional & Administrative Law is the core academic branch of the college, focusing on structural governance, constitutional interpretations, administrative tribunals, and fundamental human rights litigation.",
    vision: "To cultivate jurisprudential thinkers who uphold the rule of law, constitutional values, and democratic governance structures.",
    mission: "Promote rigorous debate on civil liberties, constitutional amendments, and administrative transparency through academic publications and seminars.",
    stats: { students: 380, researchProjects: 14, labs: 1 }, // Moot Court counts as lab here
    labs: [
      { name: "Constitutional Law Moot Chamber", capacity: 40, equipment: "Matriculate bench setups, Digital recording system, Law reporters archives" }
    ],
    highlights: [
      "Over 15 alumni currently serving as Judicial Officers in State High Courts",
      "Regular guest lectures by sitting High Court Judges and Senior Advocates",
      "Annual National Constitutional Moot Court Competition 'Dharma' host",
      "Active collaboration with the Center for Civil Liberties and Policy Research"
    ]
  },
  {
    id: "criminal-law",
    name: "Division of Criminal Law & Criminology",
    shortName: "Criminal Law",
    code: "CLC",
    established: 1968,
    hod: "Dr. Ananya Mukherji",
    email: "criminal.dept@gwlc.edu.in",
    phone: "+91-11-27667725 Ext: 202",
    description: "Specializing in the Indian Penal Code, Criminal Procedure, Evidence law, forensic sciences, cyber crimes, and restorative criminological theories.",
    vision: "To nurture criminal law practitioners with high ethical standards, committed to fair trial systems and restorative justice.",
    mission: "Deliver conceptual clarity in criminal jurisprudence, forensic investigation methods, and penal reform litigation standards.",
    stats: { students: 310, researchProjects: 10, labs: 1 },
    labs: [
      { name: "Forensic Science & Trial Chamber", capacity: 30, equipment: "Fingerprint kits, Mock evidence files, Audio-visual trial projection systems" }
    ],
    highlights: [
      "DST funded active research cell studying cybersecurity legislation & digital forensics",
      "Mandatory jail visits and forensic lab inspections for final year students",
      "Mock Trial competitions organized in collaboration with Bar Council panels",
      "Strong litigation track record in district and high courts"
    ]
  },
  {
    id: "corporate-law",
    name: "Division of Corporate, Tax & Business Law",
    shortName: "Corporate Law",
    code: "CTBL",
    established: 1985,
    hod: "Dr. Arvind R. Singhal",
    email: "corporate.dept@gwlc.edu.in",
    phone: "+91-11-27667725 Ext: 204",
    description: "Covering Company Law, Mergers & Acquisitions, Banking laws, Insolvency codes, Direct/Indirect Taxation, and International Trade Regulations.",
    vision: "To build elite corporate lawyers and legal counselors steering global commercial transactions.",
    mission: "Deliver top-tier coaching in financial laws, contract drafts, arbitration practices, and compliance procedures.",
    stats: { students: 480, researchProjects: 12, labs: 1 },
    labs: [
      { name: "Corporate Arbitration & Mediation Board", capacity: 35, equipment: "Round-table discussion setups, ADR simulation kits, Online arbitration database access" }
    ],
    highlights: [
      "100% placement records in Tier-1 national law firms for LL.M. Corporate batch",
      "MOU with leading corporate firms for winter and summer internship cycles",
      "Annual Business Law conclave attracting corporate legal heads across India",
      "Dedicated Securities & M&A clinics running for mock drafting exercises"
    ]
  },
  {
    id: "ip-law",
    name: "Division of Intellectual Property & Technology Law",
    shortName: "IP & Tech Law",
    code: "IPTL",
    established: 1998,
    hod: "Dr. Preeti Singh",
    email: "ip.dept@gwlc.edu.in",
    phone: "+91-11-27667725 Ext: 206",
    description: "Focusing on Patent systems, Trademark litigation, Copyright rules in digital media, Cyber security compliance, and AI governance legislations.",
    vision: "To lead scientific legal interface research and prepare IP experts for tech innovations.",
    mission: "Promote tech-based legal research, IP drafting, and trademark register procedures awareness.",
    stats: { students: 250, researchProjects: 8, labs: 1 },
    labs: [
      { name: "IP & Patent Drafting Cell", capacity: 30, equipment: "Patent searching software databases (WIPO, USPTO), High-speed workstations" }
    ],
    highlights: [
      "Regular consultancy work for state innovations hubs and technology parks",
      "Specialized seminars in copyright laws and digital licensing",
      "Active research projects studying patent laws for biotechnology innovations",
      "Students actively placing as Trademark Attorneys and Patent Examiners"
    ]
  }
];

export const COURSES = [
  {
    id: "ba-llb",
    deptId: "const-law",
    name: "Integrated B.A. LL.B. (Hons.)",
    level: "Undergraduate",
    duration: "5 Years (10 Semesters)",
    intake: 120,
    fees: "₹45,500 per year",
    eligibility: "10+2 pass in any stream with minimum 50% aggregate (45% for SC/ST). CLAT/LSAT scores preferred but not mandatory.",
    description: "A premier 5-year integrated double-degree program combining liberal arts subjects (Political Science, Sociology, History) with core professional law subjects approved by the Bar Council of India (BCI).",
    syllabus: [
      "Semester 1: English Literature, Political Science-I, Sociology-I, Law of Torts",
      "Semester 2: Legal Method, Political Science-II, Economics-I, Law of Contracts-I",
      "Semester 3: Constitutional Law-I, Family Law-I, Political Science-III, Jurisprudence",
      "Semester 4: Constitutional Law-II, Family Law-II, Administrative Law, Law of Crimes-I (IPC)",
      "Semester 5: Property Law, Criminal Procedure Code (CrPC), Environmental Law, Corporate Law-I",
      "Semester 6: Civil Procedure Code (CPC), Indian Evidence Code, Public International Law, Corporate Law-II",
      "Semester 7: Intellectual Property Law, Taxation Law, Alternative Dispute Resolution (ADR)",
      "Semester 8: Labour & Industrial Law, Cyber Law, Legal Writing & Research Methods",
      "Semester 9: Moot Court Exercises, Internship Logs, Professional Ethics",
      "Semester 10: Drafting, Pleading & Conveyancing, Drafting of Contracts, Final Defense Viva"
    ]
  },
  {
    id: "bba-llb",
    deptId: "corporate-law",
    name: "Integrated B.B.A. LL.B. (Hons.)",
    level: "Undergraduate",
    duration: "5 Years (10 Semesters)",
    intake: 60,
    fees: "₹55,000 per year",
    eligibility: "10+2 pass with Commerce / Mathematics, minimum 55% marks. Selection based on merit.",
    description: "Combines business administration models (Accounting, Management principles, Organizational behavior) with professional legal training, preparing candidates for corporate law practices.",
    syllabus: [
      "Semester 1: Principles of Management, Financial Accounting, Law of Torts, English",
      "Semester 2: Organizational Behavior, Business Economics, Law of Contracts-I, Legal Method",
      "Semester 3: Corporate Accounting, Business Statistics, Constitutional Law-I, Contracts-II",
      "Semester 4: Human Resource Management, Corporate Law-I, Constitutional Law-II, Crimes-I",
      "Semester 5: Financial Management, Corporate Law-II, Property Law, CrPC",
      "Semester 6: Mergers & Acquisitions, Investment Laws, CPC, Evidence Act",
      "Semester 7: Direct & Indirect Tax, International Trade Law, ADR Systems",
      "Semester 8: Insolvency & Bankruptcy Code, Competition Law, Drafting & Pleading",
      "Semester 9: Corporate Moot Simulation, Internship Review, Legal Ethics",
      "Semester 10: Seminar Paper Defense, Corporate Compliance Viva, Internship Projects"
    ]
  },
  {
    id: "llb-3yr",
    deptId: "criminal-law",
    name: "Bachelor of Laws (LL.B.)",
    level: "Undergraduate",
    duration: "3 Years (6 Semesters)",
    intake: 120,
    fees: "₹18,500 per year",
    eligibility: "Graduation in any discipline from a recognized university with minimum 45% aggregate.",
    description: "A three-year professional law pathway for graduates wishing to switch into advocacy, judicial services, or corporate advisory roles.",
    syllabus: [
      "Semester 1: Law of Contracts, Law of Torts, Crimes-I (IPC), Constitutional Law-I",
      "Semester 2: Jurisprudence, Constitutional Law-II, Family Law, Public International Law",
      "Semester 3: Law of Crimes-II (CrPC), Property Law, Environmental Law, Professional Ethics",
      "Semester 4: CPC & Limitation Act, Administrative Law, Labour Law, Land Laws",
      "Semester 5: Law of Evidence, Intellectual Property, ADR Clinic, Taxation",
      "Semester 6: Moot Court Exercises, Drafting & Pleading, Practical Training & Internship Review"
    ]
  },
  {
    id: "llm",
    deptId: "const-law",
    name: "Master of Laws (LL.M.)",
    level: "Postgraduate",
    duration: "2 Years (4 Semesters)",
    intake: 30,
    fees: "₹35,000 per year",
    eligibility: "LL.B. or Integrated LL.B. degree from a BCI-recognized college, minimum 55% marks.",
    description: "A postgraduate specialization degree with specialization options in Corporate Law, Constitutional Jurisprudence, or Criminal Law.",
    syllabus: [
      "Semester 1: Research Methodology, Comparative Public Law, Law & Justice in Globalizing World",
      "Semester 2: Advanced Specialization Paper-I, Seminar Paper Defense, Legal Pedagogy",
      "Semester 3: Advanced Specialization Paper-II, Dissertation Phase-I, Elective Paper",
      "Semester 4: Final Thesis Submission, Dissertation Defense & Pedagogy Viva"
    ]
  }
];

export const FACULTY = [
  {
    id: "f-rajesh-sharma",
    name: "Dr. Rajesh K. Sharma",
    designation: "Professor & HOD",
    deptId: "const-law",
    qualification: "LL.D. (NLSIU Bangalore), Ph.D. in Constitutional Jurisprudence (Delhi University)",
    experience: "24 Years",
    specialization: "Constitutional Interpretations, Human Rights Legislation, Comparative Public Law",
    publications: 58,
    email: "rksharma@gwlc.edu.in",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=350",
    bio: "Dr. Rajesh Sharma has advised national committees on administrative reforms and guided 12 PhD scholars. He chairs the Constitutional Law Society."
  },
  {
    id: "f-preeti-singh",
    name: "Dr. Preeti Singh",
    designation: "Associate Professor",
    deptId: "ip-law",
    qualification: "Ph.D. in IP & Patent Systems (NALSAR Hyderabad), LL.M. (WIPO Academy, Geneva)",
    experience: "16 Years",
    specialization: "Patent Regimes, Copyright in Digital Era, AI Legislation & Ethics",
    publications: 36,
    email: "preeti.singh@gwlc.edu.in",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=350",
    bio: "Active researcher in digital licensing and international trademark filings, coordinating the College IP Drafting Cell."
  },
  {
    id: "f-amit-verma",
    name: "Mr. Amit Verma",
    designation: "Assistant Professor",
    deptId: "ip-law",
    qualification: "LL.M. in Cyber Law & Information Security (ILI Delhi)",
    experience: "9 Years",
    specialization: "Cyber Crimes Legislation, Digital Evidence, Corporate Compliance",
    publications: 10,
    email: "amit.verma@gwlc.edu.in",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=350",
    bio: "Coordinating the college Moot Court Society, Mr. Verma conducts workshops on cyber crime forensics and digital litigation formats."
  },
  {
    id: "f-ananya-mukherji",
    name: "Dr. Ananya Mukherji",
    designation: "Professor & HOD",
    deptId: "criminal-law",
    qualification: "Ph.D. in Forensic Jurisprudence (IISc & DU), Postdoc (Criminology Cell, London School of Economics)",
    experience: "26 Years",
    specialization: "Criminology, Restorative Criminal Systems, Forensic Ballistics",
    publications: 72,
    email: "ananya.m@gwlc.edu.in",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300&h=350",
    bio: "Dr. Mukherji acts as a forensic law advisor to state agencies. She chairs the College Legal Aid & Literacy Committee."
  },
  {
    id: "f-arvind-singhal",
    name: "Dr. Arvind R. Singhal",
    designation: "Professor & HOD",
    deptId: "corporate-law",
    qualification: "Ph.D. in Corporate Laws (NLSIU Bangalore), LL.M. (Corporate Finance, NYU Law)",
    experience: "27 Years",
    specialization: "Mergers & Acquisitions, Corporate Insolvency, Direct Tax Regulations",
    publications: 64,
    email: "asinghal@gwlc.edu.in",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=300&h=350",
    bio: "Consultant for drafting company law clauses, Dr. Singhal acts as the director coordinator for Corporate Arbitration board simulations."
  }
];

export const PLACEMENTS = {
  summary: {
    year: "2025-26",
    placedPercentage: 91.8,
    offersMade: 184,
    highestPackage: "₹18.0 LPA",
    averagePackage: "₹7.5 LPA",
    recruitersCount: 38
  },
  yearlyStats: [
    { year: "2021-22", placed: 82, average: 5.6, highest: 12.0 },
    { year: "2022-23", placed: 86, average: 6.2, highest: 14.5 },
    { year: "2023-24", placed: 89, average: 6.8, highest: 15.0 },
    { year: "2024-25", placed: 92, average: 7.2, highest: 16.5 },
    { year: "2025-26", placed: 91.8, average: 7.5, highest: 18.0 }
  ],
  recruiters: [
    { name: "Cyril Amarchand Mangaldas", logo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=120&h=50" },
    { name: "Khaitan & Co", logo: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80&w=120&h=50" },
    { name: "Shardul Amarchand Mangaldas", logo: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&q=80&w=120&h=50" },
    { name: "Trilegal", logo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=120&h=50" },
    { name: "AZB & Partners", logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=120&h=50" },
    { name: "Luthra and Luthra", logo: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=120&h=50" }
  ],
  studentSuccess: [
    {
      name: "Rohini Sen",
      course: "Integrated B.A. LL.B. (Batch 2025)",
      company: "Cyril Amarchand Mangaldas",
      package: "₹18.0 LPA",
      testimonial: "The Moot Court Society simulations and the guidance from our HODs prepared me for the grilling corporate interview rounds. GWLC provided the ideal launching pad.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Abhishek Bannerji",
      course: "LL.B. (Batch 2025)",
      company: "Khaitan & Co",
      package: "₹15.5 LPA",
      testimonial: "In-depth drafting classes and corporate arbitration practice mockups enabled me to display practical competence directly in front of the Khaitan panel.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150"
    },
    {
      name: "Priyanka Deshmukh",
      course: "LL.M. Corporate (Batch 2025)",
      company: "AZB & Partners",
      package: "₹14.0 LPA",
      testimonial: "The rigorous library research resources (like Manupatra & SCC Online access) helped me write detailed dissertation analyses which stood out in my recruitment evaluation.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150"
    }
  ]
};

export const NOTICES = [
  { id: 1, title: "Notification: Bar Council of India (BCI) inspections schedules and orientations", date: "Aug 03, 2026", category: "Regulatory", priority: "high", link: "/student-corner/notices" },
  { id: 2, title: "Admissions Form: B.A. LL.B. Hons. open seat vacancy registration guidelines", date: "Aug 02, 2026", category: "Admissions", priority: "high", link: "/admission/apply" },
  { id: 3, title: "Moot Court Problem Statement released for the 15th National Trial Advocacy competition", date: "Jul 31, 2026", category: "Moot Court", priority: "medium", link: "/student-corner/downloads" },
  { id: 4, title: "Pro-bono Legal Aid Clinic roster schedule for rural legal literacy camps", date: "Jul 28, 2026", category: "Events", priority: "high", link: "/student-corner/events" },
  { id: 5, title: "Submission dates announced for LL.M. Dissertation drafts and Pedagogy viva", date: "Jul 22, 2026", category: "Exams", priority: "medium", link: "/student-corner/examination" }
];

export const NEWS = [
  {
    id: 1,
    title: "GWLC secures BCI confirmation and NAAC Grade A++ accreditation in evaluation cycle",
    date: "July 28, 2026",
    summary: "The National Assessment and Accreditation Council declared GWLC as one of the premier state law colleges, referencing digital moot court chambers and digital resources.",
    content: "During the final cycles of evaluation, the NAAC peer team evaluated GWLC across parameters including clinical legal setups, library databases (SCC Online, Manupatra), student mock advocacy contests, and legal aid outreach. The grade of A++ recognizes our efforts in delivering quality professional litigation training.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=600&h=400",
    tags: ["Accreditation", "BCI", "Success"]
  },
  {
    id: 2,
    title: "Moot Court Society team clinches National Championship Trophy at NLSIU Bangalore",
    date: "July 15, 2026",
    summary: "Our 3-member candidate team won the peak trophy, bagging Best Advocate and Best Memorial awards in the final rounds.",
    content: "Competing against 42 premier law universities nationwide, our team (Rohini Sen, Abhishek Bannerji, and Kabir Mehta) presented complex briefs in international arbitration. The benches praised their constitutional interpretations, awarding them the gold trophy along with a cash prize of ₹1 Lakh.",
    image: "https://images.unsplash.com/photo-1505664194779-8bebcb95c557?auto=format&fit=crop&q=80&w=600&h=400",
    tags: ["Moot Court", "Achievement", "Student Life"]
  },
  {
    id: 3,
    title: "Legal Aid Clinic expands Pro-bono legal help to 5 remote village sectors",
    date: "June 28, 2026",
    summary: "In partnership with the District Legal Services Authority (DLSA), our advocates and students set up legal help chambers.",
    content: "The initiatives are aimed at solving disputes in land registries, consumer claims, and labor disputes through counseling and mediation. 30 student paralegal volunteers coordinated the camps, providing free consulting under the guidance of resident advocates.",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=600&h=400",
    tags: ["Legal Aid", "Social Service", "DLSA"]
  }
];

export const EVENTS = [
  {
    id: 1,
    title: "15th National Trial Advocacy & Moot Court Competition 2026",
    date: "September 18-20, 2026",
    time: "09:00 AM - 06:00 PM",
    venue: "Main Moot Court Hall, GWLC",
    organizer: "GWLC Moot Court Society (MCS)",
    description: "Our signature national moot court competition challenging legal minds on criminal code interpretations and digital forensics evidence admissibility.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600&h=400"
  },
  {
    id: 2,
    title: "National Seminar on Artificial Intelligence Governance & Copyright Legislation",
    date: "October 08, 2026",
    time: "10:00 AM - 04:30 PM",
    venue: "Central Conference Auditorium, GWLC",
    organizer: "Division of IP & Technology Law",
    description: "Inviting legal scholars, trademark registrars, and tech experts to analyze copyright concerns in AI training databases and digital licensing frameworks.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=600&h=400"
  },
  {
    id: 3,
    title: "Legal Literacy and Welfare Awareness Camp",
    date: "October 22, 2026",
    time: "08:30 AM - 03:00 PM",
    venue: "Adopted Rural Blocks (Bawana Sector)",
    organizer: "GWLC Legal Aid Clinic",
    description: "Direct community counseling campaign explaining rights of workers, banking consumer rights, and direct helpline numbers.",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=600&h=400"
  }
];

export const GALLERY = [
  { id: 1, category: "Campus", title: "Main College Pillars & Entrance", url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800&h=600" },
  { id: 2, category: "Labs", title: "Main Moot Court Bench Setup", url: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800&h=600" },
  { id: 3, category: "Library", title: "Law Library Research Block", url: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=800&h=600" },
  { id: 4, category: "Sports", title: "Sports Complex Badminton Arena", url: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=800&h=600" }
];

export const DOWNLOADS = [
  { id: 1, title: "15th National Trial Advocacy Competition - Rules & Case Record", size: "3.2 MB", date: "July 31, 2026", type: "PDF" },
  { id: 2, title: "Integrated B.A. LL.B. (Hons.) 5-Year Curriculum CBCS Syllabus", size: "4.5 MB", date: "June 15, 2026", type: "PDF" },
  { id: 3, title: "BCI Statutory Affidavits & Enrollment Declaration Form", size: "850 KB", date: "July 20, 2026", type: "PDF" },
  { id: 4, title: "Legal Aid Clinic Paralegal Volunteer Application Sheet", size: "480 KB", date: "July 28, 2026", type: "PDF" }
];

export const COMMITTEE_MEMBERS = [
  { name: "Dr. Rajesh K. Sharma", role: "Chairperson", committee: "Anti-Ragging Committee", contact: "+91-9876543210" },
  { name: "Dr. Ananya Mukherji", role: "Director Coordinator", committee: "Legal Aid Clinic", contact: "+91-9876543211" },
  { name: "Dr. Arvind R. Singhal", role: "Presiding Nodal Officer", committee: "Grievance Cell", contact: "+91-9876543212" },
  { name: "Mr. Amit Verma", role: "Convener", committee: "Moot Court Society (MCS)", contact: "+91-9876543213" }
];

export const FAQS = [
  {
    q: "Is Government West Law College approved by the Bar Council of India (BCI)?",
    a: "Yes, all degree courses (Integrated B.A. LL.B. Hons, B.B.A. LL.B. Hons, and 3-Year LL.B.) at GWLC are approved and affiliated in compliance with the Bar Council of India standards."
  },
  {
    q: "How can I join the Moot Court Society (MCS) at GWLC?",
    a: "MCS selections are conducted in September. Fresh candidates submit registration briefs, participate in oral rankings, and are selected as researchers or advocates based on cumulative scores."
  },
  {
    q: "What digital research tools are available in the law library?",
    a: "Our digital library portal contains full access keys to SCC Online, Manupatra, LexisNexis, Westlaw, and HeinOnline databases accessible from campus Wi-Fi and library terminals."
  },
  {
    q: "How can I register as a student volunteer in the Legal Aid Clinic?",
    a: "Students can register on the portal as Paralegal Volunteers (PLVs) once they clear their fourth semester (or second semester for 3-Year LLB). Volunteers assist practicing advocates in active rural legal awareness clinics."
  }
];
