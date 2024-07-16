const profile = document.getElementById("profileName");
const validate = localStorage.getItem("entries");
// console.log(validate.userName)

sessionStorage.getItem('logins');

function pageLoad() {
    if (validate) {
        const userData = JSON.parse(validate)
        console.log(validate.userName)
        profile.innerHTML = userData.userName
      }
}