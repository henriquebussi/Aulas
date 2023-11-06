document.addEventListener("DOMContentLoaded", function() {
    const loginform = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    loginform.addEventListener("submit", function(e) {
        e.preventDefault();
        const username = loginform.username.value;
        const password = loginform.password.value;

        const senha = '123';
        const usuario = 'devito';

        if (username === usuario && password === senha) {
            errorMessage.textContent = "Login bem-sucedido!"
            errorMessage.style.color = "green"
            window.location.href = "home.html";
            DocumentType('ahah')
        } else {
            errorMessage.textContent = "Nome de Usuario ou senha incorreto"
            errorMessage.style.color = "red"
        }
    })
})

var foda = "Bem Vindo ", Usuario
var elemento = document.getElementById("foda");
elemento.innerHTML = foda;

