'use client';

import { Parallax } from 'react-scroll-parallax';

import Image from 'next/image';

import children1 from '/public/img/children.jpeg';

export default function Test() {
  return (
    <div>
      <Parallax
        speed={50}
        shouldAlwaysCompleteAnimation={true}
        startScroll={10}
      >
        <Image src={children1} alt='partner-logo' className='w-full h-auto' />
        <div className='absolute inset-0 flex items-center justify-center'>
          <h1 className='md:text-[40px] text-[23px] text-white font-avenir font-bold'>
            The first and only preschool to be certified by The Institute for
            Habits of Mind™ from the USA
          </h1>
        </div>
      </Parallax>
    </div>
  );
}
