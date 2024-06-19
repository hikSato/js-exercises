export function* counter() {
  let c = 0;
  try {
    for (;;) {
      yield ++c;
    }
  } catch {
    c = 0;
    yield c;
  } finally {
    console.log("retrun");
    yield c;
  }
}

const count = counter();
console.log(count.next().value);
console.log(count.next().value);
console.log(count.throw().value);
console.log(count.next().value);
console.log(count.next().value);
