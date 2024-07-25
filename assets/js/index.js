const form = document.getElementById("loginForm");
const check = JSON.parse(localStorage.getItem("entries")) || [];
const profileUser = JSON.parse(sessionStorage.getItem('signedInUser'))

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userId = form.userId.value;
    const password = form.password.value;
    const userName = form.userName.value;

    const user = check.find(users => users.userName === userName && users.userId === userId && users.password === password);

    if (user) {
        // Store the signed-in user info in session storage
        sessionStorage.setItem('signedInUser', JSON.stringify(user));


        alert("Login successful!");
        form.reset();
        location.href = 'dashboard.html'
    } else {
        alert("Invalid login credentials!");
    }

    })

    function pageLoad() {
        const profile = document.querySelector('.user');

        profile.innerHTML = profileUser.userName
        
      }