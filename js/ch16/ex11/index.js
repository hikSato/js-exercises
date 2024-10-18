import net from "net";

// ヘッダー
const responseHeaders = {
  "Content-Type": "text/html; charset=UTF-8",
  Connection: "close",
};

// html
const greeting = () => `
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Greeting Form</title>
  </head>
  <body>
    <form action="/greeting" method="POST">
      <label for="greeting">Name:</label>
      <input type="text" id="name" name="name" />
      <input type="text" id="greeting" name="greeting" />
      <button type="submit">Submit</button>
    </form>
  </body>
</html>
`;

const responseHTML = (greeting, name) => `
      <!doctype html>
      <html lang="ja">
        <head>
          <meta charset="UTF-8" />
          <title>Greeting</title>
        </head>
        <body>
          <h1>${greeting}, ${name}!</h1>
        </body>
      </html>
      `;

// 404
const notFound = () => `
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>404 Not Found</title>
  </head>
  <body>
    <h1>404 Not Found</h1>
  </body>
</html>
`;

// 405
const notAllowed = () => `
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <title>405 Method Not Allowed</title>
  </head>
  <body>
    <h1>405 Method Not Allowed</h1>
  </body>
</html>
`;

const server = net.createServer((socket) => {
  socket.on("data", (data) => {
    const request = data.toString();
    const [requestLine, ...headerLines] = request.split("\r\n");
    const [method, path] = requestLine.split(" ");

    if (method === "GET" && path === "/") {
      const response = `HTTP/1.1 200 OK\r\n${Object.entries(responseHeaders)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\r\n")}\r\n\r\n${greeting()}`;
      socket.write(response);
      socket.end();
    } else if (method === "POST" && path === "/greeting") {
      let body = request.split("\r\n\r\n")[1];
      let params = new URLSearchParams(body);

      let name = params.get("name") || "Anonymous";
      let greeting = params.get("greeting") || "Hello";

      const response = `HTTP/1.1 200 OK\r\n${Object.entries(responseHeaders)
        .map(([key, value]) => `${key}: ${value}`)
        .join("\r\n")}\r\n\r\n${responseHTML(greeting, name)}`;
      socket.write(response);
      socket.end();
    } else if (method === "GET" || method === "POST") {
      const response = `HTTP/1.1 404 Not Found\r\n${Object.entries(
        responseHeaders
      )
        .map(([key, value]) => `${key}: ${value}`)
        .join("\r\n")}\r\n\r\n${notFound()}`;
      socket.write(response);
      socket.end();
    } else {
      const response = `HTTP/1.1 405 Method Not Allowed\r\n${Object.entries(
        responseHeaders
      )
        .map(([key, value]) => `${key}: ${value}`)
        .join("\r\n")}\r\n\r\n${notAllowed()}`;
      socket.write(response);
      socket.end();
    }
  });

  // エラー処理
  socket.on("error", (err) => {
    console.error("Socket error:", err);
  });
});

server.listen(8000, () => {
  console.log("Server is running on port 8000");
});
