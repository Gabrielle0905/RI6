"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radiciacao = void 0;
const Calculo_1 = require("./Calculo");
class Radiciacao extends Calculo_1.Calculo {
    calcular(num1, num2) {
        return num1 ** (1 / num2);
    }
}
exports.Radiciacao = Radiciacao;
