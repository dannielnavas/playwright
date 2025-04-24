import { expect, test } from "@playwright/test";

test("test assert", async ({ page }) => {
  await page.goto("http://uitestingplayground.com/textinput");

  // verify input is  visible
  await expect(page.locator("#newButtonName")).toBeVisible();

  await page.pause();

  // select input a fill the input you text
  await page.locator("#newButtonName").fill("Hello World");
  // click in the button
  await page.locator("#updatingButton").click();
  // verify button text updated
  await expect(page.locator("#updatingButton")).toContainText("Hello World");
});
