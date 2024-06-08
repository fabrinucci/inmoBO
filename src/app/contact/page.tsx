import { Form } from '@/components/form';
import { EmailIcon, LocationIcon, PhoneIcon } from '@/components/icons/contact';

export default function ContactPage() {
  return (
    <>
      <h2 className='mb-6 text-center text-3xl font-semibold text-sky-950 dark:text-blue-200'>
        How can you get in touch with us?
      </h2>
      <div className='flex flex-col items-center gap-16 md:flex-row md:justify-center md:gap-28'>
        <div className='rounded-md bg-blue-300 px-10 py-14 dark:bg-blue-900 md:px-20 md:py-28'>
          <h3 className='mb-10 text-lg font-semibold text-sky-950 dark:text-blue-100'>
            Contact us
          </h3>
          <div className='flex flex-col gap-8'>
            <div className='text-sky-950 dark:text-blue-100'>
              <div className='mb-2 flex items-center gap-2'>
                <h5 className='font-semibold'>Utah</h5>
                <LocationIcon />
              </div>
              <p>Salt Lake City 64126</p>
            </div>
            <div className='text-sky-950 dark:text-blue-100'>
              <div className='mb-1 flex items-center gap-2'>
                <h5 className='font-semibold'>Tel</h5>
                <PhoneIcon />
              </div>
              <p>9512-136-200</p>
            </div>
            <div className='text-sky-950 dark:text-blue-100'>
              <div className='mb-1 flex items-center gap-2'>
                <h5 className='font-semibold'>E-mail</h5>
                <EmailIcon />
              </div>
              <p>inmobo@mail.com</p>
            </div>
          </div>
        </div>

        <Form />
      </div>
    </>
  );
}
