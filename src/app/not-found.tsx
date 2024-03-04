import React from 'react';

import Image from 'next/image';

import BackHomeButton from '@/components/BackHomeButton';

import partner1 from '/public/img/notFound.png';

function NotFoundLocation() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: 'calc(100vh - 180px)',
        background: 'white',
        color: 'black',
      }}
    >
      <div className='flex flex-col justify-start'>
        <Image src={partner1} alt='partner-logo' width={300} height={300} />
        <p className='text-[66px]  font-avenir font-light text-skyblue-main'>
          PAGE NOT FOUND
        </p>
        <p className='text-[20px] text-secondary font-avenir font-light'>
          We looked everywhere for this page.
        </p>
        <p className='text-[20px] text-secondary font-avenir font-light'>
          Are you sure the website URL is correct?
        </p>
        <p className='text-[20px] text-secondary font-avenir font-light'>
          Get in touch with the site owner.
        </p>
        <BackHomeButton />
      </div>
    </div>
  );
}

export default NotFoundLocation;
