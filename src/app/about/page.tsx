import Image from 'next/image';

import SchoolLogo from '../../../public/img/MBR Logo with tagline.webp';
import footerAbout1 from '../../../public/img/footerAbout1.jpg';
import footerAbout2 from '../../../public/img/footerAbout2.jpg';
import Gallery from '../../../public/img/gallery.png';

export const MulberryLearning = {
  textHead:
    "Mulberry Learning Philippines is a proud partner of Singapore's Award-Winning Preschool Brand - Mulberry Learning.",
  paragraph:
    'Mulberry Learning started out with the dream of creating well-rounded children with imaginative young minds, positive attitudes and strength of character. Over the years, our unique pedagogy has touched the lives of many children and parents. We are recognized for our vibrant Reggio Emilia-inspired learning spaces, comprehensive bilingual programs, holistic development outcomes, and strengths in character development via Habits of Mind™. We have won multiple awards in Singapore, and we are the ﬁrst ever preschool network in the world to be certiﬁed by The Institute for Habits of Mind from the USA.',
  awards: 'Awards',
  awardLists: [
    {
      textList:
        'Winner of the Singapore Prestige Brand Award (Established Brands), 2020 / 21',
    },
    {
      textList: 'Best Early Learning Program (aged 0 – 6 years old), 2021',
    },
    {
      textList: 'Best Holistic Curriculum, 2019 to 2020',
    },
    {
      textList: 'Best Reggio Emilia Preschool, 2017 to 2018',
    },
    {
      textList: 'Best Holistic Learning Programs, 2016 – 2019',
    },
    {
      textList: 'Singapore Preschool Accreditation Framework (SPARK)',
    },
    {
      textList: 'Healthy Preschool Accreditation (HPS)',
    },
    {
      textList:
        'World’s first and only preschool network certified by the USA for the Habits of Mind™',
    },
  ],
};

export default function About() {
  return (
    <main className='pb-10'>
      <div className='flex justify-center align-middle flex-col'>
        <section className='flex justify-center align-middle'>
          <Image src={SchoolLogo} alt='School Logo' width={345} height={345} />
        </section>
        <div className='relative h-[140px] w-100% bottom-10'>
          <Image src={Gallery} alt='logo' fill />
        </div>
        <section className='flex flex-col gap-5 justify-center align-middle max-w-[950px] ml-auto mr-auto pt-10'>
          <h3 className='text-[26px] text-primary-hight-light font-bold font-raleway '>
            {MulberryLearning.textHead}
          </h3>
          <p className='font-extralight text-sm'>
            {MulberryLearning.paragraph}
          </p>
          <h3 className='text-[26px] text-primary-hight-light font-semibold'>
            {MulberryLearning.awards}
          </h3>
          {MulberryLearning.awardLists.map((item) => (
            <ul
              className='list-disc font-extralight text-sm ml-7 mb-[-10px]'
              key={item.textList}
            >
              <li>{item.textList}</li>
            </ul>
          ))}
        </section>
        <section className='pt-10'>
          <div className='flex justify-center align-middle'>
            <Image
              src={footerAbout1}
              alt='footerAbout1'
              width='643'
              height='180'
              sizes='100vw'
            />
            <Image
              src={footerAbout2}
              alt='footerAbout2'
              width='0'
              height='0'
              sizes='100vw'
            />
          </div>
        </section>
      </div>
    </main>
  );
}
