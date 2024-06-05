import { Reasons } from '@/components/about/Reasons';
import { Agents } from '@/components/agents';
import { Properties } from '@/components/properties';

export default async function Home() {
  return (
    <>
      <Properties />
      <Agents />
      <Reasons />
    </>
  );
}
