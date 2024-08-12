'use client';

import axios from 'axios';
import React, { useRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReCAPTCHA from 'react-google-recaptcha';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import Image from 'next/image';
import Link from 'next/link';

import { Disclosure, Listbox } from '@headlessui/react';
import { BiCalendar } from 'react-icons/bi';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import {
  Centers,
  help,
  jopSeeker,
  location,
  parentsData,
  partnership,
  program,
} from '@/utils/contact-util';

import CusDialog from './CusDialog/CusDialog';
import CusErrDialog, { IErrDialogRef } from './CusDialog/CusErrDialog';
import LocationCard from './LocationCard';
import profilePic from '/public/img/curve.webp';

export interface IFormInput {
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
  recaptcha: boolean;
}

function ContactUs() {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const handleRecaptchaLoad = () => {
    setLoading(false);
  };
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const errDialogRef = useRef<IErrDialogRef>(null);
  const { control, setValue, reset, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      setLoading(true);
      setIsOpen(false);
      const response = await axios.post('/api/submit', {
        name: data.name,
        message: data,
        recaptchaToken: data.recaptcha ? data.recaptcha.toString() : '',
      });
      setLoading(false);
      if (response.data) {
        setIsOpen(true);
        recaptchaRef.current?.reset();
        reset({
          name: '',
          mobile: '',
          address: '',
          childname1: '',
          datechild1: '',
          childname2: '',
          datechild2: '',
          question: '',
          message: '',
          recaptcha: false,
        });
        setValue('recaptcha', false);
      }
      console.log(response.data);
      reset();
    } catch (error) {
      setIsOpen(false);
      console.error('Error submitting form:', error);
      errDialogRef.current?.open('Error Occured');
    }
  };

  return (
    <div>
      <CusErrDialog
        ref={errDialogRef}
        title='Something went wrong'
        buttonText='OK'
      />
      <CusDialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={
          'Your school tour has been successfully submitted. We will contact you later.'
        }
        buttonText='Ok'
        loading={loading}
      />
      <div className='shadow-sm'>
        <div className=' bg-primary-light md:h-36 flex items-center w-full absolute mt-2'>
          <Image
            src={profilePic}
            alt='Picture of the author'
            priority
            className='h-30 pt-20 w-full'
          />
        </div>

        <div className=' flex justify-center top-10 relative'>
          <h1 className='md:text-4xl text-xl font-bold text-white font-avenir'>
            Common Questions and School Tour
          </h1>
        </div>
      </div>
      <div className='bg-grey-light'>
        <div className='container mx-auto'>
          <div className='md:mt-36 mt-24 bg-grey-light pt-10 px-5 py-10 '>
            <h2 className='text-5xl text-primary-light mb-10 font-avenir'>
              How can we{' '}
              <span className='text-primary-hight-light font-avenir'>
                help?
              </span>
            </h2>
            <div className=' '>
              <h1 className='text-xl mb-10 font-avenir'>{help}</h1>
              <div className='mb-10 flex flex-col items-start'>
                <Disclosure>
                  <Disclosure.Button className=' text-primary-hight-light underline text-xl'>
                    Parents
                  </Disclosure.Button>
                  <Disclosure.Panel className='text-gray-500 mt-10'>
                    {parentsData.map((i) => {
                      return (
                        <div key={i.answer} className='mb-5'>
                          <p className='text-primary-hight-light text-md'>
                            {i.question}
                          </p>
                          <p className='text-md'>{i.answer}</p>
                        </div>
                      );
                    })}
                  </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                  <Disclosure.Button className=' text-primary-hight-light underline text-xl'>
                    Job seekers
                  </Disclosure.Button>
                  <Disclosure.Panel className='text-gray-500 mt-10'>
                    {jopSeeker.map((i) => {
                      return (
                        <div key={i.answer} className='mb-5'>
                          <p className='text-primary-hight-light text-md'>
                            {i.question}
                          </p>
                          <p className='text-md'>{i.answer}</p>
                          <li className='mt-10'>
                            <Link href={''} className='underline'>
                              {i.link}
                            </Link>
                          </li>
                        </div>
                      );
                    })}
                  </Disclosure.Panel>
                </Disclosure>
                <Disclosure>
                  <Disclosure.Button className=' text-primary-hight-light underline text-xl'>
                    Partnership and Others
                  </Disclosure.Button>
                  <Disclosure.Panel className='text-gray-500 mt-10'>
                    {partnership.map((i) => {
                      return (
                        <div key={i.detail} className='mb-5'>
                          <p className='text-md'>{i.detail}</p>
                        </div>
                      );
                    })}
                  </Disclosure.Panel>
                </Disclosure>
              </div>
              <h1 className='text-xl font-avenir'>
                Can&apos;t find an answer to what you&apos;re looking for? Just
                ask us! We&apos;re here to help.
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className='container mt-5 mx-auto'>
        <div className='mt-10 mb-10 px-4'>
          <h2 className='text-5xl text-primary-light mb-10 font-avenir'>
            Schedule a
            <span className='text-primary-hight-light font-avenir'>
              {' '}
              School Tour
            </span>
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div>
                <label className='block mb-1 font-avenir text-sm'>
                  Selected Centers *
                </label>
                <div>
                  <Controller
                    name='center'
                    control={control}
                    defaultValue={Centers[0].value}
                    render={({ field }) => (
                      <div className='relative z-10'>
                        <Listbox
                          value={field.value}
                          onChange={(value) => field.onChange(value)}
                        >
                          <Listbox.Button
                            className='bg-grey-main text-white py-2 px-4 rounded-3xl w-full flex items-center justify-between hover:bg-purple-main'
                            // onClick={toggleListbox}
                          >
                            <div className='text-black'>{field.value}</div>
                            {isOpen ? (
                              <MdKeyboardArrowUp className='text-black' />
                            ) : (
                              <MdKeyboardArrowDown className='text-black' />
                            )}
                          </Listbox.Button>

                          <Listbox.Options className='rounded-3xl shadow-md mt-2 z-50 absolute w-full bg-white'>
                            {Centers.map((prog, index) => (
                              <Listbox.Option key={prog.id} value={prog.value}>
                                {({ active }) => (
                                  <div
                                    className={`${
                                      active
                                        ? 'bg-purple-main text-black'
                                        : 'text-gray-800 hover:bg-gray-200'
                                    } cursor-pointer select-none relative py-2 pl-4 pr-4 ${
                                      index === 0 ? 'rounded-t-3xl' : ''
                                    } ${
                                      index === Centers.length - 1
                                        ? 'rounded-b-3xl'
                                        : ''
                                    }`}
                                  >
                                    {prog.name}
                                  </div>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Listbox>
                      </div>
                    )}
                  />
                </div>
              </div>
              <div>
                <label className='block mb-1 font-avenir text-sm'>
                  Interested Programme *
                </label>
                <Controller
                  name='program'
                  control={control}
                  defaultValue={program[0].value}
                  render={({ field }) => (
                    <div className='relative z-10'>
                      <Listbox
                        value={field.value}
                        onChange={(value) => field.onChange(value)}
                      >
                        <Listbox.Button
                          className='bg-grey-main text-white py-2 px-4 rounded-3xl w-full flex items-center justify-between hover:bg-purple-main'
                          // onClick={toggleListbox}
                        >
                          <div className='text-black'> {field.value}</div>
                          {isOpen ? (
                            <MdKeyboardArrowUp className='text-black' />
                          ) : (
                            <MdKeyboardArrowDown className='text-black' />
                          )}
                        </Listbox.Button>

                        <Listbox.Options className='rounded-3xl shadow-md mt-2 absolute w-full bg-white'>
                          {program.map((prog, index) => (
                            <Listbox.Option key={prog.id} value={prog.value}>
                              {({ active }) => (
                                <div
                                  className={`${
                                    active
                                      ? 'bg-purple-main text-black'
                                      : 'text-gray-800 hover:bg-gray-200'
                                  } cursor-pointer select-none relative py-2 pl-4 pr-4 ${
                                    index === 0 ? 'rounded-t-3xl' : ''
                                  } ${
                                    index === program.length - 1
                                      ? 'rounded-b-3xl'
                                      : ''
                                  }`}
                                >
                                  {prog.name}
                                </div>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Listbox>
                    </div>
                  )}
                />
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-4'>
              <div>
                <label className='block mb-1 font-avenir text-sm'>
                  Parent&apos;s Full Name *
                </label>
                <Controller
                  name='name'
                  control={control}
                  defaultValue={''}
                  rules={{ required: true }}
                  render={({
                    field: { value, onChange },
                    fieldState: { error },
                  }) => (
                    <>
                      <input
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        type='text'
                        className={`bg-grey-main px-4 rounded-3xl h-10 hover:bg-purple-main w-full focus:outline-none ${
                          error
                            ? 'border-2 border-errorborder-light bg-errorbg-main'
                            : ''
                        }`}
                        aria-invalid={error ? 'true' : 'false'}
                      />
                    </>
                  )}
                />
              </div>

              <div>
                <label className='block mb-1 font-avenir text-sm'>
                  Mobile Number *
                </label>
                <Controller
                  name='mobile'
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: '',
                    },
                    pattern: {
                      value: /^0[0-9]{8,9}$/,
                      message:
                        'The input must start with 0 and can be 9 to 10 digits long.',
                    },
                  }}
                  defaultValue={''}
                  render={({
                    field: { value, onChange },
                    fieldState: { error },
                  }) => (
                    <>
                      <input
                        maxLength={10}
                        value={value}
                        placeholder='0887726356'
                        onChange={(e) => onChange(e.target.value)}
                        type='text'
                        className={`bg-grey-main px-4 rounded-3xl h-10 hover:bg-purple-main w-full focus:outline-none ${
                          error
                            ? 'border-2 border-errorborder-light bg-errorbg-main'
                            : ''
                        }`}
                        aria-invalid={error ? 'true' : 'false'}
                      />
                      {error && (
                        <p role='alert' className='text-[12px] text-red-500'>
                          {error.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>

              <div>
                <label className='block mb-1 font-avenir text-sm'>
                  Email Address *
                </label>
                <Controller
                  name='address'
                  control={control}
                  rules={{
                    required: true,
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Regular expression for email validation
                      message: 'Invalid email address', // Custom error message
                    },
                  }}
                  defaultValue={''}
                  render={({
                    field: { value, onChange },
                    fieldState: { error },
                  }) => (
                    <>
                      <input
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        type='text'
                        placeholder='example@gmail.com'
                        className={`bg-grey-main px-4 rounded-3xl h-10 hover:bg-purple-main w-full focus:outline-none ${
                          error
                            ? 'border-2 border-errorborder-light bg-errorbg-main'
                            : ''
                        }`}
                      />
                      {error && (
                        <span className='text-red-500 text-[12px]'>
                          {error.message}
                        </span>
                      )}
                    </>
                  )}
                />
              </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-4'>
              <div>
                <label className='block mb-1 font-avenir text-sm'>
                  Child&apos;s Name *
                </label>
                <Controller
                  name='childname1'
                  control={control}
                  defaultValue={''}
                  rules={{ required: true }}
                  render={({
                    field: { value, onChange },
                    fieldState: { error },
                  }) => (
                    <>
                      <input
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        type='text'
                        className={`bg-grey-main px-4 rounded-3xl h-10 hover:bg-purple-main w-full focus:outline-none ${
                          error
                            ? 'border-2 border-errorborder-light bg-errorbg-main'
                            : ''
                        }`}
                      />
                    </>
                  )}
                />
              </div>

              <div className='w-full'>
                <label className='block mb-1 font-avenir text-sm'>
                  Child&apos;s Date of Birth *
                </label>
                <Controller
                  name='datechild1'
                  control={control}
                  defaultValue={''}
                  rules={{ required: true }}
                  render={({
                    field: { value, onChange },
                    fieldState: { error },
                  }) => (
                    <div className='relative w-full'>
                      <DatePicker
                        selected={value ? new Date(value) : null}
                        onChange={(date) => onChange(date)}
                        timeFormat='HH:mm'
                        timeIntervals={15}
                        timeCaption='time'
                        dateFormat='MMMM d, yyyy'
                        wrapperClassName='w-full'
                        showYearDropdown
                        className={`bg-grey-main px-4 rounded-3xl h-10 hover:bg-purple-main w-full focus:outline-none ${
                          error
                            ? 'border-2 border-errorborder-light bg-errorbg-main'
                            : ''
                        }`}
                      />
                      <BiCalendar className='absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500' />
                    </div>
                  )}
                />
              </div>

              <div>
                <label className='block mb-1 font-avenir text-sm'>
                  How did you learn about Mulberry International Preschool,
                  Cambodia ?
                </label>
                <Controller
                  name='question'
                  control={control}
                  defaultValue={''}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <input
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        type='text'
                        className='bg-grey-main px-4 rounded-3xl h-10 hover:bg-purple-main w-full focus:outline-none'
                      />
                    </>
                  )}
                />
              </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-4'>
              <div>
                <label className='block mb-1 font-avenir text-sm'>
                  Child 2&apos;s Name
                </label>
                <Controller
                  name='childname2'
                  control={control}
                  defaultValue={''}
                  render={({ field: { onChange, value } }) => (
                    <>
                      <input
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        type='text'
                        className='bg-grey-main px-4 rounded-3xl h-10 hover:bg-purple-main w-full focus:outline-none'
                      />
                    </>
                  )}
                />
              </div>

              <div>
                <label className='block mb-1 font-avenir text-sm'>
                  Child 2&apos;s Date of Birth
                </label>
                <Controller
                  name='datechild2'
                  control={control}
                  defaultValue={''}
                  render={({ field: { onChange, value } }) => (
                    <div className='relative w-full'>
                      <DatePicker
                        selected={value ? new Date(value) : null}
                        onChange={(date) => onChange(date)}
                        timeFormat='HH:mm'
                        timeIntervals={15}
                        timeCaption='time'
                        wrapperClassName='w-full'
                        showYearDropdown
                        dateFormat='MMMM d, yyyy'
                        className='bg-grey-main rounded-3xl h-10 hover:bg-purple-main focus:outline-none px-4 w-full'
                      />
                      <BiCalendar className='absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500' />
                    </div>
                  )}
                />
              </div>
              <div className='flex items-center w-full'>
                <Controller
                  name='recaptcha'
                  control={control}
                  rules={{ required: 'Please complete the reCAPTCHA' }}
                  render={({
                    field: { value, onChange },
                    fieldState: { error },
                  }) => (
                    <div className='w-full max-w-screen-md mx-auto'>
                      {loading && <p>Loading...</p>}
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY_REACT || ''}`}
                        onChange={(value) => {
                          onChange(value);
                          console.log('value', value);
                        }}
                        onLoadCapture={handleRecaptchaLoad}
                        style={{ width: '100%' }}
                      />
                      <div className={`${error ? 'text-red-500' : ''}`}>
                        {error && (
                          <span className='text-[12px] text-red-500'>
                            {error.message}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                />
              </div>
            </div>

            <div className='mt-4'>
              <label className='block mb-1 font-avenir text-sm'>
                Message and other inquiries
              </label>
              <Controller
                name='message'
                control={control}
                defaultValue={''}
                render={({ field: { onChange, value } }) => (
                  <>
                    <textarea
                      onChange={(value) => onChange(value)}
                      className='bg-grey-main px-4 pt-1 rounded-md hover:bg-purple-main w-full h-36 focus:outline-none'
                    ></textarea>
                  </>
                )}
              />
            </div>

            <button className='bg-grey-hight-light text-sm font-avenir px-10 py-3 rounded-3xl mt-8 text-white'>
              Submit
            </button>
          </form>
        </div>

        <div>
          <h2 className='text-5xl text-primary-light mb-10 px-4 font-avenir'>
            Our
            <span className='text-primary-hight-light font-avenir'>
              {' '}
              Locations
            </span>
          </h2>
          <div className='container mx-auto mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 justify-stretch'>
            {location.map((location) => (
              <LocationCard
                url={location.value}
                key={location.id}
                id={location.id}
                logo={location.logo}
                nameLocation={location.nameLocation}
                locationDetail={location.locationDetail}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
