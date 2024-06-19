// fetchSumOfFileSizes を Promise.all を使って書き換え、ディレクトリ内のファイルサイズを同時並行で取得するようにしなさい。
// 注意: Promise.all を使う時は注意すること (例えば Web API の呼び出しを並行に実行すると、数次第で何らかのエラーに繋がる可能性がある)

import * as fs from "node:fs/promises";
import { join } from "node:path";

export async function fetchSumOfFileSizes(path) {
  try {
    const files = await fs.readdir(path);
    const sizePromises = files.map(async (file) => {
      const stats = await fs.stat(join(path, file));
      return stats.size;
    });
    const sizes = await Promise.all(sizePromises);
    const totalSize = sizes.reduce((acc, size) => acc + size, 0);
    return totalSize;
  } catch (err) {
    throw err;
  }
}
