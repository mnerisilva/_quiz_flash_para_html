const botao_proxima = document.querySelector(".botao-proxima");
const mensagem_abertura = document.querySelector('.mensagem-abertura');
const questao1 = document.querySelector('.questao-1');
const botao = document.querySelector('.botao');

let tela = 1;

console.log(tela);

botao_proxima.addEventListener('click', function(event){
    tela += 1;
    console.log(event.target.name)
    console.log(tela);
    if (tela == 2){
        
    }else{
        mensagem_abertura.classList.add('esconde');
        setInterval(function(){
            mensagem_abertura.classList.add("retira");
            questao1.classList.remove('retira');
            botao.textContent = 'enviar';
        },1500);
        setInterval(function(){
            questao1.classList.remove("esconde");
        },1500);
    }
});