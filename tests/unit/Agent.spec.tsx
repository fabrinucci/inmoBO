import { Agent } from '@/components/agents';
import { render, screen } from '@testing-library/react';

const MSGEMAIL = 'I am on the real estate website and would like your advice.';
const TEST_IMAGE = 'https://xsgames.co/randomusers/assets/avatars/male/7.jpg';

const mockAgent = {
  agent_id: 10,
  firstName: 'Marcel',
  lastName: 'Pereira',
  email: 'marcelper@mail.com',
  phone: '123456789',
  photo: TEST_IMAGE,
  specializations: ['Apartments', 'Land'],
  slug: 'marcel-pereira',
};

const setup = () => render(<Agent agent={mockAgent} />);

describe('Test <Hero /> component', () => {
  it('Should be in the document', () => {
    setup();

    const agentName = screen.getByTestId('agent-name');
    const agentSpecial = screen.getAllByTestId('agent-special');

    const specials = agentSpecial.map((special) => {
      return special.textContent;
    });

    expect(agentName).toHaveTextContent(mockAgent.firstName + ' ' + mockAgent.lastName);
    expect(specials).toContain('Land');
  });

  it('Should link to email and whatsapp', () => {
    setup();

    const agentEmail = screen.getByTestId('agent-email') as HTMLLinkElement;
    const agentMessage = screen.getByTestId('agent-message') as HTMLLinkElement;

    expect(agentEmail).toHaveAttribute('href', `mailto:${mockAgent.email}`);
    expect(agentMessage).toHaveAttribute(
      'href',
      `https://api.whatsapp.com/send/?phone=${mockAgent.phone}&text=Hello+${mockAgent.firstName}%2C+${MSGEMAIL}`,
    );
  });

  it('Test correct alt and src in image', () => {
    setup();
    const agentImg = screen.getByTestId('agent-img') as HTMLImageElement;

    expect(agentImg.alt).toBe(`${mockAgent.firstName} ${mockAgent.lastName} profile photo`);
    expect(agentImg.src).toBe(mockAgent.photo);
  });
});
