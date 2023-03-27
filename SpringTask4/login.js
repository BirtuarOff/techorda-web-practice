document.getElementById('form').onsubmit = () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    if (email && password) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const currentUser = users.filter(user => user.email === email && user.password === password)
        if (currentUser[0]) {
            localStorage.authUser = JSON.stringify(currentUser[0])
        }
        else {
            const error = document.getElementById('error')
            error.innerText = "Пароль или email неверно!"
            return false
        }
    }
    else {
        const error = document.getElementById('error')
        error.innerText = "Заполните все поле!"
        return false
    }
}
