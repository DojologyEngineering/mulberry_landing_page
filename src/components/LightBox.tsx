'use client';

import * as React from 'react';
import Lightbox, { SlideImage } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/plugins/captions.css';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/styles.css';

import Image, { StaticImageData } from 'next/image';

import { MdOpenInFull } from 'react-icons/md';

import image from '../../public/img/Centre-Art-Atelier.webp';

interface Iprops {
  img: StaticImageData | undefined;
}

export default function BasicExample({ img }: Iprops) {
  const [basicExampleOpen, setBasicExampleOpen] = React.useState(false);
  const [hoverImg, setHoverImg] = React.useState(false);

  const imgData = [img].filter(Boolean) as SlideImage[];

  return (
    <>
      <Lightbox
        open={basicExampleOpen}
        close={() => setBasicExampleOpen(false)}
        slides={imgData} // Convert single image to array
        plugins={[Fullscreen]}
        fullscreen={{}}
        styles={{
          root: {
            '--yarl__color_button': '#333333',
          },
          container: { backgroundColor: 'white' },
          button: {
            filter: 'none',
          },
        }}
      />
      <div
        style={{ position: 'relative', display: 'inline-block' }}
        onMouseEnter={() => setHoverImg(true)}
        onMouseLeave={() => setHoverImg(false)}
      >
        <Image
          src={img || ''}
          alt='bannerImg'
          priority
          className='w-[740px] cursor-pointer'
          onClick={() => setBasicExampleOpen(true)}
        />
        {hoverImg && (
          <span
            className='absolute top-0 right-0'
            style={{
              transform: 'translate(10%, -10%)',
              background: 'white',
              padding: '10px',
              borderRadius: '50%',
              cursor: 'pointer',
            }}
            onClick={() => setBasicExampleOpen(true)}
          >
            <MdOpenInFull />
          </span>
        )}
      </div>

      <style>{`
        .yarl__button:hover,
        .yarl__button:focus {
          color: black !important;
        }
      `}</style>

      {/* <button onClick={() => setBasicExampleOpen(true)}>Open Lightbox</button> */}
    </>
  );
}
