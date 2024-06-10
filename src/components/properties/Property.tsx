import Link from 'next/link';
import type { PropertyData } from '@/types';
import { BathIcon, BedIcon, MaximizeIcon, PoolIcon } from '@/components/icons/properties';
import { CheckIcon, LeftArrow, XIcon } from '@/components/icons/general';
import { LocationIcon } from '@/components/icons/contact';

export const Property = ({ property }: { property: PropertyData }) => {
  const {
    name,
    photos,
    bathrooms,
    bedrooms,
    operation_type,
    pool,
    price,
    address,
    property_type,
    total_sq_m,
    slug,
  } = property;

  return (
    <article className='w-auto rounded-lg bg-blue-300 shadow dark:bg-blue-900'>
      <img className='h-60 w-full rounded-t-lg object-cover' src={photos[0]} alt={name} />
      <div className='p-5'>
        <Link href={`/property/${slug}`}>
          <h4 className='mb-2 text-xl tracking-tight text-sky-950 dark:text-blue-100 lg:text-2xl'>
            {property_type} - {name}
          </h4>
        </Link>
        <p className='mb-3 text-lg font-bold text-sky-950 dark:text-blue-100 lg:text-2xl'>
          ${price}
        </p>

        <div className='mb-4'>
          <Link
            href={`/properties?operation=${operation_type.toLowerCase()}`}
            className='inline-flex items-center rounded-lg bg-blue-600 px-2 py-1 text-center text-xs font-medium uppercase text-blue-100 hover:bg-blue-700 focus:outline-none  focus:ring-4 focus:ring-blue-800 lg:px-3 lg:py-2 lg:text-sm'
          >
            {operation_type}
          </Link>
        </div>

        <div className='flex gap-1 text-blue-900 dark:text-blue-300'>
          <LocationIcon />
          <p className='text-xs leading-4 text-sky-950 dark:text-blue-100 lg:text-sm lg:leading-5'>
            {address}
          </p>
        </div>

        <div className='my-6 flex flex-wrap gap-4'>
          <div className='flex items-center  gap-2'>
            <span className='text-blue-900 dark:text-blue-300'>
              <BedIcon />
            </span>
            <p className='text-sm text-sky-950 dark:text-blue-100 lg:text-base'>{bedrooms}</p>
          </div>
          <div className='flex items-center gap-1'>
            <span className='text-blue-900 dark:text-blue-300'>
              <BathIcon />
            </span>
            <p className='text-sm text-sky-950 dark:text-blue-100 lg:text-base'>{bathrooms}</p>
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-blue-900 dark:text-blue-300'>
              <PoolIcon />
            </span>
            <p
              className={`${pool ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'} `}
            >
              {pool ? <CheckIcon /> : <XIcon />}
            </p>
          </div>
          <div className='flex items-center  gap-2'>
            <span className='text-blue-900 dark:text-blue-300'>
              <MaximizeIcon />
            </span>
            <p className='text-sm text-sky-950 dark:text-blue-100 lg:text-base'>{total_sq_m} m2</p>
          </div>
        </div>
        <Link
          href={`/property/${slug}`}
          className='inline-flex items-center rounded-lg bg-blue-600 px-3 py-2 text-center text-sm font-medium  text-blue-100 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800'
        >
          View details
          <LeftArrow />
        </Link>
      </div>
    </article>
  );
};
