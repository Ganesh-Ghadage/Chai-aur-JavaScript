// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// Never compair two different datatypes as it give unpredictable behaviour

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);  // false
console.log(null == 0); // false
console.log(null >= 0); // true

/* 
    The reason for above behaviour is that in JS an equality check == and comparisons > < >= =< works differently
    Comparisons convert null to a number, treating  it as 0. 
    That's why line 15 null >= 0 gives true and line 13 null > 0 gives false
    conversion will not happen for equality check ==
*/

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// === this is strict check it will compare value along with datatype

// console.log("2" === 2);