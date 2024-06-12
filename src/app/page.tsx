import { Reasons } from '@/components/about/Reasons';
import { Agents } from '@/components/agents';
import { Hero } from '@/components/hero';
import { Properties } from '@/components/properties';

export default function HomePage() {
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
