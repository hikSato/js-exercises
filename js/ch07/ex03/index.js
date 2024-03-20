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
  return arr.reduce((a, b) => [b, ...a], []);
};

export const every = (arr, isBelowThreshold) => {
  return arr.reduce(
    (a, b, index, arr) => a && isBelowThreshold(b, index, arr),
    true
  );
};

export const some = (arr, isBelowThreshold) => {
  return arr.reduce(
    (a, b, index, arr) => a || isBelowThreshold(b, index, arr),
    false
  );
};
