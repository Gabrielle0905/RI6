"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Soma = void 0;
const Calculo_1 = require("./Calculo");
class Soma extends Calculo_1.Calculo {
    calcular(num1, num2) {
        return num1 + num2;
    }
}
exports.Soma = Soma;
