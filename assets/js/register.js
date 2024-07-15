const form = document.getElementById("loginForm");
const newArray = JSON.parse(localStorage.getItem('entries')) || [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let text = {
        userId: form.userId.value,
        password: form.password.value,
    }
    
    if(newArray !== null) {
        newArray.push(text)
        localStorage.setItem("entries", JSON.stringify(newArray));
        console.log(newArray)
    } else {
        localStorage.setItem("entries", JSON.stringify(text));
    }
})