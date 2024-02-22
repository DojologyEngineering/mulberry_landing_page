'use client';

import { useEffect, useState } from 'react';

import { IoIosArrowUp } from 'react-icons/io';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
  };

  return (
    <button
      className={`bg-white border-solid border-2 border-grey fixed bottom-4 right-4 rounded-full p-2 outline-none transition-opacity duration-200 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={scrollToTop}
    >
      <IoIosArrowUp className='w-10 h-10' />
    </button>
  );
};

export default ScrollToTopButton;
