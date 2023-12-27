const prompt = require('prompt-sync')();

function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (saldoVitorias < 10) {
        nivel = 'Ferro';
    } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
        nivel = 'Bronze';
    } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
        nivel = 'Prata';
    } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
        nivel = 'Ouro';
    } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
        nivel = 'Diamante';
    } else if (saldoVitorias > 90 && saldoVitorias <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }

    console.log(`O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`);
}
var vitorias = prompt("digite o numero de vitorias: ");
var derrotas = prompt("digite o numero de derrotas: ");
calcularNivel(vitorias,derrotas);