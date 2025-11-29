import React, { useState } from "react";

const Work = () => {
  const experiences = [
    {
      title: "Research Assistant",
      company: "Otto-von-Guericke University",
      location: "Magdeburg, Germany",
      date: "Oct 2025 – Present",
      details: [
        "Developing and implementing academic projects using SQL, UML, HTML, ER Diagrams, and XML, showcasing strong understanding of database concepts and system design.",
        "Creating mini-projects and practice exercises that improved class participation and practical understanding by 20–25%.",
        "Applying SAP S/4HANA and SAP Datasphere to analyze real business case studies, gaining hands-on experience with enterprise processes like finance, procurement, and supply chain..",
      ],
    },
    {
      title: "Technical Program Developer – Data & Business Solutions",
      company: "MAXONIC INC.",
      location: "India",
      date: "Oct 2022 – Mar 2025",
      details: [
        "Designed and improved SQL databases and pipelines, helping the organization increase data processing efficiency by 25–30%.",
        "Supported Machine Learning and Data Science tasks, contributing to a 15% improvement in data-driven decision-making for marketing and operations.",
        "Cleaned and analyzed data using Python, improving overall data accuracy and reliability by 20%.",
        "Created dashboards and reports in Power BI that reduced manual reporting time by 30% and improved visibility for management.",
        "Worked closely with different teams to understand business needs and helped deliver data solutions that boosted team productivity by 15%.",
        "Managed tasks independently and introduced simple process improvements, leading to a 10% reduction in repetitive work.",
        "Used Python, Scikit-learn, GitHub, HTML, and Docker in daily workflows, improving project consistency and reducing setup time by 20%.",
        "Supported sales and marketing efforts using Salesforce, LinkedIn, and ZoomInfo, contributing to a 10–12% increase in qualified leads and outreach effectiveness."
      ],
    },
    {
      title: "Business Development Manager",
      company: "BYJU'S",
      location: "Delhi, India",
      date: "Jul 2020 – Sep 2022",
      details: [
        "Led and mentored a team of 18–20 trainees, improving their performance, confidence, and retention through structured guidance and regular feedback.",
        "Consistently met revenue targets by planning and executing effective business development and sales strategies.",
        "Trained and supported new Business Development Trainees to achieve their KPIs, resulting in stronger team productivity and smoother onboarding.",
        "Contributed to company growth by implementing practical sales approaches that improved lead conversion and client engagement.",
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
