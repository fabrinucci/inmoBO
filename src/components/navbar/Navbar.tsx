import Link from 'next/link';

import { NavbarSmall, NavbarLarge } from './';

export const Navbar = () => {
  return (
    <nav className='border-gray-700 bg-gray-800'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
        <Link href='/' className='z-10 flex items-center space-x-3 rtl:space-x-reverse'>
          <img className='h-8' src='https://flowbite.com/docs/images/logo.svg' alt='InmoBO Logo' />
          <span className='self-center whitespace-nowrap text-2xl font-semibold dark:text-white'>
            InmoBO
          </span>
        </Link>
        <NavbarSmall />
        <NavbarLarge />
      </div>
    </nav>
  );
};
