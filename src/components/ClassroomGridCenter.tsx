'use client';

import { ClassroomGrid } from '@/app/centers/page';
import { useEffect, useState } from 'react';

import Image, { StaticImageData } from 'next/image';

interface IImgClass {
  img: StaticImageData;
}
interface IContent {
  textHead: string;
  paragraph: string;
}
interface IContentSpan {
  textHead: string;
  paragraph1?: string;
  paragraph2?: string;
  span?: string;
}

const ImgClass = ({ img }: IImgClass) => {
  return (
    <div className='flex flex-row justify-center'>
      <Image src={img} alt='ArtImg' width={232} height={232} />
    </div>
  );
};

const Content = ({ paragraph, textHead }: IContent) => {
  return (
    <div className='flex flex-col align-middle justify-center'>
      <p className='text-3xl text-center text-primary-main font-patrick'>
        {textHead}
      </p>
      <p className='text-sm text-center text-[rgb(138 84 159)] font-avenir font-extralight'>
        {paragraph}
      </p>
    </div>
  );
};

const ContentSpan = ({
  paragraph1,
  paragraph2,
  textHead,
  span,
}: IContentSpan) => {
  return (
    <div className='flex flex-col align-middle justify-center'>
      <p className='text-3xl text-center text-primary-main font-patrick'>
        {textHead}
      </p>{' '}
      <p className='text-sm text-center text-[rgb(138 84 159)] font-avenir font-extralight'>
        {paragraph1}
        <span className='text-primary-hight-light'> {span}</span>
        {paragraph2}
      </p>{' '}
    </div>
  );
};

function ClassroomGridCenter() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='flex justify-center'>
      {isSmallScreen ? (
        <div className='grid  grid-cols-1 gap-6 align-middle max-w-[970px] px-[20px] justify-center'>
          {ClassroomGrid.map((item) => (
            <>
              <ContentSpan
                textHead={item.textHead}
                paragraph1={item.paragraph1}
                paragraph2={item.paragraph2}
                span={item.span}
              />
              <ImgClass img={item.img} />
            </>
          ))}
        </div>
      ) : (
        <div className='grid grid-cols-4 gap-6 align-middle max-w-[970px] px-[20px] justify-center'>
          {ClassroomGrid.map((item, index) => (
            <>
              {index === 0 || index === 1 || index === 4 || index === 5 ? (
                <>
                  <ImgClass img={item.img} />
                  <ContentSpan
                    textHead={item.textHead}
                    paragraph1={item.paragraph1}
                    paragraph2={item.paragraph2}
                    span={item.span}
                  />
                </>
              ) : (
                <>
                  <ContentSpan
                    textHead={item.textHead}
                    paragraph1={item.paragraph1}
                    paragraph2={item.paragraph2}
                    span={item.span}
                  />
                  <ImgClass img={item.img} />
                </>
              )}
            </>
          ))}
        </div>
      )}
    </div>
  );
}

export default ClassroomGridCenter;
