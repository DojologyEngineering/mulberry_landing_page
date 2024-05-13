import Image from 'next/image';

import ClassroomGridCenter from '@/components/ClassroomGridCenter';
import ImageBanner from '@/components/ImageBanner';

import {
  BodyAbout,
  Classroom,
  HeadAbout,
  textCoverCenters,
} from '@/utils/about-util';

import Gallery from '../../../../public/img/gallery.png';
import LearningCentersMedia from '../../../../public/img/newImg/DSC00300-Edit.jpg';

function Centers() {
  return (
    <main className='pb-10'>
      <div className='flex justify-center align-middle flex-col'>
        {/* <div className='h-[157px] w-100% relative'> */}
        {/* <div className='relative'>
          <Image
            src={LearningCentersMedia}
            alt='logo'
            priority
            className='w-full sm:h-auto h-[60px]'
          />
          <span className='absolute whitespace-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-primary-main text-white font-raleway font-bold px-5 text-[18px] md:text-[26px] xl:text-[40px]  rounded'>
            {textCoverCenters}
          </span>
        </div> */}
        <ImageBanner
          // textCover1={textCover1}
          // textCover2={textCover2}
          img={LearningCentersMedia}
          imgReponsive={LearningCentersMedia}
        />

        {/* </div> */}
        <Image
          src={Gallery}
          alt='logo'
          priority
          className='max-h-[120px] w-full relative lg:bottom-12 md:bottom-10 sm:bottom-6 bottom-2'
        />
        {/* <div className='relative h-[140px]w-full sm:bottom-16 bottom-6'>
          <Image src={Gallery} alt='logo' priority />
        </div> */}

        <div className='relative'>
          <section className='flex flex-col gap-5  justify-center align-middle max-w-[970px] ml-auto mr-auto px-[20px]'>
            <h3 className='text-[26px]  font-bold text-primary-main font-raleway'>
              {HeadAbout.headTextPurple}
              <span className='text-primary-hight-light pl-2'>
                {HeadAbout.headTextPink}
              </span>
            </h3>
            <p className='text-base font-avenir font-light'>
              {HeadAbout.paragraph}
            </p>
          </section>

          <section className='flex flex-col gap-5 justify-center items-center py-10 my-10 bg-grey-main'>
            <div className='w-full max-w-[970px] px-[20px]  mx-auto '>
              {' '}
              {/* Adjust max width as needed */}
              <h3 className='text-[26px] font-bold text-primary-main font-raleway'>
                {BodyAbout.headTextPurple}
                <span className='text-primary-hight-light pl-2'>
                  {BodyAbout.headTextPink}
                </span>
              </h3>
              {BodyAbout.paragraohArr.map((item, index) => (
                <div key={index}>
                  <p className=' text-base py-4 font-avenir font-light'>
                    {item.paragraph}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className='flex flex-col gap-5  justify-center align-middle max-w-[970px] ml-auto mr-auto pb-5 px-[20px]'>
            <h3 className='text-[26px]  font-semibold text-primary-hight-light font-avenir'>
              {Classroom.headText}
            </h3>
            <p className='text-base font-avenir font-semibold text-secondary '>
              {Classroom.paragraph}
            </p>
          </section>
        </div>

        <ClassroomGridCenter />
      </div>
    </main>
  );
}

export default Centers;
