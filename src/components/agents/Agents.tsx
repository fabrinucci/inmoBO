import { getAgents } from '@/services';

import { Agent } from './';

export async function Agents() {
  const agents = await getAgents();
  return (
    <section className='py-6'>
      <div className='mx-auto max-w-5xl'>
        <h3 className='mb-4 text-3xl font-semibold'>Our personal</h3>
        <ul className='grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
          {agents.map((agent) => (
            <Agent key={agent.agent_id} agent={agent} />
          ))}
        </ul>
      </div>
    </section>
  );
}
