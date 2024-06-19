import fs from "fs";

export function* walk(rootPath) {
  const entries = fs.readdirSync(rootPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = rootPath + "/" + entry.name;
    const isDirectory = entry.isDirectory();
    yield {
      path: fullPath,
      isDirectory: isDirectory,
    };

    if (isDirectory) {
      yield* walk(fullPath);
    }
  }
}

for (const elem of walk(".")) {
  console.log(elem);
}
