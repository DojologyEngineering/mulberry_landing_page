'use client';

import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import Link from 'next/link';

import { images, mediumScreen, smallScreen } from '@/utils/home-util';

import image1 from '/public/img/image1.webp';

// export const ImagePreview = () => {
//   return (
//     <div className='container w-full mx-auto mt-10 mb-10'>
//       <ImageGallery
//         items={images}
//         infinite={false}
//         additionalClass='bg-white'
//       />
//     </div>
//   );
// };
export const HomePreview = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const handleSlide = (index: number) => {
    setActiveSlideIndex(index);
  };
  const [fontSize, setFontSize] = useState('text-[26px]');
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 320 && screenWidth <= 768) {
        setFontSize('text-[26px]');
      } else if (screenWidth >= 768 && screenWidth <= 1024) {
        setFontSize('text-[45px]');
      } else if (screenWidth > 1024) {
        setFontSize('text-[60px]');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className='relative w-full overflow-hidden'>
        <div className='flex md:hidden'>
          <ImageGallery
            items={smallScreen}
            infinite={true}
            // autoPlay={true}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            onSlide={(index) => {
              handleSlide(index);
            }}
            onBeforeSlide={(newIndex) => {
              setActiveSlideIndex(newIndex);
            }}
          />
        </div>
        <div className='hidden md:flex'>
          <ImageGallery
            items={mediumScreen}
            additionalClass='w-full'
            infinite={true}
            autoPlay={true}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            onSlide={(index) => {
              handleSlide(index);
            }}
            onBeforeSlide={(newIndex) => {
              setActiveSlideIndex(newIndex);
            }}
          />
        </div>
        <div className='absolute mt-5 transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/3 md:ml-36 ml-9 '>
          <p
            className={`${fontSize} ${activeSlideIndex === 0 && 'animate-right-to-left'} text-primary-hight-light font-raleway font-bold ${
              activeSlideIndex === 0 ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-300`}
          >
            Mulberry International Preschool, Cambodia
          </p>
        </div>

        <div className='absolute mt-5 transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/3 md:ml-36 ml-9 '>
          <h2
            className={`${fontSize} text-primary-hight-light font-raleway font-bold  ${
              activeSlideIndex === 1 ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-300`}
          >
            Equip your child with intelligent thinking skills
          </h2>
          <div className='flex flex-col items-baseline'>
            <Link
              href={'#'}
              className={`underline md:text-[26px] font-raleway font-bold text-gray-500 ${
                activeSlideIndex === 1 ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-300`}
            >
              Secure exclusive
            </Link>
            <Link
              href={'#'}
              className={`underline md:text-[26px] font-raleway font-bold text-gray-500 ${
                activeSlideIndex === 1 ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-300`}
            >
              enrollment promotions!
            </Link>
          </div>
        </div>

        <div className='absolute mt-5 transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/3 md:ml-36 ml-9 '>
          <p
            className={`${fontSize} ${activeSlideIndex === 2 && 'animate-right-to-left'} text-light font-raleway font-bold ${
              activeSlideIndex === 2 ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-300`}
          >
            NURTURING THE FUTURE READY CHILD
          </p>
          <div
            className={` text-primary-hight-light font-raleway font-bold ${
              activeSlideIndex === 2 ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-300`}
          >
            <button
              className={`md:mt-4 md:text-[20px] ${activeSlideIndex === 2 && 'animate-left-to-right'} rounded-full bg-siliver text-white px-10 py-3`}
            >
              ENROLL NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
