//IIFE & Callback Function

//1. IIFE (Immediately Invoked Function Expression)

//a. No params & args & return value
// (function (){
//     //Code
//     console.log("Hello World")
// })() //Excecute sendiri


// //b. With params & args & return value
// let output = (function (fullName){
//     //Code
//     return "Hello " + fullName
// })("Bachira Meguru")

// console.log(output)


//2. Callback Function (Function passed as an argument to another function)

//a. No params, args & return value
function sayHello(callback){
    callback()
}

sayHello(function (){
    console.log("Hello World")
})


//b. With params, args & return value
function sayHello(callback){
    let result = callback("Bachira Meguru") //Call calllback function 
    return result
}

let output = sayHello(function (fullName){  //Parameter bisa juga variable
 return "Hello " + fullName
})

console.log(output)








