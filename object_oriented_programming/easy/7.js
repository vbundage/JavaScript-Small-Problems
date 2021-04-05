// What will the following code log?

class Something {
  constructor() {
    this.data = "Hello";
  }

  dupData() {
    return this.data + this.data;
  }

  static dupData() {
    return "ByeBye";
  }
}

let thing = new Something();
console.log(Something.dupData());
console.log(thing.dupData());

/*
Line 16 will log 'ByeBye' as we are calling the static method dupData defined
on the class.
Line 17 will log 'HelloHello' as we are calling the instance method dupData defined
on the prototype.
*/