// let myDateStr = Date();
// console.log(typeof myDateStr);//string
// console.log(myDateStr);//Mon Mar 16 2026 11:24:31 GMT+0530 (India Standard Time)


let myDate = new Date();
// console.log(typeof myDate);//object
// console.log(myDate);//2026-03-16T05:54:31.518Z
console.log(myDate.getDay());  //1: for monday its 1
console.log(myDate.getMonth());  //2: for third month its 2
console.log(myDate.getMonth()+1);  //3: for third month its 2(2+1=3)


// console.log(myDate.toString());//Mon Mar 16 2026 11:24:31 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());//Mon Mar 16 2026
// console.log(myDate.toLocaleString());//16/3/2026, 11:24:31 am



//create your own date
let myCreatedDate1 = new Date(2023,0,21)
console.log(myCreatedDate1.toLocaleString());//21/1/2023, 12:00:00 am
console.log(typeof myCreatedDate1); //object : localstring change hone ke baad bhi ye object type me rahta hai


// let myCreatedDate2 = new Date(2023, 0, 22, 5, 3);
// console.log(myCreatedDate2.toLocaleString());//22/1/2023, 5:03:00 am

// let myCreatedDate3 = new Date("2023-01-23")
// let myCreatedDate4 = new Date("01-24-2023")
// console.log(myCreatedDate3.toLocaleString())//23/1/2023, 5:30:00 am
// console.log(myCreatedDate4.toLocaleString())//24/1/2023, 12:00:00 am


// time stamp: time taken by participitent in quizes poll, that who came first
let myTimeStamp = Date.now(); 
console.log(typeof myTimeStamp);//number
console.log(myTimeStamp);//1773644281581 : total time(in millisec) from that defined universal time to till now time  
console.log(Math.floor(Date.now()/1000));
console.log(myCreatedDate1.getTime());//1674239400000 : total time from that defined universal time to till createdDate1
console.log(myCreatedDate1.getDate());//21

//customize your date like mon, M, Monday
let newDate = new Date();
console.log(` day is: ${newDate.getDay()}`);

console.log(newDate.toLocaleString('default',{
    weekday: "long" //like wednesday

}))
