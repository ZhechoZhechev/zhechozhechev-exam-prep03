const { test, expect } = require('@playwright/test');

test('Check add grades page', async ({ page }) => {
    await page.goto('https://zhechozhechev-exam-prep03.onrender.com/Add-Grade');
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });
  