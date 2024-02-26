import Image from 'next/image';

import CareerBanner from '../../../public/img/CareerBanner.webp';
import TeacherHighFive from '../../../public/img/FB-teacher-high5.webp';
import GrowthModelImg from '../../../public/img/MBR-TGM-Model_V6-01.webp';
import TeacherTech from '../../../public/img/fb-teacher-teach-words.webp';
import Gallery from '../../../public/img/gallery.png';

export const textCover = 'Careers at Mulberry Learning';

export const Learning = {
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

const Empowered = {
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

export const GrowthModel = {
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

function Careers() {
  return (
    <main className='pb-10'>
      <div className='flex justify-center align-middle flex-col'>
        <div className='h-[350px] w-100% relative'>
          <Image src={CareerBanner} alt='logo' objectFit='cover' fill />
        </div>
        <div className='relative h-[140px] w-100% bottom-16'>
          <Image src={Gallery} alt='logo' fill />
        </div>
        <span className='relative bottom-60  text-center text-[40px] font-raleway font-bold px-5 text-white bg-primary-main mx-auto'>
          {textCover}
        </span>
        <div className='relative bottom-20'>
          <section className='flex flex-col gap-5  justify-center align-middle max-w-[950px] ml-auto mr-auto '>
            <h3 className='text-[26px]  font-bold text-primary-hight-light font-raleway'>
              {Learning.textHead}
            </h3>
            {Learning.paragraphArr.map((item) => (
              <p className='text-base font-avenir font-light'>
                {item.paragraph}
              </p>
            ))}
          </section>
          <section className='flex flex-col gap-5  justify-center align-middle max-w-[950px] ml-auto mr-auto pt-10'>
            <h3 className='text-[26px]  font-bold text-primary-hight-light font-raleway'>
              {GrowthModel.textHead}
            </h3>
            <div className='flex justify-center align-middle'>
              <Image
                src={GrowthModel.img}
                alt='GrowthModelImg'
                width='850'
                height='601'
                sizes='100vw'
              />
            </div>
            <div className='text-center'>
              <h3 className='text-[20px] font-raleway text-primary-main font-bold'>
                {GrowthModel.description}
              </h3>
            </div>
            {GrowthModel.paragraphArr.map((item) => (
              <p className='text-base font-avenir font-light'>
                {item.paragraph1}
                <span className='text-primary-hight-light'>{item.span}</span>
                {item.paragraph2}
              </p>
            ))}
          </section>

          <section className='flex flex-col gap-5 justify-center items-center py-10 my-10 bg-centers'>
            <div className='w-full max-w-[950px]  mx-auto '>
              {' '}
              {/* Adjust max width as needed */}
              <h3 className='text-[26px] font-bold text-primary-hight-light font-raleway'>
                {Empowered.textHead}
              </h3>
              <div className='flex justify-center align-middle'>
                <Image
                  src={Empowered.img2}
                  alt='GrowthModelImg'
                  width='475'
                  height='475'
                  sizes='100vw'
                />
                <Image
                  src={Empowered.img1}
                  alt='GrowthModelImg'
                  width='475'
                  height='475'
                  sizes='100vw'
                />
              </div>
              {Empowered.paragraphArr.map((item) => (
                <p className=' text-base py-4 font-avenir font-light'>
                  {item.paragraph}
                </p>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Careers;
