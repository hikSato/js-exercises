document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("#send-button");
  const input = document.querySelector("#input");
  const messageContainer = document.querySelector("#message-container");
  const origin = "http://localhost:11434";
  const model = "gemma2:2b";
  const messageArr = [];

  button.addEventListener("click", async () => {
    const userMessage = input.value.trim();
    if (userMessage === "") return;

    input.value = "";
    appendMessage(userMessage, "user");
    messageArr.push({ role: "user", content: userMessage });

    try {
      const response = await fetch(`${origin}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: model,
          messages: messageArr,
        }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let responseText = "";
      const messageElement = document.createElement("div");
      const messageTitle = document.createElement("h3");
      const messageText = document.createElement("div");
      messageElement.className = `message ai`;
      messageTitle.textContent = userMessage;
      messageElement.appendChild(messageTitle);
      messageElement.appendChild(messageText);
      messageContainer.appendChild(messageElement);

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        responseText += decoder.decode(value, { stream: true });
        try {
          const jsonResponse = JSON.parse(responseText);
          const content = jsonResponse.message?.content;
          messageText.textContent += content;
          //   appendMessage(content, "ai");
          responseText = "";
        } catch (e) {
          continue;
        }
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
