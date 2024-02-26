

let visorElemento = document.getElementById("visor");
let visor = visorElemento.innerText;
let visor2;
let a;
let b;
let result;
let somando = false;
let subtracao = false;
let dividindo = false;
let multiplicando = false;
let maxdigito = 10;
let ultimodigito = visor[visor.length -1];
let operacao = false;
let continua = false;
let botaosoma = document.querySelector(`.botaosoma`);


function telabranca() {
    if (visorElemento.innerText == '') {
        visorElemento.innerText = 0;

}}

function conferirponto(){
    if(ultimodigito == '.'){ 
        visor = visor.slice(0, -1);
        visorElemento.innerText = visor;
        ultimodigito = visor[visor.length -1];
      }
}

function maxtela(numero) {
    if(visor.length < maxdigito) adicionarnumero(numero);
}

function colocarponto(numero){
    if(!visor.includes('.')){
    if(visor.length < maxdigito) adicionarnumero(numero);
}else{}
}

function apagardig (){

         visor = visor.slice(0, -1);
         visorElemento.innerText = visor;
        telabranca();
        ultimodigito = visor[visor.length -1];
        conferirponto();
    
    }

 function adicionarnumero(numero){
        
        if (somando == true || subtracao == true || dividindo == true || multiplicando == true && operacao == true && continua == true) {
            limpartela();
            operacao = false;
        }    
       if (somando == true || subtracao == true || dividindo == true || multiplicando == true && operacao == false && continua == true) {
            visor = visor.toString();
            visor += numero;
            visorElemento.innerText = visor;
            }  
            else {
            visor += numero;
            visorElemento.innerText = visor;
            ultimodigito = visor[visor.length -1];
}}

function limpartela() {
    visor = visor.toString();
     visor = visor.slice(0, -10);
     visorElemento.innerText = 0;
     telabranca();
     ultimodigito = visor[visor.length -1];


     
}

function soma() {
    if (somando == true && operacao == false) {
        b = parseFloat(visor);
        result = parseFloat(a) + parseFloat(b);
        visorElemento.innerText = result;
        continua = true;
        operacao = true;
        visor2 = visor;
        a = result;
    } else {
    a = visor;
    visor = visor.toString();
    somando = true;
    operacao = true;
    continua = true;
}}

function menos() {
    if (subtracao == true && operacao == false) {
        b = parseFloat(visor);
        result = parseFloat(a) - parseFloat(b);
        visorElemento.innerText = result;
        continua = true;
        operacao = true;
        visor2 = visor;
        a = result;
    } else {
    a = visor;
    visor = visor.toString();
    subtracao = true;
    operacao = true;
    continua = true;
}}

function dividir() {
    if (dividindo == true && operacao == false) {
        b = parseFloat(visor);
        result = parseFloat(a) / parseFloat(b);
        visorElemento.innerText = result;
        continua = true;
        operacao = true;
        visor2 = visor;
        a = result;
    } else {
    a = visor;
    visor = visor.toString();
    dividindo = true;
    operacao = true;
    continua = true;
}}

function multiplicar() {
    if (multiplicando == true && operacao == false) {
        b = parseFloat(visor);
        result = parseFloat(a) * parseFloat(b);
        visorElemento.innerText = result;
        continua = true;
        operacao = true;
        visor2 = visor;
        a = result;
    } else {
    a = visor;
    visor = visor.toString();
    multiplicando = true;
    operacao = true;
    continua = true;
}}

function igual() {
    if (somando == true){
        soma();
        b = 0;
    }
    if (subtracao == true){
        menos();
        b = 0;
    }

    if (dividindo == true){
        dividir();
        b = 0;
    }
    if (multiplicando == true){
        multiplicar();
        b = 0;
    }


}