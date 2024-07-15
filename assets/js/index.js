const form = document.getElementById("loginForm");
const check = JSON.parse(localStorage.getItem("entries")) || [];
// console.log(check)

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let loginData = {
        userId: form.userId.value,
        password: form.password.value,
    }

    const user = check.find(user => user.userId === form.userId.value && user.password === form.password.value);

            if (user) {
                alert("Login successful!");
                location.href = "../../dashboard.html"
            } else {
                alert("Invalid credentials. Please try again.");
            }
            loginForm.reset(); 

    sessionStorage.setItem("logins", JSON.stringify(loginData));
})