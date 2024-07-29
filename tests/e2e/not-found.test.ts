import test, { expect } from '@playwright/test';

test.describe('Test Not Found', () => {
  test('Should return not found page', async ({ page }) => {
    await page.goto('/anything');
    await expect(page.getByTestId('not-found-title')).toBeVisible();
    await expect(page.getByTestId('not-found-img')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Return Home' })).toBeVisible();

    await page.goto('/');

    await page.goto('/property');
    await expect(page.getByTestId('not-found-title')).toBeVisible();
    await expect(page.getByTestId('not-found-img')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Return Home' })).toBeVisible();
  });

  test('Should have correct values', async ({ page }) => {
    await page.goto('/anything');

    await expect(page.getByTestId('not-found-title')).toContainText('Ups! Page not found.');
    await expect(page.getByTestId('not-found-img')).toHaveAccessibleName('Not found');
  });

  test('Should go to home page', async ({ page }) => {
    await page.goto('/anything');

    await expect(page.getByRole('link', { name: 'Return Home' })).toHaveAttribute('href', '/');
    await page.getByRole('link', { name: 'Return Home' }).click();

    await page.waitForURL('/');
    await expect(page.getByTestId('hero-heading')).toBeVisible();
  });
});
