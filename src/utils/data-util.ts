import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { PiMapPinLineFill } from 'react-icons/pi';
import { TbMailFilled, TbPhoneFilled } from 'react-icons/tb';

export const contactData = [
  {
    icon: TbPhoneFilled,
    text: '+85578 553 778 / +85516 509 278',
    href: 'tel:+85578 553 778 / +85516 509 278',
  },
  {
    icon: TbMailFilled,
    text: 'admissions@mulberryinternationalpreschool.edu.kh',
    href: 'mailto:admissions@mulberryinternationalpreschool.edu.kh',
  },
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
      { title: 'Our Campus in Cambodia', value: '/ourCampus' },
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
  { title: 'News & Events', value: '/latest-news' },
  {
    title: 'Locations',
    value: '/centers',
    subMenu: [
      // { title: 'Mulberry Learning @ BGC', value: '/mulberry-learning-bgc' },
      {
        title: 'Mulberry Learning @ Cambodia',
        value: '/mulberry-learning-cambodia',
      },
    ],
  },
  { title: 'Contact Us', value: '/contact-us' },
];

export const location = [
  {
    icon: PiMapPinLineFill,
    text: 'The Star Platinum Mercurean Clubhouse, #8, M04 & M05, Borey Pheng Hout Boeung Snor, Phum Boeung Chuk, Sangkat Niroth, Khan Chbar Ampov',
    href: 'https://maps.app.goo.gl/63c9WtJHULsmnZ289?g_st=ic',
  },

  // {
  //   icon: PiMapPinLineFill,
  //   text: 'The Star Platinum Mercurean Clubhouse, #8, M04 & M05, Borey Pheng Hout Boeung Snor, Phum Boeung Chuk, Sangkat Niroth, Khan Chbar Ampov',
  //   href: 'https://maps.app.goo.gl/63c9WtJHULsmnZ289?g_st=ic',
  // },
];

export const footerCenterText =
  'Mulberry Learning is the only preschool in Cambodia with a truly unique preschool programs that incorporates the Reggio Emilia methodology, Habits of Mind™ framework and Multiple Intelligences that will nurture your child into a competent explorer, an imaginative thinker, and a creative problem solver.';
