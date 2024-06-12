import { Hero } from '@/components/hero';
import { Properties } from '@/components/properties';
import { Agents } from '@/components/agents';
import { Reasons } from '@/components/about';

export default function Home() {
  return (
    <>
      <Hero />
      <div className='pt-[650px]'>
        <Properties />
        <Agents />
        <Reasons />
      </div>
    </>
  );
}
