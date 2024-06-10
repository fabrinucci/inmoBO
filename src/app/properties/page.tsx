import Link from 'next/link';
import { Property } from '@/components/properties';
import { getProperties } from '@/services';

interface Props {
  searchParams: {
    operation: 'sale' | 'rent';
  };
}

export default async function PropertiesPage({ searchParams }: Props) {
  const { operation } = searchParams;

  const properties = await getProperties();

  const saleProperties = properties.filter((p) => p.operation_type.toLowerCase() === 'sale');
  const rentProperties = properties.filter((p) => p.operation_type.toLowerCase() === 'rent');
  return (
    <div className='mx-auto max-w-5xl'>
      <h1 className='mb-6 text-center text-3xl font-semibold text-sky-950 dark:text-blue-200'>
        Take a look at our {operation} properties
      </h1>

      <div className='mb-10 flex items-center justify-center gap-4'>
        <Link
          href='/properties'
          className='rounded-lg bg-blue-600 px-3 py-1.5 text-center text-sm font-semibold uppercase text-blue-100 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800 md:px-6 md:py-3 md:text-base'
        >
          All Properties
        </Link>
        <Link
          href='/properties?operation=sale'
          className='rounded-lg bg-blue-600 px-3 py-1.5 text-center text-sm font-semibold uppercase text-blue-100 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800 md:px-6 md:py-3 md:text-base'
        >
          For Sale
        </Link>
        <Link
          href='/properties?operation=rent'
          className='rounded-lg bg-blue-600 px-3 py-1.5 text-center text-sm font-semibold uppercase text-blue-100 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800 md:px-6 md:py-3 md:text-base'
        >
          For Rent
        </Link>
      </div>

      <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
        {operation === 'sale' &&
          saleProperties.map((p) => <Property key={p.property_id} property={p} />)}

        {operation === 'rent' &&
          rentProperties.map((p) => <Property key={p.property_id} property={p} />)}

        {operation !== 'rent' &&
          operation !== 'sale' &&
          properties.map((p) => <Property key={p.property_id} property={p} />)}
      </div>
    </div>
  );
}
