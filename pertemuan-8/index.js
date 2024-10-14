//JavaScript Object & Conditional

//Deklarasi Object

//Object Literal
let bachira = {
  firstName: "Meguru",
  age: 17,
  isNotMarried: true,
  grade: [90, 90, 100],
  sayGreetings: function () {
    console.log("Hello my name is " + this.firstName)
  },
  address: {
    street: "Jl. Horizon Tokyo",
    city: "Tokyo",
    postalCode: 18283,

  },
}
console.log(bachira) 
 

//Mengakses properti dalam Object

//1. Dot notation 
console.log(bachira.firstName) //Meguru
console.log(bachira.age) //17
bachira.age = 18 //Ubah nilai
console.log(bachira)

bachira.job = "Soccer Player" //Tambah properti baru
console.log(bachira)

//2. Bracket Notation
console.log(bachira["isNotMarried"]) //True
bachira["Nationality"] = "Japanese" //Tambah properti baru
console.log(bachira)

//Object Method
bachira.sayGreetings()

//Object inside Object
console.log(bachira.address.city) //Tokyo

//Delete property dalam Object
delete bachira.grade
console.log(bachira)


// //JavaScript Conditional

// 1. If - Else

// Jika suhu hari ini lebih dari atau sama dengan 37
// Tampilkan suhu hari ini panas
// Jika tidak tampilkan suhi hari ini dingin

// let temp = 37
// if (temp >= 37){
//     console.log("Suhu hari ini panas")
// } else {

//     console.log("Suhu hari ini dingin")
// }

// //2. If - Else - If - Else (Nested If)

// //Jika nilai dalam rentang 80 - 100 tampilkan grade A
// // Jika nilai dalam rentang 70 - 79 tampilkan grade B
// // Jika nilai dalam rentang 50 - 69 tampilkan grade C
// // Selain itu jika nilai di bawah 50 tampilkan grade D

// let grade = 78
// if (grade >= 80 && grade <= 100){
//   console.log("Grade A")
// } else if (grade >= 70 && grade <= 80){
//   console.log("Grade B")
// } else if (grade >= 50 && grade <= 70){
//   console.log("Grade C")
// } else {
//   console.log("Grade D")
// }

// //Switch - Case

// //Jika angka 1 tampilkan January
// //Jika angka 2 tampilkan February
// //Jika angka 3 tampilkan March
// //:
// //Jika angka 12 tampilkan December

// let number = 6
// switch(number){
//    case 1: 
//     console.log("January")
//     break
//    case 2: 
//     console.log("February")
//     break
//    case 3: 
//     console.log("March")
//     break
//    default:
//     console.log("Not Found")
//     break
// }

