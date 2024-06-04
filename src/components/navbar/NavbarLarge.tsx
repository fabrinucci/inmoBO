'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navlinks } from '@/utils';

export const NavbarLarge = () => {
  const pathname = usePathname();

  return (
    <div className='hidden w-full md:block md:w-auto'>
      <ul className='mt-4 flex flex-col gap-6 rounded-lg bg-gray-800 font-medium md:mt-0 md:flex-row md:bg-transparent rtl:space-x-reverse'>
        {navlinks.map(({ name, url }) => (
          <li key={name}>
            <Link
              href={url}
              className={`${pathname === url && 'border-b-2 border-blue-400'} block px-3 py-2 text-white hover:bg-gray-700 hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-400`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
