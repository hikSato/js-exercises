import path from "path";
import { readdir, stat } from ".";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename);
console.log(__dirname);

describe("ex03", () => {
  test("readdir", async () => {
    const dir1 = await readdir(__dirname + "/A");
    const dir2 = await readdir(__dirname + "/B");
    const dir3 = await readdir(__dirname + "/C");

    expect(dir1).toStrictEqual(["A", "AA"]);
    expect(dir2).toStrictEqual(["B"]);
    expect(dir3).toStrictEqual(["C"]);
  });

  test("stat", async () => {
    const stat1 = await stat(__dirname + "/A");
    const stat2 = await stat(__dirname + "/B");
    const stat3 = await stat(__dirname + "/C");
    expect(stat1.birthtimeMs).toBe(1718700744443.2969);
    expect(stat2.birthtimeMs).toBe(1718700807431.494);
    expect(stat3.birthtimeMs).toBe(1718700817748.8513);
  });
});
