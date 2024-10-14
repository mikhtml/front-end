//Asynchronous JS

//Synchronous -> Single Thread -> Blocking

//single thread -> baris perbaris
console.log("Proses 1")
console.log("Proses 2")
console.log("Proses 3, proses yang memakan waktu yang lama") //misalkan lama -> stuck
console.log("Proses 4")


//Asynchronous -> Multi Thread -> Non-blocking

//1. Parallel
setTimeout(() => {
    console.log("Proses 1")
}, 5000)

console.log("Proses 2")

setTimeout(() => {
    console.log("Proses 3")
}, 3000)

console.log("Proses 4")


//2. Concurrent

//concurrent menggunakan callback function
//masih es5, karna akan menjadi callback hell
setTimeout (() => { 
    console.log("Proses 1")
    setTimeout(() => {
        console.log("Proses 2")
        setTimeout(() => {
            console.log("Proses 3")
            setTimeout(() => {
                console.log("Proses 4")
            }, 3000)
        }, 3000)
    }, 3000)
}, 3000)


//Promise

//versi es6
let condition = true 
const newPromise = new Promise((resolve, reject) => {
    if (condition){
        resolve("Berhasil")
    } else {
        reject("Gagal")
    }
})

//Pakai Promise
//1. Then - Catch

newPromise.then((result) => { //then akan dieksekusi jika resolve
    console.log(result) //outputnya adalah berhasil karna conditionnya true
}).catch((error) => console.log(errors))

//contoh lain
newPromise
  .then((result) => {
    return result
  })
  newPromise
  .then((result2) => {
    console.log(result2)
  })
  .catch((error) => console.log(error))

//Asynchronous - Await
//Selalu digunakan pada fungsi

const consumePromise = async () => {
    try{
      let result = await newPromise
      console.log(result)
    } catch (error) {
      console.log(error)
    }
}
consumePromise()


//Menggunakan Promise Fetch 
const fetchPromise = fetch("https://jsonplaceholder.typeicode.com/users");
fetchPromise.then(response => {
  console.log(response);
});

//menggunakan await

//Axios

