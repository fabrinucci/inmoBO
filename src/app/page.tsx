import { Agents } from '@/components/agents';
import { Properties } from '@/components/properties';

export default async function Home() {
  return (
    <main className='px-6'>
      <Properties />
      <Agents />
    </main>
  );
}
