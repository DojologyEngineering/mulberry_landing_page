import Image from 'next/image';
import { notFound } from 'next/navigation';

import LightBoxCom from '@/components/LightBox';
import NotFoundPost from '@/components/NotFoundPost';

import Gallery from '../../../../../public/img/gallery.png';
import NewBanner from '../../../../../public/img/newsBanner.webp';
import { CardData, textCover } from '../../latest-news/page';

export async function generateStaticParams() {
  return CardData.map((data) => ({
    slug: data.route,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const dataDetails = CardData.find((item) => item.route === params.slug);
  return (
    <main className='pb-16 sm:pb-10'>
      <div className='flex justify-center align-middle flex-col'>
        <div className='relative'>
          <Image
            src={NewBanner}
            alt='logo'
            priority
            className='w-full sm:h-auto h-[60px]'
          />
          <span className='absolute whitespace-nowrap top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-primary-main text-white font-raleway font-bold px-5 text-[18px] md:text-[26px] xl:text-[40px]  rounded'>
            {textCover}
          </span>
        </div>
        <Image
          src={Gallery}
          alt='logo'
          priority
          className='max-h-[120px] w-full relative lg:bottom-12 md:bottom-10 sm:bottom-6 bottom-4'
        />
        <section className='flex flex-col gap-5 justify-center align-middle max-w-[780px] mx-auto px-[20px] lg:bottom-24 md:bottom-10 relative'>
          <h3 className='text-[28px]  font-bold text-primary-hight-light font-raleway'>
            {dataDetails?.description}
          </h3>
        </section>

        <section className='flex flex-col gap-5 justify-center align-middle max-w-[780px] ml-auto mr-auto px-[20px] md:bottom-10 relative '>
          {dataDetails ? (
            <>
              <LightBoxCom img={dataDetails.imgDetail} />
            </>
          ) : (
            notFound()
          )}
        </section>
      </div>
    </main>
  );
}
