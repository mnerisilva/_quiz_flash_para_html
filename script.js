const botao_proxima = document.querySelector(".botao-proxima");
const mensagem_abertura = document.querySelector('.mensagem-abertura');

botao_proxima.addEventListener('click', function(){
    mensagem_abertura.classList.add('esconde');
    setInterval(function(){
        mensagem_abertura.classList.add("oculta");
    },1500);
});