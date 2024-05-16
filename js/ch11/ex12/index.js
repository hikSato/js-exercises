import { statSync } from "fs";

class ExceedFileSizeError extends Error {
  constructor(filePath, fileSize, maxSize) {
    super(
      `The size of ${filePath} (${fileSize} byte) exceeds the maximum size (${maxSize} bype).`
    );
    this.filePath = filePath;
    this.fileSize = fileSize;
    this.maxSize = maxSize;
  }

  get name() {
    return "ExceedFileSizeError";
  }
}

const checkFileSize = (filePath, maxSize) => {
  try {
    var stat = statSync(filePath);
    if (stat.size > maxSize) {
      throw new ExceedFileSizeError(filePath, stat.size, maxSize);
    }
  } catch (e) {
    console.error(e.message);
    console.error(e.name);
  }
};

checkFileSize("./ch11/ex12/sample.txt", 10);
