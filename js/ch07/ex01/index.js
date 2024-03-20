// 行列の加算
export const sum = (matrix1, matrix2) => {
  if (
    matrix1.length !== matrix2.length ||
    matrix1[0].length !== matrix2[0].length
  ) {
    throw new Error("invalid length");
  }
  const result = [];
  for (let i = 0; i < matrix1.length; i++) {
    const row = [];
    for (let j = 0; j < matrix1[i].length; j++) {
      row.push(matrix1[i][j] + matrix2[i][j]);
    }
    result.push(row);
  }
  return result;
};

// 行列の乗算
export const multiple = (matrix1, matrix2) => {
  if (matrix1[0].length !== matrix2.length) {
    throw new Error("invalid length");
  }

  const result = [];
  for (let i = 0; i < matrix1.length; i++) {
    const row = [];
    for (let j = 0; j < matrix2[i].length; j++) {
      let sum = 0;
      for (let k = 0; k < matrix1[i].length; k++) {
        sum += matrix1[i][k] * matrix2[k][j];
      }
      row.push(sum);
    }
    result.push(row);
  }
  return result;
};
