import { Property } from '@/components/properties';
import { render, screen } from '@testing-library/react';

const TEST_IMAGE = 'https://xsgames.co/randomusers/assets/avatars/male/7.jpg';

const mockProperty = {
  property_id: 1,
  name: 'Property Test',
  slug: 'property-test',
  operation_type: 'Rent',
  property_type: 'Apartment',
  address: '123',
  price: 1000,
  total_sq_m: 100,
  bedrooms: 4,
  bathrooms: 1,
  garage: true,
  pool: false,
  description: 'Beautiful property test',
  photos: [TEST_IMAGE, '5465465', '465r65'],
  status: 'active',
  publication_date: '2024-02-02',
  agent_id: 2,
};

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
