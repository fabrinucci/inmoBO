import { test, expect } from '@playwright/test';

test.describe('Test Footer', () => {
  test('Should be visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByTestId('footer-home-link')).toBeVisible();
    await expect(page.getByTestId('footer-p')).toBeVisible();

    await expect(page.getByTestId('footer-link-facebook')).toBeVisible();
    await expect(page.getByTestId('footer-link-facebook')).toBeVisible();
    await expect(page.getByTestId('footer-link-instagram')).toBeVisible();
    await expect(page.getByTestId('footer-link-whatsapp')).toBeVisible();

    const homeLink = page.getByTestId('footer-link-home');
    const propertiesLink = page.getByTestId('footer-link-properties');
    const aboutLink = page.getByTestId('footer-link-about');
    const contactLink = page.getByTestId('footer-link-contact');

    await expect(homeLink).toBeVisible();
    await expect(homeLink).toHaveAttribute('href', '/');
    await expect(propertiesLink).toBeVisible();
    await expect(propertiesLink).toHaveAttribute('href', '/properties');
    await expect(aboutLink).toBeVisible();
    await expect(aboutLink).toHaveAttribute('href', '/about');
    await expect(contactLink).toBeVisible();
    await expect(contactLink).toHaveAttribute('href', '/contact');
  });

  test('Should navigate correctly', async ({ page }) => {
    await page.goto('/');

    const homeTitle = page.getByTestId('hero-heading');
    await expect(homeTitle).toBeVisible();

    await page.getByTestId('footer-link-properties').click();
    await page.waitForURL('**/properties');
    await expect(homeTitle).toBeHidden();
    await expect(page.getByTestId('properties-title')).toBeVisible();

    await page.getByTestId('footer-link-about').click();
    await page.waitForURL('**/about');
    await expect(homeTitle).toBeHidden();
    await expect(page.getByTestId('about-title')).toBeVisible();

    await page.getByTestId('footer-link-contact').click();
    await page.waitForURL('**/contact');
    await expect(homeTitle).toBeHidden();
    await expect(page.getByTestId('contact-title')).toBeVisible();

    await page.getByTestId('footer-link-home').click();
    await page.waitForURL('**/');
    await expect(homeTitle).toBeVisible();
  });
});
