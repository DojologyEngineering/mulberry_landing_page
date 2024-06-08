import Head from 'next/head';
import { headers } from 'next/headers';
import Image from 'next/image';

import { AboutUsData, ImgFooter } from '@/utils/about-util';

import SchoolLogo from '../../../../public/img/MBR Logo with tagline.webp';
import Gallery from '../../../../public/img/gallery.png';

export const metadata = {
  title: 'About us | Mulberry International Preschool, Cambodia',
};
export default function About() {
  return (
    <main className='pb-10'>
      <div className='flex justify-center align-middle flex-col'>
        <section className='sm:flex justify-center align-middle hidden'>
          <Image src={SchoolLogo} alt='School Logo' priority className='' />
        </section>
        <Image
          src={Gallery}
          alt='logo'
          priority
          className='w-full max-h-[120px] relative sm:w-auto sm:bottom-[50px]'
        />

        <section className='flex flex-col gap-5 justify-center align-middle max-w-[970px] ml-auto mr-auto pt-10 px-[20px] relative sm:bottom-[80px] bottom-8'>
          <h3 className='text-[26px] text-primary-hight-light font-bold font-raleway '>
            {AboutUsData.textHead}
          </h3>
          <p className='font-extralight text-sm'>{AboutUsData.paragraph}</p>
          <h3 className='text-[26px] text-primary-hight-light font-semibold'>
            {AboutUsData.awards}
          </h3>
          {AboutUsData.awardLists.map((item) => (
            <ul
              className='list-disc font-extralight text-sm ml-7 mb-[-10px]'
              key={item.textList}
            >
              <li>{item.textList}</li>
            </ul>
          ))}
        </section>
        <section className='pt-10 flex justify-center'>
          <div className='flex flex-col lg:flex-row justify-center align-middle'>
            {ImgFooter.map((item, index) => (
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
      </div>
    </main>
  );
}
