import { expect, test } from "@playwright/test";

test.describe("Todo Application", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/ch15.04-10/ex11");
  });

  test("Todoを追加", async ({ page }) => {
    await page.fill("#new-todo", "テストサンプル1");
    await page.click('button:has-text("Add")');

    const todoItems = await page.locator("#todo-list li");
    await expect(todoItems).toHaveCount(1);
    await expect(todoItems.first().locator(".content")).toHaveText(
      "テストサンプル1"
    );
  });

  test("タスクを完了", async ({ page }) => {
    await page.fill("#new-todo", "完了するサンプルタスク");
    await page.click('button:has-text("Add")');

    await page.click("#todo-list li .toggle");

    const todoItem = await page.locator("#todo-list li.completed");
    await expect(todoItem).toHaveCount(1);
    await expect(todoItem.locator(".content")).toHaveText(
      "完了するサンプルタスク"
    );
  });

  test("タスクを削除", async ({ page }) => {
    await page.fill("#new-todo", "削除するサンプルタスク");
    await page.click('button:has-text("Add")');

    await page.click("#todo-list li .destroy");

    const todoItems = await page.locator("#todo-list li");
    await expect(todoItems).toHaveCount(0);
  });

  test("フィルタリング機能", async ({ page }) => {
    await page.fill("#new-todo", "Activeのサンプルタスク");
    await page.click('button:has-text("Add")');
    await page.fill("#new-todo", "Completedのサンプルタスク");
    await page.click('button:has-text("Add")');

    const secondToggle = await page
      .locator("#todo-list li")
      .nth(1)
      .locator(".toggle");
    await secondToggle.click();

    await page.click('a[href="#/active"]');
    const activeItems = await page.locator("#todo-list li");
    await expect(activeItems).toHaveCount(1);
    await expect(activeItems.first().locator(".content")).toHaveText(
      "Activeのサンプルタスク"
    );
    await page.click('a[href="#/completed"]');
    const completedItems = await page.locator("#todo-list li");
    await expect(completedItems).toHaveCount(1);
    await expect(completedItems.first().locator(".content")).toHaveText(
      "Completedのサンプルタスク"
    );
    await page.click('a[href="#/"]');
    const allItems = await page.locator("#todo-list li");
    await expect(allItems).toHaveCount(2);
  });
});
