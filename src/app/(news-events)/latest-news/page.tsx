import React from 'react';

import Image from 'next/image';

import { AiOutlineLink } from 'react-icons/ai';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';

import NewsCard from '@/components/NewsCard';

import EighthCard2 from '../../../../public/img/EighthCard2.webp';
import EighthCard from '../../../../public/img/EighthCard.webp';
import FifthCard2 from '../../../../public/img/FifthCard2.webp';
import FifthCard from '../../../../public/img/FifthCard.webp';
import FirstCard2 from '../../../../public/img/FirstCard2.webp';
import FirstCard from '../../../../public/img/FirstCard.webp';
import FouthCard2 from '../../../../public/img/FouthCard2.webp';
import FouthCard from '../../../../public/img/FouthCard.webp';
import ProfileCard from '../../../../public/img/ProfileCard.webp';
import SecondCard2 from '../../../../public/img/SecondCard2.webp';
import SecondCard from '../../../../public/img/SecondCard.webp';
import SeventhCard2 from '../../../../public/img/SeventhCard2.webp';
import SeventhCard from '../../../../public/img/SeventhCard.webp';
import SixthCard2 from '../../../../public/img/SixthCard2.webp';
import SixthCard from '../../../../public/img/SixthCard.webp';
import ThirdCard2 from '../../../../public/img/ThirdCard2.webp';
import ThirdCard from '../../../../public/img/ThirdCard.webp';
import Gallery from '../../../../public/img/gallery.png';
import NewBanner from '../../../../public/img/newsBanner.webp';

export const metadata = {
  title: 'News & Events | Mulberry International Preschool, Cambodia',
};
export const textCover = 'News and Events';

export const CardData = [
  {
    img: FirstCard,
    profileImg: ProfileCard,
    tittle: 'Mulberry International Preschool, Cambodia',
    date: 'Aug 29, 2023',
    status: '1 min',
    description:
      "Mulberry International Preschool, Cambodia Annual Teachers' Training 2023",
    route: 'annual-mulberry-learning-teachers-training-2023',
    imgDetail: FirstCard2,
  },
  {
    img: SecondCard,
    profileImg: ProfileCard,
    tittle: 'Mulberry International Preschool, Cambodia',
    date: 'Aug 21, 2023',
    status: '4 min',
    description: 'Importance of Good Nutrition For Preschoolers',
    route: 'importance-of-good-nutrition-for-preschoolers',
    imgDetail: SecondCard2,
  },
  {
    img: ThirdCard,
    profileImg: ProfileCard,
    tittle: 'Mulberry International Preschool, Cambodia',
    date: 'Aug 15, 2023',
    status: '1 min',
    description:
      'Mulberry International Preschool, Cambodia @ BGC is Officially Open',
    route: 'mulberry-learning-bgc-is-officially-open',
    imgDetail: ThirdCard2,
  },
  {
    img: FouthCard,
    profileImg: ProfileCard,
    tittle: 'Mulberry International Preschool, Cambodia',
    date: 'Jul 8, 2023',
    status: '4 min',
    description: 'Mommy, don’t go!',
    route: 'mommy-don-t-go',
    imgDetail: FouthCard2,
  },
  {
    img: FifthCard,
    profileImg: ProfileCard,
    tittle: 'Mulberry International Preschool, Cambodia',
    date: 'Jul 16, 2023',
    status: '5 min',
    description: 'Self-Regulation: The key to achieving success',
    route: 'self-regulation-the-key-to-achieving-success',
    imgDetail: FifthCard2,
  },
  {
    img: SixthCard,
    profileImg: ProfileCard,
    tittle: 'Mulberry International Preschool, Cambodia',
    date: 'Jun 16, 2023',
    status: '3 min',
    description: 'The Reggio Emilia Approach And Why It Works',
    route: 'the-reggio-emilia-approach-and-why-it-works',
    imgDetail: SixthCard2,
  },
  {
    img: SeventhCard,
    profileImg: ProfileCard,
    tittle: 'Mulberry International Preschool, Cambodia',
    date: 'Jun 15, 2023',
    status: '5 min',
    description: 'Why Play Is Important For Your Child – Five Tips For Parents',
    route: 'lorem-ipsum',
    imgDetail: SeventhCard2,
  },
  {
    img: EighthCard,
    profileImg: ProfileCard,
    tittle: 'Mulberry International Preschool, Cambodia',
    date: 'Jun 14, 2023',
    status: '2 min',
    description: '3 Ways You May Be Unknowingly Jeopardizing Your Kids’ Health',
    route: 'lorem-ipsum-post2',
    imgDetail: EighthCard2,
  },
];

export const PostSocialMedias = [
  {
    icon: FaFacebookF,
    value: 'https://www.facebook.com',
  },
  {
    icon: FaTwitter,
    value: 'https://twitter.com/',
  },
  {
    icon: RiLinkedinFill,
    value: 'https://www.linkedin.com/',
  },
  {
    icon: AiOutlineLink,
    value: '#',
  },
];

function LatestNew() {
  return (
    <main className='pb-16 sm:pb-10'>
      <div className='flex justify-center align-middle flex-col'>
        <div className='relative'>
          <Image
            src={NewBanner}
            alt='logo'
            priority
            className='w-full sm:h-auto h-[60px]'
          />
          <span className='absolute whitespace-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-primary-main text-white font-raleway font-bold px-5 text-[18px] md:text-[26px] xl:text-[40px]  rounded'>
            {textCover}
          </span>
        </div>
        <Image
          src={Gallery}
          alt='logo'
          priority
          className='max-h-[120px] w-full relative lg:bottom-12 md:bottom-10 sm:bottom-6 bottom-4'
        />
        <div className='flex justify-center relative md:bottom-6'>
          <div className='grid sm:grid-cols-3 grid-cols-1 gap-6 align-middle max-w-[970px] px-[20px] justify-center'>
            <NewsCard />
          </div>
        </div>
      </div>
    </main>
  );
}

export default LatestNew;
