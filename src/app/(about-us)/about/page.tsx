import Image from 'next/image';

import SchoolLogo from '../../../../public/img/MBR Logo with tagline.webp';
import footerAbout1 from '../../../../public/img/footerAbout1.jpg';
import footerAbout2 from '../../../../public/img/footerAbout2.jpg';
import Gallery from '../../../../public/img/gallery.png';

export const AboutUsData = {
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

const ImgFooter = [
  {
    img: footerAbout1,
  },
  {
    img: footerAbout2,
  },
];

export default function About() {
  return (
    <main className='pb-10'>
      <div className='flex justify-center align-middle flex-col'>
        <section className='sm:flex justify-center align-middle hidden'>
          <Image src={SchoolLogo} alt='School Logo' priority className='' />
        </section>
        <div className='relative sm:h-[140px]  w-full sm:w-auto sm:bottom-[50px]'>
          <Image
            src={Gallery}
            alt='logo'
            priority
            className='w-full max-h-[120px]'
          />
        </div>

        <section className='flex flex-col gap-5 justify-center align-middle max-w-[970px] ml-auto mr-auto pt-10 px-[20px] relative sm:bottom-[100px] bottom-8'>
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
            {ImgFooter.map((item) => (
              <Image
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
