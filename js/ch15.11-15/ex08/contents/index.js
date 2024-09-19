const form = document.querySelector("#new-todo-form");
const input = document.querySelector("#new-todo");
const form2 = document.querySelector("#new-todo-form2");
const input2 = document.querySelector("#new-todo2");
const sendList = document.querySelector("#send-list");
const responseList = document.querySelector("#response-list");

let socket = new WebSocket("ws://localhost:3003");
let socket2 = new WebSocket("ws://localhost:3003");
let id = 0;
const getId = () => {
  return id++;
};

socket.addEventListener("open", async (e) => {
  console.log("socket open");
  console.log(e);
});

socket.addEventListener("message", (e) => {
  console.log("socket message");
  console.log(e.message);
  console.log(e);
});

socket.addEventListener("error", (e) => {
  console.log("socket error");
  console.log(e);
});

socket.addEventListener("close", (e) => {
  console.log("socket close");
  console.log(e);
});

socket2.addEventListener("open", async (e) => {
  console.log("socket2 open");
  console.log(e);
});

socket2.addEventListener("message", (e) => {
  console.log("socket2 message");
  console.log(e);
  const elem = document.createElement("li");
  elem.textContent = e.data;
  responseList.appendChild(elem);
});

socket2.addEventListener("error", (e) => {
  console.log("socket2 error");
  console.log(e);
});

socket2.addEventListener("close", (e) => {
  console.log("socket2 close");
  console.log(e);
});

const sendRequest = async (text) => {
  socket.send(text);
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (text === "") {
    return;
  }
  input.value = "";
  const elem = document.createElement("li");
  const textWithId = `${text} (id:${getId()})`;
  elem.textContent = textWithId;
  sendList.appendChild(elem);
  sendRequest(textWithId);
});

form2.addEventListener("submit", async (e) => {
  e.preventDefault();
  const text = input2.value.trim();
  if (text === "") {
    return;
  }
  input2.value = "";
  try {
    await sendRequest2(textWithId);
  } catch {
    console.log("error occur");
    return;
  }
  const elem = document.createElement("li");
  const textWithId = `${text} (id:${getId()})`;
  elem.textContent = textWithId;
  sendList.appendChild(elem);
});

const pendingRequests = new Map();
const sendRequest2 = async (text) => {
  return new Promise((resolve, reject) => {
    console.log("dddddd");
    const id = requestId++;
    const timeout = 5000;
    if (!socket || socket.readyState !== WebSocket.OPEN) {
      reject(new Error("WebSocket is not connected"));
      return;
    }
    const timer = setTimeout(() => {
      pendingRequests.delete(id);
      reject(new Error("Request timed out"));
    }, timeout);
    pendingRequests.set(id, (response) => {
      clearTimeout(timer);
      resolve(response);
    });
    const message = JSON.stringify({ id, text });
    socket.send(message);
  });
};
