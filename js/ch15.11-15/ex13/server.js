const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(express.json());

app.post("/chat", async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/v1/generate",
      {
        model: "gemma2:2b",
        prompt: req.body.prompt,
        stream: true,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    res.setHeader("Content-Type", "application/json");
    res.send(response.data);
  } catch (error) {
    res.status(500).send("Error communicating with LLM");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
