const data = [
  { name: "Alice", class: "A", math: 10, chemistry: 30, geography: 20 },
  { name: "Bob", class: "A", math: 50, chemistry: 50, geography: 60 },
  { name: "Carol", class: "A", math: 70, chemistry: 55, geography: 30 },
  { name: "Dave", class: "B", math: 40, chemistry: 20, geography: 60 },
  { name: "Ellen", class: "B", math: 60, chemistry: 70, geography: 40 },
  { name: "Frank", class: "B", math: 90, chemistry: 70, geography: 80 },
  { name: "Isaac", class: "C", math: 70, chemistry: 40, geography: 50 },
  { name: "Justin", class: "C", math: 80, chemistry: 40, geography: 30 },
  { name: "Mallet", class: "C", math: 60, chemistry: 70, geography: 90 },
];
console.log("1. `math`の全員の合計点");
console.log(
  data.reduce((a, b) => {
    return a + b.math;
  }, 0)
);

console.log("2. クラスAの`chemistry`の平均点");
const dataOfA = data.filter((e) => e.class === "A");
console.log(dataOfA.reduce((a, b) => a + b.chemistry, 0) / dataOfA.length);

console.log("3. 3科目合計点のクラスC内での平均点");
const dataOfC = data.filter((e) => e.class === "C");
console.log(
  dataOfC.reduce((a, b) => a + b.math + b.chemistry + b.geography, 0) /
    dataOfC.length
);

console.log("4. 3科目合計点が最も高い人の`name`");
console.log(
  data.reduce((a, b) => {
    const totala = a.math + a.chemistry + a.geography;
    const totalb = b.math + b.chemistry + b.geography;
    return totala > totalb ? a : b;
  }).name
);

console.log("5. 全体の`geography`の標準偏差");
const ave = data.reduce((a, b) => a + b.geography, 0) / data.length;
console.log(
  Math.sqrt(
    data.reduce((a, b) => a + (b.geography - ave) ** 2, 0) / data.length
  )
);
