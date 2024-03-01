'use client';

import React from 'react';

import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

interface LocationCardProps {
  id: number;
  logo: StaticImageData | string;
  locationDetail: string;
  url: string;
}

const HomeCard: React.FC<LocationCardProps> = ({
  id,
  logo,
  locationDetail,
  url,
}) => {
  const navigate = useRouter();
  return (
    <div
      onClick={() => {
        navigate.push(`${url}`);
      }}
      key={id}
      className='mb-10 flex items-center flex-col border border-solid
       border-gray-300 sm:w-60 md:w-72 max-w-xl 
       min-h-[300px] hover:cursor-pointer'
    >
      <Image src={logo} alt='image' className='w-full h-64 object-cover' />
      <span className='pt-5 pb-2 mb-5 text-center font-raleway font-bold text-[16px]  px-3'>
        {locationDetail}
      </span>
    </div>
  );
};

export default HomeCard;
