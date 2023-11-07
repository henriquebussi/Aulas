document.addEventListener("DOMContentLoaded", function() {
    const cadastroform = document.getElementById("cadastro-form");
    const errorMessage = document.getElementById("error-message-cadastro");

    cadastroform.addEventListener("submit", function(e) {
        e.preventDefault();
        const passwordconfirm = cadastroform.confirmpassword.value;
        const password = cadastroform.password.value;

        if (password === passwordconfirm) {
            errorMessage.textContent = "Cadastro bem-sucedido!"
            errorMessage.style.color = "green"
        } else {
            errorMessage.textContent = "Senhas estão diferentes"
            errorMessage.style.color = "red"
        }
    })
})