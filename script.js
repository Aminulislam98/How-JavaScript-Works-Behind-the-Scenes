'use strict';

// function calcAGe(birthYear) {
//   const age = 206 - birthYear;
//   console.log(lastName);
//   return age;
// }

// console.log(fistName);

// const fistName = 'Aminul';
// const lastName = 'islam';
// calcAGe(2003);

// Variable Environment: Hoisting and the TDZ
// Hoisting and TDZ in practice;

// Learning how "This" keyword works under the hood
// "THIS" is a special variable || key word

// console.log(this);
// const calcAge = function (birthYear) {
//   console.log(2026 - birthYear);
//   console.log(this);
// };
// calcAge(2003);

// const jonas = {
//   year: 2003,
//   calcAge: function () {
//     console.log(this);
//   },
// };
// jonas.calcAge();

// function calcAge(birthYear) {
//   console.log(2026 - birthYear);
//   console.log(this);
// }
// calcAge(2003);
// simple function has its own "this" keyword, which is undefined in strict mode if it called as a simple function, but if it is called as a method of an object, then "this" keyword will point to that object

// arrow function does not get its own "this" keyword, it uses the "this" keyword of its parent scope

// const user = {
//   firstName: 'aminul',
//   age: 23,
// };
// function getAge() {
//   console.log(this.age);
// }
// user.getAge = getAge;
// user.getAge();
// Regular function vs Arrow function

const aminul = {
  firstName: 'aminul',
  year: 2003,
  calcAge: function () {
    console.log(2026 - this.year);
  },
  greet: function () {
    console.log(`Hey ${this.firstName}`);
  },
};
aminul.calcAge();
aminul.greet();
