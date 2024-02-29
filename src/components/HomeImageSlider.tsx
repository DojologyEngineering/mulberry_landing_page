import React from 'react';

import Image from 'next/image';

import { HomePreview } from './ImagePreview';
import profilePic from '/public/img/curve.webp';

function HomeImageSlider() {
  return (
    <div className='relative'>
      <div className='flex justify-center relative w-full'>
        <HomePreview />
      </div>
      <div className='md:h-36 flex items-center w-full mt-2 absolute  z-20 bottom-0'>
        <Image
          src={profilePic}
          alt='Profile picture overlay'
          priority
          className='h-30 w-full'
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}

export default HomeImageSlider;
