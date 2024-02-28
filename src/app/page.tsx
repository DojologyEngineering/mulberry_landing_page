import { ParallaxBanner } from 'react-scroll-parallax';

import Image from 'next/image';

import HomeCard from '@/components/HomeCard';
import ParallelImage from '@/components/ParallelImage';

import { homeBlog } from '@/utils/home-util';

import Test from './test';
import partner2 from '/public/img/partner1.webp';
import partner1 from '/public/img/partner2.webp';

export default function Home() {
  return (
    <div className='px-4'>
      <div className='container mx-auto flex justify-center flex-col items-center'>
        <p className='text-[40px] font-raleway font-bold text-primary-main'>
          WHAT&apos;S NEW
        </p>
        <div className='w-[200px] h-[2px] bg-grey-primary mt-5'></div>
      </div>
      <div className='container mx-auto mt-10 md:flex sm:block justify-evenly'>
        {homeBlog.map((location) => (
          <HomeCard
            url={location.value}
            key={location.id}
            id={location.id}
            logo={location.img}
            locationDetail={location.title}
          />
        ))}
      </div>
      <div className='container mx-auto flex justify-center flex-col items-center'>
        <p className='text-[40px] font-raleway font-bold text-primary-main'>
          Partner Awards
        </p>
        <div className='w-[200px] h-[2px] bg-grey-primary mt-5'></div>
      </div>
      <section className='flex flex-col md:flex-row'>
        <Image src={partner1} alt='partner-logo' className='w-full' />
        <Image src={partner2} alt='partner-logo' className='w-full' />
      </section>
      <Test />
    </div>
  );
}
