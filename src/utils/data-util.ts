import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { PiMapPinLineFill } from 'react-icons/pi';
import { TbMailFilled, TbPhoneFilled } from 'react-icons/tb';

export const contactData = [
  { icon: TbPhoneFilled, text: '+855 12 123 123', href: 'tel:+85512123123' },
  { icon: TbMailFilled, text: 'test@gmail.com', href: 'mailto:test@gmail.com' },
];

export const socialMedias = [
  {
    icon: FaInstagram,
    title: 'instagram',
    value: 'https://www.instagram.com',
  },
  {
    icon: FaFacebookF,
    title: 'facebook',
    value: 'https://www.facebook.com',
  },
  {
    icon: FaTiktok,
    title: 'tiktok',
    value: 'https://www.tiktok.com',
  },
];

export const menu = [
  { title: 'Home', value: '/' },
  {
    title: 'About Us',
    value: '/about',
    subMenu: [
      { title: 'Mulberry Learning Credo', value: '/about' },
      { title: 'Center Enviroment', value: '/centers' },
      { title: 'Careers', value: '/careers' },
    ],
  },
  {
    title: 'Curriculum',
    value: '/curriculum',
    subMenu: [
      { title: 'Habits of Mind', value: '/habits-of-mind' },
      { title: 'Literacy And Numeracy', value: '/literacy-and-numeracy' },
      { title: 'Project Inquiry', value: '/project-inquiry' },
      { title: 'S.T.E.A.M Enrichment', value: 'steam-enrichment' },
    ],
  },
  { title: 'News & Events', value: '/news' },
  {
    title: 'Locations',
    value: '/center',
    subMenu: [
      { title: 'Mulberry Learning @ BGC', value: '/mulberry-learning-bgc' },
      {
        title: 'Mulberry Learning @ Greenhills',
        value: '/mulberry-learning-greenhills',
      },
    ],
  },
  { title: 'Contact Us', value: '/contact-us' },
];

export const location = [
  {
    icon: PiMapPinLineFill,
    text: 'Mulberry Learning @ BGC 7/F, GSC Corporate Tower, Triangle Drive, Bonifacio Global City, Taguig City, Metro Manila',
  },
  {
    icon: PiMapPinLineFill,
    text: 'Mulberry Learning @ Greenhills 297 Connecticut St., Greenhills East, Mandaluyong City, Metro Manila',
  },
];

export const footerCenterText =
  'Mulberry Learning is the only preschool in Singapore with a truly unique preschool programs that incorporates the Reggio Emilia methodology, Habits of Mind™ framework and Multiple Intelligences that will nurture your child into a competent explorer, an imaginative thinker, and a creative problem solver.';
