const square = x => x*x;
console.log(square(9));

let user = {
  name: "Alex",
  sayHi: () => {
    console.log(`Hi, Im ${user.name}`);
  },
  sayHiAlt() {
    console.log(`Hi, Im ${this.name}`);
  }
}

user.sayHi()
