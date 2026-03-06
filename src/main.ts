import * as readline from 'readline'
import { Calculo } from './Calculo';
import { Soma } from './Soma';
import { Subtracao } from './Subtracao';
import { Divisao } from './Divisao';
import { Multiplicacao } from './Multiplicacao';
import { Potenciacao } from './Potenciacao';
import { Radiciacao } from './Radiciacao';
import { Bhaskara } from './Bhaskara';
import { Mensagens } from './mensagem';

let mensagens = new Mensagens()


let iniciar = () =>{
    let leitor = readline.createInterface({
        input:process.stdin,
        output: process.stdout
    });

    leitor.question('Quais os valores deseja utilizar e a operação que deseja realizar?\n', (valor) => {
        let instrucoes = valor.split(' ')
        let num1 = Number(instrucoes[0])
        let num2 = Number(instrucoes[1])
        let num3 = Number(instrucoes[2])
        let operacao = instrucoes.pop()

        if(instrucoes.length == 1){
            operacao = instrucoes[0]
        }

        let calculo: Calculo
        switch (operacao){
            case 'soma':
                calculo = new Soma()
                console.log(`O resultado da operação é ${calculo.calcular(num1,num2)}\n`)
                break
            case 'subtracao':
                calculo = new Subtracao()
                console.log(`O resultado da operação é ${calculo.calcular(num1,num2)}\n`)
                break
            case 'divisao':
                calculo = new Divisao()
                console.log(`O resultado da operação é ${calculo.calcular(num1,num2)}\n`)
                break
            case 'multiplicacao':
                calculo = new Multiplicacao()
                console.log(`O resultado da operação é ${calculo.calcular(num1,num2)}\n`)
                break
            case 'potenciacao':
                calculo = new Potenciacao()
                console.log(`O resultado da operação é ${calculo.calcular(num1,num2)}\n`)
                break
            case 'radiciacao':
                calculo = new Radiciacao()
                console.log(`O resultado da operação é ${calculo.calcular(num1,num2)}\n`)
                break
            case 'bhaskara':
                let a = num1
                let b = num2 
                let c = num3
                let bhaskara = new Bhaskara();
                console.log(bhaskara.calcular(a, b, c));
                break;
            case 'Sair':
                console.log(`Volte sempre que precisar`)
                break
            default:
                console.log(`Operação não entendida`)
        }
        leitor.close()
        if(operacao!= 'Sair'){
            mensagens.comoUsar()
            iniciar()
        }
    })
}

mensagens.boasVindas()
mensagens.listarOpcoes()
mensagens.comoUsar()
iniciar()