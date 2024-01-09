// 問題 2.6 📄
export const fizzbuzz = () =>  Array(100).fill("").map((_, i) => (i + 1) % 15 === 0 ? "FizzBuzz" : (i + 1) % 5 === 0 ? "Buzz" : (i + 1) % 3 === 0 ? "Fizz" : i + 1 ).join("\n").concat("\n");

// export const fizzbuzz2 = () =>
//   Array(100)
//     .fill("")
//     .map((_, i) => {
//       if ((i + 1) % 15 === 0) {
//         return "FizzBuzz";
//       } else if ((i + 1) % 5 === 0) {
//         return "Buzz";
//       } else if ((i + 1) % 3 === 0) {
//         return "Fizz";
//       } else {
//         return i + 1;
//       }
//     })
//     .join("\n");
