import { checkHoliday, checkHoliday2 } from ".";

describe("Check the holidays correctly.", () => {
  test("checkHoliday", () => {
    expect(checkHoliday(`月`)).toBe(false);
    expect(checkHoliday(`火`)).toBe(false);
    expect(checkHoliday(`水`)).toBe(false);
    expect(checkHoliday(`木`)).toBe(false);
    expect(checkHoliday(`金`)).toBe(false);
    expect(checkHoliday(`土`)).toBe(true);
    expect(checkHoliday(`日`)).toBe(true);
  });

  test("checkHoliday2", () => {
    expect(checkHoliday2(`月`)).toBe(false);
    expect(checkHoliday2(`火`)).toBe(false);
    expect(checkHoliday2(`水`)).toBe(false);
    expect(checkHoliday2(`木`)).toBe(false);
    expect(checkHoliday2(`金`)).toBe(false);
    expect(checkHoliday2(`土`)).toBe(true);
    expect(checkHoliday2(`日`)).toBe(true);
  });
});
