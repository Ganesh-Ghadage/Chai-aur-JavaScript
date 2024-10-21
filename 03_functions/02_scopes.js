//var c = 300
let a = 300
if (true) {
    // let a = 10
    let aa = a
    const b = 20
    // console.log("INNER:1 ", aa);
    aa = 2
    // console.log("INNER:2 ", aa);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "ganesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()

}

// one()

if (true) {
    const username = "ganesh"
    if (username === "ganesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}
