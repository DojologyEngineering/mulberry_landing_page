import React from 'react';

import Image from 'next/image';

import ImageBanner from '@/components/ImageBanner';

import Girl from '../../../../public/img/Girl.webp';
import Kid from '../../../../public/img/Kid.webp';
import LANBanner from '../../../../public/img/LNNbanner.webp';
import Gallery from '../../../../public/img/gallery.png';
import { AwardWinning } from '../habits-of-mind/page';

export const metadata = {
  title: 'Literacy and Numeracy | Mulberry Learning Cambodia',
};
const textCover1 = 'Literacy and Numeracy';

const headData = {
  headTittle:
    'Literacy and numeracy skills are crucial aspects of communication and are important for successful learning. The foundations for these competencies are established in a child’s formative years.',
  des: 'Literacy and Numeracy are among the most important information-processing skills necessary in the development of children. Modern life becomes practically impossible without these competencies. Obtaining a good level of literacy and numeracy lays the basis for preschoolers’ successful participation in their Primary years, and in the long run, their career prospects in an increasingly technological world and for their life as informed and reflective citizens.',
};

const midData = {
  img: Girl,
  desArr: [
    {
      tittle: 'Literacy',
      des: 'Does your child know how to read and write? Is he or she able to interpret both English and Chinese literature effectively?',
      subDesArr: [
        {
          subDdes:
            'The demands of literacy have increased and to be successful in today’s world, preschoolers will not only need to be effectively bilingual, they also need to go beyond reading and writing to understand, evaluate and engage in written texts.',
        },
        {
          subDdes:
            'Effectively bilingual children gain exposure to new cultural horizons and will have a wide variety of new perspectives as they engage with more than one language. Not only will they acquire the knowledge of how to speak and write in both English and Chinese, the ability to toggle two languages also require more cognitive resources. This enables them to nurture other essential skills such as logical reasoning, flexible problem solving, and the ability to multi-task in an increasingly Volatile, Uncertain, Complex, and Ambiguous (V.U.C.A) world.',
        },
      ],
    },
    {
      tittle: 'Numeracy',
      des: 'Data Analysts, Computer Scientists, Statisticians, Accountants, and Engineers; what do these top jobs in today’s world have in common? All of them require a high level of numeracy and mathematical skills.',
      subDesArr: [
        {
          subDdes:
            'In our highly technological world, data and machine learning are the driving forces of our economy. From technological companies to food and beverage sectors, the demand for employees with numeracy and mathematical competencies is soaring.',
        },
        {
          subDdes:
            'Learning how to count and the ability to recognise patterns are just budding indicators of your little ones’ interest in the world of numbers. Numeracy is essential for preschoolers to develop logical thinking and establish critical reasoning strategies, enabling them to make sense of numbers, patterns, shapes, time, and everyday activities like reading instructions and playing sport.',
        },
      ],
    },
  ],
};

function LiteracyAndNumeracy() {
  return (
    <main>
      <div className='flex justify-center align-middle flex-col'>
        {/* <div
          className='relative'
          style={{ width: '100%', paddingBottom: '20.59%' }}
        >
          <Image
            src={LANBanner}
            alt='logo'
            priority
            fill
            className='object-cover'
          />
          <span className='absolute top-1/2 left-[38%] transform -translate-x-1/2 -translate-y-1/2 sm:whitespace-nowrap lg:mr-[320px] text-[16px] sm:text-[26px] lg:text-[40px] font-raleway font-bold px-1 sm:px-5 text-white bg-primary-main text-start'>
            {textCover}
          </span>
        </div> */}
        <ImageBanner
          textCover1={textCover1}
          img={LANBanner}
          imgReponsive={Kid}
        />

        <Image
          src={Gallery}
          alt='logo'
          priority
          className='max-h-[120px] w-full relative lg:bottom-12 md:bottom-10 sm:bottom-6 bottom-4'
        />
      </div>

      <section className='flex flex-col gap-5 justify-center align-middle max-w-[990px] mx-auto px-[20px] relative'>
        <h3 className='text-[26px]  font-bold text-primary-hight-light font-raleway'>
          {headData?.headTittle}
        </h3>
        <p className='text-base font-avenir font-light'>{headData.des}</p>
      </section>

      <section className='flex flex-col gap-5 justify-center items-center pt-10 my-10 bg-grey-main'>
        <div className='flex justify-center relative md:bottom-6'>
          <div className='grid sm:grid-cols-2 grid-cols-1 align-middle max-w-[1470px] px-[20px] xl:px-[100px] justify-center'>
            <div className='relative w-full h-auto'>
              <span className='hidden sm:block absolute w-full bg-purple-light mt-8 -ml-8 p-[26%]'></span>
              <Image
                src={midData.img}
                alt='logo'
                priority
                className='w-full h-auto relative'
              />
            </div>
            <div className='max-w-[450px] sm:ml-[10vw]'>
              {' '}
              {/* Adjust max width as needed */}
              {midData.desArr.map((item, index) => (
                <div className='flex flex-col' key={index}>
                  <h3 className='text-[26px] font-bold text-primary-hight-light font-raleway'>
                    {item.tittle}
                  </h3>
                  <p className=' text-base py-4 font-avenir font-bold'>
                    {item.des}
                  </p>
                  {item.subDesArr.map((data, index) => (
                    <div key={index}>
                      <p className=' text-base py-4 font-avenir font-light'>
                        {data.subDdes}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col justify-center align-middle max-w-[990px] mx-auto px-[20px] relative pb-10'>
        <h3 className='text-[26px]  font-bold text-primary-hight-light font-raleway text-center'>
          {AwardWinning?.headTittle}
        </h3>
        <p className=' text-sm pt-2 font-raleway font-light text-center'>
          {AwardWinning.des}
        </p>
      </section>
      <section className='pb-10 flex justify-center'>
        <div className='flex flex-col lg:flex-row justify-center align-middle'>
          {AwardWinning.ImgArr.map((item, index) => (
            <Image
              key={index}
              src={item.img}
              alt='footerAbout1'
              width='643'
              height='180'
              sizes='100vw'
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default LiteracyAndNumeracy;
