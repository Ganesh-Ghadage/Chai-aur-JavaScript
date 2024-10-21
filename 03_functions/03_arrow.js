const user = {
    username: "ganesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "ganesh"
//     console.log(this); //this object
//     console.log(this.username); //undefined
// }

// chai()

// const chai = function () {
//     let username = "ganesh"
//     console.log(this); //this object
//     console.log(this.username);  //undefined
// }

const chai =  () => {
    let username = "ganesh"
    console.log(this); // empty object
    console.log(this.username);  //undefined
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "ganesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()