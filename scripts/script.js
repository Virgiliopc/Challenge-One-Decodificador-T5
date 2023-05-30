function btnEncriptar() {
    var textEntrada = document.getElementsByClassName("entrada")[0];
    var textSaida = document.getElementsByClassName("saida")[0];

    var newText = textEntrada.value
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    textSaida.value = newText;
}

var btnEncriptar = document.getElementById("btnEncriptar");
btnEncriptar.onclick = function() {
    criptografar();
    exibirSaidaMensagem();
};

function btnDescriptar(){
    var textEntrada = document.getElementsByClassName("entrada")[0];
    var textSaida = document.getElementsByClassName("saida")[0];

    var newText = entrada.value
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    textSaida.value = newText;
}

var btnDesencriptar = document.getElementById("btnDescriptar");
btnEncriptar.onclick = function() {
    descriptografar();
    exibirSaidaMensagem();
};

function copiarParaAreadeTransferencia() {
    var textSaida = document.getElementsByClassName("saida")[0];
    var static = saida.value;

    navigator.clipboard.writeText(static)    
}

var btnCopiar = document.getElementById("btnCopiar");
btnCopiar.onclick = copiarParaAreadeTransferencia;

function exibirSaidaMensagem(){
    var btnCopiar = document.getElementById("btnCopiar");
    btnCopiar.style.display = "block";
    var textSaida = document.getElementsByClassName("saida")[0];
    saida.style.display = "block";
    telaInicial = document.getElementsByClassName("tela-inicial")[0];
    telaInicial.style.display = "none";
}