'use client';

import { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';

function getStrengthValue() {
  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 0;

  if (screenWidth <= 767) {
    return 10;
  } else if (screenWidth >= 768 && screenWidth <= 1023) {
    return 300;
  } else {
    return 600;
  }
}
export default function ImageParallax() {
  const [strength, setStrength] = useState(getStrengthValue());

  useEffect(() => {
    const handleResize = () => {
      setStrength(getStrengthValue());
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Parallax
        strength={strength}
        bgImage='/img/new-img/DSC05776.jpg'
        bgImageStyle={{ height: 'auto', width: '100%' }}
      >
        <div className='bg-black bg-opacity-50'>
          <div className='flex items-center justify-center py-10 px-10 md:py-32'>
            <h1 className='md:text-[30px] text-[23px] text-white font-helvetica font-bold text-center px-4 '>
              The first and only preschool to be certified by The Institute for
              Habits of Mind™ from the USA
            </h1>
          </div>
        </div>
      </Parallax>
    </div>
  );
}
