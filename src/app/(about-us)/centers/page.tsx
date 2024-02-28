import Image from 'next/image';

import ClassroomGridCenter from '@/components/ClassroomGridCenter';

import ArtImg from '../../../../public/img/Centre-Art-Atelier.webp';
import BusyImg from '../../../../public/img/Centre-Busy-Baker.webp';
import ConstructionImg from '../../../../public/img/Centre-Construction-Piazza.webp';
import DiscoveryImg from '../../../../public/img/Centre-Discovery-Cove.webp';
import FingerImg from '../../../../public/img/Centre-Finger-Gym.webp';
import ImaginaryImg from '../../../../public/img/Centre-Imaginary-Playscape.webp';
import LightImg from '../../../../public/img/Centre-Light-Atelier.webp';
import ReadingImg from '../../../../public/img/Centre-Reading-Nook.webp';
import Gallery from '../../../../public/img/gallery.png';
import LearningCentersMedia from '../../../../public/img/learningCentersMedia.webp';

export const textCover = 'Mulberry Learning Centers';

export const HeadAbout = {
  headTextPurple: 'Our',
  headTextPink: 'Learning Spaces',
  paragraph:
    'Beautifully designed spaces are hallmarks of the Mulberry Learning center environment. We believe that our children learn best in thoughtfully-curated surroundings. That is why we spare no effort in creating a physical canvas that stimulates their senses, unleashes their innate creativity, and encourages their natural desire to explore.',
};

export const BodyAbout = {
  headTextPurple: 'The vibrant environment as the',
  headTextPink: '“third teacher”',
  paragraohArr: [
    {
      paragraph:
        'The Reggio Emilia approach firmly believes that the centre environment plays a significant role in a child’s learning process and is often seen as the “third teacher”. At Mulberry Learning, the indoors and outdoors are seamlessly connected, allowing children to be immersed in nature while ensuring safety.',
    },
    {
      paragraph:
        'Loris Malaguzzi, the creator of the approach, explains how educators perceive the Reggio environment and the classroom as “a living organism, a place of shared relationships among the children, the teachers, and the parents, that creates a feeling of belonging in a world that is alive, welcoming, and authentic.”',
    },
    {
      paragraph:
        'Learning spaces should then be warm, inviting, and provocation-rich; it should stimulate a child’s curiosity, generate conversations, conjure thoughts, formulate ideas, and generate interest in the things around them.',
    },
    {
      paragraph:
        'Since the Reggio approach acknowledges children as capable active constructors of knowledge, we place emphasis on a kid’s curiosity, interests, sensory experiences, and their environment. When children are inspired by the things around them, they start to wonder and have a plethora of questions. Teachers then facilitate that discovery process through our Reggio-Inspired Project Inquiry™, allowing them to take the role of a scientist as they observe, experiment and unravel important concepts.',
    },
  ],
};

export const Classroom = {
  headText: 'A Classroom Like No Other',
  paragraph:
    'Specially-designed learning areas can be found throughout our preschool where children can explore their areas of interest.',
};

export const ClassroomGrid = [
  {
    img: ArtImg,
    textHead: 'Art Atelier',
    paragraph1:
      'There are numerous ways children can explore, express, and connect their thoughts, feelings, and imaginations. At the multi-sensorial Art Atelier, children are provided with a plethora of tools, mediums, and materials that enable their imagination and creativity to flow, encouraging them to express their “hundred languages” freely.',
  },
  {
    img: ConstructionImg,
    textHead: 'Construction Piazza',
    paragraph1:
      'With a variety of blocks, Lego and recycled materials available for connecting and disconnecting, stacking and constructing, the sky is the limit at the Construction Piazza. Through playing and building blocks, children develop problem-solving and',
    paragraph2:
      ' and are able to express their creativity in their own unique ways.',
    span: 'cognitive thinking skills',
  },
  {
    img: BusyImg,
    textHead: 'Busy Baker',
    paragraph1:
      'In our Busy Baker kitchens, children can engage in sensorial activities and gain hands-on practical experiences. By getting them involved in cooking and baking, they develop fine motor skills, hand-eye coordination, and learn the early concepts of ',
    paragraph2: '; all while having fun!',
    span: 'Mathematics and Science',
  },
  {
    img: DiscoveryImg,
    textHead: 'Discovery Cove',
    paragraph1:
      'When stepping into the Discovery Cove, the child is immersed in nature. With the availability of authentic and natural materials, children embark on a sensorial exploration that encourages observation and analytical skills, just like a little detective!',
  },
  {
    img: FingerImg,
    textHead: 'Finger Gym',
    paragraph1:
      'Writing is an intricate process for young children as they need to utilise every one of their little fingers and fine motor competencies. The Finger Gym promotes hand-eye coordination, dexterity and cognitive abilities. With the use of inviting materials, tools, and objects, it supports the development of a child’s early writing skills.',
  },
  {
    img: ImaginaryImg,
    textHead: 'Imaginary Playscape',
    paragraph1:
      'Children learn best by observing, imagining, and doing. At the Imaginary Playscape, children get to explore the world through different perspectives. Make-believe play stimulates their imagination and helps to develop their social and language capabilities as they collaborate, cooperate, and communicate with their peers. early writing skills.',
  },
  {
    img: ReadingImg,
    textHead: 'Reading Nook',
    paragraph1: 'Reading and',
    paragraph2:
      ' is an integral life skill that helps children acquire new concepts and expand their knowledge base. The Reading Nook is a cosy and inviting space that provides the perfect place for children to retreat into the world of text and prints, and dive into the world of imagination, fantasies and creative literature!',
    span: 'literacy ',
  },
  {
    img: LightImg,
    textHead: 'Light Atelier',
    paragraph1:
      'The various forms of light and its unique properties can be discovered at the Light Atelier. We bring together Art and Science through explorations that inspire wonder, curiosity, and deeper inquiry. This learning space offers children an interactive experience with lights, shadows, transparency and reflections; allowing children to create new ideas and garner a fresh perspective on their creativity.',
  },
];

export function Centers() {
  return (
    <main className='pb-10'>
      <div className='flex justify-center align-middle flex-col'>
        {/* <div className='h-[157px] w-100% relative'> */}
        <div className='relative'>
          <Image
            src={LearningCentersMedia}
            alt='logo'
            priority
            className='w-full sm:h-auto h-[60px]'
          />
          <span className='absolute whitespace-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-primary-main text-white font-raleway font-bold px-5 text-[18px] md:text-[26px] xl:text-[40px]  rounded'>
            {textCover}
          </span>
        </div>

        {/* </div> */}
        <Image
          src={Gallery}
          alt='logo'
          priority
          className='max-h-[120px] w-full relative lg:bottom-12 md:bottom-10 sm:bottom-6 bottom-2'
        />
        {/* <div className='relative h-[140px]w-full sm:bottom-16 bottom-6'>
          <Image src={Gallery} alt='logo' priority />
        </div> */}

        <div className='relative'>
          <section className='flex flex-col gap-5  justify-center align-middle max-w-[970px] ml-auto mr-auto px-[20px]'>
            <h3 className='text-[26px]  font-bold text-primary-main font-raleway'>
              {HeadAbout.headTextPurple}
              <span className='text-primary-hight-light pl-2'>
                {HeadAbout.headTextPink}
              </span>
            </h3>
            <p className='text-base font-avenir font-light'>
              {HeadAbout.paragraph}
            </p>
          </section>

          <section className='flex flex-col gap-5 justify-center items-center py-10 my-10 bg-grey-main'>
            <div className='w-full max-w-[970px] px-[20px]  mx-auto '>
              {' '}
              {/* Adjust max width as needed */}
              <h3 className='text-[26px] font-bold text-primary-main font-raleway'>
                {BodyAbout.headTextPurple}
                <span className='text-primary-hight-light pl-2'>
                  {BodyAbout.headTextPink}
                </span>
              </h3>
              {BodyAbout.paragraohArr.map((item) => (
                <p className=' text-base py-4 font-avenir font-light'>
                  {item.paragraph}
                </p>
              ))}
            </div>
          </section>

          <section className='flex flex-col gap-5  justify-center align-middle max-w-[970px] ml-auto mr-auto pb-5 px-[20px]'>
            <h3 className='text-[26px]  font-semibold text-primary-hight-light font-avenir'>
              {Classroom.headText}
            </h3>
            <p className='text-base font-avenir font-semibold text-secondary '>
              {Classroom.paragraph}
            </p>
          </section>
        </div>

        <ClassroomGridCenter />
      </div>
    </main>
  );
}

export default Centers;
