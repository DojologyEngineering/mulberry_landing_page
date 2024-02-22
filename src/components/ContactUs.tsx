'use client';

import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
import { GrMail } from 'react-icons/gr';

import schoolLogo from '/public/img/MBR_Logo_RGB.webp';
import profilePic from '/public/img/curve.webp';
import schoolLocation from '/public/img/school.jpg';

interface IFormInput {
  center: string;
  program: string;
  name: string;
  mobile: string;
  address: string;
  childname1: string;
  datechild1: string;
  question: string;
  childname2: string;
  datechild2: string;
  message: string;
}
const socialMedias = [
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
];
const location = [
  {
    logo: schoolLocation,
    nameLocation: 'Mulberry Learning @ BGC',
    locationDetail:
      '7/F, GSC Corporate Tower, Triangle Drive, Bonifacio Global City, Taguig City, 1630 Metro Manila',
    value: '',
  },
  {
    logo: schoolLocation,
    nameLocation: 'Mulberry Learning @ Greenhills',
    locationDetail:
      '297 Connecticut St., Greenhills East, Mandaluyong City, Metro Manila',
    value: '',
  },
];
function ContactUs() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
  function onChange(value: any) {
    console.log('Captcha value:', value);
  }
  return (
    <div className='mt-5'>
      <div className='shadow-sm'>
        <div className=' bg-primary-main md:h-36 flex items-center absolute mt-2'>
          <Image
            src={profilePic}
            alt='Picture of the author'
            priority
            className='h-30 pt-20'
          />
        </div>

        <div className=' flex justify-center top-10 relative'>
          <h1 className='md:text-4xl text-xl font-bold text-white'>
            Common Questions and School Tour
          </h1>
        </div>
      </div>
      <div className='md:mt-36 mt-24 bg-grey-light pt-5 md:px-20 px-5 py-10 '>
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
      <div className='md:px-20 mt-10 mb-10 px-5'>
        <h2 className='text-4xl text-primary-light mb-10 '>
          Schedule a
          <span className='text-primary-hight-light'> School Tour</span>
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <label className='block mb-1'>Selected Centers *</label>
              <select
                {...register('center')}
                className='bg-grey-main rounded-3xl w-full h-10 hover:bg-purple-main focus:outline-none'
              >
                <option value='Mulberry Learning @ BGC'>
                  Mulberry Learning @ BGC
                </option>
                <option value='Mulberry Learning @ Greenhills'>
                  Mulberry Learning @ Greenhills
                </option>
              </select>
            </div>

            <div>
              <label className='block mb-1'>Interested Programme *</label>
              <select
                {...register('program')}
                className='bg-grey-main rounded-3xl w-full h-10 hover:bg-purple-main focus:outline-none'
              >
                <option value='Program A'>Program A</option>
                <option value='Program B'>Program B</option>
              </select>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-4'>
            <div>
              <label className='block mb-1'>Parent&apos;s Full Name *</label>
              <input
                {...register('name')}
                type='text'
                className='bg-grey-main rounded-3xl h-10 hover:bg-purple-main w-full focus:outline-none'
              />
            </div>

            <div>
              <label className='block mb-1'>Mobile Number *</label>
              <input
                {...register('mobile')}
                type='text'
                className='bg-grey-main rounded-3xl h-10 hover:bg-purple-main w-full focus:outline-none'
              />
            </div>

            <div>
              <label className='block mb-1'>Email Address *</label>
              <input
                {...register('address')}
                type='text'
                className='bg-grey-main rounded-3xl h-10 hover:bg-purple-main w-full focus:outline-none'
              />
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-4'>
            <div>
              <label className='block mb-1'>Child&apos;s Name *</label>
              <input
                {...register('childname1')}
                type='text'
                className='bg-grey-main rounded-3xl h-10 hover:bg-purple-main w-full focus:outline-none'
              />
            </div>

            <div>
              <label className='block mb-1'>Child&apos;s Date of Birth *</label>
              <input
                {...register('datechild1')}
                type='text'
                className='bg-grey-main rounded-3xl h-10 hover:bg-purple-main w-full focus:outline-none'
              />
            </div>

            <div>
              <label className='block mb-1'>
                How did you learn about Mulberry Learning ?
              </label>
              <input
                {...register('question')}
                type='text'
                className='bg-grey-main rounded-3xl h-10 hover:bg-purple-main w-full focus:outline-none'
              />
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-4'>
            <div>
              <label className='block mb-1'>Child 2&apos;s Name *</label>
              <input
                {...register('childname2')}
                type='text'
                className='bg-grey-main rounded-3xl h-10 hover:bg-purple-main w-full focus:outline-none'
              />
            </div>

            <div>
              <label className='block mb-1'>
                Child 2&apos;s Date of Birth *
              </label>
              <input
                {...register('datechild2')}
                type='text'
                className='bg-grey-main rounded-3xl h-10 hover:bg-purple-main w-full focus:outline-none'
              />
            </div>

            {/* <div className='flex items-center'>
              <ReCAPTCHA
                sitekey='6LeNhHspAAAAAD09okuPqq9GN4_MGXQmuBOxY5I9'
                onChange={onChange}
              />
            </div> */}
          </div>

          <div className='mt-4'>
            <label className='block mb-1'>Message and other inquiries</label>
            <textarea
              {...register('message')}
              className='bg-grey-main rounded-md hover:bg-purple-main w-full h-36 focus:outline-none'
            ></textarea>
          </div>

          <button className='bg-grey-hight-light px-10 py-3 rounded-3xl mt-8 text-white'>
            Submit
          </button>
        </form>
      </div>

      <div className='md:px-20 px-5'>
        <h2 className='text-4xl text-primary-light mb-10'>
          Our
          <span className='text-primary-hight-light'> Locations</span>
        </h2>

        <div className='mt-2 grid md:grid-cols-3 sm:grid-cols-1'>
          {location.map((i) => {
            return (
              <>
                <div className='mb-10 flex items-center flex-col border border-solid border-gray-300 mr-4 sm:w-60 md:w-72 max-w-xl'>
                  <Image
                    src={i.logo}
                    alt='image'
                    className='w-full h-auto object-cover'
                  />
                  <span className='font-bold mt-10 mb-5'>{i.nameLocation}</span>
                  <span className='pt-2 pb-2 mb-10 pl-3'>
                    {i.locationDetail}
                  </span>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className='grid md:grid-cols-12 sm:grid-cols-1 gap-4  mt-10 md:px-20 px-5  bg-grey-primary py-20 justify-between'>
        <div className='col-span-3'>
          <Image src={schoolLogo} alt='Image' />
        </div>
        <div className='col-span-5'>
          Mulberry Learning is the only preschool in Singapore with a truly
          unique preschool program that incorporates the Reggio Emilia
          methodology, Habits of Mind™ framework, and Multiple Intelligences
          that will nurture your child into a competent explorer, an imaginative
          thinker, and a creative problem solver.
        </div>
        <div className='col-span-4'>
          <div>
            <div className='font-bold'>Connect with us</div>
            <div className='flex items-start mt-3'>
              <div>
                <Link href={''}>
                  <FaLocationDot className='w-8 h-8 mr-3 transition-transform transform-gpu hover:scale-90' />
                </Link>
              </div>
              <div>
                <Link href={''}>
                  <p>
                    Mulberry Learning @ BGC <br /> 7/F, GSC Corporate Tower,
                    Triangle Drive, <br /> Bonifacio Global City, Taguig City,
                    Metro Manila
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className='flex flex-col '>
            <div className='flex flex-row items-start mt-6'>
              <Link href={''}>
                {' '}
                <div>
                  <FaLocationDot className='w-8 h-8 mr-3 transition-transform transform-gpu hover:scale-90' />
                </div>
              </Link>
              <div>
                <Link href={''}>
                  <p>
                    Mulberry Learning @ Greenhills <br />
                    297 Connecticut St., Greenhills East, <br />
                    Mandaluyong City, Metro Manila
                  </p>
                </Link>
              </div>
            </div>
            <div className='flex items-center mt-6'>
              <Link href={''}>
                <div>
                  <FaPhone className='w-8 h-8 mr-3 transition-transform transform-gpu hover:scale-90' />
                </div>
              </Link>

              <div>
                <Link href={''}>
                  <p>
                    Globe <span className='underline'> +63 945 186 6486</span>
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className='flex flex-row items-center mt-6 mb-6'>
            <Link href={''}>
              <div className='flex align-middle'>
                <GrMail className='w-8 h-8 mr-3 transition-transform transform-gpu hover:scale-90' />
              </div>
            </Link>

            <div>
              <Link href={''}>inquiry@mulberrylearning.com.ph </Link>
            </div>
          </div>
          <div className='flex flex-col'>
            <span className='flex items-center space-x-2 text-white'>
              {socialMedias.map((sm, i) => (
                <a
                  key={i}
                  href={sm.value}
                  className='p-1 bg-grey-primary rounded-full text-black-light'
                >
                  <sm.icon className='w-8 h-8' />
                </a>
              ))}
            </span>
          </div>
        </div>
      </div>

      <footer className='flex items-center justify-center bg-primary-light h-24 '>
        <div className='text-white'>
          <p className='text-center'>
            Copyright © 2024
            <span>
              <Link href={'#'} className='underline'>
                {' '}
                Mulberry Learning Philippines
              </Link>
            </span>
            . All Rights Reserved. Privacy Policy
          </p>
        </div>
      </footer>
    </div>
  );
}

export default ContactUs;
