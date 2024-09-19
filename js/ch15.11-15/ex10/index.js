const image = document.getElementById("image");
const square = document.getElementById("square");
let top = 0;
let left = 0;

image.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) {
    return;
  }

  const img = new Image();
  const reader = new FileReader();
  const worker = new Worker("./worker.js");

  reader.addEventListener("load", (e) => {
    img.src = e.target.result;
  });

  img.addEventListener("load", () => {
    const originalCanvas = document.getElementById("original");
    const filteredCanvas = document.getElementById("filtered");
    const originalCtx = originalCanvas.getContext("2d");
    const filteredCtx = filteredCanvas.getContext("2d");

    originalCanvas.width = img.width;
    originalCanvas.height = img.height;
    filteredCanvas.width = img.width;
    filteredCanvas.height = img.height;

    originalCtx.drawImage(img, 0, 0);

    const imageData = originalCtx.getImageData(0, 0, img.width, img.height);
    worker.postMessage({
      imageData: imageData,
      width: img.width,
      height: img.height,
    });

    // Web Worker から処理結果を受け取る
    worker.addEventListener("message", (event) => {
      const outputImageData = new ImageData(
        event.data.filteredData,
        img.width,
        img.height
      );
      filteredCtx.putImageData(outputImageData, 0, 0);
    });
  });

  reader.readAsDataURL(file);
});

setInterval(() => {
  square.style.top = `${top}px`;
  square.style.left = `${left}px`;
  if (left === 0 && top !== 80) {
    top += 20;
  } else if (left !== 80 && top === 80) {
    left += 20;
  } else if (left === 80 && top !== 0) {
    top -= 20;
  } else if (left !== 0 && top === 0) {
    left -= 20;
  }
}, 50);
