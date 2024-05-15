// substituindo o h1 com o testo especifico
var titulo = document.querySelector(".titulo");
titulo.textContent = "CETIJDS Nutricionista"

// capturando os dados da tabela
var nomeTd = document.querySelector(".info-nome")

var pesoTd = document.querySelector(".info-peso")
pesoTd.textContent = -8
var peso = pesoTd.textContent

var alturaTd = document.querySelector(".info-altura")
var altura = alturaTd.textContent

var gorduraTd = document.querySelector(".info-gordura")
var imcTd = document.querySelector(".info-imc")


var pesoEhValido = true
var alturaEhValida = true

if(peso<=0 || peso>=1000){
    console.log("peso inválido");
    pesoEhValido = false;
    imcTd.textContent = "Peso inválido";
}

if(altura <=0 || altura>=3){
    console.log("Altura inválida!");
    alturaEhValida = false;
    imcTd.textContent = "Altura inválida!"
}

if(alturaEhValida && pesoEhValido){
    var imc = peso/(altura*altura);
    imcTd.textContent = imc
}

for (var i=0; i<5; i++){
    teste = document.querySelectorAll(".paciente")[0].querySelectorAll("td")[i].textContent
    console.log(teste)
}



var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona")
    
    var nome = form.nome.value
    var peso = form.peso.value
    var altura = form.altura.value
    var gordura = form.gordura.value

    var pacienteTr = document.createElement("tr")

    var nomeTd = document.createElement("td")
    var pesoTd = document.createElement("td")
    var alturaTd = document.createElement("td")
    var gorduraTd = document.createElement("td")
    var imcTd = document.createElement("td")

    console.log(nome, peso, altura, gordura, imc)
})