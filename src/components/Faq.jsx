import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { questions } from '../constants';


const Faq = () => {
  const { t } = useTranslation();

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <section>
      
      <h2>{t('faqHeader')}</h2>

      <div className="w-full flex flex-col gap-2 cursor-pointer">
          
          {questions.map((item, index) => (
            
            <ul key={index} className="lg:text-2xl text-lg">
              <li>
                
                <h3 className='relative flex bg-faqlist-background hover:bg-faqlist-hover'>
                  <button 
                  onClick={() => handleToggle(index)}
                  type='button'
                  className='p-6 w-full flex justify-between items-center cursor-pointer'>
                    {t(item.question)}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      role="img"
                      viewBox="0 0 36 36"
                      width="36"
                      height="36"
                      data-icon="PlusLarge"
                      aria-hidden="true"
                      className={`max-lg:w-[24px] max-lg:h-[24px] transition-transform duration-200 ${activeIndex === index ? 'rotate-45' : ''}`}
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17 17V3H19V17H33V19H19V33H17V19H3V17H17Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </h3>

                <div
                className={`mt-[1px] overflow-hidden transition-all duration-200 ease-[cubic-bezier(0.5, 0, 0.1, 1)] ${
                  activeIndex === index ? 'max-h-screen' : 'max-h-0'
                }`}
                >
                <div className="flex flex-col bg-faqlist-background p-6 leading-tight">
                  <span>{t(item.answer)}</span>
                  <span className={`${item.br ? 'pt-6' : 'pt-0'}`}>{t(item.br)}</span>
                </div>
              </div>

              </li>
            </ul>
          ))}
        </div>

    </section>
  )
}

export default Faq
