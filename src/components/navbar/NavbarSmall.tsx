'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navlinks } from '@/utils';
import { BarsIcon, DownArrow } from '@/components/icons/navbar';

export const NavbarSmall = () => {
  const [displayNav, setDisplayNav] = useState(false);
  const pathname = usePathname();

  return (
    <div>
      <button
        onClick={() => setDisplayNav(!displayNav)}
        className={`${displayNav ? 'fixed' : ''} right-5 top-3 z-20 h-10 w-10 rounded-lg p-2 text-sky-950 dark:text-blue-100 md:hidden`}
        aria-controls='navbar-solid-bg'
        aria-expanded='false'
      >
        <span className='sr-only'>Open navbar menu</span>
        {displayNav ? <DownArrow /> : <BarsIcon />}
      </button>

      <div
        className={`${displayNav ? 'top-0' : 'top-[-100%]'} fixed left-0 z-10 h-screen w-full overflow-x-auto overflow-y-auto bg-blue-300 duration-300 ease-in dark:bg-sky-800 md:hidden`}
      >
        <ul className='flex h-full flex-col items-center justify-center gap-10'>
          {navlinks.map(({ name, url }) => (
            <li key={name}>
              <Link
                href={url}
                className={`${pathname === url && 'border-b-2 border-sky-700 dark:border-blue-300'}  bg block text-xl font-semibold text-sky-950 dark:text-blue-100`}
                onClick={() => setDisplayNav(false)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
