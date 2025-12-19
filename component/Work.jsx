import React, { useState } from "react";

const Work = () => {
  const experiences = [
    {
      title: "Research Assistant",
      company: "Otto-von-Guericke University",
      location: "Magdeburg, Germany",
      date: "Oct 2025 – Present",
      details: [
        " Enhanced data science projects, redesigning exercises with updated curriculum and integrating new datasets, resulting in a 20-25% improvement in student engagement.",
        "Delivered SAP S/4HANA and Datasphere solutions for academic use cases.",
        "Created learning material on machine learning, statistics, and databases.",
        "Mentored 40+ students on Python programming, SQL queries, and data visualization techniques.",
      ],
    },
    {
      title: "Technical Program Developer – Data & Business Solutions",
      company: "MAXONIC INC.",
      location: "India",
      date: "Oct 2022 – Mar 2025",
      details: [
        "Optimized SQL databases and ETL pipelines, increasing data processing efficiency by 30%.",
        "Developed ML models using Python libraries (Scikit-learn, TensorFlow), improving predictive accuracy by 33%.",
        "Built interactive Power BI dashboards for executive leadership across 5+ departments.",
        "Created dashboards and reports in Power BI that reduced manual reporting time by 30% and improved visibility for management.",
        "Performed statistical analysis using Pandas and NumPy to identify business trends and patterns.",
        "Managed tasks independently and introduced simple process improvements, leading to a 10% reduction in repetitive work.",
        "Supported sales and marketing efforts using Salesforce, LinkedIn, and ZoomInfo, contributing to a 10–12% increase in qualified leads and outreach effectiveness."
      ],
    },
    {
      title: "Business Development Manager",
      company: "BYJU'S",
      location: "Delhi, India",
      date: "Jul 2020 – Sep 2022",
      details: [
        " Achieved 100% of revenue targets through strategic business development initiative.",
        "Analyzed market trends and customer data, optimizing sales strategies by 25%.",
        " Managed 50+ client relationships and delivered presentations to key stakeholders.",
      ],
    },
  ];

  const projects = [
  {
    name: "Movie Recommender System",
    tech: "Python, Streamlit, NumPy, Pandas,  Scikit-learn",
    description: (
      <>
        An intelligent movie recommender system that suggests movies based on similarity using machine learning models.{" "}
        
        <a 
          href="https://github.com/VivekSinghK14/MOVIES-Recommender-System.git" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-indigo-600 hover:underline"
        >
          GitHub
        </a>
      </>
    ),
  },
 
    {
      name: "Customer Online Shopping Behavior Analysis",
      tech: "Python, Pandas, Numpy , PostgreSQL, PowerBI",
      description: (
        <>
        Analyze customer purchase data to find patterns and improve sales strategies.{" "}
        
        <a 
          href="https://github.com/VivekSinghK14/Customer_Shopping_Behavior_Analysis.git" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-indigo-600 hover:underline"
        >
          GitHub
        </a>
      </>
      )
  
    },
    {
      name: "Diabetes Prediction in Patients",
      tech: "Python, Pandas, Numpy , SQL",
      description: (
        <>
        Build a model that analyzes patient health data to predict the risk of diabetes. Use the predictions to help in early detection and better disease management..{" "}
        
        <a 
          href="https://github.com/VivekSinghK14/Diabetes-Prediction.git" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-indigo-600 hover:underline"
        >
          GitHub
        </a>
      </>
      )
    },
    {
       name: "Zepto Inventory Analysis",
      tech: "Python,PostgreSQL",
      description: (
        <>
        Analyze Zepto's inventory data to identify stock trends and demand patterns. Optimize inventory management to reduce shortages and improve delivery efficiency..{" "}
        
        <a 
          href="https://github.com/VivekSinghK14/ZEPTO_INVENTORY_ANALYSIS.git" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-indigo-600 hover:underline"
        >
          GitHub
        </a>
      </>
      )
    },
  ];

  return (
    <div id="Work" className="w-full px-[12%] py-10 scroll-mt-20">
      {/* ---------- Work Experience ---------- */}
      <h2 className="text-center text-5xl font-Ovo mb-16">My Work Experience</h2>

      <div className="relative border-l border-gray-300 pl-8 space-y-12 mb-24">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} />
        ))}
      </div>

      {/* ---------- Projects Section ---------- */}
      <h4 className="text-center mb-2 text-lg font-Ovo text-gray-700">
        Featured Projects
      </h4>
      <h2 className="text-center text-5xl font-Ovo mb-16">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 border-[0.5px] border-gray-300 rounded-2xl shadow-black bg-white hover:-translate-y-1 hover:bg-lightHover hover:shadow-black duration-500"
          >
            <h3 className="text-2xl font-semibold font-Ovo text-gray-800 mb-2">
              {project.name}
            </h3>
            <p className="text-sm text-gray-500 mb-3 font-Outfit">
              {project.tech}
            </p>
            <p className="text-gray-700 font-Outfit text-[15px] leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// ---------- Modular Subcomponent ----------
function ExperienceCard({ exp }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative bg-white border-[0.5px] border-gray-300 rounded-2xl shadow-black p-6 hover:-translate-y-1 hover:shadow-black hover:bg-lightHover duration-500">
      <div className="absolute -left-[0.8rem] top-8 w-4 h-4 bg-darkHover rounded-full border-2 border-white"></div>

      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div>
          <h3 className="text-2xl font-semibold font-Ovo text-gray-800">
            {exp.title}
          </h3>
          <p className="text-gray-600 font-Outfit text-sm mt-1">
            {exp.company} • {exp.location}
          </p>
        </div>
        <span className="text-sm text-gray-500 mt-2 md:mt-0 font-Outfit">
          {exp.date}
        </span>
      </div>

      <ul
        className={`mt-4 list-disc list-inside text-gray-700 space-y-1 font-Outfit text-[15px] leading-relaxed transition-all duration-300 ${
          expanded ? "max-h-full" : "max-h-12 overflow-hidden"
        }`}
      >
        {exp.details.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-blue-600 hover:underline text-sm mt-1"
      >
        {expanded ? "Show less" : "Show more"}
      </button>
    </div>
  );
}

export default Work;
