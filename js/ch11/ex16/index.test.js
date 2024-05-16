import { retryWithExponentialBackoff } from "./index.js";
import { jest } from "@jest/globals";

describe("retryWithExponentialBackoff", () => {
  jest.useFakeTimers();
  afterEach(() => {
    jest.clearAllTimers();
  });

  test("func returns true for the second time", () => {
    const func = jest.fn().mockReturnValueOnce(false).mockReturnValueOnce(true);
    const callback = jest.fn();
    retryWithExponentialBackoff(func, 5, callback);
    jest.advanceTimersByTime(60000);

    expect(func).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenCalledWith(true);
  });

  test("func returns only false", () => {
    const func = jest.fn().mockReturnValue(false);
    const callback = jest.fn();

    retryWithExponentialBackoff(func, 5, callback);

    jest.advanceTimersByTime(60000);

    expect(func).toHaveBeenCalledTimes(5);
    expect(callback).toHaveBeenCalledWith(false);
  });

  test("func returns true for the fourth time", () => {
    const func = jest
      .fn()
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValueOnce(false)
      .mockReturnValue(true);
    const callback = jest.fn();

    retryWithExponentialBackoff(func, 5, callback);

    jest.advanceTimersByTime(60000);

    expect(func).toHaveBeenCalledTimes(4);
    expect(callback).toHaveBeenCalledWith(true);
  });
});
