'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

function BackHomeButton() {
  const navigate = useRouter();
  const Onnavigate = () => {
    navigate.push('/');
  };
  return (
    <div>
      <button
        onClick={Onnavigate}
        className='rounded-full text-skyblue-main border-2 border-skyblue-main max-w-40 py-5 px-3 mt-2 hover:bg-skyblue-main duration-300 hover:text-white'
      >
        Go Back Home
      </button>
    </div>
  );
}

export default BackHomeButton;
