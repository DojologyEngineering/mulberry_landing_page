import Image from 'next/image';
import Link from 'next/link';

import { contactData } from '@/utils/data-util';

import CareerBanner from '../../../../public/img/CareerBanner.webp';
import TeacherHighFive from '../../../../public/img/FB-teacher-high5.webp';
import GrowthModelImg from '../../../../public/img/MBR-TGM-Model_V6-01.webp';
import TeacherTech from '../../../../public/img/fb-teacher-teach-words.webp';
import Gallery from '../../../../public/img/gallery.png';

export const textCover = 'Careers at Mulberry Learning';

export const HeadContent = {
  textHead: 'Learning is Engaging, Teaching is Vibrant, Respect for All!',
  paragraphArr: [
    {
      paragraph:
        'Are you passionate about nurturing imaginative and intelligent young minds? Do you desire to teach in a Reggio Emilia-inspired preschool? Or are you looking for opportunities to further your career aspirations?',
    },
    {
      paragraph:
        'Look no further! At Mulberry Learning, we believe that early childhood educators are the heart of our business. The job may be challenging, but making a difference in the lives of little children can be extremely rewarding.',
    },
    {
      paragraph:
        'With over 250 hours of extensive teacher training programs, our positive work culture and rewarding career progression pathways, you will have numerous opportunities to shine!',
    },
  ],
};

const BodyContent = {
  textHead: 'Be Empowered to Inspire!',
  description: 'Embark on a Fulfilling Teaching Journey with Us',
  img1: TeacherTech,
  img2: TeacherHighFive,
  paragraphArr: [
    {
      paragraph:
        'At Mulberry Learning, we are dedicated towards our mission of nurturing the Future Ready Child. We are always on the lookout for the best talent possible – highly passionate and energetic early childhood educators who believe in our dream and possess a burning desire to shape the next generation of young leaders.',
    },
    {
      paragraph:
        'Start your rewarding and fulfilling career with a fast growing education juggernaut. Grow with us to develop your talents and chase your passions! Career advancement opportunities abound, both at Mulberry Learning.',
    },
  ],
};

export const FootContent = {
  textHead: 'Our i-Inspire™ Teacher Growth Model',
  img: GrowthModelImg,
  description:
    'With over 250 hours of extensive training, Mulberry Learning’s teachers embody and impart our Reggio-Inspired Curriculum that supports child-centric learning.',
  paragraphArr: [
    {
      paragraph1: 'Learning never ceases, even for our',
      paragraph2:
        ' Mulberry Learning values our educators and wishes to see them develop as educators. Our latest i-Inspire™ teacher growth model helps our early childhood educators map out clear career advancement pathways and boost their competencies. Every year, all teachers and principals receive both in-house and external professional development training courses to expand their knowledge, skills, and competencies. These sessions are great ways for them to take a step back, reflect and share best practices in their teaching journey.',
      span: ' teachers and principals!',
    },
    {
      paragraph1:
        'Like the tree that provides a strong structure and support for children of different abilities to explore and make sense of the world around them, we want to ensure that our teachers gain a solid foundation in their professional development growth at Mulberry Learning. We strongly believe in building their careers by providing clear advancement structure that defines the opportunities, rewards, career pathways and the training required for them to expand their professional capacities!',
    },
  ],
};

export const Links = {
  btnText: 'Join Us Today!',
  descriptionLink:
    'If you want to get in touch with our HR team, please write to',
};

function Careers() {
  const contact = contactData.find((item) => item.text === 'test@gmail.com');
  return (
    <main>
      <div className='flex justify-center align-middle flex-col'>
        {/* <div className='sm:h-[350px] h-[150px] relative'> */}
        <div className='relative flex justify-center items-center'>
          <Image src={CareerBanner} alt='logo' priority className='w-full' />
          <span className='absolute sm:whitespace-nowrap lg:mr-[320px] text-[18px] sm:text-[26px] lg:text-[40px] font-raleway font-bold px-1 sm:px-5 text-white bg-primary-main text-start'>
            {textCover}
          </span>
        </div>

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
