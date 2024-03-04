'use client';

import React from 'react';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

import partner2 from '/public/img/partner1.webp';

function ParallelImage() {
  return (
    <div>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[{ image: '/public/img/color-line.jpg', speed: -20 }]}
          className='aspect-[2/1]'
        >
          <div className='absolute inset-0 flex items-center justify-center'>
            <h1 className='text-8xl text-black font-thin'>Hello World!</h1>
          </div>
        </ParallaxBanner>
      </ParallaxProvider>
    </div>
  );
}

export default ParallelImage;
