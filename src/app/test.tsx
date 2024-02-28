'use client';

import { Parallax } from 'react-scroll-parallax';

import Image from 'next/image';

import children1 from '/public/img/children.jpeg';

export default function Test() {
  return (
    <Parallax speed={50}>
      <Image src={children1} alt='partner-logo' className='w-full h-auto' />
      <div className='absolute inset-0 flex items-center justify-center'>
        <h1 className='text-8xl text-black font-thin'>Hello World!</h1>
      </div>
    </Parallax>
  );
}
