import fs from "fs";

export function* readLines(filePath) {
  const bufferSize = 2;
  let fd = 0;
  try {
    fd = fs.openSync(filePath, "r");
    const buffer = Buffer.alloc(bufferSize);
    let completeRead = "";
    let lastLine = "";

    while (true) {
      const bytesRead = fs.readSync(fd, buffer, 0, bufferSize, null);
      if (bytesRead === 0) break;
      let data = completeRead + buffer.toString("utf8", 0, bytesRead);
      let lines = data.split("\n");
      lastLine = lines.pop();
      for (const line of lines) {
        yield line;
      }
      completeRead = lastLine;
    }
    if (lastLine) {
      yield lastLine;
    }
  } finally {
    fs.closeSync(fd);
  }
}

// for (const line of readLines("./sample.txt")) {
//   console.log(line);
// }
