"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Potenciacao = void 0;
const Calculo_1 = require("./Calculo");
class Potenciacao extends Calculo_1.Calculo {
    calcular(num1, num2) {
        return num1 ** num2;
    }
}
exports.Potenciacao = Potenciacao;
