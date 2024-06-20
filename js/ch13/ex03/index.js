import * as fs from "node:fs";

export function readdir(path, options) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, options, (err, files) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(files);
    });
  });
}

readdir("./ch13/ex03/A")
  .then(() => readdir("./ch13/ex03/B"))
  .then(() => readdir("./ch13/ex03/C"))
  .then(() => console.log("COMPLETED"));

export function stat(path, options) {
  return new Promise((resolve, reject) => {
    fs.stat(path, options, (err, stats) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(stats);
    });
  });
}

stat("./ch13/ex03/A")
  .then((e) => stat("./ch13/ex03/B"))
  .then((e) => stat("./ch13/ex03/C"))
  .then(() => console.log("COMPLETED"));
