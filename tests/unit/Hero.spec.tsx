import { Hero } from '@/components/hero';
import { render, screen } from '@testing-library/react';

describe('Test <Hero /> component', () => {
  it('Should be in the document', () => {
    render(<Hero />);

    const heading = screen.getByTestId('hero-heading');
    const paragraph = screen.getByTestId('hero-p');
    expect(heading).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
  });

  it('Should link to properties', () => {
    render(<Hero />);

    const link = screen.getByTestId('properties-link') as HTMLLinkElement;
    expect(link).toHaveAttribute('href', '/properties');
  });
});
