import { test, expect } from '@playwright/test';

test.describe('Test Navbar', () => {
  test('Should navigate correctly', async ({ page }) => {
    await page.goto('/');

    const homeTitle = page.getByTestId('hero-heading');
    await expect(homeTitle).toBeVisible();

    await page.getByRole('navigation').getByRole('link', { name: 'Properties' }).click();
    await page.waitForURL('**/properties');
    await expect(homeTitle).toBeHidden();
    await expect(page.getByTestId('properties-title')).toBeVisible();

    await page.getByRole('navigation').getByRole('link', { name: 'About us' }).click();
    await page.waitForURL('**/about');
    await expect(homeTitle).toBeHidden();
    await expect(page.getByTestId('about-title')).toBeVisible();

    await page.getByRole('navigation').getByRole('link', { name: 'Contact' }).click();
    await page.waitForURL('**/contact');
    await expect(homeTitle).toBeHidden();
    await expect(page.getByTestId('contact-title')).toBeVisible();

    await page.getByTestId('logo-link').click();
    await page.waitForURL('**/');
    await expect(homeTitle).toBeVisible();
  });

  test('Should switch theme', async ({ page }) => {
    await page.goto('/contact');

    const switchThemeButton = page.getByTestId('switch-theme');

    await expect(switchThemeButton).toBeVisible();
    await expect(switchThemeButton).toHaveClass('text-sky-950');
    await expect(switchThemeButton).not.toHaveClass('text-blue-100');
    await expect(switchThemeButton).toHaveAccessibleName('Switch to dark mode');

    await switchThemeButton.click();
    await expect(switchThemeButton).toHaveClass('text-blue-100');
    await expect(switchThemeButton).not.toHaveClass('text-sky-950');
    await expect(switchThemeButton).toHaveAccessibleName('Switch to light mode');

    await switchThemeButton.click();
    await expect(switchThemeButton).toHaveClass('text-sky-950');
    await expect(switchThemeButton).not.toHaveClass('text-blue-100');
    await expect(switchThemeButton).toHaveAccessibleName('Switch to dark mode');
  });

  test('Theme must remain the same when changing pages', async ({ page }) => {
    await page.goto('/');

    const switchThemeButton = page.getByTestId('switch-theme');

    await expect(switchThemeButton).toHaveClass('text-sky-950');

    await switchThemeButton.click();
    await expect(switchThemeButton).toHaveClass('text-blue-100');

    await page.getByRole('navigation').getByRole('link', { name: 'About us' }).click();
    await page.waitForURL('**/about');
    await expect(switchThemeButton).toHaveClass('text-blue-100');
  });
});
