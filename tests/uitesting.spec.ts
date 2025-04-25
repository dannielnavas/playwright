import { expect, test } from "@playwright/test";

// esto se ejecuta antes de cada test
test.beforeEach(async ({ page }) => {
  await page.goto("http://uitestingplayground.com/");
  // se puede usar await page.goto("/"); siempre y cuando la url base este configurada
  // en el playwright.config.ts
});
// esto se ejecuta después de cada test
test.afterEach(async ({ page }) => {});

test("test", async ({ page }) => {
  await page.goto("http://uitestingplayground.com/");
  await page.getByRole("link", { name: "Resources" }).click();
  await page.getByRole("link", { name: "Home" }).click();
  await page.getByRole("link", { name: "Dynamic ID" }).click();
  await page.getByRole("button", { name: "Button with Dynamic ID" }).click();
  await page.getByRole("link", { name: "Home" }).click();
  await page.getByRole("link", { name: "Shadow DOM" }).click();
  await page.locator("#editField").click();
  await page.getByRole("button", { name: "" }).click();
  await page.getByRole("button", { name: "" }).click();
  await page.getByRole("link", { name: "Home" }).click();
  await page.getByRole("link", { name: "Hidden Layers" }).click();
  await page.getByRole("button", { name: "Button" }).click();
  await page.getByText("Some applications use DOM").click();
  await page.getByRole("link", { name: "Home" }).click();
});

test("test locator", async ({ page }) => {
  await page.goto("http://uitestingplayground.com/");
  // await page.getByRole("link", { name: "Resources" }).click();
  await page.locator('a.nav-link:has-text("Resources")').click();
  await page.getByRole("link", { name: "Home" }).click();
  await page.getByRole("link", { name: "Dynamic ID" }).click();
  await page.getByRole("button", { name: "Button with Dynamic ID" }).click();
  await page.getByRole("link", { name: "Home" }).click();
  await page.getByRole("link", { name: "Shadow DOM" }).click();
  await page.locator("#editField").click();
  await page.getByRole("button", { name: "" }).click();
  await page.getByRole("button", { name: "" }).click();
  await page.getByRole("link", { name: "Home" }).click();
  await page.getByRole("link", { name: "Hidden Layers" }).click();
  await page.getByRole("button", { name: "Button" }).click();
  // await page.getByText("Some applications use DOM").click();
  await page.locator("text=Some applications use DOM").click();
  await page.getByRole("link", { name: "Home" }).click();
});

test("test selectors", async ({ page }) => {
  await page.goto("http://uitestingplayground.com/");
  await page.locator("#title");
  await page.locator(".alert");
  await page.locator("a.navbar-brand").click();

  expect(await page.locator("#title").textContent()).toBe(
    "UI Test AutomationPlayground"
  );
});
