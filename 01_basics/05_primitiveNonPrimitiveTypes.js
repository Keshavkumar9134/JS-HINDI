//data types divided into two types based on data stored and to access it :Primitive & Non-Primitive/reference

//primitve(7 types): String, Number, Boolean, null, undefined, Sysmbol, BigInt
//stack is used to store primitive data types
const score = 100;
const scoreValue = 100.3;
console.log(typeof scoreValue);//number type

const isLoggedIn = false;  //boolean
const outsideTemp = null;  //null type
let userEmail;   //undefined type

const id = Symbol('124');  //symbol type
const anotherId = Symbol('124');
console.log(id==anotherId);//false, bcz both are diffeerent due to symbol

const bigNumber = 33544666n; //bigint type
console.log(typeof bigNumber);


//(non-primitive (Rereference ): Array,Objects, Functions
//heap is used
const heros = ["hi","jdd","sd"]; //array type
let myObj = {
    name: "kesh",
    age: 22,
} //Object type

const myFunction = function(){//function object type
    console.log("kkkk");
};
console.log(typeof myFunction)


//stack(primitive) , Heap(Non-primitive)
let firstname = "Keshav"  //variable name declared in the heap
let secondname = firstname //declared and space is allocated in the stack, copy of fistname is created then copied value is passed
secondname = "Kumar"

console.log(firstname) //Keshav
console.log(secondname) //Kumar

let userOne = {   //variable name declared in the heap for the space allocated for the value(headp allocated address) 
    email: "user1.com",
    upi: "123qwe"
}

let userTwo = userOne; //variable name userTwo is defined in the heap, and reference of userOne is stored as a value in usertwo 

userTwo.email = "updatedUser2.com" //due to same reference oiginal value of the key email got updated
console.log(userOne.email);
console.log(userTwo.email);


