
// singleton
// Object.create

// object literals

// const mySym = Symbol('key1')

const myArr = [1,2,3,4]


const JsUser = {
    name: "Ganesh",
    "full name": "Ganesh Choudhary",
    mySym: Symbol('key2'),
    age: 18,
    location: "pune",
    email: "Ganesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

// console.log(JsUser)

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser.mySym)
// console.log(JsUser["myArr"])


// JsUser.email = "Ganesh@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "Ganesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser)

// JsUser.greeting();
// JsUser.greetingTwo();