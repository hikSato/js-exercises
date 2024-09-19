const form = document.getElementById("upload-form");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const accessToken = document.getElementById("access-token").value;
  const fileInput = document.getElementById("file");
  const file = fileInput.files[0];
  const statusElement = document.getElementById("status");
  const parentId = "js-exercise";

  if (!accessToken || !file) {
    statusElement.textContent =
      "Please provide both an access token and a file.";
    return;
  }

  const uploadUrl = `https://graph.microsoft.com/v1.0/me/drive/root:/${parentId}/${encodeURIComponent(
    file.name
  )}:/content`;

  try {
    const response = await fetch(uploadUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": file.type,
      },
      body: file,
    });

    if (response.ok) {
      const data = await response.json();
      statusElement.textContent = `File uploaded successfully. File ID: ${data.id}`;
    } else {
      const error = await response.json();
      statusElement.textContent = `Error: ${error.error.message}`;
    }
  } catch (error) {
    statusElement.textContent = `Error: ${error.message}`;
  }
});
