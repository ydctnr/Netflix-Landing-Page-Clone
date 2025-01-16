import { useTranslation } from 'react-i18next';

import { reasons } from "../constants";


const Reasons = () => {
  const { t } = useTranslation();


  return (
    <section>

      <h2>{t('reasonsHeader')}</h2>

      <div className='inline-flex max-xl:flex-wrap gap-2 lg:gap-3 xl:gap-4 w-custom-plus xl:w-custom-xl'>
      {reasons.map((item) => (
          <div className="relative flex flex-wrap bg-card-gradient backdrop-blur-2xl rounded-2xl w-full h-auto basis-custom-full lg:basis-custom-half xl:basis-custom-quarter"
          key={item.id}
          >
            <div className="relative w-full h-full">
              
              <div className='px-4 lg:px-6 xl:px-4 pt-5 pb-20 md:pb-24 lg:pb-20 xl:pb-32'>
                <h3 className="text-xl xl:text-2xl xl:leading-7 font-medium w-full">{t(item.title)}</h3>
                <p className="mt-1.5 lg:mt-2.5 xl:mt-3 lg:mb-4 xl:mb-0 leading-[1.15rem] text-grayish-anchor w-full">{t(item.text)}</p>
              </div>

            <div 
            className="absolute bottom-2 right-1  lg:bottom-3 lg:right-2 xl:bottom-4 xl:right-3 max-lg:transform max-lg:translate-[36px_36px] max-lg:scale-[0.88] max-lg:translate-[-36px_-36px]">
              <div dangerouslySetInnerHTML={{ __html: item.icon }} />
            </div>

            </div>
          </div>
          ))}
        </div>

    </section>
  )
}

export default Reasons
