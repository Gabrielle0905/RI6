"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mensagens = void 0;
class Mensagens {
    constructor() {
        this.listarOpcoes = () => {
            console.log(`O que você pode calcular:`);
            console.log(`Soma, Subtração, Multiplicação, Divisão, Potenciação, Radiciação e Funções do segungo grau\n`);
        };
        this.comoUsar = () => {
            console.log(`Para realizar as operações digite os números e a opção de operação desejada separados por espaço, exemplo: "8 5 soma".`);
            console.log(`O resultado da soma será: 13`);
            console.log(`Caso você deseje efetuar uma função faça da seguinte forma: "3 -5 10 bhaskara"`);
            console.log(`Para sair digite "Sair"\n`);
        };
        this.boasVindas = () => {
            console.log('\nCalculadora polimórfica\n');
        };
    }
}
exports.Mensagens = Mensagens;
