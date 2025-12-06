'use strict';

let fragment = new DocumentFragment();

console.log(fragment.__proto__ === DocumentFragment.prototype); //true
console.log(fragment.__proto__ === Object.prototype); //false
console.log(typeof fragment.__proto__); //object
console.log(fragment.__proto__.__proto__ === Node.prototype); //true
console.log(fragment.__proto__.__proto__.__proto__ === parent); //false
console.log(
  fragment.__proto__.__proto__.__proto__.__proto__.__proto__ ===
    Object.prototype
); //false
console.log(fragment.__proto__ === HTMLBodyElement); //false

console.log(fragment.__proto__.__proto__.__proto__.__proto__.__proto__); //null

console.log(Object.getPrototypeOf(fragment)); //DocumentFragment.prototype
console.log(Object.getPrototypeOf(fragment.__proto__)); //Node.prototype
console.log(Object.getPrototypeOf(fragment.__proto__.__proto__)); //InternalDOMObject
console.log(Object.getPrototypeOf(fragment.__proto__.__proto__.__proto__)); //EventTarget.prototype
console.log(
  Object.getPrototypeOf(fragment.__proto__.__proto__.__proto__.__proto__)
); //null

// NOTES: di DOM API tdk ada Object.prototype sebelum ke null
// browser menaruh EventTarget.prototype.__proto__ langsung ke null, bukan ke Object.prototype.
//DOM API bukan JavaScript murni. Browser bebas mengimplementasikan inheritance DOM tanpa harus mengikuti rantai Object.prototype.
