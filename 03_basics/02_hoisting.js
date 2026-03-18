// function addOne(num){
//     return num+1;
// }
// console.log(addOne(4))

// const addTwo = function(num){
//     return num+2;
// }
// console.log(addTwo(4));

//.....hoisting.........

// console.log(addOne(4)); //hoisting is possible
function addOne(num){
    return num+1;
}


// console.log(addTwo(4));  //Cannot access 'addTwo' before initialization
const addTwo = function(num){//hoisting is not allowed in initilization(expressed function)
    return num+2;
}

const user = {
    name:"kesh",
    id:"sds12",
    welcomeMessage: function(){
        console.log(`welcome ${this.name}`);//welcome ramu
        console.log(this); //this keyword refer the current object,so it will user object
    }
}

user.welcomeMessage();
user.name = "ramu";
user.welcomeMessage()


//...*** IMPORTANT ***..........
console.log(this);  //{} : empty object bcz node environmennt has no any global object
 //but in console at browser will give its o/p a window Object



