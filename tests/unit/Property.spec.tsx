import { Property } from '@/components/properties';
import { mockProperty } from '@/mocks';
import { render, screen } from '@testing-library/react';

const setup = () => render(<Property property={mockProperty} />);

describe('Test <Hero /> component', () => {
  const getTitle = () => screen.getByTestId('property-title');
  const getAddress = () => screen.getByTestId('property-address');
  const getImage = () => screen.getByTestId('property-image') as HTMLImageElement;
  const getPrice = () => screen.getByTestId('property-price');
  const getOpTypeLink = () => screen.getByTestId('property-op-type') as HTMLLinkElement;
  const getDetailsLink = () => screen.getByTestId('property-details-link') as HTMLLinkElement;

  it('Should have correct values', () => {
    setup();

    expect(getTitle()).toHaveTextContent(`${mockProperty.property_type} - ${mockProperty.name}`);
    expect(getAddress()).toHaveTextContent(mockProperty.address);
    expect(getPrice()).toHaveTextContent(`$${mockProperty.price}`);

    expect(getOpTypeLink()).toHaveAttribute(
      'href',
      `/properties?operation=${mockProperty.operation_type.toLowerCase()}`,
    );
    expect(getDetailsLink()).toHaveAttribute('href', `/property/${mockProperty.slug}`);

    expect(getImage().src).toBe(mockProperty.photos[0]);
  });
});
