import Link from 'next/link';
import type { AgentData } from '@/types';

const MSGEMAIL = 'I am on the real estate website and would like your advice.';

export const Agent = ({ agent }: { agent: AgentData }) => {
  const { email, firstName, lastName, phone, photo, specializations } = agent;
  return (
    <li className='mx-auto w-full max-w-sm rounded-lg border border-gray-700 bg-gray-800 p-4'>
      <div className='flex flex-col items-center'>
        <img className='mb-3 h-24 w-24 rounded-full shadow-lg' src={photo} alt='Bonnie image' />
        <h5 className='mb-2 font-medium text-white lg:text-xl'>{`${firstName} ${lastName}`}</h5>
        <ul className='flex flex-wrap gap-3'>
          {specializations.map((spc, index) => (
            <span key={index} className='text-xs text-gray-400 lg:text-sm'>
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
            className='rounded-lg border border-gray-600 bg-gray-800 px-4 py-2 text-center text-xs font-medium text-gray-400 hover:bg-gray-700 hover:text-white focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-700 lg:text-sm'
          >
            Send message
          </Link>
        </div>
      </div>
    </li>
  );
};
