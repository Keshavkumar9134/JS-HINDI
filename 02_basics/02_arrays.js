const arr1 = ["ram","sam","van"];
const arr2 = ["sita","gita","rita","nita"];

// arr1.push(arr2);
// console.log(arr1);
// //[ 'ram', 'sam', 'van', [ 'sita', 'gita', 'rita', 'nita' ] ]
// console.log(arr1[3][2]); //rita


// const newConcatArr = arr1.concat(arr2); 
// //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(newConcatArr);
// //['ram',  'sam','van',  'sita','gita', 'rita','nita']

// console.log(arr1);//[ 'ram', 'sam', 'van' ]



// //spread operator
// const arrSpread = [...arr1, ...arr2];
// console.log(arrSpread);
// //['ram',  'sam','van',  'sita','gita', 'rita','nita']

// const multiDArr = [1,2,3,[4,5,[6,7]],[8,[9]],10];
// const newFlattenedArr = multiDArr.flat(Infinity); //returns a new arr
// console.log(newFlattenedArr);//[1, 2, 3, 4,  5, 6, 7, 8, 9, 10]



//....Array.isArray(), Array.from()..........
//isArray(): data selected from webpage is in another forms
// (like objects, nodeList, string, array), 
// and to iterate over all the taken data, 
// and iteration is done only in array, 
// check is data is in array format or not. And 
// from():  is used to convert into the array format
console.log(Array.isArray("Hitesh"));//false
console.log(Array.from("Hitesh"));//[ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.from({name:"Hitesh"})); //[]
// gives empty array bcz this special case can not determine, ki kiske 
// according array bnaye keys or values  


//...... Array.of(): Returns a new array from a set of elements...........
let score1 = 100
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));
//[ 100, 200, 300 ]