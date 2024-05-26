import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { FaStar } from 'react-icons/fa';

import FirstCurriculum from '../../../../public/img/FirstCurriculum.webp';
import FourthCurriculum from '../../../../public/img/FourthCurriculum.webp';
import SecondCurriculum from '../../../../public/img/SecondCurriculum.webp';
import ThirdCurriculum from '../../../../public/img/ThirdCurriculum.webp';
import Gallery from '../../../../public/img/gallery.png';
import CurriculumBanner from '../../../../public/img/new-img/DSC05803.jpg';

const textCover = 'Our Programs';

const description = {
  desArr: [
    {
      des: 'Find out more about our signature programs which promises a fun and engaging learning experience like no other. ',
    },
    {
      des: 'Every child will receive a comprehensive and holistic education that helps them excel in the future world. ',
    },
  ],
  icon: FaStar,
};
export const metadata = {
  title: 'Curriculum | Mulberry Learning Cambodia',
};

const dataCurriculum = {
  headTitle: 'Highlights of the curriculum model',
  first: {
    tittle: 'Habits of Mind',
    des: 'The child develops intelligent thinking and behavioral dispositions through the Habits of Mind™',
    img: FirstCurriculum,
  },
  second: {
    tittle1: 'Literacy and',
    tittle2: 'Numeracy',
    des: 'The child develops intelligent thinking and behavioral dispositions through the Habits of Mind™',
    img: SecondCurriculum,
  },
  third: {
    tittle: 'Project Inquiry',
    des: 'The child develops intelligent thinking and behavioral dispositions through the Habits of Mind™',
    img: ThirdCurriculum,
  },
  forth: {
    tittle1: 'S.T.E.A.M',
    tittle2: 'Enrichment',
    des: 'The child develops intelligent thinking and behavioral dispositions through the Habits of Mind™',
    img: FourthCurriculum,
  },
};

function Curriculum() {
  return (
    <main>
      <div className='flex justify-center align-middle flex-col'>
        <div
          className='relative'
          style={{ width: '100%', paddingBottom: '18%' }}
        >
          <Image
            src={CurriculumBanner}
            alt='logo'
            priority
            layout='fill'
            objectFit='cover'
          />
          <span className='absolute  top-[40%] left-[18%]  sm:whitespace-nowrap lg:mr-[320px] text-[18px] sm:text-[26px] lg:text-[40px] font-raleway font-bold px-1 sm:px-5 text-white bg-primary-main text-start'>
            {textCover}
          </span>
        </div>

        <Image
          src={Gallery}
          alt='logo'
          priority
          className='max-h-[120px] w-full relative lg:bottom-6 md:bottom-10 sm:bottom-6 bottom-2'
        />

        <section className='flex flex-col gap-5 justify-center items-center py-16 mt-[-48px] bg-grey-light'>
          <div className='flex flex-row gap-5'>
            <span>
              <description.icon
                size={42}
                className='text-primary-hight-light'
              />
            </span>
            <div className='flex flex-col'>
              {description.desArr.map((item, index) => (
                <div key={index}>
                  <p className='text-base font-light font-avenir'>
                    {item?.des}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className='flex flex-col gap-5 justify-center align-middle max-w-[990px] mx-auto px-[20px] pt-10 relative'>
          <h3 className='text-[26px]  font-bold text-primary-hight-light font-raleway'>
            {dataCurriculum?.headTitle}
          </h3>
        </section>

        <div className='grid md:grid-cols-4 grid-cols-1  align-middle justify-center pt-10'>
          <Link href='/habits-of-mind'>
            <div className='relative flex flex-col gap-5'>
              <Image
                src={dataCurriculum.first.img}
                alt='logo'
                priority
                className='h-[768px] w-full object-cover'
              />
              <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-primary-light sm:whitespace-nowrap lg:mr-[320px] text-[18px] sm:text-[26px] lg:text-[28px] font-raleway font-bold px-4'>
                {dataCurriculum.first.tittle}
              </span>
              <span className='absolute top-[75%] left-1/2 transform -translate-x-1/2 text-white font-avenir font-light text-center'>
                <p>{dataCurriculum.first.des}</p>
              </span>
            </div>
          </Link>
          <Link href='/literacy-and-numeracy'>
            <div className='relative'>
              <Image
                src={dataCurriculum.second.img}
                alt='logo'
                priority
                className='h-[768px] w-full object-cover'
              />
              <span className='absolute top-[44%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-primary-lighter sm:whitespace-nowrap lg:mr-[320px] text-[18px] sm:text-[26px] lg:text-[28px] font-raleway font-bold px-4'>
                {dataCurriculum.second.tittle1}
              </span>

              <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-primary-lighter sm:whitespace-nowrap lg:mr-[320px] text-[18px] sm:text-[26px] lg:text-[28px] font-raleway font-bold px-4'>
                {dataCurriculum.second.tittle2}
              </span>
              <span className='absolute top-[75%] left-1/2 transform -translate-x-1/2 text-white font-avenir font-light text-center'>
                <p>{dataCurriculum.first.des}</p>
              </span>
            </div>
          </Link>
          <Link href='/project-inquiry'>
            <div className='relative'>
              <Image
                src={dataCurriculum.third.img}
                alt='logo'
                priority
                className='h-[768px] w-full object-cover'
              />
              <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-primary-light sm:whitespace-nowrap lg:mr-[320px] text-[18px] sm:text-[26px] lg:text-[28px] font-raleway font-bold px-4'>
                {dataCurriculum.third.tittle}
              </span>
              <span className='absolute top-[75%] left-1/2 transform -translate-x-1/2 text-white font-avenir font-light text-center'>
                <p>{dataCurriculum.first.des}</p>
              </span>
            </div>
          </Link>
          <Link href='/steam-enrichment'>
            <div className='relative'>
              <Image
                src={dataCurriculum.forth.img}
                alt='logo'
                priority
                className='h-[768px] w-full object-cover'
              />
              <span className='absolute top-[44%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-primary-lighter sm:whitespace-nowrap lg:mr-[320px] text-[18px] sm:text-[26px] lg:text-[28px] font-raleway font-bold px-4'>
                {dataCurriculum.forth.tittle1}
              </span>

              <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-primary-lighter sm:whitespace-nowrap lg:mr-[320px] text-[18px] sm:text-[26px] lg:text-[28px] font-raleway font-bold px-4'>
                {dataCurriculum.forth.tittle2}
              </span>
              <span className='absolute top-[75%] left-1/2 transform -translate-x-1/2 text-white font-avenir font-light text-center'>
                <p>{dataCurriculum.first.des}</p>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Curriculum;
