import test, { expect } from '@playwright/test';

test.describe('Test Contact', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/contact');
  });

  test('Should be visible', async ({ page }) => {
    await expect(page.getByRole('navigation')).toBeVisible();
    await expect(page.getByTestId('contact-title')).toBeVisible();
    await expect(page.getByTestId('contact-info-card')).toBeVisible();
    await expect(page.getByTestId('contact-info-form')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });

  test('Should the Form contain the filled data', async ({ page }) => {
    await page.getByTestId('input-email').fill('michel@mail.com');
    await expect(page.getByTestId('input-email')).toHaveValue('michel@mail.com');

    await page.getByTestId('input-fullname').fill('Michel Garcia');
    await expect(page.getByTestId('input-fullname')).toHaveValue('Michel Garcia');

    await page.getByTestId('input-phone').fill('123456789');
    await expect(page.getByTestId('input-phone')).toHaveValue('123456789');

    await page.getByTestId('input-message').fill('Hello, I am Michel.');
    await expect(page.getByTestId('input-message')).toHaveValue('Hello, I am Michel.');

    await expect(page.getByTestId('submit-button')).toContainText('Submit');
    await page.getByTestId('submit-button').click();
  });
});
