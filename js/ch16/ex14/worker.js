self.onmessage = (event) => {
  const { imageData, width, height } = event.data;
  const kernel = [
    [1, 4, 7, 4, 1],
    [4, 16, 26, 16, 4],
    [7, 26, 41, 26, 7],
    [4, 16, 26, 16, 4],
    [1, 4, 7, 4, 1],
  ];
  const kernelWeight = 273;
  const outputData = new Uint8ClampedArray(imageData.length);

  for (let y = 2; y < height - 2; y++) {
    for (let x = 2; x < width - 2; x++) {
      let r = 0,
        g = 0,
        b = 0;
      for (let ky = -2; ky <= 2; ky++) {
        for (let kx = -2; kx <= 2; kx++) {
          const pixelIndex = ((y + ky) * width + (x + kx)) * 4;
          const weight = kernel[ky + 2][kx + 2];

          r += imageData[pixelIndex] * weight;
          g += imageData[pixelIndex + 1] * weight;
          b += imageData[pixelIndex + 2] * weight;
        }
      }

      const outputIndex = (y * width + x) * 4;
      outputData[outputIndex] = r / kernelWeight;
      outputData[outputIndex + 1] = g / kernelWeight;
      outputData[outputIndex + 2] = b / kernelWeight;
      outputData[outputIndex + 3] = imageData[outputIndex + 3]; // Alpha channel
    }
  }

  // メインスレッドにフィルタ後のデータを送信
  self.postMessage(outputData);
};
