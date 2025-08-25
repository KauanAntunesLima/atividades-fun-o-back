'use strict'

function calcularMedia(){
    let v1 = parseInt(document.getElementById('n1').value);
    let v2 = parseInt(document.getElementById('n2').value);
    let v3 = parseInt(document.getElementById('n3').value);

    let media = (v1 + v2 + v3) / 3;
    document.getElementById('resultado').innerHTML = media.toFixed(2);
}

function calcularTabuada(){
    let v1 = parseInt(document.getElementById('n1').value);
    let v2 = parseInt(document.getElementById('n2').value);

    let adicao = (v1 + v2);
    document.getElementById('adicao').innerHTML = adicao.toFixed(2);

    let subtracao = (v1 - v2);
    document.getElementById('subtracao').innerHTML = subtracao.toFixed(2);

    let multiplicacao = (v1 * v2);
    document.getElementById('multiplicacao').innerHTML = multiplicacao.toFixed(2);

    let divisao = (v1 / v2);
    document.getElementById('divisao').innerHTML = divisao.toFixed(2);
}