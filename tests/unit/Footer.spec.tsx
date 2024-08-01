import { Footer } from '@/components/footer';
import { render, screen } from '@testing-library/react';

describe('Test <Footer /> component', () => {
  it('Should be in the component', () => {
    render(<Footer />);

    const homeLink = screen.getByTestId('footer-home-link') as HTMLLinkElement;
    const media = screen.getByText('Media');
    expect(homeLink).toHaveAttribute('href', '/');
    expect(media).toBeInTheDocument();
  });

  it('Should link correct values to routes', () => {
    render(<Footer />);

    const homeLink = screen.getByTestId('footer-link-home') as HTMLLinkElement;
    const propertiesLink = screen.getByTestId('footer-link-properties') as HTMLLinkElement;
    const aboutLink = screen.getByTestId('footer-link-about') as HTMLLinkElement;
    const contactLink = screen.getByTestId('footer-link-contact') as HTMLLinkElement;

    expect(homeLink).toHaveAttribute('href', '/');
    expect(propertiesLink).toHaveAttribute('href', '/properties');
    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  it('Should link correct values to social media', () => {
    render(<Footer />);

    const facebookLink = screen.getByTestId('footer-link-facebook') as HTMLLinkElement;
    const instagramLink = screen.getByTestId('footer-link-instagram') as HTMLLinkElement;
    const whatsappIcon = screen.getByTestId('footer-link-whatsapp') as HTMLLinkElement;

    expect(facebookLink.href).toContain('https://www.facebook.com');
    expect(instagramLink.href).toContain('https://www.instagram.com');
    expect(whatsappIcon.href).toContain('https://walink.co/54654rg');
  });
});
