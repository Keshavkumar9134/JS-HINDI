function addTwoNums(num1, num2){
    //here we can check what are type of parameters using if conditions
    console.log(num1 + num2);
}
// addTwoNums();// NaN
// addTwoNums(2,5); //7
// addTwoNums(2,"4"); //24
// addTwoNums(2)  //NaN

// const result = addTwoNums(2,5);//7 :due to console print after calling the function
// console.log(result); //undefined : void return from the function


function sum(x,y){
    ans = x+y;
    return ans;
}
console.log(addTwoNums(3,6));
// const result = addTwoNums(3,6); //9 (without console it will get printed)
// console.log("result: ",result); //undefined

function loginUserMessage(username){
    // if(username==undefined){
    //     console.log("please enter a username");
    //     return;
    // }//generally not used
    if( !username ){
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`;
}

// console.log(loginUserMessage("keshav")); //keshav just logged in
// console.log(loginUserMessage()); //undefined just logged in


//........ rest operator...... //aggregates at a place and return an array
// function calculateCartPrice(...num1){
//     return num1;
// }

// console.log(calculateCartPrice(200,400,500));//[ 200, 400, 500 ]

function calculateRemainCartPrice(val1, val2, ...num1){
    return num1;
}

// console.log(calculateRemainCartPrice(200,400,500,600,700));//[ 500, 600, 700 ]



//.......... passing objects and arrays in  functions ..........

const user = {
    name: "Mahesh",
    price: 44,
    age :11
}

function handleObject(anyObj){
    console.log(`username is ${anyObj.name} and price is ${anyObj.price}`);
}

handleObject(user);
handleObject({ //can be directly passed
  name:"Raghav",
  price:66,
  address:"Goa"
})


const priceArr = [200,300,400];

function handleArray(getAnyArr){
    return getAnyArr[1];
}

console.log(handleArray(priceArr)); //300
const ans =  handleArray(priceArr)
console.log(ans) //300

console.log(handleArray([200,300,400,500])) //300

