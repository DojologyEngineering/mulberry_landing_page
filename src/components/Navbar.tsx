'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FiEdit3 } from 'react-icons/fi';
import { TbMailFilled, TbMenu2, TbPhoneFilled } from 'react-icons/tb';

const data = {
  phone: '+855 12 123 123',
  email: 'test@gmail.com',
  socialMedias: [
    {
      icon: FaInstagram,
      title: 'instagram',
      value: '',
    },
    {
      icon: FaFacebookF,
      title: 'facebook',
      value: '',
    },
    {
      icon: FaTiktok,
      title: 'tiktok',
      value: '',
    },
  ],
  menu: [
    { title: 'Home', value: '/' },
    { title: 'About', value: '/about' },
    { title: 'Curriculum', value: '/curriculum' },
    { title: 'News & Events', value: '/news' },
    { title: 'Locations', value: '/locations' },
    { title: 'Contact Us', value: '/contact' },
  ],
};

export default function Navbar() {
  const pathname = usePathname();
  console.log('pathname:', pathname);
  return (
    <div className='sticky top-0 bg-white'>
      <div className='hidden bg-primary-light md:block'>
        <div className='container flex items-center mx-auto space-x-6'>
          <span className='flex items-center text-white'>
            <TbPhoneFilled size={18} />
            <a className='ml-3 text-sm underline' href={`tel:${data.phone}`}>
              {data.phone}
            </a>
          </span>
          <span className='flex items-center text-white'>
            <TbMailFilled size={18} />
            <a className='ml-3 text-sm underline' href={`mailto:${data.phone}`}>
              {data.email}
            </a>
          </span>

          <span className='flex-grow' />

          {/* social media */}
          <span className='flex items-center space-x-2 text-white'>
            {data.socialMedias.map((sm, i) => (
              <a
                key={i}
                href={sm.value}
                className='p-1 bg-white rounded-full text-primary-light'
              >
                <sm.icon size={18} />
              </a>
            ))}
          </span>
          {/* end social media */}
          <button className='flex items-center h-12 px-3 text-white transition duration-150 bg-primary-main hover:bg-primary-hight-light'>
            Book a School Tour <FiEdit3 className='ml-2' size={24} />
          </button>
        </div>
      </div>
      <div className='w-full h-[10px] md:h-2 bg-[url("/img/color-line.jpg")]' />
      <header className=''>
        <nav className='container flex items-center justify-between px-4 py-2 mx-auto md:px-0 md:items-end'>
          <Link className='relative w-24 h-20 md:w-36 md:h-32' href={`/`}>
            <Image
              className='object-cover'
              src={`/img/MBR_Logo_RGB.webp`}
              alt='logo'
              priority
              fill
              sizes='(max-width: 768px) 96px 80px, (max-width: 1200px) 144px 128px'
            />
          </Link>
          <span className='items-center hidden space-x-2 md:flex'>
            {data.menu.map((m, i) => (
              <Link
                key={i}
                href={m.value}
                className={`h-10 px-4 font-medium hover:border-b-2 border-primary-hight-light hover:text-primary-hight-light ${pathname === m.value && 'border-b-2 text-primary-hight-light'}`}
              >
                {m.title}
              </Link>
            ))}
          </span>
          <button className='block text-gray-600 md:hidden'>
            <TbMenu2 size={40} />
          </button>
        </nav>
      </header>
    </div>
  );
}
