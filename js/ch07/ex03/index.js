export const sum = (arr) => {
  return arr?.reduce((a, b) => a + b, 0) || 0;
};

export const join = (arr, separator = ",") => {
  if (!arr) throw Error();
  return arr.length !== 0
    ? arr.reduce((a, b) => {
        const pre = (a || "") + "";
        const post = (b || "") + "";
        return pre + separator + post;
      })
    : "";
};

export const reverse = (arr) => {
  if (!arr) throw Error();
  const reverseArr = new Array(arr.length);
  return arr.reduce((a, b, i, o) => (reverseArr[o.length - i] = a), reverseArr);
};

export const every = (arr, isBelowThreshold) => {
  return arr.reduce((a, b) => a && isBelowThreshold(b), true);
};

export const some = (arr, isBelowThreshold) => {
  arr.reduce((a, b) => a || isBelowThreshold(b), false);
};
