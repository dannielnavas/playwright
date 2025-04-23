import { expect, test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://uitestingplayground.com/");
  // // await page.getByRole("link", { name: "Resources" }).click();
  // await page.locator('a.nav-link:has-text("Resources")').click();
  // await page.getByRole("link", { name: "Home" }).click();
  // await page.getByRole("link", { name: "Dynamic ID" }).click();
  // await page.getByRole("button", { name: "Button with Dynamic ID" }).click();
  // await page.getByRole("link", { name: "Home" }).click();
  // await page.getByRole("link", { name: "Shadow DOM" }).click();
  // await page.locator("#editField").click();
  // await page.getByRole("button", { name: "" }).click();
  // await page.getByRole("button", { name: "" }).click();
  // await page.getByRole("link", { name: "Home" }).click();
  // await page.getByRole("link", { name: "Hidden Layers" }).click();
  // await page.getByRole("button", { name: "Button" }).click();
  // // await page.getByText("Some applications use DOM").click();
  // await page.locator("text=Some applications use DOM").click();
  // await page.getByRole("link", { name: "Home" }).click();

  // new test
  await page.locator("#title");
  await page.locator(".alert");
  await page.locator("a.navbar-brand").click();

  expect(await page.locator("#title").textContent()).toBe(
    "UI Test AutomationPlayground"
  );
});
