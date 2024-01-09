export function substring(str, indexStart, indexEnd) {
  if (!(str instanceof String) && typeof str !== "string")
    throw new Error("Error: invalid input");
  let start;
  let end;

  if (
    indexStart === undefined ||
    indexStart === null ||
    Number.isNaN(indexStart)
  ) {
    start = 0;
  } else {
    start = Math.min(Math.max(Math.floor(indexStart), 0), str.length);
  }

  if (indexEnd === undefined || indexEnd === null) {
    end = str.length;
  } else if (Number.isNaN(indexEnd)) {
    end = 0;
  } else {
    end = Math.min(Math.max(Math.floor(indexEnd), 0), str.length);
  }

  if (start > end) {
    let tmp = start;
    start = end;
    end = tmp;
  }

  let result = "";
  for (let i = start; i < end; i++) {
    result += str[i];
  }
  return result;
}

export function slice(str, indexStart, indexEnd) {
  if (!(str instanceof String) && typeof str !== "string")
    throw new Error("Error: invalid input");

  let start = indexStart;
  let end = indexEnd;
  if (start === undefined || start === null || isNaN(start)) {
    start = 0;
  } else {
    start = Math.floor(indexStart);
    start = Math.min(
      start >= 0 ? start : Math.max(str.length + start, 0),
      str.length
    );
  }

  if (end === undefined || end === null) {
    end = str.length;
  } else if (isNaN(end)) {
    end = 0;
  } else {
    end = Math.floor(indexEnd);
    end = Math.min(end >= 0 ? end : str.length + end, str.length);
  }

  if (start >= end) {
    return "";
  }
  let result = "";
  for (let i = start; i < end; i++) {
    result += str[i];
  }
  return result;
}

export function padStart(str, targetLength, padString) {
  if (!(str instanceof String) && typeof str !== "string")
    throw new Error("Error: invalid input");
  if (targetLength === undefined || targetLength <= str.length) {
    return str;
  }
  const pad = padString || " ";
  const repeatString = (targetLength - str.length) / pad.length;
  const repeatChar = (targetLength - str.length) % pad.length;
  return pad.repeat(repeatString) + slice(pad, 0, repeatChar) + str;
}

export function trim(str) {
  if (!(str instanceof String) && typeof str !== "string")
    throw new Error("Error: invalid input");
  return str.replace(/^\s+/, "").replace(/\s+$/, "");
}

// export function trim(str) {
// let newStr = "";
// let start;
// let end;
// for (let i = 0; i < str.length; i++) {
//   if (str[i] !== `\s` && start === undefined) start = i;
//   if (str[str.length - i] !== `\s` && end === undefined)
//     end = str.length - 1 - i;
// }
// console.log("start: " + start);
// console.log("end :" + end);
// if (start === undefined) return "";
// for (let i = start; i <= end; i++) {
//   newStr += str[i];
// }
//   return str.replace(/^\s+/, "").replace(/\s+$/, "");
// }

// console.log(trim("   Hello, World  "));
// console.log(slice("Hello, Worlf!", -100, undefined));
// console.log(padStart("abc", 10, "123"));
