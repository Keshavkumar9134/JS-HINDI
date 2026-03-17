// const score = 400
// console.log(score)

// const balance = new Number(100);
// console.log(balance)


// //toPrecision(), toFixed(), toLocalString() used mainly at industry level

// console.log(balance.toString().length); //3
// //purpose of converting number to String provide more prototypes like length property,so many String properties
// console.log(balance.toFixed(2)); //100.00

// const othernum = 223.8943;
// console.log(othernum.toPrecision(3))//224
// //Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
// console.log(typeof othernum) //number
// console.log(othernum.toPrecision(2))//2.2e+2

// const num = 223.8984;
// const num2 = num.toPrecision(3);
// console.log(num);//223.8984
// console.log(num2);//224
// console.log(typeof num) //number
// console.log(typeof num2) //string

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN')) //10,00,000



//.............Math OBJECT.............

// console.log(Math); //Object [Math] {}
// console.log(Math.abs(-4));//4
// console.log(Math.round(4.7));//5
// console.log(Math.ceil(7.3));//8
// console.log(Math.max(2,7,3,9));//9
// console.log(Math.min(2,7,3,9));//2

console.log(Math.random()); //result will be bw 0 and 1
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1)+min)) 
//max-min: to determine the range,
// adding 1: to avoi the zero case when randomizied, 
//adding min to start from min value