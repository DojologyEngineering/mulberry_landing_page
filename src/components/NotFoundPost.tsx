import React from 'react';

import Link from 'next/link';

function NotFoundPost() {
  return (
    <div className='flex flex-col gap-5 mt-5'>
      <h3 className='text-[32px] font-bold font-raleway text-center'>
        We Couldn’t Find This Page
      </h3>
      <p className='text-base font-light font-avenir text-center'>
        Check out some of the other great posts in this blog.
      </p>

      <Link
        href={'/latest-news'}
        className='text-center mx-auto font-avenir text-base text-primary-hight-light mt-10 font-light'
      >
        <button className=''>See More Posts</button>
      </Link>
    </div>
  );
}

export default NotFoundPost;
