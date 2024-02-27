'use client';

import React from 'react';
import ImageGallery from 'react-image-gallery';

import image1 from '/public/img/image1.webp';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

function ImagePreview() {
  return (
    <div className='container mx-auto w-fit mt-10 mb-10'>
      <ImageGallery items={images} infinite={false} />
    </div>
  );
}

export default ImagePreview;
