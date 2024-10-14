//Array in JavaScript

//Deklarasi Variable Array
//1. Array Literal
// let numbers = [1, 2, 3, 4, 5];
// console.log(numbers)

// //2. Kata kunci: New
// let numbers2 = new Array(6, 7, 8, 9, 10)
// console.log(numbers2)

//Tipe data yang bisa disimpan dalam Array
// let numbers = [1, 2, 3, 4, 5]; //numbers
// let students = ["Bachira", "Meguru"]; //string
// let bcr = ["Bachira", 17, true, [31, 13, 2]]; //mixed
// console.log(bcr)

// //Array Length
// console.log(numbers.length) //5
// console.log(students.length) //3
// console.log(bcr.length) //4

// //Cara mengakses element/data tertentu dalam Array
// //Melalui index Array (index selalu dimulai dari 0)
// console.log(numbers[2]) //3
// console.log(students[1]) //Meguru
// console.log(bcr[2]) //true
// console.log(bcr[3][1]) //13

// //Cara mengakses element/data terakhir dalam Array
// let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(numbers2[numbers2.length -1])


//Array Method
let array = [1, 2, 3, "hello", false, true]
console.log(array)

//1. toString()
console.log(array.toString())

//2. join()
console.log(array.join()) //default
console.log(array.join(", ")) //modif
console.log(array.join("-")) //modif

//3. pop()
array.pop()
console.log(array) //menghilangkan index paling terakhir

//4. push()
array.push("Anything you want")
console.log(array)

//5. shift()
array.shift()
console.log(array) //index 0 yang dihapus

//6. unshift()
array.unshift("Anything you want")
console.log(array) //element terakhir juga tertampil menjadi element pertama

//7. splice()
array.splice(2, 1) //menghapus index ke 2 yaitu 3
console.log(array)

array.splice(1, 1, 1) //mengganti index pertama 
console.log(array)

array.splice(2, 0, 2, 3) //mengganti index kedua dan ketiga
console.log(array)

//8. concat()
let songs = ["youtopia", "drown", "throne"]
let bands = ["bmth", "oasis", "mcr"]
let singers = ["oliver", "liam", "gerard"]

let collab = songs.concat(bands, singers)
console.log(collab)

//9. slice()
let collab2 = collab.slice(3, 5) //collab2 adalah variable penampung
let collab3 = collab.slice(3)
console.log(collab2) 
console.log(collab3)

