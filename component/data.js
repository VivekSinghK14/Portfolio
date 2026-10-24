// Single source of truth for portfolio content — keep in sync with the CV PDF.

export const profile = {
  name: "Vivek Kumar Singh",
  role: "Data, AI & Automation",
  tagline: "MSc Digital Engineering · Otto-von-Guericke University Magdeburg",
  location: "Magdeburg, Germany",
  email: "vivekkumarsingh1911@gmail.com",
  phone: "+49 155 65165463",
  phoneHref: "tel:+4915565165463",
  linkedin: "https://www.linkedin.com/in/vivek-singh-817a77195",
  github: "https://github.com/VivekSinghK14",
  cv: "/Vivek_Kumar_Singh_CV_ATS.pdf",
  availability: "Open to Werkstudent & internship roles",
  workAuth: "Student visa (Germany) — permitted to work part-time (Werkstudent, internship)",
  summary:
    "I build validated data pipelines, dashboards and applied machine-learning systems — from raw records to something a business can act on. Professional experience with Python, SQL, Pandas, PostgreSQL, Power BI, ETL workflows, REST APIs and workflow automation, across customer, supply-chain, mobility, clinical and computer-vision use cases.",
};

export const stats = [
  { value: "5+", label: "years of work experience" },
  { value: "2.5", label: "years as a Data Analyst" },
  { value: "1.7", label: "current MSc grade" },
  { value: "30+", label: "students taught in exercise classes" },
];

export const skills = [
  {
    group: "Programming & Data",
    items: ["Python", "SQL", "Pandas", "NumPy", "JavaScript (basic)"],
  },
  {
    group: "Data Engineering & Automation",
    items: ["ETL Pipelines", "Data Preparation", "Data Validation", "REST API Integration", "Workflow Automation"],
  },
  {
    group: "Machine Learning",
    items: ["Scikit-learn", "XGBoost", "TensorFlow", "PyTorch", "NLP", "Predictive Modelling", "YOLO11", "SAM 2", "MLflow"],
  },
  {
    group: "Databases & Reporting",
    items: ["PostgreSQL", "SQL Server", "SQLAlchemy", "Power BI", "Excel", "Matplotlib", "Seaborn"],
  },
  {
    group: "Platforms & Tools",
    items: ["Git", "Docker", "Streamlit", "SAP HANA", "SAP S/4HANA", "SAP Datasphere", "Salesforce", "LeadSquared"],
  },
];

export const experience = [
  {
    role: "Research Assistant",
    org: "Otto-von-Guericke University",
    location: "Magdeburg, Germany",
    period: "Oct 2025 – Feb 2026",
    points: [
      "Authored 10+ course modules covering data science, software development, API integration and automation.",
      "Designed practical use cases, UML and BPMN diagrams, and XML-based question sets for structured technical learning.",
      "Facilitated exercise classes for 30+ students and maintained 50+ learning assets on the university e-learning platform.",
    ],
    tags: ["Data Science", "APIs", "BPMN", "UML", "Teaching"],
  },
  {
    role: "Data Analyst",
    org: "Maxonic Inc.",
    location: "India",
    period: "Oct 2022 – Mar 2025",
    points: [
      "Cleaned and validated 3,900 customer-shopping records with Python and Pandas — standardised fields, removed duplicates.",
      "Engineered age-group and purchase-frequency features for customer segmentation and repeat-purchase analysis.",
      "Loaded the prepared data into PostgreSQL via SQLAlchemy and presented customer-behaviour findings in a Power BI dashboard.",
    ],
    tags: ["Python", "Pandas", "PostgreSQL", "SQLAlchemy", "Power BI"],
  },
  {
    role: "Business Development Manager",
    org: "BYJU'S",
    location: "India",
    period: "Jul 2020 – Sep 2022",
    points: [
      "Analysed conversion trends in Salesforce and LeadSquared CRM; built Excel and Salesforce dashboards tracking 200+ prospects.",
      "Led and grew a sales team from 12 to 17 members, reaching peak weekly revenue of INR 2.1 million through structured targeting and performance tracking.",
    ],
    tags: ["Salesforce", "LeadSquared", "Excel", "Team Leadership"],
  },
];

export const projects = [
  {
    title: "E-Commerce Shipping Prediction — MLOps Pipeline",
    domain: "Supply chain",
    summary:
      "End-to-end, reproducible pipeline on 50K e-commerce orders predicting Delivered vs Delayed. Data-quality and leakage reviews, input/output data contracts, MLflow experiment tracking, cost-benefit analysis and BPMN-gated evaluation that decides whether a model may be promoted.",
    stack: ["Python", "XGBoost", "MLflow", "Pandas", "BPMN"],
    link: "https://github.com/VivekSinghK14/E-Commerce-Shipping-Prediction",
    featured: true,
  },
  {
    title: "Conveyor Parcel Segmentation & Tracking",
    domain: "Computer vision",
    summary:
      "Detects and segments polybags on conveyor systems for logistics and parcel-handling applications, combining YOLO11 detection with SAM 2 segmentation.",
    stack: ["Python", "YOLO11", "SAM 2", "PyTorch"],
    featured: true,
  },
  {
    title: "Clinical Risk Early Detection System",
    domain: "Healthcare · NLP",
    summary:
      "NLP feature engineering with Logistic Regression and XGBoost, delivered as an 85%-accuracy risk-reporting application served through Streamlit.",
    stack: ["Python", "NLP", "XGBoost", "Streamlit"],
  },
  {
    title: "Taxi Fleet Profit Optimization",
    domain: "Mobility",
    summary:
      "Fare-prediction and route-profitability models on NYC taxi trip data, supporting driver-earning and idle-time recommendations.",
    stack: ["Python", "Scikit-learn", "Pandas"],
  },
  {
    title: "Job-Pilot — Job Search Automation",
    domain: "Automation",
    summary:
      "Pulls new Werkstudent and internship postings from the Bundesagentur für Arbeit API and JobTeaser, filters by language requirement, scores by relevance and recency, emails matches and syncs an Excel tracker.",
    stack: ["Python", "REST APIs", "Scheduling", "Excel"],
    link: "https://github.com/VivekSinghK14/Job-Pilot",
  },
  {
    title: "Customer Shopping Behaviour Analysis",
    domain: "Analytics",
    summary:
      "Cleaning, feature engineering and segmentation of customer-shopping data, loaded to PostgreSQL and visualised in a Power BI dashboard.",
    stack: ["Python", "PostgreSQL", "SQLAlchemy", "Power BI"],
    link: "https://github.com/VivekSinghK14/Customer_Shopping_Behavior_Analysis",
  },
];

export const education = [
  {
    degree: "M.Sc. Digital Engineering",
    school: "Otto-von-Guericke University, Magdeburg",
    period: "Apr 2025 – Present",
    note: "Current grade 1.7",
  },
  {
    degree: "B.Tech. Computer Science & Engineering",
    school: "Abdul Kalam Technical University, India",
    period: "Jul 2016 – Jun 2020",
    note: "80%",
  },
];

export const certifications = [
  { name: "Developing AI Models with Machine Learning Clients for SAP HANA", issuer: "SAP", year: "2024" },
  { name: "Setting up an ABAP Environment on SAP BTP", issuer: "SAP", year: "2024" },
];

export const languages = [
  { name: "English", level: "C1" },
  { name: "German", level: "A1 — actively improving" },
];
