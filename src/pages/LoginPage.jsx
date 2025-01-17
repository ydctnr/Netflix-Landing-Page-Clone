import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const footer = [
  { id: "0", key: "faq" },
  { id: "1", key: "helpCenter" },
  { id: "2", key: "termsOfUse" },
  { id: "3", key: "privacy" },
  { id: "4", key: "cookiePreferences" },
  { id: "5", key: "corporateInformation" },
]


const Loginpage = ({ language, onLanguageChange }) => {
  const { t } = useTranslation();


  const handleChange = (e) => {
    onLanguageChange(e.target.value);
  };

  const [focusStates, setFocusStates] = useState({
    email: false,
    password: false,
  });

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const handleGetStartedClick = () => {
    const trimmedPassword = String(password).trim();
  
    if (!email.trim()) {
      setEmailError(t('invalid'));
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.trim())) {
      setEmailError(t('invalid'));
    } else {
      setEmailError('');
    }
  
    if (!trimmedPassword) {
      setPasswordError(t('invalidPassword'));
    } else if (trimmedPassword.length < 4 || trimmedPassword.length > 60) {
      setPasswordError(t('invalidPassword'));
    } else {
      setPasswordError('');
    }
  };


  return (
    <div
    className='relative flex flex-col lg:h-screen w-full'>

      <div
      className='max-md:hidden md:absolute inset-0 -z-10'
      style={{
        backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/154a9550-ce07-4e28-819c-63185dd849f8/web/TR-en-20250106-TRIFECTA-perspective_2e922217-0b07-4551-8bd0-2bc6840c8c06_small.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
        opacity: 0.5,
      }}>
      </div>

      <div className='w-full relative px-6 md:px-8 lg:px-20 xl:px-[9.65rem]'>
        <header className='flex justify-between items-center h-[4.5rem] lg:h-[5.5rem]'>
          <Link
          to="/">
            <a
            role='link'>
              <svg className="w-[5.5625rem] h-6 lg:w-[9.25rem] lg:h-10 fill-[#e50914]" viewBox="0 0 111 30">
                <g>
                  <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
                </g>
              </svg>
            </a>
          </Link>
        </header>
      </div>

      <div className='md:max-w-[560px] px-[5%] mb-36 md:mx-auto'>
        <div className='w-full flex flex-col text-left md:min-h-[707px] md:px-[68px] md:py-[48px] bg-login-bg rounded-[4px]'>

          <header>
            <h1 className='mb-[28px] text-[2rem] font-bold'>{t('signIn')}</h1>
          </header>

          <form
          aria-label='Sign In'
          method='' /*Post Method*/
          className='flex flex-col gap-4 text-center'
          >

            <div className='flex flex-col text-left'>
              <div className='inline-flex relative flex-wrap '>
                <label
                htmlFor="userLoginId"
                className={`absolute left-4 right-4 z-10 pointer-events-none text-grayish-anchor transition-all duration-200 ease-in-out ${
                  focusStates.email ? 'text-[0.75rem] top-1' : 'top-4 max-md:top-3'
                }`}
                >
                  {t('userLoginId')}
                </label>

                <div className="w-full flex relative min-w-[12.5rem]">
                  <input 
                    type="text" 
                    id="userLoginId"
                    name="userLoginId"
                    aria-required="true"
                    onChange={(e) => setEmail(e.target.value)}
                    className="z-10 w-full px-4 pt-6 max-md:pt-5 pb-2 max-md:pb-1 min-h-4 min-w-4 bg-transparent"
                    onFocus={() => setFocusStates({ ...focusStates, email: true })}
                    onBlur={(e) => setFocusStates({ ...focusStates, email: e.target.value !== '' })}
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
            </div>

            <div className='flex flex-col text-left'>
              <div className='inline-flex relative flex-wrap '>
                <label
                htmlFor="password"
                className={`absolute left-4 right-4 z-10 pointer-events-none text-grayish-anchor transition-all duration-200 ease-in-out ${
                  focusStates.password ? 'text-[0.75rem] top-1' : 'top-4 max-md:top-3'
                }`}
                >
                  {t('password')}
                </label>

                <div className="w-full flex relative min-w-[12.5rem]">
                  <input 
                    type="password" 
                    id="password"
                    name="password"
                    aria-required="true"
                    onChange={(e) => setPassword(e.target.value)}
                    className="z-10 w-full px-4 pt-6 max-md:pt-5 pb-2 max-md:pb-1 min-h-4 min-w-4 bg-transparent"
                    onFocus={() => setFocusStates({ ...focusStates, password: true })}
                    onBlur={(e) => setFocusStates({ ...focusStates, password: e.target.value !== '' })}
                    required
                  />
                  <div 
                    className={`z-0 absolute top-0 bottom-0 left-0 right-0 flex bg-bg-input border-[0.0625rem] rounded-[0.25rem] 
                    ${passwordError ? 'border-warning-red' : 'border-input-border'}`}
                  ></div>
                </div>

                <div className='flex max-md:py-2 pt-2'>
                {passwordError && (
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
                    <p className="text-warning-red text-[0.8125rem]">{passwordError}</p>
                  </div>
                  )}
                </div>

              </div>
            </div>

            <button
            role='button'
            type='submit'
            onClick={handleGetStartedClick}
            className='relative inline-flex px-4 py-[0.375rem] justify-center font-medium items-center w-full bg-btn-red hover:bg-btn-red-hover min-h-10 rounded-[0.25rem]'>
              {t('signIn')}
              </button>

            <p className='text-grayish-anchor'>{t('or')}</p>

            <button
            role='button'
            type='button'
            className='relative inline-flex px-4 py-[0.375rem] justify-center font-medium items-center w-full bg-lognin-btn hover:bg-lognin-btn-hover min-h-10 rounded-[0.25rem]'>
              {t('code')}
            </button>

            <a 
            role='link'
            href="#"
            className='text-white no-underline hover:text-grayish-anchor hover:underline'>{t('forget')}</a>

          </form>

          <footer className='flex flex-col gap-4 mt-5'>
            
            <div className='inline-flex items-center'>
              <div className="checkbox-container">
                <input 
                type="checkbox" 
                name='rememberme'
                id='rememberme'
                defaultChecked={true}
                />
                <label 
                htmlFor="rememberme">
                  {t('remember')}
                </label>
              </div>
            </div>

            <p className='text-grayish-anchor'>
             {t('new')}
              <a 
              href="#"
              className='text-white font-medium no-underline ml-1 hover:underline'>
                {t('sign')}
              </a>
            </p>

            <div className='text-[12.9px] md:mb-36'>
              <p className='text-[#8c8c8c]'>
                <span>{t('paragraph')}</span>
                <button className='text-[#0071eb] border-none ml-1 hover:underline'>{t('more')}</button>
              </p>
            </div>

          </footer>

        </div>
      </div>

      <footer className='max-md:border-t-[1px] max-md:border-input-border inline-flex flex-col gap-6 w-full px-6 lg:px-12 xl:px-24 bg-footer-gradient'>
          <a 
          href="#"
          className='no-underline hover:underline mt-8'>{t('footerAnchor')}</a>

          <div className=' flex-col gap-3 mb-4 grid grid-cols-2 lg:grid-cols-4'>
          {footer.map((item) => (
            <div key={item.id}>
              <ul>
                <li>
                  <a 
                  href='#' 
                  className='text-sm'>
                    {t(item.key)}
                  </a>
              </li>
              </ul>
             </div>
            ))}
          </div>

          <div className='relative inline-flex w-auto mb-8 lg:mb-16'>
            <label htmlFor="LanguageSelect" className='sr-only'>{t('LanguageSelect')}</label>
            
            <div className='inline-flex items-center'>
              <div className='absolute left-3 pointer-events-none'>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                role="img"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                data-icon="LanguagesSmall"
                aria-hidden="true">
                <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                fill="currentColor"></path>
                </svg>
              </div>

              <div>
                <select 
                value={language}
                onChange={handleChange}
                name="LanguageSelect" 
                id="LanguageSelect" 
                aria-label="Select Language" 
                className='appearance-none px-9 py-1.5 leading-5 bg-bg-input opacity-100 border-[0.0625rem] border-input-border rounded'>
                  <option value="en">English</option>
                  <option value="tr" lang="tr">Türkçe</option>
                </select>
              </div>

              <div className='absolute left-24 pointer-events-none'> 
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

        </footer>
      
    </div>
  )
}

export default Loginpage
