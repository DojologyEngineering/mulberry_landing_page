'use client';

import { Fragment, memo, useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { Disclosure, Menu, Transition } from '@headlessui/react';
import { FiEdit3 } from 'react-icons/fi';
import { IoChevronDown } from 'react-icons/io5';
import { TbMenu2 } from 'react-icons/tb';

import Drawer from '@/components/Drawer';

import { contactData, menu, socialMedias } from '@/utils/data-util';

type menuType = (typeof menu)[0];

function Navbar() {
  const pathname = usePathname();
  // console.log('pathname:', pathname);
  const navigate = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [prevScrollpos, setPrevScrollpos] = useState(0);
  const [openSubmenu, setOpenSubmenu] = useState('');

  // console.log('hideNav:', hideNav);

  const isActive = (menu: menuType) => {
    // console.log('menu:', menu);
    if (!menu.subMenu) {
      return pathname === menu.value;
    } else {
      if (pathname === menu.value) {
        return true;
      }
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
      <div className='hidden bg-primary-lighter md:block'>
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
                className='p-1 bg-white rounded-full text-primary-lighter'
                target='_blank'
              >
                <sm.icon size={18} />
              </a>
            ))}
          </span>
          {/* end social media */}
          <button className='transition duration-150 bg-primary-main hover:bg-primary-hight-light'>
            <span className='flex items-center h-12 px-3 text-xl font-normal text-white transition duration-150 font-patrick hover:transform hover:scale-105'>
              Book a School Tour <FiEdit3 className='ml-2' size={24} />
            </span>
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
          <span className='relative items-center hidden space-x-2 md:flex'>
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
                  // className='relative inline-block text-left'
                  onMouseEnter={() => setOpenSubmenu(m.value)}
                  onMouseLeave={() => setOpenSubmenu('')}
                >
                  <Menu.Button
                    className={`h-10 flex`}
                    // className={`h-10 flex px-4 text-sm font-semibold transition ease-in-out delay-100 border-b-2 hover:border-primary-hight-light hover:text-primary-hight-light ${isActive(m) ? 'border-primary-hight-light text-primary-hight-light' : 'border-transparent'}`}
                  >
                    <Link
                      key={i}
                      href={m.value}
                      className={`h-full px-4 text-sm font-semibold transition ease-in-out delay-100 border-b-2 hover:border-primary-hight-light hover:text-primary-hight-light ${isActive(m) ? 'border-primary-hight-light text-primary-hight-light' : 'border-transparent'}`}
                    >
                      {m.title}
                    </Link>
                  </Menu.Button>
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
                    <Menu.Items className='absolute left-0 w-full origin-top-left divide-y shadow-md bg-gray-50'>
                      <div className='flex flex-col py-2 outline-none'>
                        {m.subMenu.map((sm, i) => (
                          <Menu.Item key={i}>
                            <Link
                              href={sm.value}
                              className={`w-full px-6 py-3 text-sm font-semibold transition ease-in-out delay-100 border-b hover:text-primary-hight-light hover:bg-gray-100 text-gray-500 ${pathname === sm.value && 'text-primary-hight-light'}`}
                              onClick={() => {
                                setOpenSubmenu('');
                              }}
                            >
                              {sm.title}
                            </Link>
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
        {menu.map((m, i) =>
          !m.subMenu ? (
            <Link
              key={i}
              href={m.value}
              className={`flex items-center justify-center h-14 border-b hover:text-primary-hight-light hover:bg-gray-50 ${isActive(m) && 'text-primary-hight-light'}`}
              onClick={() => {
                setOpenSubmenu('');
                setIsOpen(false);
              }}
            >
              <span className='text-sm font-semibold font-raleway'>
                {m.title}
              </span>
            </Link>
          ) : (
            <Disclosure key={i}>
              {({ open }) => (
                <>
                  <Disclosure.Button
                    as='span'
                    className={`relative flex items-center justify-center border-b h-14 hover:text-primary-hight-light hover:bg-gray-50 ${isActive(m) && 'text-primary-hight-light'}`}
                    onClick={() => {
                      setOpenSubmenu(m.value);
                      setOpenSubmenu('');
                    }}
                  >
                    <Link
                      className='text-sm font-semibold font-raleway'
                      href={m.value}
                      onClick={() => {
                        setOpenSubmenu('');
                        setIsOpen(false);
                      }}
                    >
                      {m.title}
                    </Link>
                    <IoChevronDown
                      className={`${open ? 'rotate-180 transform' : ''} absolute right-4 h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className='flex flex-col'>
                    {m.subMenu.map((sm, i) => (
                      <Link
                        key={i}
                        href={sm.value}
                        className={`relative flex items-center justify-center text-sm font-bold font-avenir h-14 hover:text-primary-hight-light hover:bg-gray-50 ${pathname === sm.value && 'text-primary-hight-light'}`}
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        {sm.title}
                      </Link>
                    ))}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ),
        )}
        <div className='flex flex-col items-center mt-8'>
          <button className='flex items-center px-8 text-xl text-white transition duration-150 rounded-lg font-patrick h-14 bg-primary-main hover:bg-primary-hight-light'>
            Enroll Now <FiEdit3 className='ml-2' size={24} />
          </button>
          <div className='flex mt-8 space-x-3'>
            {socialMedias.map((sm, i) => (
              <a
                key={i}
                href={sm.value}
                className='p-2 text-white rounded-full bg-primary-light font-'
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

export default memo(Navbar);
