//obj creation by constructor: creates sigleton object
// const objByConstr = new Object()
// objByConstr.id = "11df";
// objByConstr.name = "ram";


//obj creation by constructor: does not create sigleton object
const objByLiteral={}
objByLiteral.id = "123abc"
objByLiteral.name = "kesh"


const  regularUser = {
    email:"abd@.com",
    fullname:{
        userfullname:{
            userfirstName:{
                firstname:"keshavkrr"
            },
            userlastname:{
                lastname:"kumarr"
            }
        }
    }
}
// console.log(regularUser)
// console.log(regularUser.fullname,regularUser.email)

////***important
//combining the objects :
const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 5:"d"}
const obj3 = {5:"e", 6:"d"}

// const obj4 = Object.assign(obj1,obj2,obj3);
// console.log(obj4)
// //{ '1': 'a', '2': 'b', '3': 'c', '5': 'e', '6': 'd' }
// console.log(obj1);
// // { '1': 'a', '2': 'b', '3': 'c', '5': 'e', '6': 'd' }
// console.log(obj1===obj4)//true

// //assign(): assign all properties in forst written object(obj1)
// //so we use an empty object ({}) assigned all the properties in this empty obj 
// // const obj5 = Object.assign({},obj1,obj2,obj3);

// //combine using spread operator:
const obj6 = {...obj1, ...obj2,...obj3};
// console.log(obj6) //{ '1': 'a', '2': 'b', '3': 'c', '5': 'e', '6': 'd' }


const users = [
    {
        id:1,
        email:"1akak.com"
    },
     {
        id:2,
        email:"2akak.com"
    },
     {
        id:3,
        email:"3akak.com"
    }
]

// console.log(users[1].email);//2akak.com


////****important */
//Object.keys(obj_name): creates an array of the keys of objects
//Object.values(obj_name):creates an array of the values of objects
//Object.entries(obj_name):creates an array of the arrays of ['key',values] of objects

console.log(Object.keys(obj6)); //[ '1', '2', '3', '5', '6' ]
console.log(Object.values(obj6)) //[ 'a', 'b', 'c', 'e', 'd' ]
console.log(Object.entries(obj6))
// [[ '1', 'a' ],[ '2', 'b' ],[ '3', 'c' ],[ '5', 'e' ],[ '6', 'd' ]]

//to check the existence of the property in the obj, taki server crash na ho jaye
// console.log(regularUser.hasOwnProperty('email')) //true
// console.log(regularUser.hasOwnProperty('address'))//false


//.....Object destructering....
const course = {
    coursename:"js in hindi",
    price: 999,
    courseInstructor: "hitesh"
}

// const {courseInstructor} = course;
// console.log(courseInstructor); //hitesh

const {courseInstructor:Instructor,price} = course;
console.log(Instructor,price)//hitesh


//API respose mainly in JSON format
// {
//     "name":"hitesh",//key must also in " "(string format)
//     "coursename":"js in hondi",
//     "price":100
// }

//response may be array format
//  [
//     {},
//     {}
//  ]

