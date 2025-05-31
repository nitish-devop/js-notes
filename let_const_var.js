// let vs const vs var


// lets discuss about var
/*
    var is used to declared variables in JavaScript.
    It is function-scoped, meaning that it is accessible within the function it is declared in.
    If declared outside of a function, it is globally scoped.
    Variables declared with var can be re-declared and updated.
    It is hoisted, meaning that it can be used before it is declared.
    However, it is not recommended to use var in modern JavaScript, as it can lead to confusion and bugs.
    Instead, it is recommended to use let or const for variable declarations.
*/
// console.log(x); // undefined
var x = 10;
var x = 30; // This will not throw an error, but it is not recommended to re-declare variables
// console.log(x); // 30
//console.log(x); // 30

// lets discuss about let
/*
    let is used to declare variables in JavaScript.
    It is block-scoped, meaning that it is only accessible within the block it is declared in.
    Variables declared with let can be updated, but not re-declared in the same scope.
    It is not hoisted, meaning that it cannot be used before it is declared.
    It is recommended to use let for variables that will be updated.
*/
// console.log(y); // ReferenceError: Cannot access 'y' before initialization
//let y = 20;
// console.log(y); // 20
// console.log(z); // ReferenceError: Cannot access 'z' before initialization
//let z = 30;
// console.log(z); // ReferenceError: Cannot access 'z' before initialization
//let z = 30; // This will throw an error because z is already declared
//console.log(z); // 30


// lets discuss about const
/*
    const is used to declare constants in JavaScript.
    It is block-scoped, meaning that it is only accessible within the block it is declared in.
    Variables declared with const cannot be updated or re-declared in the same scope.
    It is not hoisted, meaning that it cannot be used before it is declared.
    It is recommended to use const for variables that will not be updated.
*/
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// const a = 10;
// console.log(a); // 10
// a = 20; // This will throw an error because a is a constant



