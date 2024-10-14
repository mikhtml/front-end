//1. Promise
function helloWorld() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World!");
        }, 2000);
    });
}

async function messages() {
    const msg = await helloWorld()
    console.log(msg)
}  

messages()


//2. Fetch 
function ambilDataUser() {
    fetch("https://reqres.in/api/users") 
        .then((response) => {
            return response.json();
        })
        .then((users) => {
           
            users.data.forEach((user) => {
                console.log(user.email); 
            });
        })
        .catch((error) => {
            console.error('Error:', error); 
        });
}

ambilDataUser();


//3. Async Await
async function ambilDataUser2() {
    try {
        let response = await fetch("https://reqres.in/api/users")
        let users = await response.json()
        users.data.forEach((user) => {
            console.log(user.email)
        })
    } catch (error) {
        console.error("Error",error)
    }
}

ambilDataUser2()


//4. Axios
async function ambilDataUserAx() {
    try {
        let response = await axios.get("https://reqres.in/api/users");
        let users = response.data.data;
        users.forEach((user) => {
            console.log(user.email); 
        });
    } catch (error) {
        console.error("Error:", error); 
    }
}

ambilDataUserAx();