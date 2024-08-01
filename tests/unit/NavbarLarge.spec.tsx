import { NavbarLarge } from '@/components/navbar';
import { render, screen } from '@testing-library/react';

describe('Test <NavbarLarge/> component', () => {
  it('Should be in the component', () => {
    render(<NavbarLarge />);
    const homeLink = screen.getByTestId('navbar-link-home') as HTMLLinkElement;
    const propertiesLink = screen.getByTestId('navbar-link-properties') as HTMLLinkElement;
    const aboutLink = screen.getByTestId('navbar-link-about') as HTMLLinkElement;
    const contactLink = screen.getByTestId('navbar-link-contact') as HTMLLinkElement;

    expect(homeLink).toHaveAttribute('href', '/');
    expect(propertiesLink).toHaveAttribute('href', '/properties');
    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(contactLink).toHaveAttribute('href', '/contact');
  });
});
