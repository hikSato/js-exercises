export const sortJapanese = (arr) => {
  const colloator = new Intl.Collator("ja-jp").compare;
  return arr.sort(colloator);
};

export const toJapaneseDateString = (date) => {
  return Intl.DateTimeFormat("ja-jp-u-ca-japanese", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

// console.log(toJapaneseDateString(new Date("2024-05-04")));
// console.log(sortJapanese(["た", "さ", "か", "あ"]));
// console.log(
//   sortJapanese(["は", "た", "さ", "っ", "ぱ", "か", "あ", "ば", "つ"])
// );
