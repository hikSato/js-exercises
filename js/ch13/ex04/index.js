import * as fs from "node:fs";
import * as fsPromises from "node:fs/promises";

fsPromises
  .mkdir("A")
  .then(() => fsPromises.mkdir("B"))
  .then(() => fsPromises.mkdir("C"));

// function fetchFirstFileSize(path, callback) {
//   fs.readdir(path, (err, files) => {
//     if (err) {
//       callback(err);
//       return;
//     }
//     if (files.length === 0) {
//       callback(null, null);
//       return;
//     }

//     fs.stat(join(path, files[0]), (err, stats) => {
//       if (err) {
//         callback(err);
//         return;
//       }
//       callback(null, stats.size);
//     });
//   });
// }

function fetchFirstFileSize(path, callback) {
  return fsPromises
    .readdir(path)
    .then(
      (files) => {
        if (files.length === 0) {
          callback(null, null);
          return;
        }
        return fsPromises.stat(join(path, files[0]));
      },
      (err) => {
        callback(err);
        return;
      }
    )
    .then(
      (stats) => callback(null, stats.size),
      (err) => {
        callback(err);
        return;
      }
    );
}

// function fetchSumOfFileSizes(path, callback) {
//   fs.readdir(path, (err, files) => {
//     if (err) {
//       callback(err);
//       return;
//     }

//     let total = 0;
//     const rest = [...files];

//     function iter() {
//       if (rest.length === 0) {
//         callback(null, total);
//         return;
//       }

//       const next = rest.pop();
//       fs.stat(join(path, next), (err, stats) => {
//         if (err) {
//           callback(err);
//           return;
//         }
//         total += stats.size;
//         iter();
//       });
//     }
//     iter();
//   });
// }

function fetchSumOfFileSizes(path, callback) {
  fsPromises
    .readdir(path)
    .then((files) => {
      let total = 0;
      const rest = [...files];
      function iter() {
        if (rest.length === 0) {
          callback(null, total);
          return;
        }

        const next = rest.pop();
        return fsPromises.stat(join(path, next)).then(
          (stats) => {
            total += stats.size;
            iter();
          },
          (err) => {
            callback(err);
            return;
          }
        );
      }
      return Promise.resolve([]).then(iter);
    })
    .then();
}
