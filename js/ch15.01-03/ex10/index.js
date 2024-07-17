const div = document.querySelector("#editor-front");
const input = document.querySelector("#editor-back");

div.style.backgroundColor = "rgba(255, 255, 255)";
div.addEventListener("click", () => {
  input.focus();
});

input.addEventListener("focus", () => {
  div.style.backgroundColor = "rgb(192, 192, 192)";
});

input.addEventListener("blur", () => {
  div.style.backgroundColor = "rgba(255, 255, 255)";
});

input.addEventListener("input", (e) => {
  div.textContent = e.target.value;
});
