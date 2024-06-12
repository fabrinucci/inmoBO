import {
  AgentsIcon,
  ClientIcon,
  CommunityIcon,
  PropertyIcon,
  ServiceIcon,
  TechnologyIcon,
} from '../icons/reasons';

const reasons = [
  {
    title: 'Experienced and Knowledgeable Agents',
    description:
      'Our team of experienced and knowledgeable agents is dedicated to helping you find the perfect home or property. We have a deep understanding of the Utah real estate market and can provide you with expert advice and guidance.',
    icon: <AgentsIcon />,
  },
  {
    title: 'Wide Range of Properties',
    description:
      'We have a wide range of properties to choose from, including homes, condos, land, and commercial properties. We can help you find the perfect property to fit your needs and budget.',
    icon: <PropertyIcon />,
  },
  {
    title: 'Technology-Driven Approach',
    description:
      'We use the latest technology to help you find and buy the perfect property. We have a user-friendly website and mobile app that allows you to search for properties, schedule viewings, and make offers.',
    icon: <TechnologyIcon />,
  },
  {
    title: 'Personalized Service',
    description:
      'We provide personalized service to all of our clients. We take the time to understand your needs and goals and work with you to find the perfect property.',
    icon: <ServiceIcon />,
  },
  {
    title: 'Strong Community Ties',
    description:
      'We are actively involved in the Utah community and have strong ties to local businesses and organizations. We can help you connect with the community and find the right neighborhood for you.',
    icon: <CommunityIcon />,
  },
  {
    title: 'Client Satisfaction Guarantee',
    description:
      'We are so confident in our ability to help you find the perfect property that we offer a client satisfaction guarantee. If you are not happy with your purchase, we will work with you to find a solution.',
    icon: <ClientIcon />,
  },
];

export function Reasons() {
  return (
    <section className='py-16'>
      <div className='mx-auto max-w-5xl'>
        <h3 className='mb-4 text-center text-3xl font-semibold text-sky-950 dark:text-blue-100'>
          Why choose us?
        </h3>
        <ul className='grid gap-6 sm:grid-cols-2 md:grid-cols-3'>
          {reasons?.map((reason, index) => (
            <li
              className='mt-4 flex flex-col items-center rounded-md p-10 transition-all duration-300 hover:bg-blue-300 hover:dark:bg-blue-800'
              key={index}
            >
              <span className='mb-10 text-blue-900 dark:text-blue-300'>{reason.icon}</span>
              <h5 className='mb-4 text-center font-semibold text-sky-950 dark:text-blue-100 lg:text-xl'>
                {reason.title}
              </h5>
              <p className='text-center text-sky-950 dark:text-blue-100'>{reason.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
