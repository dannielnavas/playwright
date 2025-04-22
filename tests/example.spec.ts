import { test } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://platzi.com/");
  await page.getByRole("button", { name: "Comunidad" }).click();
  await page.getByRole("link", { name: "Blog" }).click();
  await page.getByRole("link", { name: "Más contenido! " }).click();
});
