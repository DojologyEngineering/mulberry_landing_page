import { getJobs } from '@/app/db/data-store';
import { GoogleMap, Marker } from '@react-google-maps/api';

import Image from 'next/image';
import Link from 'next/link';

import { FaRegHeart } from 'react-icons/fa';
import { FiEdit3 } from 'react-icons/fi';
import { LiaCalendarCheckSolid } from 'react-icons/lia';

import Map from '@/components/Map';

import { bookTour, promote } from '@/utils/location-util';

import center from '/public/img/center.webp';
import profilePic from '/public/img/curve.webp';

export async function generateStaticParams() {
  const jobs = await getJobs();
  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

export default async function Job({ params }: { params: { slug: string } }) {
  const [job] = await getJobs(params.slug);

  return (
    <div>
      <div className='relative'>
        <Image
          src={center}
          alt='Picture of the author'
          priority
          className='h-60 w-full'
        />
        <Image
          src={profilePic}
          alt='Picture of the author'
          priority
          className='h-28 w-full absolute bottom-0 left-0'
        />
        <div className='flex justify-center top-10 absolute left-0 right-0'>
          <h1 className='md:text-4xl text-xl font-bold text-white font-avenir bg-primary-light px-4 py-2'>
            Mulberry Learning Centers
          </h1>
        </div>
      </div>
      <div className='container mx-auto'>
        {params.slug === 'mulberry-learning-greenhills' ? (
          <h1 className='md:text-4xl text-xl font-bold font-avenir text-primary-main mt-10'>
            Mulberry Learning
            <span className='text-primary-hight-light'> @ Greenhills</span>
          </h1>
        ) : (
          <h1 className='md:text-4xl text-xl font-bold font-avenir text-primary-main mt-10'>
            Mulberry Learning
            <span className='text-primary-hight-light'> @ BGC</span>
          </h1>
        )}
      </div>
      <div className='container mx-auto'>
        <p className='text-xl'>{job.location}</p>
      </div>
      <div className='container mx-auto '>
        <Image src={job.logo} alt='logo' priority className='h-30 pt-10 ' />
        <p className='mt-10'>{job.description}</p>
      </div>
      <div className='container mx-auto mt-2'>
        {job.feature &&
          job.feature.map((feature) => (
            <div key={feature.title}>
              <p className='text-[26px]'>{feature.title}</p>

              {feature.featuretype.map((featureType) => (
                <div key={featureType.title}>
                  <li className='text-base'>{featureType.title}</li>
                  <ul className='ml-12'>
                    {featureType.description &&
                      featureType.description.map((description, index) => (
                        <li key={index} className='list-disc'>
                          {description}
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
      </div>

      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 '>
          <div className='relative flex flex-col items-center'>
            <div className='rounded-full text-primary-hight-light w-20 h-20 border-4 border-primary-hight-light flex items-center justify-center hover:bg-primary-hight-light hover:text-white'>
              <div>
                <LiaCalendarCheckSolid className='w-10 h-10 ' />
              </div>
            </div>
            <p className='text-primary-hight-light'> Book a School Tour</p>
            <p>{bookTour}</p>
          </div>

          <div className='relative flex flex-col items-center'>
            <div className='rounded-full text-primary-hight-light w-20 h-20 border-4 border-primary-hight-light flex items-center justify-center hover:bg-primary-hight-light hover:text-white'>
              <div>
                <FaRegHeart className='w-10 h-10 ' />
              </div>
            </div>
            <p className='text-primary-hight-light'>Center Promotion</p>
            <p>{promote}</p>
          </div>
        </div>
      </div>
      <div className='w-full bg-primary-light flex justify-center h-20 items-center '>
        <button className='flex items-center justify-center min-w-96 font-patrick h-12 px-3 text-white transition duration-150 bg-primary-light hover:bg-primary-hight-light rounded-full border-2'>
          <div className='flex text-xl hover:text-3xl w-full items-center justify-center'>
            <span>Book a School Tour</span>
            <FiEdit3 className='ml-2' size={24} />
          </div>
        </button>
      </div>
      <div className='min-h-72'>
        <Map />
      </div>
    </div>
  );
}
