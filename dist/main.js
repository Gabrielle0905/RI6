"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
const Soma_1 = require("./Soma");
const Subtracao_1 = require("./Subtracao");
const Divisao_1 = require("./Divisao");
const Multiplicacao_1 = require("./Multiplicacao");
const Potenciacao_1 = require("./Potenciacao");
const Radiciacao_1 = require("./Radiciacao");
const Bhaskara_1 = require("./Bhaskara");
const mensagem_1 = require("./mensagem");
let mensagens = new mensagem_1.Mensagens();
let iniciar = () => {
    let leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    leitor.question('Quais os valores deseja utilizar e a operação que deseja realizar?\n', (valor) => {
        let instrucoes = valor.split(' ');
        let num1 = Number(instrucoes[0]);
        let num2 = Number(instrucoes[1]);
        let num3 = Number(instrucoes[2]);
        let operacao = instrucoes.pop();
        if (instrucoes.length == 1) {
            operacao = instrucoes[0];
        }
        console.log(`Estas foram as instruções: ${instrucoes}\n`);
        let calculo;
        switch (operacao) {
            case 'soma':
                calculo = new Soma_1.Soma();
                console.log(`O resultado da operação é ${calculo.calcular(num1, num2)}\n`);
                break;
            case 'subtracao':
                calculo = new Subtracao_1.Subtracao();
                console.log(`O resultado da operação é ${calculo.calcular(num1, num2)}\n`);
                break;
            case 'divisao':
                calculo = new Divisao_1.Divisao();
                console.log(`O resultado da operação é ${calculo.calcular(num1, num2)}\n`);
                break;
            case 'multiplicacao':
                calculo = new Multiplicacao_1.Multiplicacao();
                console.log(`O resultado da operação é ${calculo.calcular(num1, num2)}\n`);
                break;
            case 'potenciacao':
                calculo = new Potenciacao_1.Potenciacao();
                console.log(`O resultado da operação é ${calculo.calcular(num1, num2)}\n`);
                break;
            case 'radiciacao':
                calculo = new Radiciacao_1.Radiciacao();
                console.log(`O resultado da operação é ${calculo.calcular(num1, num2)}\n`);
                break;
            case 'bhaskara':
                let a = num1;
                let b = num2;
                let c = num3;
                let bhaskara = new Bhaskara_1.Bhaskara();
                console.log(bhaskara.calcular(a, b, c));
                break;
            case 'Sair':
                console.log(`Volte sempre que precisar`);
                break;
            default:
                console.log(`Operação não entendida`);
        }
        leitor.close();
        if (operacao != 'Sair') {
            mensagens.comoUsar();
            iniciar();
        }
    });
};
mensagens.boasVindas();
mensagens.listarOpcoes();
mensagens.comoUsar();
iniciar();
