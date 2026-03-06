import { Calculo } from "./Calculo";

export class Radiciacao extends Calculo{
    public calcular(num1: number, num2: number): number {
        return num1 ** (1/num2)
    }
}