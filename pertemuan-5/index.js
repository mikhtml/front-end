// // //JavaScript Function

// // //Cara 1. Function Declaration
// // function greetings1() {
// //     console.log("Hello World");
// // }

// // greetings1(); //Call //Excecute

// // //Cara 2. Function Expression
// // let greetings2 = function(){
// //     console.log("Hello World")
// // }

// // greetings2()


// // //Parameter & Argument (Input) & Return (Ouput)

// //Cara 1 
// //                  Parameter
// function greetings1(fullName){
//     return "Hello " + fullName;
// }
// //                           Argument
// let output1 = greetings1("Bachira Meguru")
// console.log(output1);

// //Cara 2
// let greetings2 = function(fullName){
//     return "Hello " + fullName;
// }
// let output2 = greetings2("Bachira Meguru")
// console.log(output2)


// //Function Hoisting
// //Cara 1
//                   //Parameter
// function greetings1(fullName){
//     return "Hello " + fullName;
// }
//               //Argument
// let output1 = greetings1("Bachira Meguru")
// console.log(output1);


// //Global Scope & Local Scope
// let x = 10;

// function foo() {
//     let y = 20;
//     console.log(x); //10
//     console.log(y); //20
//     if (y > x) {
//         console.log(z);  //30
//     }
// }

// console.log(x); //10
// console.log(y); //Error