import fs from "fs";
import iconv from "iconv-lite";

const filename = "hello.txt";
var converterStream = iconv.decodeStream("ShiftJIS");
fs.createReadStream(filename)
  .pipe(converterStream)
  .on("data", function (str) {
    console.log(str);
  })
  .on("end", () => {
    console.log("complete.");
  })
  .on("error", (err) => {
    console.error(`Error: ${err.message}`);
  });
