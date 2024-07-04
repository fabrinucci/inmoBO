import { render, screen } from '@testing-library/react';

import { Navbar } from '../../src/components/navbar';

describe('App', () => {
  it('renders a Navbar', () => {
    render(<Navbar />);

    const heading = screen.getByText(/inmobo/i);

    expect(heading).toBeInTheDocument();
  });
});
