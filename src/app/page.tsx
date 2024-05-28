import { Agents } from '@/components/agents';
import { Properties } from '@/components/properties';

export default async function Home() {
  return (
    <main className='p-6'>
      <h1 className='text-4xl font-bold'>InmoBO</h1>

      <Properties />
      <Agents />
    </main>
  );
}
