const form = document.getElementById("loginForm");
const newArray = JSON.parse(localStorage.getItem('entries')) || [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let text = {
        userName: form.userName.value,
        userId: form.userId.value,
        password: form.password.value,
    }
    
    if(newArray !== null) {
        newArray.push(text)
        localStorage.setItem("entries", JSON.stringify(newArray));
        // console.log(newArray)
        alert("Registration completed!")
    } else {
        localStorage.setItem("entries", JSON.stringify(text));
    }
    form.reset();
})