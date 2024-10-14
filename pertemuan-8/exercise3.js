let mikha = {
  firstName: "Mikha",
  weight: 60,
  height: 1.72,
  calculateBMI: function (){
    return this.weight/(this.height*this.height)
  }
}

console.log("Name :", mikha.firstName)
console.log("Weight :", mikha.weight)
console.log("Height :", mikha.height)
mikha.calculateBMI()

mikha.BMI = mikha.calculateBMI() //Tambah properti baru
console.log(mikha)
console.log("BMI:", mikha.BMI)

let bmi = mikha.calculateBMI()
if (bmi <= 16.0){
    console.log("BMI Category: Severly Underweight")
} else if (bmi >= 16.0 && bmi <= 18.4){
    console.log("BMI Category: Underweight")
} else if (bmi >= 18.5 && bmi <= 24.9){
    console.log("BMI Category: Normal")
} else if (bmi >= 25.0 && bmi <= 29.9){
    console.log("BMI Category: Overweight")
} else if (bmi >= 30.0 && bmi <= 34.9){
    console.log("BMI Category: Moderately Obese")
} else if (bmi >= 35.0 && bmi <= 39.9){
    console.log("BMI Category: Severly Obese")
} else if (bmi >= 40.0){
    console.log("BMI Category: Morbidly Obese")
}
