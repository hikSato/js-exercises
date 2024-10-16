import { checkEntry } from "./index.js";
import fs from "fs";

describe("ch16/ex07", () => {
  jest.mock("fs");
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("file", () => {
    fs.statSync.mockReturnValue({
      isFile: () => true,
      isDirectory: () => false,
    });

    const result = checkEntry("./sample.txt");
    expect(result).toBe("file");
  });

  it("directory", () => {
    fs.statSync.mockReturnValue({
      isFile: () => false,
      isDirectory: () => true,
    });
    const result = checkEntry("./sample");
    expect(result).toBe("directory");
  });

  it("other", () => {
    fs.statSync.mockReturnValue({
      isFile: () => false,
      isDirectory: () => false,
    });
    const result = checkEntry("");
    expect(result).toBe("other");
  });

  it("not found", () => {
    fs.statSync.mockImplementation(() => {
      throw new Error("File not found");
    });
    const result = checkEntry("sample.txt");
    expect(result).toBe("not found");
  });
});
