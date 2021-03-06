
const mensagem_abertura = document.querySelector('.mensagem-abertura');
const botao_proxima = document.querySelector(".botao-proxima");
const questao1 = document.querySelector('.questao-1');
const botao = document.querySelector('.botao');
const op1 = document.querySelector('.op1');
const op2 = document.querySelector('.op2');
const op3 = document.querySelector('.op3');
const op4 = document.querySelector('.op4');
const op5 = document.querySelector('.op5');
const op6 = document.querySelector('.op6');

/*const gabarito1 = op1.querySelector('.select select').dataset.gabarito;
const gabarito2 = op2.querySelector('.select select').dataset.gabarito;
const gabarito3 = op3.querySelector('.select select').dataset.gabarito;
const gabarito4 = op4.querySelector('.select select').dataset.gabarito;
const gabarito5 = op5.querySelector('.select select').dataset.gabarito;
const gabarito6 = op6.querySelector('.select select').dataset.gabarito;*/

const gabarito = ["","4", "3", "1", "6", "5", "2"];
const gabaritoNomes = ["","Albergue", "Hotel", "Pousada", "Apart-Hotel", "Navio de Cruzeiro", "Resort"];


const container_popup_mensagens = document.querySelector('.container-popup-mensagens');
const janela_popup = document.querySelector('.janela-popup');
const cabecalho_popup = janela_popup.querySelector('.cabecalho-popup');
const conteudo_popup = janela_popup.querySelector('.conteudo-popup');
const rodape_popup = janela_popup.querySelector('.rodape-popup');
const fecha_popup = janela_popup.querySelector('.fecha-popup');
const feedback_inline = questao1.querySelectorAll(".feedback-inline");

document.addEventListener("DOMContentLoaded", function(event){
    populaFeedbackInLine();
    escondeFeedbackInLine();
})

let tela = 1;
let questao;

let statusPreenchimento;
botao_proxima.addEventListener('click', function(event){
    if (tela == 1){
        botao_proxima.classList.add('desativa-link');
        mensagem_abertura.classList.add('esconde');
        setInterval(function(){
            mensagem_abertura.classList.add("retira");
            questao1.classList.remove('retira');
            botao.textContent = 'enviar';
        },1500);
        setInterval(function(){
            questao1.classList.remove("esconde");
            botao_proxima.classList.remove('desativa-link');
        },1500);
        tela = tela + 1;
    } else if(tela == 2) {
        questao = 1;
        if(!verificaSeFoiPreenchido(questao)){
            container_popup_mensagens.classList.remove('retira');
            conteudo_popup.innerHTML = '<h3>Voc?? precisa responder ?? todas as quest??es!!!</h3';
            
            setTimeout(function(){
                container_popup_mensagens.classList.remove('esconde');
                return true;
            },.100);
        } else {
            console.log('Gabarito: '+pegaGabarito());
            console.log('Escolhidas: '+pegaEscolhas());
            console.log('Tabela Verdade: '+montaTabelaVerdade());
            verificaAcertos();
        }
    }
});




function populaFeedbackInLine(){
    // trocar for por forEach - forEach funciona em nodeList - n??o funciona em HTMLCollection
    for(let i=0; i < feedback_inline.length; i++){
        feedback_inline[i].innerText = gabarito[i+1]; 
    }
}

function escondeFeedbackInLine(){
    // trocar for por forEach - forEach funciona em nodeList - n??o funciona em HTMLCollection
    for(let i=0; i < feedback_inline.length; i++){
        feedback_inline[i].classList.add('esconde'); 
    }
}

function verificaSeFoiPreenchido(_numQuestao){
    const valoresEscolhidos = [];
    //console.log(_numQuestao);
    const nodeListPreenchidos = document.querySelectorAll('.questao-1 .opcoes .select select')
    let numeroDeOpcoes = nodeListPreenchidos.length;
    let contador = 1;
    // trocar for por forEach - forEach funciona em nodeList - n??o funciona em HTMLCollection
    for (var indiceDaOpcao of nodeListPreenchidos) {
        valoresEscolhidos[contador] = indiceDaOpcao.value;
        contador = contador + 1;
      }
      contador = 1;
      //console.log(valoresEscolhidos);
      return !valoresEscolhidos.includes("0");
}

function pegaGabarito(){
    const arrayGabaritoDataGabarito = [];
    
    const gabaritoDataGabarito = document.querySelectorAll('.op .select select');
    
    gabaritoDataGabarito.forEach(function(item){arrayGabaritoDataGabarito.push(item.dataset.gabarito)});
    
    return arrayGabaritoDataGabarito;    
}

function pegaEscolhas(){
    const arrayEscolhas = [];
    
    const escolhas = document.querySelectorAll('.op .select select');
    
    escolhas.forEach(function(item){arrayEscolhas.push(item.value)});
    
    return arrayEscolhas;
}

function confereEscolhas(){
    // trocar for por forEach - forEach funciona em nodeList - n??o funciona em HTMLCollection
    //for(let i=0; i < feedback_inline.length; i++){
        //feedback_inline[i].classList.add('esconde'); 
   // }
   console.log('executou fun????o "confereEscolhas"');
}

function montaTabelaVerdade(){
    const arrayBoleano = []
    const arrayGabarito = pegaGabarito();
    const arrayEscolhas = pegaEscolhas();


    arrayGabarito.forEach(function(item, index){
            if(item === arrayEscolhas[index]){
                arrayBoleano.push(true)
            } else {            
                arrayBoleano.push(false)
            }
    })
    return arrayBoleano;
}

function verificaAcertos(){
    const statuSAcertos = montaTabelaVerdade();
    statuSAcertos.includes(false);
    console.log('UMA OU MAIS ALTERNATIVAS EST??O INCORRETAS.');    
}

fecha_popup.addEventListener('click', function(event){
    event.preventDefault();
    container_popup_mensagens.classList.add('esconde');
    setTimeout(function(){
        container_popup_mensagens.classList.add('retira');
    },1000);
});