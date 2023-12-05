function mudarPosicao(){
    const botaoNao = document.querySelector('.escolha2');
    var x = Math.random() * 100;
    var y = Math.random() * 100;
    botaoNao.style.position = "absolute";
    botaoNao.style.right = x + "%";
    botaoNao.style.top = y + "%";
}
