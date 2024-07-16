import { faker } from '@faker-js/faker';

export const mockAgent = {
  agent_id: faker.number.int(10),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  photo: faker.image.avatar(),
  specializations: faker.helpers.arrayElements(
    ['Apartment', 'Commercial', 'Land', 'Residential'],
    2,
  ),
  slug: faker.lorem.slug(),
};

export const mockProperty = {
  property_id: faker.number.int(100),
  name: faker.commerce.productName(),
  slug: faker.lorem.slug(),
  operation_type: faker.helpers.arrayElement(['Sale', 'Rent']),
  property_type: faker.helpers.arrayElement(['Apartment', 'Commercial', 'Land', 'Residential']),
  address: faker.location.streetAddress(),
  price: faker.number.int(),
  total_sq_m: faker.number.int(1000),
  bedrooms: faker.number.int({ min: 3, max: 10 }),
  bathrooms: faker.number.int({ min: 1, max: 5 }),
  garage: faker.datatype.boolean(),
  pool: faker.datatype.boolean(),
  description: faker.commerce.productDescription(),
  photos: faker.helpers.multiple(faker.image.url, { count: 3 }),
  status: faker.helpers.arrayElement(['Available', 'Unavailable']),
  publication_date: faker.date.month(),
  agent_id: faker.number.int(10),
};
