import Link from 'next/link';
import { ThemeSwitch } from '@/components/buttons';

import { NavbarSmall, NavbarLarge } from './';

export const Navbar = () => {
  return (
    <nav className='z-10 h-[72px] border-blue-900 bg-blue-300 dark:bg-sky-700'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
        <Link href='/' className='z-10 flex items-center space-x-3 rtl:space-x-reverse'>
          <img className='h-8' src='https://flowbite.com/docs/images/logo.svg' alt='InmoBO Logo' />
          <span className='self-center whitespace-nowrap text-2xl font-semibold text-sky-950 dark:text-blue-100'>
            InmoBO
          </span>
        </Link>
        <div className='z-10 flex items-center gap-3 md:gap-6'>
          <NavbarSmall />
          <NavbarLarge />
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};
