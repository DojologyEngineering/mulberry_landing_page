import React from 'react';

import Image, { StaticImageData } from 'next/image';

interface Iprops {
  textCover1: string;
  textCover2?: string;
  img: StaticImageData;
  imgReponsive: StaticImageData;
}

function ImageBanner({ img, textCover1, imgReponsive, textCover2 }: Iprops) {
  return (
    <div className='relative flex justify-center items-center'>
      <Image
        src={img}
        alt='logo'
        priority
        className='w-full h-[140px] sm:h-[250px] sm:block hidden object-cover'
      />
      <Image
        src={imgReponsive}
        alt='logo'
        priority
        className='w-full max-h-[140px] sm:h-auto sm:hidden object-cover'
      />
      <span className='absolute  md:left-[25%]   sm:whitespace-nowrap lg:mr-[320px] text-[18px] sm:text-[26px] lg:text-[40px] font-raleway font-bold px-1 sm:px-5 text-white bg-primary-main text-start lg:mb-[40px] sm:mb-[40px]'>
        {textCover1}
      </span>
      <span className='absolute   md:left-[25%]   sm:whitespace-nowrap lg:mr-[320px] text-[18px] sm:text-[26px] lg:text-[40px] font-raleway font-bold px-1 sm:px-5 text-white bg-primary-main text-start lg:mt-[90px] sm:mt-[50px] mt-[60px]'>
        {textCover2}
      </span>
    </div>
  );
}

export default ImageBanner;
