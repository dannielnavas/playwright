import { expect, test } from "@playwright/test";

test("ecommerce", async ({ page }) => {
  await page.goto("https://automationexercise.com/");
  // hover in product solo el primero
  await page.hover(".single-products >> nth=0");

  // click in add to cart
  await page.locator("a:has-text('Add to cart')").first().click();

  await page.waitForTimeout(2000);

  await expect(page.locator("#cartModal")).toBeVisible();

  // click in continue shopping
  await page.locator("button:has-text('Continue Shopping')").click();

  // click in cart
  await page.getByRole("link", { name: " Cart" }).click();

  // verify cart is visible
  await expect(page.locator("#cart_info")).toBeVisible();

  // click in Proceed To Checkout
  await page.locator("button:has-text('Proceed To Checkout')").click();

  // click in Continue On Cart
  await page.locator("button:has-text('Continue On Cart')");

  //para selects
  // await page.locator("").selectOption("2");
});
