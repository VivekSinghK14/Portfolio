import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '@/public/Asset/assets';

const About = ({ infoList, toolsData }) => {
  // Programming Languages
  const languages = ["Python", "SQL", "C++", "Java","JavaScript", "C"];

  // Technologies / Tools
  const tools = [
  // Data Science / ML
  "Python", "Pandas", "NumPy", "Scikit-learn", "PyTorch", "TensorFlow",

  // Databases / SQL
  "PostgreSQL", "SQL", "SAP S/4HANA", "SAP DataSphere",

  // Visualization / BI
  "Power BI", "Matplotlib", "Seaborn", "Plotly",

  // IDEs / Dev Tools
  "VS Code", "PyCharm", "IntelliJ", "Git", "Docker",

  
];


  // Click animation state
  const [activeLang, setActiveLang] = useState(null);
  const [activeTool, setActiveTool] = useState(null);

  const handleLangClick = (index) => {
    setActiveLang(index);
    setTimeout(() => setActiveLang(null), 500);
  };

  const handleToolClick = (index) => {
    setActiveTool(index);
    setTimeout(() => setActiveTool(null), 500);
  };

  return (
    <div id='about' className='w-full px-[12%] py-20 scroll-mt-20'>
      <h2 className='text-center text-5xl font-Ovo mb-14'>About Me</h2>

      <div className='flex flex-col lg:flex-row items-center gap-20'>
        {/* Profile */}
        <div className='w-64 sm:w-80 rounded-3xl overflow-hidden'>
          <Image
            src={assets.userImage}
            alt='user'
            width={320}
            height={320}
            className='w-full rounded-full shadow-lg'
          />
        </div>

        <div className='flex-1'>
          <p className='mb-10 max-w-2xl font-Outfit text-gray-800 text-base sm:text-lg leading-relaxed'>
            I’m a Data Scientist with a B.Tech in Computer Science and over 4 years of industry experience. Currently pursuing an M.Sc. in Digital Engineering in Germany, I am passionate about working with data—analyzing it, building predictive models, and creating actionable insights that drive real-world solutions. My expertise spans Machine Learning, Analytics, SQL, and Data Visualization using tools like Python, Power BI, and interactive dashboards. I enjoy transforming complex data into clear, visually impactful insights that help organizations make informed decisions.
          </p>

          {/* My Tech Stack Section */}
          <div className='mt-10 flex flex-col lg:ml-0 lg:pl-0 px-0 lg:px-0'>
  <h3 className='text-2xl font-semibold mb-6'>My Tech Stack</h3>

            {/* Languages */}
            <div className='mb-6'>
              <h4 className='text-xl font-medium mb-3'>Languages:</h4>
              <div className='flex flex-wrap gap-3'>
                {languages.map((lang, index) => (
                  <span
                    key={index}
                    onClick={() => handleLangClick(index)}
                    className={`
                      px-4 py-2 rounded-full bg-gray-200 text-gray-800 font-medium text-sm cursor-pointer hover:-translate-y-1  hover:bg-[#d4a373] hover:text-white transition-all duration-300

                      ${activeLang === index ? 'animate-bounce' : ''}
                    `}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            {/* Technologies / Tools */}
            <div>
              <h4 className='text-xl font-medium mb-3'>Technologies & Tools:</h4>
              <div className='flex flex-wrap gap-3'>
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    onClick={() => handleToolClick(index)}
                    className={`
                      px-4 py-2 rounded-full bg-gray-200 text-gray-800 font-medium text-sm cursor-pointer hover:-translate-y-1  hover:bg-[#d4a373] hover:text-white transition-all duration-300

                      ${activeTool === index ? 'animate-bounce' : ''}
                    `}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

