import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
          <Route path="/" element={<HomePage language={language} onLanguageChange={handleLanguageChange} />} />
          <Route path="/login" element={<LoginPage language={language} onLanguageChange={handleLanguageChange} />} />        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
