function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);

//------------------------------------------------------------------
// we can do this as below but it's not a good practie 

// function setMyUserName(username){
//     this.username = username
//     return username
// }

// function createMyUser(username, email, password){
//     this.username = setMyUserName(username)
//     this.email = email
//     this.password = password
// }

// const me = new createMyUser('me', 'me@gmail.com', '1234')
// const you = new createMyUser('you', 'you@gmail.com', '9876')

// console.log(me);
// console.log(you);

