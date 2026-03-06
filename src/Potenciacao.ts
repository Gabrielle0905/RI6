import { Calculo } from "./Calculo";

export class Potenciacao extends Calculo{
    public calcular(num1: number, num2: number): number {
        return num1 ** num2
    }
}