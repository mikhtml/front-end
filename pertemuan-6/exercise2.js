//Ubah atau Modifikasi Exercise 1 menggunakan:

//1. IIFE
//2. Callback Function

//Exercise 1 
//Membuat fungsi untuk menghitung BMI (Body Mass Index)

//Fungsi menerima 2 parameter (Berat & Tinggi)

// function bodyMassIndex(berat, tinggi){
//     return berat/(tinggi*tinggi)
// }

// console.log(bodyMassIndex(60, 1.72))


//1. IIFE
// let output = (function (berat, tinggi){

//     return berat/(tinggi*tinggi)
//  })(60, 1.72)

// console.log((output))

//2. Callback Function
function bmi(callback) {
    let out= callback(60, 1.72)
    return out
}
let out= bmi(function (berat, tinggi){
    return berat / (tinggi * tinggi)
})
console.log(out)
