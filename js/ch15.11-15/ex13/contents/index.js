document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#send-button");
  const input = document.querySelector("#input");
  const messageContainer = document.querySelector("#message-container");

  button.addEventListener("click", async () => {
    const userMessage = input.value.trim();
    if (userMessage === "") return;

    input.value = "";
    appendMessage(userMessage, "user");

    try {
      const response = await fetch("/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: userMessage }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let responseText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        responseText += decoder.decode(value, { stream: true });
        appendMessage(responseText, "llm");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });

  function appendMessage(text, sender) {
    const messageElement = document.createElement("div");
    messageElement.className = `message ${sender}`;
    messageElement.textContent = text;
    messageContainer.appendChild(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight;
  }
});
