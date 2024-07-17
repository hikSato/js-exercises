import { readLines } from ".";

describe("ex05", () => {
  test("readLines", () => {
    const lines = readLines("./ch12/ex05/sample.txt");
    expect(lines.next().value).toStrictEqual("abcde");
    expect(lines.next().value).toStrictEqual("fghij");
    expect(lines.next().value).toStrictEqual("klmno");
    expect(lines.next().value).toStrictEqual("pqrst");
    expect(lines.next().value).toStrictEqual("uvwxy");
    expect(lines.next().value).toStrictEqual("z");
  });
});

// __dirname や __filename を使って「テストコード」自体のフォルダやパスを取り、そこからパスを計算すればいいかなと思います > 相対。素直に `./foo.txt` などと書くと npm ... を実行したディレクトリを起点とした相対パスになる、とかあるかも (間違ってたらすいません)

// import { fileURLToPath } from 'url';
// // 現在のモジュールのURLをファイルパスに変換
// const __filename = fileURLToPath(import.meta.url);
// // ファイルパスからディレクトリパスを取得
// const __dirname = path.dirname(__filename);
// pthとfileURLToPathを使いました。
