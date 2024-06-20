import { fetchFirstFileSize, fetchSumOfFileSizes } from ".";
import { jest } from "@jest/globals";

beforeAll(() => {
  jest.clearAllMocks();
});
describe("ex08", () => {
  test("fetchFirstFileSize", async () => {
    const callbackMock = jest.fn();
    await fetchFirstFileSize("./ch13/ex08/sample", callbackMock);
    const EXPECT_SIZE = 90;
    expect(callbackMock).toHaveBeenCalledTimes(1);
    expect(callbackMock).toHaveBeenCalledWith(null, EXPECT_SIZE);
  });

  test("fetchSumOfFileSizes", async () => {
    const callbackMock = jest.fn();
    await fetchSumOfFileSizes("./ch13/ex08/sample", callbackMock);
    const EXPECT_SIZE = 140;
    expect(callbackMock).toHaveBeenCalledTimes(1);
    expect(callbackMock).toHaveBeenCalledWith(null, EXPECT_SIZE);
  });
});
