export class C {
  #x = 42;

  getX() {
    return this.#x;
  }
}

export class C2 {
  getX() {
    let x = 42;
    function f() {
      return x;
    }
    return f();
  }
}
