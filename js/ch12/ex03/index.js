export function* counter() {
  let c = 0;
  while (true) {
    try {
      yield c++;
    } catch {
      c = 0;
    }
  }
}

const count = counter();
console.log(count.next().value);
console.log(count.next().value);
console.log(count.next().value);
console.log(count.throw().value);
console.log(count.next().value);
console.log(count.next().value);
