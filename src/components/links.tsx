'use client';

import Link from 'next/link';

export function Links() {
  return (
    <nav>
      <ul style={{ display: 'flex', justifyContent: 'space-around' }}>
        {/* <li style={{ listStyle: 'none' }}>
          <Link href='/latest-news' className='text-primary-main'>
            News & Events
          </Link>
        </li> */}
        <li style={{ listStyle: 'none' }}>
          <Link href='/locations' className='text-black'>
            Locations
          </Link>
        </li>
        <li style={{ listStyle: 'none' }}>
          <Link href='/contact-us' className='text-black'>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}
