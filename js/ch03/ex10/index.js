const emproyee = {
  name: "John",
  age: 50,
  city: "Ebina",
};

const properties = [];
const values = [];
for (const [name, value] of Object.entries(emproyee)) {
  properties.push(name);
  values.push(value);
}
console.log("=== properties ===");
console.log(properties.join("\n"));
console.log("=== values ===");
console.log(values.join("\n"));
