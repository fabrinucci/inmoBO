import Link from 'next/link';
import { NotFoundIcon } from '@/components/icons/NotFoundIcon';

export default function NotFoundPage() {
  return (
    <div className='flex w-full flex-col items-center py-6'>
      <h2 className='text-3xl font-semibold text-sky-950 dark:text-blue-100'>
        Ups! Page not found.
      </h2>
      <span className='py-10'>
        <NotFoundIcon />
      </span>
      <Link
        className='rounded-lg bg-blue-900 px-5 py-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto'
        href='/'
      >
        Return Home
      </Link>
    </div>
  );
}
