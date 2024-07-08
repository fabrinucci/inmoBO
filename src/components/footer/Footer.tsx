'use client';
import Link from 'next/link';
import { navlinks } from '@/utils';
import { usePathname } from 'next/navigation';

import { FacebookIcon, InstagramIcon, WhatsappIcon } from '../icons/social';
export const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className='absolute bottom-0 h-[320px] w-full bg-gray-800 px-6 py-10 text-white dark:bg-blue-300'>
      <div className='flex h-full flex-col items-center justify-center gap-6 md:flex-row md:items-start md:justify-around md:gap-10 lg:justify-evenly'>
        <div className='flex flex-col items-center gap-6'>
          <Link href='/' className='flex items-center space-x-3' data-testid='footer-home-link'>
            <img className='h-12' src='/assets/logo.png' alt='InmoBO Logo' />
            <span className='text-xl font-semibold text-blue-100 dark:text-sky-950'>InmoBO</span>
          </Link>
          <p className='max-w-md text-wrap text-center text-blue-100 dark:text-sky-950'>
            Navigate the real estate landscape with confidence alongside our team of experts. We
            provide personalized solutions for buying, selling, investing, and managing properties,
            ensuring you achieve your real estate goals.
          </p>
        </div>

        <div className='hidden flex-col gap-6 md:flex'>
          <span className='text-xl font-semibold text-blue-100 dark:text-sky-950'>Media</span>
          <ul className='flex flex-col gap-6'>
            {navlinks.map(({ name, url, linkName }) => (
              <li key={name}>
                <Link
                  href={url}
                  className={`${pathname === url && 'border-b-2 border-blue-300 dark:border-sky-700'} inline-block px-3 py-2 text-blue-100 dark:text-sky-950 md:p-0 md:hover:bg-transparent md:hover:text-blue-300 md:dark:hover:text-sky-700`}
                  data-testid={`footer-link-${linkName}`}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex flex-col gap-6'>
          <span className='hidden text-xl font-semibold text-blue-100 dark:text-sky-950 md:block'>
            Contact
          </span>
          <div className='flex gap-6'>
            <Link
              href='https://www.facebook.com'
              target='_blank'
              rel='noopener'
              className='text-blue-100 hover:text-blue-300 dark:text-sky-950 dark:hover:text-sky-800'
              data-testid='footer-link-facebook'
            >
              <FacebookIcon />
            </Link>
            <Link
              href='https://www.instagram.com'
              target='_blank'
              rel='noopener'
              className='text-blue-100 hover:text-blue-300 dark:text-sky-950 dark:hover:text-sky-800'
              data-testid='footer-link-instagram'
            >
              <InstagramIcon />
            </Link>
            <Link
              href='https://walink.co/54654rg'
              target='_blank'
              rel='noopener'
              className='text-blue-100 hover:text-blue-300 dark:text-sky-950 dark:hover:text-sky-800'
              data-testid='footer-link-whatsapp'
            >
              <WhatsappIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
