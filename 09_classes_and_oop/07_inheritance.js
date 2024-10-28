class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
chai.addCourse()

const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai instanceof User);

const tea = new Teacher("tea", 'tea@teacher.com', '456')

console.log(tea === chai)