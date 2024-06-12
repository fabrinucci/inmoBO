'use client';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Slider = ({ images }: { images: string[] }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      className='z-0 mx-auto h-[200px] w-[240px] rounded-md border-none bg-blue-200 dark:bg-sky-800 sm:h-[400px] sm:w-[400px] md:mx-0 md:w-auto'
      swipeable={false}
      draggable={true}
      responsive={responsive}
      autoPlay
      infinite
      showDots
    >
      {images.map((img) => (
        <div className='rounded-md' key={img}>
          <img
            draggable='false'
            className='h-svh w-full cursor-grab object-contain'
            src={img}
            alt=''
          />
        </div>
      ))}
    </Carousel>
  );
};
