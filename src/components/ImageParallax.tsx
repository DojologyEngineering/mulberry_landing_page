'use client';

import { useEffect, useState } from 'react';
import { Parallax } from 'react-parallax';

function getStrengthValue() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 767) {
    return 0;
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
      <Parallax strength={strength} bgImage='/img/children.jpg'>
        <div className='  bg-black bg-opacity-50'>
          <div className='flex items-center justify-center  h-96'>
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
