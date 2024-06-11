export const AboutDescription = () => {
  return (
    <section className='py-8'>
      <div className='mx-auto flex max-w-5xl flex-col items-center justify-center gap-10 md:flex-row md:items-start lg:gap-16'>
        <div className='md:max-w-md lg:max-w-lg'>
          <div className='text-sky-950 dark:text-blue-100'>
            <h3 className='mb-3 text-2xl font-semibold'>A Legacy of Excellence</h3>
            <p>
              Founded in 1996, InmoBO has a rich history of dedication to exceptional customer
              service. We began by focusing on helping people achieve their dreams and have since
              grown into a comprehensive real estate company guided by the principles of integrity
              real estate company, guided by the principles of integrity, innovation and community
              collaboration.
            </p>
          </div>

          <div className='text-sky-950 dark:text-blue-100'>
            <h3 className='mb-3 mt-6 text-2xl font-semibold'>Our Vision</h3>
            <p>
              Our vision is to be a leading force in shaping vibrant and sustainable communities. We
              strive to empower individuals and families to achieve their real estate aspirations
              through personalized guidance and a commitment to excellence.
            </p>
          </div>

          <div className='text-sky-950 dark:text-blue-100'>
            <h3 className='mb-3 mt-6 text-2xl font-semibold'>Our Mission</h3>
            <p>
              At InmoBO, we are passionate about helping our clients navigate every aspect of the
              real estate journey. Whether you are buying, selling, investing, or renting, our team
              of experienced professionals is dedicated to providing tailored solutions and expert
              market knowledge. We prioritize building lasting relationships and exceeding
              expectations, ensuring a stress-free and successful real estate experience.
            </p>
          </div>
        </div>
        <div className=''>
          <img
            className='w-full rounded-md object-cover object-center md:h-[400px] md:w-full'
            src='/assets/about.webp'
            alt=''
          />
        </div>
      </div>
    </section>
  );
};
