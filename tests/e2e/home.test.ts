import test, { expect } from '@playwright/test';

test.describe('Test Home', () => {
  test('Should be visible', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/InmoBO/);

    const homeTitle = page.getByTestId('hero-heading');
    await expect(homeTitle).toBeVisible();

    await expect(page.getByTestId('hero-p')).toBeVisible();
    await page.getByTestId('properties-link').click();

    await expect(page).toHaveURL('/properties');
    await expect(page.getByTestId('properties-title')).toBeVisible();

    await page.getByTestId('logo-link').click();
    await expect(page.getByRole('heading', { name: 'Our best deals' })).toBeVisible();
    await expect(page.getByTestId('properties-card')).toBeVisible();

    await expect(
      page.getByRole('heading', { name: 'Get in touch with our personal' }),
    ).toBeVisible();
  });
});
