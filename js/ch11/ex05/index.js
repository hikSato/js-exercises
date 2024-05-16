export const detectFileType = (buffer) => {
  const pdf = [0x25, 0x50, 0x44, 0x46, 0x2d];
  const zip = [0x50, 0x4b, 0x03, 0x04];
  const zipEA = [0x50, 0x4b, 0x05, 0x06];
  const zipSA = [0x50, 0x4b, 0x07, 0x08];
  const gif87a = [0x47, 0x49, 0x46, 0x38, 0x37, 0x61];
  const gif89a = [0x47, 0x49, 0x46, 0x38, 0x39, 0x61];
  const png = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
  const arr = new Uint8Array(buffer);

  if (check(pdf, arr)) {
    return "PDF";
  } else if (check(zip, arr) || check(zipEA, arr) || check(zipSA, arr)) {
    return "ZIP";
  } else if (check(gif87a, arr) || check(gif89a, arr)) {
    return "GIF";
  } else if (check(png, arr)) {
    return "PNG";
  }
  return "UNKNOWN";
};

const check = (arr1, arr2) => {
  return arr1.map((e, i) => e === arr2[i]).every((e) => e);
};
