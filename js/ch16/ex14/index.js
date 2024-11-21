const square = document.getElementById("square");
let top = 0;
let left = 0;

document.getElementById("image").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) {
    return;
  }

  const img = new Image();
  const reader = new FileReader();

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

    const worker = new Worker("worker.js");
    worker.postMessage({
      imageData: imageData.data,
      width: img.width,
      height: img.height,
    });

    worker.onmessage = (e) => {
      const outputData = e.data;
      const outputImageData = new ImageData(outputData, img.width, img.height);
      filteredCtx.putImageData(outputImageData, 0, 0);
    };
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
}, 10);