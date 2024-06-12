import Link from 'next/link';
import { getAgent } from '@/services';
import { Form } from '@/components/form';

const MSGEMAIL = 'I am on the real estate website and would like your advice.';

export default async function PropertyAgent({ agent_id }: { agent_id: number }) {
  const agent = await getAgent({ agentId: agent_id });
  const { email, firstName, lastName, phone, photo, specializations } = agent!;

  return (
    <div className='mx-auto w-full max-w-sm rounded-lg'>
      <div className='flex flex-col items-center'>
        <img
          className='mb-3 h-20 w-20 rounded-full bg-blue-200 shadow-lg dark:bg-sky-800'
          src={photo}
          alt='Bonnie image'
        />
        <h5 className='mb-2 font-semibold text-sky-950 dark:text-blue-100 lg:text-xl'>{`${firstName} ${lastName}`}</h5>
        <ul className='flex flex-wrap gap-3'>
          {specializations.map((spc, index) => (
            <span key={index} className='text-xs text-sky-900 dark:text-blue-200 lg:text-sm'>
              {spc}
            </span>
          ))}
        </ul>
        <div className='mt-4 flex flex-col gap-3 sm:flex-row'>
          <Link
            href={`mailto:${email}`}
            className='rounded-lg bg-blue-600 px-4 py-2 text-center text-xs font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-800 lg:text-sm'
          >
            Send email
          </Link>
          <Link
            href={`https://api.whatsapp.com/send/?phone=${phone}&text=Hello+${firstName}%2C+${MSGEMAIL}`}
            target='_blank'
            rel='noopener'
            className='rounded-lg border border-blue-700 bg-transparent px-4 py-2 text-center text-xs font-medium text-blue-700 hover:bg-blue-700 hover:text-white focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-700 dark:text-blue-200 lg:text-sm'
          >
            Send message
          </Link>
        </div>

        <Form />
      </div>
    </div>
  );
}
