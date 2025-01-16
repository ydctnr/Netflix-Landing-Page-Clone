import { Hero, Trends, Reasons, FAQ, Form, Footer } from './components';
import LoginPage from './pages/LoginPage';

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function App() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };


  return (
    <Router>
      <div className='w-full flex flex-col justify-center items-center overflow-x-hidden'>

        <Routes>

          <Route
          path="/"
          element={
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
          }
          />
      
         <Route path="/login" element={<LoginPage language={language} onLanguageChange={handleLanguageChange}/>} />
              

        </Routes>

      </div>
    </Router>
  )
}

export default App
