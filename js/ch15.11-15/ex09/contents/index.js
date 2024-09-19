const canvas = document.querySelector("#screen");
const ctx = canvas.getContext("2d");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
startButton.disabled = true;
pauseButton.disabled = true;
// 50 x 50 の盤面とする
const ROWS = 50;
const COLS = 50;
// 1セルのサイズ
const RESOLUTION = 10;
canvas.width = ROWS * RESOLUTION;
canvas.height = COLS * RESOLUTION;

// https://developer.mozilla.org/ja/docs/Web/API/Window/requestAnimationFrame が返す ID
let animationId = null;

// NOTE: download from https://soundeffect-lab.info/sound/button/mp3/decision1.mp3
const sound = new Audio("/ch15.11-15/ex09/contents/decision1.mp3");

let socket = new WebSocket("ws://localhost:3003/");

// 接続が開いたときのイベント
socket.addEventListener("open", () => {
  startButton.disabled = false;
  pauseButton.disabled = false;
  console.log("Hello Server!");
});

// grid を canvas に描画する
function renderGrid(grid) {
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const cell = grid[row][col];
      ctx.beginPath();
      ctx.rect(col * RESOLUTION, row * RESOLUTION, RESOLUTION, RESOLUTION);
      ctx.fillStyle = cell ? "black" : "white";
      ctx.fill();
      ctx.stroke();
    }
  }
}

// メッセージの待ち受け
socket.addEventListener("message", (event) => {
  const data = JSON.parse(event.data);
  const grid = data.grid;
  if (data.type === "update" && grid) {
    renderGrid(grid);
  }
});

// canvas がクリックされたときの処理 (セルの値を反転する)
canvas.addEventListener("click", function (evt) {
  const rect = canvas.getBoundingClientRect();
  const pos = { x: evt.clientX - rect.left, y: evt.clientY - rect.top };

  const row = Math.floor(pos.y / RESOLUTION);
  const col = Math.floor(pos.x / RESOLUTION);
  // grid[row][col] = !grid[row][col];
  sound.cloneNode().play();
  // renderGrid(grid);
  socket.send(
    JSON.stringify({
      type: "toggle",
      row,
      col,
    })
  );
});

startButton.addEventListener("click", () => {
  socket.send(JSON.stringify({ type: "start" }));
});

pauseButton.addEventListener("click", () => {
  socket.send(JSON.stringify({ type: "pause" }));
  cancelAnimationFrame(animationId);
  animationId = null;
});
