import { CardData } from '@/app/(news-events)/latest-news/page';
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { GoDotFill } from 'react-icons/go';

function NewsCard() {
  return (
    <>
      {CardData.map((item) => (
        <div
          key={item.description}
          className='sm:max-w-[292px] max-w-[350px] bg-white border border-gray-200'
        >
          <Link href={`/post/${item.route}`}>
            <Image
              className='sm:aspect-[292/219] w-[350px]'
              src={item.img}
              alt='CardImg'
            />
          </Link>

          <div className='p-5'>
            <div className='flex flex-row align-middle gap-3'>
              <div>
                <Image
                  className='rounded-full h-[32px] w-[32px]'
                  src={item.profileImg}
                  alt='CardImgProfile'
                />
              </div>
              <div className='flex flex-col align-middle'>
                <p className='font-helvetica text-xs'>{item.tittle}</p>
                <p className='font-helvetica text-xs flex '>
                  {item.date}
                  <span className='px-2 '>
                    <GoDotFill
                      size={4}
                      className='mt-[5px] flex sm:hidden md:flex'
                    />
                  </span>
                  {item.status}
                </p>
              </div>
            </div>
            <div className='pt-2'>
              <Link
                href={`/post/${item.route}`}
                className='font-helvetica font-extrabold text-lg leading-normal hover:text-primary-hight-light transition-colors duration-300 ease-in-out'
              >
                {item.description}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default NewsCard;
