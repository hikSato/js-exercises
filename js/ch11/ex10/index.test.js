import {
  getDayOfWeek,
  getDaysOfMonth,
  getWeekdayCount,
  getDateObj,
} from "./index.js";

describe("ex10", () => {
  test("getDaysOfMonth", () => {
    expect(getDaysOfMonth(2023, 2)).toBe(28);
    expect(getDaysOfMonth(2024, 2)).toBe(29);
    expect(getDaysOfMonth(2024, 3)).toBe(31);
    expect(getDaysOfMonth(2024, 4)).toBe(30);
    expect(getDaysOfMonth(2024, 5)).toBe(31);
    expect(getDaysOfMonth(2024, 6)).toBe(30);
  });

  test("getWeekdayCount", () => {
    expect(getWeekdayCount("2023-12-25", "2024-01-05")).toBe(10);
    expect(getWeekdayCount("2024-02-20", "2024-03-10")).toBe(14);
    expect(getWeekdayCount("2024-04-01", "2024-05-31")).toBe(45);
    expect(getWeekdayCount("2024-04-01", "2024-04-30")).toBe(22);
    expect(getWeekdayCount("2024-05-10", "2024-05-20")).toBe(7);
    expect(getWeekdayCount("2024-04-01", "2024-05-31")).toBe(45);
  });

  test("getDayOfWeek", () => {
    expect(getDayOfWeek("2024-04-01", "jp-JP")).toBe("月曜日");
    expect(getDayOfWeek("2024-04-01", "en-US")).toBe("Monday");
    expect(getDayOfWeek("2024-04-05", "jp-JP")).toBe("金曜日");
    expect(getDayOfWeek("2024-04-05", "en-US")).toBe("Friday");
  });

  test("getDateObj", () => {
    expect(getDateObj("2023-01-05").toString()).toBe(
      new Date(2022, 11, 1, 0, 0, 0).toString()
    );
    expect(getDateObj("2024-05-15").toString()).toBe(
      new Date(2024, 3, 1, 0, 0, 0).toString()
    );
    expect(getDateObj("2024-07-05").toString()).toBe(
      new Date(2024, 5, 1, 0, 0, 0).toString()
    );
  });
});
