"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Potencia = void 0;
const Calculo_1 = require("./Calculo");
class Potencia extends Calculo_1.Calculo {
    calcular(num1, num2) {
        return num1 ** num2;
    }
}
exports.Potencia = Potencia;
