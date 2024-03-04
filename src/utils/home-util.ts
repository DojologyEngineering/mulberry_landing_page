import { GrCertificate } from 'react-icons/gr';
import { RiSchoolLine } from 'react-icons/ri';
import { TbUsersGroup } from 'react-icons/tb';

import center1 from '/public/img/center1.webp';
import center2 from '/public/img/center2.webp';
import media1 from '/public/img/media1.webp';
import media2 from '/public/img/media2.webp';
import media from '/public/img/media.webp';

export const homeBlog = [
  {
    id: 0,
    img: media,
    title: 'Mulberry Learning Annual Teachers` Training 2023',
    value: '',
  },
  {
    id: 1,
    img: media1,
    title: 'Importance of Good Nutrition For Preschoolers',
    value: '',
  },
  {
    id: 2,
    img: media2,
    title: 'Mulberry Learning @ BGC is Officially Open',
    value: '',
  },
];
export const learnEdge = [
  {
    id: 0,
    logo: GrCertificate,
    title: 'Curriculum',
    desc: 'Voted Singapore’s "Best Holistic Learning Programs" for consecutive years running, Mulberry Learning’s proprietary iDevelop / iExplore / iLearn / iExperience model promises a fun bilingual learning experience like no other, providing each child with a comprehensive and holistic education.',
    url: '',
  },
  {
    id: 1,
    logo: TbUsersGroup,
    title: 'Teachers',
    desc: 'The driving force behind Mulberry Learning’s award-winning curriculum – Our Preschool Teachers and Principals. With over 250 hours of extensive training, Mulberry Learning’s teachers embody and impart our Reggio-Inspired Curriculum that supports child-centric learning.',
    url: '',
  },
  {
    id: 2,
    logo: RiSchoolLine,
    title: 'Center Environment',
    desc: 'Beautifully designed spaces are hallmarks of the Mulberry Learning environment. We believe that our children learn best in beautiful surroundings, specially curated to stimulate their senses and encourage their natural urge to explore everything around. We have 2 child care centers conveniently located in BGC and Greenhills.',
    url: '',
  },
];

export const centerHighlight = [
  {
    id: 0,
    logo: center1,
    nameLocation: 'Mulberry Learning @ BGC',
    locationDetail:
      '7/F, GSC Corporate Tower, Triangle Drive, Bonifacio Global City, Taguig City, 1630 Metro Manila',
    value: '',
  },
  {
    id: 1,
    logo: center2,
    nameLocation: 'Mulberry Learning @ Greenhills',
    locationDetail:
      '297 Connecticut St., Greenhills East, Mandaluyong City, Metro Manila',
    value: '',
  },
];
