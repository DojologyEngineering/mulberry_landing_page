import { getJobs } from '@/app/db/data-store';

import Image from 'next/image';
import Link from 'next/link';

import center from '/public/img/center.webp';
import profilePic from '/public/img/curve.webp';

export async function generateStaticParams() {
  const jobs = await getJobs();
  return jobs.map((job) => ({
    slug: job.slug,
  }));
}

export default async function Job({ params }: { params: { slug: string } }) {
  const [job] = await getJobs(params.slug);
  return (
    <div>
      <div className='relative'>
        <Image
          src={center}
          alt='Picture of the author'
          priority
          className='h-60 w-full'
        />
        <Image
          src={profilePic}
          alt='Picture of the author'
          priority
          className='h-28 w-full absolute bottom-0 left-0'
        />
        <div className='flex justify-center top-10 absolute left-0 right-0'>
          <h1 className='md:text-4xl text-xl font-bold text-white font-avenir bg-primary-light px-4 py-2'>
            Mulberry Learning Centers
          </h1>
        </div>
      </div>
      <div className='container mx-auto'>
        {params.slug === 'mulberry-learning-greenhills' ? (
          <h1 className='md:text-4xl text-xl font-bold font-avenir text-primary-main mt-10'>
            Mulberry Learning
            <span className='text-primary-hight-light'> @ Greenhills</span>
          </h1>
        ) : (
          <h1 className='md:text-4xl text-xl font-bold font-avenir text-primary-main mt-10'>
            Mulberry Learning
            <span className='text-primary-hight-light'> @ BGC</span>
          </h1>
        )}
      </div>
      <div className='container mx-auto'>
        <p className='text-xl'>{job.location}</p>
      </div>
      <div className='container mx-auto '>
        <Image src={job.logo} alt='logo' priority className='h-30 pt-10 ' />
        <p className='mt-10'>{job.description}</p>
      </div>
      <div className='container mx-auto mt-2'>
        {job.feature.map((feature) => (
          <div key={feature.title}>
            <p className='text-[26px]'>{feature.title}</p>

            {feature.featuretype.map((featureType) => (
              <div key={featureType.title}>
                <li className='text-base'>{featureType.title}</li>
                <ul>
                  {featureType.descrip.map((description, index) => (
                    <li key={index}>{description}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
