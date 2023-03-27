if (!localStorage.users) {
    const users = []
    localStorage.setItem("users", JSON.stringify(users))
}
const error = document.getElementById('error')
document.getElementById('form').onsubmit = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const fullName = document.getElementById('fullName').value
    const country = document.getElementById('country').value
    const birthday = document.getElementById('birthday').value

    if (email && password && fullName && country && birthday) {
        const user = {email, password, fullName, country, birthday};
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const currentUser = users.filter(user => user.email === email)
        if (!currentUser[0]) {
            pushToUsers(user);
        } else {

            error.innerText = "Email уникалды болу керек"
            return false
        }
    } else {
        error.innerText = "Барлық жолдарды толтырыңыз"
        return false
    }
}

const pushToUsers = (user) => {
    let users;
    users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}