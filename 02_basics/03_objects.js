//object can be declared by constructor(object.create() / const objByConstr = new Object()) 
// and by LITERALS(const objByLiteral={})


//sigleton:means only a single object is created

//remb that, if object is declared using literals 
// then singleton not get created , here multiple objects like
//  as instances got created. If declared using 
// constructor then singleton got created  

//object literals

const mySym = Symbol("key1");

const JsUser = {  
    //in the key-value pair ,key automatically got converted into string,values can be anything like string, objects(array),function
    name: "Keshav",
    [mySym]:"mykey1",
    age: 18,
    "full name": "kesh Kumar",
    location:"Jaipur",
    email:"acb.com",
    isLoggedIn:false,
    lastLoginDays: ["Mon","Tue"]
}

// console.log(JsUser.email);//acb.com
// // console.log(JsUser[email])//this is wrong, bcz key is in String type
// console.log(JsUser["email"])//acb.com
// console.log(JsUser["full name"]); // kesh Kumar


// console.log(JsUser[mySym]); //mykey1


JsUser.email = "kesha@123.com"
// console.log(JsUser.email)

//Object.freeze(obj_name) :not allow anyone to change the object

// Object.freeze(JsUser);
// JsUser.email = "mmha@123.com"
// console.log(JsUser.email) //email dont got change due to freeze of object


//use of this: for accessing properties of the same object
JsUser.greeting = function(){
    console.log("Hello user",this["full name"],this.name)
}
console.log(JsUser.greeting())
console.log(JsUser)