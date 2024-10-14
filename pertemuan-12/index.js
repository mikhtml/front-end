//String Literal, Arrow Function & Default Parameter

//1. String Literals
let fullName = "Oli"
let age = 37
let address = "Bitung"

//Halo nama saya Oli, umur saya 25 tahun
//dan saya tinggal di Bitung

let kalimat = 
"Halo nama saya " + fullName + 
", umur saya " + age + 
" tahun dan saya tinggal di " + address
console.log(kalimat)

//Pakai `` (di samping angka 1) dan dollar
let kalimat2 = `Halo nama saya ${fullName}, umur saya ${age} tahun, dan saya tinggal di ${address} `
console.log(kalimat2)


//2. Arrow Function 
function sayGreetings(fullName) {
    return `Hello my name is ${fullName}`
}
console.log(sayGreetings("Oli Skyes"))

//Ini masih memakai return
const sayGreetings2 = (fullName) => {
    return `Hello my name is ${fullName}`
}
console.log(sayGreetings2("Oli Skyes"))

//Jika hanya satu baris boleh tidak memakai return (langsung)
//Implicit Return Value dari Arrow Function
const sayGreetings3 = () => `Hello my name is ${fullName}`
console.log(sayGreetings3("Oli Skyes"))

//Arrow Function pada IIFE
let output = (() => "Hello")()
console.log(output)

//Arrow Function pada Callback
let numbers = [1, 2, 3, 4, 5]
let output2 = numbers.map((item) => item)
console.log(output2)


//3. Default Parameter
const sayGreetings4= (fullName, age, address) => {
    if (fullName === undefined){
        fullName="Oli";
    }
    if (age === undefined){
        age= 37;
    }
    if (address === undefined){
        address= "USA"
    }
    console.log(
        Halo nama saya $(fullName)
    )
}
sayGreetings4("Oliver")

const sayGreetings5 = 

