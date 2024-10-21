// Immediately Invoked Function Expressions (IIFE)

    // this are used for two resons
        // 1. If you want to excute function Immediately
        // 2. To avoid the pollution from global scope objects


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();    // semicolan is inportatnt if two IIFE are required

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('ganesh')

