/* eslint-disable prettier/prettier */
//ctrl shift p
class persona {
  constructor(private name: string, private age: number) {}
  getPresentation() {
    return `My name is ${this.name} and I am ${this.age} years old`;
  }
}
const José: persona = new persona('José', 14);
console.log(José.getPresentation());
