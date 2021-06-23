const botao_proxima = document.querySelector(".botao-proxima");
const mensagem_abertura = document.querySelector('.mensagem-abertura');
const questao1 = document.querySelector('.questao-1');
const botao = document.querySelector('.botao');

botao_proxima.addEventListener('click', function(){
    mensagem_abertura.classList.add('esconde');
    setInterval(function(){
        mensagem_abertura.classList.add("retira");
        questao1.classList.remove('retira');
        botao.textContent = 'enviar';
    },1500);
    setInterval(function(){
        questao1.classList.remove("esconde");
    },1500);
});