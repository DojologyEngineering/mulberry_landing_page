'use client';

import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

import profilePic from '/public/img/curve.webp';

interface IFormInput {
  center: string;
}
function ContactUs() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  return (
    <div className='mt-5'>
      <div className='shadow-sm'>
        <div className=' bg-primary-main h-40 flex items-center absolute mt-2'>
          <Image
            src={profilePic}
            alt='Picture of the author'
            priority
            className='h-30 pt-20'
          />
        </div>

        <div className=' flex justify-center top-10 relative'>
          <h1 className='text-4xl font-bold text-white'>
            Common Questions and School Tour
          </h1>
        </div>
      </div>
      <div className=' mt-40 bg-grey-light pt-5 px-60 py-10 '>
        <h2 className='text-4xl text-primary-light mb-10'>
          How can we <span className='text-primary-hight-light'>help?</span>
        </h2>
        <div className=' '>
          <h1 className='text-xl mb-10'>
            Choosing the right educational childcare and preschool for your
            family is a big decision. We know you have questions, so we have
            compiled our most frequently asked questions below.
          </h1>
          <div className='mb-10'>
            <Link
              href={'/Parents'}
              className='text-primary-hight-light underline'
            >
              <h1 className='text-xl'>Parents</h1>
            </Link>
            <Link
              href={'/job-seeker'}
              className='text-primary-hight-light underline'
            >
              <h1 className='text-xl'>Job Seeker</h1>
            </Link>
            <Link
              href={'/partnership'}
              className='text-primary-hight-light underline'
            >
              <h1 className='text-xl'>Partnership and Others</h1>
            </Link>
          </div>
          <h1 className='text-xl'>
            Can&apos;t find an answer to what you&apos;re looking for? Just ask
            us! We&apos;re here to help.
          </h1>
        </div>
      </div>
      <div className='px-60 mt-10 mb-10'>
        <h2 className='text-4xl text-primary-light mb-10'>
          Schedule a
          <span className='text-primary-hight-light'> School Tour</span>
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='flex '>
            <div className='w-1/2 mr-10'>
              <div>
                <label>Selected Centers *</label>
              </div>
              <select
                {...register('center')}
                className='bg-grey-main rounded-3xl w-full h-10 hover:bg-purple-main'
              >
                <option value='Mulberry Learning @ BGC'>
                  Mulberry Learning @ BGC
                </option>
                <option value='Mulberry Learning @ Greenhills'>
                  Mulberry Learning @ Greenhills
                </option>
              </select>
            </div>
            <div className='w-1/2'>
              <div>
                <label>Interested Programme *</label>
              </div>
              <select
                {...register('center')}
                className='bg-grey-main rounded-3xl w-full h-10 hover:bg-purple-main'
              >
                <option value='Mulberry Learning @ BGC'>
                  Mulberry Learning @ BGC
                </option>
                <option value='Mulberry Learning @ Greenhills'>
                  Mulberry Learning @ Greenhills
                </option>
              </select>
            </div>
          </div>
          <div className='flex justify-between mt-4'>
            <div>
              <div>
                <label>Parent&apos;s Full Name *</label>
              </div>
              <input
                type='text'
                className='bg-grey-main rounded-3xl  h-10 hover:bg-purple-main w-72'
              />
            </div>
            <div>
              <div>
                <label>Mobile Number *</label>
              </div>
              <input
                type='text'
                className='bg-grey-main rounded-3xl h-10 hover:bg-purple-main w-72'
              />
            </div>
            <div>
              <div>
                <label>Email Address *</label>
              </div>
              <input
                type='text'
                className='bg-grey-main rounded-3xl h-10 hover:bg-purple-main w-72'
              />
            </div>
          </div>

          <div className='flex justify-between mt-4'>
            <div>
              <div>
                <label>Child&apos;s Name *</label>
              </div>
              <input
                type='text'
                className='bg-grey-main rounded-3xl  h-10 hover:bg-purple-main w-64'
              />
            </div>
            <div>
              <div>
                <label>Child&apos;s Date of Birth *</label>
              </div>
              <input
                type='text'
                className='bg-grey-main rounded-3xl h-10 hover:bg-purple-main w-64'
              />
            </div>
            <div>
              <div>
                <label>How did you learn about Mulberry Learning ?</label>
              </div>
              <input
                type='text'
                className='bg-grey-main rounded-3xl h-10 hover:bg-purple-main w-96'
              />
            </div>
          </div>
          <button className='bg-grey-hight-light px-10 py-3 rounded-3xl mt-10 text-white'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
