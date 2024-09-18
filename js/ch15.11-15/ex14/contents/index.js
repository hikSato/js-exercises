"use strict";

const button = document.querySelector("#send-button");
const messageContainer = document.getElementById("message-container");
button.addEventListener("click", (e) => {
  e.preventDefault();
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
    messageElement.textContent = `Received message: ${event.data}`;
  };

  eventSource.onerror = (event) => {
    console.error("EventSource error:", event);
    messageElement.textContent = "Error receiving messages.";
  };

  eventSource.onopen = () => {
    console.log("Connection opened.");
  };

  eventSource.addEventListener("message", () => {
    eventSource.close();
  });
}
