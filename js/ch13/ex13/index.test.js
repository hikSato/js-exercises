import { walk } from ".";

describe("ex13", () => {
  test("walk", async () => {
    const directories = walk("./ch13/ex13");
    expect((await directories.next()).value).toStrictEqual({
      isDirectory: false,
      path: "./ch13/ex13/index.js",
    });
    expect((await directories.next()).value).toStrictEqual({
      isDirectory: false,
      path: "./ch13/ex13/index.test.js",
    });
    expect((await directories.next()).value).toStrictEqual({
      isDirectory: true,
      path: "./ch13/ex13/sample",
    });
    expect((await directories.next()).value).toStrictEqual({
      isDirectory: false,
      path: "./ch13/ex13/sample/abc.txt",
    });
    expect((await directories.next()).value).toStrictEqual({
      isDirectory: false,
      path: "./ch13/ex13/sample/def.txt",
    });
    expect((await directories.next()).value).toStrictEqual(undefined);
    expect((await directories.next()).done).toStrictEqual(true);
  });
});
