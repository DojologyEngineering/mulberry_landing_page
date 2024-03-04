import React from 'react';

import Image from 'next/image';

import { CgMusic } from 'react-icons/cg';
import { FaPenFancy } from 'react-icons/fa';
import { IoFootball } from 'react-icons/io5';
import { LuCakeSlice } from 'react-icons/lu';
import { MdOutlineScience } from 'react-icons/md';
import { RiComputerLine } from 'react-icons/ri';

import SteamBanner from '../../../../public/img/SteamBanner.webp';
import Gallery from '../../../../public/img/gallery.png';
import { AwardWinning } from '../habits-of-mind/page';

const textCover1 = 'Preparing For The Future';
const textCover2 = 'Through S.T.E.A.M Enrichment';

const headData = {
  headTittle:
    'Singapore’s push for a Smart Nation exemplifies this change and demand for graduates in the fields of Science, Technology, Engineering, and Mathematics is expected to increase.',
  desTittle: 'What is S.T.E.A.M Enrichment?',
  desArr: [
    {
      des: 'The world of work has transformed tremendously over the past few decades. With technology and AIs prevalent in all areas of work, existing jobs today will no longer be relevant in the future. As the world of education explores approaches to empower preschoolers with the knowledge and skills they require to become successful innovators in the increasingly technologically-driven workforce, there has been an increasing focus on S.T.E.A.M – an educational discipline that engages children through Science, Technology, Engineering, the Arts and Mathematics. For children to thrive in the future technological world, they need to be equipped with the right skills.',
    },
    {
      des: 'S.T.E.A.M Enrichment seeks to ignite an interest and lifelong love of the arts and sciences in kids from an early age. These subjects, though once thought as distinct fields of studies, are actually similar disciplines as they all involve creative processes and utilise several ways for inquiry and investigation. Incorporating multiple disciplines at a go creates learning experiences that enable children to question, explore, research, discover, and innovate.',
    },
    {
      des: 'Have you noticed how thrilled your little ones are in a new environment? They love exploring and experimenting with new things and are especially excited to be in nature. Just like how engineers identify problems, design and construct solutions, preschoolers have a natural sense to work with materials, experiment, and problem-solve. S.T.E.A.M Enrichment seeks to present these opportunities for children.',
    },
  ],
};

const footData = {
  headTittle: 'Our STEAM Enrichment Program',
  des: 'Since S.T.E.A.M concepts rely heavily on hands-on learning and production, they are second nature for young kids. At Mulberry Learning, these seemingly big concepts are acquired via a range of highly engaging and exciting S.T.E.A.M enrichment activities that hones children’s creativity, problem solving and critical thinking skills – all while having fun!',
  desArr: [
    {
      subDesTittle: 'Picasso Kidz™ (Art)',
      subDes:
        'Utilising an array of interesting materials and art tools, kids will dive into the creative world of art and craft where they can experiment with a variety of art techniques and mediums. The unique programme combines science, art, language and music to create a magical and colourful experience for the children. From the use of clay, mosaic tiles, papier mâché, this process-art approach places emphasis on the discovery learning process of children. Every Picasso Kidz™ learns ways to broaden their imagination, stimulate their creative potential through art and even hone their public speaking skills as they present their art pieces to their peers.',
      icon: FaPenFancy,
    },
    {
      subDesTittle: 'Little Newton™ (Science)',
      subDes:
        "Science is all around us – in our bodies, within nature, and in all the daily happenings. How does the bird fly? How do things work? Where can we find rainbows? Our Little Newton™ Science Programme seeks to foster a curious mind in preschoolers toward the natural phenomenon and common mechanical devices as they engage in a series of fun, age-appropriate science experiments. Under the guidance of our teachers, children will be encouraged look at their world from a scientific perspective. Series of fun, invigorating early science experiences sparks a child’s curiosity to make observations, think critically, acquire new ways of asking questions, and solve simple problems. Learning how to find solutions to problems is one of the essential life skills your child will acquire at Li'lberry.",
      icon: MdOutlineScience,
    },
    {
      subDesTittle: 'Little Tinkerer™ (Robotics)',
      subDes:
        'Without coding, computers do nothing to benefit us. If you think of tasks that you’ve ever done on a computer; playing a game, sending an email, or searching for something on Google, all of them are applications of software written in code. With the increasing emphasis on use of technology in the future working world, there is a pressing need for children to be exposed to robotics and coding at an early age. Children will learn to build their own interactive coding robots through various themes and projects. This allows them to gain a better understanding of how technology plays an essential role in their lives.',
      icon: RiComputerLine,
    },
    {
      subDesTittle: 'Sportball (Sports)',
      subDes:
        'Incorporating a multi-sport approach, children are accustomed and exposed to a variety of games and fun activities, while promoting a healthy lifestyle. Rather than merely teaching kids how to play sports, the Sportball Programme focuses on enabling kids to meet developmental milestones and cultivate literacy through play. In a fun, supportive, and non-competitive environment, preschoolers have opportunities to try out team sports, follow rules, strengthen essential psychomotor skills and social skills.',
      icon: IoFootball,
    },
    {
      subDesTittle: 'Busy Baker™ (Culinary Arts)',
      subDes:
        'The Busy Baker programme aims to establish a child’s awareness of a healthy and nutritious diet, to appreciate the hard work of the others and to respect the fruits of their labour. Through exposing children to different cuisines from all over the world, they get to discover more about different cultures. Preschoolers are given opportunities to actively participate in the entire culinary process as they engage in sensory activities and gain hands-on practical experience with essential skills like hand-eye coordination, muscle movement, reading, measuring, and following directions.  Children will have ample opportunities and creative space to prepare food, explore science and math concepts in cooking and sample delicious food at the same time!',
      icon: LuCakeSlice,
    },
    {
      subDesTittle: 'Music Mooves™ (Music)',
      subDes:
        'Interaction with sound is unavoidable in our lives, either to produce it or to take pleasure in it. For centuries, music has always been a universal language that spans across cultures, breaks down barriers, and fosters relationships. Aspiring little musicians have opportunities in Music Mooves™ to develop intellectually, socially, and emotionally as they sharpen their fine-gross motor skills, expressive languages, numeracy, creativity and rhythmic sense. Besides combining various forms of musical experiences, games, elements, and creation, our Music Mooves™ programme also integrates the theme of Project Inquiry.',
      icon: CgMusic,
    },
  ],
};

function SteamEnrichment() {
  return (
    <main>
      <div className='flex justify-center align-middle flex-col'>
        <div
          className='relative'
          style={{ width: '100%', paddingBottom: '18%' }}
        >
          <Image src={SteamBanner} alt='logo' priority fill />
          <span className='absolute  top-[30%] left-[26%]  sm:whitespace-nowrap lg:mr-[320px] text-[18px] sm:text-[26px] lg:text-[40px] font-raleway font-bold px-1 sm:px-5 text-white bg-primary-main text-start'>
            {textCover1}
          </span>
          <span className='absolute top-[30%] left-[26%] sm:whitespace-nowrap lg:mr-[320px] text-[18px] sm:text-[26px] lg:text-[40px] font-raleway font-bold px-1 sm:px-5 text-white bg-primary-main text-start lg:mt-[80px] sm:mt-[50px] mt-[30px] whitespace-nowrap'>
            {textCover2}
          </span>
        </div>

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

      <section className='flex flex-col gap-5 justify-center items-center pt-16 my-10 bg-grey-main '>
        <div className='flex justify-center relative md:bottom-6'>
          <div className='max-w-[990px] px-[20px]'>
            {' '}
            {/* Adjust max width as needed */}
            <div className='flex flex-col'>
              <h3 className='text-[25px] font-bold text-primary-main font-raleway'>
                {headData.desTittle}
              </h3>

              <div className='flex flex-col'>
                {headData.desArr.map((data) => (
                  <p className=' text-base font-avenir font-light py-3'>
                    {data.des}
                  </p>
                ))}
              </div>
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

      <section className='flex flex-col gap-5 justify-center items-center pt-16 pb-5 mt-10 bg-grey-main '>
        <div className='flex justify-center relative md:bottom-6'>
          <div className='max-w-[990px] px-[20px]'>
            {' '}
            {/* Adjust max width as needed */}
            <div className='flex flex-col'>
              <h3 className='text-[25px] font-bold text-primary-main font-raleway'>
                {footData.headTittle}
              </h3>

              <p className='text-base  font-avenir font-light pt-5'>
                {footData.des}
              </p>

              {footData.desArr.map((data) => (
                <div className='flex flex-row align-middle justify-center gap-5 pt-10'>
                  <span className=''>
                    {
                      <data.icon
                        size={40}
                        className='text-primary-hight-light p-1 rounded-full border-2 border-primary-hight-light bg-transparent'
                      />
                    }
                  </span>

                  <div>
                    <h3 className='text-[20px] font-bold font-raleway'>
                      {data.subDesTittle}
                    </h3>
                    <p className='text-base  font-avenir font-light'>
                      {data.subDes}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default SteamEnrichment;
