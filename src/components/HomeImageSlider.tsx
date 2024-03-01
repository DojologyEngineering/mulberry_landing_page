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
      <div className='flex items-center w-full absolute bottom-0'>
        <Image
          src={profilePic}
          alt='Profile picture overlay'
          priority
          className='md:h-36 h-36 w-full'
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}

export default HomeImageSlider;
