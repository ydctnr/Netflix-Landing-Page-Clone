import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Hero, Trends, Reasons, FAQ, Form, Footer } from '../components';

const HomePage = () => {
      const { i18n } = useTranslation();
      const [language, setLanguage] = useState('en');
    
      const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
        i18n.changeLanguage(newLanguage);
      };


  return (
    <>
          <div className='relative w-full z-10'>
            <Hero language={language} onLanguageChange={handleLanguageChange} />
          </div>

          <div className='relative z-20 -mt-8 flex flex-col w-full gap-14 lg:gap-16 px-6 md:px-8 lg:px-20 xl:px-[9.25rem]'>
            <Trends />
            <Reasons />
            <FAQ />
            <Form />
            <Footer language={language} onLanguageChange={handleLanguageChange} />
          </div>
    </>
  )
}

export default HomePage
