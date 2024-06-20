import { fetchSumOfFileSizes } from ".";
import { jest } from "@jest/globals";

describe("ex10", () => {
  test("fetchSumOfFileSizes", async () => {
    const callbackMock = jest.fn();
    await fetchSumOfFileSizes("./ch13/ex08/sample", callbackMock);
    const EXPECT_SIZE = 140;
    expect(callbackMock).toHaveBeenCalledTimes(1);
    expect(callbackMock).toHaveBeenCalledWith(null, EXPECT_SIZE);
  });
});
