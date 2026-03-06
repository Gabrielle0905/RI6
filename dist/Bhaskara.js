"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bhaskara = void 0;
class Bhaskara {
    calcular(a, b, c) {
        let delta = b ** 2 - 4 * a * c;
        if (delta < 0) {
            return ('Não há raízes reais');
        }
        let raizDelta = delta ** (1 / 2);
        let x1 = (-b + raizDelta) / (2 * a);
        let x2 = (-b - raizDelta) / (2 * a);
        return `x1 = ${x1}, x2 = ${x2}`;
    }
}
exports.Bhaskara = Bhaskara;
