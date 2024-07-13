const form = document.getElementById("loginForm");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let text = {
        userId: form.userId.value,
        password: form.password.value,
    }
    console.log(text)
    
    localStorage.setItem("entries", JSON.stringify(text));
})