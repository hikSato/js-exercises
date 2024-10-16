import fs from "fs";

export const checkEntry = (path) => {
  try {
    const stats = fs.statSync(path);
    if (stats.isFile()) {
      return "file";
    } else if (stats.isDirectory()) {
      return "directory";
    }
    return "other";
  } catch {
    return "not found";
  }
};
