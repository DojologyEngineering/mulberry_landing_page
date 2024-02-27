import { StaticImageData } from 'next/image';

import enrollMent from '/public/img/enrollment.webp';
import openSoon from '/public/img/opensoon.webp';

interface FeatureType {
  title: string;
  descrip: string[];
}

interface Feature {
  title: string;
  featuretype: FeatureType[];
}
const featureData: Feature[] = [
  {
    title: 'Language Literacy Studio (English and Chinese)',
    featuretype: [
      {
        title: 'Reading Corner',
        descrip: [
          'Immerse in English and Chinese literature',
          'Encourage a love for reading',
        ],
      },
      {
        title: 'Language Exploration',
        descrip: ['Interactive activities in English and Chinese'],
      },
    ],
  },
  {
    title: 'Logical Math Studio',
    featuretype: [
      {
        title: 'Math Challenges',
        descrip: [
          'Engage in logical problem-solving',
          'Develop mathematical skills',
        ],
      },
    ],
  },
  {
    title: 'Multi-purpose Studio',
    featuretype: [
      {
        title: 'Creative Arts',
        descrip: [
          'Space for music & movement',
          'Gross motor and drama activities',
        ],
      },
    ],
  },
];

const jobs = [
  {
    slug: 'mulberry-learning-bgc',
    location:
      '7/F, GSC Corporate Tower, Triangle Drive, Bonifacio Global City, Taguig City, 1630 Metro Manila',
    title: 'Junior Web Developer',
    description:
      'Conveniently located at GSC Tower near Uptown Mall BGC, Mulberry Learning @ BGC is a Reggio Emilia inspired haven with spaces that stimulate a child’s senses and encourage their natural curiosity to explore. Our school is bathed in the glow of natural light. Studies reveal that access to natural daylight provides better learning conditions and health in schools. It`s been proven that students had a 20% better learning rate in math and 26% improved rate in reading performance. With 400 sqm of dedicated learning space, Mulberry Learning BGC`s well-thought out design features:',
    logo: enrollMent,
    feature: featureData,
  },
  {
    slug: 'mulberry-learning-greenhills',
    location:
      '297 Connecticut St., Greenhills East, Mandaluyong City, Metro Manila',
    title: 'iOS Developer',
    description: '',
    logo: openSoon,
    feature: featureData,
  },
  // {
  //   slug: 'center',
  //   title: 'iOS Developer',
  //   description: 'Passionate for crafting great mobile experiences',
  // },
];

interface Job {
  slug: string;
  title: string;
  location: string;
  description: string;
  logo: StaticImageData;
  feature: Feature[];
}
export async function getJobs(slug?: string): Promise<Job[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (slug) {
        const job = jobs.filter((j) => j.slug === slug);
        resolve(job);
      } else {
        resolve(jobs);
      }
    }, 1000);
  });
}
