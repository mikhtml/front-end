// 1. Destructuring (Array & Object)

// Destructuring pada Array
let buahSegar = ["apel", "jeruk", "pisang"];

let [buahSegar1, buahSegar2, buahSegar3] = buahSegar;

console.log(buahSegar1); // Output: apel
console.log(buahSegar2); // Output: jeruk
console.log(buahSegar3); // Output: pisang

// Destructuring pada Object
let dataOrang = { namaLengkap: "Budi", umurOrang: 25 };

let { namaLengkap, umurOrang } = dataOrang;

console.log(namaLengkap); // Output: Budi
console.log(umurOrang);   // Output: 25


// 2. Destructuring dengan Mengambil Sebagian Item (Array & Object)

// Destructuring sebagian item pada Array
let warnaPelangi = ["merah", "hijau", "biru", "kuning"];

let [warnaUtama1, , warnaUtama3] = warnaPelangi;

console.log(warnaUtama1); // Output: merah
console.log(warnaUtama3); // Output: biru

// Destructuring sebagian item pada Object
let dataSiswa = { namaSiswa: "Sari", kelas: 10, usia: 16, hobi: "bermain bola" };

// Hanya ambil properti namaSiswa dan usia
let { namaSiswa: namaMurid, usia } = dataSiswa;

console.log(namaMurid); // Output: Sari
console.log(usia);      // Output: 16


// 3. Destructuring dengan Menggunakan Default Value (Array & Object)

// Destructuring dengan default value pada Array
let deretAngka = [10, 20];

let [deretAngka1, deretAngka2, deretAngka3 = 30] = deretAngka;

console.log(deretAngka1); // Output: 10
console.log(deretAngka2); // Output: 20
console.log(deretAngka3); // Output: 30

// Destructuring dengan default value pada Object
let barang = { namaProduk: "Laptop", hargaProduk: 5000000 };

let { namaProduk, hargaProduk, jumlahStok = 100 } = barang;

console.log(namaProduk);  // Output: Laptop
console.log(hargaProduk); // Output: 5000000
console.log(jumlahStok);  // Output: 100


// 4. Destructuring dengan Menggunakan Rest Operator (Array & Object)

// Destructuring dengan rest operator pada Array
let hewanPeliharaan = ["kucing", "anjing", "kelinci", "burung"];

let [hewanPertama, ...sisaHewanPeliharaan] = hewanPeliharaan;

console.log(hewanPertama);        // Output: kucing
console.log(sisaHewanPeliharaan); // Output: ["anjing", "kelinci", "burung"]

// Destructuring dengan rest operator pada Object
let spesifikasiMobil = { merkMobil: "Toyota", modelMobil: "Avanza", tahunMobil: 2020, warnaMobil: "Putih" };

let { merkMobil, ...spesifikasiLainnya } = spesifikasiMobil;

console.log(merkMobil);           // Output: Toyota
console.log(spesifikasiLainnya);  // Output: { modelMobil: "Avanza", tahunMobil: 2020, warnaMobil: "Putih" }


// Exercise 6 yang diubah dengan Destructuring 

// 2.
// const addNumber = (a, b, c, d, e, f, g) => {
//     const numbers = [a, b, c, d, e, f, g];
//     return numbers.reduce((sum, num) => sum + num, 0);
//   };
  
//   console.log(addNumber(1, 2, 3, 4, 5, 6, 7));  

const addNumber = (...numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0);
};
  
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));


// 3.
// const phi = 3.14;
// const power = 2;
// let radius = 0;

// const calculateArea = ({ radius, power }) => phi * Math.pow(radius, power);

// radius = 21;
// const area21 = calculateArea({ radius, power: 2 });

// radius = 7;
// const area7 = calculateArea({ radius, power: 2 });

// console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

const phi = 3.14;

const calculateArea = ({ radius, power = 2 }) => phi * Math.pow(radius, power);

let radius = 21;
const area21 = calculateArea({ radius });  // Default power = 2

radius = 7;
const area7 = calculateArea({ radius });   // Default power = 2

console.log(`Area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

  