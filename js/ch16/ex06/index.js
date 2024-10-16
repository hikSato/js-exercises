import fs from "fs";

fs.truncate("./text.txt", 20, (err) => {
  if (err) {
    console.error("Error", err);
  } else {
    console.log("Success!");
  }
});
