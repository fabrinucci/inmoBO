import { AboutDescription, Reasons } from '@/components/about';
import { Agents } from '@/components/agents';

export default function AboutPage() {
  return (
    <>
      <h1
        className='mb-6 text-center text-3xl font-semibold text-sky-950 dark:text-blue-100'
        data-testid='about-title'
      >
        Building dreams with a tradition of trust
      </h1>

      <AboutDescription />
      <Reasons />
      <Agents />
    </>
  );
}
