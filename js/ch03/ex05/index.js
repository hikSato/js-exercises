export const lfToCrlf = (str) => {
  if (!(str instanceof String) && typeof str !== "string")
    throw new Error("Error: invalid input");
  return str.replace(/\n/g, "\r\n");
};

export const crlfToLf = (str) => {
  if (!(str instanceof String) && typeof str !== "string")
    throw new Error("Error: invalid input");
  return str.replace(/\r\n/g, "\n");
};
