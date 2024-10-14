//Membuat fungsi untuk menghitung BMI (Body Mass Index)

//Fungsi menerima 2 parameter (Berat & Tinggi)

function bodyMassIndex(berat, tinggi){
    return berat/(tinggi*tinggi)
}

console.log(bodyMassIndex(60, 1.72))