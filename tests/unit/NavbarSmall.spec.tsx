import { NavbarSmall } from '@/components/navbar';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Test <Navbar /> component', () => {
  it('Should be in the component', () => {
    render(<NavbarSmall />);
    const toggleNavbar = screen.getByTestId('toggle-navbar') as HTMLButtonElement;
    expect(toggleNavbar).toBeInTheDocument();
  });

  it('Should change the aria-label on click', () => {
    render(<NavbarSmall />);
    const toggleNavbar = screen.getByTestId('toggle-navbar') as HTMLButtonElement;
    expect(toggleNavbar).toHaveAttribute('aria-label', 'Open navbar');
    fireEvent.click(toggleNavbar);
    expect(toggleNavbar).toHaveAttribute('aria-label', 'Close navbar');
  });

  it('Should toggle the status of displayNav when clicking', () => {
    render(<NavbarSmall />);
    const toggleNavbar = screen.getByTestId('toggle-navbar') as HTMLButtonElement;

    expect(screen.getByTestId('bars-icon')).toBeInTheDocument();
    expect(screen.queryByTestId('downarrow-icon')).not.toBeInTheDocument();

    fireEvent.click(toggleNavbar);

    expect(screen.queryByTestId('bars-icon')).not.toBeInTheDocument();
    expect(screen.getByTestId('downarrow-icon')).toBeInTheDocument();
  });

  it('Should link correct values to routes', () => {
    render(<NavbarSmall />);
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
