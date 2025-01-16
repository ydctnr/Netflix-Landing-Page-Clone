import React from "react";
import { useTranslation } from 'react-i18next';

import Slider from './Slider';

const Trends = () => {
  const { t } = useTranslation();


  return (
    <section>

      <h2>{t('trendHeader')}</h2>

      <fieldset
      aria-label="Discover what’s trending now">
        <legend className="sr-only">{t('legend')}</legend>

        <div>
          
          <div className="lg:inline-block lg:mr-6">
            <div className="relative flex">
              <label htmlFor="Region" className="sr-only">{t('region')}</label>
              
              <div className="relative w-full flex items-center gap-0.5">
                
                <select 
                name="Region" 
                id="Region"
                className="w-full py-2 pl-3 pr-calc-spacing">
                  <option 
                  label="Türkiye"
                  value="local">
                    Türkiye
                  </option>
                  <option 
                  label={t('glbl')}
                  value="global">
                    {t('glbl')}
                  </option>
                </select>

                <div className='flex justify-end items-center absolute inset-0 pr-dropdown-svg pointer-events-none'> 
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  role="img"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                  data-icon="CaretDownSmall"
                  aria-hidden="true">
                  <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z"
                  fill="currentColor"></path>
                  </svg>
                </div>

              </div>
            </div>

          </div>
          
          <div className="lg:inline-block max-lg:mt-3">
            <div className="relative flex">
              <label htmlFor="Content" className="sr-only">{t('content')}</label>
              
              <div className="relative w-full flex items-center gap-0.5">
                
                <select 
                name="Content" 
                id="Content"
                className="w-full py-2 pl-3 pr-calc-spacing">
                  <option 
                  label={t('movies')}
                  value="localMovies">
                    {t('movies')}
                  </option>
                  <option 
                  label={t('shows')}
                  value="localTv">
                    {t('shows')}
                  </option>
                </select>

                <div className='flex justify-end items-center absolute inset-0 pr-dropdown-svg pointer-events-none'> 
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  role="img"
                  viewBox="0 0 16 16"
                  width="16"
                  height="16"
                  data-icon="CaretDownSmall"
                  aria-hidden="true">
                  <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z"
                  fill="currentColor"></path>
                  </svg>
                </div>

              </div>
            </div>

          </div>

        </div>

      </fieldset>

      <Slider />

    </section>
  )
}

export default Trends

