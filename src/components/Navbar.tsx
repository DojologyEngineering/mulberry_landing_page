'use client';

import { Fragment, useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Menu, Transition } from '@headlessui/react';
import { FiEdit3 } from 'react-icons/fi';
import { TbMenu2 } from 'react-icons/tb';

import Drawer from '@/components/Drawer';

import { contactData, menu, socialMedias } from '@/utils/data-util';

type menuType = (typeof menu)[0];

export default function Navbar() {
  const pathname = usePathname();
  // console.log('pathname:', pathname);

  const [isOpen, setIsOpen] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [openSubmenu, setOpenSubmenu] = useState('');

  // console.log('hideNav:', hideNav);

  const isActive = (menu: menuType) => {
    console.log('menu:', menu);
    if (!menu.subMenu) {
      return pathname === menu.value;
    } else {
      const isSubActive = menu.subMenu.findIndex((sm) => sm.value === pathname);
      if (isSubActive !== -1) {
        return true;
      } else {
        return openSubmenu === menu.value;
      }
    }

    return false;
  };

  useEffect(() => {
    // Function to handle scroll events
    // let prevScrollpos = 0;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const screenHeight = window.screen.height;
      if (prevScrollpos > currentScrollPos) {
        // Show navbar
        setHideNav(false);
      } else {
        // Hide navbar
        if (currentScrollPos > screenHeight / 2) setHideNav(true);
      }
      setPrevScrollpos(currentScrollPos);
      // prevScrollpos = currentScrollPos;
    };
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);
    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollpos]);

  return (
    <div
      className={`transition-all ease-in-out duration-300 sticky z-10 bg-white ${hideNav ? '-top-52' : 'top-0'} ${!hideNav && prevScrollpos > 0 ? 'drop-shadow-md' : 'drop-shadow-none'}`}
    >
      <div className='hidden bg-primary-light md:block'>
        <div className='container flex items-center mx-auto space-x-6'>
          {contactData.map((con, i) => (
            <span key={i} className='flex items-center text-white'>
              <con.icon size={18} />
              <a className='ml-3 text-sm underline' href={con.href}>
                {con.text}
              </a>
            </span>
          ))}

          <span className='flex-grow' />

          {/* social media */}
          <span className='flex items-center space-x-2 text-white'>
            {socialMedias.map((sm, i) => (
              <a
                key={i}
                href={sm.value}
                className='p-1 bg-white rounded-full text-primary-light'
                target='_blank'
              >
                <sm.icon size={18} />
              </a>
            ))}
          </span>
          {/* end social media */}
          <button className='flex items-center font-patrick text-xl font-normal h-12 px-3 text-white transition duration-150 bg-primary-main hover:bg-primary-hight-light'>
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
            {menu.map((m, i) =>
              !m.subMenu ? (
                <Link
                  key={i}
                  href={m.value}
                  className={`h-10 px-4 text-sm font-semibold transition ease-in-out delay-100 border-b-2 hover:border-primary-hight-light hover:text-primary-hight-light ${isActive(m) ? 'border-primary-hight-light text-primary-hight-light' : 'border-transparent'}`}
                >
                  {m.title}
                </Link>
              ) : (
                <Menu
                  key={i}
                  as='div'
                  className='relative inline-block text-left'
                  onMouseEnter={() => setOpenSubmenu(m.value)}
                  onMouseLeave={() => setOpenSubmenu('')}
                >
                  <div>
                    <Menu.Button
                      className={`outline-none h-10 flex px-4 text-sm font-semibold transition ease-in-out delay-100 border-b-2 hover:border-primary-hight-light hover:text-primary-hight-light ${isActive(m) ? 'border-primary-hight-light text-primary-hight-light' : 'border-transparent'}`}
                    >
                      {m.title}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    show={openSubmenu === m.value}
                    enter='transition ease-out duration-100'
                    enterFrom='transform opacity-0 scale-95'
                    enterTo='transform opacity-100 scale-100'
                    leave='transition ease-in duration-75'
                    leaveFrom='transform opacity-100 scale-100'
                    leaveTo='transform opacity-0 scale-95'
                  >
                    <Menu.Items className='absolute left-0 w-72 origin-top-right divide-y divide-gray-100 rounded-md bg-gray-50 shadow-lg ring-1 ring-black/5 focus:outline-none'>
                      <div className='px-1 py-1 flex flex-col'>
                        {m.subMenu.map((sm, i) => (
                          <Menu.Item key={i}>
                            {({ active }) => (
                              <Link
                                href={sm.value}
                                className={`w-full px-4 py-3 text-sm font-semibold transition ease-in-out delay-100 hover:text-primary-hight-light hover:bg-slate-50 ${pathname === sm.value ? ' text-primary-hight-light' : ''}`}
                              >
                                {sm.title}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              ),
            )}
          </span>
          <button
            className='block text-gray-600 md:hidden'
            onClick={() => setIsOpen(true)}
          >
            <TbMenu2 size={40} />
          </button>
        </nav>
      </header>

      <Drawer {...{ isOpen, setIsOpen }}>
        {menu.map((m, i) => (
          <Link
            key={i}
            href={m.value}
            className='flex items-center justify-center h-14 border-b-[1px] hover:text-primary-hight-light hover:bg-slate-50'
          >
            <span className='font-medium'>{m.title}</span>
          </Link>
        ))}
        <div className='flex flex-col items-center mt-8'>
          <button className='flex items-center px-8 text-white transition duration-150 rounded-lg h-14 bg-primary-main hover:bg-primary-hight-light'>
            Enroll Now <FiEdit3 className='ml-2' size={24} />
          </button>
          <div className='flex mt-8 space-x-3'>
            {socialMedias.map((sm, i) => (
              <a
                key={i}
                href={sm.value}
                className='p-2 text-white rounded-full bg-primary-light'
                target='_blank'
              >
                <sm.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </Drawer>
    </div>
  );
}
