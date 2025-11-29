import { assets } from '../public/Asset/assets';
import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <div className='w-11/12 max-w-10xl text-center mx-auto pt-24 flex flex-col items-center justify-center gap-6'>
      <div>
        <Image
          src={assets.profile_img}
          alt='Profile'
          width={224}
          height={224}
          className='rounded-full object-cover shadow-lg'
        />
      </div>

      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hi, I'm Vivek Kumar Singh
        <Image src={assets.hand_icon} alt='Hand Icon' width={24} height={24} />
      </h3>

      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo text-gray-900 dark:text-gray-50 mb-4'>
        Aspiring Data Scientist based in Germany.
      </h1>

      <p className='max-w-2xl mx-auto font-Ovo text-gray-700 dark:text-gray-200'>
        IT-Centric Professional with Strategic Business Insight — leveraging expertise in Data Science, AI, SQL, Databases, Power BI, 
        Machine Learning, and Analytics.  Passionate about bridging technology and business impact.
      
     
      </p>
 <h3>"I love data because it never lies—it always tells a story."
        </h3> 
      <div className='flex flex-col sm:flex-row items-center gap-4 mt-6'>
        <a
          href="#Contact"
          className='px-10 py-3 rounded-full bg-[#d4a373] text-white flex items-center gap-2 shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-1 hover:scale-105'
        >
          Contact Me <Image src={assets.right_arrow_white} alt='Arrow' width={16} height={16} />
        </a>

        <a
          href="/sample-resume.pdf"
          download
          className='px-10 py-3 rounded-full border border-gray-500 flex items-center gap-2 shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-1 hover:scale-105'
        >
          My Resume <Image src={assets.download_icon} alt='Download' width={16} height={16} />
        </a>
      </div>
    </div>
  );
};

export default Header;


