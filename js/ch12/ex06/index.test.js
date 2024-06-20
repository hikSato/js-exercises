import { walk } from ".";

describe("ex06", () => {
  test("walk", () => {
    const dirOrFile = walk("./ch12/ex06/sample");
    expect(dirOrFile.next().value).toStrictEqual({
      path: "./ch12/ex06/sample/sample1",
      isDirectory: true,
    });
    expect(dirOrFile.next().value).toStrictEqual({
      path: "./ch12/ex06/sample/sample1/file1",
      isDirectory: false,
    });
    expect(dirOrFile.next().value).toStrictEqual({
      path: "./ch12/ex06/sample/sample2",
      isDirectory: true,
    });
    expect(dirOrFile.next().value).toStrictEqual({
      path: "./ch12/ex06/sample/sample2/file2",
      isDirectory: false,
    });
    expect(dirOrFile.next().value).toStrictEqual(undefined);
    expect(dirOrFile.next().done).toStrictEqual(true);
  });
});
