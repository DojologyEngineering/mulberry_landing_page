import { StaticImageData } from 'next/image';

import enrollMent from '/public/img/enrollment.webp';
import image1 from '/public/img/image1.webp';
import openSoon from '/public/img/opensoon.webp';

interface FeatureType {
  title: string;
  description?: string[];
}

interface Feature {
  title: string;
  featuretype: FeatureType[];
}
export const bookTour =
  'Book a School Tour Express your interest in a School Tour and speak to our highly-qualified educators to learn more about Mulberry Learning’s proprietary award-winning curriculum and explore our Reggio-inspired learning spaces.';
export const promote =
  'Take advantage of exclusive school fee discounts of up to P50,000 while your child experiences and enjoys fun-filled activities at our Reggio-inspired learning environment. Book a school tour to learn more about the special enrollment promotions on offer for 2023 enrollment!';

const featureData: Feature[] = [
  {
    title: 'Specialized Learning Studios:',
    featuretype: [
      {
        title: 'Nursery Wonderment Studio',
        description: [
          'The studios are to be built within enclosed rooms, each specialized to cater for specific subject exploration.',
        ],
      },
      {
        title: 'Language Literacy Studio (English and Chinese)',
      },
      {
        title: 'Logical Math Studio',
      },
      {
        title: 'Multi-purpose studio',
        description: [
          'an uncluttered space for all children to perform music & movement, gross motor and drama activity',
        ],
      },
    ],
  },
  {
    title: 'Centralized Learning Stations:',
    featuretype: [
      {
        title: 'Project Inquiry Space',
      },
    ],
  },
  {
    title: 'Construction Piazza',
    featuretype: [
      {
        title: 'Creative Arts',
        description: [
          'A wide range of skills are developed through block & building play, including creativity, cognitive thinking, spatial thinking, problem solving, fundamental Math and also social skills',
        ],
      },
      {
        title: 'Imaginary Playscape',
        description: [
          'Make-believe play stimulates the imagination of children, helping them build social skills, creativity, and a better understanding of others! Children learn best by observing, imagining and doing!',
        ],
      },
      {
        title: 'Art Atelier',
        description: [
          'A place of wonder where children can explore and create with different types of materials and media. Ateliers are equipped with paint, paper, crayons, pencils, clay, dough, wire, beads, loose parts and a wide range of recycled and natural materials made available for the children to express freely the “hundred languages of children”.',
        ],
      },
      {
        title: 'Transient Atelier',
        description: [
          'Loose parts are beautiful objects or natural materials that children can move, manipulate, combine, redesign, take part, and change while they play. When children interact with loose parts, their mind generates many “what if” scenarios that hone their critical thinking, problem-solving and reasoning skills – all highly valuable later in adult life!',
        ],
      },
      {
        title: 'Light Atelier',
        description: [
          'Light in various forms can be discovered through explorations that inspire wonder and curiosity by bringing together Art and Science. The Light Atelier offers children a highly interactive experience that help them create new ideas, test their hypotheses and develop new insights while observing phenomena from different perspectives!',
        ],
      },
      {
        title: 'Discovery Cove',
        description: [
          'Come and investigate, explore, think, predict and analyse... Develop an understanding and love for the wonders of nature around us!',
        ],
      },
      {
        title: 'Reading Nook',
        description: [
          'Cosy and inviting, the Reading Nook is a perfect place for children to browse literary works and retreat into a world of imagination, exploration and discovery!',
        ],
      },
      {
        title: 'Busy Baker',
        description: [
          'In our Busy Baker kitchen, children engage in sensorial activities and hands-on practical experiences, developing fine motor skills, hand-eye coordination and learning important skills! (math skills, comprehension, scientific knowledge, self-esteem, communication, life skills)',
        ],
      },
    ],
  },
  {
    title: 'Indoor Play Spaces',
    featuretype: [
      {
        title: 'Climbing gym and slide, cycling track, play sets',
      },
    ],
  },
];
const imageReview = [{ id: 0, image: image1 }];

export const locations = [
  {
    slug: 'mulberry-learning-bgc',
    location:
      '7/F, GSC Corporate Tower, Triangle Drive, Bonifacio Global City, Taguig City, 1630 Metro Manila',
    title: 'Junior Web Developer',
    description:
      'Conveniently located at GSC Tower near Uptown Mall BGC, Mulberry Learning @ BGC is a Reggio Emilia inspired haven with spaces that stimulate a child’s senses and encourage their natural curiosity to explore. Our school is bathed in the glow of natural light. Studies reveal that access to natural daylight provides better learning conditions and health in schools. It`s been proven that students had a 20% better learning rate in math and 26% improved rate in reading performance. With 400 sqm of dedicated learning space, Mulberry Learning BGC`s well-thought out design features:',
    logo: enrollMent,
    feature: featureData,
    imageReview: imageReview,
  },
  {
    slug: 'mulberry-learning-greenhills',
    location:
      '297 Connecticut St., Greenhills East, Mandaluyong City, Metro Manila',
    title: 'iOS Developer',
    description: '',
    logo: openSoon,
    imageReview: imageReview,
  },
];
interface Job {
  slug: string;
  title: string;
  location: string;
  description: string;
  logo: StaticImageData;
  feature?: Feature[];
  imageReview: {
    id: number;
    image: StaticImageData;
  }[];
}
// export async function getJobs(slug?: string): Promise<Job[]> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       if (slug) {
//         const job = jobs.filter((j) => j.slug === slug);
//         resolve(job);
//       } else {
//         resolve(jobs);
//       }
//     }, 1000);
//   });
// }
