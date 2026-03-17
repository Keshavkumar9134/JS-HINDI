//array:
// //object type, js Array has Dynamic size, can contains mixed dataTypes

// shallow copy: shares the same reference of data soted in the heap 
//deep copy: do not shares the same reference, in the deep copy , copy of the data stored in the heap also get created

// const checkmyArr = [0,1,"Keshav",true,[0,5,4],{email: "user1.com",upi: "123qwe"},function(){}];

const myArr = [0,1,2,3,4,5];

const myArr2 = new Array(0,23,2,4,6);
// console.log(myArr,myArr2, typeof myArr,typeof myArr2);
//[ 0, 1, 2, 3, 4, 5 ]  [ 0, 23, 2, 4, 6 ]  object  object

console.log(myArr2[1]) //23

//Arrays methods

// myArr.push(11);
// console.log(myArr) //[ 0, 1, 2, 3, 4, 5, 11 ]
// myArr.pop();
// console.log(myArr)// [ 0, 1, 2, 3, 4, 5 ]

// myArr.unshift(9);
// console.log(myArr); //[ 9, 0, 1, 2, 3, 4, 5 ]  :
// // unshift is not generally,bcz of unshift, system
// //  has to unshift all ele, so system will get more load 

// myArr.shift(); // [ 0, 1, 2, 3, 4, 5 ] 


// console.log(myArr.includes(9))// false
// console.log(myArr.indexOf(4)); //4


//....join......
// const newArr = myArr.join(); //bind the array with comma seprated
// console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr); //0,1,2,3,4,5
// console.log(typeof newArr); //string: got string type due to binded array

//......slice, splice.............
const mySlicArr = myArr.slice(1,3); //slice does not maniculate the original arr
console.log("new Sliced Arr: ",mySlicArr); //[ 1, 2 ]
console.log("My original Arr after slice: ", myArr ); //[ 0, 1, 2, 3, 4, 5 ]


const mySplicArr = myArr.splice(1,3); //splice maniculate the original, return remaining array
//splice(1,3), 1 is index, 3 is total no. of elements deleted from index 1
console.log("new Sliced Arr: ",mySplicArr); //[ 1, 2, 3 ]
console.log("My original Arr after splice: ", myArr ); //[ 0, 4, 5 ]



