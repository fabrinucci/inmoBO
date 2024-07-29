import Link from 'next/link';

export const Hero = () => {
  return (
    <div className='absolute left-0 top-0 z-0 h-[800px] w-full bg-gradient-img-light bg-cover bg-fixed pt-[72px] dark:bg-gradient-img-dark'>
      <div className='relative z-10 flex flex-col items-center gap-8 px-10 py-32'>
        <h1
          className='mt-10 text-center text-4xl font-semibold text-sky-950 dark:text-blue-100 md:text-5xl'
          data-testid='hero-heading'
        >
          Find Your Dream Home
        </h1>
        <p
          className='max-w-lg text-center text-lg font-semibold leading-7 text-sky-950 dark:text-blue-100'
          data-testid='hero-p'
        >
          Are you looking for a place where you can wake up every day with a smile on your face and
          enjoy life? Find your dream home in our catalog!
        </p>
        <Link
          className='rounded-lg border-4 border-blue-200 bg-blue-600 px-6 py-3 text-center  text-sm font-medium uppercase text-blue-100 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800'
          href='/properties'
          data-testid='properties-link'
        >
          View Properties
        </Link>
      </div>
      <div className='absolute -bottom-[20px] z-0 w-full text-blue-100 dark:text-sky-950 md:-bottom-[60px]'>
        <svg viewBox='0 0 900 600' xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M0 526L21.5 515.2C43 504.3 86 482.7 128.8 482.8C171.7 483 214.3 505 257.2 508.3C300 511.7 343 496.3 385.8 500.8C428.7 505.3 471.3 529.7 514.2 531.8C557 534 600 514 642.8 511.8C685.7 509.7 728.3 525.3 771.2 530.7C814 536 857 531 878.5 528.5L900 526L900 601L878.5 601C857 601 814 601 771.2 601C728.3 601 685.7 601 642.8 601C600 601 557 601 514.2 601C471.3 601 428.7 601 385.8 601C343 601 300 601 257.2 601C214.3 601 171.7 601 128.8 601C86 601 43 601 21.5 601L0 601Z'
            fill='currentColor'
          ></path>
        </svg>
      </div>
    </div>
  );
};
