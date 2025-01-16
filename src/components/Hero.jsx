import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import Navbar from './Navbar';


const Hero = ({ language, onLanguageChange }) => {
  const { t } = useTranslation();

  const [isFocused, setIsFocused] = useState(false);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  
  const handleGetStartedClick = () => {
    if (email.trim() === '') {
      setEmailError(t('emailRequired'));
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError(t('invalidEmail'));
    } else {
      setEmailError('');
    }
  };


  return (
    <section 
    className='relative flex flex-col'
    style={{
      backgroundImage: `linear-gradient(7deg, rgba(0, 0, 0, 0.8500) 10.00%, rgba(0, 0, 0, 0.8465) 17.25%, rgba(0, 0, 0, 0.8361) 24.50%, rgba(0, 0, 0, 0.8187) 31.75%, rgba(0, 0, 0, 0.7944) 39.00%, rgba(0, 0, 0, 0.7632) 46.25%, rgba(0, 0, 0, 0.7250) 53.50%, rgba(0, 0, 0, 0.6868) 60.75%, rgba(0, 0, 0, 0.6556) 68.00%, rgba(0, 0, 0, 0.6312) 75.25%, rgba(0, 0, 0, 0.6139) 82.50%, rgba(0, 0, 0, 0.6035) 89.75%, rgba(0, 0, 0, 0.6000) 97.00%), url('https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/TR-en-20250106-TRIFECTA-perspective_2e922217-0b07-4551-8bd0-2bc6840c8c06_small.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      height: "100%",
    }}
    >
      <Navbar language={language} onLanguageChange={onLanguageChange} />
      

      <div className='flex flex-col justify-center min-h-[31rem] lg:min-h-[37rem] xl:min-h-[min(80vh, 45rem)]'>

      <div className='flex flex-col justify-center px-8 pb-8 max-md:-mt-6 w-full md:max-w-[31rem] lg:max-w-[36rem] xl:max-w-[40.9rem] ml-auto mr-auto text-center'>
        
        <div className='flex flex-col'>
          <h1 className='leading-[125%] text-[2rem] lg:text-[2.5rem] xl:text-[3.5rem] font-bold xl:font-[900] mb-2 xl:mb-3'>{t('heroH1')}</h1>
          <p className='xl:text-xl xl:font-medium max-lg:mb-3 mb-5 xl:mb-8'>{t('heroP')}</p>
        </div>

        <div className='w-full mx-auto lg:max-w-[48.9375rem] xl:max-w-[40.1875rem]'>

          <form 
          aria-label='Sign up or restart your membership with Netflix.'
          method='' /*Post Method*/
          >

          <h3>{t('formH3')}</h3>

          <div className='pt-4 max-w-none flex max-md:flex-col max-md:items-center relative w-full'>
            
            <div 
            className='w-full relative flex flex-col text-left'
            onClick={() => setIsFocused(true)}>
              
              <label
              htmlFor="email"
              className={`absolute left-4 right-4 z-10 pointer-events-none text-grayish-anchor transition-all duration-200 ease-in-out ${
                isFocused ? 'text-[0.75rem] top-1' : 'top-4 max-md:top-3'
              }`}
              >
                {t('email')}
              </label>

              <div className='w-full flex relative min-w-[12.5rem]'>
                <input 
                type="text" 
                id='email'
                name='email'
                minLength={5}
                maxLength={50}
                onChange={(e) => setEmail(e.target.value)}
                className='z-10 w-full px-4 pt-6 max-md:pt-5 pb-2 max-md:pb-1 min-h-4 min-w-4 bg-transparent'
                onFocus={() => setIsFocused(true)}
                onBlur={(e) => setIsFocused(e.target.value !== '')}
                required
                />
                <div 
                  className={`z-0 absolute top-0 bottom-0 left-0 right-0 flex bg-bg-input border-[0.0625rem] rounded-[0.25rem] 
                  ${emailError ? 'border-warning-red' : 'border-input-border'}`}
                ></div>
              </div>

              <div className='flex max-md:py-2 pt-2'>
              {emailError && (
                <div className='flex gap-1.5 items-center'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    role="img"
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z"
                      fill="rgb(235, 57, 66)"
                    ></path>
                  </svg>
                  <p className="text-warning-red text-[0.8125rem]">{emailError}</p>
                </div>
              )}
              </div>

            </div>
            
            <button 
            role='button'
            type='submit'
            onClick={handleGetStartedClick}
            className='flex gap-3 max-md:mt-4 min-w-fit justify-center items-center md:ml-2 py-3 max-md:py-2  px-6 max-md:px-4 max-h-12 md:max-h-14 cursor-pointer relative text-lg xl:text-2xl font-medium bg-btn-red hover:bg-btn-red-hover rounded-[0.25rem]'>
              {t('button')}

              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="1.5rem" height="1.5rem">
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z" fill="currentColor"></path>
                </svg>
              </div>

            </button>

          </div>

          </form>

        </div>


        </div>

      </div>


      <div className='relative mt-24'>
        <div 
        className="bg-curve-gradient absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[6.25rem] max-md:w-[200%] w-[150%] xl:w-[129%]"
        style={{
          borderTopLeftRadius: '50% 100%',
          borderTopRightRadius: '50% 100%',
          borderBottom: 'none',
        }}
        ></div>
        <div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[6rem] max-md:w-[200%] w-[150%] xl:w-[129%]"
        style={{
          borderTopLeftRadius: '50% 100%',
          borderTopRightRadius: '50% 100%',
          borderBottom: 'none',
          background: `
          radial-gradient(
            50% 500% at 50% -420%,
            rgba(64, 97, 231, 0.4) 80%,
            rgba(0, 0, 0, 0.1) 100%
          ),
          black
        `,
        }}
        ></div>
      </div>


    </section>
  )
}

export default Hero
