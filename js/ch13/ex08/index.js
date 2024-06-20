import { join } from "node:path";
import * as fsPromises from "node:fs/promises";

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
export async function fetchFirstFileSize(path, callback) {
  try {
    const files = await fsPromises.readdir(path);
    if (files.length === 0) {
      callback(null, null);
      return;
    }
    const stats = await fsPromises.stat(join(path, files[0]));
    callback(null, stats.size);
  } catch (e) {
    callback(e);
    return;
  }
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

export async function fetchSumOfFileSizes(path, callback) {
  try {
    const files = await fsPromises.readdir(path);
    let total = 0;
    if (files.length === 0) {
      callback(null, total);
      return;
    }
    const proises = files.map((file) => fsPromises.stat(join(path, file)));
    for await (const response of proises) {
      const stats = response;
      total += stats.size;
    }
    callback(null, total);
  } catch (e) {
    callback(e);
    return;
  }
}
