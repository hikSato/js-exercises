import { expect, test } from "@playwright/test";

/**
 * @param {import("@playwright/test").Page} page
 */
async function countToDos(page) {
  return await page.locator("#productList li:visible").count();
}

async function getFirstItemName(page) {
  const visibleProducts = await page.locator("#productList li:visible");
  return await visibleProducts.first().innerText();
}

test.describe("simple list app", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/ch15.01-03/ex14");
  });

  test("default list", async ({ page }) => {
    expect(await countToDos(page)).toBe(3);
    expect(await getFirstItemName(page)).toBe("お菓子 - ¥1000");
  });

  test("select all", async ({ page }) => {
    await page.selectOption("#category-select", "all");
    expect(await countToDos(page)).toBe(3);
    expect(await getFirstItemName(page)).toBe("お菓子 - ¥1000");
  });

  test("select food", async ({ page }) => {
    await page.selectOption("#category-select", "food");
    expect(await countToDos(page)).toBe(1);
    expect(await getFirstItemName(page)).toBe("お菓子 - ¥1000");
  });

  test("select stationery", async ({ page }) => {
    await page.selectOption("#category-select", "stationery");
    expect(await countToDos(page)).toBe(2);
    expect(await getFirstItemName(page)).toBe("消しゴム - ¥200");
  });
});
