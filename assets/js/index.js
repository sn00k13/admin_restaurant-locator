const form = document.getElementById("loginForm");
const check = localStorage.getItem("entries");

const validate = JSON.parse(check)
console.log(validate)


form.addEventListener("submit", (e) => {
    e.preventDefault();
    let loginData = {
        userId: form.userId.value,
        password: form.password.value,
    }

    if (loginData.userId == validate.userId && loginData.password == validate.password) {
        alert("Successful")
        location.href = "../../dashboard.html"
    } else {
        alert("Wrong userid or password")
    }
    sessionStorage.setItem("logins", JSON.stringify(loginData));
})