// console.log(2>1);
// console.log(2>=1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2" > 1); //true
// console.log("02" > 1); //true
// console.log("2" > "1"); //true



// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

/*
1.console.log(null > 0); // false Comparison (>) converts null to a number before comparing.

null is converted to 0.

0 > 0 is false.

2. console.log(null == 0); // false The equality check (==) does not convert null to a number.

null is only equal to undefined in loose equality (==), not to numbers.

So, null == 0 is false.

3. console.log(null >= 0); // true The >= comparison also converts null to a number (0).

It becomes 0 >= 0, which is true.
*/


console.log(null==undefined); //true :null is only equal to undefined in loose equality (==), not to numbers.


console.log(null>=undefined); //false
console.log(null>undefined); //false
console.log(null<undefined); //false

// console.log(undefined == 0); //false
// console.log(undefined > 0); //false
// console.log(undefined < 0); //false


/* all comparisions with undefined will give FALSE, except null==undefined  */



