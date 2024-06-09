'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navlinks } from '@/utils';

export const NavbarLarge = () => {
  const pathname = usePathname();

  return (
    <div className='z-10 hidden w-full md:block md:w-auto'>
      <ul className='mt-4 flex flex-col gap-6 rounded-lg font-medium md:mt-0 md:flex-row md:bg-transparent rtl:space-x-reverse'>
        {navlinks.map(({ name, url }) => (
          <li key={name}>
            <Link
              href={url}
              className={`${pathname === url && 'border-b-2 border-sky-700 dark:border-blue-300'} block px-3 py-2 text-sky-950 dark:text-blue-100 md:p-0 md:hover:bg-transparent md:hover:text-sky-700 md:dark:hover:text-blue-300`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
