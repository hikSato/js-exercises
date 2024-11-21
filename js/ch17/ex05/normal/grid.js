// 50 x 50 の盤面とする
export const ROWS = 50;
export const COLS = 50;
// 1セルのサイズ
export const RESOLUTION = 10;

export const canvas = document.querySelector("#screen");
const ctx = canvas.getContext("2d");

// grid を canvas に描画する
export function renderGrid(grid) {
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

// Life Game のルールに従ってセルを更新する
export function updateGrid(grid) {
  // 新しいグリッドを作成
  const nextGrid = grid.map((arr) => [...arr]);

  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      // 周囲のセルの生存数を数えて nextGrid[row][col] に true or false を設定する (実装してね)
      let count = 0;
      for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
          const invalidRow = i < 0 || i >= ROWS;
          const invalidCol = j < 0 || j >= COLS;
          const currentPos = i === row && j === col;
          if (invalidRow || invalidCol || currentPos) continue;
          if (grid[i][j]) count++;
        }
      }

      nextGrid[row][col] = (grid[row][col] && count === 2) || count === 3;
    }
  }
  return nextGrid;
}
