// LocationCard.tsx
'use client';

import React from 'react';

import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

// LocationCard.tsx

// LocationCard.tsx

// LocationCard.tsx

// LocationCard.tsx

// LocationCard.tsx

// LocationCard.tsx

// LocationCard.tsx

// LocationCard.tsx

// LocationCard.tsx

// LocationCard.tsx

interface LocationCardProps {
  id: number;
  logo: StaticImageData | string;
  nameLocation: string;
  locationDetail: string;
  url: string;
}

const LocationCard: React.FC<LocationCardProps> = ({
  id,
  logo,
  nameLocation,
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
       border-gray-300 
        hover:cursor-pointer'
    >
      <Image src={logo} alt='image' className='w-full h-auto object-cover' />
      <span className='font-bold mt-10 mb-5 font-avenir text-center'>
        {nameLocation}
      </span>
      <span className='pt-2 px-3 pb-2 mb-10 text-center font-avenir text-[14px] font-light'>
        {locationDetail}
      </span>
    </div>
  );
};

export default LocationCard;
