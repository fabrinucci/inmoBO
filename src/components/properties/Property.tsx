import Link from 'next/link';
import type { PropertyData } from '@/types';
import {
  BathIcon,
  BedIcon,
  CheckIcon,
  LeftArrow,
  LocationIcon,
  MaximizeIcon,
  PoolIcon,
  XIcon,
} from '@/components/icons';

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
    <article key={name} className='w-auto rounded-lg border border-gray-700 bg-gray-800 shadow'>
      <img className='h-60 w-full rounded-t-lg object-cover' src={photos[0]} alt={name} />
      <div className='p-5'>
        <Link href={`/property/${slug}`}>
          <h4 className='mb-2 text-xl tracking-tight text-white lg:text-2xl'>
            {property_type} - {name}
          </h4>
        </Link>
        <p className='mb-3 text-lg font-bold text-gray-200 lg:text-2xl'>${price}</p>

        <div className='mb-4'>
          <Link
            href={`/properties?operation=${operation_type.toLowerCase()}`}
            className='inline-flex items-center rounded-lg bg-blue-600 px-2 py-1 text-center text-xs font-medium uppercase text-white hover:bg-blue-700 focus:outline-none  focus:ring-4 focus:ring-blue-800 lg:px-3 lg:py-2 lg:text-sm'
          >
            {operation_type}
          </Link>
        </div>

        <div className='flex gap-1 text-gray-300'>
          <LocationIcon />
          <p className='text-xs leading-4 lg:text-sm lg:leading-5'>{address}</p>
        </div>

        <div className='my-6 flex flex-wrap gap-4'>
          <div className='flex items-center  gap-2'>
            <span className='text-blue-300'>
              <BedIcon />
            </span>
            <p className='text-sm lg:text-base'>{bedrooms}</p>
          </div>
          <div className='flex items-center gap-1'>
            <span className='text-blue-300'>
              <BathIcon />
            </span>
            <p className='text-sm lg:text-base'>{bathrooms}</p>
          </div>
          <div className='flex items-center  gap-2'>
            <span className='text-blue-300'>
              <PoolIcon />
            </span>
            <p className={`${pool ? 'text-green-400' : 'text-red-400'} `}>
              {pool ? <CheckIcon /> : <XIcon />}
            </p>
          </div>
          <div className='flex items-center  gap-2'>
            <span className='text-blue-300'>
              <MaximizeIcon />
            </span>
            <p className='text-sm lg:text-base'>{total_sq_m} m2</p>
          </div>
        </div>
        <Link
          href={`/property/${slug}`}
          className='inline-flex items-center rounded-lg bg-blue-600 px-3 py-2 text-center text-sm font-medium  text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800'
        >
          View details
          <LeftArrow />
        </Link>
      </div>
    </article>
  );
};
