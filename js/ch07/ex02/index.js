// function fizzbuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     if (i % 15 === 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 === 0) {
//       console.log("Fizz");
//     } else if (i % 5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// function sumOfSquaredDifference(f, g) {
//   let result = 0;
//   for (let i = 0; i < f.length; i++) {
//     result += (f[i] - g[i]) ** 2;
//   }
//   return result;
// }

// function sumOfEvensIsLargerThan42(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       continue;
//     }
//     sum += array[i];
//     if (sum >= 42) {
//       return true;
//     }
//   }
//   return false;
// }

function fizzbuzz(n) {
  const results = Array(n)
    .fill("")
    .map((_, i) =>
      (i + 1) % 15 === 0
        ? "FizzBuzz"
        : (i + 1) % 5 === 0
        ? "Buzz"
        : (i + 1) % 3 === 0
        ? "Fizz"
        : i + 1
    )
    .join("\n")
    .concat("\n");
  console.log(results);
}
fizzbuzz(100);

function sumOfSquaredDifference(f, g) {
  let result = 0;
  f.forEach((_, i) => {
    result += (f[i] - g[i]) ** 2;
  });
  return result;
}
console.log(sumOfSquaredDifference([5, 4, 3, 2, 1], [1, 2, 3, 4, 5]));

function sumOfEvensIsLargerThan42(array) {
  return (
    array.reduce((a, b) => {
      return b % 2 !== 0 || a >= 42 ? a : a + b;
    }, 0) >= 42
  );
}
