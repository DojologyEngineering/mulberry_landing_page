import Image from 'next/image';
import Link from 'next/link';

import {
  contactData,
  footerCenterText,
  location,
  socialMedias,
} from '@/utils/data-util';

export default function Footer() {
  return (
    <footer className='bg-footer'>
      <div className='container px-4 py-10 mx-auto md:px-0'>
        <div className='grid grid-cols-1 gap-y-10 md:gap-x-10 md:grid-cols-5'>
          <div className='flex justify-center md:justify-start'>
            <Link className='relative h-32 w-36' href={`/`}>
              <Image
                className='object-cover'
                src={`/img/MBR_Logo_RGB.webp`}
                alt='logo'
                priority
                fill
                sizes='(max-width: 768px) 96px 80px, (max-width: 1200px) 144px 128px'
              />
            </Link>
          </div>
          <div className='col-span-2 md:px-4'>
            <p className='text-sm text-center md:text-left text-secondary font-avenir font-light'>
              {footerCenterText}
            </p>
          </div>
          <div className='col-span-2 text-sm md:pl-10'>
            <p className='mb-4 text-lg font-medium text-center md:text-base md:text-left font-avenir'>
              Contact with us
            </p>
            {location.map((loc, i) => (
              <div key={i} className='flex items-start mb-5'>
                <div className='text-left min-w-8'>
                  <loc.icon size={20} />
                </div>
                <div className='flex flex-col'>
                  <p className='text-secondary font-avenir font-light'>
                    {loc.text}
                  </p>
                  <a
                    href={loc.href}
                    className='text-secondary font-avenir font-light hover:underline hover:text-primary-hight-light'
                    target='_blank'
                  >
                    {loc.href}
                  </a>
                </div>
              </div>
            ))}
            {contactData.map((con, i) => (
              <div key={i} className='flex items-start mb-5'>
                <div className='text-left min-w-8'>
                  <con.icon size={20} />
                </div>
                <a
                  className='underline text-secondary font-avenir font-light'
                  href={con.href}
                >
                  {con.text}
                </a>
              </div>
            ))}
            <div className='flex items-center justify-center mt-8 space-x-6 md:justify-start'>
              {socialMedias.map((sm, i) => (
                <a key={i} href={sm.value}>
                  <sm.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='bg-primary-main'>
        <div className='container px-16 py-8 mx-auto'>
          <p className='text-sm font-light text-center text-white font-helvetica tracking-[0.01em]'>
            Copyright © {new Date().getFullYear()} Mulberry Learning Cambodia.
            All Rights Reserved. Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
