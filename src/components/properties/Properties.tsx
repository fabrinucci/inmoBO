import { getProperties } from '@/services';

import { Property } from './';

export async function Properties() {
  const properties = await getProperties();
  return (
    <section className='py-16'>
      <div className='mx-auto max-w-5xl'>
        <h3 className='mb-4 text-center text-3xl font-semibold text-sky-950 dark:text-blue-100'>
          Our best deals
        </h3>
        <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3' data-testid='properties-card'>
          {properties.slice(0, 6).map((property) => (
            <Property key={property.property_id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}
