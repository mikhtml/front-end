//JavaScript Loop

//Array Object

let students = [
    {
        id: 1,
        firstName: "Meguru",
        grade: 99
    },
    {
        id: 2,
        firstName: "Mikha",
        grade: 80,
    },
    {
        id: 3,
        firstName: "Miracle",
        grade: 90, 
    },
]

console.log(students)


//1. For - Loop
for(let i = 0; i < students.length; i++){
    console.log(students[i].id)
}

//2. While - Loop
let i = 0
while(i < students.length){
    console.log(students[i].firstName);
    i++;
}


//3. Do - While - Loop
// let i = 0
// do {
//   console.log(students[i].firstName);
//   i++;
// } while (i < student.length)


//4. Array Built-In Method

//4.a forEach()
students.forEach(function(item) {
  console.log(item.firstName);
});


//4.b map
// students.map(function(item) {
//     console.log(item.firstName);
//   });

// let output = students.map(function(item) {
//     return item.firstName;
//   }); //contoh jika memakai return
// console.log(output)


//4.c filter()
let output1 = students.filter(function(item) {
    return students.grade >= 90
});
console.log(output1)


//4.d find()
// let output2 = students.find(function(item) {
//     return students.grade >= 90
// });
// console.log(output2)


//4.e findIndex()
// let output3 = students.findIndex(function(item) {
//     return item.firstName === "Miracle"
// });
// console.log(output3)


//Mini Exercise
let countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp;Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

//1. Cari index dari negara Indonesia
let index = countries.findIndex(function(item) {
    return item === "Indonesia"
});
console.log(index); //87

//2. Dengan menggunakan filter() tampilkan semua negara yang berakhiran "sia"
// Pakai endsWith
// let sia = countries.filter(country => country.endsWith("sia"));
// console.log(sia);

// Pakai Slice




