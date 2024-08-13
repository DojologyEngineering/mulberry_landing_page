'use client';

import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import Link from 'next/link';

import { images, mediumScreen, smallScreen } from '@/utils/home-util';

import image1 from '/public/img/image1.webp';

export const ImagePreview = () => {
  return (
    <div className='container w-full mx-auto mt-10 mb-10'>
      <ImageGallery
        items={images}
        infinite={false}
        additionalClass='bg-white'
      />
    </div>
  );
};
export const HomePreview = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
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
            slideDuration={400}
            // showIndex
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            onSlide={(index) => {
              setActiveSlideIndex(index);
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
            // autoPlay={true}
            showThumbnails={false}
            // showIndex
            slideDuration={400}
            showFullscreenButton={false}
            showPlayButton={false}
            onSlide={(index) => {
              setActiveSlideIndex(index);
            }}
            onBeforeSlide={(newIndex) => {
              setActiveSlideIndex(newIndex);
            }}
          />
        </div>

        {activeSlideIndex === 0 && (
          <div className='absolute mt-5 transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/3 md:ml-36 ml-9 '>
            <p
              className={`${fontSize} text-primary-hight-light font-raleway font-bold animate-left-to-right`}
            >
              Mulberry International Preschool, Cambodia
            </p>
          </div>
        )}
        {activeSlideIndex === 1 && (
          <div className='absolute mt-5 transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/3 md:ml-36 ml-9 '>
            <h2
              className={`${fontSize} text-primary-hight-light font-raleway font-bold animate-left-to-right opacity-100 transition-opacity duration-300`}
            >
              Equip your child with intelligent thinking skills
            </h2>
            <div className='flex flex-col items-baseline animate-right-to-left opacity-100 transition-opacity duration-300'>
              <Link
                href={'#'}
                className={`underline md:text-[26px] font-raleway font-bold text-gray-500 `}
              >
                Secure exclusive
              </Link>
              <Link
                href={'#'}
                className={`underline md:text-[26px] font-raleway font-bold text-gray-500 `}
              >
                enrollment promotions!
              </Link>
            </div>
          </div>
        )}
        {activeSlideIndex === 2 && (
          <div className='absolute mt-5 transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/3 md:ml-36 ml-9 '>
            <p
              className={`${fontSize} animate-right-to-left opacity-100 transition-opacity duration-300 text-light font-raleway font-bold `}
            >
              NURTURING THE FUTURE READY CHILD
            </p>
            <div
              className={`text-primary-hight-light font-raleway font-bold animate-left-to-right opacity-100 transition-opacity duration-300`}
            >
              <button
                className={`md:mt-4 md:text-[20px] rounded-full bg-siliver text-white px-10 py-3`}
              >
                ENROLL NOW
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
