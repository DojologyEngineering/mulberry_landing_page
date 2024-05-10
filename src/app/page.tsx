import Image from 'next/image';

import HomeCard from '@/components/HomeCard';
import HomeImageSlider from '@/components/HomeImageSlider';
import LocationCard from '@/components/LocationCard';

import { centerHighlight, homeBlog, learnEdge } from '@/utils/home-util';

import ImageParallax from '../components/ImageParallax';
import partner2 from '/public/img/partner1.webp';
import partner1 from '/public/img/partner2.webp';

export default function Home() {
  return (
    <div>
      <HomeImageSlider />
      <div className='px-4 '>
        <div className='container mx-auto flex justify-center flex-col items-center'>
          <p className='md:text-[40px] text-[24px] mt-10 font-raleway font-bold text-primary-main'>
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
          <p className='md:text-[40px] text-[24px]  font-raleway font-bold text-primary-main'>
            Partner Awards
          </p>
          <div className='w-[200px] h-[2px] bg-grey-primary mt-5'></div>
        </div>
        <div className='container mx-auto'>
          <section className='flex flex-col md:flex-row mt-10'>
            <Image src={partner1} alt='partner-logo' className='w-full' />
            <Image src={partner2} alt='partner-logo' className='w-full' />
          </section>
        </div>
      </div>
      <ImageParallax />
      <div className='flex justify-center flex-col items-center bg-primary-hight-light md:h-40 h-24'>
        <p className='md:text-[40px] text-[23px] font-raleway font-bold text-white'>
          The Mulberry Learning Edge
        </p>
        <div className='w-[200px] h-[2px] bg-grey-primary mt-5'></div>
      </div>
      <div className='container mx-auto px-4'>
        <section className='md:flex block items-center justify-around mt-10'>
          {learnEdge.map((i) => {
            return (
              <div key={i.id}>
                <div className='flex flex-col items-center justify-center'>
                  <i.logo size={52} className='text-primary-hight-light' />
                  <p className='text-[26px] font-raleway font-bold'>
                    {i.title}
                  </p>
                  <div className='md:px-10 px-0'>
                    <p className='text-[16px] md:text-[20px] font-avenir font-light text-center'>
                      {i.desc}
                    </p>
                  </div>
                  <button className='mt-4 mb-4 text-[18px] py-1 text-primary-hight-light px-5 border border-primary-hight-light font-avenir font-light rounded-full'>
                    Learn more
                  </button>
                </div>
              </div>
            );
          })}
        </section>
      </div>
      <div className=' flex justify-center flex-col items-center md:h-40 h-24'>
        <p className='md:text-[40px] text-[23px] font-raleway font-bold text-primary-main'>
          Center Highlights
        </p>
        <div className='w-[200px] h-[2px] bg-grey-primary mt-5'></div>
      </div>
      <div className='container mx-auto mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 px-4 justify-stretch'>
        {centerHighlight.map((location) => (
          <LocationCard
            url={location.value}
            key={location.id}
            id={location.id}
            logo={location.logo}
            nameLocation={location.nameLocation}
            locationDetail={location.locationDetail}
          />
        ))}
      </div>
    </div>
  );
}
