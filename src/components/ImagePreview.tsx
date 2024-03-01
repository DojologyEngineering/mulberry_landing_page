'use client';

import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';

import Link from 'next/link';

import image1 from '/public/img/image1.webp';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];
const mediumScreen = [
  {
    original:
      'https://static.wixstatic.com/media/449222_9d8c114a94c74d8cb49df0c610df1cbd~mv2.jpg/v1/fill/w_2210,h_700,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/449222_9d8c114a94c74d8cb49df0c610df1cbd~mv2.jpg',
  },
  {
    original:
      'https://static.wixstatic.com/media/449222_b07e4b31a3704d9ab2c691ba2b43d635~mv2.jpg/v1/fill/w_2210,h_700,al_r,q_85,enc_auto/449222_b07e4b31a3704d9ab2c691ba2b43d635~mv2.jpg',
  },
];
const smallScreen = [
  {
    original:
      'https://static.wixstatic.com/media/449222_9d8c114a94c74d8cb49df0c610df1cbd~mv2.jpg/v1/fill/w_2210,h_1500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/449222_9d8c114a94c74d8cb49df0c610df1cbd~mv2.jpg',
  },
  {
    original:
      'https://static.wixstatic.com/media/449222_b07e4b31a3704d9ab2c691ba2b43d635~mv2.jpg/v1/fill/w_2210,h_1500,al_r,q_85,enc_auto/449222_b07e4b31a3704d9ab2c691ba2b43d635~mv2.jpg',
  },
];

export const ImagePreview = () => {
  return (
    <div className='container mx-auto w-fit mt-10 mb-10'>
      <ImageGallery items={images} infinite={false} />
    </div>
  );
};
export const HomePreview = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlide = (index: number) => {
    setActiveSlideIndex(index);
  };
  function getScreenSize() {
    return window.innerWidth <= 768 ? 'small' : 'medium';
  }

  // Determine the images based on screen size
  const images = getScreenSize() === 'small' ? smallScreen : mediumScreen;
  return (
    <>
      <div className='relative w-full'>
        <ImageGallery
          items={images}
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
        <div className='absolute top-1/3 left-1/3 pl-9 transform -translate-x-1/2 -translate-y-1/2 '>
          <p
            className={`text-primary-hight-light font-raleway text-[26px] font-bold  ${
              activeSlideIndex === 0 ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-300`}
          >
            Equip your child with intelligent thinking skills
          </p>
          <div className='flex flex-col items-baseline'>
            <Link
              href={'#'}
              className={`underline font-raleway font-bold text-gray-500 ${
                activeSlideIndex === 0 ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-300`}
            >
              Secure exclusive
            </Link>
            <Link
              href={'#'}
              className={`underline font-raleway font-bold text-gray-500 ${
                activeSlideIndex === 0 ? 'opacity-100' : 'opacity-0'
              } transition-opacity duration-300`}
            >
              enrollment promotions!
            </Link>
          </div>
        </div>

        <div className='absolute top-1/3 left-1/3 pl-9 transform -translate-x-1/2 -translate-y-1/2 '>
          <p
            className={`${activeSlideIndex === 1 && 'animate-right-to-left'} text-light font-raleway text-[26px] font-bold ${
              activeSlideIndex === 1 ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-300`}
          >
            NURTURING THE FUTURE READY CHILD
          </p>
          <div
            className={` text-primary-hight-light font-raleway font-bold ${
              activeSlideIndex === 1 ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-300`}
          >
            <button
              className={`${activeSlideIndex === 1 && 'animate-left-to-right'} rounded-full bg-primary-hight-light text-white px-3`}
            >
              ENROLL NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
