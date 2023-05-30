function criptografar() {
    var textoEntrada = document.getElementsByClassName("entrada")[0];
    var textoSaida = document.getElementsByClassName("saida")[0];
    
    var novoTexto = textoEntrada.value
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    textoSaida.value = novoTexto;
}
var buttonCripto = document.getElementById("button-cripto");
buttonCripto.onclick = function () {
    criptografar();
    exibirSaidaMensagem();
};

function descriptografar() {
    var textoEntrada = document.getElementsByClassName("entrada")[0];
    var textoSaida = document.getElementsByClassName("saida")[0];
    
    var novoTexto = textoEntrada.value
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    textoSaida.value = novoTexto;
}
var buttonDescripto = document.getElementById("button-descripto");
buttonDescripto.onclick = function () {
    descriptografar();
    exibirSaidaMensagem();
};

function copiarParaAreadeTransferencia() {
    var textoSaida = document.getElementsByClassName("saida")[0];
    var standBy = textoSaida.value;
    
    navigator.clipboard.writeText(standBy)
}
var buttonCopy = document.getElementById("button-copy");
buttonCopy.onclick = copiarParaAreadeTransferencia;

function exibirSaidaMensagem() {
    var buttonCopy = document.getElementById("button-copy");
    buttonCopy.style.display = "block";
    var textoSaida = document.getElementsByClassName("saida")[0];
    textoSaida.style.display = "block";
    var telaInicial = document.getElementsByClassName("tela-inicial")[0];
    telaInicial.style.display = "none";
}