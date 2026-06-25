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

// const aminul = {
//   firstName: 'aminul',
//   year: 2003,
//   calcAge: function () {
// Solution 1
//  const self = this;  self or that
// console.log(2026 - this.year);
// const isMillennial = function () {
//   console.log(self);
//   console.log(self.year >= 1981 && self.year <= 1996);
// };
// isMillennial();

//     const isMillennial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillennial();
//   },
//   greet: function () {
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// aminul.calcAge();

// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// var addArrow = (a, b) => {
//   console.log(a + b);
//   return a + b;
// };
// addArrow(2, 5, 8, 12);

// function calculate() {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }

// const result = calculate(1, 2, 3, 4, 5);
// console.log(result);

// Memory management : Primitives vs Objects (Reference Types)

// function greet() {
//   const message = 'Hello, World!';
// console.log(message);
// }

// greet.message = 'Hello, World!';
// greet.firstName = 'Aminul';

// console.log(greet.message); // Output: undefined
// console.log(greet.firstName); // Output: undefined
// console.log(greet.name);

// Object reference in Practice (Shallow vs. deep copies)

const aminul = {
  firstName: 'aminul',
  age: 23,
  family: ['Khadijah', 'Marjiya'],
};

// Shallow copy

const marji = { ...aminul };
// marji.family.push('adil');
// console.log('Before:', aminul);
// console.log('after:', marji);

// Deep copy/clone

// const aminulCopy = structuredClone(aminul);
// aminulCopy.family.push('adil');
// console.table('original:', aminul);
// console.table('clone:', aminulCopy);

// learned how javaScript heap memory get clean by garbage collector
