'use client';

import React, { useEffect, useRef, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { setTimeout } from 'timers/promises';

import Image from 'next/image';
import Link from 'next/link';

import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import { images, mediumScreen, smallScreen } from '@/utils/home-util';

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
  const [isAutoplay, setIsAutoplay] = useState(true);
  const galleryRef = useRef<ReactImageGallery>(null);
  const [userClick, setUserClick] = useState(false);
  useEffect(() => {
    console.log('run');
    if (userClick === true) {
      setInterval(() => {
        setUserClick(false);
      }, 3000);
    }
  }, [userClick]);
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

  // Function to handle autoplay resuming
  const resumeAutoplay = (index: number) => {
    setIsAutoplay(true);
    if (galleryRef.current) {
      galleryRef.current.play();
      setActiveSlideIndex(index);
    }
  };

  const handleNavClick = (index: number) => {
    setIsAutoplay(false);
    setInterval(() => {
      resumeAutoplay(index);
    }, 3000);
  };

  const renderCustomLeftNav = (
    onClick: React.MouseEventHandler<HTMLElement>,
    disabled: boolean,
  ) => (
    <button
      type='button'
      disabled={disabled}
      style={{
        position: 'absolute',
        left: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        border: 'none',
        padding: '10px',
        cursor: 'pointer',
        zIndex: 50,
      }}
      onClick={(e) => {
        console.log('e', e);
        setUserClick(true);
        handleNavClick(activeSlideIndex);
        if (galleryRef.current) {
          galleryRef.current.pause();

          onClick(e);
        }
      }}
    >
      <FaAngleLeft size={30} />
    </button>
  );

  const renderCustomRightNav = (
    onClick: React.MouseEventHandler<HTMLElement>,
    disabled: boolean,
  ) => (
    <button
      type='button'
      disabled={disabled}
      style={{
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        border: 'none',
        padding: '10px',
        cursor: 'pointer',
        zIndex: 50,
      }}
      onClick={(e) => {
        console.log('e', e);
        setUserClick(true);
        handleNavClick(activeSlideIndex);
        if (galleryRef.current) {
          galleryRef.current.pause();
          onClick(e);
        }
      }}
    >
      <FaAngleRight size={30} />
    </button>
  );
  const renderButton = (
    onClick: React.MouseEventHandler<HTMLElement>,
    isPlaying: boolean,
  ) => (
    <button
      style={{
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'rgba(0, 0, 0, 0.5)',
        color: 'white',
        border: 'none',
        padding: '10px',
        cursor: 'pointer',
        zIndex: 50,
      }}
      onClick={(e) => onClick(e)}
    >
      <FaAngleRight size={30} />
    </button>
  );
  const renderCustomItem = (item: {
    original?: string;
    description?: string;
  }) => {
    return (
      <div className='relative w-full overflow-hidden'>
        <Image
          src={item.original || ''}
          alt={item.description || ''}
          className='w-full h-[288px] md:h-[585px]'
          height={800}
          width={800}
        />
        <div className='description'>
          {item.description === 'image1' ? (
            <div className='absolute mt-5 transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/3 w-full pl-28 md:pl-[200px] text-left'>
              <p
                className={`${fontSize} text-primary-hight-light font-raleway font-bold w-full md:pl-0 leading-relaxed`} // Added leading for vertical spacing
                style={{ whiteSpace: 'normal' }}
              >
                Mulberry International Preschool, Cambodia
              </p>
            </div>
          ) : item.description === 'image2' ? (
            <div
              key={1}
              className='absolute mt-5 transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/3 pl-28 md:pl-[320px] w-full text-left'
            >
              <h2
                className={`${fontSize} text-primary-hight-light font-raleway font-bold leading-relaxed`} // Added leading for spacing between lines
                style={{ whiteSpace: 'normal' }}
              >
                Equip your child with intelligent thinking skills
              </h2>
              <div className='flex flex-col items-baseline mt-4'>
                <Link
                  href={'#'}
                  className='underline md:text-[26px] font-raleway font-bold text-gray-500'
                >
                  Secure exclusive
                </Link>
                <Link
                  href={'#'}
                  className='underline md:text-[26px] font-raleway font-bold text-gray-500 mt-7 md:pt-8' // Added margin for vertical spacing
                >
                  enrollment promotions!
                </Link>
              </div>
            </div>
          ) : (
            item.description === 'image3' && (
              <div
                key={2}
                className='absolute mt-5 transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/3 pl-28 md:pl-[320px] w-full text-left'
              >
                <p
                  className={`${fontSize} text-light font-raleway font-bold leading-relaxed `}
                  style={{ whiteSpace: 'normal' }}
                >
                  NURTURING THE FUTURE READY CHILD
                </p>
                <div className='text-primary-hight-light font-raleway font-bold mt-4'>
                  <button className='md:mt-4 md:text-[20px] rounded-full bg-siliver text-white px-10 py-5'>
                    ENROLL NOW
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    );
  };

  return (
    <div className='relative w-full overflow-hidden'>
      <div className='flex md:hidden'>
        <ImageGallery
          ref={galleryRef}
          items={smallScreen}
          renderItem={(item) => renderCustomItem(item)}
          infinite={true}
          autoPlay={isAutoplay}
          slideDuration={400}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          // renderLeftNav={renderCustomLeftNav}
          // renderRightNav={renderCustomRightNav}
          onSlide={(i) => {
            switch (smallScreen[i].original) {
              case '/img/campussmallscreen.jpg':
                setActiveSlideIndex(0);
                break;
              case '/img/homeslide3.webp':
                setActiveSlideIndex(1);
                break;
              case '/img/homeslide4.webp':
                setActiveSlideIndex(2);
                break;
              default:
            }
          }}
        />
      </div>
      <div className='hidden md:flex'>
        <ImageGallery
          ref={galleryRef}
          items={mediumScreen}
          renderItem={(item) => renderCustomItem(item)}
          additionalClass='w-full'
          infinite={true}
          autoPlay={isAutoplay}
          slideDuration={400}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          onSlide={(i) => {
            switch (smallScreen[i].original) {
              case '/img/campussmallscreen.jpg':
                setActiveSlideIndex(0);
                break;
              case '/img/homeslide3.webp':
                setActiveSlideIndex(1);
                break;
              case '/img/homeslide4.webp':
                setActiveSlideIndex(2);
                break;
              default:
            }
          }}
          // renderLeftNav={renderCustomLeftNav}
          // renderRightNav={renderCustomRightNav}
        />
      </div>

      {/* {activeSlideIndex === 0 && (
        <div
          key={0}
          className='absolute mt-5 transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/3 md:ml-36 ml-9'
        >
          <p
            className={`${fontSize} text-primary-hight-light font-raleway font-bold `}
          >
            Mulberry International Preschool, Cambodia
          </p>
        </div>
      )}
      {activeSlideIndex === 1 && (
        <div
          key={1}
          className='absolute mt-5 transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/3 md:ml-36 ml-9'
        >
          <h2
            className={`${fontSize} text-primary-hight-light font-raleway font-bold`}
          >
            Equip your child with intelligent thinking skills
          </h2>
          <div className='flex flex-col items-baseline'>
            <Link
              href={'#'}
              className='underline md:text-[26px] font-raleway font-bold text-gray-500'
            >
              Secure exclusive
            </Link>
            <Link
              href={'#'}
              className='underline md:text-[26px] font-raleway font-bold text-gray-500'
            >
              enrollment promotions!
            </Link>
          </div>
        </div>
      )}
      {activeSlideIndex === 2 && (
        <div
          key={2}
          className='absolute mt-5 transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/3 md:ml-36 ml-9'
        >
          <p className={`${fontSize} text-light font-raleway font-bold`}>
            NURTURING THE FUTURE READY CHILD
          </p>
          <div className='text-primary-hight-light font-raleway font-bold'>
            <button className='md:mt-4 md:text-[20px] rounded-full bg-siliver text-white px-10 py-3'>
              ENROLL NOW
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};
