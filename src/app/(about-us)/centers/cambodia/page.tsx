import React from 'react';

import Image from 'next/image';

import { FaRegHeart } from 'react-icons/fa';

import { BookTour, ButtonBookTour } from '@/components/BookTour';
import { ImagePreview } from '@/components/ImagePreview';

import profilePic from '/public/img/image3.webp';

const headData = [
  {
    id: 1,
    value:
      'Located in a 2-storey semi-detached house at Cambodia Crescent, Mulberry Learning @ Cambodia offers a tranquil environment for preschoolers aged 18 months to 6 years to learn and grow without distractions from the hectic pace of the usual urban areas in Cambodia. Mulberry Learning @ Cambodia is located conveniently near Sixth Avenue MRT Station on the Downtown Line in the Bukit Timah area.',
  },
  {
    id: 2,
    value:
      'A unique feature of Cambodia centre is the outdoor learning space within the compound, which is curated according to the theme of the “Sea”, “Forest” & “Mountain”. Children at the Cambodia centre are fortunate to have these amazing outdoor environments that allow them to develop gross motor skills while having active fun! Research has shown that outdoor exploration and learning through play have many benefits for young children, and these form an integral part of Mulberry Learning’s curriculum @ Cambodia.',
  },
  {
    id: 3,
    value:
      'As a Reggio-Emilia-inspired preschool, Mulberry Learning @ Cambodia is equipped with various learning corners that serve as tools for experiential learning, giving Mulberrians a chance to focus their attention on what interests them whilst at the same time teaching them new lessons in the process. Learning stations throughout the centre offer numerous opportunities for creative thinking and exploration, providing children with opportunities to learn from each other, with teachers facilitating the process.',
  },
  {
    id: 4,
    value:
      'As a Reggio-Emilia-inspired preschool, Mulberry Learning @ Cambodia is equipped with various learning corners that serve as tools for experiential learning, giving Mulberrians a chance to focus their attention on what interests them whilst at the same time teaching them new lessons in the process. Learning stations throughout the centre offer numerous opportunities for creative thinking and exploration, providing children with opportunities to learn from each other, with teachers facilitating the process.',
  },
];
const videosData =
  'Beautifully designed spaces are hallmarks of the Mulberry Learning centre environment. We believe that our children learn best in thoughtfully-curated surroundings. That is why we spare no effort in creating a physical canvas that stimulates their senses, unleashes their innate creativity, and encourages their natural desire to explore. Here is a glimpse of the learning spaces at our Namly centre.';
const habitData = {
  link: 'Habits of Mind™',
  text: ' is about knowing how to behave intelligently and respond effectively to uncertainty or dilemmas. It provides children of all ages a framework for autonomous learning, critical thinking and effective inquiry. These habits are introduced to the child by infusing them into the curriculum and delivered through daily lessons and activities.',
};
const videoHabitData = {
  title:
    'Mulberry Learning – Habits of Mind™: Creating, Imagining & Innovating',
  value: [
    {
      id: 0,
      val: 'As one of the 12 specially curated Habits of Mind™ infused into Mulberry Learning’s curriculum, Applying Past Knowledge to New Situations means developing a more profound understanding by applying thinking from one situation to another.',
    },
    {
      id: 1,
      val: 'This habit guides the child on the importance of building on and applying past knowledge to learn more productively and effectively. The more the child learns, the more past knowledge they would possess that can be applied to situations that call for it.',
    },
  ],
};
function page() {
  return (
    <div>
      <div className='bg-primary-light w-full pl-4 md:pl-0 mb-20'>
        <h1 className='md:text-3xl text-xl  text-white font-avenir py-10 container mx-auto '>
          Mulberry Learning @ Cambodia
        </h1>
      </div>
      <div className='container mx-auto mt-5'>
        <Image src={profilePic} alt='logo' priority objectFit='cover' />
      </div>
      <div className='container mx-auto mt-5 mb-5'>
        {headData.map((v, i) => {
          return (
            <>
              <p className='font-light font-avenir mt-3'>{v.value}</p>
            </>
          );
        })}
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
              Book a school tour to learn more about our special enrolment
              promotions!
            </p>
          </div>
        </div>
      </div>
      <div className='w-full bg-primary-light flex justify-center h-20 items-center '>
        <ButtonBookTour />
      </div>
      <div>
        <h1 className='md:text-3xl text-xl  text-primary-hight-light font-avenir py-10 container mx-auto flex justify-center items-center'>
          Learning Spaces at Mulberry Learning @ Cambodia
        </h1>
      </div>
      <div className='container mx-auto'>
        <iframe
          className='w-full min-h-[649px] mb-10'
          src={'https://www.youtube.com/embed/7xWzPxPT0pA'}
          title='YouTube video player'
          // allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
        <p className='font-light font-avenir'>{videosData}</p>
      </div>
      <div className='bg-white'>
        <ImagePreview />
      </div>
      <div className='bg-grey-primary'></div>
      <div className='bg-footer'>
        <h1 className='md:text-3xl text-xl  text-primary-hight-light font-avenir py-10 container mx-auto flex justify-center items-center'>
          Mulberry Learning’s Habits of Mind™ Framework
        </h1>

        <div className='container mx-auto '>
          <p className='font-light font-avenir pb-10'>
            <span>{habitData.link}</span>
            {habitData.text}
          </p>
        </div>
      </div>
      <div className='container mx-auto bg-footer mt-10'>
        <iframe
          className='w-full min-h-[649px]  bg-footer'
          src={'https://www.youtube.com/embed/MAp8d9P7PBI'}
          title='YouTube video player'
          allowFullScreen
        ></iframe>
      </div>
      <div className='container mx-auto'>
        <h1 className='md:text-3xl text-xl  text-primary-hight-light font-avenir pt-5 container mx-auto '>
          {videoHabitData.title}
        </h1>
        <div className='mb-5'>
          {videoHabitData.value.map((value, i) => {
            return (
              <div key={value.id}>
                <p className='mt-5 font-light font-avenir'>{value.val}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default page;
