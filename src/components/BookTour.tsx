'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import { LiaCalendarCheckSolid } from 'react-icons/lia';

import { bookTour } from '@/utils/location-util';

function BookTour() {
  return (
    <div>
      <div className='flex justify-start'>
        <div className='relative flex flex-col items-center max-w-md justify-end'>
          <div
            onClick={() => {
              window.open(
                'https://form.jotform.com/srunrotha614/testing',
                '_blank',
              );
            }}
            className='rounded-full text-primary-hight-light w-36 md:w-20 h-20 border-4 border-primary-hight-light flex items-center justify-center hover:bg-primary-hight-light hover:text-white hover:cursor-pointer'
          >
            <div>
              <LiaCalendarCheckSolid className='w-10 h-10 ' />
            </div>
          </div>
          <p className='text-primary-hight-light'> Book a School Tour</p>
          <p className='mt-5 text-secondary font-light font-avenir text-[15px] md:text-[16px]'>
            {bookTour}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BookTour;
