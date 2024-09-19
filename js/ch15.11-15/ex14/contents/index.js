"use strict";

const button = document.querySelector("#send-button");
const messageContainer = document.getElementById("message-container");
button.addEventListener("click", (e) => {
  e.preventDefault();
  button.disabled = true;
  getMessageFromServer();
});
async function getMessageFromServer() {
  const messageElement = document.createElement("div");
  messageElement.className = "message";
  messageElement.textContent = "";
  messageContainer.appendChild(messageElement);

  // TODO: ここにサーバーとのやり取り等を実装しなさい
  const eventSource = new EventSource("http://localhost:3000/message");

  eventSource.onmessage = (event) => {
    const item = document.createElement("div");
    item.textContent = `Received message: ${event.data}`;
    messageElement.appendChild(item);
  };

  eventSource.onerror = (event) => {
    console.error("EventSource error:", event);
    const item = document.createElement("div");
    item.textContent = "Error receiving messages.";
    messageElement.appendChild(item);
    button.disabled = false;
    eventSource.close();
  };

  eventSource.onopen = () => {
    console.log("Connection opened.");
  };
}
