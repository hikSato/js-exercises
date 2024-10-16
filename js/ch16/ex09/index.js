import express from "express";
import path from "path";
import fs from "fs";

export function serve(rootDirectory, port) {
  const app = express();

  app.all("/test/mirror", (req, res) => {
    res.setHeader("Content-Type", "text/plain; charset=UTF-8");
    let responseText = `${req.method} ${req.url} HTTP/${req.httpVersion}\r\n`;
    for (let [header, value] of Object.entries(req.headers)) {
      responseText += `${header}: ${value}\r\n`;
    }
    responseText += "\r\n";

    res.status(200).send(responseText);
  });

  app.get("*", (req, res) => {
    let filename = req.path.substring(1).replace(/\.\.\//g, "");
    filename = path.resolve(process.cwd() + rootDirectory, filename);

    let type;
    switch (path.extname(filename)) {
      case ".html":
      case ".htm":
        type = "text/html";
        break;
      case ".js":
        type = "text/javascript";
        break;
      case ".css":
        type = "text/css";
        break;
      case ".png":
        type = "image/png";
        break;
      case ".txt":
        type = "text/plain";
        break;
      default:
        type = "application/octet-stream";
        break;
    }

    fs.createReadStream(filename)
      .on("error", (err) => {
        res.status(404).send("File not found: " + err.message);
      })
      .once("readable", () => {
        res.setHeader("Content-Type", type);
      })
      .pipe(res);
  });

  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}

serve(process.argv[2] || "/tmp", parseInt(process.argv[3]) || 8000);
