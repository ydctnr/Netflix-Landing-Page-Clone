import React, { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const imagesByLanguage = {
  en: [
    'https://occ-0-7332-1489.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABR3ye5yOEI-NHkA0Gu2_hEekgoxTStWXceHV4LOAldWz-8_Gil5q9FO1COZ3sTxrktEkccp63Np9xrlxGPjGMO8LhawNlEZhwPajdGRIZtzqfFlcKU7qvJtU2475eJcaVNLYnMDJDhSwoKLyfcLQRscc0uDkdUPwF5e9BhW50NB47Rx6cQvOF-UOFd3HPcA.jpg?r=201',
    'https://occ-0-7332-1489.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYWzP8Aa9-yGGrZFdLOKvsPUojLXqwGxfLwXwNDBFmfHk2K0QgJFDwRiBJGs7yicEKv-U7WkHQoqp9k1FKHZ78YcQ14zCEfyemR3zTvKYb1ef4AIVfWIG9k7mn2K0gGPFWeGtXE2O6BnlH_LWvHI92qe7JJs-JayMi9L_2Gi6t5jUAXbuOnKiNRVasgTiqIDhMjSAvvy8qvCpIb9_usDo8-e0YdmpvAD4TawtF_siiuU29DeIMF5rsxf1rprG2M3R4989SSAP5jqyU3lhJwe8LDknt-UXBgYjZumNT2MHNuTx0J6LMKxsAVl.jpg?r=7a3',
    'https://occ-0-7332-1489.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABVJCwCbkTEa7p1StFVdjTxFCHLf5Jb65kmQLpZpsV41HgEquM_OBUbgce0ev0Q8DOd1s501qYQZ60Mdrb_TodMNza9L4k48f8jM.jpg?r=cd2',
    'https://occ-0-7332-1489.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABU6quW_oGTW9LOtEuAjmVqVNiXHZMzB5hZ8cLA2JJwKGHuVUScMAGwX1hOHLBLCQmoOriR5tp6S66_X6qnopBXr0BQpYhyW5Eso.jpg?r=fee',
    'https://occ-0-7332-1489.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYjdjpUFlEM6dKbl8MuA-tu00uV45C58o9s97-RpOp1QrU_m8UcKI1av8l1j71SeyEXLUKF9aRvw96Ni-rZQt7Yq-6u4cWRLhfk.jpg?r=114',
    'https://occ-0-7332-1489.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQhP2aG_H5qc2w8yTyEDNGZa2pqNlF3Y4eKfoAUSjI9aNPNzcgYhSpxDuj7nr5blbON4_3lSFOfCk9YTf2zgtCwZIijFMviQ868.jpg?r=a34',
    'https://occ-0-7332-1489.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABYS2cN76qByNq-KKC8M2dFSIvb2-wQBhAecMcLFCnxUO_L1U_0hN7KCFvkpfFNhvz0yd-j7pSJxZgv96dcP8BQy-aoPSBio5Ag9CykYL2GSPn4y_SCJZVSdqUMdWrCyYjzd7.jpg?r=bf2',
    'https://occ-0-7332-1489.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABdl235z_YJ4_NcDTfUnn_b3-HXfVWJ5lTc_wU8LKYcb9Dr1f-Qqr_A4bnV0uHEFnQMEP1w19gZZ7vtAJlfN_xWCeBBU3WfV3joK5L-_onWmDA-iwlNTe4EGiZ1T-FX9UMcF8dAw1E5iDFtwzcU9Fl_BndJ_UKoVOnuQ.jpg?r=b1c',
    'https://occ-0-7332-1489.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRblh5V7qLaZX39d3BbdxD5Wbk-BBM5JoCeOCVYocQq1rlUVVtJjK_HnP0cSRxCa_lJhgL85sOxTseF9TagMWKkfU_22smQ4aREa22_UlpsFLLUnZSWVKiKaC5IgsO8w_A7SLMGVUthWuU5wcfz6Z6fs6SoYIB_dvr3v4UBLr3RcAs4O7vNVCnzv8nAJF5UNQ6rKsDl_dHh0diSNpoX3fY918cqPgW9kX67VR0pcp9GaTYzJLxnwNCQENbWapidxMIBIUMfcaSnNwd0oaLzlL8LJiki8v8gN2IMDtYiv4OedbeIXn3Krod_F.jpg?r=53a'
  ],
  tr: [
    'https://occ-0-7332-1489.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABbwpYcj5TxyGYomiZgY8WjUKRwEe-dP646bRIKAntsJJSjqebd-g7FIFbPQ0rb5n63J2VDVRhhCQqItFdLJ5uPiqidnoiYVr4BaTFXJuqdTF7NFnN-EhtNsyKG16qAlZXi4_JRZlwBeaybNj_9tbU5UsW4nWMMOvAa_9oBi6QOFT1oJ6Dawu1uZ3MhxU8K8.jpg?r=0df',
    'https://occ-0-7332-1489.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABUew15rrl3KHJQ-kJGEuoY5uh_enw5gQFJ6iwK-3AYy9FG-yrte17rEz55zCOredkqGVct0diqiHbu83_zMdzdXqnk_mosD7d-DI7PAW7_oj5EO6nP8ekH__c7KkC-I0wXs5q8lxbxl01wodlMVVdZiigF-Aa095yTom1Gk95ZeSH8VbtQFiZjs3tf82MMfYTbjaDKw4CplXpND7B1TpEsceinUIYhdBSacJwAbO5bczyHVqjan5Ed-7slXErfd74CgHtc-xr7nKSA0nPIqs75_NxzDA13Udly7cyr1KNYOn85Ih4QGjCg.jpg?r=571',
    'https://occ-0-7332-1489.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQ2JIClsaYzSybkvsSAZ8YBjzbocuZ-Rha9WP95dwW4jihicB6GAJWmrtBTXVWAUNF7rSo3ymNijlQP4HtzHYTMEYwzovZsfFcE.jpg?r=338',
    'https://occ-0-7332-1489.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABU6quW_oGTW9LOtEuAjmVqVNiXHZMzB5hZ8cLA2JJwKGHuVUScMAGwX1hOHLBLCQmoOriR5tp6S66_X6qnopBXr0BQpYhyW5Eso.jpg?r=fee',
    'https://occ-0-7332-1489.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcuYoBfP8Yc0CpDnUtir1dj76qYT0NWx-8F3qV8czH1_4BkvySCcUM_gn1yMtd97WGtizD9jj1YF1czG0b7wOcWESCG2iPb6cjE.jpg?r=6e7',
    'https://occ-0-7332-1489.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABXUrUwyP-cU5TTEQUdTlhB_ATb47bAgZfvjntf-qPcKsEMr-Yk2Bwj5RBg88hyXNgqFdlO0a-2ZTE9jkI1rnp7f2Focg3preb0k.jpg?r=042',
    'https://occ-0-7332-1489.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZLBecCnq2rpDtwyF-koAn4TcH8jg0xtagdkn2Qxzg_WN5MwCYYWOYUq5CHHtpSB6PHjkypU_T3_1O72jGZ7Fm9zpC7_V0ihjlR0TwxtoUzSHf5mWlUC-fg8WUykkSItTuPU.jpg?r=a6e',
    'https://occ-0-7332-1489.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABZXMUn42LIFwfsPH7dfy5KrVxjYnd7RQ4l6hh2EEmOFf3azfEDI1otgxbnjTxBGLfP0Cg4Yej-WSM_Holyvaioe1QBEWsnBUz_FMjN1UumpldUj1uq1T04vcP_WHDqlREDry_ocWgdMK86sAxG9mac0RoxoWT1AtGR0.jpg?r=cd5',
    'https://occ-0-7332-1489.1.nflxso.net/dnm/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABcGQRLt_MmILsYEPlqt307KEMmaKj3vSqkIjT1QG-MNv9p4EGAG9aUyWZcQ4aPwqPPHc5atKoFNegFuTQv3q-DPZfXDsiwqgsbadN_ugaL6ZMxOaFanme4OfoxCEtEvn5D0Os1u7x2U8XT5gr9X00vbRwjjXF4k8hehZle5R2WO3sQNPmVhsPMRg8puGpzuXWOwQvhVZCeUhAdbxZqCkW76aC409i4n641bWiXDMV7tPWXetGWxeVvuQjFh__VphrO4ITz6YBwtSULOXr-wYreRYKfZnQmVrro_Z1CcJAhN_K5n4M70hjg.jpg?r=8f7'
  ],
};

const ImageSlider = () => {
  const { t, i18n } = useTranslation();
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState(imagesByLanguage[i18n.language] || imagesByLanguage.en);

  useEffect(() => {
    setCurrentImages(imagesByLanguage[i18n.language] || imagesByLanguage.en);
    setCurrentIndex(0);
  }, [i18n.language]);

  const scrollLeft = () => {
    const screenWidth = window.innerWidth;
  
    const isMediumDevice = screenWidth >= 768 && screenWidth < 1024;
    const isSmallDevice = screenWidth < 768;
  
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - (isSmallDevice ? 2 : isMediumDevice ? 8 : 4));
      sliderRef.current.scrollBy({
        left: isSmallDevice ? -250 : isMediumDevice ? -800 : -750,
        behavior: 'smooth',
      });
    }
  };
  
  const scrollRight = () => {
    const screenWidth = window.innerWidth;
  
    const isMediumDevice = screenWidth >= 768 && screenWidth < 1024;
    const isSmallDevice = screenWidth < 768;
  
    if (currentIndex < currentImages.length - 1) {
      setCurrentIndex((prev) => prev + (isSmallDevice ? 2 : isMediumDevice ? 8 : 4));
      sliderRef.current.scrollBy({
        left: isSmallDevice ? 250 : isMediumDevice ? 800 : 750,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative mt-5 flex gap-1 justify-center items-center w-full">
      {currentIndex > 0 && (
      <button
      onClick={scrollLeft}
      className='flex justify-center items-center w-[1.5rem] h-[7.5rem] rounded-[0.5rem] bg-slider-btn hover:bg-slider-btn-hover'
      >
        <svg
        className="rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        aria-hidden="true"
        >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
          fill="currentColor"
        ></path>
        </svg>
      </button>
      )}

      <div 
      ref={sliderRef} 
      className="flex overflow-hidden scroll-smooth scrollbar-hide">
        <div className='flex'>
        {currentImages.map((img, index) => (
          <div
          key={index}
          className='w-32 md:w-36 lg:w-48 max-lg:px-2.5 px-6 py-1 relative cursor-pointer hover:animate-grow'>
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            className="object-cover rounded-[0.5rem]"
          />
          <span
            className="flex justify-center items-center absolute -bottom-2 lg:-bottom-3 -left-1 md:left-0 lg:-left-0 text-black font-bold tracking-tighter text-[4rem] lg:text-[5rem] xl:text-[6.25rem]"
            style={{ 
              textShadow: '0px 0px 5px rgba(255, 255, 255, 0.9), 0 0 5px rgba(255, 255, 255, 0.9)' 
            }} 
          >
            {index + 1}
          </span>
        </div>
        ))}
        </div>
      </div>

      {currentIndex < currentImages.length - 1 && (
      <button
      onClick={scrollRight}
      className="flex justify-center items-center w-[1.5rem] h-[7.5rem] rounded-[0.5rem] bg-slider-btn hover:bg-slider-btn-hover"
      >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        aria-hidden="true"
        >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.5859 12L8.29303 19.2928L9.70725 20.7071L17.7072 12.7071C17.8948 12.5195 18.0001 12.2652 18.0001 12C18.0001 11.7347 17.8948 11.4804 17.7072 11.2928L9.70724 3.29285L8.29303 4.70706L15.5859 12Z"
          fill="currentColor"
        ></path>
        </svg>
      </button>
      )}
    </div>
  );
};

export default ImageSlider;
