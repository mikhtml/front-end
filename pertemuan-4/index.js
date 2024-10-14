// //Variable dan Operators

// //1. JavaScript Variable

// let fullName = "Bachira Meguru"; //Konvensi Camel case
// let full_name = "Bachira Meguru"; //Konvensi Snake case
// let FullName = "Bachira Meguru"; //Konvensi Pascal case

// //Kata kunci "let" bisa diubah
// //Dalam JavaScript memakai konvensi Camel case

// const gender = "female";
// //gender = "male"; //Error

// //Tipe-tipe Data
// let age = 30; //Number integer
// age = 31;

// let weight = 85.5; //Number float

// let isMarried = true; //Boolean

// let grade = null; //Null

// let address; //Undefined

// console.log(fullName);
// console.log(age);
// console.log(gender);
// console.log(weight);
// console.log(isMarried);
// console.log(grade);


// //2. JavaScript Operators
// //a. Arithmetic Operators (+, -, *, /, %, **)

// let bil1 = 20;
// let bil2 = 5;
// console.log(bil1 + bil2); //25
// console.log(bil1 - bil2); //15
// console.log(bil1 * bil2); //100
// console.log(bil1 / bil2); //4
// console.log(bil1 % bil2); //0
// console.log(bil1 ** bil2); //3200000

// //Example menghitung luas Segitiga
// let alas = 5
// let tinggi = 5 
// let luas = 0.5 * alas * tinggi;
// console.log(luas);

//b. Assignment Operators (=, +=, -=, *=, /=)
// let bilangan = 10;
// bilangan += 10; //Atau bilangan = bilangan + 10
// console.log(bilangan);

//c. String Operator (+)
// let firstName = "Meguru";
// let lastName = "Bachira"; 
// let fullName = firstName + lastName; //Jika ingin ada space: let fullName = firstName + " " + lastName;
// console.log(fullName)

//d. Relational Operator (==, ====, <=, >=)
// let bil1 = 10;
// let bil2 = 10;
// let bil3 = "10";
// let bil4 = 5;

// //Loose Equality (==) dan Strict Equality (===)
// console.log(bil1 == bil2); //True
// console.log(bil1 === bil2); //True
// console.log(bil1 == bil3); //True
// console.log(bil1 === bil3); //False (karna dia mengecek nilai & tipe data)

//e. ternary Operator (? ;)
// let age = 17;
// let isEligible = age >= 17 ? "Bisa buat KTP" : "Belum bisa buat KTP"
// console.log(isEligible); //Bisa buat KTP

//f. Logical Operator (&&, ||, !)
//AND (&&)
console.log(true && true); //True
console.log(true && false); //False
console.log(false && true); //False
console.log(false && false); //False

//OR (||)
console.log(true || true); 
console.log(true || false); 
console.log(false || true); 
console.log(false || false); 

//NOT (!)
console.log(!true); 
console.log(!false); 


