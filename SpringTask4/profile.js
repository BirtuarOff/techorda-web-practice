const authUser = JSON.parse(localStorage.getItem("authUser"))
if (authUser)
    document.getElementById('welcome').innerText = `Welcome ${authUser.fullName}`
document.getElementById('email').innerText = authUser.email
document.getElementById('fullName').innerText = authUser.fullName
document.getElementById('country').innerText = authUser.country
document.getElementById('birthdate').innerText = authUser.birthday
document.getElementById('profile').innerText = authUser.fullName
document.getElementById('logoutForm').onsubmit =()=>{
    delete localStorage.authUser;
}