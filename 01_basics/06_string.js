const Stuname = "keshav"
const repoCount = 50;

console.log(Stuname+repoCount+"  value") //keshav50  value 

console.log(`${Stuname} has total ${repoCount}   value`); //keshav has total 50   value

const gameName = new String('hieshhhc');
//this new Keyword String is Object have 'key-value' pair, keys are index no. and values are characters 
console.log(gameName);//[String: 'hieshhhc']
console.log(typeof gameName); //object type
console.log(gameName[0]);  //h


const str = 'kesh-av-kum-ar';
// const str1 = "kesh-av-kum-ar"
console.log(str);//kesh-av-kum-ar
console.log(typeof str) // string type
console.log(str[0]) //k
console.log(str.charAt(0)) //k

// const str2 = str.substring(1,5)
// console.log(str2);
// console.log(str); //original not get affected due to heap

// const str3 = str.slice(1,5);
// console.log(str3);
// console.log(str);//original not get affected due to heap

