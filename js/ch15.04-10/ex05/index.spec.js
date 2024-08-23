import { expect, test } from "@playwright/test";

test.describe("InlineCircle Custom Element", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/ch15.04-10/ex05");
  });

  test("inline-circle要素が正しく表示される", async ({ page }) => {
    const circles = await page.locator("inline-circle");
    await expect(circles).toHaveCount(4);

    const firstCircle = await circles.first();
    await expect(firstCircle).toHaveCSS("display", "inline-block");
    await expect(firstCircle).toHaveCSS("border-radius", "50%");
  });

  test("diameterとcolor属性が正しく反映される", async ({ page }) => {
    // 2番目のinline-circle要素
    const secondCircle = await page.locator("inline-circle").nth(1);
    await expect(secondCircle).toHaveAttribute("color", "blue");
    await expect(secondCircle).toHaveCSS("background-color", "rgb(0, 0, 255)"); // blue

    // 3番目のinline-circle要素
    const thirdCircle = await page.locator("inline-circle").nth(2);
    await expect(thirdCircle).toHaveAttribute("color", "gold");
    await expect(thirdCircle).toHaveCSS("background-color", "rgb(255, 215, 0)"); // gold
  });

  test("border-color属性が正しく反映される", async ({ page }) => {
    const fourthCircle = await page.locator("inline-circle").nth(3);
    await expect(fourthCircle).toHaveAttribute("color", "pink");
    await expect(fourthCircle).toHaveAttribute("border-color", "gold");
    await expect(fourthCircle).toHaveCSS(
      "background-color",
      "rgb(255, 192, 203)"
    ); // pink
    await expect(fourthCircle).toHaveCSS("border-color", "rgb(255, 215, 0)"); // gold
  });
});
