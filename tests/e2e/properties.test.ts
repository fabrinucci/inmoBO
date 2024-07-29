import test, { expect } from '@playwright/test';

test.describe('Test Contact', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/properties');
  });

  test('Should be visible', async ({ page }) => {
    await expect(page.getByRole('navigation')).toBeVisible();

    await expect(page.getByTestId('properties-title')).toBeVisible();
    await expect(page.getByRole('link', { name: 'All Properties' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'For Sale' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'For Rent' })).toBeVisible();

    await expect(page.getByTestId('properties-card')).toBeVisible();

    await expect(page.locator('footer')).toBeVisible();
  });

  test('Should change the display properties when click the links', async ({ page }) => {
    const title = page.getByTestId('properties-title');
    await expect(title).toContainText('Take a look at our properties');

    await page.getByRole('link', { name: 'For Sale' }).click();
    await expect(title).toContainText('Take a look at our sale properties');
    await expect(page.getByTestId('properties-card')).not.toContainText('Rent');
    await expect(page.getByTestId('properties-card')).toContainText('Sale');

    await page.getByRole('link', { name: 'For Rent' }).click();
    await expect(title).toContainText('Take a look at our rent properties');
    await expect(page.getByTestId('properties-card')).toContainText('Rent');
    await expect(page.getByTestId('properties-card')).not.toContainText('Sale');

    await page.getByRole('link', { name: 'All Properties' }).click();
    await expect(title).toContainText('Take a look at our properties');
    await expect(page.getByTestId('properties-card')).toContainText('Rent');
    await expect(page.getByTestId('properties-card')).toContainText('Sale');
  });

  test('Should have the correct href', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'All Properties' })).toHaveAttribute(
      'href',
      '/properties?operation=all',
    );
    await expect(page.getByRole('link', { name: 'For Sale' })).toHaveAttribute(
      'href',
      '/properties?operation=sale',
    );
    await expect(page.getByRole('link', { name: 'For Rent' })).toHaveAttribute(
      'href',
      '/properties?operation=rent',
    );
  });

  test('Should display all properties', async ({ page }) => {
    await page.goto('/properties?operation=anything');
    await page.waitForURL('/properties?operation=anything');

    await expect(page.getByTestId('properties-title')).toContainText(
      'Take a look at our properties',
    );
    await expect(page.getByTestId('properties-card')).toContainText('Rent');
    await expect(page.getByTestId('properties-card')).toContainText('Sale');
  });

  test('Should have the correct values when reloading', async ({ page }) => {
    const title = page.getByTestId('properties-title');
    await page.reload();
    await expect(title).toContainText('Take a look at our properties');

    await page.getByRole('link', { name: 'For Sale' }).click();
    await page.waitForURL('/properties?operation=sale');
    await page.reload();
    await expect(title).toContainText('Take a look at our sale properties');

    await page.getByRole('link', { name: 'For Rent' }).click();
    await page.waitForURL('/properties?operation=rent');
    await page.reload();
    await expect(title).toContainText('Take a look at our rent properties');

    await page.getByRole('link', { name: 'All Properties' }).click();
    await page.waitForURL('/properties?operation=all');
    await page.reload();
    await expect(title).toContainText('Take a look at our properties');
  });
});
