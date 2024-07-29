import { getAgents } from '@/services';

import { Agent } from './';

export async function Agents() {
  const agents = await getAgents();
  return (
    <section className='py-16'>
      <div className='mx-auto max-w-5xl'>
        <h3 className='mb-4 text-center text-3xl font-semibold text-sky-950 dark:text-blue-100'>
          Get in touch with our personal
        </h3>
        <ul className='grid gap-6 sm:grid-cols-2 md:grid-cols-3' data-testid='agents-card'>
          {agents.map((agent) => (
            <Agent key={agent.agent_id} agent={agent} />
          ))}
        </ul>
      </div>
    </section>
  );
}
