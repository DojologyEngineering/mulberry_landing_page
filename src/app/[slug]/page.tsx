import NotFoundLocation from '@/app/not-found';

import Image from 'next/image';
import { notFound } from 'next/navigation';

import { FaRegHeart } from 'react-icons/fa';
import { FiEdit3 } from 'react-icons/fi';
import { LiaCalendarCheckSolid } from 'react-icons/lia';

import { BookTour, ButtonBookTour } from '@/components/BookTour';
import { ImagePreview } from '@/components/ImagePreview';
import Map from '@/components/Map';

import { bookTour, locations, promote } from '@/utils/location-util';

import profilePic from '/public/img/curve.webp';
import center from '/public/img/new-img/DSC00300-Edit.jpg';

export const dynamicParams = false;
export async function generateStaticParams() {
  return locations.map((job) => ({
    slug: job.slug,
  }));
}

export default async function Job({ params }: { params: { slug: string } }) {
  const job = locations.find((j) => j.slug === params.slug);

  return (
    <div>
      <div className='relative'>
        <Image
          src={center}
          alt='Picture of the author'
          priority
          className='h-48 md:h-60 w-full object-center'
        />
        <Image
          src={profilePic}
          alt='Picture of the author'
          priority
          className='h-28 w-full absolute bottom-0 left-0'
        />
        <div className='flex justify-center top-10 absolute left-0 right-0'>
          <h1 className='md:text-[40px] text-[18px] font-bold text-white font-raleway bg-primary-light px-4 py-2'>
            Mulberry Learning Centers
          </h1>
        </div>
      </div>
      <div className='px-5'>
        <div className='container mx-auto'>
          {params.slug === 'mulberry-learning-cambodia' && (
            <p className='text-[18px] md:text-[26px] font-bold font-raleway text-primary-main mt-10'>
              Mulberry Learning
              <span className='text-primary-hight-light text-[18px] md:text-[26px]'>
                @ Cambodia
              </span>
            </p>
          )}
        </div>
        <div className='container mx-auto '>
          <p className='text-[15px] md:text-[20px] font-avenir'>
            {job?.location}
          </p>
        </div>
        <div className='container mx-auto '>
          <Image
            src={job?.logo || ''}
            alt='logo'
            priority
            className='h-30 pt-10 object-cover w-full'
          />
          <p className='mt-10 text-secondary font-light font-avenir text-[15px] md:text-[16px]'>
            {job?.description}
          </p>
        </div>
        <div className='container mx-auto mt-2'>
          {job?.feature &&
            job.feature.map((feature) => (
              <div key={feature.title}>
                <p className='text-[24px] md:text-[26px] text-primary-main'>
                  {feature.title}
                </p>

                {feature.featuretype.map((featureType) => (
                  <div key={featureType.title}>
                    <li className='text-base text-[15px] md:text-[16px]'>
                      {featureType.title}
                    </li>
                    <ul className='ml-12'>
                      {featureType.description &&
                        featureType.description.map((description, index) => (
                          <li
                            key={index}
                            className='list-disc text-secondary font-light text-[15px] md:text-[16px]'
                          >
                            {description}
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
        </div>

        <div className='container mx-auto mt-10 mb-10 flex space-x-6 justify-center'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
            <BookTour />

            <div className='relative flex flex-col items-center max-w-md mt-10 md:mt-0'>
              <div className='rounded-full text-primary-hight-light w-36 md:w-20 h-20 border-4 border-primary-hight-light flex items-center justify-center hover:bg-primary-hight-light hover:text-white'>
                <div>
                  <FaRegHeart className='w-10 h-10 ' />
                </div>
              </div>
              <p className='text-primary-hight-light'>Center Promotion</p>
              <p className='mt-5 text-secondary font-light font-avenir text-[15px] md:text-[16px]'>
                {promote}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full bg-primary-light flex justify-center h-20 items-center '>
        <ButtonBookTour />
      </div>
      <div className='bg-white'>
        <ImagePreview />
      </div>

      <div className='min-h-72'>
        <Map />
      </div>
    </div>
  );
}
