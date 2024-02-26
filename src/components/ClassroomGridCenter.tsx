import { ClassroomGrid } from '@/app/centers/page';

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
  paragraph1: string;
  paragraph2: string;
  span: string;
}

const ImgClass = ({ img }: IImgClass) => {
  return (
    <div>
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
  return (
    <div className='flex justify-center'>
      <div className='grid grid-cols-4 gap-6 align-middle max-w-[950px]'>
        <ImgClass img={ClassroomGrid.Art.img} />
        <Content
          textHead={ClassroomGrid.Art.textHead}
          paragraph={ClassroomGrid.Art.paragraph}
        />
        <ImgClass img={ClassroomGrid.Construction.img} />
        <ContentSpan
          textHead={ClassroomGrid.Construction.textHead}
          paragraph1={ClassroomGrid.Construction.paragraph1}
          paragraph2={ClassroomGrid.Construction.paragraph2}
          span={ClassroomGrid.Construction.span}
        />
        <ContentSpan
          textHead={ClassroomGrid.Busy.textHead}
          paragraph1={ClassroomGrid.Busy.paragraph1}
          paragraph2={ClassroomGrid.Busy.paragraph2}
          span={ClassroomGrid.Busy.span}
        />
        <ImgClass img={ClassroomGrid.Busy.img} />
        <Content
          textHead={ClassroomGrid.Discovery.textHead}
          paragraph={ClassroomGrid.Discovery.paragraph}
        />
        <ImgClass img={ClassroomGrid.Discovery.img} />
        <ImgClass img={ClassroomGrid.Finger.img} />

        <Content
          textHead={ClassroomGrid.Finger.textHead}
          paragraph={ClassroomGrid.Finger.paragraph}
        />
        <ImgClass img={ClassroomGrid.Imaginary.img} />

        <Content
          textHead={ClassroomGrid.Imaginary.textHead}
          paragraph={ClassroomGrid.Imaginary.paragraph}
        />
        <ContentSpan
          textHead={ClassroomGrid.Reading.textHead}
          paragraph1={ClassroomGrid.Reading.paragraph1}
          paragraph2={ClassroomGrid.Reading.paragraph2}
          span={ClassroomGrid.Reading.span}
        />
        <ImgClass img={ClassroomGrid.Reading.img} />
        <Content
          textHead={ClassroomGrid.Light.textHead}
          paragraph={ClassroomGrid.Light.paragraph}
        />
        <ImgClass img={ClassroomGrid.Light.img} />
      </div>
    </div>
  );
}

export default ClassroomGridCenter;
