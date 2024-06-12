import { PropertyData } from '@/types';
import {
  BathIcon,
  BedIcon,
  GarageIcon,
  MaximizeIcon,
  PoolIcon,
} from '@/components/icons/properties';
import { CheckIcon, XIcon } from '@/components/icons/general';

import { Slider } from './Slider';
import PropertyAgent from './PropertyAgent';

export const PropertyCard = ({ property }: { property: PropertyData }) => {
  const { bathrooms, bedrooms, description, garage, photos, pool, total_sq_m, agent_id } = property;
  return (
    <div className='grid gap-8 md:grid-cols-3'>
      <div className='text-sky-950 dark:text-blue-100 md:col-span-2'>
        <Slider images={photos} />
        <div className='py-6'>
          <h3 className='text-xl font-semibold'>Details</h3>
          <div className='flex flex-wrap gap-10 p-3 md:p-6'>
            <div className='flex items-center gap-2'>
              <span className='text-blue-900 dark:text-blue-300'>
                <BedIcon />
              </span>
              <p className='text-sm text-sky-950 dark:text-blue-100 lg:text-base'>{bedrooms}</p>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-blue-900 dark:text-blue-300'>
                <BathIcon />
              </span>
              <p className='text-sm text-sky-950 dark:text-blue-100 lg:text-base'>{bathrooms}</p>
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-blue-900 dark:text-blue-300'>
                <GarageIcon />
              </span>
              <p
                className={`${garage ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'} `}
              >
                {pool ? <CheckIcon /> : <XIcon />}
              </p>
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
            <div className='flex items-center gap-2'>
              <span className='text-blue-900 dark:text-blue-300'>
                <MaximizeIcon />
              </span>
              <p className='text-sm text-sky-950 dark:text-blue-100 lg:text-base'>
                {total_sq_m} m2
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className='text-xl font-semibold'>Description</h3>
          <div className='p-3 md:p-6'>
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className=''>
        <PropertyAgent agent_id={agent_id} />
      </div>
    </div>
  );
};
