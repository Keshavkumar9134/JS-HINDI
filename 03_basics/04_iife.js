//immediate invoked function Expression(IIFE)
//syntax: ( function_declaration )()  , ( ()=>{} )()
(function chai(){
    console.log(`DB Connected `) //DB Connected
})(); //iife


( (name)=>{
    console.log(`DB Connected 2 by ${name}`);//DB Connected 2 by keshav
} )('keshav')


//.....nested function....
//function got stored in call stack
// : so inner most at top got executed first
// after that outer most executed at last