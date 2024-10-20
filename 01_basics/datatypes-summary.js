//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];  // type is object
let myObj = {   // type is object
    name: "ganesh",
    age: 22,
}

const myFunction = function(){   // type is function but also refered as function object
    console.log("Hello world");
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//                  Table — typeof Operator Results
// __________________________________________________________________
// |Type of val	                    |Result                         |
// |--------------------------------|-------------------------------|
// | Undefined	                    |"undefined"                    |
// |--------------------------------|-------------------------------|
// | Null	                        |"object"                       |
// |--------------------------------|-------------------------------|
// | Boolean	                    |"boolean"                      |
// |--------------------------------|-------------------------------|
// | Number	                        |"number"                       |
// |--------------------------------|-------------------------------|
// | String	                        |"string"                       |
// |--------------------------------|-------------------------------|
// | Object (native and does        |                               |
// | not implement [[Call]])        |"object"                       |
// |--------------------------------|-------------------------------|
// | Object (native or host         |                               |
// | and does implement [[Call]])	|"function"                     |
// |--------------------------------|-------------------------------|
// | Object (host and does not      | Implementation-defined except | 
// | implement [[Call]])            | may not be "undefined",	    |
// |                                |"boolean", "number", or "string"|
// |________________________________|_______________________________|
