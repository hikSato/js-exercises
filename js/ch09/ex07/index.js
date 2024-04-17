class Animal {
  eat() {}
}

class Dog extends Animal {
  constructor() {
    this.makeSound = new makeSound();
  }

  bite() {}

  makeSound() {
    this.soundMaker.makeSound();
  }
}

class Husky extends Dog {}

class Cat extends Animal {
  constructor() {
    this.makeSound = new makeSound();
  }

  scratch() {}

  makeSound() {
    this.soundMaker.makeSound();
  }
}

class Bird extends Animal {
  constructor() {
    this.makeSound = new makeSound();
  }

  fly() {}

  makeSound() {
    this.soundMaker.makeSound();
  }
}

class Fish extends Animal {
  swim() {}
}

class MakeSound {
  makeSound() {}
}
