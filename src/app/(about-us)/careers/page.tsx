import Image from 'next/image';
import Link from 'next/link';

import ImageBanner from '@/components/ImageBanner';

import {
  BodyContent,
  FootContent,
  HeadContent,
  Links,
  textCover,
} from '@/utils/about-util';
import { contactData } from '@/utils/data-util';

import Gallery from '../../../../public/img/gallery.png';
import CareerBanner from '../../../../public/img/new-img/DSC02077.jpg';

export const metadata = {
  title: 'Careers | Mulberry Learning Cambodia',
};
function Careers() {
  const contact = contactData.find(
    (item) => item.text === 'admissions@mulberryinternationalpreschool.edu.kh',
  );
  return (
    <main>
      <div className='flex justify-center align-middle flex-col'>
        {/* <div className='sm:h-[350px] h-[150px] relative'> */}
        {/* <div className='relative flex justify-center items-center'>
          <Image src={CareerBanner} alt='logo' priority className='w-full' />
          <span className='absolute sm:whitespace-nowrap lg:mr-[320px] text-[18px] sm:text-[26px] lg:text-[40px] font-raleway font-bold px-1 sm:px-5 text-white bg-primary-main text-start'>
            {textCover}
          </span>
        </div> */}
        <ImageBanner
          // textCover1={textCover1}
          // textCover2={textCover2}
          img={CareerBanner}
          imgReponsive={CareerBanner}
        />

        {/* </div> */}
        {/* <div className='relative sm:h-[140px] h-[30px] w-100% sm:bottom-16 bottom-4'> */}
        <Image
          src={Gallery}
          alt='logo'
          priority
          className='max-h-[120px] w-full relative lg:bottom-12 md:bottom-10 sm:bottom-6 bottom-4'
        />
        {/* </div> */}

        <div className='relative'>
          <section className='flex flex-col gap-5  justify-center align-middle max-w-[970px] ml-auto mr-auto px-[20px]'>
            <h3 className='text-[26px]  font-bold text-primary-hight-light font-raleway'>
              {HeadContent.textHead}
            </h3>
            {HeadContent.paragraphArr.map((item, index) => (
              <div key={index}>
                <p className='text-base font-avenir font-light'>
                  {item.paragraph}
                </p>
              </div>
            ))}
          </section>
          <section className='flex flex-col gap-5  justify-center align-middle max-w-[970px] ml-auto mr-auto py-10 px-[20px]'>
            <h3 className='text-[26px]  font-bold text-primary-hight-light font-raleway'>
              {FootContent.textHead}
            </h3>
            <div className='flex justify-center align-middle'>
              <Image
                src={FootContent.img}
                alt='GrowthModelImg'
                width='850'
                height='601'
                sizes='100vw'
              />
            </div>
            <div className='text-center'>
              <h3 className='text-[20px] font-raleway text-primary-main font-bold'>
                {FootContent.description}
              </h3>
            </div>
            {FootContent.paragraphArr.map((item, index) => (
              <div key={index}>
                <p className='text-base font-avenir font-light'>
                  {item.paragraph1}
                  <span className='text-primary-hight-light'>{item.span}</span>
                  {item.paragraph2}
                </p>
              </div>
            ))}
          </section>
        </div>

        <section className='flex flex-col gap-5 justify-center items-center py-10  bg-grey-main'>
          <div className='w-full max-w-[970px]  mx-auto flex flex-col gap-5 px-[20px]'>
            {' '}
            {/* Adjust max width as needed */}
            <h3 className='text-[26px] font-bold text-primary-hight-light font-raleway'>
              {BodyContent.textHead}
            </h3>
            <h3 className='text-[20px]  font-raleway'>
              {BodyContent.description}
            </h3>
            <div className='flex md:flex-row flex-col justify-center align-middle'>
              <Image
                src={BodyContent.img2}
                alt='GrowthModelImg'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
              <Image
                src={BodyContent.img1}
                alt='GrowthModelImg'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </div>
            {BodyContent.paragraphArr.map((item, index) => (
              <div key={index}>
                <p className=' text-base py-4 font-avenir font-light'>
                  {item.paragraph}
                </p>
              </div>
            ))}
            <div className='flex flex-col justify-center align-middle text-center gap-5'>
              <Link href={contact?.href || ''}>
                <button className='bg-transparent py-1 px-20 border border-grey rounded-full text-center font-avenir text-[20px] font-light transition duration-500 ease-in-out hover:bg-black hover:text-white hover:border-transparent'>
                  {Links.btnText}
                </button>
              </Link>
              <p className=' text-base py-4 font-avenir font-light'>
                {Links.descriptionLink}
                <span>
                  <a href={contact?.href || ''} className='underline pl-1'>
                    {contact?.text}
                  </a>
                </span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Careers;
