// const m = function (arg) {
//   console.log(arg[1]);
// };
// m("a", "b");

const m = (...args) => {
  console.log(args[1]);
};
m("a", "b");
