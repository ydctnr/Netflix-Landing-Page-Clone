import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';


const Form = ({ language, onLanguageChange }) => {
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
    <div className='w-full'>
      <div className='w-full mx-auto lg:max-w-[40.1875rem] xl:max-w-[48.9375rem]'>
        
        <form 
          aria-label='Sign up or restart your membership with Netflix.'
          method='' /*Post Method*/
          className='md:text-center'
        >

          <h3>{t('formH3')}</h3>

          <div className='pt-4 max-w-none flex max-md:flex-col max-md:items-start relative w-full'>
            
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

              <div className="w-full flex relative min-w-[12.5rem]">
                <input 
                  type="text" 
                  id="email"
                  name="email"
                  minLength={5}
                  maxLength={50}
                  onChange={(e) => setEmail(e.target.value)}
                  className="z-10 w-full px-4 pt-6 max-md:pt-5 pb-2 max-md:pb-1 min-h-4 min-w-4 bg-transparent"
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
            className='flex gap-3 max-md:mt-4 min-w-fit justify-center items-center md:ml-2 py-3 max-md:py-2 px-6 max-md:px-4 max-h-12 md:max-h-14 cursor-pointer relative text-lg xl:text-2xl font-medium bg-btn-red hover:bg-btn-red-hover rounded-[0.25rem]'>
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
  )
}

export default Form

