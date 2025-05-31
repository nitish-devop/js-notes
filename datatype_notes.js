// lets discuss about datatype 

// please note javascript use strict mode by default in modern browsers, so it is recommended to use 'use strict' at the beginning of your script to avoid any issues with undeclared variables.
'use strict';
// JavaScript has dynamic typing, meaning that variables can hold values of any type and can change types at runtime.
// There are two main categories of data types in JavaScript: primitive and non-primitive (or reference) data types.
// Primitive data types are immutable and are compared by value, while non-primitive data types are mutable and are compared by reference.


// Primitive data types in JavaScript
// 1. Number
//    - Represents both integer and floating-point numbers.
//    - Example: 42, 3.14, -7
//    - Special values: NaN (Not a Number), Infinity, -Infinity

let newNumber = new Number(42); // Creating a Number object
console.log(newNumber); // Output: [Number: 42]
console.log(typeof newNumber); // Output: object
console.log(typeof 42); // Output: number
console.log(typeof 3.14); // Output: number
console.log(typeof NaN); // Output: number (NaN is a special numeric value)
console.log(typeof Infinity); // Output: number
console.log(typeof -Infinity); // Output: number
//    - Number methods: toFixed(), toPrecision(), toString(), etc.
console.log((42).toFixed(2)); // Output: "42.00"
console.log((3.14159).toPrecision(3)); // Output: "3.14"
console.log((42).toString()); // Output: "42"
//    - Example of Number methods:
console.log((100).toExponential(2)); // Output: "1.00e+2"
console.log((0.1 + 0.2).toFixed(2)); // Output: "0.30" (due to floating-point precision issues)
//    - Note: JavaScript uses double-precision floating-point format for all numbers, which can lead to precision issues in some cases.
//    - Example of precision issue:
console.log(0.1 + 0.2); // Output: 0.30000000000000004 (not exactly 0.3 due to floating-point arithmetic)
//    - To avoid precision issues, you can use libraries like BigNumber.js or Decimal.js for precise arithmetic operations.
//    - Example of using BigNumber.js for precise arithmetic:
// const BigNumber = require('bignumber.js');
// const preciseSum = new BigNumber(0.1).plus(new BigNumber(0.2));
// console.log(preciseSum.toString()); // Output: "0.3" (exactly 0.3 without precision issues)
//    - Note: In JavaScript, numbers are represented using the IEEE 754 standard for double-precision floating-point arithmetic.
//    - Example of using BigInt for large integers:
// const bigIntValue = BigInt(9007199254740991); // Maximum safe integer in JavaScript
// console.log(bigIntValue); // Output: 9007199254740991n (BigInt representation)
//    - BigInt is a built-in object that provides a way to represent integers with arbitrary precision.
//    - Example of using BigInt for large integers:
const bigIntValue = BigInt(9007199254740991); // Maximum safe integer in JavaScript
console.log(bigIntValue); // Output: 9007199254740991n (BigInt representation)          



// 2. String 
//    - Represents a sequence of characters.
//    - Can be enclosed in single quotes (' '), double quotes (" "), or backticks (` `) for template literals.
//    - Example: 'Hello', "World", `Hello ${name}`
//    - Strings are immutable, meaning they cannot be changed after creation.
//    - Example:
let greeting = 'Hello, World!';
console.log(greeting); // Output: Hello, World!
//    - String methods: length, toUpperCase(), toLowerCase(), substring(), etc.
//    - Example of string methods:
console.log(greeting.length); // Output: 13
console.log(greeting.toUpperCase()); // Output: HELLO, WORLD!
console.log(greeting.substring(0, 5)); // Output: Hello
//    - Template literals allow for multi-line strings and string interpolation.
let name = 'John';
let age = 30;
let message = `My name is ${name} and I am ${age} years old.`;
console.log(message); // Output: My name is John and I am 30 years old.
//    - Example of template literals:
console.log(`The sum of 2 and 3 is ${2 + 3}.`); // Output: The sum of 2 and 3 is 5.


message.splice(0, 5, 'Jane'); // This will not change the original string as strings are immutable
message = message.split(' '); // Converting string to array for manipulation
message[0] = 'Jane'; // Changing the first element of the array
message = message.join(' '); // Joining the array back to a string  
let fullName = message.replace('John', 'Jane'); // Using replace to change 'John' to 'Jane'     

console.log(fullName); // Output: My name is Jane and I am 30 years old.  



// 3. Boolean
//    - Represents a logical entity and can have two values: true or false.
let isTrue = true;
let isFalse = false;
console.log(isTrue); // Output: true
console.log(isFalse); // Output: false
//    - Used in conditional statements and logical operations.
if (isTrue) {
    console.log('This is true!'); // Output: This is true!
}
//    - Boolean methods: toString(), valueOf(), etc.
console.log(isTrue.toString()); // Output: "true"
console.log(isFalse.valueOf()); // Output: false
//    - Example of using Boolean in a conditional statement:

if (isTrue && !isFalse) {
    console.log('Both conditions are true!'); // Output: Both conditions are true!
}
//    - Example of using Boolean in a conditional statement:
if (isTrue || isFalse) {
    console.log('At least one condition is true!'); // Output: At least one condition is true!
}
//    - Boolean values can also be derived from other data types using type coercion.
let truthyValue = 'Hello'; // Non-empty string is truthy
let falsyValue = ''; // Empty string is falsy
console.log(Boolean(truthyValue)); // Output: true
console.log(Boolean(falsyValue)); // Output: false
//    - Example of type coercion to Boolean:
console.log(Boolean(42)); // Output: true (non-zero number is truthy)
console.log(Boolean(0)); // Output: false (zero is falsy)
//    - Note: In JavaScript, all values are truthy except for the following falsy values:
//    - Falsy values: false, 0, '', null, undefined, NaN
//    - Example of falsy values:
console.log(Boolean(false)); // Output: false
console.log(Boolean(0)); // Output: false
console.log(Boolean('')); // Output: false
console.log(Boolean(null)); // Output: false
console.log(Boolean(undefined)); // Output: false
console.log(Boolean(NaN)); // Output: false
//    - Example of truthy values:
console.log(Boolean(true)); // Output: true
console.log(Boolean(1)); // Output: true (non-zero number is truthy)
// console.log(Boolean('Hello')); // Output: true (non-empty string is truthy)
// console.log(Boolean({})); // Output: true (empty object is truthy)
// console.log(Boolean([])); // Output: true (empty array is truthy)
// console.log(Boolean(function() {})); // Output: true (function is truthy)
//    - Note: In JavaScript, the Boolean object is a wrapper around the primitive boolean value.
//    - Example of using the Boolean object:
let booleanObject = new Boolean(true); // Creating a Boolean object     


// 4. Undefined
//    - Represents a variable that has been declared but not assigned a value.
let unassignedVariable;
console.log(unassignedVariable); // Output: undefined
//    - Used to indicate the absence of a value or an uninitialized variable.
//    - Example of undefined:
let anotherVariable;
console.log(anotherVariable); // Output: undefined
//    - Undefined is also the default return value of functions that do not explicitly return a value.
function noReturnFunction() {
    // This function does not return anything
}
console.log(noReturnFunction()); // Output: undefined
//    - Example of a function returning undefined:
function returnUndefined() {
    return; // No value returned, so it defaults to undefined
}
console.log(returnUndefined()); // Output: undefined
//    - Note: In JavaScript, undefined is a primitive value and is not the same as null.
//    - Example of undefined vs null:
let nullValue = null; // Explicitly set to null
console.log(nullValue); // Output: null
console.log(typeof nullValue); // Output: object (this is a historical bug in JavaScript)
console.log(typeof unassignedVariable); // Output: undefined
//    - Example of undefined vs null:
console.log(unassignedVariable === null); // Output: false (undefined is not equal to null)
console.log(nullValue === undefined); // Output: false (null is not equal to undefined)
//    - Example of checking for undefined:
if (unassignedVariable === undefined) {
    console.log('The variable is undefined!'); // Output: The variable is undefined!
}
//    - Example of checking for null:
if (nullValue === null) {
    console.log('The variable is null!'); // Output: The variable is null!
}


// 5. Null
//    - Represents the intentional absence of any object value.
let nullValue = null;
console.log(nullValue); // Output: null
//    - Used to indicate that a variable should have no value or object.
//    - Example of null:
let anotherNullValue = null; // Explicitly set to null
console.log(anotherNullValue); // Output: null
//    - Null is often used to reset or clear a variable that previously held an object.
let objectValue = { name: 'John' };
objectValue = null; // Resetting the variable to null
console.log(objectValue); // Output: null
//    - Example of resetting an object variable to null:
let user =
    { name: 'Alice', age: 25 };
user = null; // Resetting the user object to null
console.log(user); // Output: null
//    - Note: In JavaScript, null is a primitive value and is not the same as undefined.
//    - Example of null vs undefined:

    // 6. Symbol (ES6)
//    - Represents a unique and immutable value, often used as object property keys.
let uniqueSymbol = Symbol('description');
console.log(uniqueSymbol); // Output: Symbol(description)
console.log(typeof uniqueSymbol); // Output: symbol
//    - Symbols are often used to create private properties or methods in objects.
let myObject = {
    [uniqueSymbol]: 'This is a unique value'
};
console.log(myObject[uniqueSymbol]); // Output: This is a unique value
//    - Example of using Symbol as a property key:
let anotherSymbol = Symbol('another description');
myObject[anotherSymbol] = 'Another unique value';
console.log(myObject[anotherSymbol]); // Output: Another unique value
//    - Symbols are not enumerable in for...in loops or Object.keys(), making them useful for creating non-enumerable properties.
//    - Example of using Symbol to create non-enumerable properties:
let nonEnumerableSymbol = Symbol('non-enumerable');
myObject[nonEnumerableSymbol] = 'This property is non-enumerable';
console.log(Object.keys(myObject)); // Output: [] (non-enumerable properties are not included)
//    - Example of using Symbol to create non-enumerable properties:
console.log(Object.getOwnPropertySymbols(myObject)); // Output: [ Symbol(description), Symbol(another description), Symbol(non-enumerable) ]
//    - Symbols can be used to create unique identifiers for objects, preventing naming conflicts.
//    - Example of using Symbol to create unique identifiers:
let idSymbol = Symbol('id');
let userObject = {
    [idSymbol]: 12345,
    name: 'Bob',
    age: 30

};
console.log(userObject[idSymbol]); // Output: 12345

// Application of Symbol in real-world scenarios:
//    - Symbols are useful in scenarios where you need to create unique property keys that won't conflict with other properties.
//    - Example of using Symbol in a library to create unique property keys:
const library = {
    [Symbol('libraryName')]: 'My Library',
    [Symbol('version')]: '1.0.0'
};
console.log(library[Symbol.for('libraryName')]); // Output: undefined (symbols are not shared across different contexts)
//    - Example of using Symbol in a library to create unique property keys:
//    - Symbols can also be used to create unique event names in event-driven architectures, preventing naming conflicts.
//    - Example of using Symbol in an event-driven architecture:
const eventEmitter = {
    [Symbol('eventName')]: 'dataReceived',
    emit(event, data) {
        if (event === this[Symbol('eventName')]) {
            console.log(`Event: ${event}, Data: ${data}`);
        }
    }
};
eventEmitter.emit(eventEmitter[Symbol('eventName')], { id: 1, message: 'Hello, World!' }); // Output: Event: dataReceived, Data: [object Object]
//    - Symbols can also be used to create unique keys for caching or memoization in performance-critical applications.
//    - Example of using Symbol for caching:
const cache = {
    [Symbol('cacheKey')]: 'cachedValue'
};
console.log(cache[Symbol('cacheKey')]); // Output: undefined (symbols are not shared across different contexts)
//    - Symbols can also be used to create unique keys for caching or memoization in performance-critical applications.


// 7. BigInt (ES11)     
//    - Represents integers with arbitrary precision, useful for large numbers beyond the safe integer limit (2^53 - 1).
let bigIntValue = BigInt(9007199254740991); // Maximum safe integer in JavaScript
console.log(bigIntValue); // Output: 9007199254740991n (BigInt representation)
console.log(typeof bigIntValue); // Output: bigint
//    - BigInt can be created using the BigInt() function or by appending 'n' to an integer literal.
let anotherBigInt = 1234567890123456789012345678901234567890n; // Using 'n' to create a BigInt
console.log(anotherBigInt); // Output: 1234567890123456789012345678901234567890n
console.log(typeof anotherBigInt); // Output: bigint
//    - BigInt can be used in arithmetic operations, but it cannot be mixed with regular numbers.
let sum = bigIntValue + BigInt(1); // Adding a BigInt and another BigInt        
console.log(sum); // Output: 9007199254740992n
//    - Example of BigInt arithmetic:
let product = bigIntValue * BigInt(2); // Multiplying a BigInt by another BigInt
console.log(product); // Output: 18014398509481982n
//    - Note: BigInt cannot be used with regular numbers directly, so you need to convert them to BigInt first.
let regularNumber = 42;
let bigIntFromNumber = BigInt(regularNumber); // Converting regular number to BigInt
console.log(bigIntFromNumber); // Output: 42n
//    - Example of converting a regular number to BigInt:
let anotherRegularNumber = 100;
let bigIntFromAnotherNumber = BigInt(anotherRegularNumber); // Converting another regular number to BigInt
console.log(bigIntFromAnotherNumber); // Output: 100n
//    - BigInt can be used for precise arithmetic operations on large integers without losing precision.
//    - Example of using BigInt for precise arithmetic:
let preciseSum = bigIntValue + BigInt(1000000000000000); // Adding a large number to a BigInt
console.log(preciseSum); // Output: 9007199254741991n
//    - Example of using BigInt for precise arithmetic:
let preciseDifference = bigIntValue - BigInt(5000000000000000); // Subtracting a large number from a BigInt
console.log(preciseDifference); // Output: 9007199254735991n
//    - BigInt can also be used in comparisons, but it cannot be mixed with regular numbers directly.
let isBigIntEqual = bigIntValue === BigInt(9007199254740991); // Comparing BigInt with another BigInt
console.log(isBigIntEqual); // Output: true
//    - Example of comparing BigInt with another BigInt:
let isBigIntGreater = bigIntValue > BigInt(9000000000000000); // Checking if BigInt is greater than another BigInt
console.log(isBigIntGreater); // Output: true
//    - BigInt can be used in loops and conditional statements just like regular numbers.
//    - Example of using BigInt in a loop:
for (let i = BigInt(0); i < bigIntValue; i++) {
    if (i % BigInt(1000000000000000) === BigInt(0)) {
        console.log(`Current BigInt value: ${i}`); // Output: Current BigInt value: 0, 1000000000000000, 2000000000000000, ...
    }
}

// Application of BigInt in real-world scenarios:
//    - BigInt is useful in scenarios where you need to work with large integers, such as cryptography, financial calculations, or scientific computations.
//    - Example of using BigInt in cryptography:
const crypto = require('crypto');
const largePrime = BigInt('115792089237316195423570985008687907853269984665640564039457584007913129639936'); // A large prime number
console.log(largePrime); // Output: 115792089237316195423570985008687907853269984665640564039457584007913129639936n
//    - Example of using BigInt in financial calculations:
const interestRate = BigInt(5); // 5% interest rate
const principal = BigInt(1000000); // Principal amount in cents (1 million cents = $10,000)
const interest = (principal * interestRate) / BigInt(100); // Calculating interest in cents
console.log(interest); // Output: 50000n (interest in cents, which is $500)
//    - Example of using BigInt in scientific computations:
const speedOfLight = BigInt(299792458); // Speed of light in meters per second
console.log(speedOfLight); // Output: 299792458n (speed of light in meters per second)
//    - BigInt can also be used in scenarios where you need to handle large integers without losing precision, such as in data analysis or simulations.
//    - Example of using BigInt in data analysis:



//Non primitive data types in JavaScript

// 1. Object
//    - Represents a collection of key-value pairs, where keys are strings (or Symbols) and values can be of any data type.
let myObject = {
    name: 'Alice',
    age: 25,
    isStudent: true,
    hobbies: ['reading', 'traveling'],
    address: {
        city: 'Wonderland',
        country: 'Fantasy'
    }
};
console.log(myObject); // Output: { name: 'Alice', age: 25, isStudent: true, hobbies: [ 'reading', 'traveling' ], address: { city: 'Wonderland', country: 'Fantasy' } }
//    - Objects can be created using object literals, constructors, or the Object.create() method.
//    - Example of creating an object using object literal syntax:
let anotherObject = {
    title: 'JavaScript Guide',
}
//    - Example of creating an object using the Object constructor:
let yetAnotherObject = new Object();
//    - Example of creating an object using the Object.create() method:
let prototypeObject = {
    greet: function() {
        console.log('Hello!');
    }
};
let newObject = Object.create(prototypeObject); // Creating a new object with prototypeObject as its prototype
console.log(newObject); // Output: {}
//    - Example of creating an object with prototypeObject as its prototype:
newObject.greet(); // Output: Hello! (inherited method from prototypeObject)
//    - Objects can have properties and methods, which can be accessed using dot notation or bracket notation.
//    - Example of accessing object properties using dot notation:
console.log(myObject.name); // Output: Alice
console.log(myObject.age); // Output: 25
//    - Example of accessing object properties using bracket notation:
console.log(myObject['isStudent']); // Output: true
console.log(myObject['hobbies']); // Output: [ 'reading', 'traveling' ]
//    - Example of accessing nested object properties:
console.log(myObject.address.city); // Output: Wonderland
console.log(myObject.address['country']); // Output: Fantasy
//    - Objects can also have methods, which are functions associated with the object.
//    - Example of defining a method in an object:      
let person = {
    name: 'Bob',
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};
//    - Example of defining a method in an object:
person.greet(); // Output: Hello, my name is Bob.
//    - Objects can also have getter and setter methods for properties.
//    - Example of using getter and setter methods in an object:
let user = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
};
console.log(user.fullName); // Output: John Doe
user.fullName = 'Jane Smith'; // Using setter to change full name
console.log(user.firstName); // Output: Jane
console.log(user.lastName); // Output: Smith
//    - Example of using getter and setter methods in an object:
//    - Objects can also have computed properties, which allow you to define property names dynamically.
//    - Example of using computed properties in an object:
let dynamicKey = 'age';
let dynamicObject = {
    name: 'Charlie',
    [dynamicKey]: 30 // Using computed property name
};
console.log(dynamicObject); // Output: { name: 'Charlie', age: 30 }
//    - Example of using computed properties in an object:
//    - Objects can also be used to create classes and prototypes in JavaScript.
//    - Example of using objects to create a class-like structure:
function Person(name, age) {
    this.name = name;
    this.age = age;
}       
// methods can be added to the prototype of the constructor function
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};
//    - Example of using objects to create a class-like structure:
let person1 = new Person('David', 28);
person1.greet(); // Output: Hello, my name is David and I am 28 years old.
//    - Example of using objects to create a class-like structure:
// manipulating objects
//    - Objects can be manipulated using various methods such as Object.keys(), Object.values(), and Object.entries().
//    - Example of using Object.keys() to get an array of property names:
console.log(Object.keys(myObject)); // Output: [ 'name', 'age', 'isStudent', 'hobbies', 'address' ]
//    - Example of using Object.values() to get an array of property values:        
console.log(Object.values(myObject)); // Output: [ 'Alice', 25, true, [ 'reading', 'traveling' ], { city: 'Wonderland', country: 'Fantasy' } ]
//    - Example of using Object.entries() to get an array of key-value pairs:
console.log(Object.entries(myObject)); // Output: [ [ 'name', 'Alice' ], [ 'age', 25 ], [ 'isStudent', true ], [ 'hobbies', [ 'reading', 'traveling' ] ], [ 'address', { city: 'Wonderland', country: 'Fantasy' } ] ]
//    - Example of using Object.entries() to get an array of key-value pairs:
//    - Objects can also be used to create maps, which are collections of key-value pairs with unique keys.
//    - Example of using an object as a map:
let myMap = {
    'key1': 'value1',
    'key2': 'value2',
    'key3': 'value3'
};
//    - Example of using an object as a map:
//    - Objects can also be used to create sets, which are collections of unique values.
//    - Example of using an object as a set:
let mySet = {
    'value1': true,
    'value2': true,
    'value3': true
};
//    - Example of using an object as a set:
//    - Objects can also be used to create namespaces, which are used to group related functionality together.
//    - Example of using an object as a namespace:
let myNamespace = {
    utils: {
        add: function(a, b) {
            return a + b;
        },
        subtract: function(a, b) {
            return a - b;
        }
    },
    constants: {
        PI: 3.14,
        E: 2.71
    }
};
// iterate objects
//    - Example of using an object as a namespace:
//    - Objects can be iterated using for...in loops, Object.keys(), Object.values(), and Object.entries().
//    - Example of iterating an object using for...in loop:
for (let key in myObject) {
    if (myObject.hasOwnProperty(key)) {
        console.log(`${key}: ${myObject[key]}`); // Output: name: Alice, age: 25, isStudent: true, hobbies: reading,traveling, address: [object Object]
    }
}
//    - Example of iterating an object using for...in loop:
//    - Example of iterating an object using Object.keys():
Object.keys(myObject).forEach(key => {
    console.log(`${key}: ${myObject[key]}`); // Output: name: Alice, age: 25, isStudent: true, hobbies: reading,traveling, address: [object Object]
});
//    - Example of iterating an object using Object.keys():         
//    - Example of iterating an object using Object.values():
Object.values(myObject).forEach(value => {
    console.log(value); // Output: Alice, 25, true, [ 'reading', 'traveling' ], { city: 'Wonderland', country: 'Fantasy' }
});
//    - Example of iterating an object using Object.values():
//    - Example of iterating an object using Object.entries():
Object.entries(myObject).forEach(([key, value]) => {
    console.log(`${key}: ${value}`); // Output: name: Alice, age: 25, isStudent: true, hobbies: reading,traveling, address: [object Object]
});

// operations on objects    
//    - Objects can be manipulated using various methods such as Object.assign(), Object.freeze(), and Object.seal().
//    - Example of using Object.assign() to merge objects:
let object1 = { a: 1, b: 2 };
let object2 = { b: 3, c: 4 };
let mergedObject = Object.assign({}, object1, object2); // Merging object1 and object2
console.log(mergedObject); // Output: { a: 1, b: 3, c: 4 } (object2's value for 'b' overwrites object1's value)
//    - Example of using Object.assign() to merge objects:
//    - Example of using Object.freeze() to make an object immutable:
let frozenObject = Object.freeze({ x: 10, y: 20 });
// console.log(frozenObject); // Output: { x: 10, y: 20 }
// frozenObject.x = 30; // This will not change the value as the object is frozen
// console.log(frozenObject); // Output: { x: 10, y: 20 } (value remains unchanged)
//    - Example of using Object.freeze() to make an object immutable:
//    - Example of using Object.seal() to prevent adding or removing properties from an object:
let sealedObject = Object.seal({ a: 1, b: 2 });
// console.log(sealedObject); // Output: { a: 1, b: 2 }
// sealedObject.c = 3; // This will not add a new property as the object is sealed
// console.log(sealedObject); // Output: { a: 1, b: 2 } (property 'c' is not added)
//    - Example of using Object.seal() to prevent adding or removing properties from an object:
//    - Example of using Object.seal() to prevent adding or removing properties from an object:


// 2. Array
//    - Represents an ordered collection of values, which can be of any data type.
let myArray = [1, 'two', true, { name: 'Alice' }, [3, 4]];
console.log(myArray); // Output: [ 1, 'two', true, { name: 'Alice' }, [ 3, 4 ] ]
//    - Arrays can be created using array literals or the Array constructor.
let anotherArray = new Array(5, 6, 7); // Creating an array using the Array constructor
console.log(anotherArray); // Output: [ 5, 6, 7 ]
//    - Example of creating an array using array literal syntax:
let yetAnotherArray = [8, 9, 10]; // Creating an array using array literal syntax
console.log(yetAnotherArray); // Output: [ 8, 9, 10 ]
//    - Example of creating an array using array literal syntax:
//    - Arrays can hold elements of different data types, including other arrays and objects.
let mixedArray = [1, 'two', true, { name: 'Bob' }, [11, 12]];
console.log(mixedArray); // Output: [ 1, 'two', true, { name: 'Bob' }, [ 11, 12 ] ]
//    - Example of creating an array with mixed data types:
let anotherMixedArray = [42, 'hello', false, { age: 30 }, [13, 14]];
console.log(anotherMixedArray); // Output: [ 42, 'hello', false, { age: 30 }, [ 13, 14 ] ]
//    - Arrays can be manipulated using various methods such as push(), pop(), shift(), unshift(), splice(), slice(), etc.
//    - Example of using push() to add elements to the end of an array:
myArray.push('five'); // Adding 'five' to the end of myArray
console.log(myArray); // Output: [ 1, 'two', true, { name: 'Alice' }, [ 3, 4 ], 'five' ]
//    - Example of using push() to add elements to the end of an array:
//    - Example of using pop() to remove the last element from an array:
myArray.pop(); // Removing the last element from myArray
console.log(myArray); // Output: [ 1, 'two', true, { name: 'Alice' }, [ 3, 4 ] ]
//    - Example of using pop() to remove the last element from an array:
//    - Example of using shift() to remove the first element from an array:
myArray.shift(); // Removing the first element from myArray
console.log(myArray); // Output: [ 'two', true, { name: 'Alice' }, [ 3, 4 ] ]
//    - Example of using shift() to remove the first element from an array:
myArray.unshift(0); // Adding 0 to the beginning of myArray

console.log(myArray); // Output: [ 0, 'two', true, { name: 'Alice' }, [ 3, 4 ] ]
//    - Example of using unshift() to add an element to the beginning of an array:
myArray.splice(1, 2, 'three', 'four'); // Replacing two elements starting from index 1 with 'three' and 'four'
console.log(myArray); // Output: [ 0, 'three', 'four', { name: 'Alice' }, [ 3, 4 ] ]
//    - Example of using splice() to replace elements in an array:
//    - Example of using slice() to create a shallow copy of a portion of an array:
let slicedArray = myArray.slice(1, 3); // Creating a shallow copy of elements from index 1 to 3 (exclusive)
console.log(slicedArray); // Output: [ 'three', 'four' ]
//    - Example of using slice() to create a shallow copy of a portion of an array:
//    - Example of using slice() to create a shallow copy of a portion of an array:
let anotherSlicedArray = myArray.slice(2); // Creating a shallow copy of elements from index 2 to the end
console.log(anotherSlicedArray); // Output: [ 'four', { name: 'Alice' }, [ 3, 4 ] ]
//    - Example of using slice() to create a shallow copy of a portion of an array:
//    - Arrays can also be iterated using for loops, forEach(), map(), filter(), reduce(), etc.
//    - Example of iterating an array using for loop:
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]); // Output: 0, 'three', 'four', { name: 'Alice' }, [ 3, 4 ]
}
//    - Example of iterating an array using for loop:
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]); // Output: 0, 'three', 'four', { name: 'Alice' }, [ 3, 4 ]
}
//    - Example of iterating an array using forEach():
myArray.forEach((element, index) => {
    console.log(`Element at index ${index}: ${element}`); // Output: Element at index 0: 0, Element at index 1: three, Element at index 2: four, Element at index 3: [object Object], Element at index 4: 3,4
});
    
//    - Example of iterating an array using map():
let mappedArray = myArray.map((element) => {
    return typeof element === 'object' ? JSON.stringify(element) : element; // Converting objects to strings for display
});
console.log(mappedArray); // Output: [ '0', 'three', 'four', '{"name":"Alice"}', '[3,4]' ]
//    - Example of iterating an array using map():
//    - Example of iterating an array using filter():
let filteredArray = myArray.filter((element) => {
    return typeof element === 'string'; // Filtering only string elements
});
console.log(filteredArray); // Output: [ 'three', 'four' ]
//    - Example of iterating an array using filter():
let reducedValue = myArray.reduce((accumulator, currentValue) => {
    return accumulator + (typeof currentValue === 'number' ? currentValue : 0); // Summing only numeric values
}, 0);
console.log(reducedValue); // Output: 0 (since there are no numeric values in myArray)
/
// application of arrays in real-world scenarios:
//    - Arrays are commonly used to store lists of items, such as user data, product inventories, or collections of objects.
//    - Example of using arrays to store user data:
let users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];          

console.log(users); // Output: [ { name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 } ]
//    - Example of using arrays to store user data:
//    - Arrays can also be used to store collections of objects, such as products in an e-commerce application.
let products = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Smartphone', price: 500 },
    { id: 3, name: 'Tablet', price: 300 }
];
console.log(products); // Output: [ { id: 1, name: 'Laptop', price: 1000 }, { id: 2, name: 'Smartphone', price: 500 }, { id: 3, name: 'Tablet', price: 300 } ]

// array vs object
//    - Arrays are ordered collections of values, while objects are unordered collections of key-value pairs.
//    - Arrays are typically used for lists of items, while objects are used for structured data with named properties.
//    - Arrays have a length property and methods for manipulating elements, while objects have properties and methods for accessing and modifying key-value pairs.
//    - Arrays can be iterated using for loops, forEach(), map(), filter(), reduce(), etc., while objects can be iterated using for...in loops, Object.keys(), Object.values(), and Object.entries().       

//    - Arrays can be used to store homogeneous data (same type of elements), while objects can store heterogeneous data (different types of values).
//    - Arrays are typically used for ordered collections, while objects are used for structured data with named properties.
//    - Arrays can be used to store lists of items, while objects can be used to store structured data with named properties.
//   

// 3. Function
//    - Represents a reusable block of code that can be executed when called.
function greet(name) {
    console.log(`Hello, ${name}!`);
}
//    - Example of defining a function:
greet('Alice'); // Output: Hello, Alice!
//    - Functions can take parameters and return values.
function add(a, b) {
    return a + b;
}
//    - Example of defining a function with parameters and return value:
let sum = add(5, 10);   
console.log(sum); // Output: 15
//    - Functions can also be defined using function expressions or arrow functions.
let multiply = function(a, b) {
    return a * b;
};
//    - Example of defining a function using function expression:
let product = multiply(3, 4);
console.log(product); // Output: 12
//    - Example of defining a function using function expression:
let divide = (a, b) => {
    return a / b;
};
//    - Example of defining a function using arrow function:
let quotient = divide(20, 5);
console.log(quotient); // Output: 4
//    - Example of defining a function using arrow function:
//    - Functions can also be used as first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.
let square = function(x) {
    return x * x;
};
//    - Example of using a function as a first-class citizen:
let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(square); // Using the square function to square each element in the array
console.log(squaredNumbers); // Output: [ 1, 4, 9, 16, 25 ]
//    - Example of using a function as a first-class citizen:
let filterEvenNumbers = function(arr) {
    return arr.filter(num => num % 2 === 0); // Filtering even numbers from the array
};
let evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers); // Output: [ 2, 4 ]
//    - Example of using a function as a first-class citizen:
let sumArray = function(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0); // Summing all elements in the array
};          
let total = sumArray(numbers);
console.log(total); // Output: 15
//    - Example of using a function as a first-class citizen:
//    - Functions can also be used as methods of objects, allowing for encapsulation and organization of related functionality.     
let calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return a / b;
    }
};
//    - Example of using functions as methods of an object:
let resultAdd = calculator.add(10, 5);
console.log(resultAdd); // Output: 15
let resultSubtract = calculator.subtract(10, 5);
console.log(resultSubtract); // Output: 5
let resultMultiply = calculator.multiply(10, 5);
console.log(resultMultiply); // Output: 50      
let resultDivide = calculator.divide(10, 5);
console.log(resultDivide); // Output: 2
//    - Example of using functions as methods of an object:
//    - Functions can also be used as constructors to create objects with shared properties and methods.
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    };
}
//    - Example of using functions as constructors to create objects:
let person1 = new Person('John', 30);
person1.greet(); // Output: Hello, my name is John and I am 30 years old.
let person2 = new Person('Jane', 25);
person2.greet(); // Output: Hello, my name is Jane and I am 25 years old.
//    - Example of using functions as constructors to create objects:
//    - Functions can also be used to create closures, which allow for encapsulation of variables and functions.
function createCounter() {
    let count = 0; // Private variable
    return {
        increment: function() {
            count++;
            console.log(`Count: ${count}`);
        },
        decrement: function() {
            count--;
            console.log(`Count: ${count}`);
        },
        getCount: function() {
            return count;
        }
    };
}
//    - Example of using functions to create closures:
let counter = createCounter();
counter.increment(); // Output: Count: 1
counter.increment(); // Output: Count: 2
counter.decrement(); // Output: Count: 1
console.log(`Current Count: ${counter.getCount()}`); // Output: Current Count: 1        
           



