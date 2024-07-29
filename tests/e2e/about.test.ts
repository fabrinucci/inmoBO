import test, { expect } from '@playwright/test';

test.describe('Test Contact', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about');
  });

  test('Should be visible', async ({ page }) => {
    await expect(page.getByRole('navigation')).toBeVisible();
    await expect(page.getByTestId('about-title')).toBeVisible();
    await expect(
      page.locator('section').filter({ hasText: 'A Legacy of Excellence' }).locator('img'),
    ).toBeVisible();

    await expect(
      page.locator('section').filter({ hasText: 'A Legacy of ExcellenceFounded' }),
    ).toBeVisible();

    await expect(page.getByRole('heading', { name: 'A Legacy of Excellence' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Our Vision' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Our Mission' })).toBeVisible();

    await expect(page.getByRole('heading', { name: 'Why choose us?' })).toBeVisible();

    await expect(
      page.getByRole('heading', { name: 'Get in touch with our personal' }),
    ).toBeVisible();
    await expect(page.getByTestId('agents-card')).toBeVisible();

    await expect(page.locator('footer')).toBeVisible();
  });
});
