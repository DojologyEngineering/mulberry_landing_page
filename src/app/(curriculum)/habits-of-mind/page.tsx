import { FootContent } from '@/app/(about-us)/careers/page';
import React from 'react';

import Image from 'next/image';

import { PiTelegramLogo } from 'react-icons/pi';

import HabitsOfMineBanner from '../../../../public/img/HabitsOfMineBanner.webp';
import Kid from '../../../../public/img/Kid.webp';
import Kids from '../../../../public/img/Kids.webp';
import footerAbout1 from '../../../../public/img/footerAbout1.jpg';
import footerAbout2 from '../../../../public/img/footerAbout2.jpg';
import Gallery from '../../../../public/img/gallery.png';

export const textCover1 = 'Intelligent Thinking';

export const textCover2 = 'Through Habits of Mind';

const HeadData = {
  headTittle:
    'How does your child behave when facing difficulties? Does he or she throw a tantrum and cry, simply give up, or look for ways to overcome the challenge?',
  desArr: [
    {
      des: 'As you observe your little ones work their way through everyday situations, you may start noticing distinctive patterns of behaviour. A child’s formative years are exceptionally important as it is the period when they learn appropriate behaviours, boundaries and social skills that will remain with them for life. Especially when the world is becoming increasingly volatile, uncertain, complex, and ambiguous, these ways of coping with problems are budding indicators of how they would perform in future.',
    },
    {
      des: 'Parents would already know that education is more than just learning about facts and knowledge, but the process of learning, such as the intricacies of posing questions, perseverance, thinking flexibly, and thirst for knowledge that are even more crucial for success. Learning these soft skills can take several lengthy processes of trial and error, and one may not even eventually succeed in cultivating these proficiencies.',
    },
  ],
};

const bodyData = {
  headTitle: 'What is Habits of Mind™?',
  desArr: [
    {
      des: 'Habits of Mind™ is about knowing how to behave intelligently and respond effectively to uncertainty or dilemmas. Developed by Dr Arthur Costa, Emeritus Professor of Education at California State University, Sacramento, and Co-Director of the Institute for Intelligent Behavior in El Dorado Hills, California, this framework provides children of all ages a set of intelligent thinking dispositions for autonomous learning, critical thinking and effective inquiry.',
    },
    {
      des: 'Just as how influential people like Steve Jobs and Mark Zuckerberg demonstrates positive traits like persistence and innovation, we too want our children to draw upon these positive ways of thinking that help them be more confident when confronted with difficulties. They will be able to ask good questions and become skilled at interacting with diverse groups of people. These habits also instill positive personality traits and behaviour in children to cultivate essential skills like strategic reasoning, insightfulness, perseverance and creativity, applying what they have learnt to an ever-expanding array of challenges not only in academic subjects but also in their lives, communities, and the world.',
    },
  ],
  img: Kid,
};

const Descriptionheader = {
  des: 'While the Habits of Mind™ framework has long been adopted by Singapore’s Ministry of Education to groom the top 1% of students under its Gifted Education Program, Mulberry Learning is the first and only preschool network globally certified by the',
  link: 'Institute for Habits of Mind™.',
  value: 'https://www.habitsofmindinstitute.org/',
};

const ImgMid = Kids;

const DataMid = {
  headFoot: "How do we incorporate Habit's on Mind™ in our curriculum?",
  footListArr: [
    {
      listTittle: 'Formal Teaching',
      listDes:
        'Every month, teachers at Mulberry Learning formally introduce a new habit during specially-designed lessons. Children will have opportunities to explore the meaning of the habit through engaging activities and emulate positive actions in accordance to the habit. Catchy slogans, which are suitable for preschoolers, are also used to help students remember!',
      icon: PiTelegramLogo,
    },
  ],
};

export const AwardWinning = {
  headTittle: 'Award-Winning Curriculum',
  des: ' Powered by Mulberry Learning Singapore',
  ImgArr: [
    {
      img: footerAbout1,
    },
    {
      img: footerAbout2,
    },
  ],
};

const footer = {
  headTitleArr: [
    {
      tittle:
        'Of the 16 habits, we have specially curated 12 habits that are mindfully infused into our curriculum, utilizing teachable moments and daily routines.',
    },
    {
      tittle:
        ' Find out how you can guide your little ones to cultivate good lifelong habits:',
    },
  ],
  footDes: [
    {
      headFoot: 'Creating, Imagining, Innovating',
      des: '“I can’t draw.” “I can’t sing!” Some people think that creativity is innate and they can never gain that artistic flair. Yet, research has increasingly shown that children have the ability to produce original, novel, intelligent solutions and strategies if that capacity is nurtured. Through the plethora of STEAM enrichment programmes offered at Mulberry Learning, we provide opportunities to cultivate creative, imaginative, and innovative learners.',
      yt: 'https://www.youtube.com/embed/pAlqaD_Wkf8',
    },
    {
      headFoot: 'Persisting',
      des: 'When posed with challenges, efficient problem solvers persevere even when a solution is not immediately apparent because they employ a wide variety of problem-solving strategies. Children often give up saying, “It’s too hard!” or “I can’t do this!” when faced with a problem. At Mulberry Learning, instead of providing all the answers, we encourage students to persist and work out problems on their own.',
      yt: 'https://www.youtube.com/embed/5q5ZboGX2bE',
    },
    {
      headFoot: 'Listening with Understanding and Empathy',
      des: 'Many people assume that because they can comprehend words and their meaning, they can be a good listener. Yet sometimes, the loudest conversations are often the silent ones. Successful individuals spend an extravagant amount of time and energy to listen. They strive to relate to other people’s point of view. Since studies have found that up to 80% of our communication with others are non-verbal, we need to be observant and identify non-verbal cues to listen well. Listening with understanding and empathy requires us uncover the real message.',
      yt: 'https://www.youtube.com/embed/iRiWNr0UDFQ',
    },
    {
      headFoot: 'Questioning and Posing Problems',
      des: 'At Mulberry Learning, children are encouraged to ask questions, pose problems, and figure out the answers, with the help of their teachers! Inquiry-based learning provides a rich opportunity for kids to widen and deepen their understanding and strengthen their appreciation of new knowledge. Students are able to act as little scientists, finding answers to their own questions through engaging in research, conducting mini-experiments, analysing their findings, and presenting their observations to their peers and parents.',
      yt: 'https://www.youtube.com/embed/s3uu6Wz5g04',
    },
    {
      headFoot: 'Gathering Data through All Senses',
      des: 'Children learn better and form stronger memory connections when they engage with more senses in their learning process. Through the various carefully-crafted learning spaces in our preschools, we encourage open, acute and alert sensory environments, allowing the little ones to absorb and retain much more information.',
    },
    {
      headFoot: 'Striving for Accuracy',
      des: 'As much as we provide a safe space for children to make mistakes, Mulberry Learning also encourages kids to strive for accuracy and take pride in their work. This could be done by asking students follow-up questions when we notice an error in their work. Sometimes, a check-list could also help them to ensure accuracy in their tasks.',
    },
    {
      headFoot: 'Thinking Flexibly',
      des: 'Children who think that their way is the only way to solve a problem would not be open to challenges and often avoid ambiguity. Yet, the world today is ambiguous and requires flexible thinking for success. Flexible thinkers have the ability to change their views about things when they acquire new information. They draw upon a range of problem-solving strategies to reach their goals and is important for success in future.',
    },
    {
      headFoot: 'Thinking About Your Thinking (Metacognition)',
      des: 'Adolescents are often oblivious of their own thinking while they are thinking. They seldom plan, reflect, or evaluate the quality of their thoughts. When asked how they solve a problem, they may reply, “I don’t know!” and are not able to reiterate the sequences and steps they utilise during the entire process. At Mulberry Learning, our unique pedagogy designed by qualified and experienced educators make use of thinking words to encourage kids to start thinking about their own thinking.',
    },
  ],
};

function HabitOfMine() {
  return (
    <main>
      <div className='flex justify-center align-middle flex-col'>
        {/* <div className='sm:h-[350px] h-[150px] relative'> */}
        <div className='relative flex justify-center items-center'>
          <Image
            src={HabitsOfMineBanner}
            alt='logo'
            priority
            className='w-full h-[140px] sm:h-auto'
          />
          <span className='absolute sm:whitespace-nowrap lg:mr-[320px] text-[18px] sm:text-[26px] lg:text-[40px] font-raleway font-bold px-1 sm:px-5 text-white bg-primary-main text-start'>
            {textCover1}
          </span>
          <span className='absolute sm:whitespace-nowrap lg:mr-[320px] text-[18px] sm:text-[26px] lg:text-[40px] font-raleway font-bold px-1 sm:px-5 text-white bg-primary-main text-start lg:mt-[150px] sm:mt-[100px] mt-[60px]'>
            {textCover2}
          </span>
        </div>

        <Image
          src={Gallery}
          alt='logo'
          priority
          className='max-h-[120px] w-full relative lg:bottom-12 md:bottom-10 sm:bottom-6 bottom-4'
        />

        <section className='flex flex-col gap-5 justify-center align-middle max-w-[990px] mx-auto px-[20px] relative'>
          <h3 className='text-[26px]  font-bold text-primary-hight-light font-raleway'>
            {HeadData?.headTittle}
          </h3>
          {HeadData.desArr.map((item) => (
            <p className='text-base font-avenir font-light'>{item.des}</p>
          ))}
        </section>

        <section className='flex flex-col gap-5 justify-center items-center pt-10 my-10 bg-grey-main'>
          <div className='flex justify-center relative md:bottom-6'>
            <div className='grid sm:grid-cols-2 grid-cols-1 gap-6 align-middle max-w-[1470px] px-[20px] xl:px-[100px] justify-center'>
              <div className='max-w-[450px]'>
                {' '}
                {/* Adjust max width as needed */}
                <h3 className='text-[26px] font-bold text-primary-main font-raleway'>
                  {bodyData.headTitle}
                </h3>
                {bodyData.desArr.map((item) => (
                  <p className=' text-base py-4 font-avenir font-light'>
                    {item.des}
                  </p>
                ))}
              </div>

              <div className='relative w-full h-auto'>
                <span className='hidden sm:block absolute w-full bg-purple-light m-8 p-[26%]'></span>
                <Image
                  src={bodyData.img}
                  alt='logo'
                  priority
                  className='w-full h-auto relative'
                />
              </div>
            </div>
          </div>
        </section>

        <section className='flex flex-col gap-5 justify-center align-middle max-w-[990px] mx-auto px-[20px] relative pb-10'>
          <h3 className='text-[26px]  font-bold text-primary-hight-light font-raleway'>
            {Descriptionheader?.des}
            <span>
              <a
                href={Descriptionheader.value}
                target='_blank'
                className='text-[26px]  font-bold text-blue-400 font-raleway underline pl-2'
              >
                {Descriptionheader.link}
              </a>
            </span>
          </h3>
        </section>

        <Image src={ImgMid} alt='Kids' priority className='w-full' />

        <section className='flex flex-col gap-5 justify-center align-middle max-w-[990px] mx-auto px-[20px] relative py-10'>
          <div className='lg:w-[990px] w-auto'>
            <h3 className='text-[26px] font-bold text-primary-main font-raleway'>
              {DataMid?.headFoot}
            </h3>
          </div>
        </section>

        <section className='flex flex-col gap-5 justify-center align-middle max-w-[990px] mx-auto px-[20px] relative pb-10'>
          {DataMid.footListArr.map((item) => (
            <div className='flex flex-row align-middle justify-center gap-5'>
              <span className=''>
                {
                  <item.icon
                    size={40}
                    className='text-primary-hight-light p-1 rounded-full border-2 border-primary-hight-light bg-white'
                  />
                }
              </span>

              <div className='flex flex-col'>
                <p className='text-[20px] font-bold  font-raleway'>
                  {item.listTittle}
                </p>
                <p className=' font-avenir text-[16px] font-light'>
                  {item.listDes}
                </p>
              </div>
            </div>
          ))}
        </section>

        <section className='flex flex-col justify-center align-middle max-w-[990px] mx-auto px-[20px] relative pb-10'>
          <h3 className='text-[26px]  font-bold text-primary-hight-light font-raleway'>
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

        <section className='flex flex-col gap-5 justify-center items-center py-10 my-10 bg-grey-main'>
          <div className='max-w-[990px] mx-auto px-[20px]'>
            {footer.headTitleArr.map((item) => (
              <h3 className='text-[22px] font-raleway text-center py-5'>
                {item.tittle}
              </h3>
            ))}
          </div>
          <div className='grid sm:grid-cols-2 grid-cols-1 gap-y-10 gap-x-[450px] align-middle max-w-[1500px] px-[20px] justify-center'>
            {footer.footDes.map((item) => (
              <div className='flex flex-col gap-5'>
                <div>
                  <p className='text-[20px]  font-raleway font-bold'>
                    {item.headFoot}
                  </p>
                  <p className='font-avenir text-[16px] font-light'>
                    {item.des}
                  </p>
                </div>
                {item.yt && (
                  <div>
                    <iframe
                      className='w-full min-h-[250px]'
                      src={item?.yt}
                      title='YouTube video player'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default HabitOfMine;
