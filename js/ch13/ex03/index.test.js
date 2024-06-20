import { readdir, stat } from ".";

describe("ex03", () => {
  test("readdir", async () => {
    const dir1 = await readdir("./ch13/ex03/A");
    const dir2 = await readdir("./ch13/ex03/B");
    const dir3 = await readdir("./ch13/ex03/C");

    expect(dir1).toStrictEqual(["A", "AA"]);
    expect(dir2).toStrictEqual(["B"]);
    expect(dir3).toStrictEqual(["C"]);
  });

  test("stat", async () => {
    const stat1 = await stat("./ch13/ex03/A");
    const stat2 = await stat("./ch13/ex03/B");
    const stat3 = await stat("./ch13/ex03/C");
    expect(stat1.birthtimeMs).toBe(1718700744443.2969);
    expect(stat2.birthtimeMs).toBe(1718700807431.494);
    expect(stat3.birthtimeMs).toBe(1718700817748.8513);
  });
});
