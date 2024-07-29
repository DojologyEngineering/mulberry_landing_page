import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { PiMapPinLineFill } from 'react-icons/pi';
import { TbMailFilled, TbPhoneFilled } from 'react-icons/tb';

export const contactData = [
  {
    icon: TbPhoneFilled,
    text: '+855 78 553 778 / +855 16 509 278',
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
    value: 'https://www.instagram.com/mulberryinternational/',
  },
  {
    icon: FaFacebookF,
    title: 'facebook',
    value: 'https://web.facebook.com/MulberryKH/',
  },
  {
    icon: FaTiktok,
    title: 'tiktok',
    value: 'https://www.tiktok.com/@mulberryinternational?_t=8mjC5o3o2l6&_r=1',
  },
];

export const menu = [
  { title: 'Home', value: '/' },
  {
    title: 'About Us',
    value: '/about',
    subMenu: [
      {
        title: 'Mulberry Learning Credo',
        value: '/about',
      },
      { title: 'Center Enviroment', value: '/centers' },
      { title: 'Careers', value: '/careers' },
      { title: 'Our Campus in Cambodia', value: '/our-campus' },
    ],
  },
  {
    title: 'Curriculum',
    value: '/curriculum',
    subMenu: [
      { title: 'Our Programs', value: '/curriculum' },
      { title: 'Habits of Mind', value: '/habits-of-mind' },
      { title: 'Literacy And Numeracy', value: '/literacy-and-numeracy' },
      { title: 'Project Inquiry', value: '/project-inquiry' },
      { title: 'S.T.E.A.M Enrichment', value: '/steam-enrichment' },
    ],
  },
  // { title: 'News & Events', value: '/latest-news' },
  {
    title: 'Locations',
    value: '/locations/mulberry-learning-cambodia',
    subMenu: [
      // { title: 'Mulberry International Preschool, Cambodia @ BGC', value: '/mulberry-learning-bgc' },
      {
        title: 'Mulberry International Preschool, Cambodia @ Cambodia',
        value: '/locations/mulberry-learning-cambodia',
      },
    ],
  },
  { title: 'Contact Us', value: '/contact-us' },
];

export const location = [
  {
    icon: PiMapPinLineFill,
    text: 'The Star Platinum Mercurean Clubhouse, #8, M04 & M05, Borey Peng Huoth Boeung Snor, Phum Boeung Chuk, Sangkat Niroth, Khan Chbar Ampov',
    href: 'https://maps.app.goo.gl/63c9WtJHULsmnZ289?g_st=ic',
  },

  // {
  //   icon: PiMapPinLineFill,
  //   text: 'The Star Platinum Mercurean Clubhouse, #8, M04 & M05, Borey Peng Huoth Boeung Snor, Phum Boeung Chuk, Sangkat Niroth, Khan Chbar Ampov',
  //   href: 'https://maps.app.goo.gl/63c9WtJHULsmnZ289?g_st=ic',
  // },
];

export const footerCenterText =
  'Mulberry International Preschool, Cambodia is the only preschool in Cambodia with a truly unique preschool programs that incorporates the Reggio Emilia methodology, Habits of Mind™ framework and Multiple Intelligences that will nurture your child into a competent explorer, an imaginative thinker, and a creative problem solver.';
