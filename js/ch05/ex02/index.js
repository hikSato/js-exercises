export const escapeStr = (str) => {
  return Array.from(str)
    .map((e) => {
      if (e === "0") {
        return "\0";
      } else if (e === "b") {
        return "\b";
      } else if (e === "t") {
        return "\t";
      } else if (e === "n") {
        return "\n";
      } else if (e === "v") {
        return "\v";
      } else if (e === "f") {
        return "\f";
      } else if (e === "r") {
        return "\r";
      } else if (e === '"') {
        return '"';
      } else if (e === "'") {
        return "'";
      } else if (e === "\\") {
        return "\\";
      } else {
        return e;
      }
    })
    .join("");
};

export const escapeStr2 = (str) => {
  return Array.from(str)
    .map((e) => {
      switch (e) {
        case "0":
          return "\0";
        case "b":
          return "\b";
        case "t":
          return "\t";
        case "n":
          return "\n";
        case "v":
          return "\v";
        case "f":
          return "\f";
        case "r":
          return "\r";
        case '"':
          return '"';
        case "'":
          return "'";
        case "\\":
          return "\\";
        default:
          return e;
      }
    })
    .join("");
};
