import React from 'react';

import Image from 'next/image';

import { GoPeople } from 'react-icons/go';
import { IoHomeOutline } from 'react-icons/io5';

import ImageBanner from '@/components/ImageBanner';

import GirlDiscuss from '../../../../public/img/GirlDiscuss.webp';
import GirlMagnifier from '../../../../public/img/GirlMagnifier.webp';
import Gallery from '../../../../public/img/gallery.png';
import ProjectInquiryBanner from '../../../../public/img/new-img/DSC09939-Edit.jpg';
// import ProjectInquiryBanner from '../../../../public/newimg/DSC09939-Edit.webp';
import { AwardWinning } from '../habits-of-mind/page';

export const metadata = {
  title: 'Project inquiry | Mulberry Learning Cambodia',
};
const textCover1 = 'Reggio-Inspired';
const textCover2 = 'Project Inquiry Program';

const headData = {
  headTittle:
    'Children are born with an enthusiasm for learning. Curious by nature, you simply can’t stop them from discovering their surroundings. To kids, everything is a wonder!',
  yt: 'https://www.youtube.com/embed/YV5mHiqBddU?si=7xT1YFyWO3GHbhDX"',
  desArr: [
    {
      des: 'That is why parents often receive so many questions from their inquisitive toddlers, from “Why is the sky blue?” to “Why is the sun so bright?”. Since we may find it challenging to explain the actual science behind these questions, we often brush them off or tell them that “It is simply how the world works!”.',
    },
    {
      des: 'Instead, we may want to reply a question with another question asking them, “What do you think?” He or she will be challenged by that question and will understand that you are telling him or her, “You have your own mind and your own interpretation and I find your ideas valuable.”',
    },
    {
      des: 'Then, even if you don’t have all the answers to their questions yet, you can both search for the answers, sharing the wonder, excitement, pain – everything. Remember, it is not the answers that count, it is the journey – that you and your little ones are embarking on a quest together.',
    },
  ],
};

const bodyData = {
  headTittle:
    'That is the premise of the Reggio Emilia approach where we value children as strong, capable, eager, and resilient learners, rich with wonder and knowledge, and that they learn best through exploration and discovery!',
  img: GirlMagnifier,
  desTittle: 'What is the Reggio Emilia Approach?',
  desArr: [
    {
      des: 'So, who is Reggio Emilia? Well, Reggio Emilia is not a person, but a Northern Italian province. It is also not a method or curriculum, but a philosophy of education founded by Loris Malaguzzi. Today, it is one of the most widespread educational philosophies in preschool education.',
    },
    {
      des: 'Unlike the usual top-down instructional approach where students’ learning is often planned for them, the Reggio Emilia approach acknowledges children as capable active constructors of knowledge and places emphasis on a kid’s curiosity, interests, sensory experiences, surroundings, and social relationships. In kids’ early formative years, children form their own “hundred languages” of expressing themselves and have numerous ways of thinking, exploring, playing, speaking, and doing.',
    },
  ],
  subHeadTittle:
    'Among educational experts, Reggio Emilia is recognized as the only global pedagogy capable to truly ignite a child’s love for learning.',
  subDesTittle: 'How do we incorporate Reggio Emilia in our curriculum?',
  subDesArr: [
    {
      subDes:
        'The approach recognizes parents as first educators and teachers as educational partners where both parties play important roles in children’s development. At Mulberry Learning, we work closely with parents, providing them with regular developmental updates and involving them in their child’s education.',
      icon: GoPeople,
    },
    {
      subDes:
        'Learning environments are also particularly essential in a Reggio Emilia classroom as it is often referred to as “the third teacher”. Spaces in centres are carefully crafted to encourage opportunities for interaction and enables children to utilise all of their “languages” to express themselves, and to learn.',
      icon: IoHomeOutline,
    },
  ],
};

const footData = {
  headFoot: 'Our Reggio-Inspired Project Inquiry™ Program',
  img: ProjectInquiryBanner,
  desArr: [
    {
      des: 'Unlike regular project work, our Reggio-Inspired Project Inquiry™ is initiated and led by preschoolers, while teachers act as guides and facilitators. Instead of being seen as the object of instruction, kids are viewed as active participants and the Project Inquiry process serves as an “infrastructure” for children to observe, experiment and unravel important concepts.',
    },
    {
      des: 'The entire Project Inquiry journey combines different Habits of Mind™ and Multiple Intelligence skills, which set the stage for how children perceive the educational process. These positive dispositions encourage them to be responsible for their own learning with their peers, foster stronger social skills, and cultivate self-directed individuals.',
    },
    {
      des: 'The entire project inquiry is conducted over 20 weeks and is split into 3 phases with an additional pre-Project Inquiry planning phase.',
    },
  ],
  subHeadFoot:
    'Children act as little scientists, as they research in their choice of topic, conduct experiments, and present them to their peers, which enhances a child’s confidence and love for learning.',
  subFoot: 'The Phases in Our Reggio-Inspired Project Inquiry™ Program',
  subDesArr: [
    {
      subDesTittle: 'Pre-Phase Planning (Intentions)',
      subDes:
        "To help preschoolers structure their learning, teachers at Li'lberry will lead a discussion to decide on the central topic of the project inquiry. A list of possible questions the little ones want to unravel are brainstormed at this stage.",
    },
    {
      subDesTittle: 'Phase 1 (Exploration)',
      subDes:
        'The exploration phase seeks to find out what topic or theme piques children’s interest. Through engaging activities like open dialogues, song and music, videos, art and craft, exploration tasks, storytelling and show and tell, teachers will constantly listen, observe, and document their students’ interactions. This helps teachers to uncover a kid’s pre-existing knowledge map and set the research focus.',
    },
  ],
};

function ProjectInquiry() {
  return (
    <main>
      <div className='flex justify-center align-middle flex-col'>
        {/* <div className='relative flex justify-center items-center'>
          <Image
            src={ProjectInquiryBannerReponsive}
            alt='logo'
            priority
            className='w-full max-h-[399px] object-cover'
          />
          <Image
            src={ProjectInquiryBanner}
            alt='logo'
            priority
            className='w-full h-[140px] sm:h-auto sm:block hidden'
          />
          <span className='absolute  md:left-[25%]   sm:whitespace-nowrap lg:mr-[320px] text-[18px] sm:text-[26px] lg:text-[40px] font-raleway font-bold px-1 sm:px-5 text-white bg-primary-main text-start lg:mb-[40px] sm:mb-[40px]'>
            {textCover1}
          </span>
          <span className='absolute   md:left-[25%]   sm:whitespace-nowrap lg:mr-[320px] text-[18px] sm:text-[26px] lg:text-[40px] font-raleway font-bold px-1 sm:px-5 text-white bg-primary-main text-start lg:mt-[90px] sm:mt-[50px] mt-[60px]'>
            {textCover2}
          </span>
        </div> */}

        <ImageBanner
          textCover1={textCover1}
          textCover2={textCover2}
          img={ProjectInquiryBanner}
          imgReponsive={ProjectInquiryBanner}
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
      </section>

      <section className='flex flex-col gap-5 justify-center items-center py-10 my-10 bg-grey-main'>
        <div className='max-w-[990px] mx-auto px-[20px]'>
          <div
            className='md:aspect-[1200/500] aspect-[1200/650]'
            style={{
              position: 'relative',
              width: '100%',
              // paddingTop: '45%',
            }}
          >
            <iframe
              className='absolute top-0 left-0 w-full h-full md:px-14 '
              src={headData.yt}
              title='YouTube video player'
              // allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
          <div className='flex flex-col gap-5 pt-10'>
            {headData.desArr.map((item, index) => (
              <div key={index}>
                <p className='text-base font-avenir font-light'>{item.des}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='flex flex-col gap-5 justify-center align-middle max-w-[990px] mx-auto px-[20px] relative'>
        <h3 className='text-[26px]  font-bold text-primary-hight-light font-raleway'>
          {bodyData?.headTittle}
        </h3>
      </section>

      <section className='flex flex-col gap-5 justify-center items-center pt-10 my-10 bg-grey-main'>
        <div className='flex justify-center relative md:bottom-6'>
          <div className='grid sm:grid-cols-2 grid-cols-1 align-middle max-w-[1470px] px-[20px] xl:px-[100px] justify-center'>
            <div className='relative w-full h-auto'>
              <span className='hidden sm:block absolute w-full bg-purple-light mt-8 -ml-8 p-[26%]'></span>
              <Image
                src={bodyData.img}
                alt='logo'
                priority
                className='w-full h-auto relative'
              />
            </div>
            <div className='max-w-[450px] sm:ml-[10vw]'>
              {' '}
              {/* Adjust max width as needed */}
              <div className='flex flex-col'>
                <h3 className='text-[25px] font-bold text-primary-main font-raleway'>
                  {bodyData.desTittle}
                </h3>

                {bodyData.desArr.map((data, index) => (
                  <div key={index}>
                    <p className='text-base py-4 font-avenir font-light'>
                      {data.des}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col gap-5 justify-center align-middle max-w-[990px] mx-auto px-[20px] relative'>
        <h3 className='text-[26px]  font-bold text-primary-hight-light font-raleway'>
          {bodyData?.headTittle}
        </h3>
      </section>

      <section className='flex flex-col gap-5 justify-center items-center pt-10 my-10 bg-grey-main '>
        <div className='flex justify-center relative md:bottom-6'>
          <div className='max-w-[990px] px-[20px]'>
            {' '}
            {/* Adjust max width as needed */}
            <div className='flex flex-col'>
              <h3 className='text-[25px] font-bold text-primary-main font-raleway'>
                {bodyData.subDesTittle}
              </h3>

              {bodyData.subDesArr.map((data, index) => (
                <div
                  className='flex flex-row align-middle justify-center gap-5 pt-10'
                  key={index}
                >
                  <span className=''>
                    {
                      <data.icon
                        size={40}
                        className='text-primary-hight-light p-1 rounded-full border-2 border-primary-hight-light bg-transparent'
                      />
                    }
                  </span>

                  <p className='text-base  font-avenir font-light'>
                    {data.subDes}
                  </p>
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

      <section className='flex flex-col gap-5 justify-center items-center pt-10 my-10 bg-grey-main '>
        <div className='flex justify-center relative md:bottom-6'>
          <div className='max-w-[990px] px-[20px]'>
            {' '}
            {/* Adjust max width as needed */}
            <div className='flex flex-col'>
              <h3 className='text-[25px] font-bold text-primary-main font-raleway'>
                {footData.headFoot}
              </h3>

              <div className='relative h-auto max-w-[800px] mx-auto mt-10'>
                <span className='hidden sm:block absolute w-full bg-purple-light mt-8 -ml-8 p-[25%]'></span>
                <Image
                  src={footData.img}
                  alt='logo'
                  priority
                  className='w-[600px] h-auto relative'
                />
              </div>
              <div className='flex flex-col mt-16'>
                {footData.desArr.map((data, index) => (
                  <div key={index}>
                    <p className='text-base font-avenir font-light py-3'>
                      {data.des}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-col gap-5 justify-center align-middle max-w-[990px] mx-auto px-[20px] relative'>
        <h3 className='text-[26px]  font-bold text-primary-hight-light font-raleway'>
          {footData?.subHeadFoot}
        </h3>
      </section>

      <section className='flex flex-col gap-5 justify-center items-center pt-16 pb-10 mt-10 bg-grey-main '>
        <div className='flex justify-center relative md:bottom-6'>
          <div className='max-w-[990px] px-[20px]'>
            {' '}
            {/* Adjust max width as needed */}
            <div className='flex flex-col'>
              <h3 className='text-[25px] font-bold text-primary-main font-raleway'>
                {footData.subFoot}
              </h3>
              <div className='flex flex-col'>
                {footData.subDesArr.map((data, index) => (
                  <div key={index}>
                    <div>
                      <h3 className='text-[20px] font-bold font-raleway pt-5'>
                        {data.subDesTittle}
                      </h3>
                      <p className='text-base font-avenir font-light'>
                        {data.subDes}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProjectInquiry;
